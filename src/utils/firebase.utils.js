import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, OAuthProvider, TwitterAuthProvider } from 'firebase/auth';
import { getFirestore, doc, getDoc, setDoc, collection, writeBatch } from 'firebase/firestore'

const firebaseConfig = {
    // Configuration to firebase app will come here
};

const app = initializeApp(firebaseConfig);


// Providers
const googleProvider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider = new TwitterAuthProvider();

// Custom Parameters
googleProvider.setCustomParameters({
    prompt: 'select_account',
});

facebookProvider.setCustomParameters({
    'display': 'popup'
});


export const auth = getAuth();

// Function for signIn
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithFacebook = () => signInWithPopup(auth, facebookProvider);
export const signInWithTwitter = () => signInWithPopup(auth, twitterProvider);

export const db = getFirestore();

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log('done');
}

export const createUserDocumentFromAuth = async (userAuth, additionalInformation) => {
    if (!userAuth) { return; }
    const userDocRef = doc(db, 'users', userAuth.uid);
    const userSnapshot = await getDoc(userDocRef);

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            await setDoc(userDocRef, { displayName, email, createdAt, ...additionalInformation });
        } catch (error) {
            console.log('Error creating the user', error.message);

        }
    }

    return userDocRef;
}



export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) { return; }
    return await createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) { return; }
    return signInWithEmailAndPassword(auth, email, password);
}

export const signOutUser = async () => await signOut(auth)

export const onAuthStateChangedListner = (callback) => onAuthStateChanged(auth, callback); 
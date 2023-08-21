import React, { useContext } from "react";
import { UserContext } from "../context/user.context";
const admin=require("firebase-admin");
require('dotenv').config();


const credentials=process.env;

const user=useContext(UserContext);

admin.initializeApp(
    {
        credential: admin.credential.cert(credentials)
    }
);
const db=admin.firestore()
export const addData=async(data)=>
{
      if(user==undefined || null)
      {
        return;
      }
      else
      {
        const docRef= await db.collection('case').doc().set(data);
        return docRef;

      }     
      

}
export const readData=async()=>
{
    const docRef = db.collection('case');
    const snapshot = await docRef.get();
    snapshot.forEach(doc => {
        return doc.data();
      });

}

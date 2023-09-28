import bg from "../../assets/grey_bg.png";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
const Fifth = () => {
    const [screenSize, setScreenSize] = useState(window.innerWidth);
    useEffect(() => {
        const updateDimension = () => {
            setScreenSize(window.innerWidth);
        };
        window.addEventListener("resize", updateDimension);
        return () => {
            window.removeEventListener("resize", updateDimension);
        };
    }, [screenSize]);
    if (screenSize > 1200) {
        return (
            <div className="absolute top-[4090px] h-[1024px] w-[100%] ">
                <img
                    src={bg}
                    alt="bg"
                    className="absolute  mt-[148px] ml-[570px]  w-[732px] h-[800px] -z-10"
                />
                <h1 className="w-[887px] h-[58px] ml-[158px] mt-[262px] font-bold text-[80px]">
                    Everything in One Place
                </h1>
                <p className="mt-[75px] ml-[162px] w-[830px] h-[196px] font-medium text-[60px] leading-[70px]">
                    Add your personal notes to any case you’d prefer
                </p>
            </div>
        );
    } else {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <Helmet>
        <title>Contact Us - Valsco</title>
        <meta
          name="description"
          content="Ready to take your business to the next level? Contact Valsco today and discover how our cutting-edge software solutions can empower your success."
        />
        <link rel="canonical" href="/contact" />

        <meta  
        name ="keywords"
        content="Find lawyers for my case"
        
        /><meta  
        name ="keywords"
        content="Family lawyer consultation"
        
        /><meta  
        name ="keywords"
        content="Personal injury lawyer consultation"
        
        /><meta  
        name ="keywords"
        content="Employment law lawyer"
        
        /><meta  
        name ="keywords"
        content="File my case"
        
        /><meta  
        name ="keywords"
        content="How to file a case"
        
        /><meta  
        name ="keywords"
        content="Law consultation"
        
        /><meta  
        name ="keywords"
        content="Legal services online"
        
        /><meta  
        name ="keywords"
        content=""
        
        />
        
        <meta  
        name ="keywords"
        content="Intellectual property lawyer consultation"
        
        />
        
        <meta  
        name ="keywords"
        content="Legal services online"
        
        />
<meta  
        name ="keywords"
        content="Experienced lawyers online"
        
        />
<meta  
        name ="keywords"
        content="Civil case consultation "
        
        />
<meta  
        name ="keywords"
        content="Legal procedure consultation"
        
        />
<meta  
        name ="keywords"
        content="Business lawyer consultation"
        
        />
<meta  
        name ="keywords"
        content="Lawyer near me"
        
        />

<meta  
        name ="keywords"
        content="Family lawyers near me"
        
        />
        <meta  
        name ="keywords"
        content="Law consultations near me"
        
        />
        <meta  
        name ="keywords"
        content="Affordable Law consultation"
        
        />
        <meta  
        name ="keywords"
        content="Legal professionals community online"
        
        />
        <meta  
        name ="keywords"
        content="Websites for lawyers"
        
        />
        <meta  
        name ="keywords"
        content="Online Community for lawyers"
        
        />
        <meta  
        name ="keywords"
        content="EXECELLENCE"
        
        />
        
         <meta  
        name ="keywords"
        content="EXPERIENCE"
        
        /> 
        
        
        <meta  
        name ="keywords"
        content="INTEGRITY"
        
        />
      </Helmet>
                <div className="flex flex-col items-center justify-center">
                    <h1 className=" text-6xl font-bold text-center text-black">
                        Everything in One Place
                    </h1>
                    <p className="mt-5 text-2xl font-medium text-center text-black">
                        Add your personal notes to any case you’d prefer
                    </p>
                </div>
            </div>
        );
    }
};

export default Fifth;

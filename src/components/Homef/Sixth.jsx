import {
    AiOutlineLine,
    AiOutlineArrowRight,
    AiOutlineArrowLeft,
} from "react-icons/ai";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const Sixth = () => {
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
            <div className="absolute top-[5114px] bg-black text-white h-[1024px] w-full   ">
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
                <h1 className="absolute mt-[188px] ml-[162px] w-[875px] h-[196px] font-medium text-[30px] leading-[70px]">
                    What our clients say?
                </h1>
                <p className="absolute w-[774px] h-[371px] ml-[504px] mt-[188px]  font-normal text-[30px] leading-[70px]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    nec tristique lacus. Cras et nisi sed mi auctor semper. Sed
                    gravida facilisis nibh, vel convallis lectus. Fusce
                    elementum dapibus odio, ut finibus mauris dignissim id.
                    Mauris dignissim aliquam dui, vitae tincidunt lorem. Nullam
                    ac ullamcorper mi.
                </p>
                <h2 className="absolute mt-[640px] ml-[504px] text-[30px] text-[#fafafab3] font-medium">
                    <AiOutlineLine className="inline" width={25} /> Richard
                </h2>
                <div className="ml-[492px] mt-[765px] text-[30px] font-medium">
                    <a href="">
                        Learn More <AiOutlineArrowRight className="inline" />
                    </a>
                    <span className="ml-[515px]">
                        <AiOutlineArrowLeft className="inline" />

                        <AiOutlineArrowRight className="inline ml-[64px]" />
                    </span>
                </div>
            </div>
        );
    } else {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-black">
                <div className="flex flex-col items-center justify-center">
                    <h1 className=" text-6xl font-bold text-center text-white">
                        What our clients say?
                    </h1>
                    <p className="mt-5 text-2xl font-medium text-center text-white">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed nec tristique lacus. Cras et nisi sed mi auctor
                        semper. Sed gravida facilisis nibh, vel convallis
                        lectus. Fusce elementum dapibus odio, ut finibus mauris
                        dignissim id. Mauris dignissim aliquam dui, vitae
                        tincidunt lorem. Nullam ac ullamcorper mi.
                    </p>
                    <h2 className="mt-5 text-2xl font-medium text-center text-white">
                        <AiOutlineLine className="inline" width={25} /> Richard
                    </h2>
                    <div className="flex flex-row items-center justify-center mt-5 text-2xl font-medium text-center text-white">
                        <a href="">
                            Learn More{" "}
                            <AiOutlineArrowRight className="inline" />
                        </a>
                        <span className="ml-5">
                            <AiOutlineArrowLeft className="inline" />

                            <AiOutlineArrowRight className="inline ml-5" />
                        </span>
                    </div>
                </div>
            </div>
        );
    }
};

export default Sixth;

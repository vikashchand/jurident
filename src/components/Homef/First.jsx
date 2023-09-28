import bg from "../../assets/grey_bg.png";
import { useEffect, useState } from "react";
import { GrLocation } from "react-icons/gr";

const First = () => {
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
            <div>
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
                <img
                    src={bg}
                    alt="bg"
                    className="absolute ml-[546px]  w-[732px] h-[800px]"
                />
                <div className="absolute h-[100%] w-[100%]">
                    <h1 className=" w-[406px] h-[74px] text-[100px] font-[Satoshi] ml-[163px] mt-[173px] font-black leading-[135px]">
                        Jurident
                    </h1>
                    <h2 className="mt-[79px] ml-[158px] w-[773px] h-[164px] font-[Satoshi] font-bold text-[80px] leading-[108px]">
                        Empowering Justice,
                        <br />
                        Protecting Rights
                    </h2>
                    <div className="mt-[103px] w-[769px] h-[125px] ml-[161px] box-border bg-[#D9D9D9] border border-solid border-black">
                        <div className="pt-[30px] pl-[49px]">
                            <GrLocation
                                className=" inline "
                                width={20}
                                height={25}
                            />
                            <h3 className="w-[196px] h-[19px] ml-[46px] md-[50px] font-[Satoshi] underline  underline-offset-[14px] inline p-4 text-[26px] font-medium ">
                                Search for a city
                            </h3>
                            <button className=" ml-[159px] w-[239px] h-[50px] border-2 border-black rounded-md">
                                Detect Location
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-6xl font-bold text-center text-gray-800">
                        Jurident
                    </h1>
                    <h2 className="mt-4 text-xl font-semibold text-center text-gray-800">
                        Empowering Justice, Protecting Rights
                    </h2>
                    <div className="flex items-center justify-center mt-8 space-x-4">
                        <div className="flex items-center justify-center w-75 h-16 border-2 border-gray-800 rounded-md">
                            <GrLocation className="w-6 h-6" />
                            <h3 className="ml-4 text-xl font-medium text-gray-800">
                                Search for a city
                            </h3>
                        </div>
                        <button className="px-4 py-2 text-md font-medium text-gray-800 border-2 border-gray-800 rounded-md">
                            Detect Location
                        </button>
                    </div>
                </div>
            </div>
        );
    }
};

export default First;

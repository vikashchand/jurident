import { Link } from "react-router-dom";
import { GrTwitter, GrFacebook, GrInstagram } from "react-icons/gr";
import { useEffect, useState } from "react";

const Footer = () => {
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
            <div className="absolute top-[6138px] h-[900px] w-[100%]">
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
                <h1 className="w-[202px] h-[30px] ml-[162px] mt-[145px] text-[40px] font-bold">
                    JURIDENT
                </h1>
                <div className="grid grid-cols-3 ml-[160px] mt-[87px]">
                    <ul className="text-[30px]">
                        <li>
                            <Link to="/">Our Services</Link>
                        </li>
                        <li className=" mt-6">
                            <Link to="/">News</Link>
                        </li>
                        <li className=" mt-6">
                            <Link to="/">Blog</Link>
                        </li>
                        <li className=" mt-6">
                            <Link to="/">Terms and Conditions</Link>
                        </li>
                        <li className=" mt-6">
                            <Link to="/">Privacy Policy</Link>
                        </li>
                        <li className=" mt-6">
                            <Link to="/">Support</Link>
                        </li>
                        <li className=" mt-6">
                            <Link to="/Contact">Contact us</Link>
                        </li>
                    </ul>
                    <div className="ml-[100px]">
                        <h3 className="text-[30px]  ">Social Media</h3>
                        <div className="mt-[30px] flex">
                            <GrTwitter size={25} className="mr-[35px]" />
                            <GrFacebook size={25} className="mr-[35px]" />
                            <GrInstagram size={25} />
                        </div>
                        <h3 className="mt-[60px] text-[30px]">Phone</h3>
                        <ul className="text-[25px] font-medium">
                            <li className="mt-[21px]">044-27390135</li>
                            <li className="mt-[12px]">9877870012</li>
                        </ul>
                    </div>
                    <div className="ml-[30px] mt-[160px]">
                        <h3 className="text-[30px]">E-Mail</h3>
                        <a
                            href="mailto:lorem@gmail.com"
                            className=" text-[25px]"
                        >
                            lorem@gmail.com
                        </a>
                        <h3 className="mt-[50px] text-[30px]">Support</h3>
                        <a
                            href="mailto:Support.lorem@gmail.com"
                            className=" text-[25px]"
                        >
                            lorem@gmail.com
                        </a>
                    </div>
                </div>
                <div className="ml-[161px] mt-[50px] w-[1117px] border border-black"></div>
                <div className="text-[30px] mt-[30px]">
                    <h3 className="inline font-light ml-[160px]">
                        Copyrights{" "}
                    </h3>
                    <h3 className="inline mr-[190px] float-right">India</h3>
                </div>
            </div>
        );
    } else {
        return (
            <div className="absolute  h-[900px] w-[100%]">
                <h1 className="w-[202px] h-[30px] ml-[150px] mt-[145px] text-[40px] font-bold">
                    JURIDENT
                </h1>
                <div className="grid grid-cols-1  ml-[100px] mt-[87px]">
                    <ul className="text-[30px] md:text-[20px]">
                        <li>
                            <Link to="/">Our Services</Link>
                        </li>
                        <li className=" mt-3 md:mt-4">
                            <Link to="/">News</Link>
                        </li>
                        <li className=" mt-3 md:mt-4">
                            <Link to="/">Blog</Link>
                        </li>
                        <li className=" mt-3 md:mt-4">
                            <Link to="/">Terms and Conditions</Link>
                        </li>
                        <li className=" mt-3 md:mt-4">
                            <Link to="/">Privacy Policy</Link>
                        </li>
                        <li className=" mt-3 md:mt-4">
                            <Link to="/">Support</Link>
                        </li>
                        <li className=" mt-3 md:mt-4">
                            <Link to="/">Contact us</Link>
                        </li>
                    </ul>
                    <div className="ml-0 md:ml-[100px] mt-[60px] md:mt-0">
                        <h3 className="text-[30px] md:text-[20px]">
                            Social Media
                        </h3>
                        <div className="mt-[30px] flex">
                            <GrTwitter size={25} className="mr-[35px]" />
                            <GrFacebook size={25} className="mr-[35px]" />
                            <GrInstagram size={25} />
                        </div>
                        <h3 className="mt-[60px] text-[30px] md:text-[20px]">
                            Phone
                        </h3>
                        <ul className="text-[25px] md:text-[18px] font-medium">
                            <li className="mt-[21px] md:mt-[12px]">
                                044-27390135
                            </li>
                            <li className="mt-[12px] md:mt-[6px]">
                                9877870012
                            </li>
                        </ul>
                    </div>
                    <div className="ml-0 md:ml-[30px] mt-[60px] md:mt-0">
                        <h3 className="text-[30px] md:text-[20px]">E-Mail</h3>
                        <a
                            href="mailto:lorem@gmail.com"
                            className=" text-[25px] md:text-[18px]"
                        >
                            lorem@gmail.com
                        </a>
                        <h3 className="mt-[50px] text-[30px] md:text-[20px]">
                            Support
                        </h3>
                        <a
                            href="mailto:Support.lorem@gmail.com"
                            className=" text-[25px] md:text-[18px]"
                        >
                            lorem@gmail.com
                        </a>
                    </div>
                </div>

                <div className="text-[30px] mt-[30px]">
                    <h3 className="inline font-light ml-[100px] md:ml-0">
                        Copyrights{" "}
                       
                    </h3>
                    <h3> <br></br>
                    India</h3>
                    
                </div>
            </div>
        );
    }
};

export default Footer;

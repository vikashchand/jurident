import { Link } from "react-router-dom";
import { GrTwitter, GrFacebook, GrInstagram } from "react-icons/gr";

const Footer = () => {
    return (
        <div className="absolute top-[6138px] h-[900px] w-[100%]">
            <h1 className="w-[202px] h-[30px] ml-[162px] mt-[145px] text-[40px] font-bold">
                JURIDENT
            </h1>
            <div className="grid grid-cols-3 ml-[160px] mt-[87px]">
                <ul className="text-[30px]">
                    <li>
                        <Link to="/Services">Our Services</Link>
                    </li>
                    <li className=" mt-6">
                        <Link to="/News">News</Link>
                    </li>
                    <li className=" mt-6">
                        <Link to="/Blogs">Blog</Link>
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
                    <a href="mailto:lorem@gmail.com" className=" text-[25px]">
                        lorem@gmail.com
                    </a>
                    <h3 className="mt-[50px] text-[30px]">Support</h3>
                    <a
                        href="mailto:Support.lorem@gmail.com"
                        className=" text-[25px]"
                    >
                        Support.lorem@gmail.com
                    </a>
                </div>
            </div>
            <div className="ml-[161px] mt-[50px] w-[1117px] border border-black"></div>
            <div className="text-[30px] mt-[30px]">
                <h3 className="inline font-light ml-[160px]">Copyrights </h3>
                <h3 className="inline mr-[190px] float-right">India</h3>
            </div>
        </div>
    );
};

export default Footer;

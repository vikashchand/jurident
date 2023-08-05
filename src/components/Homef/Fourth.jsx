import bg from "../../assets/grey_bg.png";
import { useEffect, useState } from "react";

const Fourth = () => {
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
    if (screenSize > 1280) {
        return (
            <div className="absolute top-[3066px] bg-black text-white h-[1024px] w-full z-0 ">
                <img
                    src={bg}
                    alt="bg"
                    className="absolute  mt-[112px] ml-[158px]  w-[732px] h-[800px] -z-10"
                />
                <h1 className="w-[530px] h-[58px] ml-[529px] mt-[302px] font-bold text-[80px]">
                    <span className="text-black">Never Be</span> Late
                </h1>
                <p className="mt-[75px] ml-[529px] w-[875px] h-[196px] font-medium text-[60px] leading-[70px]">
                    <span className="text-black">Our alarm sys</span>tem
                    integrated
                    <span className="text-black"> within the app</span> will
                    notify you of{" "}
                    <span className="text-black">any upcoming</span> events.
                </p>
            </div>
        );
    } else {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-black">
                <div className="flex flex-col items-center justify-center">
                    <h1 className=" text-6xl font-bold text-center text-white">
                        Never Be Late
                    </h1>
                    <p className="mt-5 text-2xl font-medium text-center text-white">
                        Our alarm system integrated within the app will notify
                        you of any upcoming events.
                    </p>
                </div>
            </div>
        );
    }
};

export default Fourth;

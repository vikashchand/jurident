import bg from "../../assets/grey_bg.png";
import { useEffect, useState } from "react";

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
    if (screenSize > 1280) {
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

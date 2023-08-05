import bg from "../../assets/grey_bg.png";

import { useEffect, useState } from "react";
const Third = () => {
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
            <div className="absolute top-[2036px] h-[1024px] w-[100%] ">
                <img
                    src={bg}
                    alt="bg"
                    className="absolute  mt-[148px] ml-[570px]  w-[732px] h-[800px] -z-10"
                />
                <h1 className="w-[566px] h-[58px] ml-[158px] mt-[302px] font-bold text-[80px]">
                    Stay Organised
                </h1>
                <p className="mt-[75px] ml-[162px] w-[862px] h-[196px] font-medium text-[60px] leading-[70px]">
                    Ensure that your schedule is accurate by entering new
                    appointments or events into our digital calendar.
                </p>
            </div>
        );
    } else {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
                <div className="flex flex-col items-center justify-center">
                    <h1 className=" text-6xl font-bold text-center text-black">
                        Stay Organised
                    </h1>
                    <p className="mt-5 text-2xl font-medium text-center text-black">
                        Ensure that your schedule is accurate by entering new
                        appointments or events into our digital calendar.
                    </p>
                </div>
            </div>
        );
    }
};

export default Third;

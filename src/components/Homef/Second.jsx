import bg from "../../assets/grey_bg.png";
import { useEffect, useState } from "react";

const Second = () => {
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
            <div className="absolute bg-black top-[1018px] h-[1024px] w-full text-white ">
                <img
                    src={bg}
                    alt="bg"
                    className="absolute  mt-[365px] ml-[936px]  w-[343px] h-[274px]"
                />
                <p className="mt-[252px] ml-[160px] w-[773px] h-[520px] font-bold text-[80px]">
                    Masters of Law in Every Dimension: Jurident, Your
                    All-Inclusive Legal Services
                </p>
            </div>
        );
    } else {
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-black">
                <div className="flex flex-col items-center justify-center">
                    <h1 className=" text-6xl font-bold text-center text-white">
                        Masters of Law in Every Dimension: Jurident, Your
                        All-Inclusive Legal Services
                    </h1>
                </div>
            </div>
        );
    }
};

export default Second;

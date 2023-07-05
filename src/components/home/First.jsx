import bg from "../../assets/grey_bg.png"
import { GrLocation } from "react-icons/gr";

const First = () => {
    return (
        <div>
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
};

export default First;



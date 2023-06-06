import {
    AiOutlineLine,
    AiOutlineArrowRight,
    AiOutlineArrowLeft,
} from "react-icons/ai";

const Sixth = () => {
    return (
        <div className="absolute top-[5114px] bg-black text-white h-[1024px] w-full   ">
            <h1 className="absolute mt-[188px] ml-[162px] w-[875px] h-[196px] font-medium text-[30px] leading-[70px]">
                What our clients say?
            </h1>
            <p className="absolute w-[774px] h-[371px] ml-[504px] mt-[188px]  font-normal text-[30px] leading-[70px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
                tristique lacus. Cras et nisi sed mi auctor semper. Sed gravida
                facilisis nibh, vel convallis lectus. Fusce elementum dapibus
                odio, ut finibus mauris dignissim id. Mauris dignissim aliquam
                dui, vitae tincidunt lorem. Nullam ac ullamcorper mi.
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
};

export default Sixth;

import React from "react";
import FormChangePassword from "./ChangePassBox";
import ProfileBox from "./ProfileBox";
const ChangePass_Page = () => {
  return (
    <>
      <header className="bg-white border-b border-black text-center text-black">
        <h1 className="text-2xl py-4">Your Header Text</h1>
      </header>
      <div className="flex w-screen space-x-20 justify-center">
        <div className="w-3/10">
          <ProfileBox />
        </div>
        <div className="w-7/10 ">
          <FormChangePassword />
        </div>
      </div>
    </>
  );
};
export default ChangePass_Page;

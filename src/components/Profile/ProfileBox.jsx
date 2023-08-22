import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import ReactSwitch from "react-switch";




const ProfileBox = () => {


  const [checkedTheme, setTheme] = useState(false);
  const [checkedNotification, setNotification] = useState(false);
  const handleChangeMode = (val) => {
    setTheme(val);
  };

  const handleChangeNotification = (val) => {
    setNotification(val);
  };

 

  return (
    
    <div className="p-5 w-full bg-zinc-300  rounded-lg shadow-lg">
     
      <div className="flex flex-col space-y-0 justify-center items-center w-full py-2 border-b border-white ">

      <div className="w-20 h-20 bg-gray-300 rounded-full overflow-hidden item-center">
    <img src="https://cdn.coingape.com/wp-content/uploads/2023/06/10234102/Cynthia-Lummis-bitcoin.webp" alt="Profile" className="w-full h-full object-cover" />
     </div>

        <h2 className="text-2xl text-zinc-500 font-bold text-center m-0 p-0 ">
          Chris Lewis
        </h2>
        <p className="text-lg text-zinc-500 text-center mb-4">
          Software Developer
        </p>
      </div>
      <div className="font-mono border-b border-white font-bold">
        <div className="w-full flex justify-between mb-2 mt-1 ">
          <h2>Language</h2>
          <h2>En</h2>
        </div>
        <div className="w-full flex justify-between mb-2">
        <Link to={{ pathname: '/profile/terms' }}>
          <h2>Terms and Condition</h2>
          </Link>
        </div>
        <div className="w-full flex justify-between mb-2">
        <Link to={{ pathname: '/profile/about' }}>
          <h2>About us</h2>
          </Link>
        </div>
        <div className="w-full flex justify-between mb-2">
          <h2>DarkMode</h2>
          <ReactSwitch
            checked={checkedTheme}
            onChange={handleChangeMode}
            onColor="#86d3ff"
            height={20}
            handleDiameter={20}
          />
        </div>
        <div className="w-full flex justify-between mb-2">
          <h2>Notification</h2>
          <ReactSwitch
            checked={checkedNotification}
            onChange={handleChangeNotification}
            onColor="#86d3ff"
            height={20}
            handleDiameter={20}
          />
        </div>
        <div className="w-full flex justify-between mb-2">
          <h2>Contact Us</h2>
        </div>

        <div className="w-full flex justify-between mb-2">
          <h2>Support Chat</h2>
        </div>
        <div className="w-full flex justify-between mb-2">
          <h2>FAQ</h2>
        </div>
        <div className="w-full flex justify-between mb-2">
          <h2>Feedback Page</h2>
        </div>
      </div>
      
    </div>
    
  );


};

export default ProfileBox;

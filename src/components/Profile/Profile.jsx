import React, { useLayoutEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import ProfileBox from './ProfileBox'
export const Profile = () => {
  const FormBox =()=>
  {
    const navigate=useNavigate();
    const [data,setData]=useState({
      name: "Demo",
      id: "Demo123",
    degree: "",
    email:"xyz@gmail.com",
    phonenumber:"xxxxxxxxxxx"
    })
    


    const handleChange = (e) => {
      setData({...data, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
      // You can access the password values from the passwords object
      console.log(passwords);
     
    };
    const ChangePassword = () => {
      console.log("Edit profile clicked");
      navigate('/profile/changepassword')
    };
    const SaveChanges = () => {
      console.log("Save Changes clicked");
     //query the background and add the new data
     //backend query goes here
    };
    const DiscardChanges = () => {
      console.log("Discard Changes  clicked");
      window.location.reload();
    };
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
        setData({...data,[e.target.name]: e.target.value});
    };
    return (
      <>
        <div className="w-full  bg-zinc-200 p-5 rounded-lg shadow-lg font-mono flex flex-col justify-center">
          <div><h2 className="font-bold mb-1">{`Home>Profile`}</h2></div>
          <form className ="w-full">
            <div className="w-full mb-2">
              <label
                htmlFor="Name"
                className="block text-gray-700 font-semibold"
              >
                Lawyer Name
              </label>
              <input
                type="text"
                id="nameid"
                name="name"
                className="w-full p-2 border-2 border-black rounded-md"
                value={data.name}
                onChange={handleChange}
              />
              <div className="flex justify-between w-full">
                <p>Hint</p>
                <p>0/32</p>
              </div>
            </div>
            <div className="w-full mb-2">
              <label
                htmlFor="ID"
                className="block text-gray-700 font-semibold"
              >
               Lawyer ID
              </label>
              <input
                type="text"
                id="lid"
                name="id"
                className="w-full p-2 border-2 border-black rounded-md"
                value={data.id}
                onChange={handleChange}
              />
              <div className="flex justify-between w-full">
                <p>Hint</p>
                <p>0/32</p>
              </div>
            </div>

            <div className="w-full mb-2">
            <label htmlFor="lawDegree" className="block text-gray-700 font-bold mb-2">Law Degree</label>
            <select
                id="lawDegree"
                name="degree"
                value={selectedOption}
                onChange={handleOptionChange}
                className="w-full bg-white border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
                <option value="">Select an option</option>
                <option value="BSc">BSc</option>
                <option value="LLB">LLB</option>
                <option value="BCom">BCom</option>
            </select>
        </div>

            <div className="mb-2 ">
              <label
                htmlFor="email"
                className="block text-gray-700 font-semibold"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border-2 border-black rounded-md"
                value={data.email}
                onChange={handleChange}
              />
              <div className="flex justify-between w-full">
                <p>Hint</p>
                <p>0/32</p>
              </div>
            </div>
            <div className="mb-2 ">
              <label
                htmlFor="phonenumber"
                className="block text-gray-700 font-semibold"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phonenumber"
                name="phonenumber"
                className="w-full p-2 border-2 border-black rounded-md"
                value={data.phonenumber}
                onChange={handleChange}
              />
              <div className="flex justify-between w-full">
                <p>Hint</p>
                <p>0/32</p>
              </div>
            </div>
          </form>
        </div>
        {/* all the  buttons section */}
        <div className=" w-full mt-10 flex flex-col justify-center items-center space-y-8 font-mono sm:m-0">
          <button
            className="bg-white border-2 mt-5 border-black text-black px-4 py-2 rounded-md w-66 font-bold hover:bg-black hover:text-slate-800"
            onClick={ChangePassword}
          >
            Change Password
          </button>
          <button
            className="bg-white border-2 border-black text-black px-4 py-2 rounded-md w-66 font-bold hover:bg-black hover:text-slate-800"
            onClick={SaveChanges}
          >
            Save Changes
          </button>
          <button
            className="bg-white border-2 border-black text-black px-4 py-2 rounded-md w-66 font-bold hover:bg-black hover:text-slate-800"
            onClick={DiscardChanges}
          >
            Discard Changes
          </button>
        </div>
      </>
    )
  };

  //use the form Section in herer

  
  return (
    <>
      <div className='flex flex-wrap justify-center  mt-5 mx-5 lg:space-x-20'>
    
    <div className="lg:w-1/3 sm:w-full mb-4 lg:mb-0  ">
        <ProfileBox />
    </div>

    <div className="lg:w-1/2  sm:w-full mb-4">
       <FormBox/>
    </div>
</div>
    </>
  )
}


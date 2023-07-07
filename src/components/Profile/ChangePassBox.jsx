import React from "react";
import { useState } from "react";

const ChangePassBox = () => {
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  });

  const handleChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    // You can access the password values from the passwords object
    console.log(passwords);
  };
  const EditProfile = () => {
    console.log("Edit profile clicked");
  };
  const SaveChanges = () => {
    console.log("Save Changes clicked");
  };
  const DiscardChanges = () => {
    console.log("Discard Changes  clicked");
  };
  return (
    <>
      <div className="w-full m-10 bg-zinc-200 p-6 rounded-lg shadow-lg font-mono">
        <h2 className="font-bold mb-1">Change Password</h2>
        <p className=" text-zinc-400 mb-1">
          Please Note Changing password would require again login to app
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label
              htmlFor="currentPassword"
              className="block text-gray-700 font-semibold"
            >
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              name="currentPassword"
              className="w-full p-2 border-2 border-black rounded-md"
              value={passwords.currentPassword}
              onChange={handleChange}
            />
            <div className="flex justify-between w-full">
              <p>Hint</p>
              <p>0/32</p>
            </div>
          </div>
          <div className="mb-2">
            <label
              htmlFor="newPassword"
              className="block text-gray-700 font-semibold"
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              name="newPassword"
              className="w-full p-2 border-2 border-black rounded-md"
              value={passwords.newPassword}
              onChange={handleChange}
            />
            <div className="flex justify-between w-full">
              <p>Hint</p>
              <p>0/32</p>
            </div>
          </div>
          <div className="mb-2">
            <label
              htmlFor="confirmNewPassword"
              className="block text-gray-700 font-semibold"
            >
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmNewPassword"
              name="confirmNewPassword"
              className="w-full p-2 border-2 border-black rounded-md"
              value={passwords.confirmNewPassword}
              onChange={handleChange}
            />
            <div className="flex justify-between w-full">
              <p>Hint</p>
              <p>0/32</p>
            </div>
          </div>
        </form>
      </div>
      <div className=" w-full m-10 flex flex-col justify-center items-center space-y-8 font-mono">
        <button
          className="bg-white border-2  border-black text-black px-4 py-2 rounded-md w-44 font-bold hover:bg-black hover:text-white"
          onClick={EditProfile}
        >
          Edit Profile
        </button>
        <button
          className="bg-white border-2 border-black text-black px-4 py-2 rounded-md w-44 font-bold hover:bg-black hover:text-white"
          onClick={SaveChanges}
        >
          Save Changes
        </button>
        <button
          className="bg-white border-2 border-black text-black px-4 py-2 rounded-md w-44 font-bold hover:bg-black hover:text-white"
          onClick={DiscardChanges}
        >
          Discard Changes
        </button>
      </div>
    </>
  );
};
export default ChangePassBox;

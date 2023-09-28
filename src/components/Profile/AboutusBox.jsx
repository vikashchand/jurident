import React from 'react'
import { useNavigate } from 'react-router-dom'
const AboutusBox = () => {
  const navigate=useNavigate();
  const Navigate_to_profile=()=>
  {
        navigate('/profile');
  }
  return (
    <>
    
      <div className="w-full rounded-lg shadow-lg bg-zinc-300 ">
        <div className="p-5">
        <h2 className="text-2xl text-zinc-500 font-bold  mb-10 p-0 ">
          About Us
        </h2>
        <h3 className='text-xl text-zinc-500 font-bold  mb-1 p-0'>VISION</h3>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi laboriosam, accusamus minima id odit earum, labore rerum totam sed voluptatum vero perspiciatis, eum perferendis architecto consequuntur cupiditate aperiam harum ut?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, non blanditiis consectetur commodi veniam consequuntur dolorum incidunt? Quam velit deleniti iure officiis tempora ipsam, doloribus corporis, magni et nam ratione.
            </p>
         <h3  className='text-xl text-zinc-500 font-bold  mb-1 p-0'>GOAL</h3>
         <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi laboriosam, accusamus minima id odit earum, labore rerum totam sed voluptatum vero perspiciatis, eum perferendis architecto consequuntur cupiditate aperiam harum ut?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, non blanditiis consectetur commodi veniam consequuntur dolorum incidunt? Quam velit deleniti iure officiis tempora ipsam, doloribus corporis, magni et nam ratione.
            </p>
        
            <div className="flex justify-center">
            <button
          className="bg-white border-2 border-black text-black px-4 py-2 rounded-md w-66 font-bold hover:bg-black hover:text-slate-800 mt-5"
          onClick={Navigate_to_profile}
        >
         GO TO PROFILE PAGE
        </button>
        </div>
        </div>
       
      </div>
    </>
  )
}

export default AboutusBox

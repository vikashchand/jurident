import React from 'react'
import ProfileBox from './ProfileBox'
import { useNavigate } from 'react-router-dom'
import { Helmet } from "react-helmet-async";
export const Terms_and_Condition=()=>
{
    const TermsBox=()=>
    {
        const navigate=useNavigate();
  const Navigate_to_profile=()=>
  {
        navigate('/profile');
  }
        return (
            <>
            <Helmet>
        <title>Contact Us - Valsco</title>
        <meta
          name="description"
          content="Ready to take your business to the next level? Contact Valsco today and discover how our cutting-edge software solutions can empower your success."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
      <div className="w-full rounded-lg shadow-lg bg-zinc-300 ">
        <div className="p-5">
        <h2 className="text-2xl text-zinc-500 font-bold  mb-5 p-0 ">
          Terms
        </h2>
        <h3 className='text-xl text-zinc-500 font-bold  mb-1 p-0'>1. TERM AND CONDITION</h3>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi laboriosam, accusamus minima id odit earum, labore rerum totam sed voluptatum vero perspiciatis, eum perferendis architecto consequuntur cupiditate aperiam harum ut?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, non blanditiis consectetur commodi veniam consequuntur dolorum incidunt? Quam velit deleniti iure officiis tempora ipsam, doloribus corporis, magni et nam ratione.
            </p>
         <h3  className='text-xl text-zinc-500 font-bold mt-1 mb-1 p-0'>2. PRIVACY POLICY</h3>
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
    return (
        <div className='flex flex-wrap justify-center mt-5 mx-5 lg:space-x-20'>
    
        <div className="lg:w-1/3 sm:w-full mb-4 lg:mb-0 ">
            <ProfileBox />
        </div>
    
        <div className="lg:w-1/2  sm:w-full mb-4">
           <TermsBox/>
        </div>
    </div>
    );
}
import React from 'react'
import profile from '../assets/profile.png'
import bell from '../assets/bell.svg'

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between">

        <button className="font-bold text-2xl">
          JURIDENT    
        </button> 

        <div className="flex md:space-x-36">

          <button className="py-1">
            Services
          </button>

          <button className="py-1">
            News
          </button>

          <button className="py-1">
            About us
          </button>

        </div>

        <div className="flex md:space-x-14 mr-[5%]">
          <button>
            <img src = {profile} alt = "profile" className="w-10 h-10 rounded-full" />
          </button>
          <button>
            <img src = {bell} alt = "profile" className="w-10 h-10 rounded-full" />
          </button>
        </div>


      </div>


      <hr class="h-px my-8 mr-[20%] md:mr-[5%] bg-gray-200 border-0 dark:bg-gray-700" />


    </>
  )
}

export default Navbar

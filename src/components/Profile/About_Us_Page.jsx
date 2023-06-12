import React from 'react'
import AboutusBox from './AboutusBox'
import Navbar from './Navbar'
import ProfileBox from './ProfileBox'

const About_Us_Page = () => {
  return (
    <div>
        
        <nav className="ml-28 mt-16">
            <Navbar />
        </nav>

        <div className="float-right mr-[5%] mt-[5%]">
            <AboutusBox />
        </div>

        <div className="w-[30%] mt-[5%] block">
            <ProfileBox />
        </div>

    </div>
  )
}

export default About_Us_Page

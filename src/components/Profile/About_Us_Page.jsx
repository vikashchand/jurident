import React from 'react'
import AboutusBox from './AboutusBox'
<<<<<<< HEAD

=======
import Navbar from './Navbar'
>>>>>>> e2d7ba34e92704af3e995648f87cee53bac263d6
import ProfileBox from './ProfileBox'

const About_Us_Page = () => {
  return (
    <div>
        
<<<<<<< HEAD
     
        <div className="float-right mr-[5%] mt-[0%]">
=======
        <nav className="ml-28 mt-16">
            <Navbar />
        </nav>

        <div className="float-right mr-[5%] mt-[5%]">
>>>>>>> e2d7ba34e92704af3e995648f87cee53bac263d6
            <AboutusBox />
        </div>

        <div className="w-[30%] mt-[5%] block">
            <ProfileBox />
        </div>

    </div>
  )
}

export default About_Us_Page

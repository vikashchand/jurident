import React from 'react'
import AboutusBox from './AboutusBox'

import ProfileBox from './ProfileBox'

const About_Us_Page = () => {
  return (
    <div>
        
     
        <div className="float-right mr-[5%] mt-[0%]">
            <AboutusBox />
        </div>

        <div className="w-[30%] mt-[5%] block">
            <ProfileBox />
        </div>

    </div>
  )
}

export default About_Us_Page

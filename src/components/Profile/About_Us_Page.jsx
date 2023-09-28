import React from 'react'
import AboutusBox from './AboutusBox'
import ProfileBox from './ProfileBox'
import { Helmet } from "react-helmet-async";
const About_Us_Page = () => {
  return (
    <div className='flex flex-wrap justify-center  mt-5 mx-5 lg:space-x-20'>
      <Helmet>
        <title>Contact Us - Valsco</title>
        <meta
          name="description"
          content="Ready to take your business to the next level? Contact Valsco today and discover how our cutting-edge software solutions can empower your success."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>

    <div className="lg:w-1/3 sm:w-full mb-4 lg:mb-0  ">
        <ProfileBox />
    </div>

    <div className="lg:w-1/2  sm:w-full mb-4">
        <AboutusBox />
    </div>
</div>

  )
}

export default About_Us_Page

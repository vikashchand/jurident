import React from 'react'

import './Home.css'
import First from '../../Components/home/First'
import Second from '../../components/Home/Second'
import Third from '../../Components/home/Third'
import Fourth from '../../components/Home/Fourth'
import Fifth from '../../components/Home/Fifth'
import Sixth from '../../components/Home/Sixth'
import Footer from '../../components/Home/Footer'




const Home = () => {
  return (
    <div className='home'>
    
<First/>


    <Second/>
    <Third/>
    <Fourth/>
    <Fifth/>
    <Sixth/>
   <Footer/>

    
    </div>
  )
}

export default Home
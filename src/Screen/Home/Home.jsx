import React from 'react'

import './Home.css'
import First from '../../components/Homef/First'
import Second from '../../components/Homef/Second'
import Third from '../../components/Homef/Third'
import Fourth from '../../components/Homef/Fourth'
import Fifth from '../../components/Homef/Fifth'
import Sixth from '../../components/Homef/Sixth'
import Footer from '../../components/Homef/Footer'





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
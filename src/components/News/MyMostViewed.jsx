import React from 'react'
import Card from "./MyCard"
const src = "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1280,q_70/lsci/db/PICTURES/CMS/360000/360081.6.jpg"
const src2 = "https://qph.cf2.quoracdn.net/main-qimg-92a36d74a0db00cc0d69c41819c4671b-lq"


function MyMostViewed() {
  return (
    <>
        <div class = "flex flex-row">
            <div class = "flex flex-col basis-1/2">
                <div>
                    <Card></Card>
                </div>
                <div>
                    <Card></Card>
                </div>
            </div>
            <div class = "flex flex-col basis-1/4">
                <div class = "py-16">
                <img src={src} alt="no img" width="750" height="400" class= "flex justify-center content-center mt-4 rounded rounded-3 items-center"/>
                </div>
                <div class = "py-16">
                <img src={src} alt="no img" width="750" height="400" class= "flex justify-center content-center mt-4 rounded rounded-3 items-center"/>
                </div>
            </div>
            <div class = "flex basis-1/4 pl-10 place-content-stretch">
            <img src={src2} alt="no img" width="750" height="400" class= "flex justify-center content-center mt-4 rounded rounded-3 items-center"/>
            </div>
        </div>
        
    </>
  )
}

export default MyMostViewed
import React from 'react'


function MyImg(props) {
  return (
    <div class= "flex justify-center content-center mt-4 rounded rounded-3 items-center">
        <img src={props.src} alt="no img" width="750" height="400" class= "flex justify-center content-center mt-4 rounded rounded-3 items-center"/>
     
     </div>
  )
}

export default MyImg
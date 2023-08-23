import React from 'react'


function MyImg(props) {
  return (
    <div class= "flex justify-center content-center mt-4 rounded rounded-3 items-center">
        <img src={props.src} alt="no img" width="900" height="300" class= "flex justify-center content-center mt-4 rounded rounded-3 items-center"/>
     
     </div>
  )
}

export default MyImg
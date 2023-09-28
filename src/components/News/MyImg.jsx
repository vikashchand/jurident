import React from 'react'


function MyImg(props) {
  return (
    <div class= "flex justify-center content-center mt-4 rounded rounded-3 items-center">
      <Helmet>
        <title>Contact Us - Valsco</title>
        <meta
          name="description"
          content="Ready to take your business to the next level? Contact Valsco today and discover how our cutting-edge software solutions can empower your success."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
        <img src={props.src} alt="no img" width="900" height="300" class= "flex justify-center content-center mt-4 rounded rounded-3 items-center"/>
     
     </div>
  )
}

export default MyImg
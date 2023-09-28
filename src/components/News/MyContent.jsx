import React from "react";
import { Helmet } from "react-helmet-async";
function MyContent(props) {
  return (
    <div>
      <Helmet>
        <title>Contact Us - Valsco</title>
        <meta
          name="description"
          content="Ready to take your business to the next level? Contact Valsco today and discover how our cutting-edge software solutions can empower your success."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
    <p style={{  marginTop:'30px', textAlign:'justify',fontSize:'20px'}} class="mx-60">
        {props.element}
    </p>
    </div>
  )
}

export default MyContent;

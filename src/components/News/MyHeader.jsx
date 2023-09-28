import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from "react-helmet-async";
function header() {
  return (
    <>
    <Helmet>
        <title>Contact Us - Valsco</title>
        <meta
          name="description"
          content="Ready to take your business to the next level? Contact Valsco today and discover how our cutting-edge software solutions can empower your success."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
        {/* <h1 style={{ marginTop:'5px'}} class="text-4xl">
          <strong><h1>JURIDENT</h1></strong>
        </h1> */}
        <div style={{ marginTop: '10px', marginBottom: '10px'}} class = "text-4xl">
          <center><caption class="flex flex-nowrap scroll-pt-0 scroll-ml-5 text-slate-800" style={{justifyContent:'center'}}>
          <center> <b>News Edition</b>  </center>
         
        </caption></center>
        
        </div>
        
    </>
  );
}

export default header
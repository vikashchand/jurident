import React from 'react';
import PropTypes from 'prop-types';

function header() {
  return (
    <>
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
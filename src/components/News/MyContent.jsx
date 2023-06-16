import React from "react";

function MyContent(props) {
  return (
    <div>
    <p style={{  marginTop:'30px', textAlign:'justify',fontSize:'20px'}} class="mx-60">
        {props.element}
    </p>
    </div>
  )
}

export default MyContent;

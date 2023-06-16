import React from 'react'
import {FaArrowLeft} from "react-icons/fa";
import {FaArrowRight} from "react-icons/fa";

function MyFooter() {
  return (
    <div >

<div style={{ marginRight:'245px' }} >
    <nav class="flex justify-items-end space-x-4 justify-end mt-5 mb-5">
    
            {/* <a class="nav-link active text-dark fs-6  border-dark rounded-full py-2 px-2 border-2 border-slate-500" href="#">Dhoni</a>
            <a class="nav-link text-dark  border-dark rounded-full py-2 px-2 border-2 border-slate-500" href="#" style={{ marginLeft:'50px'}}>knee-surgery</a>
            <a class="nav-link text-dark border-dark rounded-full py-2 px-2 border-2 border-slate-500" href="#" style={{ marginLeft:'50px'}}>Accident</a>
            <a class="nav-link text-dark border-dark rounded-full py-2 px-2 border-2 border-slate-500" href="#" style={{ marginLeft:'50px',marginRight:'200px'}}>Mumbai</a> */}
            <a href="" class = "text-dark"><FaArrowLeft size="2rem" class="mr-24"></FaArrowLeft></a>
            <a href="" class = "text-dark"><FaArrowRight size="2rem" ></FaArrowRight></a>
 </nav>
 </div>
    </div>
  )
}

export default MyFooter
import React,{Component} from 'react'
import { FaUser } from "react-icons/fa";

function MyOpinion(props) {
  return (
    <>
        <div class = "flex flex-row">
        <div class="basis-1/4 p-10">
        <img class="w-full p-5" src={props.src1} alt="Sunset in the mountains"/>
        <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis officiis voluptas alias possimus, dolor eos et quos labore magnam vitae voluptate minus maxime soluta magni quis consequuntur ratione quae id!"</p>
        <nav class="flex justify-items-start space-x-4 justify-start mt-2 mr-92">
        <FaUser size="2rem"/>
        <a href="/dashboard" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 text-xs" ><b>By Jack Sparrow</b></a></nav>
        
        </div>
        <div class="basis-1/2 p-10">
            <h3 class = "text-2xl text-black"> <b> "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste temporibus laborum at! Voluptatum omnis sunt reprehenderit est nemo vel ut autem velit vero dignissimos? Aliquam sapiente alias modi dolorem voluptas."</b></h3>
            <nav class="flex justify-items-start space-x-4 justify-start mt-2 mr-92">
        <FaUser size="2rem"/>
        <a href="/dashboard" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 text-xs" ><b>By Jack Sparrow</b></a></nav>
   
            <img class="w-full p-5" src={props.src2} alt="Sunset in the mountains"/>
        </div>
        <div class="basis-1/4 p-10">
            <h4 class = "text-xl">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ratione facere nihil quas voluptates illum deleniti et totam? Neque reprehenderit, nostrum dicta id natus minima officiis praesentium veritatis. Voluptatem, molestiae!"</h4>
            <nav class="flex justify-items-start space-x-4 justify-start mt-2 mr-92">
        <FaUser size="2rem"/>
        <a href="/dashboard" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 text-xs" ><b>By Jack Sparrow</b></a></nav>
 
        </div>
        </div>
        <div>
        
        </div>
    </>
  )
}

export default MyOpinion
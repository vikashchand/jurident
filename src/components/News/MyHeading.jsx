import React from 'react'
import {FaUser } from "react-icons/fa";
import {FaThumbsUp } from "react-icons/fa";
import {FaComment} from "react-icons/fa";
import {FaBookmark} from "react-icons/fa";
import {FaShare} from "react-icons/fa";
import { Helmet } from "react-helmet-async";
function MyHeading() {
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
        <div class="pt-3 text-3xl pb-2 flex justify-center content-center mt-4 rounded rounded-3 items-center">
        <h1>
            <b>
            MS Dhoni undergoes knee surgery in Mumbai
            </b>
        </h1>
      </div>

    {/* <div>
    <nav style={{ marginLeft:'245px' }} class="flex justify-items-start space-x-4 justify-start mt-2 mr-92">
    <FaUser size="2rem"/>
  <a href="/dashboard" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 text-xs" ><b>By Jack Sparrow</b></a>
  <a href="/team" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 text-xs">5 min read</a>
  <a href="/projects" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 text-xs"><b>Follow</b></a>
 </nav>
 </div> */}

<ul class="flex justify-evenly pb-5">
  <li >
    {/* <a class="text-blue-500 hover:text-blue-800" href="#">Active</a> */}
    <div class="flex flex-row" ><FaUser size="2rem"/>&nbsp;
  <a href="/dashboard" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 text-md" ><b>By Jack Sparrow</b></a>
  <a href="/team" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 text-md">5 min read</a>
  <a href="/projects" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 text-md"><b>Follow</b></a></div>
 
    
  </li>
  
  
</ul>
    
    {/* <nav class=" flex justify-items-start space-x-4 justify-start mt-2 mx-60 py-3 border-y-2 border-slate-400">
    <a  href="#"><FaThumbsUp size="1.5rem" class="p-0"/></a> <a class="text-slate-400">5.4K</a>
    <a href="" ><FaComment size="1.5rem" style={{ marginLeft:'40px' }}/></a><a class="text-slate-400">54</a>
    <a href="" > <FaBookmark size="1.5rem" style={{ marginLeft:'480px' }}/></a>
    <a href="" ><FaShare size="1.5rem" style={{ marginLeft:'30px' }}/></a>
 </nav> */}

<ul class="flex justify-around mx-12 border-y-2 border-slate-400 py-3">
  <li >
    {/* <a class="text-blue-500 hover:text-blue-800" href="#">Active</a> */}
    <div class = "flex flex-row"><a href="#"><FaThumbsUp size="1.5rem" class="p-0"/></a> <a class="text-slate-400">&nbsp; 5.4K</a> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp; <a href="" ><FaComment size="1.5rem"/></a><a class="text-slate-400">&nbsp; 54</a></div>
    
  </li>
  
  <li class="mr-6">
    {/* <a class="text-gray-400 cursor-not-allowed" href="#">Disabled</a> */}
    <div class = "flex flex-row">
    <a href="" > <FaBookmark size="1.5rem" /></a> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <a href="" ><FaShare size="1.5rem"/></a>
    </div>
  </li>
</ul>
    </div>
  )
}

export default MyHeading
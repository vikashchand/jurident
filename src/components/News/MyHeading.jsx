import React from 'react'
import {FaUser } from "react-icons/fa";
import {FaThumbsUp } from "react-icons/fa";
import {FaComment} from "react-icons/fa";
import {FaBookmark} from "react-icons/fa";
import {FaShare} from "react-icons/fa";

function MyHeading() {
  return (
    <div>
        <div style={{ marginRight:'100px' }} class="pt-3 text-3xl pb-5">
        <h1>
            <b>
            MS Dhoni undergoes knee surgery in Mumbai
            </b>
        </h1>
    </div>

    <div style={{ marginRight:'100px' }} >
    <nav style={{ marginLeft:'245px' }} class="flex justify-items-start space-x-4 justify-start mt-2 mr-92">
    <FaUser size="2rem"/>
  <a href="/dashboard" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 text-xs" ><b>By Jack Sparrow</b></a>
  <a href="/team" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 text-xs">5 min read</a>
  <a href="/projects" class="font-medium px-3 py-2 text-slate-700 rounded-lg hover:bg-slate-100 hover:text-slate-900 text-xs"><b>Follow</b></a>
 </nav>
 </div>


    <nav style={{  }} class=" flex justify-items-start space-x-4 justify-start mt-2 mx-60 py-3 border-y-2 border-slate-400">
    <a  href="#"><FaThumbsUp size="1.5rem" class="p-0"/></a> <a class="text-slate-400">5.4K</a>
    <a href="" ><FaComment size="1.5rem" style={{ marginLeft:'40px' }}/></a><a class="text-slate-400">54</a>
    <a href="" > <FaBookmark size="1.5rem" style={{ marginLeft:'480px' }}/></a>
    <a href="" ><FaShare size="1.5rem" style={{ marginLeft:'30px' }}/></a>
 </nav>
    </div>
  )
}

export default MyHeading
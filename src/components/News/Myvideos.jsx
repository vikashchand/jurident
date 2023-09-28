import React, { useRef } from 'react'
import ReactPlayer from 'react-player'
const VIDEO_PATH = "https://www.youtube.com/watch?v=_L9XoWDMw-c"
import { Helmet } from "react-helmet-async";
function Myvideos() {
    const playerRef = useRef(null);
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
    <div class = "flex flex-row">
        <div class = "p-10 shrink w-96 h-64">
         <ReactPlayer width = "120%" height = "120%" ref={playerRef} url={VIDEO_PATH} controls={true} />
        </div>
        <div class = "p-10 shrink w-96 h-64">
         <ReactPlayer width = "120%" height = "120%" ref={playerRef} url={VIDEO_PATH} controls={true} />
        </div>
        <div class = "p-10 shrink w-96 h-64">
         <ReactPlayer width = "120%" height = "120%" ref={playerRef} url={VIDEO_PATH} controls={true} />
        </div>
  </div>
    <div class = "flex flex-row">
        <div class = "p-10 shrink w-96 h-64">
         <ReactPlayer width = "120%" height = "120%"  ref={playerRef} url={VIDEO_PATH} controls={true} />
        </div>
        <div class = "p-10 shrink w-96 h-64">
         <ReactPlayer width = "120%" height = "120%"  ref={playerRef} url={VIDEO_PATH} controls={true} />
        </div>
        <div class = "p-10 shrink w-96 h-64">
         <ReactPlayer width = "120%" height = "120%"  ref={playerRef} url={VIDEO_PATH} controls={true} />
        </div>
    </div>
    </>
  )
}

export default Myvideos
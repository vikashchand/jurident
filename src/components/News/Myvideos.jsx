import React, { useRef } from 'react'
import ReactPlayer from 'react-player'
const VIDEO_PATH = "https://www.youtube.com/watch?v=_L9XoWDMw-c"

function Myvideos() {
    const playerRef = useRef(null);
  return (
    <>
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
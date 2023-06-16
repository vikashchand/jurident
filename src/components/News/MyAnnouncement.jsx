import React,{Component} from 'react'
import Card from "./MyCard"

function MyAnnouncement() {
  return (
    <>
        <div class = "flex flex-row place-content-evenly">
            <div class = "flex flex-col">
                <div><Card></Card></div>
                <div><Card></Card></div>
            </div>
            <div class = "flex"><Card></Card></div>
        </div>
    </>
  )
}

export default MyAnnouncement
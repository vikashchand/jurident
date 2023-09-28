import React,{Component} from 'react'
import Card from "./MyCard"
import { Helmet } from "react-helmet-async";
// This is a Announcements section and as of now arrangement of components is done, JSON data rendering is left/

function MyAnnouncement() {
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

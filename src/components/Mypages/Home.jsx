import React, { Component } from 'react';
import MyHead from "../News/MyHeader"
import Nav from "../News/NavBar"
import Search from "../News/MySearch"
import Imag from "../News/MyImg"
import MyHd from "../News/MyHeading"
import Card from "../News/MyCards"
import FAQ from "../News/MyFAQ"
import News from '../News/News';
import { Helmet } from "react-helmet-async";
export default function MyHome() {
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
    <MyHead></MyHead>
    <Nav></Nav>
    {/* <Search></Search> */}
    {/* <Imag src = "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1280,q_70/lsci/db/PICTURES/CMS/360000/360081.6.jpg"></Imag> */}
    {/* <MyHd></MyHd> */}
    {/* <Card src = "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1280,q_70/lsci/db/PICTURES/CMS/360000/360081.6.jpg"></Card> */}
    <News pageSize={24} country={"in"} category="all"/>

    {/* <FAQ></FAQ> */}
    
    </>
  )
}


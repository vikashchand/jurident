import React, { Component } from 'react';
import MyHead from "../News/MyHeader"
import Nav from "../News/NavBar"
import Search from "../News/MySearch"
import Imag from "../News/MyImg"
import MyHd from "../News/MyHeading"
import Card from "../News/MyCards"
import FAQ from "../News/MyFAQ"

export default function MyHome() {
  return (
    <>
    <MyHead></MyHead>
    <Nav></Nav>
    <Search></Search>
    <Imag src = "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1280,q_70/lsci/db/PICTURES/CMS/360000/360081.6.jpg"></Imag>
    <MyHd></MyHd>
    <Card src = "https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1280,q_70/lsci/db/PICTURES/CMS/360000/360081.6.jpg"></Card>
    <FAQ></FAQ>
    
    </>
  )
}


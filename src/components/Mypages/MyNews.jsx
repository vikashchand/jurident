// import React from 'react'
import React, { Component } from "react";

import MyHeader from '../News/MyHeader'
import NavBar from '../News/NavBar';
import MyImg from "../News/MyImg";
import MyTitle from "../News/MyTitle";
import MyContent from "../News/MyContent";
import MyFooter from "../News/MyFooter";
import { Helmet } from "react-helmet-async";
export default function MyNews(props) {
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
           <MyHeader/>
            <NavBar></NavBar>
            <MyImg src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1280,q_70/lsci/db/PICTURES/CMS/360000/360081.6.jpg"></MyImg>
            <MyTitle element={props.title}></MyTitle>
            <MyContent element={props.description}></MyContent>
            <MyFooter></MyFooter>
        </div>
    );
}

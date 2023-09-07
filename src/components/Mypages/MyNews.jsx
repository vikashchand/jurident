// import React from 'react'
import React, { Component } from "react";

import MyHeader from '../News/MyHeader'
import NavBar from '../News/NavBar';
import MyImg from "../News/MyImg";
import MyTitle from "../News/MyTitle";
import MyContent from "../News/MyContent";
import MyFooter from "../News/MyFooter";

export default function MyNews(props) {
    return (
        <div>
           <MyHeader/>
            <NavBar></NavBar>
            <MyImg src="https://img1.hscicdn.com/image/upload/f_auto,t_ds_wide_w_1280,q_70/lsci/db/PICTURES/CMS/360000/360081.6.jpg"></MyImg>
            <MyTitle element={props.title}></MyTitle>
            <MyContent element={props.text}></MyContent>
            <MyFooter></MyFooter>
        </div>
    );
}

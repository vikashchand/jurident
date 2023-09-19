import React, { Component } from 'react';
import Card from "./MyCard"
import {articles} from "./data"

export default class MyCards extends Component {
    
        articles = articles;
      
        constructor(){
    
            super();
            console.log("Hello I am a constructor from NewsItem");
            this.state={
              articles : this.articles,
              loading : false
            }
          }


          render() {
            return (
              <div className="container my-3">
                <div className="row grid grid-cols-2 gap-4">
                {this.state.articles.map((element)=>{
                  return <div className="col md-4" key = {element.url}>
                  <Card title={element.title.slice(0,45)} text={element.text.slice(0,150)} image = {element.image} sentiment = {element.sentiment} author = {element.author} url={element.url} id={element.id}/>
                  </div>
                })}
                
                </div>
              </div>
            )
          }
        }

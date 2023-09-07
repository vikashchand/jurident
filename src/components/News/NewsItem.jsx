import React, { Component } from 'react'

export default class NewsItem extends Component {

  render() {
    let { title, text, image, url, author, sentiment} = this.props;
    return (
      <div className="my-4 mx-4">
        <div className="card" style={{width: "18rem"}}>
        <img src={!image?"https://www.infoworld.com/article/3679489/the-best-new-features-in-nextjs-13.html":image} className="card-img-top" alt="..."/>
        <div className="card-body">
         <h5 className="card-title font-semibold text-xl">{title}</h5>
         <p className="card-text font-medium text-base pb-3">{text}</p>
         <a rel = "noreferrer" target="_blank" href={url} className="btn btn-primary">Read More</a>
        </div>
</div>
      </div>
    )
  }
}

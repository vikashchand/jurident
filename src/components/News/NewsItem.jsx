import React, { Component } from 'react'

export default class NewsItem extends Component {

  render() {
    let { title, description, imageUrl,newsUrl} = this.props;
    return (
      <div className="my-4 mx-4">
        <div className="card" style={{width: "18rem"}}>
        <img src={imageUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
         <h5 className="card-title font-semibold text-xl">{title}</h5>
         <p className="card-text font-medium text-base pb-3">{description}</p>
         <a rel = "noreferrer" target="_blank" href={newsUrl} className="btn btn-primary">Read More</a>
        </div>
</div>
      </div>
    )
  }
}

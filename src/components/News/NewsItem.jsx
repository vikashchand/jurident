import React, { Component } from 'react'
import { Helmet } from "react-helmet-async";
export default class NewsItem extends Component {

  render() {
    let { title, description, imageUrl,newsUrl} = this.props;
    return (
      <div className="my-4 mx-4">
        <Helmet>
        <title>Contact Us - Valsco</title>
        <meta
          name="description"
          content="Ready to take your business to the next level? Contact Valsco today and discover how our cutting-edge software solutions can empower your success."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
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

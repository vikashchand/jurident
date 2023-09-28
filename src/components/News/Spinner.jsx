import React, { Component } from 'react'
import rhombus from './Rhombus.gif'
import { Helmet } from "react-helmet-async";
export default class Spinner extends Component {
  render() {
    return (
      <div className="container text-center">
        <Helmet>
        <title>Contact Us - Valsco</title>
        <meta
          name="description"
          content="Ready to take your business to the next level? Contact Valsco today and discover how our cutting-edge software solutions can empower your success."
        />
        <link rel="canonical" href="/contact" />
      </Helmet>
        <img src={rhombus} alt="loading" />
      </div>
    )
  }
}

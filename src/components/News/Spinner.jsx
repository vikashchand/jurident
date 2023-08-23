import React, { Component } from 'react'
import rhombus from './Rhombus.gif'

export default class Spinner extends Component {
  render() {
    return (
      <div className="container text-center">
        <img src={rhombus} alt="loading" />
      </div>
    )
  }
}

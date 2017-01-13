import React from 'react'
import { Component, PropTypes } from 'react'

export default class Button extends Component{

  clickBtn(e){
    e.preventDefault();
    alert("clicked");
  }

  render()
  {
    return (
      <div>
        <a className="btn btn-success" onClick={this.clickBtn} href="#"> Нажми </a>
      </div>
    )
  }
}

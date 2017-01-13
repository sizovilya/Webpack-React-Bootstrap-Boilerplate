import React from 'react'
import { Component } from 'react'

export default class Button extends Component{

  clickBtn(e){
    e.preventDefault();
    alert("Have a good time");
  }

  render()
  {
    return (
      <div>
        <a className="btn btn-success" onClick={this.clickBtn} href="#"> Press me <span className="glyphicon glyphicon-music" aria-hidden="true"></span> </a>
      </div>
    )
  }
}

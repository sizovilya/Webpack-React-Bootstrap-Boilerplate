
import React from 'react'
import { Component } from 'react'
import Button from './Components/Button'

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-s12">
            <div className="panel panel-info">
              <div className="panel-heading">Привет из App который на React</div>
              <div className="panel-body">
                <Button/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

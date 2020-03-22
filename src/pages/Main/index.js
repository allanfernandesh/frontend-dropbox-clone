import React, { Component } from 'react';
import api from '../../services/api'

import logo from "../../assets/logo.svg" 
import "./style.css"

export default class Main extends Component {
  state = {
    newBox: '',
  }

  hadleSubmit = async e => {
    e.preventDefault()

    const response = await api.post('boxes', {
      title: this.state.newBox
    })
    this.props.history.push(`/box/${response.data._id}`)
  }

  hadleInputChage = e => {
    this.setState({ newBox: e.target.value })
  }

  render() {
    return (
        <div id="main-container">
          <form onSubmit={ this.hadleSubmit } >
						<img src= {logo} alt="logo"/>
            <input 
              placeholder="Criar um box" 
              value={this.state.newBox}
              onChange={this.hadleInputChage}
            />
						<button type="submit">Criar</button>
					</form>  
        </div>
    );
  }
}

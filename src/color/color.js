import React, { Component } from 'react';

import './color.css';

import InputValue from '../input-values/input-values';
import CardGroup from '../card-group/card-group';

class Color extends Component {

  constructor(props) {
    super(props);

    this.state = {
        color: '',
        number: '',
    }

  }

  render() {
    let groups = [];

    return (
      <div className="App">
        <InputValue onChangeColor={this.setColor} onChangeNumber={this.setNumber.bind(this)}></InputValue>
        <div className="container">
          <CardGroup mainColor={this.state.color} number={this.state.number}></CardGroup>
        </div>
      </div>
    );
  }

  setColor = (e) => {
    let value = e.target.value;
    if (e.target.value.match(/[0-9A-Fa-f]/g).length === value.length) {
    // if (/[0-9A-Fa-f]/g.test(e.target.value)) {
      console.log( /[0-9A-Fa-f]/g.test(e.target.value) );
      this.setState({color: e.target.value});
    } else {
      this.setState({color: ''});
    }
  }

  setNumber(e) {
    this.setState({number: e.target.value});
  }

}

export default Color;

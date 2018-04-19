import React, { Component } from 'react';

import './input-values.css';

class InputValue extends Component {
    constructor(props){
        super(props);
    }

  render() {
    return (
      <div className="input-val">
        <label>#</label>
        <input type="text" placeholder="FFFFFF" maxLength="6" onChange={this.props.onChangeColor} ></input>

        <input type="number" placeholder="00" min="-100" max="100" onChange={this.props.onChangeNumber} ></input>
        <label>%</label>

      </div>
    );
  }
}

export default InputValue;

import React, { Component } from 'react';
import tinycolor from 'tinycolor2';

import './card.css';


class Card extends Component {
  render() {
    let color = `${ this.props.number ? 
      this.calculateColor(this.props.color, this.props.number) :
      this.props.color
    }`;
    return (
      <div className="card" style={{backgroundColor: color}}>
        
        <div className="footer">
            <h3>#{this.props.color.toUpperCase()}</h3>
            <p>{color.toUpperCase()}</p>
            <p> {this.props.number}% </p>
        </div>
      </div>
    );
  }

  calculateColor(col, amt) {

    return tinycolor(`#${col}`).lighten(amt).toHexString();
  }

}

export default Card;

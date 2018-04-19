import React, { Component } from 'react';

import './App.css';

import Color from './color/color';
import AddRemove from './add-remove/add-remove';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: 1
    }

  }

  render() {
    let groups = [];

    for(let i = 0; i < this.state.items; i++) {
      groups.push(<Color key={i}/>);
    }

    return (
      <div className="App">
        { groups }
        <AddRemove add={this.addItem.bind(this)} remove={this.removeItem.bind(this)} />
      </div>
    );
  }

  addItem() {
    this.setState({items: this.state.items + 1});
  }

  removeItem() {
    if ( this.state.items > 1) {
      this.setState({items: this.state.items - 1});
    }
  }

}

export default App;

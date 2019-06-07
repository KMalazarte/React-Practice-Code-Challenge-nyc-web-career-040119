import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      sushi: []
    }
  }

  createSushiLis = () => {
    return this.state.sushi.map(sushi => {
      return (
        <Sushi
          key={sushi.id}
          sushi={sushi} />
      )
    })
  }

  componentDidMount() {
    console.log("App Mounted");
    fetch(API)
      .then(response => response.json())
      .then(sushi => {
        this.setState({
          sushi: sushi
        })
      })
  }
  render() {
    return (
      <div className="app">
        <SushiContainer
          {this.createSushiLis}/>
        <Table />
      </div>
    );
  }
}

export default App;

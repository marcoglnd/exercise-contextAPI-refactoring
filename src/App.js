import React from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';
import MyContext from './MyContext';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      signalColor: 'green',
      red: false,
      blue: false,
      yellow: false,
    };
    this.changeSignal = this.changeSignal.bind(this);
    this.moveCar = this.moveCar.bind(this);
  }

  changeSignal(color) {
    this.setState({
      signalColor: color,
    });
  }

  moveCar(car, side) {
    this.setState({
      [car]: side,
    })
  }

  render() {
    const value = {
      signalColor: this.state.signalColor,
      redCar: this.state.red,
      blueCar: this.state.blue,
      yellowCar: this.state.yellow,
      moveCar: this.moveCar,
      changeSignal: this.changeSignal,
    }
  
    return (
      <MyContext.Provider value={value}>
        <Cars />
        <TrafficSignal />
      </MyContext.Provider>
    );
  }
}

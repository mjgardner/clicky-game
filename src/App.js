import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import DoctorCard from './components/DoctorCard';
import './App.css';
import doctors from './doctors.json';

class App extends Component {
  state = {
    lastClickedId: 0,
    score: 0
  };

  // https://stackoverflow.com/a/12646864/638877
  shuffleArray = array => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  };

  handleClick = event => {
    if (event.target.id === this.state.lastClickedId) {
      this.setState({
        score: 0
      });
    }
    else {
      this.setState({
        score: this.state.score + 1
      });
    }
    this.setState({
      lastClickedId: event.target.id
    });
  };

  render() {
    this.shuffleArray(doctors);
    return (
      <div className="App">
      Score: {this.state.score}
      <Wrapper>
      {doctors.map(doctor => (
        <DoctorCard {...doctor} key={doctor.id} handleClick={this.handleClick} />
      ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;

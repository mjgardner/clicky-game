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
      <h1>
        The Thirteen Doctors Clicky Game
      </h1>
      <p>
        <strong>Instructions:</strong>
        Click on one of the Doctors to increase your score. If you click the same Doctor twice in a row, your score resets to zero. The Doctors are reshuffled after every turn.
      </p>
      <h2>
        Score: {this.state.score}
      </h2>
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

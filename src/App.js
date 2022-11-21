import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

import CrystalPics from "./components/CrystalPictures";
import Scores from "./components/Scores";
import Header from "./components/Header";
import crystals from "./crystals.json";
import WinsLoses from "./components/winsLoses";
import Wrapper from "./components/Wrapper"

class App extends Component {
  state = {
    crystals,
    target_score: 0,
    your_score: 0,
    wins: 0,
    loses: 0,
    crystal_values: [0,0,0,0]
  };

  componentDidMount=()=>{
    //similar to on load page run this functions
    this.update();
  }

  update = () =>{
    // produces a ranomm number for the target score
    let newTarget = Math.floor(Math.random() * (120-20+1))+20;
    // maps 4 random number that are to be used as the value for each crystal
    let newValue = this.state.crystal_values.map(num => ( num = Math.floor(Math.random() *(12))+1))
    // updates the state
    this.setState({target_score: newTarget, crystal_values: newValue})
  };

  handleClick = (id, value) => {
    console.log(`in handleClick ${id} ${value}`)
    //adds to your scoreand check win lose condition, make sure all score are named properly
    let newScore = this.state.your_score + value
    if(newScore === this.state.target_score) {
      let newWins = this.state.wins + 1
      this.setState({your_score: 0, wins: newWins})
      this.update()
    } else if (newScore > this.state.target_score) {
      let newLoses = this.state.loses + 1
      this.setState({your_score: 0, loses: newLoses})
      this.update()
    } else {
      this.setState({your_score : newScore})
    }
    // this.setState({ your_score : this.state.your_score + value });
  }
  

  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Header />
        <Scores
          targetDisp={this.state.target_score}
          yourScoreDisp={this.state.your_score}
        />
        <Wrapper>
          {this.state.crystals.map(crystal =>(
            <CrystalPics className="image"
            image={crystal.picture}
            name={crystal.name}
            id={crystal.id}
            key={crystal.id}
            value={this.state.crystal_values[crystal.id]}
            score={this.handleClick}
            />
          ))}
        </Wrapper>
        <WinsLoses wins={this.state.wins} loses={this.state.loses} />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

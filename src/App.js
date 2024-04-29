import Display from "./display"
import Keyboard from "./keyboard";
import React from "react";


export default class App extends React.Component{

  constructor(){
    super();
    this.state = {

    }
  }

  handleSelectButton(){}
  handleMenuButton(){}
  handleLeftButton(){}
  handleRightButton(){}
  handlePlayPauseButton(){}

  render(){
    
    return (
      <>
        <Display />
        <Keyboard
          selectButtonClicked = {this.handleSelectButton}
          menuButtonClicked = {this.handleMenuButton}
          rightButtonClicked = {this.handleRightButton}
          leftButtonClicked = {this.handleLeftButton}
          playPauseButtonClicked = {this.handlePlayPauseButton}
        />
      </>
    );
  }

}

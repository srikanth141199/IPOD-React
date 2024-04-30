import Display from "./display"
import Keyboard from "./keyboard";
import React from "react";

import ZingTouch from "zingtouch";


export default class App extends React.Component{

  constructor(){
    super();
    this.state = {
      menuOptions : ['Songs', 'Games', 'CoverFlow', 'Settings' ],
      songsMenu : ['AllSongs', 'Artists', 'Albums'],
      displayPage : -1   //need to keep -1 by default
    }
  }

  componentDidMount(){
    let zingTouch = new ZingTouch.Region(document.getElementsByClassName("keyboard-container")[0]);
    zingTouch.bind(document.getElementsByClassName("keyboard-container")[0], 'rotate', (event) => {

    })
  }

  handleSelectButton(){}
  handleMenuButton(){}
  handleLeftButton(){}
  handleRightButton(){}
  handlePlayPauseButton(){}

  render(){
    
    return (
      <>
        <Display 
          menuOptions = {this.state.menuOptions}
          displayPage = {this.state.displayPage}
        />
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

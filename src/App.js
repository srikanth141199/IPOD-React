import Display from "./display"
import Keyboard from "./keyboard";
import React from "react";

import ZingTouch from "zingtouch";


export default class App extends React.Component{

  constructor(){
    super();
    this.temp_change_in_angle = 0;//to check how much angle mouse is moved 
    this.temp_selected = 0;//to check which menu is selected
    this.state = {
      menuOptions : ['Songs', 'Games', 'CoverFlow', 'Settings' ],
      songsMenu : ['AllSongs', 'Artists', 'Albums'],
      displayPage : -1,   //need to keep -1 by default
      selected : 0 //this will be updated based on mouse movement and determines which menu option is selected
    }
  }

  componentDidMount(){
    let zingTouch = new ZingTouch.Region(document.getElementsByClassName("keyboard-container")[0]);
    zingTouch.bind(document.getElementsByClassName("keyboard-container")[0], 'rotate', (event) => {
      //1st step is on click of menu we need to display menuOptions
      //Handling the move movement event
      console.log("event : ", event);
      if(document.getElementsByClassName('menuContainer')[0].classList.contains('width-50')){
        let dist = event.detail.distanceFromLast;
          this.temp_change_in_angle += dist;
          if (this.temp_change_in_angle > 60)//clock wise
          {
              this.temp_selected++;
              this.temp_selected = this.temp_selected % this.state.menuOptions.length;
              this.setState({
                  selected: this.temp_selected,
              });

              this.temp_change_in_angle = 0;
          }
          else if (this.temp_change_in_angle < -60)//anti clock wise mouse movement
          {
              this.temp_selected--;
              if (this.temp_selected === -1)
                  this.temp_selected = this.state.menuOptions.length - 1;

              this.temp_selected = this.temp_selected % this.state.menuOptions.length;
              this.setState({
                  selected: this.temp_selected,
              });
              this.temp_change_in_angle = 0;
          }
      }
    })
  }

  handleSelectButton(){}
  handleMenuButton(){}
  handleLeftButton(){}
  handleRightButton(){}
  handlePlayPauseButton(){}

  render(){
    
    return (
      <div className="ipod">
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
      </div>
    );
  }

}

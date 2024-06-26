import Display from "./display"
import Keyboard from "./keyboard";
import React from "react";

import ZingTouch from "zingtouch";


export default class App extends React.Component {
  constructor() {
    super();
    this.temp_change_in_angle = 0; //to check how much angle mouse is moved
    this.temp_selected = 0; //to check which menu is selected
    this.state = {
      menuOptions: ["Songs", "Games", "CoverFlow", "Settings"],
      songsMenu: ["AllSongs", "Artists", "Albums"],
      displayPage: -1, //need to keep -1 by default
      selected: 0, //this will be updated based on mouse movement and determines which menu option is selected
      currentMusicSelection: 0,
      songIndex: -1,
      currentlyOnPlayMusicScreen: false,
    };
  }

  componentDidMount() {
    let zingTouch = new ZingTouch.Region(
      document.getElementsByClassName("keyboard-container")[0]
    );
    zingTouch.bind(
      document.getElementsByClassName("keyboard-container")[0],
      "rotate",
      (event) => {
        //1st step is on click of menu we need to display menuOptions
        //Handling the move movement event
        //console.log("event : ", event);
        if (
          document
            .getElementsByClassName("menuContainer")[0]
            .classList.contains("width-50")
        ) {
          let dist = event.detail.distanceFromLast;
          this.temp_change_in_angle += dist;
          if (this.temp_change_in_angle > 60) {
            //clock wise
            this.temp_selected++;
            this.temp_selected =
              this.temp_selected % this.state.menuOptions.length;
            this.setState({
              selected: this.temp_selected,
            });

            this.temp_change_in_angle = 0;
          } else if (this.temp_change_in_angle < -60) {
            //anti clock wise mouse movement
            this.temp_selected--;
            if (this.temp_selected === -1)
              this.temp_selected = this.state.menuOptions.length - 1;

            this.temp_selected =
              this.temp_selected % this.state.menuOptions.length;
            this.setState({
              selected: this.temp_selected,
            });
            this.temp_change_in_angle = 0;
          }
        }
      }
    );
  }

  handleSelectButton() {
    //on Click of Songs selected will be one and menuOption length will be 4
    if (this.state.selected === 0 && this.state.menuOptions.length === 4) {
      //here we need to update the menu Options with songs Menu
      this.setState({
        menuOptions: this.state.songsMenu,
        selected: 0,
        displayPage: -1,
      });
      this.temp_selected = 0;
      return;
    }
    console.log("select Button : ", this.state.selected);
    this.setState({
      displayPage: this.state.selected,
    });
    this.handleMenuButton();
  }

  //on click of Menu "menuContainer" should have width-50 class added to it so that component did mount will run and option movement can be enabled
  handleMenuButton() {
    if (
      document
        .getElementsByClassName("menuContainer")[0]
        .classList.contains("width-50")
    ) {
      document
        .getElementsByClassName("menuContainer")[0]
        .classList.remove("width-50");
    } else {
      document
        .getElementsByClassName("menuContainer")[0]
        .classList.add("width-50");
    }
  }
  handleLeftButton() {}
  handleRightButton() {}
  handlePlayPauseButton() {}

  currentlyOnPlayMusicScreen = () => {
    if (this.state.currentlyOnPlayMusicScreen) {
      document.getElementsByClassName('keyboard-container').removeClass("colored");
      this.setState({
        currentlyOnPlayMusicScreen: false,
      });
    } else
      this.setState({
        currentlyOnPlayMusicScreen: true,
      });
  };

  playPauseButtonClicked = () => {
    if (document.getElementById('audio')[0] !== undefined) {
      if (document.getElementById('audio')[0].paused) {
        //if the music is paused i will play it, also turn on the button lights
        document.getElementById('audio')[0].play();
        document.getElementsByClassName('keyboard-container').addClass("colored");
        return;
      }
      document.getElementById('audio')[0].pause();
      document.getElementsByClassName('keyboard-container').removeClass("colored");
    }
  };

  render() {
    //console.log("selected :", this.state.selected);
    return (
      <div className="ipod">
        <Display
          selectedOption={this.state.selected}
          menuOptions={this.state.menuOptions}
          displayPage={this.state.displayPage}
          songsMenu={this.state.songsMenu}
          currentMusicSelection={this.state.currentMusicSelection}
          songIndex={this.state.songIndex}
          currentlyOnPlayMusicScreen={() => this.currentlyOnPlayMusicScreen()}
          playPauseButtonClicked={() => this.playPauseButtonClicked()}
        />
        <Keyboard
          selectButtonClicked={() => this.handleSelectButton()}
          menuButtonClicked={() => this.handleMenuButton()}
          rightButtonClicked={() => this.handleRightButton()}
          leftButtonClicked={() => this.handleLeftButton()}
          playPauseButtonClicked={() => this.handlePlayPauseButton()}
        />
      </div>
    );
  }
}

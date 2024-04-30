import React from "react";

export default class Keyboard extends React.Component {
  render() {
    return (
      <div className="keyboard-container">
        <button onClick={this.props.selectButtonClicked} className="selectBtn">
          SELECT
        </button>
        <button onClick={this.props.menuButtonClicked} className="menuBtn">
          <i class="fa-solid fa-bars"></i>
        </button>
        <button onClick={this.props.rightButtonClicked} className="forwardBtn">
          <i class="fa-solid fa-forward"></i>
        </button>
        <button onClick={this.props.leftButtonClicked} className="backwardBtn">
          <i class="fa-solid fa-backward"></i>
        </button>
        <button
          onClick={this.props.playPauseButtonClicked}
          className="playPauseBtn"
        >
          <i class="fa-solid fa-play"></i>
          <i class="fa-solid fa-pause"></i>
        </button>
      </div>
    );
  }
}

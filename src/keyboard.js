import React from "react";

export default class Keyboard extends React.Component{

    render(){
        return <>
            <h1>Keyboard</h1>
            <button onClick={this.props.selectButtonClicked}>SELECT</button>
            <button onClick={this.props.menuButtonClicked}><i class="fa-solid fa-bars"></i></button>
            <button onClick={this.props.rightButtonClicked}><i class="fa-solid fa-forward"></i></button>
            <button onClick={this.props.leftButtonClicked}><i class="fa-solid fa-backward"></i></button>
            <button onClick={this.props.playPauseButtonClicked}><i class="fa-solid fa-play"></i><i class="fa-solid fa-pause"></i></button>
        </>
    }
}
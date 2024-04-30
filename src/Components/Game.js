import React from "react";

export default class Game extends React.Component{
    render(){
        return (
            <div className="gameScreen">
                <h3>Game Screen</h3>
                <div className="gameStyle">
                    <i class="fa-solid fa-gamepad" style={{ fontSize: '10em', color: "rgb(236 175 61 / 89%)"}}></i>
                </div>
                
            </div>
        )
    }
}
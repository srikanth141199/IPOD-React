import React from "react";
import Game from "./Components/Game";
import CoverFlow from "./Components/CoverFlow";
import Setting from "./Components/Settings";
import Menu from "./Components/Menu";
import Artists from "./Components/Artists";
import Albums from "./Components/Albums";

export default class Display extends React.Component{

    render(){
        const {menuOptions, displayPage, selectedOption} = this.props;
        console.log("display selectedOption : ", selectedOption);
        console.log("display menuOption : ", menuOptions);
        return<div className="displayContainer">
            <Menu menuOptions = {menuOptions} selectedOption = {selectedOption}/>
            {displayPage === 1 && menuOptions.length === 4 ? <Game/>:""}
            {displayPage === 2 && menuOptions.length === 4 ? <CoverFlow/>:""}
            {displayPage === 3 && menuOptions.length === 4 ? <Setting/>:""}

            {displayPage === 0 && menuOptions.length === 3? "":""}
            {displayPage === 1 && menuOptions.length === 3? <Artists/>:""}
            {displayPage === 2 && menuOptions.length === 3? <Albums/>:""}
        </div>
    }
}
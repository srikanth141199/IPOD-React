import React from "react";
import Game from "./Components/Game";
import CoverFlow from "./Components/CoverFlow";
import Setting from "./Components/Settings";
import Menu from "./Components/Menu";

export default class Display extends React.Component{

    render(){
        const {menuOptions, displayPage} = this.props;
        return<div className="displayContainer">
            <Menu menuOptions = {menuOptions}/>
            {displayPage === 1 && menuOptions.length === 4 ? <Game/>:""}
            {displayPage === 2 && menuOptions.length === 4 ? <CoverFlow/>:""}
            {displayPage === 3 && menuOptions.length === 4 ? <Setting/>:""}
        </div>
    }
}
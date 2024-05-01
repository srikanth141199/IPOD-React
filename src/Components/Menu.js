import React from "react";

export default class Menu extends React.Component {
  render() {
    const { menuOptions, selectedOption } = this.props;
    //console.log("Menu selectedOption : ", selectedOption );
    return (
      <div className="menuContainer">
        {menuOptions.map((item, index) => {
          return (
            <div
              key={index}
              className={selectedOption === index ? 'selectedOption': ''}
            >
              <p>{item}</p>
            </div>
          );
        })}

      {menuOptions.length === 3 ?
        <div style={{color:'green'}}>
            <p style={{fontSize:18}}>click "<i className="fas fa-backward"></i>" to go back</p>
        </div>:''
      }
      </div>
    );
  }
}

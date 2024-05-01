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
      </div>
    );
  }
}

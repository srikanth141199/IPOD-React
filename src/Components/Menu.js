import React from "react";

export default class Menu extends React.Component {
  render() {
    const { menuOptions } = this.props;
    return (
      <div className="menuContainer">
        {menuOptions.map((item, index) => {
          return (
            <div
              key={index}
            >
              <p>{item}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

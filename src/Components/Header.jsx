import React from "react";
import PropTypes from "prop-types";

export default function Header(props) {
  // we can also take style in varailbles
  //we can also take style in props and do below like this
  // if props not pass than take default props
  const headerStyle = {
    backgroundColor: props.bgColor,
    color: props.color,
  };
  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{props.text}-Header</h2>
      </div>
    </header>
  );
}

// if nothing pass as props than default props will pass
Header.defaultProps = {
  text: "FeedBack-Ui",
  bgColor: "rgba(0,0,0,0.4)",
  color: "#ff6a95",
};
Header.propTypes = {
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  color: PropTypes.string,
};

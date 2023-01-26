import React from "react";
import PropTypes from 'prop-types'


export default function Card({ children, reverse }) {
  // class conditional
  //   return <div className={`card ${reverse && "reverse"}`}>{children}</div>;

  //   style conditional
  return (
    <div
      className="card"
      style={{
        backgroundColor: reverse ? "rgba(0,0,0,0.4" : "#fff",
        color: reverse ? "#fff" : "#000",
      }}
    >
    {/* node */}
      {children}
    </div>
  );
}
Card.defaultProps = {
  reverse: true,
};

Card.propTypes={
    children:PropTypes.node.isRequired,
    reverse:PropTypes.bool,
}

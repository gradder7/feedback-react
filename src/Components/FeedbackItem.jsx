import React from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";

export default function FeedbackItem({ item,handleDelete }) {
  return (
    <Card
    // reverse={true}
    >
      <div className="num-display">{item.rating}</div>
      <button className="close">
        {/*  npm i react-icons */}
        <FaTimes onClick={() => handleDelete(item.id)} color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

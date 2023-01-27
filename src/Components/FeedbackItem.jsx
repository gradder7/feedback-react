import React, { useContext } from "react";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import { FaTimes } from "react-icons/fa";
import FeedbackContext from "../context/FeedbackContext";

export default function FeedbackItem({ item }) {
  const { deleteFeedBack } = useContext(FeedbackContext);
  return (
    <Card
    // reverse={true}
    >
      <div className="num-display">{item.rating}</div>
      <button className="close">
        {/*  npm i react-icons */}
        <FaTimes onClick={() => deleteFeedBack(item.id)} color="purple" />
      </button>
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

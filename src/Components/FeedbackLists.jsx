import React from "react";
import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

export default function FeedbackLists({ feedback }) {
  if (!feedback || feedback.length === 0) {
    return <p>No FeedBack Yet</p>;
  }
  return (
    <div className="feedback-list">
      {feedback.map((item) => {
        return <FeedbackItem key={item.id} item={item} />;
      })}
    </div>
  );
}

FeedbackLists.propTypes = {
  // we can also set the prop type for the array and  objects in the array also
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    })
  ),
  
// or  feedback: PropTypes.array.isRequired,
};

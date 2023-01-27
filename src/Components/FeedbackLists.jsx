import React from "react";
// framer-motion for animation import
//npm install framer-motion
import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
import PropTypes from "prop-types";

export default function FeedbackLists({ feedback, handleDelete }) {
  if (!feedback || feedback.length === 0) {
    return <p>No FeedBack Yet</p>;
  }
  return (
    <div className="feedback-list">
      <AnimatePresence>
        {feedback.map((item) => {
          return (
          <motion.div
          // it is a list thats why key
          key={item.id}
          initial={{opasity:0}}
          animate={{opacity:1}}
          exit={{opacity:0}}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              handleDelete={handleDelete}
            />
          </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
    // without animation
    // <div className="feedback-list">
    //   {feedback.map((item) => {
    //     return (
    //       <FeedbackItem key={item.id} item={item} handleDelete={handleDelete} />
    //     );
    //   })}
    // </div>
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

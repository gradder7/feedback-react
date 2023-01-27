import React from "react";
// framer-motion for animation import
//npm install framer-motion
import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";
// to use the context hook
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

export default function FeedbackLists() {
  // to get the feed back
  const {feedback} = useContext(FeedbackContext);

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


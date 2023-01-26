import React, { useState } from "react";

export default function FeedbackItem() {
  const [rating, setRating] = useState(7);
  const [text, setText] = useState("lorem10 djsjd sdjcbnsjd jdj");

  const handleClick = () => {
    // to take the acess of the previous value we can also pass function in setRating
    setRating((prev) => {
      return prev + 1;
    });
  };

  return (
    <div className="card">
      <div className="num-display">{rating}</div>
      <div className="text-display">{text}</div>
      <button onClick={handleClick}>click</button>
    </div>
  );
}

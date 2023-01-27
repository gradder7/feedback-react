import React, { useState } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import Rating from "./Rating";

export default function FeedbackForm({ handleAdd }) {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);
  const handleOnchange = (e) => {
    // console.log(e.target.value);
    if (text === "") {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== "" && text.trim().length <= 10) {
      setMessage("Text must at least 10 characters");
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }
    setText(e.target.value);
  };

  // function to get the selected rating
  const ratingSelected = (ratingGet) => {
    // console.log(ratingGet)
    setRating(ratingGet);
  };
  const handleSubmit = (e) => {
    // to prevent referesh
    e.preventDefault();
    if (text.trim().length > 10) {
      // console.log('submited');
      const newFeedback = {
        // text: text,
        // rating: rating,
        //or short hand to create object
        text,
        rating,
      };
      // console.log(newFeedback);
      handleAdd(newFeedback);
      setText("");
    }
  };
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2> How would you like to rate your service with us ?</h2>
        {/* to do rating seleciong component */}
        <Rating selected={ratingSelected} />
        <div className="input-group">
          <input type="text" onChange={handleOnchange} value={text} />
          {/* button component */}
          <Button type="submit" isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
}

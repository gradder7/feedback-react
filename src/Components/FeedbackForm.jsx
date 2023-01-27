import React, { useContext, useState, useEffect } from "react";
import Card from "./shared/Card";
import Button from "./shared/Button";
import Rating from "./Rating";
import FeedbackContext from "../context/FeedbackContext";

export default function FeedbackForm() {
  const [text, setText] = useState("");
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(10);
  const { addFeedback, feedBackEdit, updateItem } = useContext(FeedbackContext);

  // useeffect=>something happens on change sideEffects
  // on click in edit set text, buton and rating 
  useEffect(() => {
    if (feedBackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedBackEdit.item.text);
      setRating(feedBackEdit.item.rating);
    }
  }, [feedBackEdit]); //dependency when it changes the useEffect calls

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

      if (feedBackEdit.edit === true) {
        
        updateItem(feedBackEdit.item.id, newFeedback); //new feed back beacuse we are seeting the text onchange() this text will be in input when clicked
      } else {
        addFeedback(newFeedback);
      }
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

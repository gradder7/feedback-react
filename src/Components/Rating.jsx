import React, { useContext, useState ,useEffect} from "react";
import FeedbackContext from "../context/FeedbackContext";

export default function Rating({ selected }) {
  const [select, setSelect] = useState(10);
  const numRating = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const handleChange = (e) => {
    // + is used to convert string to a number
    // console.log(typeof +e.currentTarget.value);
    setSelect(+e.currentTarget.value);
    // we have to pass this current selected to up means FeedbackFrom
    //we will pass it to up using the function passed as a prop by FeedbackFrom
    selected(+e.currentTarget.value);
  };


  // chnage the rating click of edit
  const { feedBackEdit } = useContext(FeedbackContext);
  useEffect(() => {
    setSelect(feedBackEdit.item.rating);
  }, [feedBackEdit])
  
  return (
    <ul className="rating">
      {numRating.map((li, index) => {
        return (
          <li key={"key" + li}>
            <input
              type="radio"
              name="rating"
              id={"num" + li}
              onChange={handleChange}
              value={li}
              checked={select === li}
            />
            <label htmlFor={"num" + li}>{li}</label>
          </li>
        );
      })}
    </ul>
  );
}

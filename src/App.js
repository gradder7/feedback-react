import { useState } from "react";
import "./App.css";
import FeedbackLists from "./Components/FeedbackLists";
import Header from "./Components/Header";
import FeedbackData from "./data/FeedbackData";

function App() {
  // feedback data is an array in data folder
  const [feedBack, setFeedBack] = useState(FeedbackData);
  return (
    <>
      <Header text={"Header-Feedback"} />
      <div className="container">

      <FeedbackLists feedback={feedBack}/>
      </div>
    </>
  );
}

export default App;

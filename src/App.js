import { useState } from "react";
// when ever we want to generate  uid we will call uuidv4 as a function to generate
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import FeedbackForm from "./Components/FeedbackForm";
import FeedbackLists from "./Components/FeedbackLists";
import FeedbackStats from "./Components/FeedbackStats";
import Header from "./Components/Header";
import FeedbackData from "./data/FeedbackData";
import { BrowserRouter as Router, Routes, Route ,NavLink} from "react-router-dom";
import About from "./pages/About";
import AbouticonLink from "./Components/AbouticonLink";
import Card from "./Components/shared/Card";
import Post from "./Components/Post";

function App() {
  // feedback data is an array in data folder
  const [feedBack, setFeedBack] = useState(FeedbackData);

  // we have to provide the id to our feedback items
  // npm install uuid 
  //to generate a unique id for each of out feedback items
  const addFeedback = (newFeedback) => {
    // add id to newFeedback
    newFeedback.id = uuidv4();
    console.log(newFeedback);
    //  state is mutable we cannot just push or delete from it we have to make a copy of it.
    //spread operator=> takes all the objects and put it in here array.
    setFeedBack([newFeedback, ...feedBack]);
  };
  const deleteFeedBack = (id) => {
    if (window.confirm("Are you sure you want to delete ?")) {
      // it will make  a new array
      setFeedBack(feedBack.filter((item) => item.id !== id));
    }
  };
  return (
    <>
      <Router>
        <Header text={"Header-Feedback"} />
        <div className="container">
          <Routes>
            <Route exact path="/" element={
              <>
              <FeedbackForm handleAdd={addFeedback} />
              <FeedbackStats feedback={feedBack} />
              <FeedbackLists
                feedback={feedBack}
                // prop-Drilling(passing function as a prop to the child level where on click the function call will happen and it will call the function throughs the prop till it not executes )
                handleDelete={deleteFeedBack}
              />
              </>
            }>
            </Route>
            <Route exact path="/about" element={<About />} />
            {/* :id id is params which we will recive in componenet as a object from useParams*/}
            <Route exact path="/post/:id/:name" element={<Post />} />
          </Routes>

          {/* nav links are used to chnage the classes when clicked on link */}
          <Card>
            <NavLink to='/' activeClassName='active'>
              Home
            </NavLink>
            <NavLink to='/about' activeClassName='active'>
              About
            </NavLink>
          </Card>
          <AbouticonLink/>
        </div>
      </Router>
    </>
  );
}

export default App;

import "./App.css";
import FeedbackItem from "./Components/FeedbackItem";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header text={'Header-Feedback'}  />
      <div className="container">
        <FeedbackItem/>
      </div>
    </>
  );
}

export default App;

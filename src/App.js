import "./App.css";
import FeedbackForm from "./Components/FeedbackForm";
import FeedbackLists from "./Components/FeedbackLists";
import FeedbackStats from "./Components/FeedbackStats";
import Header from "./Components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import { FeedbackProvider } from "./context/FeedbackContext";
import AbouticonLink from "./Components/AbouticonLink";

function App() {
  return (
    <>
      {/* wrap every thing in FeedBackProvider*/}
      <FeedbackProvider>
        <Router>
          <Header text={"Header-Feedback"} />
          <div className="container">
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <>
                    <FeedbackForm />
                    <FeedbackStats />
                    <FeedbackLists />
                  </>
                }
              ></Route>
              <Route exact path="/about" element={<About />} />
            </Routes>
            <AbouticonLink />
          </div>
        </Router>
      </FeedbackProvider>
    </>
  );
}

export default App;

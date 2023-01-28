import { createContext, useState, useEffect } from "react";
// when ever we want to generate  uid we will call uuidv4 as a function to generate
// import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

// we will wrap everything in the FeedbackProvider
export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  // state
  // now we will fetch the data from the backend using the api
  const [feedback, setFeedback] = useState([]);

  const [feedBackEdit, setFeedBackEdit] = useState({
    // it will take full object that is being clicked to the item
    item: {},
    edit: false,
  });

  useEffect(() => {
    console.log("api called");
    fetchFeedback();
  }, []);

  const fetchFeedback = async () => {
    // using proxy and defining in pakage.json we can write it like
    //  `http://localhost:5000/feedback?_sort=id&_order=desc`
    //to
    //  `/feedback?_sort=id&_order=desc`
    const response = await fetch(`/feedback?_sort=id&_order=desc`);
    const responseData = await response.json();
    // console.log(responseData);
    setFeedback(responseData);
    setIsLoading(false);
  };

  // functions
  //add
  // we have to provide the id to our feedback items
  // npm install uuid
  //to generate a unique id for each of out feedback items
  const addFeedback = async (newFeedback) => {
    let url = "/feedback";
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();

    //no need to provide the id as db create the id for us
    // add id to newFeedback
    // newFeedback.id = uuidv4();
    // console.log(newFeedback);
    //  state is mutable we cannot just push or delete from it we have to make a copy of it.
    //spread operator=> takes all the objects and put it in here array.
    // setFeedback([newFeedback, ...feedback]);
    setFeedback([data, ...feedback]);
  };

  //    delete
  const deleteFeedBack = async (id) => {
    if (window.confirm("Are you sure you want to delete ?")) {
      await fetch(`/feedback/${id}`, { method: "DELETE" });
      // it will make  a new array
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //   edit
  const editFeedback = (item) => {
    setFeedBackEdit({
      // item:item,
      item,
      edit: true,
    });
  };

  //update
  const updateItem = async (id, updatedItem) => {
    let url = `/feedback/${id}`;
    const response = await fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedItem),
    });
    const data = await response.json();

    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...data } : item
      )
    );
  };
  // return
  return (
    // when ever we wrap inside the feedbackContext all the childrens,
    //will pass here as a props
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedBack,
        addFeedback,
        isLoading,
        editFeedback,
        feedBackEdit,
        updateItem,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

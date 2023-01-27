import { createContext, useState } from "react";
// when ever we want to generate  uid we will call uuidv4 as a function to generate
import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();

// we will wrap everything in the FeedbackProvider
export const FeedbackProvider = ({ children }) => {
  // state
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      text: "Himanshu",
      rating: 9,
    },
  ]);
  
  const [feedBackEdit, setFeedBackEdit] = useState({
    // it will take full object that is being clicked to the item
    item: {},
    edit: false,
  });

  // functions
  //add
  // we have to provide the id to our feedback items
  // npm install uuid
  //to generate a unique id for each of out feedback items
  const addFeedback = (newFeedback) => {
    // add id to newFeedback
    newFeedback.id = uuidv4();
    console.log(newFeedback);
    //  state is mutable we cannot just push or delete from it we have to make a copy of it.
    //spread operator=> takes all the objects and put it in here array.
    setFeedback([newFeedback, ...feedback]);
  };

  //    delete
  const deleteFeedBack = (id) => {
    if (window.confirm("Are you sure you want to delete ?")) {
      // it will make  a new array
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  //   edit
  const editFeedback = (item) => {
    setFeedBackEdit({
        // item:item,
      item,
      edit:true,
    });
  };
  //update
  const updateItem=(id,updatedItem)=>{
        setFeedback(feedback.map(item=>
            item.id===id?{...item,...updatedItem}: item
        ));
    
  }
  // return
  return (
    // when ever we wrap inside the feedbackContext all the childrens,
    //will pass here as a props
    <FeedbackContext.Provider
      value={{
        feedback,
        deleteFeedBack,
        addFeedback,
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

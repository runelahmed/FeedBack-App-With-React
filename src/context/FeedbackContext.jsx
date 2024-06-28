import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

// Create the context
const FeedbackContext = createContext();

// Create the provider component
export const FeedbackProvider = ({ children }) => {

  // State to hold the feedback data
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  })

  // Update feedback
  const updateFeedback = (id, updateItem) => {
    setFeedback(feedback.map((item) => item.id === id ? {...item, ...updateItem} : item))
  }
  
  // add feedback
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    setFeedback([newFeedback, ...feedback]);
  };
  // Delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // set item to be update
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true
    })
  }

  return (
    // Provide the feedback state to child components
    <FeedbackContext.Provider value={{ feedback, deleteFeedback, editFeedback, addFeedback, feedbackEdit, updateFeedback}}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

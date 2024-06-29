import { createContext, useState, useEffect } from "react";

// Create the context
const FeedbackContext = createContext();

// Create the provider component
export const FeedbackProvider = ({ children }) => {

  // State to hold the feedback data
  const [isLoading, setIsLoading] = useState(true);
  const [feedback, setFeedback] = useState([]);
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false
  });

 // Use effect for fetching data for backend
 useEffect(() => {
fetchFeedback();

 },[]);

 // Fetch data
 const fetchFeedback = async () => {
    const response = await fetch(`http://localhost:5000/feedback?_sort=id&_order=desc`);
    const data = await response.json();
    setFeedback(data);
    setIsLoading(false);
 }

  // Update feedback
  const updateFeedback = async (id, updateItem) => {
    const response = await fetch(`http://localhost:5000/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(updateItem)
    })
    const data = await response.json();
    setFeedback(feedback.map((item) => item.id === id ? {...item, ...data} : item))
  }
  
  // add feedback to backend
  const addFeedback = async (newFeedback) => {
    const response = await fetch('http://localhost:5000/feedback', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(newFeedback)
    })
    const data = await response.json();
    setFeedback([data, ...feedback]);
  };

  // Delete feedback
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      await fetch(`http://localhost:5000/feedback/${id}`, {
        method: 'DELETE'
      });
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
    <FeedbackContext.Provider value={{ feedback, deleteFeedback, editFeedback, addFeedback, feedbackEdit, updateFeedback, isLoading}}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;

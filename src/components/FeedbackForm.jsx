import Card from "../shared/Card";
import { useState, useContext, useEffect } from "react";
import Button from "../shared/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackForm = () => {
  // State variables for the form text, rating, button disabled state, and validation message
  const [text, setText] = useState('');
  const [rating, setRating] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');

  // Context to access feedback related functions and state
  const { addFeedback, feedbackEdit, updateFeedback } = useContext(FeedbackContext);

  // Effect to handle feedback edit state changes
  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  // Function to handle text input changes and validation
  const handleTextChange = (e) => {
    const newText = e.target.value;

    if (newText === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (newText !== '' && newText.trim().length <= 10) {
      setMessage('Text must be at least 10 characters');
      setBtnDisabled(true);
    } else {
      setBtnDisabled(false);
      setMessage(null);
    }
    setText(newText);
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        // Update feedback if editing
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        // Add new feedback
        addFeedback(newFeedback);
      }

      // Reset form fields
      setText('');
      setRating('');
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your services with us?</h2>
        {/* Component for selecting rating */}
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className="input-group">
          <input
            value={text}
            onChange={handleTextChange}
            type="text"
            placeholder="Write a review"
          />
          <Button type="submit" isDisabled={btnDisabled}>Send</Button>
        </div>
        {/* Display validation message if any */}
        {message && <div className="message">{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;

import { useContext } from "react";
import FeedBackItem from "./FeedBackItem";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackList = () => {
  const { feedback } = useContext(FeedbackContext);

  // Render message if no feedback exists
  if (!feedback || feedback.length === 0) {
    return <h2 style={{ textAlign: 'center' }}> No feedback yet </h2>;
  }

  // Render list of feedback items
  return (
    <div className="feedback-list">
      {feedback.map((item) => (
        <FeedBackItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default FeedbackList;

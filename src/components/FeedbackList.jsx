import { useContext } from "react";
import FeedBackItem from "./FeedBackItem";
import FeedbackContext from "../context/FeedbackContext";
import Spinner from "../shared/Spinner";

const FeedbackList = () => {
  const { feedback, isLoading } = useContext(FeedbackContext);

  // Render message if no feedback exists
  if (!isLoading && (!feedback || feedback.length === 0)) {
    return <h2 style={{ textAlign: 'center' }}> No feedback yet </h2>;
  }

  // Render list of feedback items
  return isLoading ? <Spinner/> : (
<div className="feedback-list">
      {feedback.map((item) => (
        <FeedBackItem key={item.id} item={item} />
      ))}
    </div>
  )
  
};

export default FeedbackList;

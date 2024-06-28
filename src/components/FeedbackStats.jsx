import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);

  // Calculate average rating from feedback data
  let average = feedback.reduce((acc, cur) => {
    return acc + cur.rating;
  }, 0) / feedback.length;

  // Format average rating to one decimal place and handle NaN case
  average = average.toFixed(1).replace(/ $/, '');

  return (
    <div className='feedback-stats'>
      {/* Display total number of reviews */}
      <h4>{feedback.length} Reviews</h4>
      {/* Display average rating, defaulting to 0 if NaN */}
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  );
};

export default FeedbackStats;

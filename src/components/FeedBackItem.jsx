import Card from "../shared/Card";
import { FaEdit, FaTimes } from "react-icons/fa";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

const FeedBackItem = ({ item }) => {
  // Accessing deleteFeedback and editFeedback functions from FeedbackContext
  const { deleteFeedback, editFeedback } = useContext(FeedbackContext);
  
  // Render each feedback item within a Card component
  return (
    <Card>
      {/* Display the rating of the feedback item */}
      <div className="num-display">{item.rating}</div>
      {/* Button to delete the feedback item */}
      <button onClick={() => deleteFeedback(item.id)} className="close">
        <FaTimes color="purple" />
      </button>
      {/* Button to edit the feedback item */}
      <button onClick={() => editFeedback(item)} className="edit">
        <FaEdit color="purple" />
      </button>
      {/* Display the text of the feedback item */}
      <div className="text-display">{item.text}</div>
    </Card>
  );
};

export default FeedBackItem;

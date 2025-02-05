import { useState, useContext, useEffect } from "react";
import FeedbackContext from "../context/FeedbackContext";

const RatingSelect = ({ select }) => {
  // State to manage the selected rating
  const [selected, setSelected] = useState(10);

  // Accessing feedbackEdit from the context
  const { feedbackEdit } = useContext(FeedbackContext);

  // Effect to update selected rating when feedbackEdit changes
  useEffect(() => {
    setSelected(feedbackEdit.item.rating); // Set selected rating from feedbackEdit
  }, [feedbackEdit]);

  // Handler function for radio input change
  const handleChange = (e) => {
    const selectedRating = +e.currentTarget.value; // Convert value to number
    setSelected(selectedRating); // Update selected rating state
    select(selectedRating); // Call select function passed from parent component
  };

  return (
    <ul className="rating">
      <li>
        <input
          type="radio"
          name="rating"
          id="num1"
          value="1"
          checked={selected === 1}
          onChange={handleChange}
        />
        <label htmlFor="num1">1</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num2"
          value="2"
          checked={selected === 2}
          onChange={handleChange}
        />
        <label htmlFor="num2">2</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num3"
          value="3"
          checked={selected === 3}
          onChange={handleChange}
        />
        <label htmlFor="num3">3</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num4"
          value="4"
          checked={selected === 4}
          onChange={handleChange}
        />
        <label htmlFor="num4">4</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num5"
          value="5"
          checked={selected === 5}
          onChange={handleChange}
        />
        <label htmlFor="num5">5</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num6"
          value="6"
          checked={selected === 6}
          onChange={handleChange}
        />
        <label htmlFor="num6">6</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num7"
          value="7"
          checked={selected === 7}
          onChange={handleChange}
        />
        <label htmlFor="num7">7</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num8"
          value="8"
          checked={selected === 8}
          onChange={handleChange}
        />
        <label htmlFor="num8">8</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num9"
          value="9"
          checked={selected === 9}
          onChange={handleChange}
        />
        <label htmlFor="num9">9</label>
      </li>
      <li>
        <input
          type="radio"
          name="rating"
          id="num10"
          value="10"
          checked={selected === 10}
          onChange={handleChange}
        />
        <label htmlFor="num10">10</label>
      </li>
    </ul>
  );
};

export default RatingSelect;

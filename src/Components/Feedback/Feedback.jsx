import { useState, useEffect } from 'react';
import { FaStar } from 'react-icons/fa';
import './feedback.css';

const colors = {
  orange: '#FFBA5A',
  grey: '#a9a9a9',
};

const Feedback = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [feedbackText, setFeedbackText] = useState('');
  const [submissions, setSubmissions] = useState([]);

  // Fetch stored submissions from localStorage
  useEffect(() => {
    const savedFeedback = JSON.parse(localStorage.getItem('feedbackData')) || [];
    setSubmissions(savedFeedback);
  }, []);

  const handleClick = (value) => {
    setCurrentValue(value);
  };

  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Only save feedback if there's text and a rating
    if (!feedbackText || currentValue === 0) {
      return; // Do nothing if conditions aren't met
    }

    const newFeedback = {
      message: feedbackText,
      rating: currentValue,
    };

    // Update the feedback list
    const updatedSubmissions = [...submissions, newFeedback];
    setSubmissions(updatedSubmissions);

    // Save feedback in localStorage
    localStorage.setItem('feedbackData', JSON.stringify(updatedSubmissions));

    // Reset the form
    setFeedbackText('');
    setCurrentValue(0);
  };

  const handleClearFeedback = () => {
    // Clear feedback in state
    setSubmissions([]);
    
    // Clear feedback in localStorage
    localStorage.removeItem('feedbackData');
  };

  return (
    <div className="feedback-container">
      <div className='reiew'>
        <h2>Give ratings to our restaurant</h2>
        <div className="stars">
          {Array(5).fill(0).map((_, index) => (
            <FaStar
              key={index}
              size={24}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              className="star-icon"
            />
          ))}
      </div>
      <textarea
        placeholder="What's your experience?"
        className="textarea"
        value={feedbackText}
        onChange={(e) => setFeedbackText(e.target.value)}
      />
      <button className="submit-button" onClick={handleSubmit}>Submit</button>
      </div>

      {/* Display previous feedback */}
      {submissions.length > 0 && (
        <div className="feedback-list">
          <h3>Previous Feedback</h3>
          {submissions.map((feedback, index) => (
            <div key={index} className="feedback-card">
              <p><strong>Rating: </strong>{'⭐'.repeat(feedback.rating)}</p>
              <p>{feedback.message}</p>
            </div>
          ))}
          
          {/* Clear feedback button appears only when there are submissions */}
          <button className="clear-button" onClick={handleClearFeedback}>
            Clear Feedback
          </button>
        </div>
      )}
    </div>
  );
};

export default Feedback;

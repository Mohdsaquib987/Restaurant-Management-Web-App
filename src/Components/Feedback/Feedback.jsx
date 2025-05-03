import React, { useState } from 'react';
import './feedback.css';
// import ReactStars from 'react-rating-stars-component';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');
  const [rating, setRating] = useState(0);
  const [submissions, setSubmissions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!feedback || rating === 0) {
      alert('Please enter feedback and select a rating.');
      return;
    }

    const newFeedback = {
      message: feedback,
      rating,
      date: new Date().toLocaleString(),
    };

    setSubmissions([...submissions, newFeedback]);
    setFeedback('');
    setRating(0);
  };

  return (
    <div className="feedback-container">
      

      <form onSubmit={handleSubmit} className="feedback-form">
        <h2 className="feedback-title">Feedback</h2>
        <textarea
          className="feedback-textarea"
          rows="4"
          placeholder="Your feedback..."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />

        <div className="feedback-rating">
          {/* Replace this with your rating component */}
          {/* <ReactStars ... /> */}
        </div>

        <button type="submit" className="feedback-button">
          Submit
        </button>
      </form>

      {submissions.length > 0 && (
        <div className="feedback-list">
          <h3 className="feedback-subtitle">Previous Feedback</h3>
          {submissions.map((item, index) => (
            <div key={index} className="feedback-card">
              <div className="feedback-rating-display">Rating: ⭐ {item.rating}</div>
              <p>{item.message}</p>
              <div className="feedback-date">{item.date}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Feedback;

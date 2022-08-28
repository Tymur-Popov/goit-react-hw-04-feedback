import React from 'react';
import PropTypes from 'prop-types';
import '../FeedbackOptions/FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, updateFeedback }) => {
  return (
    <div>
      {options.map(option => (
        <button
          key={option}
          type="button"
          name={option}
          onClick={updateFeedback}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.array,
  updateFeedback: PropTypes.func,
};


// const FeedbackOptions = ({ handleGood, handleNeutral, handleBad }) => (
//   <div className="Feedback__controls">
//     <button onClick={handleGood}>Good</button>
//     <button onClick={handleNeutral}>Neutral</button>
//     <button onClick={handleBad}>Bad</button>
//   </div>
// );

// export default FeedbackOptions;

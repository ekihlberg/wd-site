// QuestionBox.jsx
import React from 'react';
import './QuestionBox.scss'; // Make sure to create this SCSS file for styling

const QuestionBox = ({ question, answer }) => {
  return (
    <div className="question-box">
      <div className="question">{question}</div>
      <div className="answer">{answer}</div>
    </div>
  );
};

export default QuestionBox;


import React from 'react';
import './QuestionBox.scss'; 

const QuestionBox = ({ question, answer }) => {
  return (
    <div className="question-box">
      <div className="question">{question}</div>
      <div className="answer">{answer}</div>
    </div>
  );
};

export default QuestionBox;

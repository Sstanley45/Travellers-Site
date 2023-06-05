import React, { useCallback, useState } from "react";
import Data from "./data";
import { FaPlus, FaMinus } from "react-icons/fa";

const Questions = () => {
  const [questions, setQuestions] = useState(Data);
  const [shownInfoId, setShownInfoId] = useState(null);
  const handleClick = (id) => {
    setShownInfoId((prevShownInfoId) => (prevShownInfoId === id ? null : id));
  };

  const dispalyQuestions = questions.map((question) => {
    return (
      <div key={question.id}>
        <div className="question-icon">
          <h5>{question.title}</h5>
          <FaPlus onClick={() => handleClick(question.id)} />
        </div>
        <p className="question-info">{shownInfoId === question.id && question.info}</p>
      </div>
    );
  });
  return (
    <div className="question-div">
      
      {dispalyQuestions}
    </div>
  );
};

export default Questions;

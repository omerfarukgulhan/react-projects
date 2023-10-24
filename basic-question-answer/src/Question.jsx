import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = (props) => {
  const { id, title, info } = props.question;

  const [show, setShow] = useState(false);

  function showAnswer() {
    const newState = !show;
    setShow(newState);
  }

  return (
    <div className="questions-container">
      <div className="question-header">
        <h3 className="question">{title}</h3>
        <button className="btn" onClick={showAnswer}>
          {show ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      {show && <p className="answer">{info}</p>}
    </div>
  );
};

export default Question;

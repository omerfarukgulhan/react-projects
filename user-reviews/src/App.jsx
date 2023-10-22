import { useState, useTransition } from "react";
import User from "./User";
import data from "./data";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

function App() {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = data[index];

  function increaseIndex() {
    if (index === 3) {
      setIndex(0);
    } else {
      let newIndex = index + 1;
      setIndex(newIndex);
    }
  }

  function decreaseIndex() {
    if (index === 0) {
      setIndex(data.length - 1);
    } else {
      let newIndex = index - 1;
      setIndex(newIndex);
    }
  }

  return (
    <div className="user">
      <img src={image} />
      <h2 className="user-name">{name}</h2>
      <p className="user-job">{job}</p>
      <p className="user-info">{text}</p>
      <div className="buttons">
        <button className="btn previous" onClick={decreaseIndex}>
          <FaAngleLeft />
        </button>
        <button className="btn forward" onClick={increaseIndex}>
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}

export default App;

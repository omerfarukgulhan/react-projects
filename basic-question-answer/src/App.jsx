import { useState } from "react";
import data from "./data";
import Question from "./Question";

function App() {
  const [questions, setQuestions] = useState(data);

  return (
    <div className="container">
      <h1 className="title">Questions</h1>
      {questions.map((question) => {
        return <Question key={question.id} question={question} />;
      })}
    </div>
  );
}

export default App;

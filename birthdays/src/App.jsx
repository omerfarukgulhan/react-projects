import { useState } from "react";
import data from "./data";
import List from "./List";

function App() {
  const [people, setPeople] = useState(data);

  function clearPeoples() {
    setPeople([]);
  }

  return (
    <div className="container">
      <h1>{people.length} Birthdays Today</h1>
      <List people={people} />
      <button className="btn" onClick={clearPeoples}>
        Clear All
      </button>
    </div>
  );
}

export default App;

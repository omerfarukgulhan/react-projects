import { useState } from "react";

const Form = (props) => {
  const [color, setColor] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    props.addColor(color);
  }

  return (
    <div>
      <h1>Color Generator</h1>
      <form className="color-form" onSubmit={handleSubmit}>
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)} />
        <input type="text" value={color} onChange={(e) => setColor(e.target.value)} placeholder="#f15025" />
        <button className="btn" type="submit" style={{ background: color }}>
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;

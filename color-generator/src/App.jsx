import ColorList from "./ColorList";
import Form from "./Form";
import Values from "values.js";
import { useState } from "react";
const App = () => {
  const [colors, setColors] = useState(new Values("#f15025").all(10));

  const addColor = (color) => {
    try {
      const newColors = new Values(color).all(10);
      setColors(newColors);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <main>
      <Form addColor={addColor} />
      <ColorList colors={colors} />
    </main>
  );
};
export default App;

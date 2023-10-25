import Color from "./Color";
import { nanoid } from "nanoid";
const ColorList = ({ colors }) => {
  return (
    <div className="colors">
      {colors.map((color, index) => {
        return <Color key={nanoid()} color={color} index={index} />;
      })}
    </div>
  );
};
export default ColorList;

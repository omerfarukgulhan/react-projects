import { useState } from "react";
import { toast } from "react-toastify";

const Form = (props) => {
  const [newItemName, setNewItemName] = useState("");
  const [itemId, setItemId] = useState(0);
  function submitHandler(e) {
    e.preventDefault();
    if (!newItemName) {
      toast.error("Please provide value");
    } else {
      props.addItem(newItemName, itemId);
      const nextId = itemId + 1;
      setNewItemName("");
      setItemId(nextId);
    }
  }

  return (
    <div className="form">
      <h1>Shopping List</h1>
      <form onSubmit={submitHandler}>
        <input type="text" className="form-input" value={newItemName} onChange={(e) => setNewItemName(e.target.value)} />
        <button type="submit" className="btn">
          add item
        </button>
      </form>
    </div>
  );
};

export default Form;

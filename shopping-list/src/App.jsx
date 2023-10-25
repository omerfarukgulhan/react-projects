import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Form from "./Form";
import ItemList from "./ItemList";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function addItem(itemName, id) {
    const newItems = [...items, { itemName, id, completed: false }];
    setItems(newItems);
    toast.success("Item added");
  }

  function deleteItem(itemId) {
    const newItems = items.filter((item) => {
      return item.id !== itemId;
    });
    setItems(newItems);
    toast.success("Item deleted");
  }

  function completeItem(itemId) {
    const newItems = items.map((item) => {
      if (item.id === itemId) {
        const newItem = { ...item, completed: !item.completed };
        return newItem;
      }
      return item;
    });
    setItems(newItems);
  }

  return (
    <div className="container">
      <Form addItem={addItem} />
      <ItemList deleteItem={deleteItem} completeItem={completeItem} items={items} />
      <ToastContainer position="top-center" />
    </div>
  );
}

export default App;

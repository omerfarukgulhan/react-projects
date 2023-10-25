const Item = (props) => {
  return (
    <div className="item">
      <input type="checkbox" onChange={() => props.completeItem(props.item.id)} />
      <p style={{ textTransform: "capitalize", textDecoration: props.item.completed && "line-through" }}>{props.item.itemName}</p>
      <button className="delete-btn" onClick={() => props.deleteItem(props.item.id)}>Delete</button>
    </div>
  );
};

export default Item;

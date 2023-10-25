import Items from "./Item";

const ItemList = (props) => {
  return (
    <div className="item-list">
      {props.items.map((item) => {
        return <Items key={item.id} item={item} deleteItem={props.deleteItem} completeItem={props.completeItem} />;
      })}
    </div>
  );
};

export default ItemList;

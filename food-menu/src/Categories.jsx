const Catagories = (props) => {
  return (
    <div className="btn-container">
      {props.categories.map((category) => {
        return (
          <button className="btn" key={category} onClick={() => props.filter(category)}>
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Catagories;

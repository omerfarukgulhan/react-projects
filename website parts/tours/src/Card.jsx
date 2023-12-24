const Card = (props) => {
  // console.log(props.info);
  const { id, image, info, name, price } = props.info;

  return (
    <div className="card">
      <img className="tour-image" src={image} />
      <span className="tour-price">{price}</span>
      <h1 className="tour-name">{name}</h1>
      <p className="tour-info">{info}</p>
      <button className="btn" onClick={() => props.removeTour(id)}>
        Not Interested
      </button>
    </div>
  );
};

export default Card;

const Person = (props) => {
  const { name, age, image } = props.person;

  return (
    <div className="person">
      <img src={image} alt="photo" />
      <div className="info">
        <h3>{name}</h3>
        <p>{age}</p>
      </div>
    </div>
  );
};

export default Person;

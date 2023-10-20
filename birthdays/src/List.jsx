import Person from "./Person";

const List = (props) => {
  return (
    <div>
      {props.people.map((person) => {
        return <Person key={person.id} person={person} />;
      })}
    </div>
  );
};

export default List;

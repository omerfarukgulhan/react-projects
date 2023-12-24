import React from "react";

const User = (props) => {
  const { id, name, job, image, text } = props.reviews;

  return (
    <div>
      <h1>{name}</h1>
      {/* <h1>{text}</h1>
      <h1>{job}</h1>
      <img src={image} /> */}
    </div>
  );
};

export default User;

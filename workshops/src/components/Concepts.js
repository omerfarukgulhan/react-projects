import React from "react";

const Concepts = (props) => {
    return (
        <li className="concept">
            <img src={props.conceptInfo.image} alt={props.title} />
            <h2>{props.conceptInfo.title}</h2>
            <p>{props.conceptInfo.description}</p>
        </li>
    );
};

export default Concepts;

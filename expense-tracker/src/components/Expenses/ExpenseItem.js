import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import React from "react";

const ExpenseItem = (props) => {
    return (
        <li>
            <Card className="expense-item">
                <ExpenseDate date={props.info}></ExpenseDate>
                <div className="expense-item__description">
                    <h2>{props.info.title}</h2>
                    <div className="expense-item__price">${props.info.amount}</div>
                </div>
            </Card>
        </li>
    );
};

export default ExpenseItem;

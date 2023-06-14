import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseFrom = (props) => {
    const [enteredTitle, setEnteredTitle] = useState("");
    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    };

    const [enteredAmount, setEnteredAmount] = useState("");
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value);
    };

    const [enteredDate, setEnteredDate] = useState("");
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value);
    };

    const submitHandler = (event) => {
        const newExpenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate),
        };
        props.onSaveExpenseData(newExpenseData);
        setEnteredTitle("");
        setEnteredAmount("");
        setEnteredDate("");

        event.preventDefault();
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2023-12-6" onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseFrom;

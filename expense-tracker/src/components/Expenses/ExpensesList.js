import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";

const ExpensesList = (props) => {
    let expensesContent = <h2 className="expenses-list__fallback">No expense found</h2>;

    if (props.items.length !== 0) {
        expensesContent = props.items.map((expense) => <ExpenseItem key={expense.id} info={expense} />);
    }

    return <ul className="expenses-list">{expensesContent}</ul>;
};

export default ExpensesList;

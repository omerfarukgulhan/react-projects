import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseFrom from "./ExpenseForm";

const NewExpense = (props) => {
    const [isEditiding, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (newExpenseData) => {
        const expenseData = {
            ...newExpenseData,
            id: Math.random().toString(), //This method is not right but we dont have any database to relate those ids
        };
        props.onAddExpense(expenseData);
        setIsEditing(false);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    };
    const stopEditingHandler = () => {
        setIsEditing(false);
    };

    return (
        <div className="new-expense">
            {!isEditiding && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditiding && <ExpenseFrom onCancel={stopEditingHandler} onSaveExpenseData={saveExpenseDataHandler}></ExpenseFrom>}
        </div>
    );
};

export default NewExpense;

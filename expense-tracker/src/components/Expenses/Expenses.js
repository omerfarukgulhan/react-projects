import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import React, { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart"

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState("2023");

    const filterHandler = (event) => {
        setFilteredYear(event.target.value);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onFilterChange={filterHandler}></ExpensesFilter>
                <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
                <ExpensesList items={filteredExpenses}></ExpensesList>
            </Card>
        </div>
    );
};

export default Expenses;

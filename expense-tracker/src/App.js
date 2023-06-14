import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const beginingExpenses = [
    {
        id: "1",
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2023, 7, 14),
    },
    {
        id: "2",
        title: "New TV",
        amount: 799.49,
        date: new Date(2023, 2, 12),
    },
    {
        id: "3",
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2022, 2, 28),
    },
    {
        id: "4",
        title: "New Desk (Wooden)",
        amount: 450,
        date: new Date(2023, 5, 12),
    },
];

const App = () => {
    const [expneses, setExpenses] = useState(beginingExpenses);

    const addExpenseHandler = (newExpense) => {
        setExpenses((previousExpenses) => {
            return [newExpense, ...previousExpenses];
        });
    };
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
            <Expenses items={expneses}></Expenses>
        </div>
    );
};

export default App;

import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "Samsung 4K TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450.99,
    date: new Date(2021, 5, 12),
  },
  {
    id: "e5",
    title: "Textbooks",
    amount: 230.89,
    date: new Date(2022, 3, 14),
  },
  {
    id: "e6",
    title: "Hand Sanitizer",
    amount: 300.67,
    date: new Date(2020, 4, 20),
  },
  {
    id: "e7",
    title: "Samsung Galaxy",
    amount: 899.99,
    date: new Date(2022, 7, 25),
  },
  {
    id: "e8",
    title: "ESP Electric Guitar",
    amount: 775.99,
    date: new Date(2022, 9, 16),
  },
  {
    id: "e9",
    title: "Face Masks",
    amount: 99.89,
    date: new Date(2020, 5, 16),
  },
  {
    id: "e10",
    title: "Netflix Subscription",
    amount: 14.99,
    date: new Date(2021, 1, 16),
  },
  {
    id: "e11",
    title: "Dell Inspiron Laptop",
    amount: 699.99,
    date: new Date(2022, 1, 3),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;

import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

export const NewExpense = ({ onAddExpense }) => {
  const saveExpenseDataHandler = (newExpenseData) => {
    const ExpenseData = {
      id: Math.random().toString(),
      ...newExpenseData,
    };

    onAddExpense(ExpenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
};

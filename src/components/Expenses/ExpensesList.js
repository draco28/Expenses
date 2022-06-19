import React from "react";
import ExpenseItem from "./ExpenseItem";

import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">No Expense to display </h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((e) => (
        <ExpenseItem
          key={e.id}
          date={e.date}
          title={e.title}
          amount={e.amount}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;

import React from "react";

import "./ExpenseItem.css";

const ExpenseItem = () => {
  const DATE_OPTIONS = {
    weekday: "short",
    month: "short",
    year: "numeric",
    day: "numeric",
  };

  const date = new Date(2021, 2, 28);

  const item = "Car Insurance";

  const price = 300;

  return (
    <div className="expense-item">
      <div>{date.toLocaleDateString("en-US", DATE_OPTIONS)}</div>
      <div className="expense-item__description">
        <h2>{item}</h2>
        <div className="expense-item__price">{price}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;

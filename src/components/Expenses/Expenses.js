import React from "react";
import Card from "../UI/Card";

import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

const Expenses = ({ expenses }) => {
  return (
    <Card className="expenses">
      {expenses.map((e) => (
        <ExpenseItem
          id={e.id}
          date={e.date}
          title={e.title}
          amount={e.amount}
        />
      ))}
    </Card>
  );
};

export default Expenses;

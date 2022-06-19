import React, { useState } from "react";
import ExpensesFilter from "../ExpenseFilter";
import Card from "../UI/Card";

import ExpenseItem from "./ExpenseItem";

import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const selectFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = expenses.filter((e) => {
    return e.date.getFullYear().toString() === filteredYear;
  });

  let expenseContent = <p>No Expense to display</p>;

  if (filteredExpense.length > 0) {
    expenseContent = filteredExpense.map((e) => (
      <ExpenseItem key={e.id} date={e.date} title={e.title} amount={e.amount} />
    ));
  }

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          filteredYear={filteredYear}
          onSelectFilter={selectFilterHandler}
        />
        {expenseContent}
      </Card>
    </>
  );
};

export default Expenses;

import React, { useState } from "react";
import ExpensesFilter from "../ExpenseFilter";
import Card from "../UI/Card";

import ExpensesList from "./ExpensesList";

import "./Expenses.css";

const Expenses = ({ expenses }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const selectFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpense = expenses.filter((e) => {
    return e.date.getFullYear().toString() === filteredYear;
  });

  return (
    <>
      <Card className="expenses">
        <ExpensesFilter
          filteredYear={filteredYear}
          onSelectFilter={selectFilterHandler}
        />
        <ExpensesList items={filteredExpense} />
      </Card>
    </>
  );
};

export default Expenses;

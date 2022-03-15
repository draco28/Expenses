import { useState } from "react";
import Card from "../UI/Card";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ date, title, amount }) => {
  const [Title, setTitle] = useState(title);

  const changeTitle = () => {
    setTitle("upadted");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{Title}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={changeTitle}> Change Title</button>
    </Card>
  );
};

export default ExpenseItem;

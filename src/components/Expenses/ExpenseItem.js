import ExpenseDate from "./ExpenseDate";
import { useState } from "react";
import "./ExpenseItem.scss";
import Card from "../UI/Card";

const ExpenseItem = ({ date, title, amount }) => {
  const [title1, setTitle1] = useState(title);
  const changeTitle = () => {
    setTitle1("new value");
  };
  return (
    <Card className='expense-item'>
      <ExpenseDate date={date} />
      <div className='expense-item__description'>
        <h2>{title1}</h2>
        <Card className='expense-item__price'>${amount}</Card>
        <button onClick={changeTitle}>Change Title</button>
      </div>
    </Card>
  );
};

export default ExpenseItem;

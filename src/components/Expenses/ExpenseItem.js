import ExpenseDate from "./ExpenseDate";
import { useState } from "react";
import "./ExpenseItem.scss";
import Card from "../UI/Card";

const ExpenseItem = ({ date, title, amount }) => {
  return (
    <li>
      <Card className='expense-item'>
        <ExpenseDate date={date} />
        <div className='expense-item__description'>
          <h2>{title}</h2>
          <Card className='expense-item__price'>${amount}</Card>
          <button>Change Title</button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;

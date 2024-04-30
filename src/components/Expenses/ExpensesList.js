import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.scss";

const ExpensesList = ({ items }) => {
  if (items.length === 0) {
    return <h2 className='expenses-list__fallback'>No expenses found</h2>;
  }
  return (
    <ul className='expenses-list'>
      {items.map((cur) => (
        <ExpenseItem
          key={cur.id}
          title={cur.title}
          amount={cur.amount}
          date={cur.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;

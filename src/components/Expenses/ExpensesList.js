import React from "react";
import ExpenseItem from "./ExpenseItem";
import styles from "./ExpensesList.module.scss";

const ExpensesList = ({ items }) => {
  if (items.length === 0) {
    return (
      <h2 className={styles["expenses-list__fallback"]}>No expenses found</h2>
    );
  }
  return (
    <ul className={styles["expenses-list"]}>
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

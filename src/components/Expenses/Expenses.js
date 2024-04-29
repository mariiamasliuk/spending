import { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

import Card from "../UI/Card";
import "./Expenses.scss";

const Expenses = ({ expensesData }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterYearHandler = (year) => {
    setFilteredYear(year);
  };

  const filteredExpenses = expensesData.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });
  return (
    <Card className='expenses'>
      <ExpenseFilter
        selectedYear={filteredYear}
        filterYear={filterYearHandler}
      />
      {filteredExpenses.length === 0 && <p>No expenses found</p>}
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((cur) => (
          <ExpenseItem
            key={cur.id}
            title={cur.title}
            amount={cur.amount}
            date={cur.date}
          />
        ))}
    </Card>
  );
};

export default Expenses;

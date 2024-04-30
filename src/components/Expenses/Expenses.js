import { useState } from "react";
import ExpensesList from "./ExpensesList";
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
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;

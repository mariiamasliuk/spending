import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";

import Card from "../UI/Card";
import "./Expenses.scss";

const Expenses = ({ expensesData }) => {
  const filterYearHandler = (year) => {
    console.log(year);
  };
  return (
    <>
      <Card className='expenses'>
        <ExpenseFilter filterYear={filterYearHandler} />
        {expensesData.map((cur) => (
          <ExpenseItem
            key={cur.id}
            title={cur.title}
            amount={cur.amount}
            date={cur.date}
          />
        ))}
      </Card>
    </>
  );
};

export default Expenses;

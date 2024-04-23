import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.scss";

function Expenses({ expensesData }) {
  return (
    <Card className='expenses'>
      {expensesData.map((cur) => (
        <ExpenseItem
          key={cur.id}
          title={cur.title}
          amount={cur.amount}
          date={cur.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;

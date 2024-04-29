import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { expenses as DUMMY_EXPENSES } from "./data/expense";
import "./App.css";

function App() {
  const [expensesData, setExpensesData] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (data) => {
    setExpensesData((prevExpense) => [data, ...prevExpense]);
  };
  return (
    <div>
      <h2>Spending Program</h2>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expensesData={expensesData} />
    </div>
  );
}

export default App;

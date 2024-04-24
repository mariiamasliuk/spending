import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { expenses as expensesData } from "./data/expense";
function App() {
  const addExpenseHandler = (data) => {
    console.log("in App.js");
    console.log(data);
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

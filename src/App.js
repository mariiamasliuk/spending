import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import { expenses as expensesData } from "./data/expense";
function App() {
  return (
    <div>
      <h2>Let's get started</h2>
      <Expenses expensesData={expensesData} />
    </div>
  );
}

export default App;

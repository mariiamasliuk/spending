import React, { useState, useContext } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import Login from "./components/Login/Login";
import { expenses as DUMMY_EXPENSES } from "./data/expense";
import classes from "./App.module.scss";
import AuthContext from "./store/auth-context.js";
import Button from "./components/UI/Button.js";

function App() {
  const ctx = useContext(AuthContext);
  const [expensesData, setExpensesData] = useState(DUMMY_EXPENSES);
  const addExpenseHandler = (data) => {
    setExpensesData((prevExpense) => [data, ...prevExpense]);
  };
  return (
    <>
      {!ctx.isLoggedIn && <Login />}
      {ctx.isLoggedIn && (
        <>
          <div className={classes.title}>
            <h1>Spending Program</h1>
            <Button onClick={ctx.onLogout} className={classes.logout}>
              Logout
            </Button>
          </div>

          <div>
            <NewExpense onAddExpense={addExpenseHandler} />
            <Expenses expensesData={expensesData} />
          </div>
        </>
      )}
    </>
  );
}

export default App;

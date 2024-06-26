import { useState } from "react";
import styles from "./ExpenseForm.module.scss";
import ErrorModal from "../UI/ErrorModal";
import Button from "../UI/Button";

const ExpenseForm = (props) => {
  const [showForm, setShowForm] = useState(false);
  const [error, setError] = useState();
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, title: event.target.value };
    });
  };
  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, amount: +event.target.value };
    });
  };
  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, date: event.target.value };
    });
  };
  const cancelFormHandler = () => {
    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
    setShowForm(false);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (
      userInput.title.length === 0 ||
      userInput.date.length === 0 ||
      userInput.amount.length === 0
    ) {
      setError({
        title: "Invalid input",
        message:
          "Please enter a valid title, amount and date (non-empty values).",
      });
      return;
    }
    if (+userInput.amount < 1) {
      setError({
        title: "Invalid amount",
        message: "Please enter a valid amount ( > 0 ).",
      });
      return;
    }
    userInput.date = new Date(userInput.date);
    props.onSaveExpensesData(userInput);

    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
  };
  if (!showForm) {
    return <Button onClick={() => setShowForm(true)}>Add new Expense</Button>;
  }
  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onErrorClick={() => setError(null)}
        />
      )}
      <form onSubmit={submitHandler}>
        <div className={styles["new-expense__controls"]}>
          <div className={styles["new-expense__control"]}>
            <label htmlFor='title'>Title</label>
            <input
              id='title'
              value={userInput.title}
              type='text'
              onChange={titleChangeHandler}
            />
          </div>
          <div className={styles["new-expense__control"]}>
            <label htmlFor='amount'>Amount</label>
            <input
              id='amount'
              type='number'
              value={userInput.amount}
              onChange={amountChangeHandler}
              min='0.01'
              step='0.01'
            />
          </div>
          <div className={styles["new-expense__control"]}>
            <label htmlFor='date'>Date</label>
            <input
              id='date'
              value={userInput.date}
              onChange={dateChangeHandler}
              type='date'
              min='2019-01-01'
              max='2024-12-31'
            />
          </div>
        </div>
        <div className={styles["new-expense__actions"]}>
          <Button onClick={cancelFormHandler}>Cancel</Button>
          <Button type='submit'>Add Expense</Button>
        </div>
      </form>
    </>
  );
};

export default ExpenseForm;

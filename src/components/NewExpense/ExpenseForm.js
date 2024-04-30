import { useState } from "react";
import "./ExpenseForm.scss";

const ExpenseForm = (props) => {
  const [showForm, setShowForm] = useState(false);
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
      return { ...prevState, amount: event.target.value };
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
    userInput.date = new Date(userInput.date);
    props.onSaveExpensesData(userInput);

    setUserInput({
      title: "",
      amount: "",
      date: "",
    });
  };
  if (!showForm) {
    return <button onClick={() => setShowForm(true)}>Add new Expense</button>;
  }
  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label htmlFor='title'>Title</label>
          <input
            id='title'
            value={userInput.title}
            type='text'
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense__control'>
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
        <div className='new-expense__control'>
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
      <div className='new-expense__actions'>
        <button onClick={cancelFormHandler}>Cancel</button>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;

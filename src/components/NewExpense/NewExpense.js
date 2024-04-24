import ExpenseForm from "./ExpenseForm";
import "./NewExpense.scss";
import Card from "../UI/Card";
const NewExpense = (props) => {
  const saveExpenceDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  return (
    <Card className='new-expense'>
      <ExpenseForm onSaveExpensesData={saveExpenceDataHandler} />
    </Card>
  );
};

export default NewExpense;

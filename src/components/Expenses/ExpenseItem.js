import ExpenseDate from "./ExpenseDate";
import styles from "./ExpenseItem.module.scss";
import Card from "../UI/Card";

const ExpenseItem = ({ date, title, amount }) => {
  return (
    <li>
      <Card className={styles["expense-item"]}>
        <ExpenseDate date={date} />
        <div className={styles["expense-item__description"]}>
          <h2>{title}</h2>
          <Card className={styles["expense-item__price"]}>${amount}</Card>
          <button>Change Title</button>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;

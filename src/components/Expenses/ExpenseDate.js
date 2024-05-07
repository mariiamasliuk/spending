import styles from "./ExpenseDate.module.scss";
import Card from "../UI/Card";

const ExpenseDate = ({ date }) => {
  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return (
    <Card className={styles["expense-date"]}>
      <div className={styles["expense-date__month"]}>{month}</div>
      <div className={styles["expense-date__year"]}>{year}</div>
      <div className={styles["expense-date__day"]}>{day}</div>
    </Card>
  );
};

export default ExpenseDate;

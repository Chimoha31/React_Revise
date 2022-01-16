import '../Expenses/ExpenseItem.css';
import ExpenseDate from "../Expenses/ExpenseDate";
import Card from '../UI/Card';

const ExpenseItem = (props) => {
  const { title, amount, date } = props;
  console.log('test');
  return (
    <Card className="expense-item">
     <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;

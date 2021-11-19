/*ExpenseItemに置くと長くなるから、日付の部分をcomponent化する為に、このExpenseDate.jsを作成。
const month = date.toLocaleString('en-US', {month: 'long'});
const day = date.toLocaleString('en-US', {day: '2-digit'});
const year = date.getFullYear(); */
import '../components/ExpenseDate.css';

function ExpenseDate(props) {
  const {date} = props;

  const month = date.toLocaleString("en-US", { month: "long" });
  const day = date.toLocaleString("en-US", { day: "2-digit" });
  const year = date.getFullYear();

  return(
    <div className="expense-date">
    <div className="expense-date__month">{month}</div>
    <div className="expense-date__year">{year}</div>
    <div className="expense-date__day">{day}</div>
  </div>
  )
}

export default ExpenseDate;

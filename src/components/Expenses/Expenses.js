import React, { useState } from "react";
import "../Expenses/Expenses.css";
import ExpenseItem from "../Expenses/ExpenseItem";
import ExpenseFilter from "../Expenses/ExpenseFilter";
import Card from "../UI/Card";

const Expenses = (props) => {
  // const { items } = props;
  const [filteredYear, setFilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;

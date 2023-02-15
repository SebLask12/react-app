import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";

import "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

function NewExpenses(props) {
  const [filteredYear, setFilteredYear] = useState('2020');

  const addChangeSelectHandler = selectedYear => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  }
  // const title = props.title;
  // const amount = props.amount;
  // const description = props.description;
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeSelect={addChangeSelectHandler} />
      <ExpenseItem
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
        date={props.expenses[0].date}
      />
      <ExpenseItem
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
        date={props.expenses[1].date}
      />
      <ExpenseItem
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
        date={props.expenses[2].date}
      />
      <ExpenseItem
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
        date={props.expenses[3].date}
      />
    </Card>
  );
}
export default NewExpenses;

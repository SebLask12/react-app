import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";

import "./ExpensesFilter";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpesesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function NewExpenses(props) {
  const [filteredYear, setFilteredYear] = useState(2021);
  let filterArray = [...props.items];

  const addChangeSelectHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    filterArrayFunction(selectedYear);
  };

  const filterArrayFunction = (year = 2021) => {
    filterArray = filterArray.filter(
      (item) => item.date.getFullYear() === Number(year)
    );
    return filterArray;
  };

  filterArrayFunction(filteredYear);

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={filteredYear}
        onChangeSelect={addChangeSelectHandler}
      />
      <ExpensesChart expenses={filterArray} />
      <ExpesesList items={filterArray} />
    </Card>
  );
}
export default NewExpenses;

import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = props => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDate = enteredExpenseData => {
    const expenseData = {
      id: Math.random().toString(),
      ...enteredExpenseData,
    };
    console.log(expenseData);
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const startEditigHandler = () => {
    setIsEditing(true);
  };

  const stopEditigHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && (
        <button type="button" onClick={startEditigHandler}>
          Add New Expense
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseDate={saveExpenseDate}
          onCancel={stopEditigHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;

import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  /* const [userInput, setUserInput] = useState({   ---- We can manage multiple states in just one by using objects like this
        enteredTitle: '',
        enteredAmount:'',
        enteredDate:'',
    }); */

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    /* setUserInput({                       ------this aproach is not convenient to manage multiple states due to
            ...userInput,                       ------we are not ensuring that we are using the latest values for each state 
            enteredTitle: event.target.value,
        }); */
    /* setUserInput((prevState) => {                               ---- whit this aproach (arrow function) React is ensuring that is going to use the exact latest state for each value,
            return { ...prevState, enteredTitle: event.target.value }; ---- so, is better practice to manage it like this 
        });    */
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    /* setUserInput({
            ...userInput,
            enteredAmount: event.target.value,
        }); */
    /* setUserInput((prevState) => {
            return { ...prevState, enteredAmount: event.target.value };
        }); */
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    /* setUserInput({
            ...userInput,
            enteredDate: event.target.value
        }); */
    /* setUserInput((prevState) => {
            return { ...prevState, enteredDate: event.target.value };
        }); */
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense </button>
      </div>
    </form>
  );
};

export default ExpenseForm;

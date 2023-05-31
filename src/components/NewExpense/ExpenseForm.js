import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate),
        };
        props.onSaveExpenseData(expenseData)
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');
    };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls ">
        <div className="new-expense__control">
          <label>Title</label>
          <input 
          type="text" 
          value={enteredTitle} 
          onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input 
          type="number" 
          min="0.01" 
          step="0.01" 
          value={enteredAmount}
          onChange={amountChangeHandler}/>
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input 
          type="date" 
          min="2020-01-01" 
          max="2023-01-01" 
          value={enteredDate}
          onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="button" onClick={props.onCancel}> Cancel</button>
        <button type="submit" >Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;


//onChange event triggers every keystroke- can use this on all input types ie. dropdowns, etc. 

/*Like vanilla js- you automatically have a default (event). If you console.log(event) and start typing- it will return a big object, what we want in that object is under input => value. Better way to do it is console.log(event.target.value)  

This will give us what the user entered into the input when the event occurs! Once you reload, and console,log(event.target.value) it will log whatever the user types in.

So after we got that value, what do we do with it? We want to store it somewhere, so later when the form is submitted, we can use that value. 

store it in our setEnteredTitle state. 


useState('') always be an empty string because if you read the console.log(event.target.value) it will always be a string on the value. Even if it stores a number or date- it will be a string. 


To wipe the inputs after the user enters something, add value={} to each input. Point to entered__. Then in our submitHandler, add each entered__ ('') with an empty string to clear it. 
*/
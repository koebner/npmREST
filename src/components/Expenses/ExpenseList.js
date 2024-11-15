import React, { useState } from "react";
import "./ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import Modal from "../Modal/Modal";

function ExpenseList(props) {
  const [show, setShow] = useState(false);

  return (
    <Card className="expenses">
      <ExpenseFilter />
      <ExpenseItem
        title={props.expense[0].title}
        amount={props.expense[0].amount}
        date={props.expense[0].date}
      />
      <ExpenseItem
        title={props.expense[1].title}
        amount={props.expense[1].amount}
        date={props.expense[1].date}
      />
      <ExpenseItem
        title={props.expense[2].title}
        amount={props.expense[2].amount}
        date={props.expense[2].date}
      />
      <ExpenseItem
        title={props.expense[3].title}
        amount={props.expense[3].amount}
        date={props.expense[3].date}
      />
      <button onClick={() => setShow(true)}>Show modal</button>
      <Modal onClose={() => setShow(false)} show={show} />
    </Card>
  );
}

export default ExpenseList;

import react from "react";

import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

function ExpenseItem(props) {
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    
    </Card>
    </li>
  );
}

export default ExpenseItem;

/*Important to note that onClick is basically the eventhandler. It needs a function, which you can put in-line, but that's generally not good practice. Instead, define a variable above. 

Then you can simply point to that variable on the onClick. You aren't

You are not activating function in onClick. onClick={clickhandler()} -WRONG! no parentheses
*/


/*useState array- first value is the variable itself, the second value is the updating function. Use JS array destructuring to store them both in const. 
Again, first value is the pointer only. In this case we are pointing to the value stored in props.title. 
Second value is a function we will call later to set the new title, hence setTitle or set ____. 
*/

/*States are separated on a per-component instance. When we click updated on 1, only that one will update. */
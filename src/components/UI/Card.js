import './Card.css'

const Card = (props) => {
    const classes = 'card ' + props.className;

    return (
        <div className={classes}>{props.children}</div>
    )
}

export default Card;


/*children is a reserved name- the value will always be the content in the opening and closing braces of your custom component- in this case Card in ExpenseItem

      <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
That will be whats avaiable to props.children



const classes = 'card ' + props.className;
Anything we receive as props from that className is added to the 'card' string. 
*/
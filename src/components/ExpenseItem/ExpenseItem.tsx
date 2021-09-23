import Card from '../UI/Card/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';
import './ExpenseItem.css';

function ExpenseItem(props: any) {
    return (
        <Card className="expense-item">
            <div className="expense-item__date">
                <ExpenseDate date={props.item?.date}/>
            </div>
            <div className="expense-item__description">
                <span className="expense-item__title">{props.item?.title}</span>
                <div className="expense-item__price">
                    ${props.item?.price}
                </div>
            </div>
        </Card>
    );
}

export default ExpenseItem;
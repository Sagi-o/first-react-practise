import ExpenseItem from '../ExpenseItem/ExpenseItem';
import './ExpensesList.css';

const ExpensesList = (props: any) => {
    return (
        <>
            {!props.items?.length
                ? <span>No items on the list.</span>
                : props.items?.map((item: any, index: number) =>
                    (<ExpenseItem key={item.id} item={item} />))}
        </>
    );
}

export default ExpensesList;
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

const NewExpense = (props: any) => {
    const submitHandler = (data: any) => {
        const expenseData = {
            ...data,
            id: generateId(),
        };
        props.onNewExpense(expenseData);
    };

    const generateId = () => {
        return (Math.random() * 100).toFixed(0);
    }

    return (
        <div className="new-expense">
            <NewExpenseForm onSubmit={submitHandler}/>
        </div>
    );
};

export default NewExpense;
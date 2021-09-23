import './NewExpenseForm.css';
import { useState, useEffect } from 'react';

const defaultFormData = {
    title: '',
    price: '',
    date: '',
};

const NewExpenseForm = (props: any) => {
    const [formData, setFormData] = useState(defaultFormData);

    const inputChangedHandler = (e: any) => {
        setFormData((state) => ({ ...state, [e.target.name]: e.target.value }));
    };

    const submitHandler = (e: any) => {
        e.preventDefault();
        props.onSubmit({ ...formData, date: new Date(formData.date) })
        setFormData(defaultFormData);
    };

    useEffect(() => {
        console.log('On useEffect');
        const timer = setTimeout(() => {
            console.log('Send HTTP Request!');
        }, 500);
        return () => { clearTimeout(timer) }; // Dispose/Cleanup function
    }, [formData]);

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input name="title" value={formData.title} type="text" onChange={inputChangedHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Price</label>
                    <input name="price" value={formData.price} type="number" onChange={inputChangedHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input name="date" value={formData.date} type="date" min="2019-01-01" onChange={inputChangedHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default NewExpenseForm;
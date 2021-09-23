import { FunctionComponent } from "react";
import useInput from "../../../hooks/use-input";
import classes from './Input.module.css';

interface InputProps {
    id: string;
    label: string;
    type: string;
    value: string;
    placeholder?: string;
}

const Input: FunctionComponent<InputProps> = (props: InputProps) => {

    const validateValue = (value = '') => {        
        if (!value.trim()) {
            return 'Value is empty';
        }
        if (value.includes('!')) {
            return 'Value includes \'!\'';
        }
        return false;
    }

    const inputState = useInput(validateValue);

    const inputChangeHandler = (event: any) => {
        inputState.inputChangeHandler(event);
    }

    const inputBlurHandler = (event: any) => {
        inputState.inputBlurHandler(event);
    }

    const inputClasses = `${classes.input} ${inputState.error && classes.error}`;
    const hintClasses = `${classes.hint} ${inputState.error && classes.error}`;

    return (
        <div className={classes['input-container']}>
            <label htmlFor={props.id}>{props.label}</label>
            <input
                className={inputClasses}
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
                onChange={inputChangeHandler}
                onBlur={inputBlurHandler}
                value={props.value || inputState.value} />
            {inputState.error && <div className={hintClasses}>{inputState.error}</div>}
        </div>
    );
}

export default Input;
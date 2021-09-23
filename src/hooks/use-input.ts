import { useState } from "react";

const useInput = (validateValue: Function) => {
    const [inputState, setInputState] = useState({
        value: '',
        isTouched: false,
    });

    const isInvalid = validateValue(inputState.value);
    const error = inputState.isTouched && isInvalid;

    const inputChangeHandler = (event: any) => {
        setInputState({
            ...inputState,
            value: event.target.value,
        });

    };

    const inputBlurHandler = (event: any) => {
        setInputState({
            ...inputState,
            isTouched: true,
        });
    };

    const reset = () => {
        setInputState({
            value: '',
            isTouched: false,
        });
    }

    return {
        value: inputState.value,
        isInvalid: Boolean(isInvalid),
        error,
        reset,
        inputChangeHandler,
        inputBlurHandler,
    }
}

export default useInput;
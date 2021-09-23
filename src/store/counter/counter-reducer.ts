import { CounterAction, CounterState } from "./type"
import * as actionTypes from './counter-actions';

const initialCounterState: CounterState = {
    counter: 0,
}

const counterReducer = (state = initialCounterState, action: CounterAction): CounterState => {
    switch (action.type) {
        case actionTypes.INCREMENT: return { counter: state.counter + 1 };
        case actionTypes.DECREMENT: return { counter: state.counter - 1 };
        default: return state;
    }
}

export default counterReducer;
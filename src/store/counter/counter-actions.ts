import { CounterAction, DispatchType } from "./type";

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

// Action creators
export const increment = () => {
    const action: CounterAction = {
        type: INCREMENT,
        payload: {}
    }
    return simulateHttpRequest(action);
}

export const decrement = () => {
    const action: CounterAction = {
        type: DECREMENT,
        payload: {}
    }
    return simulateHttpRequest(action);
}


export const simulateHttpRequest = (action: CounterAction) => {
    return (dispatch: DispatchType) => {
      setTimeout(() => {
        dispatch(action)
      }, 500)
    }
  }
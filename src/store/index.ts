import { applyMiddleware, createStore, Store } from 'redux';
import { CounterAction, CounterState, DispatchType } from './counter/type';
import counterReducer from './counter/counter-reducer';
import thunk from "redux-thunk"

const store: Store<CounterState, CounterAction> & {
    dispatch: DispatchType
} = createStore(counterReducer, applyMiddleware(thunk))

export default store;
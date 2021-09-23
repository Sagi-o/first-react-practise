import { FunctionComponent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT } from "../../store/counter/counter-actions";
import classes from './MyStore.module.css';

interface MyStoreProps {
}

const MyStore: FunctionComponent<MyStoreProps> = () => {
    const state = useSelector(state => state);
    const dispatch = useDispatch();

    const incrementHandler = () => {
        dispatch({ type: INCREMENT })
    }

    const decrementHandler = () => {
        dispatch({ type: DECREMENT })
    }

    return (
        <div className={classes["my-store"]}>
            <div data-testid="title" className={classes['my-store__title']}>
                My Store
            </div>
            <div className={classes["my-store__state"]}>
                {JSON.stringify(state)}
            </div>

            <div className={classes["my-store__buttons"]}>
                <button onClick={incrementHandler}>
                    Increment
                </button>
                <button onClick={decrementHandler}>
                    Decrement
                </button>
            </div>
        </div>
    );
}

export default MyStore;
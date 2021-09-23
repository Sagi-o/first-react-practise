export type CounterState = {
    counter: number;
}

export type CounterAction = {
    type: string;
    payload: any;
}

type DispatchType = (args: CounterAction) => CounterAction
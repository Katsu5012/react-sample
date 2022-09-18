import { useReducer } from "react";

// const [現在の状態,dispatch]=useReducer(reducer,初期値)

// reducer(現在の状態,action)

type Action = 'decrement' | 'increment' | 'double'

type ReducerCounterProps = {
    initialValue: number
}

const caluculate = (currentNumber: number, action: Action) => {
    switch (action) {
        case 'increment':
            return currentNumber + 1;
        case 'decrement':
            return currentNumber - 1;
        case 'double':
            return currentNumber * 2;
        default:
            throw new Error('指定の文字が渡されていません')
    }
}

const ReducerCounter = (props: ReducerCounterProps) => {
    const { initialValue } = props;

    const [count, dispatch] = useReducer(caluculate, initialValue)

    return (
        <>
            <p>{count}</p>

            <button onClick={() => dispatch('increment')}>+1</button >

            <button onClick={() => dispatch('decrement')}>-1</button >

            <button onClick={() => dispatch('double')}>x2</button >
        </>
    )
}

export default ReducerCounter
import React, { useState, } from "react";
// const [状態,更新関数]=useState(初期値)

type CounterProps = {
    initialValue: number
}

const Counter = (props: CounterProps) => {
    const { initialValue } = props;
    const [count, setCount] = useState(initialValue);

    const [inputValue, setInputValue] = useState(10)

    const incrementCount = () => {
        setCount((prevValue) => { return prevValue + inputValue })
    }

    const decrementCount = () => {
        setCount((prevValue) => { return prevValue - inputValue })
    }

    // changeごとも手間なのでblurでイベントをとっていいかも
    const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const parseInt = Number(event.target.value)

        if (isNaN(parseInt)) {
            return alert('数字を入力してください')
        }

        setInputValue(parseInt)
    }

    return (
        <>
            <p>{count}</p>

            <input name="input" value={inputValue} onChange={handleChangeInput} />
            <button onClick={incrementCount}>+</button>
            <button onClick={decrementCount}>-</button>
        </>
    )
}

export default Counter


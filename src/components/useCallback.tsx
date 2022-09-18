import React, { useState, useCallback } from 'react'

type ButtonProps = {
  onClick: () => void
}

const DecrementButton = (props: ButtonProps) => {
  const { onClick } = props

  console.log('DecrementButton再描画')

  return <button onClick={onClick}>Decrement</button>
}

const IncrementButton = React.memo((props: ButtonProps) => {
  const { onClick } = props

  console.log('IncrementButton再描画')

  return <button onClick={onClick}>Increment</button>
})

const DoubletButton = React.memo((props: ButtonProps) => {
  const { onClick } = props

  console.log('DoubletButton再描画')

  return <button onClick={onClick}>Double</button>
})

const UseCallbackCounter = () => {
  const [count, setCount] = useState(0)

  const decrement = () => {
    setCount((prevState) => prevState - 1)
  }

  const increment = () => {
    setCount((prevState) => prevState + 1)
  }

  const double = useCallback(() => {
    setCount((prevState) => prevState * 2)
  }, [])

  return (
    <div>
      <p>--------------------------</p>
      <p>{count}</p>

      <DecrementButton onClick={decrement} />

      <IncrementButton onClick={increment} />

      <DoubletButton onClick={double} />
    </div>
  )
}

export default UseCallbackCounter

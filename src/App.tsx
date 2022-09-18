import React, { useState, useCallback } from 'react'

import Counter from './components/useState'
import ReducerCounter from './components/useReducer'
import UseMemoCounter from './components/memo'
import UseCallbackCounter from './components/useCallback'
import UseMemoSample from './components/useMemo'
import Clock from './components/useEffect'
import Button from './components/atoms/button'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleButtonClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1)
  }, [])

  return (
    <div className="App">
      <Counter initialValue={20} />

      <ReducerCounter initialValue={0} />

      <UseMemoCounter />

      <UseCallbackCounter />

      <UseMemoSample />

      <Clock />

      <p>------------------</p>
      {count}
      <Button onClick={handleButtonClick}>hello</Button>
    </div>
  )
}

export default App

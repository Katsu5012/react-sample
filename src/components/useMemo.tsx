import React, { useState, useMemo } from 'react'

const UseMemoSample = () => {
  const [text, setText] = useState('')

  const [items, setItems] = useState<string[]>([])

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value)
  }

  const onClickButton = () => {
    setItems((prevItems) => {
      return [...prevItems, text]
    })

    setText('')
  }

  const numberOfCharacters1 = items.reduce((sub, item) => {
    console.log('1')
    return sub + item.length
  }, 0)

  const numberOfCharacters2 = useMemo(() => {
    console.log('2')
    return items.reduce((sub, item) => {
      return sub + item.length
    }, 0)
  }, [items])

  return (
    <div>
      <div>
        <input value={text} onChange={onChangeInput} />
        <button onClick={onClickButton}>add</button>
      </div>

      <div>
        {items.map((item, index) => {
          return <p key={index}>{item}</p>
        })}
      </div>

      <div>
        <p>total number of character1:{numberOfCharacters1}</p>
        <p>total number of character2:{numberOfCharacters2}</p>
      </div>
    </div>
  )
}

export default UseMemoSample

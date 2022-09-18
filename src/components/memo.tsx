import { memo, useState } from 'react'

type FizzProps = {
  isFizz: boolean
}

const Fizz = (props: FizzProps) => {
  const { isFizz } = props
  console.log('Fizz再描画', `isFizz=${isFizz}`)

  return <span>{isFizz ? 'Fizz' : ''}</span>
}

type BuzzProps = {
  isBuzz: boolean
}

const Buzz = memo<BuzzProps>((props) => {
  const { isBuzz } = props

  console.log('Buzz再描画', `isFizz=${isBuzz}`)

  return <span>{isBuzz ? 'Buzz' : ''}</span>
})

const UseMemoCounter = () => {
  const [count, setCount] = useState(0)

  const isFizz = count % 3 === 0
  const isBuzz = count % 5 === 0

  console.log('親要素再描画')

  return (
    <div>
      {count}
      <button onClick={() => setCount((prevState) => prevState + 1)}>+1</button>

      <Fizz isFizz={isFizz} />

      <Buzz isBuzz={isBuzz} />
    </div>
  )
}

export default UseMemoCounter

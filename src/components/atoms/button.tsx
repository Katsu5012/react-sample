import React from 'react'

type ButtonProps = {
  children: React.ReactNode
  onClick: () => void
}

const Button = (props: ButtonProps) => {
  const { children, onClick } = props

  console.log('ボタン再描画')

  return <button onClick={onClick}>{children}</button>
}

export default Button

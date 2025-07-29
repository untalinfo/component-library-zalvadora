import React from 'react'

const TestComponent = () => {
  const [count, setCount] = React.useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  )
}

export default TestComponent

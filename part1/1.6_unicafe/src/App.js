import React, { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <RateButton text="good" handler={() => setGood(good + 1)} />
      <RateButton text="neutral" handler={() => setNeutral(neutral + 1)} />
      <RateButton text="bad" handler={() => setBad(bad + 1)} />
      <h1>statistics</h1>
      <RateResult text="good" num={good} />
      <RateResult text="neutral" num={neutral} />
      <RateResult text="bad" num={bad} />
    </div>
  )
}

const RateButton = ({text, handler}) => <button onClick={handler}>{text}</button>

const RateResult = ({text, num}) => <p>{text} {num}</p>

export default App
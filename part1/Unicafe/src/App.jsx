import { useState } from 'react'

// Show main headings
const Heading = ({heading}) => {
  return (
    <div>
      <h1>{heading}</h1>
    </div>
  )
}

// Shows buttons
const Button = ({onClick, text}) => {
  return (
    <button onClick={onClick}>{text}</button>
  )
}

// Shows scores
const Statistics = (props) => {
  if (props.value1 === 0 & props.value2 === 0 & props.value3 === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>  
    )
  }
  return (
    <table>
      <tbody>
        <tr>
          <td><StatisticLine text={props.text1}/></td>
          <td><StatisticLine text={props.value1}/></td>
        </tr>
        <tr>
          <td><StatisticLine text={props.text2}/></td>
          <td><StatisticLine text={props.value2}/></td>
        </tr>
        <tr>
          <td><StatisticLine text={props.text3}/></td>
          <td><StatisticLine text={props.value3}/></td>
        </tr>
        <tr>
          <td><StatisticLine text={props.text4}/></td>
          <td><StatisticLine text={props.value4}/></td>
        </tr>
        <tr>
          <td><StatisticLine text={props.text5}/></td>
          <td><StatisticLine text={props.value5}/></td>
        </tr>
        <tr>
          <td><StatisticLine text={props.text6}/></td>
          <td><StatisticLine text={props.value6}/></td>
        </tr>
      </tbody>
    </table>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <span>{text}{value}</span>
  )
}

const App = () => {

  // Save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)

  // Heading titles 
  const headings = ["Give Feedback", "Statistics"]

  // Button titles
  const buttons = ["Bad", "Neutral", "Good"]

  // Statistics titles
  const statistics = ["All", "Average", "Positive"]
  const [average, setAverage] = useState(0)
  const [values, setValues] = useState([])
  const [positive, setPositive] = useState(0)

  // Handling clicks on Bad
  const handleBad = () => {
    console.log("Before update bad:", bad)

    // New value of Bad
    const updatedBad = bad + 1
    setBad(updatedBad)
    console.log("After update", updatedBad)

    // New value of Total
    const updatedTotal = updatedBad + neutral + good
    setTotal(updatedTotal)
    console.log("Total", updatedTotal)

    // New value of Positive
    console.log("Before Update Updated Positive", positive)
    console.log("Before Update positive", positive)
    console.log("Before Update UpdatedTotal", updatedTotal)

    const updatedPositive = (good / updatedTotal) * 100
    setPositive(updatedPositive)
    console.log("Before After Updated Positive", updatedPositive)
    console.log("Before After positive", positive)
    console.log("Before After UpdatedTotal", updatedTotal)

    // New value for Average
    console.log("Before update values array: ", values)
    const updatedValues = values.concat(-1)
    setValues(updatedValues)
    console.log("After update values array: ", updatedValues)

    // Calculate the sum of values from values array
    let sum = 0
    updatedValues.forEach(num => {
      sum += num;
    })

    console.log("Sum: ", sum)
    
    // Get average of values from the array
    const newAverage = sum/updatedValues.length
      // Update the average value
    setAverage(newAverage)
  }

  // Handling clicks on Neutral
  const handleNeutral = () => {
    console.log("Before update", neutral)

    // New value of Neutral
    const updatedNeutral = neutral + 1
    setNeutral(updatedNeutral)
    console.log("After update", updatedNeutral)

    // New value of Total
    const updatedTotal = updatedNeutral + bad + good
    setTotal(updatedTotal)
    console.log("Total", updatedTotal)

    // New value of Positive
    const updatedPositive = (good / updatedTotal) * 100
    setPositive(updatedPositive)
    console.log("After update: positive", positive)
    
    // New value for Average
    console.log("Before update values array: ", values)
    const updatedValues = values.concat(0)
    setValues(updatedValues)
    console.log("After update values array: ", updatedValues)

    // Calculate the sum of values from values array
    let sum = 0
    updatedValues.forEach(num => {
      sum += num;
    })

    console.log("Sum: ", sum)
    
    // Get average of values from the array
    const newAverage = sum/updatedValues.length
      // Update the average value
    setAverage(newAverage)
  }

  // Handling clicks on Good
  const handleGood = () => {
    console.log("Before update", good)

    // New value of Good
    const updatedGood = good + 1
    setGood(updatedGood)
    console.log("After update", updatedGood)
    
    // New value of Total
    const updatedTotal = updatedGood + bad + neutral
    setTotal(updatedTotal)
    console.log("Total", updatedTotal)
    console.log("Positive before updated:", positive)

    // New value of Positive
    const updatedPositive = (updatedGood / updatedTotal) * 100
    setPositive(updatedPositive)
    console.log("After update: positive", positive)

    // New value for Average
    console.log("Before update values array: ", values)
    const updatedValues = values.concat(1)
    setValues(updatedValues)
    console.log("After update values array: ", updatedValues)

    // Calculate the sum of values from values array
    let sum = 0
    updatedValues.forEach(num => {
      sum += num;
    })

    console.log("Sum: ", sum)
    
    // Get average of values from the array
    const newAverage = sum/updatedValues.length
      // Update the average value
    setAverage(newAverage)
  }

  return (
    <div>
      <Heading heading={headings[0]}/>
      <Button onClick={handleBad} text={buttons[0]}/>
      <Button onClick={handleNeutral} text={buttons[1]}/>
      <Button onClick={handleGood} text={buttons[2]}/>
      <Heading heading={headings[1]}/>
      <Statistics value1={bad} value2={neutral} value3={good} value4={total} value5={average} value6={positive}
        text1={buttons[0]} text2={buttons[1]} text3={buttons[2]} text4={statistics[0]} text5={statistics[1]} text6={statistics[2]} />
    </div>
  )
}

export default App
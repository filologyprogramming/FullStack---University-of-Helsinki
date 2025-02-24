import { useState } from 'react'


const NextAnecdote = ({onClick}) => {
  return (
      <button onClick={onClick}>Next anectode</button>
  )
}

const Vote = ({onClick}) => {
  return (
    <button onClick={onClick}>Vote</button>
  )
}

const Counter = ({counter}) => {
  return (
      <p>Votes: {counter}</p>
  )
}

const MostVotedAcectode = ({anecdote}) => {
  return (
    <p>{anecdote}</p>
  )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
  
  // Create the empty array to store votes
  const array_length = anecdotes.length
  let initialVotes = new Array(array_length).fill(0)

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(initialVotes)
  
  // Generate a random number
  const handleNextAnectodeClick = () => {
    const random = Math.floor(Math.random() * (7 - 0 + 1) + 0);
    console.log("Selected: ", selected)
    console.log("Random number updated: ", random) 
    setSelected(random)  
  }

  // Update votes for an anectode
  const handleVotes = () => {
    const copy = [... votes]
    copy[selected] += 1
    setVotes(copy)
  }

  // Find index of anectode with largerst number of votes
  function indexOfMax(arr) {
    let maxIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > arr[maxIndex]) {
            maxIndex = i;
        }
    }
    console.log("Max index: ", maxIndex)
    return maxIndex;
}

  // Get most voted anectode
  let indexMostVotedAcectode = indexOfMax(votes)
  let mostVotedAcectode = anecdotes[indexMostVotedAcectode]


  return (
    <div>
      <h1>Anectode of the day</h1>
      {anecdotes[selected]}
      <div>
        <NextAnecdote onClick={handleNextAnectodeClick}/>
        <Vote onClick={handleVotes}/>
        <Counter counter={votes[selected]} />
      </div>
      <h1>Anectode with the most votes</h1>
      <MostVotedAcectode anecdote={mostVotedAcectode}/>
    </div>
  )
}

export default App
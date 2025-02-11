const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>{props.coursename} {props.number}</p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      {props.parts.map((part, index) => (
        <Part key={index} coursename={part.name} number={part.exercises}/>
        )
      )}
    </div>
  )
}

const Total = (props) => {
  console.log(props.total);
{/*}  let totalNumber = 0;
  props.total.forEach(total => {
    totalNumber += total.exercises;
  })
*/}

const totalNumberOfExercises = props.total.reduce((accumulator, total) => {
  console.log(accumulator)
  console.log(total)
  console.log(total.exercises)
  return accumulator += total.exercises;
}, 0)
console.log(totalNumberOfExercises)
  
  return (
    <div>
        <p>Total number of exerises {totalNumberOfExercises}</p>
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header maincourse={course.name}/>
      <Content parts={course.parts}/>
      <Total total={course.parts} />
    </div>
  )
}

export default App
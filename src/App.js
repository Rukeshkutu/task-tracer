// import React from  'react'//need for class based
import { useState } from 'react'  

import Header from './components/Header';
import Tasks from './components/Tasks';
function App() {
  const [tasks, setTasks ] = useState([
    {
        id: 1,
        text: 'Doctor Appointment',
        date: 'Feb 5th at 6:20am',
        remainder: true,
    },
    {
        id: 2,
        text: 'Job Interview',
        date: 'Mar 16th at 2:20pm',
        remainder: true,
    },
    {
        id: 3,
        text: 'Principle Appointment',
        date: 'Jan 5th at 7:20am',
        remainder: false,
    }
])

//Delete Task

  return (
    <div className="container">
      <Header />
      <Tasks  tasks = {tasks}/>
    </div>
  );
}


// class App extends React.Component{
//   render(){
//     return <h1>hello world please help me.</h1>
//   }
// }
export default App; 
import React from 'react'
import {FaTimes} from 'react-icons/fa'
const Task = ({task}) => {
  return (
    <div className='task'>
        <h3>{task.text} <FaTimes  style= {{color: 'red', crusor: 'pointer'}}/> </h3>
    </div>
  )
}

export default Task
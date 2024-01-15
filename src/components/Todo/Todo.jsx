import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons'
import './todo.css'

const Todo = ({task, toggleComplete, deleteTodo, editTodo}) => {
  return (
    <div className='Todo slide-top'>
      <p onClick={() => toggleComplete(task.id)} className={task.completed ? 'completed' : ""}>{task.task}</p>
      <div className='todo-icons'>
        <FontAwesomeIcon icon={faPenToSquare} onClick={() => editTodo(task.id)}/>
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)}/>
      </div>
    </div>
  )
}

export default Todo

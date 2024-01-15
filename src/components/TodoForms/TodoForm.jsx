import React, {useState} from 'react'
import './todoform.css'

const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState("")

    const handleSubmit = e => {
        e.preventDefault()
        addTodo(value)

        setValue("")
    }



  return (
    <div>
      <form className='TodoForm' onSubmit={handleSubmit}>

        <input className='form-input' placeholder='What are your tasks for today?' value={value} onChange={(e) => setValue(e.target.value)}></input><br></br>

        <button type='submit' className='todo-btn'>Add Task</button>
      </form>
    </div>
  )
}

export default TodoForm


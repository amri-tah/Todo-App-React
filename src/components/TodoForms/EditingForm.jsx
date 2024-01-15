import React, {useState} from 'react'
import './todoform.css'

const EditingForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task)

    const handleSubmit = e => {
        e.preventDefault()
        editTodo(value, task.id)

        setValue("")
    }

  return (
    <div>
      <form className='EditingForm' onSubmit={handleSubmit}>

        <input className='form-input' placeholder='Update Task!' value={value} onChange={(e) => setValue(e.target.value)}></input><br></br>

        <button type='submit' className='todo-btn'>Update Task</button>
      </form>
    </div>
  )
}

export default EditingForm


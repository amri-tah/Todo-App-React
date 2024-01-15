import React, {useState , useEffect} from 'react'
import TodoForm from '../components/TodoForms/TodoForm'
import EditingForm from '../components/TodoForms/EditingForm'
import Todo from '../components/Todo/Todo'
import './todowrapper.css'
import {v4 as uuidv4} from 'uuid';

const TodoWrapper = () => {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        console.log(todos);
      }, [todos]); // Log the todos array whenever it changes


    const addTodo = todo => {
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}])
    }
    
    const toggleComplete = id => {
        setTodos(todos.map(todo => todo.id === id ? {
            ...todo, completed: !todo.completed } : todo ))
    }

    const deleteTodo = id =>{
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const editTodo = id =>{
      setTodos(
        todos.map(todo => todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo))
    }

    const editTask = (task, id) => {
      setTodos(
        todos.map(todo => todo.id ===id ? {
        ...todo, task, isEditing: !todo.isEditing} : todo
      ))
    }

  return (
    <div className='wrapper scale-up-center'>
      <h3>Hello!</h3>
      <h1>Today's Tasks</h1>
      <TodoForm addTodo = {addTodo}/>

      {todos.map((todo, index) => (

        todo.isEditing ? (
          <EditingForm editTodo={editTask} task={todo}/>
        ) : (

        <Todo task={todo} key={index} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo}/>

        )

      ))}
      
    </div>
  )
}

export default TodoWrapper

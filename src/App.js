import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Feed/Walk the dogs',
        day: 'Oct 21st at 8:00am',
        reminder: true,
    },
    {
        id: 2,
        text: 'Leetcode problems',
        day: 'Oct 21st at 12:22pm',
        reminder: true,
    }
  ])

  const [showAddTask, setShowAddTask] = useState (false)

  // Add Task
  const addTask = (task) => {
    // ID will always be 1 greater than the heighest ID or 1
    const id = (tasks.length > 0) ? tasks[tasks.length-1].id + 1 : 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  // Delete Task
  const deleteTask = (id) => {
    setTasks(tasks.filter((tasks) => tasks.id !== id ))
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }

  return (
    <div className='container'>
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />} 
      {tasks.length > 0 ? (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />) : (<h2>No Tasks</h2>)}
    </div>
    
  )
}

export default App;
 
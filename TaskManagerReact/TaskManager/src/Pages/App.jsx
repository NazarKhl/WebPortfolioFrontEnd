import React, { useState, useEffect } from 'react';
import TaskList from '../Pages/TaskList';
import AddTaskForm from '../Pages/AddTaskForm';
import FilterControls from '../Pages/FilterControls';
import TaskChart from '../Pages/TaskChart';
import '../Style/styles.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [sortOrder, setSortOrder] = useState('asc');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed, date: new Date() } : task
    ));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'active') return !task.completed;
    return true;
  });

  const sortedTasks = [...filteredTasks].sort((a, b) => {
    if (sortOrder === 'asc') return a.text.localeCompare(b.text);
    return b.text.localeCompare(a.text);
  });

  return (
    <div className="app-container">
      <h1>Task Manager</h1>
      <AddTaskForm addTask={addTask} />
      <FilterControls
        filter={filter}
        setFilter={setFilter}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
      <TaskList
        tasks={sortedTasks}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />
      <TaskChart tasks={tasks} />
    </div>
  );
}

export default App;

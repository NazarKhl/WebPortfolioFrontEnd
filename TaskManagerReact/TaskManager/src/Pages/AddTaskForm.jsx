import React, { useState } from 'react';

function AddTaskForm({ addTask }) {
  const [taskText, setTaskText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask({ text: taskText, completed: false });
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="add-task-form">
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTaskForm;

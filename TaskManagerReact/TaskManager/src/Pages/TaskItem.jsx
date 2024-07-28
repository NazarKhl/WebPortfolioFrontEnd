import React from 'react';

function TaskItem({ task, deleteTask, toggleTaskCompletion }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
      />
      <span onClick={() => toggleTaskCompletion(task.id)}>
        {task.text}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </li>
  );
}

export default TaskItem;

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

function TaskChart({ tasks }) {
  const completedTasks = tasks.filter(task => task.completed);

  const data = {
    labels: [...new Set(completedTasks.map(task => task.date?.toDateString()))],
    datasets: [{
      label: 'Completed Tasks',
      data: completedTasks.reduce((acc, task) => {
        const date = task.date?.toDateString();
        acc[date] = (acc[date] || 0) + 1;
        return acc;
      }, {}),
      borderColor: '#1abc9c',
      backgroundColor: '#16a085',
      fill: false,
    }],
  };

  return (
    <div className="chart-container">
      <Line data={data} />
    </div>
  );
}

export default TaskChart;

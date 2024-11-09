# Documentation for projects
## 1) ToDo App documentation using localStorage
   
### Description:

This project creates a simple to-do list with the ability to add, remove, and mark tasks as completed. Data is stored in localStorage to save tasks between sessions.

### Project files:

index.html
Page structure: contains a header, an input field, an add button and a task list.
style.css
Styling: Designing the page to look pleasing using colors, fonts, and indents.
script.js

### Main functions:

LoadTasks(): Loads tasks from localStorage when the page loads.

addTask(): Adds a new task to the list and stores it in localStorage.

createTaskElement(text,complete): Creates an HTML task element and adds it to the list.

toggleTaskCompleted(taskSpan): Toggles the task status (completed/incomplete) and updates localStorage.

DeleteTask(deleteButton): Deletes a task from the DOM and localStorage.

saveTask(text, completed): Saves the new task to localStorage.

updateTaskStorage(): updates localStorage after changes in the list.

Add a task: Enter text in the box and click "Add task".

Grade Complete: Click on the task text to change its status.

Deleting a task: Press the "✖" button to delete a task.

### Characteristics:

localStorage: Data is stored locally, allowing the task list to be restored when the page is reloaded.

Interactive Interface: Easily manage your task list with just a few clicks.

## 2) Financial Control Panel Documentation

### Description:

This project is a simple financial dashboard to track your expenses. It has a user-friendly interface with a home page for adding expenses and a statistics page displaying a pie chart of expenses.

### Characteristics:

Add expenses: Users can enter expense descriptions and amounts.

Displaying expenses: all expenses are displayed in list form.

Remove expenses: Users can remove expenses from the list.

Persistent memory: uses local memory to save load between sessions.

Statistics Page: Displays a cost chart using Chart.js.

### Files: 

index.html
Home page where users can add and view expenses.

statistics.html
Displays a cost chart. Uses Chart.js for visual representation.

style.css
Contains styles for the entire project. It uses a dark theme with a modern design.

script.js
Supports functions for adding, displaying and removing costs.

charts.js
Renders a cost pie chart using data from localStorage.

### How to use:

Add costs:

Enter a description and a positive amount.

Click Add expense to save it.

See costs:

The added costs are listed below the input fields.

Remove costs:

Click the Delete button next to an expense to remove it.

See statistics:

Go to the Insights page to see a graph of your spending.

### Technology stack:

HTML/CSS

JavaScript

Chart.js for data visualization

## 3) Task Manager Documentation

### Description:

Task Manager is a React.js application that allows users to manage their tasks efficiently. It includes features like adding, removing, editing tasks, marking them as completed, and visualizing the progress of tasks using charts.

### Features:

Add Tasks: Users can add new tasks along with a description.

Delete Tasks: Remove tasks from the list.

Toggle Completion: Mark tasks as completed or active using checkboxes.

Task Filter: View all, active, or completed tasks.

Sort Tasks: Sort tasks alphabetically in ascending or descending order.

Task Completion Table: Visualize the number of completed tasks per day.

### Components

App.js: The main component that manages the state and logic.

TaskList.js: Renders a list of tasks.

TaskItem.js: Represents a single task with controls.

AddTaskForm.js: A form to add new tasks.

FilterControls.js: Controls for filtering and sorting tasks.

TaskChart.js: Displays a line chart of completed tasks.

### Usage:
Add a task: Enter a task description in the input field and click Add Task.

Delete a task: Click the Delete button next to the task.

Mark as Complete: Use this checkbox to mark tasks as completed.

Filtering and Sorting: Use the filter buttons to switch views and the sort buttons to change the order.

Chart View: The chart is automatically updated to reflect completed tasks.

### Dependencies:
React.js: A frontend library for building UIs.

Chart.js: A library for creating charts.

React Chart.js 2: A React wrapper for Chart.js.

### Local Storage:

Tasks are stored in localStorage to maintain data persistence across sessions.

// Selectors
const taskInput = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");

// Add task function
function addTask(event) {
	// Prevent form from submitting
	event.preventDefault();

	// Get task input value
	const taskValue = taskInput.value.trim();

	// If task value is not empty
	if (taskValue !== "") {
		// Create list item element
		const listItem = document.createElement("li");

		// Create span element to hold task text
		const taskSpan = document.createElement("span");
		taskSpan.textContent = taskValue;

		// Create button element to delete task
		const deleteBtn = document.createElement("button");
		deleteBtn.textContent = "Delete";

		// Add event listener to delete button
		deleteBtn.addEventListener("click", deleteTask);

		// Add span and button elements to list item
		listItem.appendChild(taskSpan);
		listItem.appendChild(deleteBtn);

		// Add list item to task list
		taskList.appendChild(listItem);

		// Clear task input
		taskInput.value = "";
	}
}

// Delete task function
function deleteTask() {
	// Remove list item from task list
	const listItem = this.parentNode;
	taskList.removeChild(listItem);
}

// Add event listener to add button
addBtn.addEventListener("click", addTask);

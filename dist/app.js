// Selectors
const dateDayElement = document.querySelector(".date__day");
const weekdayElement = document.querySelector(".weekday");
const dateMonthElement = document.querySelector(".date__month");
const dateYearElement = document.querySelector(".date__year");

const todoListElement = document.querySelector(".todo-list");
const todoElement = document.querySelector(".todo-element");
const todoFormInputElement = document.querySelector(".todo-form__input");

const finishTaskButtonElement = document.querySelector(
  ".todo-btn--finish-task"
);
const deleteTaskButtonElement = document.querySelector(
  ".todo-btn--delete-task"
);
const addTaskFormButtonElement = document.querySelector(
  ".todo-form__add-task-btn"
);

// Variables
let day, weekday, month, year;

// Functions
getDate();
updateDate();

// Event Listeners
todoFormInputElement.addEventListener("keypress", function (event) {
  if (event.key === "enter") {
    addTodoElement;
  }
});
document.addEventListener("DOMContentLoaded", getLocalStorageTodos);
addTaskFormButtonElement.addEventListener("click", addTodoElement);
todoListElement.addEventListener("click", deleteTodo);
todoListElement.addEventListener("click", finishTodo);

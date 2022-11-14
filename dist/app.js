// Selectors
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

// Functions
function addTodoElement(event) {
  event.preventDefault();

  const todoHtml = `
    <li class="todo-element">
    <div class="todo-title">${todoFormInputElement.value}</div>
            <div class="todo-btns-box">
            <button class="btn todo-btn--finish-task">
            <svg
            class="todo-btn--finish-task-icon"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                  >
                  <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                  </svg>
                  </button>
                  <button class="btn todo-btn--delete-task">
                  <svg
                  class="todo-btn--delete-task-icon"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                  >
                  <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                  />
                  </svg>
                  </button>
                  </div>
                  </li>
                  `;

  if (todoFormInputElement.value !== "" && todoFormInputElement.value !== " ") {
    todoListElement.insertAdjacentHTML("beforeend", todoHtml);
    todoFormInputElement.value = "";
  }
}

// Event Listeners
todoFormInputElement.addEventListener("keypress", function (event) {
  if (event.key === "enter") {
    addTodoElement;
  }
});
addTaskFormButtonElement.addEventListener("click", addTodoElement);

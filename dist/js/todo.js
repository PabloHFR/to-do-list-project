function generateTodoHtml(todoInputValue) {
  const todoHtml = `
  <li class="todo-element">
  <div class="todo-title">${todoInputValue}</div>
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
  return todoHtml;
}

function addTodoElement(event) {
  event.preventDefault();

  // Adds todo if input is not empty
  if (todoFormInputElement.value !== "" && todoFormInputElement.value !== " ") {
    todoListElement.insertAdjacentHTML(
      "beforeend",
      generateTodoHtml(todoFormInputElement.value)
    );

    // Adds todo to local storage
    saveLocalTodos(todoFormInputElement.value);

    // Clears input
    todoFormInputElement.value = "";
  }
}

function deleteTodo(event) {
  const item = event.target;

  if (item.closest("button")?.classList[1] === "todo-btn--delete-task") {
    const todo = event.target.parentElement.parentElement;
    todo.remove();
    removeLocalStorageTodos(todo);
  }
}

function finishTodo(event) {
  const item = event.target;

  if (item.closest("button")?.classList[1] === "todo-btn--finish-task") {
    item.children[0].classList.toggle("finished-todo-icon");
    item.parentElement.parentElement.children[0].classList.toggle(
      "finished-todo"
    );
  }
}

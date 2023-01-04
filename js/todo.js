const todoForm = document.querySelector("#todo");
const todoInput = document.querySelector("#todo input");
const todoList = document.querySelector("#todoList");
let todoArray = [];
const TODOARRAY_KEY = "todoArray";

const savedTodoArray = JSON.parse(localStorage.getItem(TODOARRAY_KEY));
if (savedTodoArray) {
  todoArray = savedTodoArray;
  savedTodoArray.forEach(todoToList);
}
todoForm.addEventListener("submit", todoFormSubmit);

function todoFormSubmit(event) {
  event.preventDefault();
  const todo = todoInput.value;
  todoInput.value = "";
  const todoObj = {
    id: Date.now(),
    text: todo,
  };
  todoToList(todoObj);

  todoArray.push(todoObj);
  saveTodo(todoArray);
}

function todoToList(todoObj) {
  const li = document.createElement("li");
  li.id = todoObj.id;
  const span = document.createElement("span");
  span.innerText = todoObj.text;
  const button = document.createElement("button");
  button.innerText = "✘";
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);

  button.addEventListener("click", xButtonClick);
}

function xButtonClick(event) {
  const xButtonLi = event.target.parentElement;
  xButtonLi.remove();
  deleteTodo(xButtonLi);
  saveTodo(todoArray);
}

function saveTodo(todoArray) {
  const todoArrayString = JSON.stringify(todoArray);
  localStorage.setItem(TODOARRAY_KEY, todoArrayString);
}

function deleteTodo(xButtonLi) {
  todoArray = todoArray.filter(
    (element) => element.id !== parseInt(xButtonLi.id)
  );
  /* 내가 먼저 해본 방법(findIndex)
  const index = todoArray.findIndex(
    (element) => element.id === parseInt(xButtonLi.id)
  );
  todoArray.splice(index, 1); 
  */
}

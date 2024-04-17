const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector(".todo-list");
const todoAddBtn = document.querySelector(".todo-add");

function addTodo() {
  if (todoInput.value === "") {
    document.querySelector(".message").style.display = "block";
  } else {
    let task = document.createElement("li");
    task.innerHTML = `${todoInput.value} <span class="material-symbols-outlined">close</span>`;
    todoList.appendChild(task);
    document.querySelector(".message").style.display = "none";
  }
  todoInput.value = "";

  todoList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("mark");
    } else if (e.target.tagName === "SPAN") {
      e.target.parentNode.remove();
    }
  });
}

todoAddBtn.addEventListener("click", addTodo);

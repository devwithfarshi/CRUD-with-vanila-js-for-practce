// get nassasary elements form DOM
const addTaskBtn = document.getElementById("add_btn");
const taskInputElement = document.getElementById("task_input");
const task_list_element = document.querySelector(".task_list");

// all task stror this array (tasks)
let tasks =
  localStorage.getItem("tasks") === null
    ? []
    : JSON.parse(localStorage.getItem("tasks"));

// Funstionss 👇
// unique id generator
const uniqueId = () => {
  const dateString = Date.now().toString(36);
  const randomness = Math.random().toString(36).substr(2);
  return dateString + randomness;
};

// createTodoInUi
const createTodoInUi = (taskName) => {
  //   create li for visible in DOM
  const li = document.createElement("li");
  li.classList.add("task");
  li.innerHTML = `<p>${taskName}</p>
    <section class="tast_actions">
      <div class="edit_icon">
        <i class="fa-regular fa-pen-to-square fa-fw"></i>
      </div>
      <div class="delete_icon">
        <i class="fa-solid fa-trash-can fa-fw"></i>
      </div>
    </section>`;
  task_list_element.appendChild(li);
};

const handleLoadTasks = () => {
  tasks.map((curTask) => {
    createTodoInUi(curTask.taskName);
  });
};

// add To do fun handleAddTask
const handleAddTask = () => {
  const value = taskInputElement.value;
  if (value != "") {
    const newTask = {
      id: uniqueId(),
      taskName: value,
      complete: false,
    };
    tasks.push(newTask);
    console.log(tasks);
    createTodoInUi(newTask.taskName);
    //   add to localstorage
    localStorage.setItem("tasks", JSON.stringify(tasks));
    taskInputElement.value = "";
  } else {
    alert("Required all filed!");
  }
};

// add event handleAddTask
addTaskBtn.addEventListener("click", handleAddTask);

// get tasks from localstorage
window.addEventListener("DOMContentLoaded", handleLoadTasks);

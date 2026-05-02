const fs = require('fs');
const command = process.argv[2];
const argument = process.argv[3];



function loadTasks() {
  if (!fs.existsSync('tasks.json')) {
    fs.writeFileSync('tasks.json', JSON.stringify([]));
  }

  const data = fs.readFileSync('tasks.json');
  return JSON.parse(data);
}

function saveTasks(tasks) {
  fs.writeFileSync('tasks.json', JSON.stringify(tasks, null, 2));
}

function addTask(description) {
  const tasks = loadTasks();

  const newTask = {
    id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
    description: description,
    status: "todo",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };

  tasks.push(newTask);
  saveTasks(tasks);

  console.log(`Task added (ID: ${newTask.id})`);
}

if (command === 'add') {
  addTask(argument);
}

function listTasks(filter) {
  const tasks = loadTasks();

  let filtered = tasks;

  if (filter) {
    filtered = tasks.filter(task => task.status === filter);
  }

  console.log(filtered);
}
if (command === 'list') {
  const filter = process.argv[3];
  listTasks(filter);
}

function updateTask(id, newDesc) {
  const tasks = loadTasks();

  const task = tasks.find(t => t.id == id);

  if (!task) {
    console.log("Task not found");
    return;
  }

  task.description = newDesc;
  task.updatedAt = new Date().toISOString();

  saveTasks(tasks);
  console.log("Task updated");
}
if (command === 'update') {
  const id = process.argv[3];
  const newDesc = process.argv[4];
  updateTask(id, newDesc);
}

function deleteTask(id) {
  let tasks = loadTasks();

  tasks = tasks.filter(t => t.id != id);

  saveTasks(tasks);
  console.log("Task deleted");
}
if (command === 'delete') {
  const id = process.argv[3];
  deleteTask(id);
}

function markTask(id, status) {
  const tasks = loadTasks();

  const task = tasks.find(t => t.id == id);

  if (!task) {
    console.log("Task not found");
    return;
  }

  task.status = status;
  task.updatedAt = new Date().toISOString();

  saveTasks(tasks);
}
if (command === 'mark-in-progress') {
  markTask(process.argv[3], 'in-progress');
}

if (command === 'mark-done') {
  markTask(process.argv[3], 'done');
}
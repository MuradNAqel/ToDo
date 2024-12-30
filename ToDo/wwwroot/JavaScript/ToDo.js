// Array to hold tasks
let tasks = [];

// Display the current date
document.getElementById("date").innerHTML = `Today, ${new Date().toDateString()}`;

// DOM Elements
const addBtn = document.getElementById("BtnAddToDo");
const ToDoTxt = document.getElementById("ToDoInput");
const ToDoList = document.getElementById("ToDos");

// Add event listener to the add button
addBtn.addEventListener("click", addToDo);

function addToDo() {
    const taskText = ToDoTxt.value.trim();
    if (taskText === "") return; // Do nothing if input is empty

    // Add task to the array
    tasks.push({
        text: taskText,
        isDone: false,
    });

    ToDoTxt.value = ""; // Clear the input field
    renderTaskList();
}

function renderTaskList() {
    // Clear the existing list to avoid duplication
    ToDoList.innerHTML = "";

    tasks.forEach((task, index) => {
        // Create task container
        const ToDo = document.createElement("div");
        ToDo.className = "row-list";

        // Create row for checkbox and text
        const checkBoxAndToDoTxtRow = document.createElement("div");
        checkBoxAndToDoTxtRow.className = "row";
        checkBoxAndToDoTxtRow.id = "chkAndTodo";

        const checkBox = document.createElement("input");
        checkBox.type = "checkbox";
        checkBox.checked = task.isDone;
        checkBox.addEventListener("change", () => {
            task.isDone = checkBox.checked;
        });

        const ToDoTxtElement = document.createElement("label");
        ToDoTxtElement.className = "toDoTxt";
        ToDoTxtElement.textContent = task.text;

        // Create row for action buttons
        const BtnsRow = document.createElement("div");
        BtnsRow.className = "row";

        const BtnEdit = document.createElement("button");
        BtnEdit.textContent = "🛠️";

        BtnEdit.addEventListener("click", () => {
            const updatedTask = prompt("Edit Task:", task.text);
            if (updatedTask !== null && updatedTask.trim() !== "") {
                tasks[index].text = updatedTask.trim();
                renderTaskList();
            }
        });

        const BtnDelete = document.createElement("button");
        BtnDelete.textContent = "🗑️";
        BtnDelete.addEventListener("click", () => {
            tasks.splice(index, 1); // Remove task from array
            renderTaskList();      // Re-render list
        });

        BtnsRow.appendChild(BtnEdit);
        BtnsRow.appendChild(BtnDelete);

        // Assemble task item
        checkBoxAndToDoTxtRow.appendChild(checkBox);
        checkBoxAndToDoTxtRow.appendChild(ToDoTxtElement);
        ToDo.appendChild(checkBoxAndToDoTxtRow);
        ToDo.appendChild(BtnsRow);

        // Add task to the list
        ToDoList.appendChild(ToDo);
    });
}


//<div class="row row-list">

//    <div class="row">

//            <input type="checkbox" />
//            <label class="toDoTxt">Finish this page</label>
//            <label>👌</label>
//    </div>

//    <div class="row">
//            <label class="time-box">🕒 11:00-12:00</label>
//            <div class="dotsBox">
//                <div class="dot"></div>
//                <div class="dot"></div>
//                <div class="dot"></div>
//            </div>
//    </div>

//    </div>

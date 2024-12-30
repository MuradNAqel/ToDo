
var date = new Date(); /*Today, Sun 29 Dec 2024*/
document.getElementById("date").innerHTML = "Today, " + date.toDateString();

//Create ToDo List


const addBtn = document.getElementById("BtnAddToDo");
const ToDoTxt = document.getElementById("ToDoInput");
const ToDoList = document.getElementById("ToDos");

addBtn.addEventListener("click", addToDo);

function addToDo(event) {
    //Main Row Containing 2 parts
    //1- checkBox and Todo text
    //2- Add edit and delete buttons
    const ToDo = document.createElement('div');
    ToDo.className = "row-list";
    

    const checkBoxAndToDoTxtRow = document.createElement('div');
    checkBoxAndToDoTxtRow.className = "row";

    //CheckBox and Todo txt
    const checkBox = document.createElement('input');
    checkBox.type = "checkbox";

    const ToDoTxtElement = document.createElement('label');
    ToDoTxtElement.className = "toDoTxt";
    ToDoTxtElement.innerHTML = ToDoTxt.value;

    // Edit and delete buttons inside row
    const BtnsRow = document.createElement('div');
    BtnsRow.className = "row";

    const BtnEdit = document.createElement('button');
    BtnEdit.textContent = "🛠️";
    BtnEdit.addEventListener(editToDo);

    const BtnDelete = document.createElement('button');
    BtnDelete.textContent = "🗑️";
    BtnDelete.addEventListener(deleteToDo);

    BtnsRow.appendChild(BtnEdit);
    BtnsRow.appendChild(BtnDelete);


    //Append all DOM Elements
    checkBoxAndToDoTxtRow.appendChild(checkBox);
    checkBoxAndToDoTxtRow.appendChild(ToDoTxtElement);
    ToDo.appendChild(checkBoxAndToDoTxtRow);
    ToDo.appendChild(BtnsRow);

    ToDoList.appendChild(ToDo);

    //Empty the input after *submit*
    ToDoTxt.value = "";

}

function editToDo(event) {
    
}

function deleteToDo(event) {

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

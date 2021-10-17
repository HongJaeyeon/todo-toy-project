const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input"); // same const todoInput = document.querySelector("#todo-form input");
const ul = document.querySelector("#todo-list");
const TODOARRAY_KEY = "todos";
let toDos = [];

// localStorage에는 string값만 저장 될 수 있어서 array,object를 "[","1","]"로 변환
function saveToDo(){
    localStorage.setItem(TODOARRAY_KEY, JSON.stringify(toDos));
}

function deleteToDo(e){
    // console.dir(e.target.parentElement);
    const parentli = e.target.parentElement;
    // console.log(typeof parentli.id);
    parentli.remove();
    // 일치하는 아이디 값이 들어왔을 때 false를 반환하므로 그 값을 fillter시킨 값으로 toDos를 update
    // parentli.id는 string값이므로 형변환
    toDos = toDos.filter((items) => items.id !== parseInt(parentli.id));
    saveToDo();
}

function printToDo(newToDoObject){
    const li = document.createElement("li");
    li.id = newToDoObject.id;
    const span = document.createElement("span");
    span.innerText = newToDoObject.text;
    const button = document.createElement("button");
    button.innerText = "X";
    li.appendChild(span);
    li.appendChild(button);
    ul.appendChild(li);
    button.addEventListener("click",deleteToDo);
}

function onToDoSubmit(e){
    e.preventDefault();
    const newToDo = toDoInput.value;
    toDoInput.value ="";
    //각 todo를 유일한 값, id값으로 다루고 싶어서 object로 선언함
    const newToDoObject = {text:newToDo, id:Date.now()};
    toDos.push(newToDoObject);
    printToDo(newToDoObject);
    saveToDo();
}

toDoForm.addEventListener("submit", onToDoSubmit);

const savedToDos = localStorage.getItem(TODOARRAY_KEY);

if (savedToDos){
    //forEach함수로 돌리기 위해 string이었던 값을 다시 배열,object로 변환
    const parsedToDos = JSON.parse(savedToDos);
    
    //let toDos로 선언하여 saved된 data(parse된 array,object)있을 시 toDos로 바꿈
    toDos = parsedToDos;

    // console.log(parsedToDos);
    //foreach array,object와 함께 사용하며 모든 원소를 for문 돌림
    parsedToDos.forEach(printToDo);
}
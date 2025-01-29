
const addBtn = document.getElementById("input-btn");
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container1");

function addTask(){
    if(inputBox.value === ''){
        alert("Please enter something.");
    }
    else{
        const li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = '';
        const deleteBtn = document.createElement("span");
        deleteBtn.innerHTML = "<img src=\"images/delete.png\" width=18>";
        li.appendChild(deleteBtn);
    }
    saveData();
}

addBtn.onclick = () => addTask();
document.onkeydown = (e) => {
    if(e.key === 'Enter'){
        addTask();
    }
}

listContainer.onclick = (e) => {
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.parentElement.remove();
    }
    else{
        
        if(e.target.style.textDecoration === ''){
            e.target.style.textDecoration = "line-through";
        }
        else{
            e.target.style.textDecoration = "";
        }
    }
    saveData();
}

function saveData() {
    localStorage.setItem("todo-data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("todo-data");
}
showTask()

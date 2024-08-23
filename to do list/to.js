// Retrieve taskList from local storage or initialize it if not present
let taskList = JSON.parse(localStorage.getItem('taskList')) || [{
    item: 'good',
    duedate: '02/07/2003'
}];

// Function to save taskList to local storage
function saveToLocalStorage() {
    localStorage.setItem('taskList', JSON.stringify(taskList));
}

// Function to add a new task
function addtodo() {
    let inputElement = document.querySelector('.task');
    let task = inputElement.value;
    let inputDate = document.querySelector('.time');
    let tododate = inputDate.value; 
    if (task === '' || tododate === '') {
        alert('Task or due date missing!!');
    } else {
        taskList.push({item: task, duedate: tododate});
        inputElement.value = '';
        inputDate.value = '';
        saveToLocalStorage(); // Save the updated taskList to local storage
        displayItems();
    }
}

// Function to display tasks
function displayItems() {
    let displayElemensts = document.querySelector('.todoitems');
    let newHtml = '';
    for (let i = 0; i < taskList.length; i++) {
        let todoitem = taskList[i].item;
        let duedate = taskList[i].duedate;
        newHtml += `<span>${todoitem}</span> <span>${duedate}</span><button class="del" onclick="deletetask(${i})">Delete</button>`;
    }
    displayElemensts.innerHTML = newHtml;
}

// Function to delete a task
function deletetask(i) {
    taskList.splice(i, 1);
    saveToLocalStorage(); // Save the updated taskList to local storage
    displayItems();
}

// Initial display of tasks
displayItems();
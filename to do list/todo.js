// array that will store tasks
let taskList = JSON.parse(localStorage.getItem('taskList')) || [{
    
}];

displayItems()
function addtodo(){
    
    let inputElement = document.querySelector('.task')
    let task = inputElement.value;
    let inputDate = document.querySelector('.time')
    let tododate = inputDate.value; 
    if(task === '' || tododate === ''){
        alert('task or due date missing!!');
    }else{
        taskList.push({item:task,duedate:tododate})
        

    // console.log(task)
        inputElement.value = '';
        inputDate.value='';
        localStorage.setItem('taskList',JSON.stringify(taskList))
        displayItems()
    }
    
}

function displayItems(){
    let displayElemensts  = document.querySelector('.todoitems');
    let newHtml = '';
    for(let i=0; i<taskList.length;i++ ){
        let todoitem = taskList[i].item
        let duedate = taskList[i].duedate
        newHtml += `  
                      <span>${todoitem}</span>         <span> ${duedate}</span><button class="del" onclick="deletetask(${i})">Delete</button> 
                    `
    }
    displayElemensts.innerHTML = newHtml;
   
}

function deletetask(i){
    taskList.splice(i,1);
    localStorage.setItem('taskList',JSON.stringify(taskList))

    displayItems()
}








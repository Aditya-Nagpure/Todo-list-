const todoList = [{
    name: 'Attend College',
    dueDate: '07-09-2023',
    dueTime: '08:00'
},
{
    name: 'Hit the gym',
    dueDate: '08-09-2023',
    dueTime: '19:00'
}];

renderTodoList();

function renderTodoList(){


    let todoListHTML = '';

    todoList.forEach(function(todoObject, index){

    const { name, dueDate, dueTime } = todoObject;
    const html = `
     <div>${name}</div> 
    <div>${dueDate}</div> 
    <div>${dueTime}</div>
    <button onclick="
      todoList.splice(${index}, 1);
      renderTodoList(); 
    " class= "delete-todo-button" >Delete</button> 
      `
      ;
    todoListHTML += html;

    });

    

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {

    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;
    const dateInputElement = document.querySelector('.js-due-date-input');
    const timeInputElement = document.querySelector('.js-due-time-input');
    const dueDate = dateInputElement.value;
    const dueTime = timeInputElement.value;

    todoList.push({
        //name: name,
        //dueDate: duedate,
        //dueTime: dueTime
        name,
        dueDate,
        dueTime
    });
    

    inputElement.value = '';

    renderTodoList();



    
}

//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listener
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);



//Functions
function addTodo(event){
    console.log("Hello")
    event.preventDefault();

    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    const newTodo =document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add("todo-item"); 
    todoDiv.appendChild(newTodo);

    const completedButton =document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);


    const trashButton =document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);


    todoList.appendChild(todoDiv);
    //Input a deger girildikten sonra kutunun icindekilerin silinmesi icin
    todoInput.value = "";
}

function deleteCheck(e){
    const item =e.target;
    console.log("Burda misin");
    console.log(item.classList[0]);

    //Delete
    if(item.classList[0] === "trash-btn"){
        console.log("Trash e bastin");
      const todo = item.parentElement;
      todo.classList.add('fall');
    //   todo.remove();
      todo.addEventListener("transitonend", function(){
        console.log("oldu mu");
        todo.remove();
      });
    }

   // Check
   if(item.classList[0] === "complete-btn"){
       const todo =item.parentElement;
       todo.classList.toggle("completed");
       console.log("Burdayim");
   } 
}
document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Please Enter a Task")
    }
    else{
        document.querySelector('#tasks').innerHTML += `
            <div class="task">
                <span id="taskname">
                    ${document.querySelector('#newtask input').value}
                </span>
                <button class="delete">
                <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
        `;

        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

        var tasks = document.querySelectorAll(".task");
        for (var i=0; i<tasks.length; i++){
            tasks[i].onclick = function(){
                this.classList.toggle('completed');
            }
        }    

        document.querySelector("#newtask input").value = "";
    }
}

const filterOption = document.querySelector(".filter-todo");

filterOption.addEventListener('click', filterTodo)

function filterTodo(e){
    const todos = todoList.childNodes;
    todos.forEach(function(todo){
        switch(e.target.value){
            case "all":
                todo.style.display = "flex"
                break;
                case "completed":
                    if(todo.classList.contains('completed')){
                        todo.style.display = "flex";
                    }else{
                        todo.style.display = "none";
                    }
                    break;
                    case "uncompleted":
                        if(!todo.classList.contains('completed')){
                            todo.style.display = "flex";
                        } else{
                            todo.style.display = "none";
                        }
                        break;
        }
    });
} 
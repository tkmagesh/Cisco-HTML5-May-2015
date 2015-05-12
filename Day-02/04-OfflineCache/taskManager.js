window.addEventListener("DOMContentLoaded", init);
    function init(){
        document.getElementById("btnAddTask").addEventListener("click", onBtnAddTaskClick);
        document.getElementById("btnRemoveCompleted").addEventListener("click", onBtnRemoveCompletedClick);

        for(var i=0; i<window.localStorage.length; i++){
            var id = window.localStorage.key(i);
            var taskName = window.localStorage.getItem(id);
            addTaskToList(id, taskName);
        }

    }
        function onBtnAddTaskClick(){
            var taskName = document.getElementById("txtTask").value;

            var id = Date.now();
            window.localStorage.setItem(id, taskName);
            addTaskToList(id, taskName);

        }

        function addTaskToList(id, taskName){
            var newTask = document.createElement("li");
            newTask.setAttribute("taskId", id);  ///
            newTask.innerHTML = taskName;
            newTask.addEventListener("click", onTaskItemClick);
            document.getElementById("olTaskList").appendChild(newTask);
        }

        function onTaskItemClick(){
            this.classList.toggle("completed");
        }
        function onBtnRemoveCompletedClick(){
            var taskItems = document.getElementById("olTaskList").children;
            for(var i=taskItems.length-1; i>=0; i--){
                var taskItem = taskItems[i];
                if (taskItem.classList.contains("completed")){
                    var idToRemove = taskItem.getAttribute("taskid");  ///
                    console.log(idToRemove + " id of the task to be removed");  ///
                    taskItem.remove();
                }
            }
        }

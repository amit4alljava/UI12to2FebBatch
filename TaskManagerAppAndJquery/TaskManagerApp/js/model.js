// function constructor
function Task(id, name,desc){
    this.id = id;
    this.name = name;
    this.desc = desc;
    this.isCompleted = false;
}
// taskoperations Object
var taskOperations={
    taskList:[],
    taskId :0,
    addTask:function(name,desc){
        this.taskId++;
        var task = new Task(this.taskId,name,desc);
        this.taskList.push(task);

    },
    toggleTask:function(id){
        this.taskList[id-1].isCompleted=!this.taskList[id-1].isCompleted;
    },
    deleteTask:function(){
       return this.taskList= this.taskList.filter(function(taskObject){
            return !taskObject.isCompleted;
        });
    },
    notCompleteCount:function(){
        return  this.taskList.filter(function(taskObject){
            return !taskObject.isCompleted;
        }).length;
    },
    completeCount:function(){
        return  this.taskList.filter(function(taskObject){
            return taskObject.isCompleted;
        }).length;
    }

}
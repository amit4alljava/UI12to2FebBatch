// function constructor
function Task(id, name,desc){
    this.id = id;
    this.name = name;
    this.desc = desc;
}
// taskoperations Object
var taskOperations={
    taskList:[],
    taskId :0,
    addTask:function(name,desc){
        this.taskId++;
        var task = new Task(this.taskId,name,desc);
        this.taskList.push(task);

    }
}
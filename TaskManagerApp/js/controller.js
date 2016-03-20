window.addEventListener("DOMContentLoaded",function(){
   document.getElementById("add")
       .addEventListener("click",addTask);
    document.getElementById("taskName").addEventListener("keyup",search);

});
function search(){
    var searchTxt = document.getElementById("taskName").value;
   var searchResult =  taskOperations.taskList.filter(function(task){
        return task.name.startsWith(searchTxt);
    });
    if(searchResult.length==0){
       console.log("Not Found...");
       // alert("Not Found...");
    }
    else
    {
        var ul =document.getElementById("taskList");
        ul.innerHTML="";
        searchResult.forEach(function(taskObject){
            var li = document.createElement("li");
            li.innerHTML=taskObject.name+ " "+taskObject.desc;
            ul.appendChild(li);
        })
    }


}
var rowNo =-1;
function validate(htmlObject){
    //alert("Inside Validate Call");
    var id = htmlObject.id;
    if(!id){
        id = this.id;
        htmlObject=this;
    }

    htmlObject=htmlObject.value;
    if(!htmlObject){
        if(id==="taskName"){
            rowNo=0;
        }
        if(id==="desc"){
            rowNo=1;
        }
        document.getElementsByTagName("table")[0].rows[rowNo].cells[2].innerHTML=id+" Can't Be Blank";
    }
    else{
        if(id==="taskName"){
            rowNo=0;
        }
        if(id==="desc"){
            rowNo=1;
        }
        document.getElementsByTagName("table")[0].rows[rowNo].cells[2].innerHTML="";
    }
    rowNo=-1;
}
function addTask(){

    var taskName = document.getElementById("taskName");
    var taskDesc = document.getElementById("desc");
    if(taskName && taskDesc){
       // taskName.addEventListener("keyup",validate);
        validate(taskName);
        validate(taskDesc);
        taskOperations.addTask(taskName.value,taskDesc.value);
        var ul =document.getElementById("taskList");
        var li = document.createElement("li");
        li.innerHTML=taskName.value + " "+taskDesc.value;
        ul.appendChild(li);
        /*taskName = taskName.value;
        taskDesc = taskDesc.value;
        if(!taskName){
            document.getElementsByTagName("table")[0].rows[0].cells[2].innerHTML="TaskName Can't Be Blank";
        }
        if(!taskDesc){
            document.getElementsByTagName("table")[0].rows[1].cells[2].innerHTML="TaskDesc Can't Be Blank";
        }*/

    }
    else{
        alert("HTML WRONG PLZ VERIFY")
    }


}
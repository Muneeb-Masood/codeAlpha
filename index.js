let taskList = [];

let addTaskBtn = document.getElementById("addTaskBtn");
let inputFieldForTask = document.getElementById("inputFieldForTask");
// let deleteButton =  "";


addTaskBtn.addEventListener("click" , ()=>{

    if(inputFieldForTask.value!=""){
         let deleteButton = document.createElement("button");
        deleteButton.innerHTML = "Delete";
        deleteButton.className = "deleteButton";
    
    
    taskList.push(inputFieldForTask.value);
    let content =document.createElement("div");
    content.innerText = inputFieldForTask.value; 
    content.appendChild(deleteButton);
    content.className = "addedDiv";
    document.getElementById("rowForFieldAndBtn").insertAdjacentElement("afterend" , content);
    
    inputFieldForTask.value= "";
    let deleteButtonList = document.getElementsByClassName("addedDiv")[0].getElementsByClassName("deleteButton");
    console.log(deleteButtonList);
    deleteButtonList[0].addEventListener("click",function(){
        console.log("Muneeb Bahis");
        this.parentNode.remove();
        
    })
 
   
    }
    
    
});


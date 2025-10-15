let inputs = document.getElementById("inp");
let text = document.querySelector(".text");

function Add() {
  if(inputs.value === ""){
    alert("Plaese Enter the Task");
  }
  else{
    let newEle = document.createElement("li");
    newEle.innerHTML =`${inputs.value}`;
    text.appendChild(newEle);
    inputs.value =  "";
    inputs.focus();
    deleteTask(newEle);
  }
}

function deleteTask(newEle){
  let deleteBtn = document.createElement('button');
  deleteBtn.textContent = "Delete";
  newEle.appendChild(deleteBtn);
  deleteBtn.onclick = function(){
    newEle.remove();
  }
}
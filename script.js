const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
  if(inputBox.value === ''){
    alert("You must write something!");
  }
  else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value; // store task
    listContainer.appendChild(li); //displayed in list container
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  // after adding task,make the input field empty
  inputBox.value = "";
  //after every task being added,we have to save data
  saveData();
}

//click function
listContainer.addEventListener("click",function(e){
  if(e.target.tagName === "LI"){
    //if clicked on LI,checked that is mark with a line
    e.target.classList.toggle("checked");
    saveData();
  }
  //task will be deleted : on clicking on cross icon
  else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData();
  }
},false);


//store task in browser after refreshing as well
function saveData(){
  localStorage.setItem("data",listContainer.innerHTML);
}
//display data when we open our website again
function showTask(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
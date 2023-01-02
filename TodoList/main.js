const toDoForm = document.querySelector('.js-toDoForm'),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector('.js-toDoList');
    
    const TODOS_LS = 'toDos';
    let toDos =[];
function saveToDos(){
        localStorage.setItem(TODOS_LS,JSON.stringify(toDos));
}
function paintToDo(text){
    const li = document.createElement('li');
    const span = document.createElement('span');
    span.innerHTML =text;
    li.appendChild(span);
    toDoList.appendChild(li);

    const toDoObj = {
        text : text,
        id : toDos.length+1
    }
    toDos.push(toDoObj);
    saveToDos(toDos);
}
function handlesubmit(event){
    event.preventDefault();
    const toDoText = toDoInput.value;
    paintToDo(toDoText);
    toDoInput.value="";
}
function loadToDolist(){
    const getList = JSON.parse(localStorage.getItem(TODOS_LS));
    if(getList === null){

    }else{
        getList.forEach(function(todo){
            paintToDo(todo.text);
        })
    }
}
// function remove(){
//     toDos.remove(text)
// }
function Allremove(){
    localStorage.clear();
}
function init(){
    
    loadToDolist();
    addToDo.addEventListener('click',handlesubmit);
    preview.addEventListener('click',)
    // RemoveToDo.addEventListener('click',remove);
    AllRemoveToDo.addEventListener('click',Allremove);

}
function pre(){
    const element = document.getElementById('content');
    element.innerHTML = "<div style='color:red'>A</div>";
}
function next(){
    thisMonth = new Date(currentYear, currentMonth + 1, 1);
    renderCalender(thisMonth); 
}
init();

var month = new Date();
month.getMonth()
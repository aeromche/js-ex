const works = [];
let counterId = 0;

function addToArray(){
    const titleInput = document.getElementById('title-input');
    const textInput = document.getElementById('text-input');
    const templateObj = {
        id : counterId++,
        title : titleInput.value,
        text: textInput.value,
        isDone : false,
    }
    works.push(templateObj)
    showWorks();
    titleInput.value = '';
    textInput.value = '';
    titleInput.focus();
}

function showWorks(){
    const myList = document.getElementById('list');
    let template = '';
    for(const work of works){
        template += `<div class = "${work.id} work ${work.isDone?"done":""}">
        <h2>${work.title}</h2>
        <h4>${work.text}</h4>
        <button onclick="doneProcces(${work.id})" class="${work.id}">${work.isDone?"reset":"done"}</button>
        <button onclick="deleteWork(${work.id})" class="${work.id}">delete</button>
        </div>`;
    }
    myList.innerHTML = template;
}

function doneProcces(workId){
    for(const work of works){
        if(work.id == workId){
            work.isDone = !work.isDone;
            break;
        }
    }
    showWorks();
}

function deleteWork(workId){
    for(let i = 0;i < works.length;i++){
        if(works[i].id == workId){
            works.splice(i,1);
            break;
        }
    }
    showWorks();
}
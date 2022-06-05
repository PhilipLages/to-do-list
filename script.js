function createNewTag(tag, element, value) {
  const createTag = document.createElement(tag);
  createTag.setAttribute(element, value);
  return createTag;
}

// Requisitos 1, 2 e 3 em HTML;
// Requisitos 4, 5, 6 e 7:
const container = document.getElementById('container');
const listButton = document.getElementById('criar-tarefa');
const toDoList = document.getElementById('lista-tarefas');
const input = document.getElementById('texto-tarefa');
const listItems = document.getElementsByClassName('item');

// Requisito 8:
function changeItemsBackgroudColor(e) {
  for (const item of listItems) {
    item.style.backgroundColor = 'white';
    e.target.style.backgroundColor = 'gray';
  }
}

// Requisito 9:
function createCompletedEvent(e) {
  e.target.classList.toggle('completed');
}

listButton.addEventListener('click', () => {
  toDoList.appendChild(createNewTag('Li', 'class', 'item'));
  toDoList.lastElementChild.innerText = input.value;
  toDoList.lastElementChild.addEventListener('click', changeItemsBackgroudColor);
  toDoList.lastElementChild.addEventListener('dblclick', createCompletedEvent);
});

listButton.addEventListener('click', () => {
  input.value = '';
});

// Requisito 10:
function createEraseBtn() {
  const removeAllBtn = document.getElementById('apaga-tudo');
  removeAllBtn.addEventListener('click', () => {
    toDoList.innerHTML = ' ';
  });
}
createEraseBtn();

// Requisito 11:
function removeCompleted() {
  const items = document.querySelectorAll('.completed');
  for (const item of items) {
    item.remove();
  }
}

function createEraseCompleted() {
  const removeFinishedBtn = document.getElementById('remover-finalizados');
  removeFinishedBtn.addEventListener('click', removeCompleted);
}
createEraseCompleted();

// Requisito 12:

function saveList() {  
  localStorage.setItem('Tarefas', toDoList.innerHTML);
}

function firstRender() {
  toDoList.innerHTML = localStorage.getItem('Tarefas');
  for (let item of listItems) {
    item.addEventListener('click', changeItemsBackgroudColor);
    item.addEventListener('dblclick', createCompletedEvent);
  }
}

window.onload = function () {
  firstRender();
};

function createSaveBtn() {
  const saveBtn = document.getElementById('salvar-tarefas');
  saveBtn.addEventListener('click', saveList);
}
createSaveBtn();

// Requisito 13:
function createUpBtn() {
  const UpBtn = document.getElementById('mover-cima');
  UpBtn.addEventListener('click', function() {
    let goUp;
    for (let up of listItems) {            
      if (up.style.backgroundColor === 'gray') {
        goUp = up;
      }
    }
    if (goUp && goUp.previousElementSibling)
    toDoList.insertBefore(goUp, goUp.previousElementSibling);
  });
}
createUpBtn();

function createDownBtn() {
  const UpBtn = document.getElementById('mover-baixo');
  UpBtn.addEventListener('click', function() {
    let goDown;
    for (let down of listItems) {      
      if (down.style.backgroundColor === 'gray') {
        goDown = down;              
      }
    }
    if (goDown && goDown.nextElementSibling)
    toDoList.insertBefore(goDown.nextElementSibling, goDown);
  });
}
createDownBtn();

// Requisito 14:
function removeItem() {
  for (let item of listItems) {
    if(item.style.backgroundColor === 'gray') {
      item.remove();
    }
  }
}

function createRemoveSelectedBtn() {
  const removeSelectedBtn = document.getElementById('remover-selecionado');
  removeSelectedBtn.addEventListener('click', removeItem);
}
createRemoveSelectedBtn();
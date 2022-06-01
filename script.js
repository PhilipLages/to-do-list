function createNewTag(tag, element, value) {
  const createTag = document.createElement(tag);
  createTag.setAttribute(element, value);
  return createTag;
}

// Requisitos 1, 2 e 3 em HTML;
// Requisitos 4, 5, 6 e 7:
const container = document.getElementById('container');

container.appendChild(createNewTag('button', 'id', 'criar-tarefa'));
const listButton = document.getElementById('criar-tarefa');
listButton.innerText = 'Adicionar';

container.appendChild(createNewTag('ol', 'id', 'lista-tarefas'));
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
  container.appendChild(createNewTag('button', 'id', 'apaga-tudo'));
  container.lastElementChild.innerText = 'Apagar tudo';
  container.lastElementChild.addEventListener('click', () => {
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
  container.appendChild(createNewTag('button', 'id', 'remover-finalizados'));
  container.lastElementChild.innerText = 'Apagar finalizadas';
  container.lastElementChild.addEventListener('click', removeCompleted);
}
createEraseCompleted();

// Requisito 12:

function saveList() {  
  const listItems = document.querySelectorAll('.item');
  let tarefas = [];  
  for (let item of listItems) {
    tarefas.push(item.innerText);
    localStorage.setItem('Tarefas', JSON.stringify(tarefas));
  }  
}

function saveNewItems() {
  const savedList= JSON.parse(localStorage.getItem('Tarefas'));
  const listItems = document.querySelectorAll('.item');
  for (let item of listItems) {
    savedList.push(item.innerText);
    localStorage.setItem('Tarefas', JSON.stringify(savedList));
  }
}

function firstRender() {
  if (localStorage.getItem('Tarefas') === null) {
    localStorage.setItem('Tarefas', JSON.stringify([]));
  } else {
    const listItems = JSON.parse(localStorage.getItem('Tarefas'));
    for (let item = 0; item < listItems.length; item += 1) {
      const listItem = toDoList.appendChild(createNewTag('Li', 'class', 'item'));
      listItem.innerText = listItems[item];
      toDoList.lastElementChild.addEventListener('click', changeItemsBackgroudColor);
      toDoList.lastElementChild.addEventListener('dblclick', createCompletedEvent);
    }
  }
}

window.onload = function() {
  firstRender();
}

function createSaveBtn() {
  container.appendChild(createNewTag('button', 'id', 'salvar-tarefas'));
  container.lastElementChild.innerText = 'Salvar lista';
  container.lastElementChild.addEventListener('click', saveList);
}
createSaveBtn();

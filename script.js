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
  for (const item of listItems) {
    item.style.textDecoration = 'none';
    e.target.style.textDecoration= 'line-through solid black';
    item.classList.remove('completed');
    e.target.classList.add('completed');
  }
};

function removeCompleted(e) {
  for (const item of listItems) { 
    if (item.style.textDecoration === 'line-through solid black')  
    e.target.style.textDecoration = 'none';
  }
}

listButton.addEventListener('click', () => {
  toDoList.appendChild(createNewTag('Li', 'class', 'item'));
  toDoList.lastElementChild.innerText = input.value;
  toDoList.lastElementChild.addEventListener('click', changeItemsBackgroudColor);
  toDoList.lastElementChild.addEventListener('dblclick', createCompletedEvent);
  toDoList.lastElementChild.addEventListener('dblclick', removeCompleted);
});

listButton.addEventListener('click', () => {
  console.log(input.value);
  input.value = '';
});

// Requisito 10:
function createEraseBtn() {
  container.appendChild(createNewTag('button', 'id', 'apaga-tudo'));
  container.lastElementChild.innerText = 'Apagar tarefas';
  container.lastElementChild.addEventListener('click', () => {
    toDoList.innerHTML = ' ';
  })
};
createEraseBtn();

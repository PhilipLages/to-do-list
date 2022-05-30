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

function changeItemsBackgroudColor(e) {
  e.target.style.backgroundColor = 'gray';
}

listButton.addEventListener('click', () => {
  toDoList.appendChild(createNewTag('Li', 'class', 'item'));
  toDoList.lastElementChild.innerText = input.value;
  toDoList.lastElementChild.addEventListener('click', changeItemsBackgroudColor);
});

listButton.addEventListener('click', () => {
  console.log(input.value);
  input.value = '';
});

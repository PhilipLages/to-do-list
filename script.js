function createNewTag(tag, element, value) {         
  const createTag = document.createElement(tag);        
  createTag.setAttribute(element, value);    
  return createTag;
}

// Requisitos 1, 2 e 3 em HTML;
// Requisito 4:
const container = document.getElementById('container');

container.appendChild(createNewTag('ol', 'id', 'lista-tarefas'));


const inputTarefa = document.querySelector('.input-tarefa');
const btnTarefa = document.querySelector('.btn-tarefa');
const tarefas = document.querySelector('.tarefas');

function criaLi() {
  const li = document.createElement('li');
  return li;
}

inputTarefa.addEventListener('keypress', function(e) {
  if(e.keyCode === 13) {
    if(!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

function limpaInput() {
  inputTarefa.value = '';
  inputTarefa.focus();
}

function criaBotaoApagar(li) {
  li.innerText += ' ';
  const btnApagar = document.createElement('button');
  btnApagar.innerText = 'Apagar';
  btnApagar.setAttribute('class', 'apagar');
  btnApagar.setAttribute('title', 'Apagar esta tarefa');
  li.appendChild(btnApagar);
}

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  limpaInput();
  criaBotaoApagar(li);
  salvarTarefas();
}

btnTarefa.addEventListener('click', function() {
  if(!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

document.addEventListener('click', function(event) {
  const el = event.target;

  if(el.classList.contains('apagar')) {
    el.parentElement.remove();
    salvarTarefas();
  }
});

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll('li');
  const listaDeTarefas = [];

  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText;
    tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
    listaDeTarefas.push(tarefaTexto);
  }

  const tarefasJSON = JSON.stringify(listaDeTarefas);  // Converte JSON para String
  localStorage.setItem('tarefas', tarefasJSON);  // Só pode salvar string, será salvo no navegador
}

function addTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas');
  const listaDeTarefas = JSON.parse(tarefas);  // Converte para um objeto JS

  for (let tarefa of listaDeTarefas) {
    criaTarefa(tarefa);
  }
} 

addTarefasSalvas();
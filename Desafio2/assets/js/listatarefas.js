// primeiro vamos selecionar os elementos html que desejamos alterar/mexer

const addTarefa = document.querySelector('.tarefa')
const inputTarefa = document.querySelector('.add-tarefa')
const inputButton = document.querySelector('.button-add')

function criaLi(){
    const li = document.createElement('li');
    return li;
}

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    addTarefa.appendChild(li)
}

inputButton.addEventListener('click', function(e){
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)
})

document.addEventListener('click', function(e){
    const el = e.target;

})
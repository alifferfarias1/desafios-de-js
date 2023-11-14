// primeiro vamos selecionar os elementos html que desejamos alterar/mexer
function listOfTaks(){

const addTarefa = document.querySelector('.tarefa')
const inputTarefa = document.querySelector('.add-tarefa')
const inputButton = document.querySelector('.button-add')

function criaLi(){
    const li = document.createElement('li');
    return li;
}
inputTarefa.addEventListener('keypress', function (e) {
    if (e.keyCode === 13){
        if (!inputTarefa.value) return;
        criaTarefa(inputTarefa.value);
    }
});


function limparInput(){
    inputTarefa.value = '';
    inputTarefa.focus();
}

inputButton.addEventListener('click', function(e){
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value)
})

function criaTarefa(textoInput){
    const li = criaLi();
    li.innerText = textoInput;
    addTarefa.appendChild(li)
    limparInput();
    criaBotaoApgar(li);
    saveTarefa();

}

function criaBotaoApgar(li){
    li.innerText += ' ';
    const btnDelet = document.createElement('button');
    btnDelet.innerText = 'Apagar';
    btnDelet.setAttribute('class', 'apagar');
    li.appendChild(btnDelet);
}

document.addEventListener('click', function(e){
    const el = e.target;
    if (el.classList.contains('apagar')){
        el.parentElement.remove()
        saveTarefa();
    }

})

function saveTarefa(){
    const liTarefas = addTarefa.querySelectorAll('li');
    const listaDeTarefas = [];
    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', ' ').trim();
        listaDeTarefas.push(tarefaTexto);
    }
    const tarefaJSON = JSON.stringify(listaDeTarefas);
    localStorage.setItem('tarefas', tarefaJSON);
}

function addTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas');
    const listaDeTarefas = JSON.parse(tarefas);

    for (let tarefa of listaDeTarefas){
        criaTarefa(tarefa)
    }
}
addTarefasSalvas();
};

listOfTaks();


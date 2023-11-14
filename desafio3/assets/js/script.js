const inputUm = document.querySelector('#numero-um')
const inputDois = document.querySelector('#numero-dois')
const inputOperador = document.querySelector('#operador')
const resultados = document.querySelector('#resultado')


const formulario = document.querySelector('.formulario');

function recebeEventoForm(e) {
    e.preventDefault();


    let numeroUm = Number(inputUm.value);
    let numeroDois = Number(inputDois.value);
    const operador = inputOperador.value;

    function calculadora(operador, numUm, numDois) {
        if (operador === '+') {
            let resultado = numUm + numDois;
            return resultado;
        }
        else if (operador === '-') {
            let resultado = numUm - numDois;
            return resultado;
        }
        else if (operador === '*') {
            let resultado = numUm * numDois;
            return resultado;
        }
        else if (operador === '/') {
            let resultado = numUm / numDois;
            return resultado;
        }
        else {
            alert('Algo deu errado.')
        }


    };

    function adicionaResultado(calculoPronto) {
        resultados.innerHTML = '';

        let p = document.createElement('p');

        p.innerHTML = `Resultado: ${calculoPronto} `;
        resultados.appendChild(p)


    }

    const calculoFinal = calculadora(operador, numeroUm, numeroDois);
    adicionaResultado(calculoFinal);




}

formulario.addEventListener('submit', recebeEventoForm);


// function verificaNum(){
//     let numeroUm = Number(inputUm.value)
//     let numeroDois = Number(inputDois.value)
//     console.log(numeroUm, numeroDois)
//

function validadorDeSenha() {

    const form = document.querySelector('.formulario')
    const inpSenha = document.querySelector('#isenha')

    function recebeEventoForm(e) {
        e.preventDefault();

        const senha = inpSenha.value;
        const tam = senha.length


        function verificaTamanho(tamanho) {
            if (tamanho < 8) {
                inpSenha.value = '';
                inpSenha.focus();
                alert('Senha com menos de 8 digitos...')
                return;
            }
        }


        function verificaMaiusculas() {
            let temMaiusc = false;

            for (let caractere of senha) {

                if (Number(caractere) == caractere) {
                    continue
                }
                if (caractere === caractere.toUpperCase()) {
                    temMaiusc = true;
                    break;
                }
            }

            if (!temMaiusc) {
                alert('Sua senha deve conter letras maiúsculas.');
                inpSenha.value = '';
                inpSenha.focus();
            }
            return;

        }

        function verificaNumeros() {
            let temNumero = false;

            for (let caractere of senha) {
                if (!isNaN(parseInt(caractere))) {
                    temNumero = true;
                    break; // Se encontrou um número, não é necessário continuar verificando.
                }
            }

            if (!temNumero) {
                alert('Sua senha deve conter números.');
                inpSenha.value = '';
                inpSenha.focus();
            }
            return;

        }


        verificaTamanho(tam);
        verificaMaiusculas();
        verificaNumeros();

    }

    form.addEventListener('submit', recebeEventoForm);
}

validadorDeSenha();
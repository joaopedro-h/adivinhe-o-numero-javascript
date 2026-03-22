let numeroMaquina;  /* Variável criada para armazenar o número gerado.*/
let jogadasUsuario = [];  /* Array que armazena as jogadas do usuário. */
let tentativas = 0;  /* Variável que armazena a quantidade de tentativas do usuário. */
let maximoTentativas = 10;  /* Variável que define a quantidade de tentativas. */

function iniciar() {  /* Função criada para gerar um número para máquina. */
    
    let numeros = []
    
    for (let i = 1; i <= 100; i++) {  /* For utilizado para adicionar ao array os números de 1 até 100. */
        numeros.push(i);
    }

    numeroMaquina = numeros[Math.floor(Math.random() * numeros.length)];
    console.log(numeroMaquina);
}

function comparacaoNumeros() {  /* Função criada para coletar as jogadas do usuário. */
    
    const jogadaUsuario = Number(document.getElementById("caixaDaJogada").value);
    jogadasUsuario.push(" " + jogadaUsuario);

    document.getElementById("jogadasUsuario").textContent = jogadasUsuario;
    

    if (tentativas < maximoTentativas) {  /* Compara o número de tentativas com o limite de tentativas. */
        
        if (jogadaUsuario > numeroMaquina) {

            document.getElementById("informacaoDaJogada").textContent = "O número secreto é menor!"
            document.getElementById("caixaDaJogada").value = "";  /* Limpa a caixa da jogada assim que o usuário faz uma tentativa. */
            tentativas++;  /* Adiciona uma tentativa a variável, que é usada em seguida para mostrar o número. */
            document.getElementById("numeroTentativas").textContent = tentativas;  /* Mostra o número de tentativas do usuário assim que faz a jogada. */
    
        }else if (jogadaUsuario < numeroMaquina) {

            document.getElementById("informacaoDaJogada").textContent = "O número secreto é maior!"
            document.getElementById("caixaDaJogada").value = "";
            tentativas++;
            document.getElementById("numeroTentativas").textContent = tentativas;
    
        }else {

            document.getElementById("informacaoDaJogada").textContent = "Parabéns, você acertou!"
            tentativas++;
            document.getElementById("numeroTentativas").textContent = tentativas;
            document.getElementById("caixaDaJogada").setAttribute("Readonly" , "Readonly"); 
            /* Assim que o usuário ganha/perde a caixa de jogadas é passada para somente leitura, não deixando fazer outra jogada.  */
            
        }

    }else {
        document.getElementById("informacaoDaJogada").textContent = "Você perdeu, o número era: " + numeroMaquina;
        document.getElementById("caixaDaJogada").setAttribute("Readonly" , "Readonly");
        /* Assim que o usuário ganha/perde a caixa de jogadas é passada para somente leitura, não deixando fazer outra jogada.  */
    }

}


function novoJogo() {  /* Função criada para dar reaload na página quando chamada. */
    window.location.reload();
}


const novoJogoBotao = document.getElementById("novoJogoBotao");  /* Variável armazena o ID do botão do HTML. */
novoJogoBotao.addEventListener("click", novoJogo);  /* Sempre que o botão for clicado irá ser executado a função "novoJogo" */




/*  
    Objetivo 1 - Quando o usuário clicar no botão 'mostrar mais' deve abrir os projetos que estão escondidos no html
       Passo 1 - Pegar o botão 'mostrar mais' no JS para poder verificar quando o usuário clicar em cima dele
       Passo 2 - Identificar o clique do botão
       Passo 3 - Adicionar a classe ativo nos projetos escondidos

    Objetivo 2 - Esconder o botão 'mostrar mais'
       Passo 1 - Pegar o botão e esconder ele
*/

// Objetivo 1 - Quando o usuário clicar no botão 'mostrar mais' deve abrir os projetos que estão escondidos no html
//  Passo 1 - Pegar o botão 'mostrar mais' no JS para poder verificar quando o usuário clicar em cima dele


// Variavéis
const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
// pegou o botão
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');
// seleciona tudo com class 'ativo'



botaoMostrarProjetos.addEventListener('click', () => {
   // Passo 3 - adicionar a classe "ativo" nos projetos escondidos
   mostrarMaisProjetos();
   // quando tem um argumento só na função pode omitir os ()
   // Objetivo 2 - esconder o botão de mostrar mais
   // Passo 1 - Pegar o botão es esconder ele
   esconderBotao();
});

function esconderBotao() {
   botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
   projetosInativos.forEach(projetoInativo => {
      projetoInativo.classList.add('ativo');
   });
}
// função de seta ()=>{} define a ação que vai acontecer

// O que foi feito com isto: foi adicionada a class 'ativo' aos que não tinham essa clas, por isso ao clicar no botão agora mostra todos,o botão adiciona essa class. E depois é  adicionada a class 'remover' para ele ser escondido.

// foi refatorado ao clicar no botao direito,depois extraido em escopo global e dado nome as funções.Isso torna mais fácil entender as funções 
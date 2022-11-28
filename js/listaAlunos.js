const listaDeAlunos = JSON.parse(localStorage.getItem("cadastro"))

for (i = 0; i < listaDeAlunos.length; i++) {
    if (listaDeAlunos[i].matriculaDoAluno >= 0) {
        insereTabela(listaDeAlunos[i]);               
    };    
};

function insereTabela(aluno) {
    let tabela = $(".lista-alunos").find("tbody");
    let botaoRemover = "<a href='#' class='botao-remover' data-matricula="+ aluno.matriculaDoAluno +
    "><img src='img/excluir.png' type='button' alt='exluir'></a>";
    let linha = "<tr>" + "<td class='center'>" + aluno.matriculaDoAluno + "</td>" +
        "<td>" + aluno.nomeDoAluno + "</td>" +
        "<td class='center'>" + botaoRemover + "</td>"
    "</tr>";
    
    tabela.append(linha);    
    
};

$(".botao-remover").click(function(evento){
    evento.preventDefault();
    let matricula = $(this).data("matricula");    
    console.log(matricula)
    $(this).parent().parent().remove(); 
    listaDeAlunos.splice(listaDeAlunos.findIndex(elemento => elemento.matriculaDoAluno == matricula), 1)
    localStorage.setItem("cadastro", JSON.stringify(listaDeAlunos));
    
    alert("Aluno removido com sucesso!");
});
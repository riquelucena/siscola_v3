let alunos = localStorage.getItem("cadastro");
let alunoObj = JSON.parse(alunos);
const alunosCadastrados = alunoObj;

$("#imagem-pesquisa").click(function () {
    let valor = $("#input-pesquisa").val();
    buscaDados(valor)
})

function buscaDados(dado) {
    for (i = 0; i < alunosCadastrados.length; i++) {
        if (alunosCadastrados[i].matriculaDoAluno === dado || alunosCadastrados[i].nomeDoAluno === dado) {
            let alunoEncontrado = alunosCadastrados[i];
            $(".numero").text(`Número de Matrícula: ${alunoEncontrado.matriculaDoAluno}`)
            $(".nome").text(`Nome do Aluno: ${alunoEncontrado.nomeDoAluno}`)
            $(".aniversario").text(`Data de Nascimento: ${alunoEncontrado.dataNascimento}`)
            $(".mae").text(`Nome da mãe do aluno: ${alunoEncontrado.nomeDaMae}`)
            $(".pai").text(`Nome do pai do aluno: ${alunoEncontrado.nomeDoPai}`)
            $(".telefone").text(`Telefone para contato: ${alunoEncontrado.telefone}`)
            $(".email").text(`E-mail para contato: ${alunoEncontrado.email}`)
        };
    };
};
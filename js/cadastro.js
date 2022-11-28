const alunosCadastro = [];

function cadastrar() {
    lerDados();
    limpar();
    localStorage.setItem("cadastro", JSON.stringify(alunosCadastro));
};

function lerDados() {
    let aluno = {
        matriculaDoAluno: numeroMatricula.value,
        nomeDoAluno: document.getElementById("nome-aluno").value,
        nomeDoPai: document.getElementById("nome-pai").value,
        nomeDaMae: document.getElementById("nome-mae").value,
        telefone: document.getElementById("telefone").value,
        email: document.getElementById("email").value,
    };

    let dataInput = document.getElementById("data-nascimento").value;
    let dataFormatada = dataInput.split('-').reverse().join('/');
    aluno.dataNascimento = dataFormatada;
    
    validaCampos(aluno);
    validaMatricula(aluno);        
};

let numeroMatricula = document.querySelector("#num-matricula");
numeroMatricula.addEventListener("click", function () {
    numeroMatricula.value = parseInt(numeroMatricula.value) + 1;
});

function validaCampos(aluno) {
    if(aluno.matriculaDoAluno != "0" && aluno.nomeDoAluno != "" && aluno.nomeDoPai != "" && aluno.nomeDaMae != ""
    && aluno.dataNascimento != "" && aluno.telefone != "" && aluno.email != "") {
        alunosCadastro.push(aluno);
        alert("Aluno cadastrado com sucesso!");
    } else {
        alert("Digite os dados do aluno que deseja cadastrar.");
    };    
};

function limpar() {
    document.getElementById("nome-aluno").value = "";
    document.getElementById("data-nascimento").value = "";
    document.getElementById("nome-pai").value = "";
    document.getElementById("nome-mae").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("email").value = "";
};
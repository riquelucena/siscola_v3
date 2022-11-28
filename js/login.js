function login() {
    dadosLogin();
    limpar();
};

function dadosLogin() {
    let emailDigitado = document.getElementById("email-login").value;
    let senhaDigitada = document.getElementById("senha-login").value;
    let email = "riquelucena@gmail.com"
    let senha = "2651803lhl"

    if (email === emailDigitado && senha === senhaDigitada) {
        let cadastro = document.getElementsByTagName("a")[0];
        let atributoCadastro = document.createAttribute("href");
        atributoCadastro.value = "cadastro.html";
        cadastro.setAttributeNode(atributoCadastro);

        let lista = document.getElementsByTagName("a")[1];
        let atributoLista = document.createAttribute("href");
        atributoLista.value = "lista_alunos.html";
        lista.setAttributeNode(atributoLista);

        let busca = document.getElementsByTagName("a")[2];
        let atributoBusca = document.createAttribute("href");
        atributoBusca.value = "busca_alunos.html";
        busca.setAttributeNode(atributoBusca);

        alert("Atalhos liberados! Seja bem-vindo!");

    } else {

        alert("Login ou senha inválidos!\nDigite o login e a senha para continuar!");
    };
};

function limpar() {
    document.getElementById("email-login").value = "";
    document.getElementById("senha-login").value = "";
};

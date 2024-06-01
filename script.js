const campoLogin = document.getElementById("login")
const campoSenha = document.getElementById("password")
const campoNovoLogin = document.getElementById("NovoLogin")
const campoNovaSenha = document.getElementById("NovaSenha")
const campoRepSenha = document.getElementById("RepSenha")
let login2 = "";
let usuarios = [];

function alunoLogin(){
    login2 = "aluno"
}

function bibliLogin(){
    login2 = "bibli"
}

function login() {
    let login = campoLogin.value;
    let senha = campoSenha.value;
    let mensagem = "Usuario ou senha incorreto";
    for (let usuario of usuarios) {
        if (usuario.login == login && usuario.senha == senha) {
            mensagem = "Parabéns, você está logado";
            localStorage.setItem("logado", JSON.stringify(usuario));

            if(login2 == "aluno"){
                window.location.href = "http://127.0.0.1:5500/inicioaluno.html"
            } else if(login2 == "bibli"){
                window.location.href = "http://127.0.0.1:5500/bibliotecaria.html"
            }
            break;
        }
    }
    alert(mensagem)
}
function cadastrar() {
    if (campoNovaSenha.value == campoRepSenha.value) {
        const usuario = {
            login: campoNovoLogin.value,
            senha: campoNovaSenha.value
        }
        usuarios.push(usuario);
        alert("Cadastrado com sucesso!")
    } else {
        alert("As senhas são diferentes!")
    }



}
const campoLogin = document.getElementById("login")
const campoSenha = document.getElementById("password")
const campoNovoLogin = document.getElementById("NovoLogin")
const campoNovaSenha = document.getElementById("NovaSenha")
const campoRepSenha = document.getElementById("RepSenha")
let usuarios = [];

function login() {
    let login = campoLogin.value;
    let senha = campoSenha.value;
    let mensagem = "Usuario ou senha incorreto";
    for (let usuario of usuarios) {
        if (usuario.login == login && usuario.senha == senha) {
            mensagem = "Parabéns, você está logado";
            localStorage.setItem("logado", JSON.stringify(usuario));
            window.location.href = "telainicial.html"
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
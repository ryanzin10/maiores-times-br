function Validar(){
    var nome = formulario.nome
    var email = formulario.email
    var msg = formulario.msg

    if (nome.value == ""){
        alert("O campo NOME está vazio!")
        nome.focus()
    }
    else if (email.value == ""){
        alert("O campo EMAIL está vazio!")
        email.focus()
    }
    else if (email.value.indexOf("@") == -1){
        alert("O campo EMAIL deve conter um @")
        email.focus()
    }
    else if (msg.value == ""){
        alert("O campo MENSAGEM está vazio!")
        msg.focus()
    }
    else{
        alert("Remetente: " + nome.value + "\nEmail: " + email.value + "\nMensagem: \n" + msg.value + "\n\nEnviado com sucesso!")
        window.location.href = "index.html"
    }
}
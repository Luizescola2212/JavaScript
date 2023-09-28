function funcaoResposta(){
    var respostaCorreta = "correta";
    var respostaUsuario = document.querySelector('input[name="resposta"]:checked');
    if(respostaUsuario){
        if(respostausuario.value === respostaCorreta){
            document.getElementById("retorno").textContent = "Aeeee Otário, Acertou!";
        }
        else{
            document.getElementById("retorno").textContent = "Burrãoooo!";
        }
    }
    else{
        document.getElementById("retorno").textContent = "tem que escolher algo né doidão";
    }
}
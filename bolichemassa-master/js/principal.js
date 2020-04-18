
function startingGame(){
    var numJogadores = document.getElementById('numberPlayers');    
    if(numJogadores.value < 0 || numJogadores.value > 3 || numJogadores.value == 0){
        alert("O numero de jogadores ter que ser maior que 0 e menos que 3");
        return;
    }    
    
    $('#start').hide();
    $('#numberPlayers').hide();

    if(numJogadores.value > 0 && numJogadores.value < 4){
        for(var i = 0;i < numJogadores.value; i++){

            var campoTexto = document.createElement("input");
            var label = document.createElement('label');
            label.setAttribute("id", "label"+i);
            campoTexto.setAttribute("id", "jogador"+i);
            campoTexto.setAttribute("name", "jogador"+i);


            document.getElementById("siglaJogadores").appendChild(label)
            document.getElementById("siglaJogadores").appendChild(campoTexto);

            document.getElementById('label'+ i).innerHTML = 'Jogador '+ (i + 1);

        }    
        document.getElementById("startarJogo").innerHTML = "<button type='submit' id='playGame' onClick='setNames("+numJogadores.value+")'>JOGAR!</button>";

    }    
}


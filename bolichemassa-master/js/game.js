var jogada = 1;
var jogadaBolas = 1;
var numeroDoJogador = 1;
var numeroDeJogadores = 0;
var lastJogadaBola = 0;
function replay(){
    $(location).attr('href', 'http://localhost/bolichemassa/principal.html')
}

function playARoll(numeroDeJogadoresParam){
    if (numeroDeJogadores != numeroDeJogadoresParam) numeroDeJogadores = numeroDeJogadoresParam;

    var bola1;
    var bola2;
    bola1 = getRandomInt(0, 11);
    if(bola1 == 10){
        bola2 = 0;
        updatePlacar(bola1, 0);
    }else{
        bola2 = getRandomInt(0, (11 - bola1));
        if(bola1 + bola2 == 10){
            updatePlacar(bola1, bola2);
        }else{
            updatePlacar(bola1, bola2);
        }
    }
    if(jogada == 11 && jogadaBolas == 21 && numeroDoJogador == (numeroDeJogadores + 1)) $('#play').hide();
}

function updatePlacar(bola1, bola2 = null){
    if(jogada == 11 && jogadaBolas == 21){
        alert("Jogo ja acabou ^^ ");
        return;
    }else{
        if(numeroDoJogador > numeroDeJogadores) numeroDoJogador = 1;
        var playerName = $('#player' + numeroDoJogador).text();
        aplicarPontos(playerName, bola1, bola2);
        numeroDoJogador ++;
    }
}


function aplicarPontos(playerName, bola1, bola2){
    $('#jogada_' + playerName + '_' + jogadaBolas).text(bola1); 
        jogadaBolas++;
    $('#jogada_' + playerName + '_' + jogadaBolas).text(bola2); 
        jogadaBolas++;


    if(lastJogadaBola < jogadaBolas) lastJogadaBola = jogadaBolas;

    if(jogada == 1){
        $('#total_' + playerName + '_' + jogada).text(bola1 + bola2);
        if(numeroDoJogador == numeroDeJogadores) jogada++;
        if(numeroDoJogador != numeroDeJogadores) jogadaBolas = (lastJogadaBola - 2);
    }else{
        var verificacao = verificarJogadaAnterior(playerName);
        switch(verificacao){
            case 'strike':
                pontoStrike(jogada, playerName, bola1, bola2);
                if(numeroDoJogador == numeroDeJogadores) jogada++;
                break;
            case 'spare':
                pontoSpare(jogada, playerName, bola1, bola2);
                if(numeroDoJogador == numeroDeJogadores) jogada++;
                break
            case 'NP':
                pontoNP(jogada, playerName, bola1, bola2);
                if(numeroDoJogador == numeroDeJogadores) jogada++;
                break;
        }
    }
    
}

function verificarJogadaAnterior(playerName){ //izi malia
    var bola1_anterior = parseInt($('#jogada_' + playerName + '_' + (jogadaBolas - 4)).text());
    var bola2_anterior = parseInt($('#jogada_' + playerName + '_' + (jogadaBolas - 3)).text());

    if(numeroDoJogador != numeroDeJogadores) jogadaBolas = (lastJogadaBola - 2);
        
    if(bola1_anterior == 10){
        return 'strike';
    }else if(bola1_anterior + bola2_anterior == 10){
        return 'spare';
    }else{
        return 'NP';
    }
}


function pontoStrike(jogada, playerName, bola1, bola2){
    var totalJogadaAnterior = parseInt($('#total_' + playerName + '_' + (jogada - 1)).text());
    totalJogadaAnterior += bola1 + bola2;
    $('#total_' + playerName + '_' + (jogada - 1)).text(totalJogadaAnterior);
    $('#total_' + playerName + '_' + jogada).text(bola1 + bola2 + totalJogadaAnterior);
}

function pontoSpare(jogada, playerName, bola1, bola2){
    var totalJogadaAnterior = parseInt($('#total_' + playerName + '_' + (jogada - 1)).text());
    totalJogadaAnterior += bola1;
    $('#total_' + playerName + '_' + (jogada - 1)).text(totalJogadaAnterior);
    $('#total_' + playerName + '_' + jogada).text(bola1 + bola2 + totalJogadaAnterior);
}

function pontoNP(jogada, playerName, bola1, bola2){
    var totalJogadaAnterior = parseInt($('#total_' + playerName + '_' + (jogada - 1)).text());
    $('#total_' + playerName + '_' + jogada).text(bola1 + bola2 + totalJogadaAnterior);
}



/*function playAllGame(){
    for (var i = 0; i < 11; i++) {
        playARoll(i);
    }
}*/

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
<?php 
    $jogadores = $_POST;
    
    $countPlayer = 0;
    $numJogadores = count($jogadores);
    $html = '<link rel="stylesheet" href="css/bootstrap.css">';
    $html .= '<div class="table"><table class="table-bordered text-center">';
    $html .= '<tr>
                 <th colspan="22"> PLACAR </th>
              </tr>';
    $html .= '<tr><th> NOME </th>';
    for($i = 1; $i <= 10; $i++){
        if($i == 10){
            $html .= '<th colspan="3"> RODADA '.$i.'</th>';
        }
        else{
            $html .= '<th colspan="2"> RODADA '.$i.'</th>';
        }
    }
    $html .= '</tr>';
    foreach($jogadores as $jooj){
        $html .= '<tr id="pinos_' . $jooj .'"><th>PINOS</td>';
        for($i = 1; $i <= 21; $i++) {
            $html .= '<td id="jogada_'.$jooj.'_'.$i.'"></td>';
        }
        $countPlayer++; //countPlayer é uma variavel que diferencia os jogares na TR para usar no JS
        $html .= '</tr>
                  <tr>
                      <th id="player'.$countPlayer.'">'.$jooj.'</th>'; 
        for($i = 1; $i <= 10; $i++){                                  
            if($i == 10){
                $html .= '<th id="total_'.$jooj.'_'.$i.'" colspan="3"></th>';
            }
            else{
                $html .= '<th id="total_'.$jooj.'_'.$i.'" colspan="2"></th>';
            }
        }
        $html .= '</tr>';
    }
    $html .= '</table></div>';
    $html .= '<div><button id="play" onclick="playARoll('.$countPlayer.')">Realizar Jogada Única</button></div>';
    echo  $html .= '<div><button id="replay" onclick="replay()">Recomeçar Jogo</button></div>';
    // echo  $html .= '<div><button id="playAll" onclick="playAllGame()">Realizar Todas as Jogadas</button></div>';
?>
    <script src="js/jquery.js"></script>
    <script src="js/game.js"></script>
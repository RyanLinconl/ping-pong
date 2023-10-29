//Placar do Jogo//
let meusPontos = 0;
let pontosOponente = 0;

function incluiPlacar(){
    stroke(255);
    textAlign (CENTER);
    textSize (16);
    fill (color(25,25,112));
    rect (430, 10, 40, 20);
    fill (color(25,25,112));
    rect (130, 10, 40, 20);
    fill (255);
    text (pontosOponente, 450, 26);
    fill (255);
    text (meusPontos, 150, 26);
  }
  
  function marcaPonto(){
    if (xBolinha > 590){
      meusPontos += 1;
      ponto.play(0, 1, 0.5);
    }
    if (xBolinha < 12){
      pontosOponente += 1;
      ponto.play(0, 1, 0.5);
    }
  } 
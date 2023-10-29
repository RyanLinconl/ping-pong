//Variáveis da Raquete//
let xRaquete = 5;
let yRaquete = 150;
let largRaquete = 10;
let altRaquete = 90;

//Variáveis da Raquete 2//
let xRaquete2 = 585;
let yRaquete2 = 150;
let velocidadeYraquete2;

//Chance de Errar//
let chanceDeErrar = 1;

function mostraRaquete(x,y){
    rect(x, y, largRaquete, altRaquete);
      }
    
    function movimentaRaquete(){
      if (keyIsDown (UP_ARROW)){
        yRaquete -= 10; 
      }
      if (keyIsDown (DOWN_ARROW)){
        yRaquete += 10;
      }

      // Colisao com a borda //
      if (yRaquete < 0) {
        yRaquete = 0
      }
      if (yRaquete + largRaquete > height - 90) {
        yRaquete = height - altRaquete
      }
    }
    
    function movimentaRaquete2(){
      velocidadeYraquete2 = yBolinha - yRaquete2 - largRaquete / 2 - 55;
      yRaquete2 += velocidadeYraquete2 + chanceDeErrar;
      calculaChanceDeErrar()
    }

    function movimentaRaqueteMP(){
      if (keyIsDown (87)){
        yRaquete2 -= 10;
      }
      if (keyIsDown (83)){
        yRaquete2 += 10;
      }
    }
    
    function colisaoRaquete(x, y) {
        colidiu = collideRectCircle(x, y, largRaquete, altRaquete, xBolinha, yBolinha, raio);
      if (colidiu) {
            velocidadeXBolinha *= -1;
        raquetada.play();
      }
    }
    
    function calculaChanceDeErrar() {
        if (pontosOponente >= meusPontos) {
          chanceDeErrar += 1
          if (chanceDeErrar >= 65){
          chanceDeErrar = 65
          }
        } else {
          chanceDeErrar -= 1
          if (chanceDeErrar <= 55){
          chanceDeErrar = 55
          }
        }
      }
      
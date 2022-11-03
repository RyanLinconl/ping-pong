//Variáveis Bolinha//
let xBolinha = 300;
let yBolinha = 200;
let diametro = 13;
let raio = diametro / 2;
let colidiu = false;

//Velocidade da Bolinha//
let velocidadeXBolinha = 5;
let velocidadeYBolinha = 5;


function mostraBolinha(){
    circle(xBolinha, yBolinha, diametro);
  }
  
  function movimentoBolinha(){
    xBolinha += velocidadeXBolinha;
    yBolinha += velocidadeYBolinha;
  }
  
  function colisaoBorda(){
     if (xBolinha + raio> width ||
       xBolinha - raio < 0){
      velocidadeXBolinha *= -1;
      }
    if (yBolinha + raio > height ||
       yBolinha - raio < 0){
      velocidadeYBolinha *= -1;
    }
  }
  
  
function bolinhaNaoFicaPresa(){
  if (xBolinha - raio < 0){
  xBolinha = 25
  }
}

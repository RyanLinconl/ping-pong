function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  mostraBolinha ();
  movimentoBolinha ();
  colisaoBorda ();
  bolinhaNaoFicaPresa();
  mostraRaquete(xRaquete, yRaquete);
  movimentaRaquete();
  colisaoRaquete(xRaquete, yRaquete);
  colisaoRaquete(xRaquete2, yRaquete2);
  mostraRaquete(xRaquete2, yRaquete2);
  movimentaRaquete2(xRaquete2, yRaquete2);
  //movimentaRaqueteMP();
  incluiPlacar();
  marcaPonto();
}
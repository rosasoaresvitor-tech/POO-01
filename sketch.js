//Primeiro projeto de POO

let bolhas = [];


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(88);

  //percorrendo a lista de bolhas
  for(let bolha of bolhas){
    bolha.exibir();
    bolha.atualizar();
  }
}


//------------------Função Mouse--------------
function mousePressed(){
  let raio = random(10 ,50);
  let bolha = new Bolha(mouseX, mouseY, raio);
  bolhas.push(bolha);
}



//----------Função clica e arrasta------------
function mouseDragged(){
   let raio = random(10 ,50);
  let bolha = new Bolha(mouseX, mouseY, raio);
  bolhas.push(bolha);
  
}

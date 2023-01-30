let Contenedor =  document.getElementById('Mov');
let Izquierda2 = document.getElementById('Izquierda2');
let Izquierda3 = document.getElementById('Izquierda3');
let Derecha1 = document.getElementById('Derecha1');
let Derecha2 = document.getElementById('Derecha2');
let mover = function (){
    Contenedor.style.transform = 'translateX(-33.33333333%)';
} ;
Izquierda2.onclick = function  (){
    Contenedor.style.transform = 'translateX(0%)';
}
Izquierda3.onclick = function  (){ 
  mover();
}
Derecha1.onclick = function  (){
   mover();
}
Derecha2.onclick = function (){
    Contenedor.style.transform = 'translateX(-66.6666666666%)';
}


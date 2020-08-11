/* var jugo = ["frutilla", "mango", "fresa"];

console.log("Ingredientes del jugo", jugo); */

var cajas = document.querySelectorAll("#caja");

for(var i=0; i < cajas.length; i++){

    console.log("i = ", i);
    cajas[i].style.height = "50px";
    cajas[i].style.border = "solid 2px blue";

}
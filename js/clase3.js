// for (desde / hasta / actualizacion)

//for (let i = 0; i < 10; i++ ) /* i++ es igual a i= i +1 */  {
//    console.log("conteo: " + i); 
//}


/*for (let i=0; i <= 3; i++){
    alert("ya llegamos a la india? ")
    alert("No")
}
alert("mmm... a ver si lelgamos!!!! ")*/


/*for(let i=10; i > 0; i--){ // i = i -1
    console.log("conteo " + i)
}
console.log("Despegamos")*/



/*for( let i=0; i<20; i=i +2){
    console.log(i);
}*/

//let ingreso= parseInt(prompt("ingrese un numero"))

/*let ingreso = prompt("insgresa un numero")
ingreso= parseInt(ingreso)
for(let i=0; i <= 10; i++){
    let resultado = ingreso *i;
    console.log(" el resultado de la multiplicacion de " + ingreso + " X " + i + " es " + resultado);
}*/


// break 

let palabraClave= "oruga";
/*for(let i = 0; i <= 3; i++) {
    let ingreso = prompt("pone la palabra clave");
    if(ingreso == palabraClave){
        alert("Adivinaste");
        break;
    }else{
        alert("Error te quedan " + i + "intentos");
    }
}*/
//continue

/*for(let i = 0; i <= 10; i++){
    if (i == 3 || i == 5) {
        console.log("oruga");
        continue;
    }

    console.log(i);
}*/


// SEGUIR PROBANDO
//for (let i = 3; i <= 30; i += 3) {
//    // Imprimimos el número que es múltiplo de tres
//    console.log("los multiplo de 3 son " + (i));
//}


//while

/*let contador = 0;

while (contador < 10){
console.log(contador);


    // OBLIGATORIO --- condicion de salida del bucle
    contador ++;
}*/

/*let ingreso= prompt("ya llegamos a la india")
 while(ingreso != "si"){

    ingreso= prompt("ya llegamos a la india")

    //Condicion de salida
}
    alert("A ver yaaa!!!!!!")*/
 
/*let ingreso = prompt("nos llevas a monte splash?");
    while(ingreso != "si") {
        if(ingreso== "si digo si.."){
        alert("Claro")
        alert("Por supuesto")
    }
    ingreso = prompt("nos llevas a monte splash")
}
    alert ("gracias papa") */   

let ingreso = prompt("ingresa un producto. Para salir ingrese 0");

while(ingreso !="0") {
    alert("ingresaste " + ingreso);
    //Condicion de salida 
    ingreso = prompt("ingresa un producto. para salir ingrese 0");
}
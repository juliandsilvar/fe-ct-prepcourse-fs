/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*3️⃣ EJERCICIO 03 3️⃣*/

function sonIguales(x, y) {
   // Retorna true si "x" e "y" son iguales.
   // De lo contrario, retorna false.
   // Tu código:
   console.log("Ingrese 2 numeros a comparar");
   var x, y;
   if(x===y){
      return true;
   }
   return false;
}

function tienenMismaLongitud(str1, str2) {
   // Retorna true si los dos strings tienen la misma longitud.
   // De lo contrario, retorna false.
   // Tu código:
   console.log("Ingrese una palabra");
   var str1;
   console.log("Ingrese otra palabra para comparar su longitud");
   var str2;
   if(str1.length===str2.length){
      return true;
    }
    return false;
}

function menosQueNoventa(num) {
   // Retorna true si el argumento "num" es menor que noventa.
   // De lo contrario, retorna false.
   // Tu código:
   console.log("Ingrese un numero");
   var num;
   if(num<90){
     return true;
   }
   return false;
}

function mayorQueCincuenta(num) {
   // Retorna true si el argumento "num" es mayor que cincuenta.
   // De lo contrario, retorna false.
   // Tu código:
   console.log("Ingrese un numero");
   var num;
   if(num>50){
     return true;
   }
   return false;
}

function esPar(num) {
   // Retorna true si "num" es par.
   // De lo contrario, retorna false.
   // Tu código:
   console.log("Ingrese un numero para saber si es par");
   /*var num;
   if(num%2===0){
      return true;
   }
   return false;*/
   var residuo=num%2;
   if(residuo===0) return true;
   else return false;
}

function esImpar(num) {
   // Retorna true si "num" es impar.
   // De lo contrario, retorna false.
   // Tu código:
   /*console.log("Ingrese un numero para saber si es par");
   var num;
   if(num%2!==0){
      return true;
   }
   return false;*/
   var resultado=esPar(num)
   if(resultado===false)return true;
   else return false;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   tienenMismaLongitud,
   sonIguales,
   menosQueNoventa,
   mayorQueCincuenta,
   esPar,
   esImpar,
};

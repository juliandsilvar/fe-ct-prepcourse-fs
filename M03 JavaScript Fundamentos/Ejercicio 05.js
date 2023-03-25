/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/
/*5️⃣ EJERCICIO 05 5️⃣*/

function esPositivo(num) {
   // La función recibe un entero. Devuelve como resultado un string que indica si el número
   // es positivo o negativo.
   // Si el número es positivo ---> "Es positivo".
   // Si el número es negativo ---> "Es negativo".
   // Si el número es 0, devuelve false.
   // Tu código:
   console.log("ingrese numero para verificar si es positivo o negativo");
   var num;
   if(num==0){
      return false;
   }
   else if(num>0){
      return "Es positivo";
   }
   else return "Es negativo";
}

function agregarSimboloExclamacion(str) {
   // Agrega un símbolo de exclamación al final del string "str" y retórnalo
   // Ejemplo: "hello world" ---> "hello world!"
   // Tu código:
   console.log("Ingrese el texto deseado");
  var str;
  return str + "!";
}

function combinarNombres(nombre, apellido) {
   // Retorna "nombre" y "apellido" combinados en un mismo string pero separados por un espacio.
   // Ejemplo: ("Soy", "Henry") ---> "Soy Henry"
   // Tu código:
   console.log("Ingrese nombre");
  var nombre;
  console.log("Ingrese apellido");
  var apellido;
  return nombre+" "+apellido;
}

function obtenerSaludo(nombre) {
   // Toma el string "nombre" y concatena otra string en la cadena para que tome la siguiente forma:
   // Ejemplo: "Martin" ---> "Hola Martin!"
   // Tu código:
   console.log("Ingrese nombre");
  var nombre;
  var saludo="Hola "+nombre+"!";
  return saludo;
}

function obtenerAreaRectangulo(alto, ancho) {
   // Retornar el área de un rectángulo teniendo su altura y ancho.
   // Tu código:
   console.log("Ingrese por favor el alto del rectangulo");
  var alto;
  console.log("Ingrese por favor el ancho del rectangulo");
  var ancho;
  var area=alto*ancho;
  return area;
}

function retornarPerimetro(lado) {
   // La función recibe como argumento la medida de un lado de un cuadrado.
   // Debes retornar su perímetro.
   // Tu código:
   console.log("Ingrese el tamaño de uno de sus lados");
  var lado;
  return lado*4;
}

function areaDelTriangulo(base, altura) {
   // Calcula el área de un triángulo y retorna el resultado.
   // Tu código:
   console.log("Ingrese por favor la base del triangulo");
  var base;
  console.log("Ingrese por favor la altura del triangulo");
  var altura;
  var area=(base*altura)/2;
  return area;
}

function deEuroAdolar(euro) {
   // Supongamos que 1 euro equivale a 1.20 dólares.
   // Debes calcular el valor recibido como argumento pasándolo a dolares.
   // Tu código:
   console.log("ingrese la cantidad de euros a convertir");
  var euro;
  return euro*1.20;
}

function esVocal(letra) {
   // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
   // Si el usuario ingresa un string de más de un caracter debes retornar el mensaje: "Dato incorrecto".
   // Si no es vocal, tambien debe retornar "Dato incorrecto".
   // Tu código:
   console.log("Ingrese una letra para determinar si es vocal");
  var letra;
  if(letra==="a"){
    return "Es vocal";
  }if(letra==="e"){
    return "Es vocal";
  }if(letra==="i"){
    return "Es vocal";
  }if(letra==="o"){
    return "Es vocal";
  }if(letra==="u"){
    return "Es vocal";
  }else return "Dato incorrecto";
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   esPositivo,
   agregarSimboloExclamacion,
   combinarNombres,
   obtenerSaludo,
   obtenerAreaRectangulo,
   retornarPerimetro,
   areaDelTriangulo,
   deEuroAdolar,
   esVocal,
};

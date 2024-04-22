/*
 * Completa la función 'sumaLosMultiplosDeTres' a continuación.
 *
 * La función debe retornar un ENTERO.
 * La función recibe un ARREGLO DE ENTEROS como parámetro.
 *
 * No modifiques nada por fuera del cuerpo de la función.
 */

function sumaLosMultiplosDeTres(numeros) {
    /* Retornar la suma de todos los números que sean múltiplos de 3 (tres) y que se encuentren en el arreglo recibido como parámetro.
    Puede encontrarse más de una vez, y en cuyo caso deberá sumarse todas las veces que se encuentre. 
    En caso de que no haya ningún número que cumpla con las condiciones, retornar el string "No se encontraron números múltiplos de 3".
    En caso de que el arreglo esté vacío, retornar el string "El arreglo está vacío". 
    TIP: Recordá que los números múltiplos de 3 son aquellos que divididos por 3 dan resto 0 (cero) y se puede validar con el operador %. */

    // Tu código aquí
    // Verifica si el arreglo esta vacio
    if(numeros.length===0){
        return "El arreglo está vacío";
    }
    // Inicializar la suma
    let suma=0;

    // Variable para verificar si se encontraron números múltiplos de 3
    let seEncontraronMultiplos = false;

    // Iterar sobre el arreglo
    for(let i=0;i<numeros.length;i++){
        // Verificar si el número es múltiplo de 3
        if(numeros[i]%3===0){
            // Sumar al total
            suma+=numeros[i];
            // Indicar que se encontro al menos un multiplo de 3
            seEncontraronMultiplos=true;
        }
    }
    // Verificar si se encontraron números múltiplos de 3
    if(!seEncontraronMultiplos){
        return "No se encontraron números múltiplos de 3";
    }else{
        // Retornar la suma total
        return suma;
    }
}
// ! No modifiques nada debajo de esta línea
module.exports={sumaLosMultiplosDeTres};
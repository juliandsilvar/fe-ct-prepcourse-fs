/**
 * Ejercicio 1: Suma de Múltiplos con Callback
Escribe una función en JavaScript llamada sumaMultiplosCallback que reciba un arreglo de enteros y un callback
como parámetros.
1. La función debe usar el callback para determinar si un número es múltiplo de 3 y,
2. en caso afirmativo,
sumarlo al resultado final. Devuelve la suma total.*/

function sumaMultiplosCallback(arreglo){
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
console.log(sumaMultiplosCallback(arreglo, cb));
/**
 * Ejercicio 2: Múltiplos y Clases
Crea una clase llamada MultiplosDe que tenga un método estático llamado sumaMultiplos que reciba un número y
un arreglo de enteros. El método debe sumar todos los múltiplos del número dado que se encuentran en el arreglo.*/

/**
 * Ejercicio 3: Filtrar y Clases
Define una clase llamada FiltrarMultiplos que tenga un método llamado filtrar que reciba un arreglo de enteros
y devuelva un nuevo arreglo que contenga únicamente los números que son múltiplos de 3.*/

/**
 * Ejercicio 4: Contar Múltiplos y Callbacks
Escribe una función llamada contarMultiplosCallback que reciba un arreglo de enteros y un callback como parámetros.
La función debe usar el callback para determinar si un número es múltiplo de 4 y, en caso afirmativo,
incrementar un contador. Devuelve el contador al final.*/

/**
 * Ejercicio 5: Múltiplos y Objetos
Crea un objeto llamado OperacionesConMultiplos que tenga un método llamado sumarMultiplos que reciba un arreglo de enteros
y devuelva la suma de todos los múltiplos de 5 en el arreglo.*/

/**
 * Ejercicio 6: Contar Múltiplos y Clases
Define una clase llamada ContadorMultiplos que tenga un método llamado contar que reciba un número y un arreglo de enteros.
El método debe contar cuántos números en el arreglo son múltiplos del número dado.*/

/**
 * Ejercicio 7: Múltiplos y Promesas
Escribe una función llamada sumarMultiplosPromise que reciba un arreglo de enteros y devuelva una promesa.
La promesa debe resolver con la suma de todos los múltiplos de 2 en el arreglo.
// Ejercicio 1: Suma de Múltiplos con Callback
function sumaMultiplosCallback(arr, callback) {
    let suma = 0;
    for (const num of arr) {
        if (callback(num)) {
            suma += num;
        }
    }
    return suma;
}

// Ejercicio 2: Múltiplos y Clases
class MultiplosDe {
    static sumaMultiplos(numero, arr) {
        let suma = 0;
        for (const num of arr) {
            if (num % numero === 0) {
                suma += num;
            }
        }
        return suma;
    }
}

// Ejercicio 3: Filtrar y Clases
class FiltrarMultiplos {
    static filtrar(arr) {
        return arr.filter(num => num % 3 === 0);
    }
}

// Ejercicio 4: Contar Múltiplos y Callbacks
function contarMultiplosCallback(arr, callback) {
    let contador = 0;
    for (const num of arr) {
        if (callback(num)) {
            contador++;
        }
    }
    return contador;
}

// Ejercicio 5: Múltiplos y Objetos
const OperacionesConMultiplos = {
    sumarMultiplos: function (arr) {
        let suma = 0;
        for (const num of arr) {
            if (num % 5 === 0) {
                suma += num;
            }
        }
        return suma;
    }
};

// Ejercicio 6: Contar Múltiplos y Clases
class ContadorMultiplos {
    contar(numero, arr) {
        let contador = 0;
        for (const num of arr) {
            if (num % numero === 0) {
                contador++;
            }
        }
        return contador;
    }
}

// Ejercicio 7: Múltiplos y Promesas
function sumarMultiplosPromise(arr) {
    return new Promise((resolve) => {
        let suma = 0;
        for (const num of arr) {
            if (num % 2 === 0) {
                suma += num;
            }
        }
        resolve(suma);
    });
}

// Ejemplo de uso para cada ejercicio
const arregloEjemplo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Ejercicio 1
// console.log(sumaMultiplosCallback(arregloEjemplo, (num) => num % 3 === 0));

// Ejercicio 2
// console.log(MultiplosDe.sumaMultiplos(3, arregloEjemplo));

// Ejercicio 3
// console.log(FiltrarMultiplos.filtrar(arregloEjemplo));

// Ejercicio 4
// console.log(contarMultiplosCallback(arregloEjemplo, (num) => num % 4 === 0));

// Ejercicio 5
// console.log(OperacionesConMultiplos.sumarMultiplos(arregloEjemplo));

// Ejercicio 6
// const contador = new ContadorMultiplos();
// console.log(contador.contar(2, arregloEjemplo));

// Ejercicio 7
// sumarMultiplosPromise(arregloEjemplo)
//     .then((resultado) => console.log(resultado)); 
*/
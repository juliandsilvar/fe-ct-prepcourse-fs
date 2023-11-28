const { sumaLosMultiplosDeTres } = require('./index.js');

const normalize = (str) => str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

describe("sumaLosMultiplosDeTres", () => {

    let result;

    test("Debe retornar la suma de los múltiplos de 3 en el arreglo", () => {
        result = sumaLosMultiplosDeTres([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        expect(result).toEqual(18);
        result = sumaLosMultiplosDeTres([3, 6, 9, 12, 15, 18]);
        expect(result).toEqual(63);
        result = sumaLosMultiplosDeTres([5, 10, 15, 20, 25, 30]);
        expect(result).toEqual(45);
    });

    test("Debe retornar un string si no se encuentran múltiplos de 3", () => {
        result = sumaLosMultiplosDeTres([1, 2, 4, 5, 7, 8]);
        expect(normalize(result)).toEqual(normalize("No se encontraron numeros multiplos de 3"));
    });

    test("Debe retornar un string si el arreglo está vacío", () => {
        result = sumaLosMultiplosDeTres([]);
        expect(normalize(result)).toEqual(normalize("El arreglo esta vacio"));
    });
});

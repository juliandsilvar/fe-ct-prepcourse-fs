function suma(a, b){
    console.log(a+b);
}
function esPrimo(x){
    if(x<=1){
        return false;
    }
    for (let i=2;i<x;i++){
        if(x%i===0){
            return false;
        }
    }return true;
}
function contarVocales(cadena){
    cadena=cadena.toLowerCase();
    let contadorVocales=0;
    const vocales=['a', 'e', 'i', 'o', 'u'];
    for(let i=0;i<cadena.length;i++){
        if(vocales.includes(cadena[i])){
            contadorVocales++;
        }
    }return contadorVocales
}
console.log(contarVocales("Hola"));
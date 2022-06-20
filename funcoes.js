//3 formas
//1 - declaração de função

function imprimeTexto(texto){//declaração
    console.log(texto)
}

imprimeTexto("texto 1")//chamada da function
imprimeTexto(soma())//chamando outra function dentro de uma function



function soma(){
    return 2 + 2
}


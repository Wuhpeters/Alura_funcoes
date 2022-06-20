let m = 0
let soma = 0

function media(n1){
    if(typeof arguments !== "number"){
        return "Error"
    }
    for(let i = 0; i < arguments.length; i++){
        m = m + 1
        soma = soma + arguments[i]
    }
    return soma / m
}
console.log(media())
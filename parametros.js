/*function soma(num1, num2){
    return num1 + num2
}

console.log(soma(3, 2))
console.log(soma(34, 2))
console.log(soma(3, 244))*/

//----------------------------------------------------------------------------------------\\

//parametro x argumentos

//ordem dos parametros

function nomeIdade(nome, idade){
    return `meu nome é ${nome} e minha idade é ${idade}`
}

console.log(nomeIdade(25, "William"))//cuidar a ordem dos parametros

//----------------------------------------------------------------------------\\

function mult(n1 = 1, n2 = 1){//caso só passe um valor como no exemplo 2,
                              //o parametro que falta assumira o valor de 1
    return n1 * n2
}
                      //9      //6               
console.log(mult(soma(4,5),soma(3,3)))// multi recebe seus dois parametros a function soma

function soma(num1, num2){
    return num1 + num2
}

//----------------------------------------------------\\
//exemplo 2

console.log(mult(soma(4,5)))//não foi passado um parametro
                            //ficou como undifined e um valor * undefined é NaN






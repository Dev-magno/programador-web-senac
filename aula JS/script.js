// comentário

let nome = "Curso Web"

console.log(nome)
console.log("Hellow Word")

console.log("Ola " + nome)

let num1 = 10
let num2 = 5

let resultado = num1 + num2
console.log(resultado)
console.log(num1 + num2)
console.log( 10 + 5)
console.log( 10 - 5)
console.log( 10 * 5)
console.log( 10 / 5)
console.log(10 % 5)
console.log(10 ** 5)


console.log(num1 != num2)
console.log(6 != "7")

console.log(6 > 5)
console.log(4 < 3)
console.log(4 <= 4)
console.log(5 >= 8)

let idade = 33

if (idade >= 18 && idade <= 70) {
    console.log("Voto obrigatório")
} 

else if (idade >= 16 || idade > 70) {
    console.log("Voto opcional")
}

else {
    console.log("Não volta")
}

let situacao = (idade >= 18 && idade <= 70) ? "VOTO OBRIGATÓRIO" : "NÃO VOTA"
console.log(situacao)

let cor_favorita = "azul"
switch (cor_favorita) {
    case "azul":
        console.log("A cor favorita é azul")
        break
    case "vermelho":
        console.log("A cor favorita é vermelha")
        break
    default:
        console.log("cor invalida")
}

for (let i = 0; i <= 10; i++){
    console.log(i)
}

let contador = 0
while(contador < 10){
    console.log(contador)
    contador++
}


do {
    console.log(contador)
    contador++
} while(contador < 10)

    function soma(x, y){
        let res = x + y
        return res
    }

    let valor = soma(2,3)
    let valor1 = soma(-3, 50)
    let valor2 = soma(valor, valor1)
    console.log(valor2)

    // Função setInterval

    function ola(){
        console.log('Ola')
    }
    ola()
    setInterval(ola, 5000)

    // Arrays

    // const frutas = ['maça', 'banana', 'morango']
    console.log(frutas[0])

    for (let f = 0; f < frutas.length; f++){
        console.log(frutas[f])
    }

    for(const f of frutas){
        console.log(f)
    }


    frutas.forEach(function(f){
        console.log(f)
    })

    console.log(frutas.length)

    // Objetos
    let pessoa = {
        nome: "João",
        idade: 30,
        profissão: "Engenheiro"
    }

    // Forma de acesso usando ponto
    console.log(pessoa.idade)

    // Forma de acesso usando parentese
    console.log(pessoa["idade"])

    // Depuração e tratamento de erros
    // debugger


    console.error("Deu erro")

    let x = 10
    let y = "a"
    try {
        if (y == 0){
            throw RangeError("Valor zero não é permitido")
        }
        else if (typeof(y) == "string" || typeof(x) == "string"){
            throw TypeError("Valor do tipo string não é permitido")
        }
        console.log(x/y)
    } catch(error) {
        console.error("Aconteceu um erro: " + error)
        console.error(`O erro ${error} aconteceu`)
    }

    


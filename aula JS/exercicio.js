// Exércios

    // Questão 1: Crie uma variável, inicialize e exiba seu valor no console.
    let num = 10
    console.log(num)

    // Questão 2: Crie um array de itens, itere sobre eles e os exiba no console.
    const motos = ["Yamaha", "Honda", "shineray", "suzuky"]
 
    for (let m = 0; m < motos.length; m++){
        console.log(motos[m])
    }

    // Questão 3: Como acessar o terceiro elemento da lista?
    var frutas = ["maça", "banana", "laranja"]
    console.log(frutas[2]) // resultado 'laranja'

     /*Questão 4: Crie uma função que calcule a área do quadrado em metros. Quadrado é a
    figura que tem todos os lados iguais. */
    function calcular(l){
        let res = l ** 2
        return res
    }

    let res = calcular(5)
    console.log(`A área de um quadrado de lado 5 é ${res}m2`)

    /* Questão 5: Faça um algoritmo que leia os valores de A, B, C e em seguida imprima na
    tela a soma entre A e B e mostre se a soma é menor que C.*/
    let a = 10
    let b = 4
    let c = 6
    let soma = a + b

    if (soma > c){
        console.log("A soma entre A e B é ", soma)
        console.log("A soma entre A e B é maior que C")
    }

    // Questão 6: Qual a saída desse código?
    var numero = "5"
    var somar = numero + 10
    console.log(somar)

    /* Questão 7: Faça um algoritmo que leia dois valores inteiros A e B, se os valores de A e B
    forem iguais, deverá somar os dois valores, caso contrário deverá multiplicar
    A por B. Ao final de qualquer um dos cálculos deve-se atribuir o resultado a
    uma variável C e imprimir seu valor na tela. */
    function calcular(A, B){
        let C = ''
        if(A == B){
            C = A + B // Soma dos valores de A e B
        }

        else{
            C = A * B // multplica os valores de A por B
        }

        return C // Retorna o resultado calculado
    }

    let resultado = calcular(4, 7)
    //let resultado = calcular(4, 4)
    console.log(`C = ${resultado}`)

    /* Questão 8: O que acontece na execução do código a seguir? E se trocar a declaração da
    variável por let?*/
    for (let contador = 0; contador < 5; contador++){
        console.log(contador) // Faz um laço de repeticção até o número 4
        // Se torvar a variável por let não altera o resultado
    }

    /* Questão 9: Faça um algoritmo que receba um número inteiro e imprima na tela o seu
    antecessor e o seu sucessor.*/
    let num1 = 10
    let antecessor = 9
    let sucessor = 11

    if (antecessor == num1-1){
          console.log("O antecessor é: ", antecessor)
    }

    else if(sucessor == num1+1){
          console.log("O sucessor é: ", sucessor)
     }

    else{
        console.log("Opção inválida")
    }
        

    // Questão 10: Qual será a saída do seguinte código? Escreva e execute.
    var x = 10;

    function minhaFuncao(){
        var y = 5
        console.log(x + y)
    }

    minhaFuncao()
    // a saída é 15

    // Questão 11: Qual será a saída do seguinte código? Escreva e execute.
    var numero = 5
    if(numero === 5){
        console.log("O número é igual a 5")
    }
    else if(numero == 5){
        console.log("O número é igual a 5, com conversão de tipo")
    }
    else(
        console.log("O número é igual a 5")
    )
    // O número é igual a 5

    /* Questão 12: Crie um programa que receba o seguinte array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], e
    imprime um novo array apenas com os números pares. Dicas:*/
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    for (let n = 0; n < numeros.length; n++) { // Começando do índice 0
    if (numeros[n] % 2 === 0) { // Verificando se o número é par
        console.log(numeros[n]);
    }  
}

    /* Questão 13: Crie um programa que:
    a. Tenha uma função que recebe 3 parâmetros (notas) e retorne a média;
    b. Avalie a média recebida e exibe a média junto com a situação no
    console de acordo com as regras abaixo:
        i. 7 ou maior = aprovado;
        ii. 5 a 7 = recuperação;
        iii. menor que 5 = reprovado.
    c. exemplo de saída esperada:
        i. “Média 8.5, resultado: Aprovado”.
    */
    function media(nota1, nota2, nota3){
        let media = (nota1 + nota2 + nota3) / 3
        let resultado = ""
        if (media >= 7){
            resultado = "APROVADO"
        }

        else if(media == 5 && media < 7){
            resultado = "RECUPERAÇÃO"
        }

        else{
            resultado ="REPROVADO"
        }

        return `Média ${media.toFixed(1)}, resultado: ${resultado}` // Formata a média com uma casa decimal
    }
    
    // Uso da função
    let nota1 = 8.5;
    let nota2 = 9.4;
    let nota3 = 7.8;
    console.log(media(nota1, nota2, nota3))

    /* Questão 14: Crie um programa que calcule o IMC e exiba na tela junto com a situação. O
    Índice de Massa Corpórea (IMC) é um valor calculado baseado na altura e no peso de uma pessoa. 
    De acordo com o valor do IMC, podemos classificar o indivíduo dentro de certas faixas. O IMC 
    é calculado pela expressão peso/altura2 (peso dividido pelo quadrado da altura)
    a. abaixo de 18.5: Abaixo do peso
    b. entre 18.5 e 25: Peso ideal
    c. entre 25 e 30: Sobrepeso
    d. entre 30 e 40: Obesidade
    e. acima de 40: Obesidade mórbida
    f. exemplo de saída esperada:
        i. “Seu IMC é 23, resultado: Peso Ideal”*/
    function IMC(peso, altura){
        let imc = (peso / (altura ** 2))
        let resultado = ''
        if(imc < 18.5){
            resultado = "ABAIXO DO PESO"
        } 
        
        else if(imc >= 18.5 && imc < 25){
            resultado = "PESO IDEAL"
        } 
        
        else if(imc >=25 && imc < 30){
            resultado = "SOBREPESO"
        } 
        
        else if(imc >= 30 && imc <= 40){
            resultado = "OBESIDADE"
        } 
        
        else{
            resultado = "OBESIDADE MORBIDA"
        }

        return `IMC ${imc.toFixed(1)}, resultado: ${resultado}` // Formata o resultado do IMC com uma casa decimal
    }

    // Uso da função
    let peso = 70; // em kg
    let altura = 1.75; // em metros

    console.log(IMC(peso, altura)); // Chama a função e imprime o resultado

    /* Questão 15: 15.Escreva um programa que leia um número qualquer e mostre a tabuada
    desse número, usando a estrutura “for”.
    a. exemplo de saída para a entrada de número 8:
        i. 8 x 1 = 8
        ii. 8 x 2 = 16
        iii. 8 x 3 = 24
        iv. ...
        v. 8 x 10 = 80*/
    let tabuada = 8
    for(let c = 1; c <= 10; c++){
        console.log(tabuada + " x " + c + " = " + (tabuada * c))
    }

    // Questão 16:Interprete o diagrama a seguir e crie seu código
    let n1 = 10
    let n2 = 2
    let r = ''
    if(n2 != 0){
        r = n1 / n2
    }

    else{
        console.log('Operação inválida')
    }

    console.log(r)

    /* Questão 17: Um motorista faz diversas viagens. Ele está em um carro que faz 9.8km por
    litro (considere o litro da gasolina 5.24R$). Crie um programa que receba a
    distância que será percorrida e calcule quanto ele deve gastar para ir e voltar.
    Você pode usar a função toFixed() do JS para ajustar as casas decimais.
    Ex:
    a. let valorFinal = (valorCalculado).toFixed(2) - 2 casas depois da vírgula.
    b. exemplo de saída esperada:
    i. Para fazer 2900kms você deve abastecer 3   101.22R$ */

    function calcularCustoViagem(distancia){
        const consumoPorlitro = 9.8 // Km por litro
        const precoPorLitro = 5.25 // R$ por litro

        // Calcular quantidade litro para uma vigem de ida e volta
        const litrosIdaVolta = (distancia * 2) / consumoPorlitro

        // Calcular o custo total
        const custoTotal = litrosIdaVolta * precoPorLitro

        // Usar a função toFixed() e formatar a saída
        return `Para fazer uma viagem de ${distancia}, você deve abastecer R$ ${custoTotal.toFixed(2)}`

    }

    // Uso da função
    const distancia = 200 // Distãncia que será multiplicada por 2
    const custoTotal = calcularCustoViagem(distancia)
    console.log(custoTotal)

    /* Questão 18: Escreva um programa que recebe um valor e calcula seu valor fatorial. O
    fatorial de um número é o produto dele pelos seus antecessores maiores que
    0.
    a. 5! (lê-se 5 fatorial) = 5 x 4 x 3 x 2 x 1 = 120
    b. Adicione o lançamento de exceção quando for necessário.
    c. exemplo de saída esperada:
    i. “O fatorial de 5 é 120” */

    function factorialize(num) {
        if (num < 0) 
              return -1;
        else if (num == 0) 
             return 1;
         else {
             return (num * factorialize(num - 1));
       }
    }
     console.log("O fatorial de 5 é ", factorialize(5))

     /*Questão 19: Escreva um programa que leia o array [12, 36, 52, 77] e imprime um novo
    array com a soma de cada elemento por 7.
    a. exemplo de saída esperada
    i. [19, 43, 59, 84]
    */
   let arrayOriginal = [12, 36, 52, 77]

   // Função para somar por 7 cada elemento 
   function somarSete(array){
    novoArray = []
    for(let a = 0; a < array.length; a++){
        novoArray.push(array[a] + 7)
    }
    return novoArray
   }

   // calcula novo array
   let arraySomado = somarSete(arrayOriginal)

   // Imprime o Array
   console.log("Novo Array = ", novoArray)

   /* Questão 20: Raimundo fará uma prova. Ao chegar lá ele deve se identificar usando a
    carteira de identidade ou de motorista. Faça um programa que verifique sua
    identidade e indique se ele pode ou não fazer a prova. 
    a. A verificação é fictícia, apenas variáveis com valores booleanos.*/

    function verificarIdentidade(carteiraIdentidade, carteiraMotorista){
        if(carteiraIdentidade || carteiraMotorista){
            return 'Você pode fazer a prova'
        }

        else{
            return 'Você não pode fazer a prova'
        }
    }

    // Exemplo de variáveis booleanas
    let carteiraIdentidade = true // ou false
    let carteiraMotorista = false // ou true

    // Verifica a identidade e exibe o resultado
    var resul = verificarIdentidade(carteiraIdentidade, carteiraMotorista);
    console.log(resul);

    // Questão 20: Qual a saída do código a seguir?
    var frutas = ["maçã", "banana", "laranja"]
    console.log(frutas[3])

    // Isso vai imprimir 'undefined' porque não há um quarto elemento no array




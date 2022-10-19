
alert(`Esse progarama vai solicitar dos números e mostrar as seguintes informações:
            1 - A soma de dois números
            2 - A subtração de dois numeros
            3 - A multiplicação dos dois números
            4 - A Divisão de dois números
            5 - O resto da divisão de dois números
            6 - Informar se o número é par ou impar
    Se os números forem racionais, tem que digitar com ponto "."  `)

let firstNumber = Number(prompt("Digite o primeiro número"))
let secondNumber =  Number(prompt("Digite o segundo número"))

console.log(firstNumber, secondNumber)


alert(` A soma dos números é ${firstNumber + secondNumber}`)
alert(` A subtração dos números é ${firstNumber - secondNumber}`)
alert(` A multiplicação dos números é ${firstNumber * secondNumber}`)
alert(` A divisão dos números é ${firstNumber / secondNumber}`)
alert(` O resto da divisão é ${firstNumber % secondNumber}`)


let resto = (firstNumber + secondNumber) % 2


if (resto == 0 ) {
    alert(" Esse numero é PAR")
}else{
    alert(" Esse numero é IMPAR")
}


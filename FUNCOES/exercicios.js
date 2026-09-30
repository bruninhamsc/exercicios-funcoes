// ==========================================
// Atividade Prática - Exercícios sobre função no JavaScript
// ==========================================

// 1- Crie uma função que receba um número e retorne o dobro.

function numeroDobrado(numero) {
    return numero * 2
}

console.log(numeroDobrado(5));


console.log("\n----------------------------------------\n");

// 2- Crie uma função que receba um número e retorne o triplo.

function numeroTriplicado(numero){
    return numero * 3
}

console.log(numeroTriplicado(8));


console.log("\n----------------------------------------\n");

// 3- Crie uma função que receba dois números e retorne a soma.

function somar(a, b) {
    return a + b
}

console.log(somar(7, 3));


console.log("\n----------------------------------------\n");

// 4- Crie uma função que receba dois números e retorne a multiplicação.

function multiplicar(a, b) {
    return a * b
}

console.log(multiplicar(7, 12));


console.log("\n----------------------------------------\n");

// 5- Crie uma função que receba um salário e calcule aumento de 10%.

function salarioAumentado(salario) {
    return salario + (salario * 0.10)
}

console.log(salarioAumentado(5000));


console.log("\n----------------------------------------\n");

// 6 - Crie uma função que imprima números de 1 até 10.

function sequencia() {
    for (let i = 1; i <= 10; i++){
        console.log(i);
        
    }
}

sequencia();


console.log("\n----------------------------------------\n");

// 7- Crie uma função que some todos os números até 10.

function somaAtDez() {
    let soma = 0;

    for (let i = 1; i <= 10; i++){
        soma += i;
    }

    return soma;
}

console.log(somaAtDez());


console.log("\n----------------------------------------\n");
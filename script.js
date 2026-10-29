//3

JavaScript
let contador = 0;
contador = 1; // Permitido

const pi = 3.14159;
// pi = 3.14; // Se tentar fazer isso, dará Erro
//5
JavaScript
let nomeProduto = "SSD 500GB";
let precoUnitario = 250.99;
let quantidadeProduto = 4;
let disponivelEmEstoque = true;

console.log(`Produto: ${nomeProduto} | Preço: R$ ${precoUnitario} | Qtd: ${quantidadeProduto} | Disponível: ${disponivelEmEstoque}`);
//6
JavaScript
let precoOriginal = 150.00;
let valorDesconto = precoOriginal * 0.12;
let precoFinal = precoOriginal - valorDesconto;

console.log(`Desconto: R$ ${valorDesconto.toFixed(2)}`);
console.log(`Novo preço: R$ ${precoFinal.toFixed(2)}`);
//9
JavaScript
let n1 = 15;
let n2 = 30;
let n3 = 30; 

let maior = n1;
if (n2 >= maior && n2 >= n3) {
    maior = n2;
} else if (n3 >= maior && n3 >= n2) {
    maior = n3;
}

console.log(`O maior número é: ${maior}`);
//10
JavaScript
let mediaAluno = 7.5;
let frequenciaAluno = 80; 

if (mediaAluno >= 7 && frequenciaAluno >= 75) {
    console.log("Aluno Aprovado");
} else {
    console.log("Aluno Reprovado");
}
//12
JavaScript
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}
//14
JavaScript
let soma = 0;

for (let i = 1; i <= 50; i++) {
    soma += i; 
}

console.log(`O valor acumulado é: ${soma}`);
//15
JavaScript
let numero = 7; 

for (let i = 1; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}
//16
JavaScript
let produtos = ["Mouse", "Teclado", "Webcam"];
produtos.push("Monitor");
console.log(produtos);
//17
JavaScript
let notas = [6.5, 8.0, 7.5, 9.0, 10.0];
let somaDasNotas = 0;

for (let i = 0; i < notas.length; i++) {
    somaDasNotas += notas[i];
}

let media = somaDasNotas / notas.length;
console.log(`A média das notas é: ${media}`);
//18
JavaScript
function calcularTotal(preco, quantidade) {
    return preco * quantidade;
}

let totalCompra = calcularTotal(45.50, 3);
console.log(`O total da compra é: R$ ${totalCompra.toFixed(2)}`);
//19
JavaScript
let nota = 8;
if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}
//20
JavaScript
let estoque = [
    { nome: "Notebook", preco: 3500.00, quantidade: 3 },
    { nome: "Mouse sem fio", preco: 90.00, quantidade: 15 },
    { nome: "Mochila", preco: 150.00, quantidade: 4 },
    { nome: "Monitor 24", preco: 850.00, quantidade: 10 }
];

function relatorioEstoque(produtos) {
    let valorTotalEstoque = 0;
    let produtosAbaixoDeCinco = [];

    for (let i = 0; i < produtos.length; i++) {
        valorTotalEstoque += (produtos[i].preco * produtos[i].quantidade);

        if (produtos[i].quantidade < 5) {
            produtosAbaixoDeCinco.push(produtos[i].nome);
        }
    }

    console.log(`Valor total do estoque: R$ ${valorTotalEstoque.toFixed(2)}`);
    console.log(`Produtos com baixo estoque: ${produtosAbaixoDeCinco.join(', ')}`);
}

relatorioEstoque(estoque);
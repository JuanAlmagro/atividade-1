01 Algoritmo é uma sequência lógica, finita e bem definida de passos criados para resolver um problema ou executar uma tarefa.Exemplo cotidiano: Uma receita para fazer bolo. Ela tem os ingredientes (dados de entrada), o modo de preparo passo a passo (processamento) e o bolo pronto no final (saída).

02.

Dados de entrada: As duas notas do aluno.

Processamento: A soma das duas notas dividida por dois.

Informação de saída: O resultado da média calculada.

03 A diferença é que let declara uma variável cujo valor pode ser alterado (reatribuído) ao longo do código. Já const declara uma constante, ou seja, uma variável cujo valor não pode ser reatribuído após sua criação. (Exemplo em código na Parte 2).

04 Valor no console: 8.Explicação: A variável quantidade inicia com o valor 5. Na linha seguinte, ela recebe o valor atual dela mesma (5) somado a 3. Logo, passa a guardar o número 8, que é o que será impresso pelo console.log.

07.

a 17 % 5 resulta em 2 (resto da divisão de 17 por 5).

b 4  2 resulta em 16 (4 elevado ao quadrado).

c 10 > 8 && 3 < 1 resulta em false (A primeira condição é verdadeira, mas a segunda é falsa; o operador && exige ambas verdadeiras).

d 5 === "5" resulta em false.Justificativa do item d: O operador de igualdade estrita (===) compara tanto o valor quanto o tipo de dado. Embora o valor seja 5 em ambos, o primeiro é do tipo Number (número) e o segundo é do tipo String (texto).

08.

Para idade igual a 16: Será exibido "Acesso negado" (pois 16 não é maior ou igual a 18).

Se a idade fosse 20: Seria exibido "Acesso permitido" (pois 20 é maior que 18).

11.

for: Ideal para quando sabemos previamente quantas vezes o bloco de código deve repetir (quantidade de iterações definida). Exemplo: Percorrer todos os 10 itens de uma lista.

while: Ideal para quando não sabemos o número exato de repetições, pois ele depende de uma condição mudar no meio da execução para ser interrompido. Exemplo: Manter um programa rodando até que o usuário digite a palavra "Sair".

13 Sequência completa exibida: 10, 8, 6, 4.Explicação: O laço inicia em 10, imprime, e subtrai 2. Repete para o 8, depois para o 6, depois para o 4. Quando chega em 2, a condição contador >= 4 torna-se falsa e ele encerra.

16.

O resultado de produtos[1] é "Teclado" (arrays começam a contar no índice 0).

O resultado de produtos.length é 3 (total de elementos na lista).
(Instrução de código na Parte 2).

19 Problema: A condição dentro do if usou o operador de atribuição (=) em vez do operador relacional >= (maior ou igual, conforme o enunciado pede "7 ou maior"). A atribuição força o valor da variável a mudar para 7 e sempre retorna verdadeiro. (Código corrigido na Parte 2).
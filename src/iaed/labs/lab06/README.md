---
description: Enunciado e resolução dos exercícios do Laboratório 6 de IAED
---

# Lab 06

[[toc]]

::: warning
Considere que os algoritmos de ordenação ordenam sempre de forma não decrescente.
:::

## Exercício 1

_(BubbleSort)_ Considere a aplicação do algoritmo bubblesort ao vector `a`:

`a = { 20, 11, 16, 8, 21, 12, 10, 14, 17, 6 }`

Supondo que em cada iteração o algoritmo percorre o vector da esquerda para a direita, qual o conteúdo do vector a após as duas primeiras iterações?

::: details Resolução
<code-group>
<code-block
title="Bubble Sort">
<<< @/src/iaed/labs/lab06/bubble.c

</code-block>
Respsota : 11 8 16 12 10 14 17 6 20 21
</code-group>
:::

## Exercício 2

_(SelectionSort)_ Considere a aplicação do algoritmo selectionsort ao vector `a`:

`a = { 20, 11, 16, 8, 21, 12, 10, 14, 17, 6 }`

Supondo que em cada iteração o algoritmo identifica o menor elemento e o coloca na posição mais à esquerda, qual o conteúdo do vector a após as três primeiras iterações?

::: details Resolução
<code-group>
<code-block
title="Selection Sort">
<<< @/src/iaed/labs/lab06/selection.c
</code-block>
Respsota : 6 8 10 11 21 12 16 14 17 20
</code-group>
:::

## Exercício 3

_(SelectionSort)_ Resolva o exercício anterior, mas considerando uma variação do algoritmo SelectionSort. Suponha que em cada iteração, o algoritmo identifica o maior elemento e o coloca na posição mais à direita. Qual o conteúdo do vector `a` após as três primeiras iterações?

::: details Resposta

Resposta: 14, 11, 16, 8, 6, 12, 10, 17, 20, 21

:::

## Exercício 4

_(InsertionSort)_ Considere a aplicação do algoritmo insertionsort ao vector `a`:

`a = { 20, 11, 16, 8, 21, 12, 10, 14, 17, 6 }`

Supondo que o algoritmo vai inserindo os elementos à esquerda, qual o conteúdo do vector `a` após as três primeiras iterações?

::: details Resolução
<code-group>
<code-block
title="Insertion Sort">
<<< @/src/iaed/labs/lab06/insertion.c
</code-block>
Resposta : 8 11 16 20 21 12 10 14 17 6
</code-group>
:::

## Exercício 5

_(BubbleSort - Melhor Caso)_ A complexidade assimptótica de pior caso do algoritmo bubblesort, é O(n²). E no melhor caso? Ilustre com um exemplo.

::: details Resposta

No melhor caso é O(n).

Ler um vetor já ordenado.\
O algoritmo termina depois de fazer a passagem pelos n elementos.

a = {1,2,3,4}

:::

## Exercício 6

_(Análise Assimptótica)_ Considere a seguinte função de procura de um elemento num vector ordenado. A função recebe um vector `a`, o número de elementos `n` e o valor `elem` que se pretende encontrar no vector.

<<< @/src/iaed/labs/lab06/ex06.c

Indique a complexidade assimptótica da função search numa análise de pior caso e numa análise de melhor caso.

::: details Resposta

Este algoritmo demosntrado assemelha-se muito ao binary search.

Se assim for, o pior caso é O (log n)\
E o melhor caso é Ω (1)

:::

## Exercício 7

_(Análise Assimptótica)_ Indique a complexidade assimptótica da função abaixo numa análise de pior caso. Indique ainda se o limite assimptótico é apertado ou se é apenas um limite superior.

<<< @/src/iaed/labs/lab06/ex07.c

::: details Resposta

Este algoritmo permite em cada iteração adicionar à soma dois valores da tabela.

Assim o pior caso é O ($\frac{n}{2}$)\
E o melhor caso é Ω ($\frac{n}{2}$)\
Logo existe limite assimptótico apertado Θ ($\frac{n}{2}$)

:::

## Exercício 8

_(Análise Assimptótica)_ Considere a função abaixo que recebe dois vectores (a e b) onde n e m denotam o número de elementos dos vectores a e b, respectivamente.

<<< @/src/iaed/labs/lab06/ex08.c

Indique a complexidade assimptótica da função em função de n e m numa análise de pior caso.

::: details Resposta

Este algoritmo faz um loop (j < m), que itera m vezes, itera no ciclo while que itera ($\frac{n}{2}$) vezes.

Assim o pior caso é O ($\frac{nm}{2}$)

:::

## Exercício 9

_(Análise Assimptótica)_ Considere a função abaixo que recebe dois inteiros n e m.

<<< @/src/iaed/labs/lab06/ex09.c

Indique a complexidade assimptótica da função numa análise de pior caso.

::: details Resposta

Este algoritmo faz um loop (i < n \* n), que calcula todas as vezes n\*n e itera até i ser n\*n.

Logo o pior caso é O ($n^4$)

:::

## Exercício 10

_(Análise Assimptótica)_ Considere a função abaixo que recebe dois inteiros n e m.

<<< @/src/iaed/labs/lab06/ex10.c

Indique a complexidade assimptótica da função numa análise de pior caso e numa análise de melhor caso. É possível estabelecer uma complexidade assimptótica apertada para esta função? Justifique.

::: details Resposta

Este algoritmo no caso de n ser divisivél por m tem Ω(1)

Se não, itera ($\frac{n}{2}$) vezes pois o i sobe de 2 em 2.

Logo o pior caso é O ($\frac{n}{2}$)

Logo não é possível estabelecer uma complexidade assimptótica apertada para esta função,\
 porque a complexidade assimptótica superior é diferente da complexidade assimptótica inferior.

:::

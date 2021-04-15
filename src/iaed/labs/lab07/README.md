---
description: Enunciado e resolução dos exercícios do Laboratório 7 de IAED
---

# Lab 07

[[toc]]

::: warning
Considere que os algoritmos de ordenação ordenam sempre de forma não decrescente.
:::

## Exercício 1

Considere a implementação clássica da função `int partition (Item v[], int l, int r)` usada no algoritmo `quicksort` tal como apresentada nas aulas teóricas.

Esta função recebe o vector `v` e as posições `left` e `right` que definem, respectivamente, os índices limite esquerdo e direito do vector a considerar na função.

Suponha que o procedimento `partition` é invocado com os seguintes argumentos:

`v = <13, 6, 5, 14, 12, 4, 16, 18, 7, 9, 10>, left = 0, right = 10`.

Considerando a posição `a[r]` como pivot, indique qual o conteúdo do vector `v` após a execução da função `partition`.

::: details Resolução

Resposta: `a = { 11, 8, 16, 12, 10, 14, 17, 6, 20, 21 }`

{green}(É possível ver o algoritmo em execução ao executar o código abaixo)

<code-group>
<code-block
title="Bubble Sort">
<<< @/src/iaed/labs/lab06/bubble.c

</code-block>
</code-group>
:::

## Exercício 2

Considere o exercício anterior, mas onde os argumentos da função `partition` são os seguintes:

`v =<20, 11, 16, 9, 12, 14, 17, 19, 13, 15>, left = 0 , right = 9`.

Qual o conteúdo do vector `v` após a execução do procedimento `partition`?

::: details Resolução

Resposta: `a = { 6, 8, 10, 11, 21, 12, 16, 14, 17, 20 }`

{green}(É possível ver o algoritmo em execução ao executar o código abaixo)

<code-group>
<code-block
title="Selection Sort">
<<< @/src/iaed/labs/lab06/selection.c
</code-block>
</code-group>
:::

## Exercício 3

Diga quais dos seguintes vectores corresponde a um amontoado (heap)?

`<50, 25, 30, 27, 24, 21, 28>`\
`<50, 30, 25, 27, 24, 28, 21>`\
`<60, 50, 9, 40, 41, 10, 8>`\
`<40, 15, 18, 13, 11, 14, 16>`\
`<60, 30, 80, 10, 35, 70, 40>`

::: details Resposta

Resposta: `a = { 14, 11, 16, 8, 6, 12, 10, 17, 20, 21 }`

:::

## Exercício 4

A primeira operação do algoritmo heapsort é transformar o vector num amontoado. Considere que o vector de entrada do algoritmo é `<20, 11, 16, 9, 12, 14, 17, 19, 13, 15>`.

- Indique o conteúdo do vector após o passo de transformação num amontoado.
- Indique o conteúdo do vector após os dois maiores elementos terem sido ordenados (colocados na sua posição final), durante a operação de ordenação (heapsort).

::: details Resolução

Resposta: `a = { 8, 11, 16, 20, 21, 12, 10, 14, 17, 6 }`

{green}(É possível ver o algoritmo em execução ao executar o código abaixo)

<code-group>
<code-block
title="Insertion Sort">
<<< @/src/iaed/labs/lab06/insertion.c
</code-block>
</code-group>
:::

## Exercício 5

Qual o conteúdo do seguinte vector `<25, 19, 23, 15, 18, 16, 21, 12>` depois de os dois primeiros elementos (i.e. os dois maiores) terem sido ordenados, utilizando o algoritmo de ordenação heapsort?
::: details Resposta

Ler um vetor já ordenado.

`a = { 1, 2, 3, 4 }`

No melhor caso é $O(n^2)$, pois tem de comparar cada elemento, ao longo do vetor.

No melhor caso é $\Omega(n)$ , se tiver condição de paragem.

:::

## Exercício 6

- (Radix LSD) Considere a aplicação do algoritmo radix sort LSD, em que cada passo os elementos são ordenados considerando um dígito, ao seguinte vector:\
  `<48372, 62309, 83861, 91874, 18913, 33829, 47812, 95954, 52377, 22394, 56108, 60991>`

Qual é o terceiro número da sequência, após o algoritmo ter considerado três digitos?

::: details Resposta

Este algoritmo demonstrado assemelha-se muito ao binary search.

Assim, o pior caso é $O(\log n)$  
E o melhor caso é $\Omega(1)$

:::

## Exercício 7

- (Radix MSD) Considere o seguinte vector de números inteiros sem sinal de 6 bits:\
  `<32, 2, 34, 9, 6, 1, 20, 18, 10>`

Qual o conteúdo do vector após os primeiros dois passos do algoritmo de ordenação radix sort MSD, em que em cada passo os elementos são ordenados considerando 2 bits?

Nota: considere que o algoritmo é baseado numa versão estável do algoritmo counting sort. O algoritmo deve apenas processar os 6 bits menos significativos de cada número, independentemente dos números poderem ser guardados em palavras com maior número de bits.

::: details Resposta

Este algoritmo permite em cada iteração adicionar à soma dois valores da tabela.  
São feitas $\frac{n}{2}$ iterações.

Assim o pior caso é $O(n)$  
E o melhor caso é $\Omega(n)$  
Logo existe limite assimptótico apertado $\Theta(n)$

:::

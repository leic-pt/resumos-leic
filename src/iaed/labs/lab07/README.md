---
description: Enunciado e resolução dos exercícios do Laboratório 7 de IAED
---

# Lab 07

[[toc]]

## Exercício 1

Considere a implementação clássica da função `int partition (Item v[], int l, int r)` usada no algoritmo `quicksort` tal como apresentada nas aulas teóricas.

Esta função recebe o vector `v` e as posições `left` e `right` que definem, respectivamente, os índices limite esquerdo e direito do vector a considerar na função.

Suponha que o procedimento `partition` é invocado com os seguintes argumentos:

`v = <13, 6, 5, 14, 12, 4, 16, 18, 7, 9, 10>, left = 0, right = 10`.

Considerando a posição `a[r]` como pivot, indique qual o conteúdo do vector `v` após a execução da função `partition`.

::: details Resolução

Resposta: `a = {9,6,5,7,4,10,16,18,14,13,12}`

{green}(É possível ver o algoritmo em execução ao executar o código abaixo)

<code-group>
<code-block
title="Quick Sort">
<<< @/src/iaed/labs/lab07/quicksort.c

</code-block>
</code-group>
:::

## Exercício 2

Considere o exercício anterior, mas onde os argumentos da função `partition` são os seguintes:

`v =<20, 11, 16, 9, 12, 14, 17, 19, 13, 15>, left = 0 , right = 9`.

Qual o conteúdo do vector `v` após a execução do procedimento `partition`?

::: details Resolução

Resposta: `a = {13,11,14,9,12,15,17,19,20,16}`

:::

## Exercício 3

Diga quais dos seguintes vectores corresponde a um amontoado (heap)?

`<50, 25, 30, 27, 24, 21, 28>`\
`<50, 30, 25, 27, 24, 28, 21>`\
`<60, 50, 9, 40, 41, 10, 8>`\
`<40, 15, 18, 13, 11, 14, 16>`\
`<60, 30, 80, 10, 35, 70, 40>`

::: details Resposta

Resposta: `<40, 15, 18, 13, 11, 14, 16>`

:::

## Exercício 4

A primeira operação do algoritmo heapsort é transformar o vector num amontoado. Considere que o vector de entrada do algoritmo é `<20, 11, 16, 9, 12, 14, 17, 19, 13, 15>`.

- Indique o conteúdo do vector após o passo de transformação num amontoado.
- Indique o conteúdo do vector após os dois maiores elementos terem sido ordenados (colocados na sua posição final), durante a operação de ordenação (heapsort).

::: details Resolução

Resposta: `a = {17,15,16,13,12,14,11,9,19,20}`

Transformada em heap : `a = {20,19,17,13,15,14,16,9,11,12}`

1ª iteração: `a = {19,15,17,13,12,14,16,9,11,20}`

2ª iteração: `a = {17,15,16,13,12,14,11,9,19,20}`

{green}(É possível ver o algoritmo em execução ao executar o código abaixo)

<code-group>
<code-block
title="Heap Sort">
<<< @/src/iaed/labs/lab07/heapsort.c

</code-block>
</code-group>

:::

## Exercício 5

Qual o conteúdo do seguinte vector `<25, 19, 23, 15, 18, 16, 21, 12>` depois de os dois primeiros elementos (i.e. os dois maiores) terem sido ordenados, utilizando o algoritmo de ordenação heapsort?
::: details Resposta

1ª iteração: `a = {23,19,21,15,18,16,12,25}`

2ª iteração: `a = {21,19,16,15,18,12,23,25}`

:::

## Exercício 6

- (Radix LSD) Considere a aplicação do algoritmo radix sort LSD, em que cada passo os elementos são ordenados considerando um dígito, ao seguinte vector:\
  `<48372, 62309, 83861, 91874, 18913, 33829, 47812, 95954, 52377, 22394, 56108, 60991>`

Qual é o terceiro número da sequência, após o algoritmo ter considerado três digitos?

::: details Resposta

Depois de ordenado até 3 digítos:

`<56108, 62309, 48372, 52377, 22394, 47512, 33824, 83861, 41874, 18913, 45954, 60991>`

Logo o terceiro número é 48372.

:::

## Exercício 7

- (Radix MSD) Considere o seguinte vector de números inteiros sem sinal de 6 bits:\
  `<32, 2, 34, 9, 6, 1, 20, 18, 10>`

Qual o conteúdo do vector após os primeiros dois passos do algoritmo de ordenação radix sort MSD, em que em cada passo os elementos são ordenados considerando 2 bits?

Nota: considere que o algoritmo é baseado numa versão estável do algoritmo counting sort.

O algoritmo deve apenas processar os 6 bits menos significativos de cada número, independentemente dos números poderem ser guardados em palavras com maior número de bits.

::: details Resposta

Depois de dois passos:

`<2,1,6,9,10,18,20,32,34>`

:::

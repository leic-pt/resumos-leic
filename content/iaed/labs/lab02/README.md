---
title: Lab 02
description: Enunciado e resolução dos exercícios do Laboratório 2 de IAED
path: /iaed/labs/lab02
type: labsProg
---

# Lab 02

```toc

```

:::danger[ERROS NO MOOSHAK]

Os programas seguintes não devem ter mais nenhum input/output além do pedido no enunciado.
Qualquer mensagem adicional (e.g. `Introduza três números:` ou `O maior número é`) irá causar
um erro no Mooshak, impedindo o programa de ser aceite.

:::

## Exercício 1

_(Maior de Três)_ Escreva um programa que determine e imprima o maior de três números inteiros dados pelo utilizador.

:::::details[Resolução]
::::tab-group
:::tab[CONDICIONAIS]
`embed:ex01.c`
:::

:::tab[CICLOS]
`embed:ex01_2.c`
:::
::::
:::::

## Exercício 2

_(Ordena 2)_ Escreva um programa que leia dois inteiros `N`, `M` e imprima o menor deles na primeira linha e o maior na segunda.

:::details[Resolução]
`embed:ex02.c`
:::

## Exercício 3

_(Divisor)_ Escreva um programa que leia dois inteiros positivos `N`, `M` e imprima `"yes"` se `M` é um divisor de `N`. Caso contrário, imprima `"no"`.

:::details[Resolução]
`embed:ex03.c`
:::

## Exercício 4

_(Ordena 3)_ Escreva um programa que leia três inteiros e imprima-os por ordem na mesma linha separados por um espaço em branco. O menor dos números deve aparecer como primeiro.

:::details[Resolução]
`embed:ex04.c`
:::

## Exercício 5

_(Ciclo)_ Escreva um programa que leia um inteiro positivo `N` e imprima os números `1..N`, um por linha.

:::details[Resolução]
`embed:ex05.c`
:::

## Exercício 6

_(Maior e Menor)_ Escreva um programa que determine o maior e o menor número de `N` números reais dados pelo utilizador. Considere que `N` é um valor pedido ao utilizador. O resultado deve ser impresso com o comando `printf("min: %f, max: %f\n", min, max);`.

_Sugestão:_ inicialize o maior e o menor com o primeiro valor lido.

:::details[Resolução]
`embed:ex06.c`
:::

## Exercício 7

_(Divisores)_ Escreva um programa que pede ao utilizador um inteiro positivo `N` e imprima o número de divisores de `N`. Recorde que os números primos têm 2 divisores.

:::details[Resolução]
`embed:ex07.c`
:::

## Exercício 8

_(Média)_ Escreva um programa que calcule e imprima a média de `N` números reais dados pelo utilizador. O programa deverá primeiro pedir ao utilizador um inteiro `N`, representando a quantidade de números que vão ser introduzidos. Os números reais devem ser representados pelo tipo `float`.
O resultado deve ser impresso com o comando `printf("%.2f\n", media);`.

:::details[Resolução]
`embed:ex08.c`
:::

## Exercício 9

_(Conversão)_ Escreva um programa que pede ao utilizador um valor `N` correspondente a um certo período de tempo em segundos. O programa deverá apresentar no output esse período de tempo no formato `HH:MM:SS`.

_Sugestão:_ utilize o operador que calcula o resto da divisão (`%`).

:::details[Resolução]
`embed:ex09.c`
:::

## Exercício 10

_(Dígitos)_ Escreva um programa que pede ao utilizador um valor positivo `N`. No output, deverá mostrar o número de dígitos que compõem `N` (na primeira linha), assim como a soma dos dígitos de `N` (na segunda linha). Por exemplo, o número `12345` tem `5` dígitos e a soma desses dígitos é `15`.

:::details[Resolução]
`embed:ex10.c`
:::

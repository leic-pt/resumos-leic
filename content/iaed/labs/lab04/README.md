---
title: Lab 04
description: Enunciado e resolução dos exercícios do Laboratório 4 de IAED
path: /iaed/lab04
type: labsProg
---

# Lab 04

```toc

```

:::danger[NOTA PRÉVIA]
Quando trabalhamos com vectores em C, é comum fazer erros que levam a [Segmentation Faults](https://en.wikipedia.org/wiki/Segmentation_fault).
Se obtiver tal erro nos exercícios abaixo provavelmente terá uma gralha nos limites dos seus ciclos, ou seja,
deverá estar a tentar aceder a um elemento de um vetor que não existe.
Podem usar o programa `valgrind` para tentar identificar o problema.
:::

:::tip
Considere que nos exercícios seguintes, todas as strings têm no máximo `MAX = 80` caracteres (incluindo o carácter de fim de string).
:::

## Exercício 1

_(Gráfico horizontal)_ Escreva um programa que peça ao utilizador um número inteiro positivo `n < VECMAX`, onde `VECMAX=100`.
Depois, leia `n` números inteiros positivos.
No final o programa deverá escrever uma representação gráfica dos valores lidos como o que se segue.
O gráfico apresentado é o exemplo para `n = 3` e valores `1 3 4`.

```
*
***
****
```

:::details[Resolução]
<code-group>
<code-block
title="Diogo Correia">
<<< @/src/iaed/labs/lab04/ex01_dc.c
</code-block>

</code-group>
:::

## Exercício 2

_(Gráfico vertical suspenso)_ Escreva um programa que peça ao utilizador um número inteiro positivo `n < VECMAX`, onde `VECMAX=100`.
Depois, leia `n` números inteiros positivos.
No final o programa deverá escrever uma representação gráfica dos valores lidos como o que se segue.
O gráfico apresentado é o exemplo para `n = 3` e valores `1 3 4`.

```
***
 **
 **
  *
```

:::details[Resolução]
<code-group>
<code-block
title="Diogo Correia">
<<< @/src/iaed/labs/lab04/ex02_dc.c
</code-block>
</code-group>
:::

## Exercício 3

_(Gráfico vertical crescente)_ Escreva um programa que peça ao utilizador um número inteiro positivo `n < VECMAX`, onde `VECMAX=100`.
Depois, leia `n` números inteiros positivos.
No final o programa deverá escrever uma representação gráfica dos valores lidos como o que se segue.
O gráfico apresentado é o exemplo para `n = 3` e valores `1 3 4`.

```
  *
 **
 **
***
```

:::details[Resolução]
<code-group>
<code-block
title="Diogo Correia">
<<< @/src/iaed/labs/lab04/ex03_dc.c
</code-block>

</code-group>
:::

## Exercício 4

_(Manipulação de Strings: Palíndromo)_ Escreva um programa que leia uma palavra do terminal e verifica se a palavra é um palíndromo ou não.
Uma palavra é um palíndromo se se escrever da mesma maneira da esquerda para a direita e vice-versa (por exemplo, "AMA" é um palíndromo).
Se a palavra é um palíndromo, o programa deverá imprimir o valor `yes`, e `no`, se não é.

:::tip[DICA]
Podem usar `scanf("%s", s)` para ler uma palavra. Reparem que a string `s` não pede `&` no `scanf`.
:::

:::details[Resolução]
<code-group>
<code-block
title="Diogo Correia">
<<< @/src/iaed/labs/lab04/ex04_dc.c
</code-block>
</code-group>
:::

## Exercício 5

_(Manipulação de Strings: Leitura e Escrita de Linhas de Texto)_ Escreva uma programa que leia caracteres do teclado,
carácter a carácter, até encontrar o carácter `\n` ou `EOF` e escreve a linha lida no terminal.
Implemente a função `int leLinha(char s[])` que lê a linha para a string `s` e devolve o número de caracteres lidos.

:::tip[DICA]
Depois de resolver este exercício, experimente utilizar o comando `fgets`.
:::

:::details[Resolução]
<code-group>
<code-block
title="Diogo Correia">
<<< @/src/iaed/labs/lab04/ex05_dc.c
</code-block>

</code-group>
:::

## Exercício 6

_(Manipulação de Strings: Maiúsculas)_ Escreva um programa que leia uma linha do terminal
(use a função do exercício anterior) e que escreve no terminal o mesmo texto,
mas com as letras minúsculas substituídas pelas respectivas letras maiúsculas.
Implemente a função `void maiusculas(char s[])`.

:::tip[NOTA]
Recorde que a string `s` é alterada pela função `maiusculas`.
:::

:::details[Resolução]
<code-group>
<code-block
title="Diogo Correia">
<<< @/src/iaed/labs/lab04/ex06_dc.c
</code-block>
</code-group>
:::

## Exercício 7

_(Manipulação de Strings: Apaga Carácter)_ Escreva um programa que leia uma linha e um carácter e
escreve no terminal a mesma linha onde todas as ocorrências do carácter foram removidas.
Implemente a função `void apagaCaracter(char s[], char c)` que apague o carácter `c` da string `s`.

:::details[Resolução]
<code-group>
<code-block
title="Diogo Correia">
<<< @/src/iaed/labs/lab04/ex07_dc.c
</code-block>
</code-group>
:::

## Exercício 8

_(Maior)_ Escreva um programa que leia dois números inteiros em representação decimal e imprime o maior desses dois números.
Podem assumir que os dois números têm o mesmo número de algarismos e no máximo 100 carácteres.

:::warning[ATENÇÃO!]
Os números podem ser demasiado grandes para ser guardados numa variável do tipo `long long`, por exemplo `9988888888888888888887` e `9988888888888888888888`.
:::

:::details[Resolução]
<code-group>
<code-block
title="Diogo Correia">
<<< @/src/iaed/labs/lab04/ex08_dc.c
</code-block>
</code-group>
:::

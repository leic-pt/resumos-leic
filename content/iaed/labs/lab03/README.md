---
description: Enunciado e resolução dos exercícios do Laboratório 3 de IAED
path: /iaed/lab03
---

# Lab 03

```toc

```

## Exercício 1

_(Quadrado de Números)_ Escreva um programa que desenhe um quadrado de números como o que se segue utilizando a função `void quadrado(int N);`.
O valor de `N`, dado pelo utilizador, deverá ser obrigatoriamente maior ou igual 2. O tab (carácter `'\t'`) deve ser usado como o separador.
O quadrado apresentado é o exemplo para `N = 5`.

::: warning AVISO
Em cada linha, após o último número apenas deve existir um `'\n'`.
:::

```
1       2       3       4      5
2       3       4       5      6
3       4       5       6      7
4       5       6       7      8
5       6       7       8      9
```

::: tip DICA
`echo 5 | ./ex01` pode ser usado para rapidamente testar o programa.
:::

::: details Resolução
<code-group>
<code-block
title="Diogo Correia">
<<< @/src/iaed/labs/lab03/ex01_dc.c
</code-block>

<code-block
title="Luís Fonseca">
<<< @/src/iaed/labs/lab03/ex01_lf.c
</code-block>
</code-group>
:::

## Exercício 2

_(Pirâmide de Números)_ Escreva um programa que desenhe uma pirâmide de números utilizando a função `void piramide(int N)`;. O valor de `N`, dado pelo utilizador, deverá ser obrigatoriamente superior ou igual 2. O espaço (carácter `' '`) deve ser usado como o separador. A pirâmide apresentada é o exemplo para `N = 5`.

::: warning AVISO
Em cada linha, após o último número apenas deve existir um '\n'.
:::

```
        1
      1 2 1
    1 2 3 2 1
  1 2 3 4 3 2 1
1 2 3 4 5 4 3 2 1
```

::: details Resolução
<code-group>
<code-block
title="Diogo Correia">
<<< @/src/iaed/labs/lab03/ex02_dc.c
</code-block>

<code-block
title="Luís Fonseca">
<<< @/src/iaed/labs/lab03/ex02_lf.c
</code-block>
</code-group>
:::

## Exercício 3

_(Cruz diagonal)_ Escreva um programa que desenhe uma cruz nas diagonais utilizando a função `void cruz(int N);`. O asterisco (carácter `'*'`) deve ser usado para desenhar a cruz; hífen (carácter `'-'`) deve ser usado como o separador. As cruzes apresentadas são os exemplos para `N = 3` e `N = 8`.

::: warning AVISO
Em cada linha, após o último caracter apenas deve existir um '\n'.
:::

```
* - *
- * -
* - *
```

```
* - - - - - - *
- * - - - - * -
- - * - - * - -
- - - * * - - -
- - - * * - - -
- - * - - * - -
- * - - - - * -
* - - - - - - *
```

::: details Resolução
<code-group>
<code-block
title="Diogo Correia">
<<< @/src/iaed/labs/lab03/ex03_dc.c
</code-block>

<code-block
title="Luís Fonseca">
<<< @/src/iaed/labs/lab03/ex03_lf.c
</code-block>
</code-group>
:::

## Exercício 4

_(Números)_ Escreva um programa que leia uma sequência de números separados por espaços e novas linhas, e imprima a mesma sequência, mas os números no output não deverão conter 0 no início, por exemplo, `007` deverá imprimir `7`.

A excepção é o número 0, que se deverá imprimir como 0. A sequência no input termina com `EOF`.

::: danger ATENÇÃO
Os valores dos números poderão ser superiores ao valor máximo do tipo int ou qualquer tipo primitivo em C.
:::

::: tip DICA
A função `int getchar()` pode ser usada para ler um carácter.
:::

::: details Resolução
<code-group>
<code-block
title="Diogo Correia">
<<< @/src/iaed/labs/lab03/ex04_dc.c
</code-block>

<code-block
title="Luís Fonseca">
<<< @/src/iaed/labs/lab03/ex04_lf.c
</code-block>
</code-group>
:::

## Exercício 5

_(Mensagens)_ Escreva um programa que leia uma sequência de mensagens e imprima-as, uma por linha. Cada mensagem é delimitada pelas aspas (carácter `"`). A mensagem pode conter uma "escape sequence" - o carácter perde significado especial se for precedido pelo caracter `\` (backslash). Por exemplo, o input `"a\"foo\\bar\""` corresponde à mensagem `a"foo\bar"`. Assim o backslash permite incluir aspas na mensagem tal como a própria backslash.

::: tip DICA
Utilize o conceito de estado como fizemos no contador de palavras na aula teórica.
:::

::: details Resolução
<code-group>
<code-block
title="Diogo Correia">
<<< @/src/iaed/labs/lab03/ex05_dc.c
</code-block>

<code-block
title="Luís Fonseca">
<<< @/src/iaed/labs/lab03/ex05_lf.c
</code-block>
</code-group>
:::

## Exercício 6

_(Divisível)_ Escreva um programa que leia um número inteiro positivo a partir do input (como uma sequência de caráteres até 100 chars) e que decide se o número lido é divisível por 9.

Se o número for divisível por 9, o programa deverá imprimir a mensagem `yes`, e deverá imprimir `no` no caso contrário.

::: danger ATENÇÃO
Os valores dos números podem ser superiores ao valor máximo do tipo int ou de qualquer tipo primitivo em C.
:::

::: tip DICA
Um número é divisível por 9 se e só se a soma dos seus algarismos for divisível por 9. Por exemplo, a soma dos algarismos do número 729 é 18, pelo que é divisível por 9. O facto pode ser observado pela equação seguinte:

$$
7 \times 100 + 2 \times 10 + 9 = (7 \times 99 + 7) + (2 \times 9 + 2) + 9
$$

:::

::: details Resolução
<code-group>
<code-block
title="Diogo Correia">
<<< @/src/iaed/labs/lab03/ex06_dc.c
</code-block>

<code-block
title="Luís Fonseca">
<<< @/src/iaed/labs/lab03/ex06_lf.c
</code-block>
</code-group>
:::

## Exercício 7

_(Calculadora)_ Escreva um programa que receba uma sequência de números e operadores (`+`, `-`) representando uma expressão aritmética e retorna o resultado dessa expressão aritmética.

A sequência no input termina com `\n`.

Pode supor que cada dois números são sempre separados por `espaço, operador, espaço`, ie, `' op '`, para qualquer um dos 2 operadores acima.

Exemplo: No input `70 + 22 - 3` deverá retornar `89`.

::: tip DICA
Deverá começar por converter uma sequência de algarismos (carácteres) para um número inteiro.
:::

::: details Resolução
<code-group>
<code-block
title="Diogo Correia">
<<< @/src/iaed/labs/lab03/ex07_dc.c
</code-block>

<code-block
title="Luís Fonseca">
<<< @/src/iaed/labs/lab03/ex07_lf.c
</code-block>
</code-group>
:::

---
description: Enunciado e resolução dos exercícios do Laboratório 11 de IAED
---

# Lab 11

[[toc]]

## Exercício 1

Qual a sequência de inserção numa árvore de pesquisa binária (binary search tree) inicialmente vazia que resulta numa árvore equilibrada ?

```
a. < 23, 19, 21, 15, 18, 16, 12, 25 >
b. < 23, 25, 19, 15, 21, 18, 16, 12 >
c. < 12, 15, 16, 18, 19, 21, 23, 25 >
d. < 25, 23, 21, 19, 18, 16, 15, 12 >
e. < 18, 21, 23, 25, 15, 19, 16, 12 >
f. < 18, 23, 16, 21, 15, 19, 12, 25 >
g. < 23, 18, 21, 16, 15, 12, 19, 25 >
```

::: details Resolução

<img src="./1111-ex1r.png" alt="ex1" class="invert-dark2">

Opção e)
:::

## Exercício 2

Qual a operação de rotação que transforma a árvore de pesquisa binária, resultante da inserção da sequência abaixo, numa árvore equilibrada ?

```
< 15, 12, 17, 21, 23 >

a. rotR(15)
b. rotL(15)
c. rotR(17)
d. rotL(17)
e. rotR(21)
f. rotL(21)
g. rotR(23)
```

Nota: considere que `rotL` e `rotR` são as operações de rotação para a esquerda e para a direita, respectivamente.

::: details Resolução

Resposta b) e d) esão corretas

:::

## Exercício 3

Considere uma árvore AVL para inteiros inicialmente vazia onde são inseridos sequencialmente os elementos do seguinte vector

```
< 10, 8, 9, 7, 16, 3, 50, 15, 6, 11 >
```

Desenhe a árvore resultante e indique a sequência de elementos visitados por uma travessia post-order.

::: details Resolução

<img src="./1111-ex3r.png" alt="ex3" class="invert-dark2">

Resposta: 6, 3, 7, 9, 8, 11, 15, 50, 16, 10

:::

## Exercício 4

Considere a árvore resultante do exercício anterior e elimine o elemento `16`.\
 Desenhe a árvore resultante e indique a sequência de elementos visitados por uma travessia pre-order.

::: details Resolução

<img src="./1111-ex4r.png" alt="ex4" class="invert-dark2">

Resposta: 10, 8, 7, 3, 6, 9, 15, 11, 50

:::

## Exercício 5

Considere a seguinte árvore binária de pesquisa:

<img src="./1111-ex5.jpg" alt="ex5" class="invert-dark2">

Qual a rotação que teria de efectuar para equilibrar a árvore? Indique o valor do nó a rodar e a direcção da rotação (direita/esquerda).

::: details Resolução (soon)

:::

## Exercício 6

Considere a seguinte árvore AVL:

<img src="./1111-ex6.jpg" alt="ex6" class="invert-dark2">

Insira o elemento 60 e na árvore AVL resultante elimine o elemento 10.\
Indique a sequência de elementos visitados ao efectuar uma travessia post-order da árvore AVL após as operações de inserção e remoção que efectuou.

::: details Resolução (soon)

:::

## Exercício 7

Considere a seguinte árvore AVL:

<img src="./1111-ex7.jpg" alt="ex7" class="invert-dark2">

Elimine o elemento 12 e na árvore AVL resultante insira o elemento 20.\
Indique a sequência de elementos visitados ao efectuar uma travessia pre-order da árvore AVL após as operações de remoção e inserção que efectuou.

::: details Resolução (soon)

:::

---
description: Enunciado e resolução dos exercícios do Laboratório 12 de IAED
---

# Lab 12

[[toc]]

## Exercício 1

Qual a sequência de vértices visitados numa travessia em profundidade primeiro (DFS) sobre o grafo abaixo. Considere que os vértices são visitados por ordem alfabética e que os vértices adjacentes de um vértice também são visitados por ordem alfabética.

<img src="./ex1.jpg" alt="ex1" class="invert-dark2">

::: details Resolução

<img src="./ex1s.jpg" alt="ex1s" class="invert-dark2">

1º Vermelho\
2º Verde\
3º Azul

Resposta A C B F E D G

:::

## Exercício 2

Considere uma travessia em profundidade primeiro (DFS) do grafo abaixo, e na qual os vértices são visitados por ordem alfabética e os vértices adjacentes de um vértice também são visitados por ordem alfabética. Indique os arcos de árvore DF.

<img src="./ex2.jpg" alt="ex2" class="invert-dark2">

::: details Resolução

<img src="./ex2s.jpg" alt="ex2s" class="invert-dark2">

1º Vermelho\
2º Verde\
3º Azul

:::

## Exercício 3

Considere uma travessia em profundidade primeiro (DFS) sobre o grafo abaixo. Considere ainda que os vértices são visitados por ordem alfabética e que os vértices adjacentes de um vértice são também visitados por ordem alfabética. Qual o número de arcos para trás e de cruzamento que resultam da execução desta travessia? Os arcos para trás (back edges) ligam um nó com o seu predecessor na árvore DF, os arcos de cruzamento (cross edges) ligam nós n1 e n2 se n1 não é predecessor do n2 e nem n2 é predecessor do n1.

<img src="./ex3.jpg" alt="ex3" class="invert-dark2">

::: details Resolução

<img src="./ex3s.jpg" alt="ex3s" class="invert-dark2">

1º Vermelho\
2º Verde\
3º Azul

<img src="./ex3aux.jpg" alt="ex3aux" class="invert-dark2">

B -> Back Edges\
C -> Cross Edges

:::

## Exercício 4

Qual a sequência de vértices visitados numa travessia em largura primeiro (BFS) sobre o grafo abaixo, com origem no vértice A?\
 Considere que os vértices adjacentes de um vértice são visitados por ordem alfabética.
<img src="./ex4.jpg" alt="ex4" class="invert-dark2">

::: details Resolução

<img src="./ex4s.jpg" alt="ex4s" class="invert-dark2">

1º Vermelho\
2º Verde\
3º Azul

Resposta : `A B C G D E H F`
:::

## Exercício 5

Qual das sequências de vértices corresponde a uma ordenação topológica do grafo abaixo?\
Lembra-se do algoritmo para calculá-la?

<img src="./ex5.jpg" alt="ex5" class="invert-dark2">

`1. A,B,C,D,E,F,G`\
`2. B,A,D,C,G,F,E`\
`3. B,A,D,F,E,G,C`\
`4. B,F,A,E,D,C,G`\
`5. C,G,E,B,A,D,F`\
`6. F,E,G,D,C,B,A`\
`7. F,G,E,B,A,D,C`

::: details Resolução

Resolução nos slides da aula

Resposta `7. F,G,E,B,A,D,C`
:::

## Exercício 6

Qual o número de componentes fortemente ligados do grafo dirigido da figura abaixo.\
 Lembra-se do algoritmo para calculá-los?

<img src="./ex6.jpg" alt="ex6" class="invert-dark2">

Resolução nos slides da aula

::: details Resolução

Resposta: 1

:::

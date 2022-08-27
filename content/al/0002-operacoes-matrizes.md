---
title: Operações com Matrizes
description: >-
  Soma de matrizes.
  Produto de uma matriz por um escalar.
  Produto de matrizes (e propriedades).
  Matriz Identidade.
  Matrizes Elementares.
  Inversa de uma matriz.
  Algoritmo de Gauss-Jordan.
path: /al/operacoes-matrizes
type: content
---

# Operações com Matrizes

```toc

```

Como definições iniciais auxiliares, atente-se nas seguintes notações:

- $$[A]_{ij}$$ corresponde à entrada na linha $i$, coluna $j$ da matriz $A$.
- O conjunto das matrizes $m \times n$ é representado por $\mathbb{M}_{m\times n}(\mathbb{R})$.

## Soma de Matrizes e Produto de uma Matriz por um Escalar

Tanto a soma de matrizes como o produto de uma matriz por um escalar são das
operações mais simples que vamos encontrar em Álgebra Linear, também devido à sua
semelhança com operações que já conhecemos do secundário.

Tendo duas matrizes $A$ e $B$ tal que

$$
A = \begin{bmatrix}
  a_{11} & a_{12} & \cdots & a_{1n} \\
  a_{21} & a_{22} & \cdots & a_{2n} \\
  \vdots & \vdots & \ddots & \vdots \\
  a_{m1} & a_{m2} & \cdots & a_{mn}
\end{bmatrix}
\text{ e }
B = \begin{bmatrix}
  b_{11} & b_{12} & \cdots & b_{1n} \\
  b_{21} & b_{22} & \cdots & b_{2n} \\
  \vdots & \vdots & \ddots & \vdots \\
  b_{m1} & b_{m2} & \cdots & b_{mn}
\end{bmatrix}
$$

Dizemos que a matriz-resultado da sua soma, $A + B$, é a seguinte matriz:

$$
A + B = \begin{bmatrix}
  a_{11} + b_{11} & a_{12} + b_{12} & \cdots & a_{1n} + b_{1n} \\
  a_{21} + b_{21} & a_{22} + b_{22} & \cdots & a_{2n} + b_{2n} \\
  \vdots & \vdots & \ddots & \vdots \\
  a_{m1} + b_{m1} & a_{m2} + b_{m2} & \cdots & a_{mn} + b_{mn}
\end{bmatrix}
$$

Note-se que a operação pode ser feita com um número arbitrário de matrizes,
seguindo as propriedades da soma nos reais já conhecidas: tendo $A + B + C$,
podemos escrever $A + (B + C)$, somando assim $A$ à matriz $B + C$.

O produto de uma matriz por um escalar, $\alpha \in \mathbb{R}$, também não tem nada que saber:
corresponde apenas à multiplicação de todas as entradas de $A$ por $\alpha$.

$$
\alpha A = \begin{bmatrix}
  \alpha a_{11} & \alpha a_{12} & \cdots & \alpha a_{1n} \\
  \alpha a_{21} & \alpha a_{22} & \cdots & \alpha a_{2n} \\
  \vdots & \vdots & \ddots & \vdots \\
  \alpha a_{m1} & \alpha a_{m2} & \cdots & \alpha a_{mn}
\end{bmatrix}
$$

:::tip[Propriedades]

Podemos, claro, definir algumas propriedades quanto às operações referidas acima.
Note-se que apesar de muitas das propriedades das operações nos reais transitarem
para as operações no espaço matricial, [**tal não acontece sempre**](color:yellow)!
Não devemos, portanto, assumir sem segurança que podemos recorrer a todas
as propriedades que vimos no secundário.

A **comutatividade**, $A + B = B + A$, e a **associatividade**, $A + (B + C) = (A + B) + C$ e $(\alpha\beta)A = \alpha(\beta A)$,
são válidas para este conjunto de operações, com provas relativamente triviais.
Mais ainda, podemos afirmar que a **propriedade distributiva** se verifica,
$\alpha (A + B) = \alpha A + \alpha B$ e $(\alpha + \beta)A = \alpha A + \beta A$.

Podemos ainda afirmar que existe o elemento neutro, que na soma corresponde à **matriz nula**:
tendo uma matriz $A$, $m \times n$, dizemos que a respetiva matriz nula é uma matriz $0$, $m \times n$,
completamente preenchida por zeros, tal que $A + 0 = A$.

As noções de simétrico e subtração transitam de igual forma dos reais.

:::

## Produto Matricial

O produto de matrizes é uma operação relativamente simples, mas que requer alguma prática
para a sua interiorização.

Considerando duas matrizes $A$ e $B$, respetivamente $m \times n$ e $n \times p$, tal que

$$
A = \begin{bmatrix}
  a_{11} & a_{12} & \cdots & a_{1n} \\
  a_{21} & a_{22} & \cdots & a_{2n} \\
  \vdots & \vdots & \ddots & \vdots \\
  a_{m1} & a_{m2} & \cdots & a_{mn}
\end{bmatrix}
\text{ e }
B = \begin{bmatrix}
  b_{11} & b_{12} & \cdots & b_{1p} \\
  b_{21} & b_{22} & \cdots & b_{2p} \\
  \vdots & \vdots & \ddots & \vdots \\
  b_{n1} & b_{n2} & \cdots & b_{np}
\end{bmatrix}
$$

temos que o respetivo produto matricial, $A \times B$, corresponde a uma matriz $m \times p$,
onde o valor de cada uma das suas entradas é dada pela soma seguinte:

$$
[AB]_{ij} = \sum_{k=1}^n a_{ik} b_{kj}
$$

O exceto apresentado de seguida poderá ajudar a compreender melhor o que está de facto a acontecer:

![Exemplo - Multiplicação Matricial](https://thumbs.gfycat.com/AjarSelfassuredGoldfish-size_restricted.gif)

:::danger[]

O produto matricial só pode ser realizado caso o número de colunas da matriz à esquerda
seja igual ao número de linhas da matriz à direita. Isto impede, por exemplo,
que o produto matricial goze da propriedade comutativa.

Podemos, por exemplo, pensar no excerto acima e perceber que só funciona porque o número de colunas
da matriz à esquerda é igual ao número de linhas da matriz à direita: caso a matriz à direita tivesse
três linhas, por exemplo, tentava-se multiplicar cada linha por cada coluna, mas havendo apenas 2
elementos por linha na matriz à esquerda, o terceiro elemento das colunas da matriz à direita
ia ficar "sem par", invalidando assim a operação.

:::

O produto de matrizes goza das propriedades associativa e distributiva:

- $(AB)C = A(BC)$
- $\alpha (AB) = (\alpha A)(B) = A(\alpha B)$
- $A(B + C) = AB + AC$
- $(A + B)C = AC + BC$

Note-se, como foi referido anteriormente, que [**não goza da propriedade comutativa**](color:red).

## Matriz Identidade

Foi referido anteriormente o [**elemento neutro**](color:green) da soma de matrizes, a **matriz nula**.
Tal como nos produto dos reais, existe também no produto matricial um elemento neutro, a **matriz identidade**.

A matriz identidade é dos elementos mais simples que vamos abordar nesta cadeira: uma [**matriz quadrada**](color:orange),
isto é, $m \times m$, onde todos os elementos são iguais a zero, exceto os elementos na diagonal, que são iguais a um.

$$
I_m = \begin{bmatrix}
  1 & 0 & \cdots & 0 \\
  0 & 1 & \cdots & 0 \\
  \vdots & \vdots & \ddots & \vdots \\
  0 & 0 & \cdots & 1
\end{bmatrix}
$$

Sendo o elemento neutro do produto de matrizes, temos, claro, que $I_m \times A = A \times I_m = A$.

## Matriz Elementar

Foi referida anteriormente a noção de [transformação elementar](./introducao#matriz-em-escada-de-linhas),
que nos permitia obter matrizes equivalentes através de pequenas operações intermédias.
O nome "elementar" advém das [**matrizes elementares**](color:green), matrizes obtidas
através de uma única operação, as tais transformações elementares. São exemplos as seguintes matrizes:

$$
% 3 side by side matrices, each with a bottom label
\begin{array}{ccc}
  \begin{bmatrix}
    1 & 0 & 0 \\
    0 & 1 & 0 \\
    0 & 0 & 1
  \end{bmatrix} & \begin{bmatrix}
    1 & 0 & 0 \\
    0 & 0 & 1 \\
    0 & 1 & 0
  \end{bmatrix} & \begin{bmatrix}
    1 & 0 & 0 \\
    0 & 1 & 0 \\
    0 & 0 & -1
  \end{bmatrix}
\end{array}
$$

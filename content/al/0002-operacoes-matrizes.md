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

O excerto apresentado de seguida poderá ajudar a compreender melhor o que está de facto a acontecer:

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

Por fim, é relevante realçar que a lei do anulamento do produto, presente nos reais, não se aplica aqui:
tendo o produto matricial $AB$, não é obrigatório que pelo menos uma das matrizes corresponda à matriz nula
para o produto também o ser.

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
através de uma única operação, as tais **transformações elementares**. São exemplos as seguintes matrizes:

$$
\begin{array}{ccc}
  \begin{bmatrix}
    1 & 0 & 0 \\
    \smartcolor{orange}{1} & 1 & 0 \\
    0 & 0 & 1
  \end{bmatrix}, & \begin{bmatrix}
    1 & 0 & 0 \\
    0 & 0 & \smartcolor{green}{1} \\
    0 & \smartcolor{green}{1} & 0
  \end{bmatrix}, & \begin{bmatrix}
    1 & 0 & 0 \\
    0 & 1 & 0 \\
    0 & 0 & \smartcolor{blue}{-1}
  \end{bmatrix}
  \\
  L_2 + L_1 & L_2 \leftrightarrow L_3 & -L_3
\end{array}
$$

Temos ainda que, dadas uma matriz elementar $E$ e uma qualquer matriz $A$, a matriz $EA$ corresponde
precisamente à aplicação da transformação elementar correspondente a $E$ à matriz $A$:

$$
\begin{bmatrix}
  1 & 0 & 0 \\
  \smartcolor{orange}{1} & 1 & 0 \\
  0 & 0 & 1
\end{bmatrix}
\begin{bmatrix}
  a_{11} & a_{12} & \cdots & a_{1n} \\
  a_{21} & a_{22} & \cdots & a_{2n} \\
  a_{31} & a_{32} & \cdots & a_{3n}
\end{bmatrix} =
\begin{bmatrix}
  a_{11} & a_{12} & \cdots & a_{1n} \\
  a_{11} + a_{21} & a_{12} + a_{22} & \cdots & a_{1n} + a_{2n} \\
  a_{31} & a_{32} & \cdots & a_{3n}
\end{bmatrix}
$$

$$
\begin{bmatrix}
  1 & 0 & 0 \\
  0 & 0 & \smartcolor{green}{1} \\
  0 & \smartcolor{green}{1} & 0
\end{bmatrix}
\begin{bmatrix}
  a_{11} & a_{12} & \cdots & a_{1n} \\
  a_{21} & a_{22} & \cdots & a_{2n} \\
  a_{31} & a_{32} & \cdots & a_{3n}
\end{bmatrix} =
\begin{bmatrix}
  a_{11} & a_{12} & \cdots & a_{1n} \\
  a_{31} & a_{32} & \cdots & a_{3n} \\
  a_{21} & a_{22} & \cdots & a_{2n}
\end{bmatrix}
$$

$$
\begin{bmatrix}
  1 & 0 & 0 \\
  0 & 1 & 0 \\
  0 & 0 & \smartcolor{blue}{-1}
\end{bmatrix}
\begin{bmatrix}
  a_{11} & a_{12} & \cdots & a_{1n} \\
  a_{21} & a_{22} & \cdots & a_{2n} \\
  a_{31} & a_{32} & \cdots & a_{3n}
\end{bmatrix} =
\begin{bmatrix}
  a_{11} & a_{12} & \cdots & a_{1n} \\
  a_{21} & a_{22} & \cdots & a_{2n} \\
  -a_{31} & -a_{32} & \cdots & -a_{3n}
\end{bmatrix}
$$

Podemos daqui retirar que, sendo $EA$ o resultado de aplicar a transformação elementar correspondente a $E$ à matriz $A$,
$E_k \cdots E_1 A = L$ corresponderá a uma possível sequência de $k$ transformações elementares aplicadas a $A$,
com resultado $L$ - é isso, aliás, que acontece quando tentamos colocar $A$ sob a forma de escada de linhas!

:::details[Exemplo]

É frequentemente pedido em exercícios que, dada uma matriz $A$, cheguemos a uma matriz em escada de linhas
equivalente, $L$, e que indiquemos a sequência de transformações elementares, $B = E_k \cdots E_1$, que
permitiram obter $L$. Temos, claro, que a sequência $E_k \cdots E_1$ terá início na matriz identidade, $I$,
pelo que podemos resolver o exercício da seguinte forma:

$$
\underbrace{\left[\begin{array}{ccc|ccc}
  0 & 2 & 2 & 1 & 0 & 0 \\
  1 & 1 & 3 & 0 & 1 & 0 \\
  0 & 2 & 2 & 0 & 0 & 1
\end{array}\right]}_{A|I} \underrightarrow{L_1 \leftrightarrow L_2}
\underbrace{\left[\begin{array}{ccc|ccc}
  1 & 1 & 3 & 0 & 1 & 0 \\
  0 & 2 & 2 & 1 & 0 & 0 \\
  0 & 2 & 2 & 0 & 0 & 1
\end{array}\right]}_{E_1 A|E_1 I} \underrightarrow{L_3 - L_2}
\underbrace{\left[\begin{array}{ccc|ccc}
  1 & 1 & 3 & 0 & 1 & 0 \\
  0 & 2 & 2 & 1 & 0 & 0 \\
  0 & 0 & 0 & -1 & 0 & 1
\end{array}\right]}_{E_2 E_1 A|E_2 E_1}
$$

Note-se que à direita vamos formando $B$, a matriz correspondente à sequência de transformações elementares,
e à esquerda $L$, a matriz equivalente a $A$ sob a forma de escada de linhas.

:::

Por fim, resta realçar que, dada uma matriz $L$ em escada de linhas, existe uma sequência
de matrizes elementares $E_k \cdots E_1$ tal que $E_k \cdots E_1 L = I$.

## Matrizes Invertíveis

:::info[Definição]

Uma matriz [**quadrada**](color:orange) $A$ diz-se invertível caso exista uma matriz $B$ tal que $AB = BA = I$.  
$B$ será, caso exista, [**única**](color:red) para $A$, designando-se inversa de $A$, $A^{-1}$.

:::

Note-se que a matriz nula é o caso mais simples de uma matriz não invertível, já que o seu produto
por qualquer outra matriz será necessariamente a matriz nula - nunca a matriz identidade.
Mais ainda, qualquer matriz com uma linha ou coluna nula será também não invertível,
já que o seu produto por qualquer outra matriz terá uma linha ou coluna também nula,
impossibilitando assim a obtenção da matriz identidade. A inversa da matriz identidade é a própria matriz identidade.

:::tip[Propriedades]

A matriz inversa de uma qualquer matriz elementar $E$ é a matriz elementar correspondente à
transformação elementar "oposta" à que leva a $E$. Seguem-se alguns exemplos:

$$
\begin{bmatrix}
  1 & 0 & 0 \\
  0 & 3 & 0 \\
  0 & 0 & 1
\end{bmatrix}^{-1} =
\begin{bmatrix}
  1 & 0 & 0 \\
  0 & \frac{1}{3} & 0 \\
  0 & 0 & 1
\end{bmatrix}; \qquad
\begin{bmatrix}
  1 & 0 & 0 \\
  0 & 1 & 0 \\
  2 & 0 & 1
\end{bmatrix}^{-1} =
\begin{bmatrix}
  1 & 0 & 0 \\
  0 & 1 & 0 \\
  -2 & 0 & 1
\end{bmatrix}
$$

A inversa da inversa é a própria matriz: $(A^{-1})^{-1} = A$. Sabemos, por definição, que
$A^{-1} A = A A^{-1} = I$, pelo que tanto temos $A^{-1}$ sendo a inversa de $A$ como o contrário.

Por fim, $(AB)^{-1} = B^{-1} A^{-1}$ é outra propriedade com que vamos contactar bastante
durante a cadeira. Podemos prová-lo da seguinte forma (recorrendo à [**propriedade associativa**](color:green)):

$$
\begin{aligned}
(B^{-1} A^{-1}) (AB) &= B^{-1} (A^{-1} A)B \\
&= B^{-1} I B \\
&= (B^{-1} I) B \\
&= B^{-1} B \\
&= I
\end{aligned}
$$

Generalizando, e utilizando uma prova semelhante, podemos afirmar que:

$$
(A_1 A_2 \cdots A_k)^{-1} = A_k^{-1} \cdots A_2^{-1} A_1^{-1}
$$

:::

### Algoritmo de Gauss-Jordan

Abordámos acima a invertibilidade matricial. Não vimos, contudo, como podemos chegar (algoritmicamente)
à inversa de uma matriz. O algoritmo de Gauss-Jordan vai ajudar-nos nisso mesmo.

O algoritmo de Gauss-Jordan assenta em duas proposições fundamentais:

:::info[Proposições]

Dada uma matriz $A$, $m \times m$, caso exista uma sequência de matrizes elementares
$E_1, \cdots, E_k$ e uma matriz $L$ em escada de linhas com menos de $k$ pivôs tal que

$$
E_k \cdots E_2 E_1 A = L,
$$

podemos afirmar que $A$ não é invertível. Ora, isto acaba por ser claro considerando
a proposição seguinte: se existir uma sequência $E_1, \cdots, E_k$ tal que

$$
E_k \cdots E_2 E_1 A = I,
$$

$A$ será invertível, com a respetiva inversa a corresponder precisamente ao produto
$E_k \cdots E_2 E_1$.

:::

O algoritmo de Gauss-Jordan será, portanto, parecido ao algoritmo apresentado no exemplo mais acima
(onde foi demonstrada a transformação de uma matriz $A$ numa matriz $L$ equivalente em escada de linhas):
aqui, contudo, em vez de querermos transformar $A$ em $L$ arbitrário, vamos querer transformá-la na
**matriz identidade**: desta forma, à direita vamos obter $A^{-1}$, seguindo a mesma lógica
apresentada anteriormente.

Procuremos então consultar o seguinte exemplo:

$$
\underbrace{\left[\begin{array}{ccc|ccc}
  1 & 1 & 0 & 1 & 0 & 0 \\
  0 & 1 & 0 & 0 & 1 & 0 \\
  1 & -1 & 2 & 0 & 0 & 1
\end{array}\right]}_{A|I} \underrightarrow{L_3 + L_1}
\underbrace{\left[\begin{array}{ccc|ccc}
  1 & 1 & 0 & 1 & 0 & 0 \\
  0 & 1 & 0 & 0 & 1 & 0 \\
  0 & -1 & 2 & 1 & 0 & 1
\end{array}\right]}_{E_1 A|E_1} \underrightarrow{L_3 + L_2}
\underbrace{\left[\begin{array}{ccc|ccc}
  1 & 1 & 0 & 1 & 0 & 0 \\
  0 & 1 & 0 & 0 & 1 & 0 \\
  0 & 0 & 2 & 1 & 1 & 1
\end{array}\right]}_{E_2 E_1 A|E_2 E_1}
$$

$$
\underrightarrow{\frac{1}{2}L_3}
\underbrace{\left[\begin{array}{ccc|ccc}
  1 & 1 & 0 & 1 & 0 & 0 \\
  0 & 1 & 0 & 0 & 1 & 0 \\
  0 & 0 & 1 & \frac{1}{2} & \frac{1}{2} & \frac{1}{2}
\end{array}\right]}_{E_3 E_2 E_1 A|E_3 E_2 E_1} \underrightarrow{L_1 - L_2}
\underbrace{\left[\begin{array}{ccc|ccc}
  1 & 0 & 0 & 1 & -1 & 0 \\
  0 & 1 & 0 & 0 & 1 & 0 \\
  0 & 0 & 1 & \frac{1}{2} & \frac{1}{2} & \frac{1}{2}
\end{array}\right]}_{E_4 E_3 E_2 E_1 A|E_4 E_3 E_2 E_1}
$$

Temos, assim que $E_4 E_3 E_2 E_1 A$ corresponde à matriz identidade, tendo portanto
que $A^{-1} = E_4 E_3 E_2 E_1$!

Podemos ainda, partindo daqui (existe uma prova adicional), afirmar
que toda a matriz invertível corresponde ao produto de matrizes elementares.

---

:::tip

Caso queiram confirmar os resultados que obtiveram a fazer exercícios, quer seja na inversão de uma matriz
como em outras operações, o site [matrixCalc](https://matrixcalc.org/) é uma ferramenta muito útil para o efeito.

:::

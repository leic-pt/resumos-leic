---
title: Determinante e Traço
description: >-
  Determinante de uma Matriz.
  Traço de uma Matriz.
  Matriz Transposta.
  Matriz Simétrica.
  Matriz de Markov.
  Propriedades e Cálculo de Determinantes.
  Regra de Laplace.
  Matriz dos Cofatores.
  Regra de Cramer
path: /al/determinantes
type: content
---

# Determinante e Traço

```toc

```

## Traço de uma Matriz

O traço de uma matriz quadrada corresponde à [**soma dos elementos da diagonal principal**](color:orange).
Pode possuir várias interpretações físicas e geométricas consoante o contexto em que o
utilizamos, interpretações essas que, por simplicidade, não abordaremos aqui (nem são
necessárias para um bom aproveitamento na disciplina). De qualquer maneira, quem
tiver o interesse mais aguçado pode espreitar [esta](https://www.quora.com/What-are-some-applications-of-the-concept-of-the-trace-of-a-matrix)
e outras _threads_ para entender melhor os vários cenários em que este conceito pode ser útil.

Formalmente, escrevemos:

$$
\op{tr}(A) = \sum_{i=1}^{n} a_{ii}.
$$

Possui um conjunto de propriedades particularmente útil:

- $\op{tr}(A + B) = \op{tr}(A) + \op{tr}(B)$
- $\op{tr}(kA) = k\op{tr}(A), k \in \R$
- $\op{tr}(AB) = \op{tr}(BA)$

A título de exemplo:

$$
A = \begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix}_{\op{tr}(A) = 1 + 5 + 9 = 15}
\quad
B = \begin{bmatrix}
7 & 0 & 2 \\
0 & 3 & 0 \\
2 & 0 & 1
\end{bmatrix}_{\op{tr}(B) = 7 + 3 + 1 = 11}
$$

$$
A + B = \begin{bmatrix}
1 + 7 & 2 + 0 & 3 + 2 \\
4 + 0 & 5 + 3 & 6 + 0 \\
7 + 2 & 8 + 0 & 9 + 1
\end{bmatrix}_{\op{tr}(A + B) = 15 + 11 = 26}
$$

### Matriz Transposta

É usual introduzir o conceito da transposição matricial quando se aborda o traço de uma matriz.
Dizemos que a **matriz transposta de $A$**, denotada por $A^T$, é a matriz obtida tal que:

$$
A^T_{ij} = A_{ji}, \forall i, j \in \{1, \dots, n\}.
$$

Colocado em linguagem corrente, a matriz transposta obtém-se trocando colunas e linhas de cada entrada
da matriz original. Segue-se um exemplo abaixo:

$$
A = \begin{bmatrix}
1 & 2 & 3 \\
4 & 5 & 6 \\
7 & 8 & 9
\end{bmatrix},
\quad
A^T = \begin{bmatrix}
1 & 4 & 7 \\
2 & 5 & 8 \\
3 & 6 & 9
\end{bmatrix}
$$

Uma matriz dir-se-á simétrica, claro, caso $A = A^T$. As matrizes identidade e nula são exemplos
de matrizes simétricas!

Voltando à questão do traço, temos que para toda a matriz quadrada $A$, $\op{tr}(A) = \op{tr}(A^T)$.
Esta definição é relativamente simples de compreender: a diagonal principal fica sempre intacta,
com as entradas a "rodar" sobre a mesma, pelo que o traço permanece inalterado.

A matriz transposta possui ainda algumas propriedades relevantes:

- $(A^T)^T = A$ - transpondo a transposta, obtemos a matriz original;
- $(A + B)^T = A^T + B^T$ - a transposta de uma soma matricial é a soma das transpostas;
- $(AB)^T = B^TA^T$ - a transposta de um produto matricial é o produto das transpostas, **pela ordem inversa**;
- se $A$ for invertível, $(A^{-1})^T = (A^T)^{-1}$ - a transposta da inversa é a inversa da transposta.

A prova para a terceira propriedade pode ser encontrada [aqui](https://proofwiki.org/wiki/Transpose_of_Matrix_Product).

## Determinante de uma Matriz

Essencialmente, o [**determinante de uma matriz**](color:green) permite-nos verificar
quando é que uma qualquer matriz quadrada $A$ possui inversa: caso este seja $0$,
$A^{-1}$ não existe. Em qualquer outro caso, podemos afirmar que $A$ tem inversa.
Para além desta propriedade (fulcral, diga-se de passagem), existe uma noção "espacial"
associado ao conceito de determinante, abordado em contextos mais teóricos (que não serão
referidos nesta página). Usualmente escrevemo-lo de duas formas, $\op{det}(A)$ ou $|A|$.

:::tip[Propriedades]

Como referido acima, o determinante pretende determinar se uma matriz quadrada tem ou não inversa.
Ora, esta definição não é válida por mero acaso: o determinante possui um conjunto de
propriedades bem definidas, que nos permitem fazer esta afirmação.

A primeira propriedade (e a mais simples) é que o determinante da matriz identidade é $1$.

Posteriormente, temos ainda que, obtendo uma matriz $B$ a partir de $A$, podemos afirmar:

- caso se obtenha $B$ multiplicando uma linha de $A$ por uma constante $\alpha$, $|B| = \alpha |A|$.
  Note-se que $\alpha A$ corresponde à matriz $M$ tal que todas as entradas de $A$ foram multiplicadas
  por uma constante $\alpha$ - assim sendo, fará sentido que $|M| = \alpha^n |A|$;
- caso se obtenha $B$ somando a uma linha de $A$ o produto de uma constante $\alpha$ por outra linha de $A$, $|B| = |A|$;
- por fim, caso se obtenha $B$ trocando duas linhas de $A$, $|B| = - |A|$.

É ainda igualmente relevante afirmar que o determinante da matriz transposta é igual ao da matriz original, $|A^T| = |A|$.
A prova pode ser encontrada [aqui](https://www2.math.upenn.edu/~ekorman/teaching/det.pdf).

Até agora, tudo relativamente simples, não havendo implicações diretas entre estas propriedades
e a primeira afirmação deste trecho. Continuemos:

- toda a matriz com duas linhas iguais tem determinante nulo;
- toda a matriz com uma linha nula tem determinante nulo;
- se $A$ é diagonal, triangular, ou está em escada de linhas, $|A| = \prod_{i=1}^n a_{ii}$·

Note-se que as primeiras propriedades imediatamente acima aplicam-se tanto a linhas como colunas,
já que, como afirmado anteriormente, $|A| = |A^T|$.

Por fim, notar que $|AB| = |A||B| = |BA|$, e que **o determinante da inversa é o inverso do seu determinante**:
$|A^{-1}| = \frac{1}{|A|}$.

:::

Após abordadas tantas propriedades e conceitos associados ao determinante, será agora
interessante aprender a **calculá-lo**. Para tal, vamos começar por delinear um algoritmo
para o caso geral, abordando posteriormente casos particulares em que podemos simplificar
o cálculo.

:::info[Cálculo do Determinante - Caso Geral]

Dadas uma matriz quadrada $A$ e uma matriz $L$ em escada de linhas obtida a partir de $A$,
podemos afirmar que

$$
\exists_{k \in \R \backslash \{0\}}: \op{det}(A) = k \op{det}(L) = k l_{11} l_{22} \cdots l_{nn},
$$

onde aqui $l_{11}, l_{22}, \ldots, l_{nn}$ correspondem aos pivôs de $L$.

:::

Note-se que, utilizando a eliminação de Gauss-Jordan para obter $L$, vamos poder calcular
$k$ iterativamente, consoante as transformações elementares que formos aplicando a $A$.
Segue-se um exemplo relativamente simples abaixo:

$$
|A| = \begin{vmatrix}
  3 & 9 & 3 \\
  0 & 0 & 2 \\
  2 & 2 & 1
\end{vmatrix}
\overset{L_3 - \frac{2}{3}L_1}{=} \begin{vmatrix}
  3 & 9 & 3 \\
  0 & 0 & 2 \\
  0 & -4 & -1
\end{vmatrix}
\overset{L_2 \leftrightarrow L_3}{=} \smartcolor{orange}{-}\begin{vmatrix}
  3 & 9 & 3 \\
  0 & -4 & 1 \\
  0 & 0 & 2
\end{vmatrix}
= -(3 \cdot -4 \cdot 2) = 24
$$

Note-se que:

- com a primeira transformação, $k$ permanece neutro, $1$, já que tal como referido mais acima,
  transformar uma linha na sua soma pelo produto de outra linha por uma constante não altera o determinante;
- com a segunda transformação, $k$ passa a ser negativo, já que, como referido mais acima,
  trocar duas linhas altera o sinal do determinante.

Posteriormente, já com $A$ transformada em $L$, em escada de linhas, podemos calcular o determinante
diretamente.

### Determinante - Matrix $2 \times 2$

As matrizes que vamos sempre querer ao calcular determinantes são matrizes $2 \times 2$.
devido à simplicidade do seu cálculo, existindo inclusive uma fórmula bastante fácil de decorar
para este propósito. Para qualquer matriz quadrada $2 \times 2$, temos que:

$$
\begin{vmatrix}
  a & b \\
  c & d
\end{vmatrix} = ad - bc
$$

Abaixo encontra-se uma derivação interessante para este resultado.

::youtube{#tF3zeNWvXDQ}

### Regra de Laplace

Ora, obviamente não vamos querer sempre calcular determinantes de matrizes $2 \times 2$. Para calcular
o determinante de matrizes de dimensões superiores, podemos recorrer a todo um conjunto de regras e
algoritmos - esta secção abordará uma delas, a [**Regra de Laplace**](color:orange).

:::info[Conceitos-Chave]

A regra de Laplace requer domínio prévio sobre um pequeno conjunto de conceitos que nos
vão ser particularmente úteis: [**submatriz**](color:pink) e [**cofator**](color:purple).

Dizemos que a [**submatriz $A_{ij}$**](color:pink) de uma matriz $A$ corresponde
à matriz obtida a partir de $A$, eliminando as respetivas linha $i$ e coluna $j$.
Segue-se um exemplo abaixo:

$$
A = \begin{bmatrix}
  \smartcolor{red}{1} & \smartcolor{red}{2} & \smartcolor{red}{3} \\
  4 & \smartcolor{red}{5} & 6 \\
  7 & \smartcolor{red}{8} & 9
\end{bmatrix},
\quad
A_{12} = \begin{bmatrix}
  4 & 6 \\
  7 & 9
\end{bmatrix}
$$

Temos ainda que o [**cofator $C_{ij}$**](color:purple) de uma matriz $A$ corresponde
ao seguinte produto:

$$
C_{ij} = (-1)^{i+j} \op{det}(A_{ij})
$$

A título de exemplo, dada a matriz $A$ acima, temos que:

$$
\begin{aligned}
C_{12} &= (-1)^{1+2} \op{det}(A_{12})\\
&= (-1)^{3} \op{det}(A_{12})\\
&= - \begin{vmatrix} 4 & 6 \\ 7 & 9 \end{vmatrix}\\
&= - (4 \cdot 9 - 6 \cdot 7)\\
&= 12
\end{aligned}
$$

:::

Explorados estes conceitos, temos agora tudo o que precisamos para definir a regra de Laplace,
com formulação relativamente simples:

$$
\forall_{k = 1, 2, \cdots, n}: \op{det}(A) = \sum_{j=1}^n a_{kj} c_{kj} = \sum_{i=1}^n a_{ik} c_{ik}.
$$

Posto em linguagem corrente, temos que o determinante de uma matriz $A$ pode ser obtido,
fixando uma qualquer linha ou coluna $x$, somando o produto de cada entrada respetiva a $x$ pelo cofator respetivo.
Se ainda assim parecer confuso, o exemplo abaixo provavelmente permitirá dissipar algumas dúvidas:

:::details[Exemplo]

Consideremos a seguinte matriz $A$:

$$
\begin{bmatrix}
  0 & 0 & 3 & 0 \\
  0 & 6 & 7 & 8 \\
  9 & 0 & 11 & 12 \\
  13 & 14 & 0 & 16
\end{bmatrix}
$$

Recorrendo à regra de Laplace, podemos calcular o determinante de $A$ fixando a linha $1$:

$$
\begin{aligned}
\op{det}(A) &= \sum_{j=1}^4 a_{1j} c_{1j}\\
&= 0 \cdot C_{11} + 0 \cdot C_{12} + 3 \cdot C_{13} + 0 \cdot C_{14}\\
&= 3 \cdot C_{13}\\
&= 3 \cdot (-1)^{1+3} \op{det}(A_{13})\\
&= 3 \cdot \op{det}(A_{13})\\
&= 3 \cdot \begin{vmatrix} 0 & 6 & 8 \\ 9 & 0 & 12 \\ 13 & 14 & 16 \end{vmatrix}
\end{aligned}
$$

Vamos novamente aplicar a regra de Laplace, fixando agora a linha $2$:

$$
\begin{aligned}
\op{det}(A) &= 3 (9 \cdot C'_{21} + 0 \cdot C'_{22} + 12 \cdot C'_{23})\\
&= 3 (- 9 \cdot \op{det}(A'_{21}) - 12 \cdot \op{det}(A'_{23}))\\
&= -3 (9 \cdot \begin{vmatrix} 6 & 8 \\ 14 & 16 \end{vmatrix} + 12 \cdot \begin{vmatrix} 0 & 6 \\ 13 & 14 \end{vmatrix})\\
&= -3 (9 \cdot (6 \cdot 16 - 8 \cdot 14) + 12 \cdot (0 \cdot 14 - 6 \cdot 13))\\
&= -3 (- 144 - 936)\\
&= 3 (1080)\\
&= 3240
\end{aligned}
$$

:::

Ora, empiricamente conseguimos perceber que quantas mais entradas nulas tiver a linha/coluna que
escolhermos, mais rapidamente calculamos o valor pretendido (já que podemos só afirmar que o produto tem valor $0$).
É, assim, [**da maior importância que façamos uma escolha criteriosa da linha/coluna que vamos fixar**](color:yellow),
por forma a minimizar o trabalho que temos pela frente.

### Matriz dos Cofatores

Pegando no conceito de cofator abordado mais acima, podemos introduzir a noção de **matriz dos cofatores**:
dada uma matriz $A$, $n \times n$, a respetiva matriz dos cofatores é uma matriz de dimensões iguais, tal que
a respetiva entrada $ij$ é dada por $C_{ij}$. Note-se, claro, que a soma de qualquer linha/coluna desta matriz
é igual ao determinante da matriz $A$.

Dada a matriz dos cofatores, podemos calcular a inversa de uma matriz $A$ da seguinte forma:

$$
A^{-1} = \frac{1}{\op{det}(A)} \cdot \op{cof}(A)^T
$$

Recorrendo a esta fórmula, temos agora uma maneira bastante simples de calcular a inversa de uma matriz $2 \times 2$:

$$
\begin{bmatrix}
  \smartcolor{red}{a} & \smartcolor{orange}{b} \\
  \smartcolor{orange}{c} & \smartcolor{red}{d}
\end{bmatrix}^{-1} = \frac{1}{ad - bc} \cdot \begin{bmatrix}
  \smartcolor{red}{d} & \smartcolor{green}{-}\smartcolor{orange}{b} \\
  \smartcolor{green}{-}\smartcolor{orange}{c} & \smartcolor{red}{a}
\end{bmatrix}
$$

Note-se que o determinante de uma matriz $2 \times 2$ é dado por $ad - bc$, pelo
que o lado esquerdo do produto é relativamente óbvio. É igualmente trivial demonstrar
que a transposta da matriz dos cofatores de uma matriz $2 \times 2$ corresponde precisamente
à matriz à direita.

### Regra de Cramer

A regra de Cramer vai permitir-nos resolver sistemas de equações lineares recorrendo a uma
**fórmula**, em vez de ter de usar o método de Gauss-Jordan, iterativo. **Funciona exclusivamente
para matrizes $A$ invertíveis**, retornando, em caso afirmativo, a única solução possível para o sistema.
Para tal, utiliza a igualdade referida acima, $A^{-1} = \frac{1}{\op{det}(A)} \cdot \op{cof}(A)^T$:

$$
\begin{aligned}
Ax &= b\\
x &= A^{-1}b\\
x &= \frac{1}{\op{det}(A)} \cdot \op{cof}(A)^T b
\end{aligned}
$$

Esta fórmula permite-nos afirmar que cada uma das entradas de $x$, $x_k$, serão dadas
pela seguinte expressão (com a respetiva demonstração abaixo):

$$
x_k = \frac{\op{det}(\text{matriz obtida de $A$ substituindo a coluna $k$ por $b$})}{\op{det}(A)}
$$

:::details[Demonstração]

Ora, temos que:

$$
\op{cof}(A)^T \begin{bmatrix}
  b_1 \\
  \vdots \\
  b_n
\end{bmatrix} = \begin{bmatrix}
  c_{11} b_1 + c_{21} b_2 + \cdots + c_{n1} b_n \\
  \vdots \\
  c_{1n} b_1 + c_{2n} b_2 + \cdots + c_{nn} b_n
\end{bmatrix}
$$

Assim sendo, podemos afirmar que cada entrada de $x$, $x_k$, será dada por:

$$
x_k = \frac{c_{1k} b_1 + c_{2k} b_2 + \cdots + c_{nk} b_n}{\op{det}(A)}
$$

É possível demonstrar (embora, por questões de brevidade, não seja feito aqui) que o numerador
do quociente acima é equivalente ao [**determinante da matriz obtida de $A$ substituindo a coluna $k$ por $b$**](color:pink):

$$
\begin{vmatrix}
  a_{11} & \cdots & a_{1 k - 1} & b_1 & a_{1 k + 1} & \cdots & a_{1n} \\
  a_{21} & \cdots & a_{2 k - 1} & b_2 & a_{2 k + 1} & \cdots & a_{2n} \\
  \vdots & \ddots & \vdots & \vdots & \vdots & \ddots & \vdots \\
  a_{n1} & \cdots & a_{n k - 1} & b_n & a_{n k + 1} & \cdots & a_{nn}
\end{vmatrix}
$$

:::

Obtida esta fórmula, podemos resolver facilmente um sistema como o seguinte:

$$
\begin{cases}
2x_1 + 3x_2 &= 1 \\
3x_1 + 4x_2 &= 1
\end{cases}
$$

:::details[Exemplo - Resolução]

Aqui, temos que:

$$
A = \begin{bmatrix}
2 & 3 \\
3 & 4
\end{bmatrix}, \quad
b = \begin{bmatrix}
\smartcolor{orange}{1} \\
\smartcolor{orange}{1}
\end{bmatrix}
$$

Note-se que o determinante de $A$ é $-1$, pelo que podemos aplicar a regra de Cramer para
obter a solução do sistema:

$$
x_1 = \frac{\begin{vmatrix}\smartcolor{orange}{1} & 3 \\\smartcolor{orange}{1} & 4\end{vmatrix}}{-1} = -1, \quad
x_2 = \frac{\begin{vmatrix}2 & \smartcolor{orange}{1} \\3 & \smartcolor{orange}{1}\end{vmatrix}}{-1} = 1
$$

$$
x = \begin{bmatrix}
-1 \\
1
\end{bmatrix}
$$

:::

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

Colocado em linguagem corrente, a matriz transposta obtém-se trocando as coluna e linha de cada entrada
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

Uma matriz dir-se-á simétrica, claro, caso $A = A^T$. A matrizes identidade e nula são exemplos
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

<!-- TODO: add Markov Matrix content -->

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

- caso se obtenha $B$ multiplicando uma linha de $A$ por uma constante $\alpha$, $|B| = \alpha |A|$;
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

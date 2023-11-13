---
title: Espaços Vetoriais
description: >-
  Espaço Vetorial - definição, exemplos.
  Subespaços Vetoriais.
  Interseção, Soma e União de subespaços vetoriais.
  Combinação Linear.
  Expansão Linear.
  Conjuntos Geradores.
  (In)dependência Linear.
path: /al/espacos-vetoriais
type: content
---

# Espaços Vetoriais

```toc

```

:::info[Espaço Vetorial]

Dizemos que um conjunto não vazio $V$ é um [**espaço vetorial**](color:orange) (ou [**linear**](color:orange))
sobre um conjunto $\mathbb{K}$ (com $\mathbb{K} \in \{ \mathbb{R}, \mathbb{C}, \cdots \}$) se e apenas se
lhe estiverem associadas duas principais operações (sendo que cada uma verifica um dado conjunto
de propriedades):

- [**Adição**](color:green): $x, y \in V \implies x + y \in V$; note-se que esta
  operação deve ser **comutativa** e **associativa**; deve ainda existir um único
  elemento neutro, $0 \in V$, tal que $x + \overset{\rightarrow}{0} = x$ e ainda
  um único elemento simétrico, $-x \in V$, tal que $x + (-x) = \overset{\rightarrow}{0}$;
- [**Multiplicação por escalar**](color:green): $x \in V, \alpha \in \mathbb{K} \implies \alpha x \in V$;
  esta operação deve ser **associativa** e **distributiva**, devendo ainda existir um elemento
  neutro (a **identidade**), tal que $1 \cdot x = x$.

Extrai-se ainda, para a multiplicação por escalar, que $\forall x \in V, 0 \cdot x = \overset{\rightarrow}{0} \wedge -x = -1x$.

:::

A título de exemplo, tem-se que qualquer conjunto $\mathbb{R}^n$ é um espaço vetorial sobre $\mathbb{R}$,
já que, considerando $x = (x_1, x_2, \cdots, x_n)$ e $y = (y_1, y_2, \cdots, y_n)$:

- $x + y = (x_1 + y_1, x_2 + y_2, \cdots, x_n + y_n)$;
- $\alpha x = (\alpha x_1, \alpha x_2, \cdots, \alpha x_n)$.

Note-se, claro, que para $\mathbb{R}^n$ todas as outras propriedades supra-referidas são também satisfeitas.

São exemplos, ainda, espaços como $\mathbb{P}_n$, o **conjunto de polinómios de grau $\leq n$**,
$\mathbb{F}$, o conjunto das funções reais de variável real $f: \mathbb{R} \rightarrow \mathbb{R}$,
entre muitos outros.

## Subespaços Vetoriais

Tendo abordado acima o conceito de espaço vetorial, podemos agora definir o de [**subespaço vetorial**](color:orange):
tendo $V$ um espaço vetorial sobre $\mathbb{K}$, dizemos que um subconjunto $W \subseteq V$ é um
[subespaço vetorial](color:orange) de $V$ se e apenas se $W$ satisfaz as mesmas propriedades
de $V$ - verificando todos os axiomas e propriedades que $V$ verifica, podemos então
dizer que $W$ é também um espaço vetorial sobre $\mathbb{K}$.

Podemos, por exemplo, procurar mostrar que $S = \{x_1, x_2 \in \mathbb{R}^2: x_1 + x_2 = 0\}$,
o conjunto de todos os pares de reais que somados dão zero (i.e simétricos), é um subespaço de
$\mathbb{R}^2$: para tal, basta verificar que $S$ satisfaz todas as propriedades de um espaço vetorial:

- $\overset{\rightarrow}{0} \in S$, já que $0 + 0 = 0$;
- a adição está definida para este conjunto: considerando $x = (x_1, x_2)$ e $y = (y_1, y_2)$,
  $x, y \in S: x + y = (x_1 + y_1) + (x_2 + y_2) = 0 + 0 = 0$, pelo que $x + y = (x_1 + y_1, x_2 + y_2) \in S$;
- por fim, a multiplicação por escalar está também definida para $S$: considerando $x = (x_1, x_2)$,
  $x \in S$ e $\alpha \in \mathbb{R}$, $\alpha x_1 + \alpha x_2 = \alpha (x_1 + x_2) = \alpha 0 = 0$,
  pelo que $\alpha x = (\alpha x_1, \alpha x_2) \in S$.

Note-se que subespaços de $\mathbb{R}^2$ são o vetor nulo, retas que passem pela origem,
e o próprio $\mathbb{R}^2$, claro.

É igualmente possível provar, através de um contra-exemplo ou por contradição,
que um conjunto $W \subseteq V$ não é um subespaço vetorial de $V$. Tomemos como
exemplo o conjunto $W = \{x_1, x_2 \in \mathbb{R}^2: x_1 x_2 = 0\}$, o conjunto de todos os pares
de reais que multiplicados dão zero (i.e. ortogonais). Não podemos afirmar que $W$ é um subespaço
vetorial de $\mathbb{R}^2$, pois, por exemplo, $x = (1, 0)$ e $y = (0, 1)$ são elementos de $W$,
mas $x + y = (1, 1) \notin W$.

## Interseção, Soma e União de Subespaços Vetoriais

Dado um conjunto de espaços vetoriais $\{V_1, V_2, \cdots, V_n\}$, todos eles subespaços
de um espaço vetorial $V$, podemos definir a [**interseção**](color:orange)
entre estes espaços vetoriais como sendo o conjunto $\bigcap_{i=1}^n V_i$, o conjunto de todos os elementos
comuns a todos os espaços vetoriais do conjunto. Para o provar, consideremos, por exemplo, os conjuntos
arbitrários $S_1, S_2$, tal que ambos são subespaços de um espaço $S$. Como já vimos
anteriormente, o nosso conjunto $S_1 \cap S_2$ terá, por forma a ser um subespaço de $S$,
de satisfazer três principais propriedades:

- $\overset{\rightarrow}{0} \in S_1 \cap S_2$, já que $\overset{\rightarrow}{0} \in S_1$ e $\overset{\rightarrow}{0} \in S_2$
  obrigatoriamente, sendo ambos subespaços de $S$;
- a adição está definida para este conjunto: considerando $x = (x_1, x_2)$ e $y = (y_1, y_2)$,
  $x, y \in S_1 \cap S_2: x, y \in S_1 \wedge x, y \in S_2 \Rightarrow x + y \in S_1 \wedge x + y \in S_2 \Rightarrow x + y \in S_1 \cap S_2$;
- por fim, a multiplicação por escalar está também definida para $S_1 \cap S_2$: considerando $x = (x_1, x_2)$,
  $x \in S_1 \cap S_2$ e $\alpha \in \mathbb{K}$, $x \in S_1 \wedge x \in S_2 \Rightarrow \alpha x \in S_1 \wedge \alpha x \in S_2 \Rightarrow \alpha x \in S_1 \cap S_2$.

Se é verdade que podemos afirmar que a interseção de dois espaços vetoriais é também
um subespaço vetorial, não é igualmente verdade que o possamos afirmar para a
[**união**](color:orange) de dois espaços vetoriais: basta pensar, por exemplo,
num cenário com dois subespaços vetoriais, $S_1$ e $S_2$, tal que
$S_1$ corresponde ao conjunto de todos os pontos no eixo das abscissas e
$S_2$ corresponde ao conjunto de todos os pontos no eixo das ordenadas.
$(3, 0) \in S_1$ e $(0, 3) \in S_2$, mas $(3, 3) \notin S_1 \cup S_2$,
pois $(3, 3)$ não pertence a nenhum dos dois subespaços vetoriais. Assim sendo,
a soma não se diz **fechada** para esta operação, pelo que a união de subespaços não é,
de forma generalizada, um subespaço vetorial.

Note-se, contudo, que a [**soma**](color:orange) de dois espaços vetoriais é
também um subespaço vetorial! A prova é relativamente simples: consideremos
os espaços vetoriais $S_1$ e $S_2$, tal que ambos são subespaços de um espaço $S$.
Como já vimos anteriormente, o nosso conjunto $S_1 + S_2$ terá, por forma a ser um subespaço de $S$,
de satisfazer três principais propriedades:

- $\overset{\rightarrow}{0} \in S_1 + S_2$, já que $\overset{\rightarrow}{0} \in S_1$ e $\overset{\rightarrow}{0} \in S_2$
  obrigatoriamente, sendo ambos subespaços de $S$;
- a adição está definida para este conjunto: considerando $x = (x_1, x_2)$ e $y = (y_1, y_2)$,
  $x, y \in S_1 + S_2: x \in S_1 \wedge y \in S_2 \Rightarrow x + y \in S_1 \wedge x + y \in S_2 \Rightarrow x + y \in S_1 + S_2$;
- por fim, a multiplicação por escalar está definida para $S_1 + S_2$: considerando $x = (x_1, x_2)$,
  $x \in S_1 + S_2$ e $\alpha \in \mathbb{K}$, $x \in S_1 \wedge x \in S_2 \Rightarrow \alpha x \in S_1 \wedge \alpha x \in S_2 \Rightarrow \alpha x \in S_1 + S_2$.

## Expansão Linear e Conjunto Gerador

Dado um conjunto de vetores $\{v_1, v_2, \cdots, v_n\}$, elementos de um espaço vetorial $V$ sobre $\mathbb{K}$,
podemos dizer que $w \in V$ se pode escrever como uma [**combinação linear**](color:green) desses vetores
se e só se existir um conjunto de coeficientes $\{c_1, c_2, \cdots, c_n\}$, todos eles
elementos de $\mathbb{K}$, tal que:

$$
w = c_1 v_1 + c_2 v_2 + \cdots + c_n v_n
$$

Mais ainda, dizemos que o subconjunto de $V$ formado pelos vetores $w$ que podem ser escritos
como uma combinação linear dos vetores $\{v_1, v_2, \cdots, v_n\}$ corresponde à
[**expansão linear**](color:yellow), vulgo [_span_](color:yellow), de $V$ em relação
aos vetores $\{v_1, v_2, \cdots, v_n\}$:

$$
L\{v_1, v_2, \cdots, v_n\} = \{w \in V: w = c_1 v_1 + c_2 v_2 + \cdots + c_n v_n, \forall c_1, c_2, \cdots, c_n \in \mathbb{K}\}
$$

Um conjunto de vetores $\{v_1, v_2, \cdots, v_n\}$ diz-se [**gerador**](color:orange)
de $V$ se e só se $V = L\{v_1, v_2, \cdots, v_n\}$.

A título de exemplo temos, claro, que os vetores $\{(1, 0, 0, 0), (0, 1, 0, 0), (0, 0, 1, 0), (0, 0, 0, 1)\}$
são geradores do espaço vetorial $\mathbb{R}^4$: podemos escrever qualquer vetor
$(x, y, z, w) \in \mathbb{R}^4$ como uma combinação linear dos vetores em questão, através
de um simples produto escalar; $(3, 1, 8, 2)$, por exemplo, pode ser escrito através
da combinação linear:

$$
(3, 1, 8, 2) = 3 \cdot (1, 0, 0, 0) + 1 \cdot (0, 1, 0, 0) + 8 \cdot (0, 0, 1, 0) + 2 \cdot (0, 0, 0, 1)
$$

:::details[Exemplo]

Nem sempre é tão fácil determinar se um conjunto de vetores é gerador de um espaço vetorial
como foi acima. Assim sendo, fará sentido considerar casos mais peculiares;
consideremos os seguintes vetores de $\mathbb{R}^3$:

$$
v_1 = (1, 2, 1), \quad v_2 = (0, 0, 1), \quad v_3 = (2, 4, 5), \quad v_4 = (3, 6, 0)
$$

Procuremos, primeiro, determinar a forma geral da expansão linear de $\{v_1, v_2, v_3, v_4\}$,
e de seguida aferir se os vetores em questão são geradores de $\mathbb{R}^3$.

Ora, como sabemos, um vetor de $\mathbb{R}^3$ pertence à expansão linear de $\{v_1, v_2, v_3, v_4\}$
se e só se pode ser escrito como uma combinação linear dos vetores em questão - i.e,
se e só se pode ser escrito como:

$$
(y_1, y_2, y_3, y_4) = c_1 \cdot (1, 2, 1) + c_2 \cdot (0, 0, 1) + c_3 \cdot (2, 4, 5) + c_4 \cdot (3, 6, 0)
$$

Ora, isto é equivalente a dizer que tal só acontece caso o vetor $(y_1, y_2, y_3, y_4)$
seja solução do seguinte sistema de equações lineares:

$$
\begin{bmatrix}
1 & 0 & 2 & 3 \\
2 & 0 & 4 & 6 \\
1 & 1 & 5 & 0
\end{bmatrix} \begin{bmatrix} c_1 \\ c_2 \\ c_3 \\ c_4 \end{bmatrix}
= \begin{bmatrix} y_1 \\ y_2 \\ y_3 \end{bmatrix}
$$

Por eliminação de Gauss, teríamos o seguinte:

$$
\left[\begin{array}{cccc|c}
1 & 0 & 2 & 3 & y_1 \\
2 & 0 & 4 & 6 & y_2 \\
1 & 1 & 5 & 0 & y_3
\end{array}\right] \overset{\cdots}{\rightarrow}
\left[\begin{array}{cccc|c}
1 & 0 & 2 & 3 & y_1 \\
0 & 1 & 3 & -3 & y_3 - y_1 \\
0 & 0 & 0 & 0 & y_2 - 2y_1
\end{array}\right]
$$

Assim sendo, teríamos que $L\{v_1, v_2, v_3, v_4\} = \{(y_1, y_2, y_3) \in \mathbb{R}^3: y_2 = 2y_1\}$.
Note-se, claro, que esta expansão linear não é geradora de $\mathbb{R}^3$, precisamente
porque existem vetores em $\mathbb{R}^3$ que não pertencem a $L\{v_1, v_2, v_3, v_4\}$
(tal como $(1, 1, 1)$).

:::

Neste último exemplo, podíamos ter afirmado que os vetores $\{v_1, v_2, v_3, v_4\}$
não são geradores de $\mathbb{R}^3$ sem sequer ter de calcular a expansão linear
de $\{v_1, v_2, v_3, v_4\}$; basta, para tal, verificar se o sistema de equações
lineares que define a expansão linear de $\{v_1, v_2, v_3, v_4\}$ tem alguma
linha nula (ou seja, se após transformar o SEL em escada de linhas existe
alguma linha sem pivô) - caso tenha, podemos afirmar que não é gerador.
Por consequência, todo o conjunto gerador de $\mathbb{R}^n$ terá obrigatoriamente
dimensão $\geq n$.

## Dependência e Independência Linear

A noção de [**dependência linear**](color:green) está intimamente ligada à de
combinação linear; um conjunto de vetores $\{v_1, v_2, \cdots, v_n\}$ diz-se
[**linearmente dependente**](color:green) caso exista pelo menos um vetor $v_i \in \{v_1, v_2, \cdots, v_n\}$
tal que a combinação linear dos restantes vetores seja igual a $v_i$. Caso contrário,
o conjunto de vetores é dito [**linearmente independente**](color:green).

Isto é equivalente, claro, a dizer que para ocorrer dependência linear entre um
conjunto de vetores terá de existir um conjunto de escalares $\{c_1, c_2, \cdots, c_n\}$,
não todos nulos, tal que $\sum_{j=1}^n c_j v_j = \overrightarrow{0}$.

:::details[Prova]

A prova é relativamente simples: considerando um conjunto de vetores $\{v_1, v_2, \cdots, v_n\}$
linearmente dependente, podemos escrever, para pelo menos um vetor $v_i \in \{v_1, v_2, \cdots, v_n\}$:

$$
\sum_{j=1, j \neq i}^n c_j v_j = v_i
$$

Isto significa, claro, que $c_1 v_1 + \cdots + (-1) v_i + \cdots + c_n v_n = 0$,
pelo que garantidamente teremos escalares $c_1, \cdots, c_n$ não todos nulos (já que $c_i = -1$)
tal que:

$$
\sum_{i=1}^n c_i v_i = \overrightarrow{0}
$$

Mais ainda, isto corresponderá precisamente a:

$$
v_i = \left(-\frac{c_1}{c_i}\right) v_1 + \cdots + \left(-\frac{c_n}{c_i}\right) v_n
$$

Ou seja, o vetor $v_i$ é uma combinação linear dos restantes vetores, pelo que
o conjunto de vetores é linearmente dependente.

:::

Note-se, claro, que qualquer conjunto de vetores $\{v_1, v_2, \cdots, v_n\}$
que contenha pelo menos um vetor nulo é linearmente dependente: basta, para tal,
notar que o coeficiente associado ao vetor nulo pode ser qualquer número, e que
mantendo todos os outros coeficientes iguais a zero, $\sum_{i=1}^n c_i v_i = \overrightarrow{0}$ obrigatoriamente.

Mais ainda, podemos rapidamente notar que a noção de [**colinearidade**](color:yellow) de vetores
é aqui bastante relevante: se $\{v_1, v_2, \cdots, v_n\}$ é um conjunto de vetores
onde pelo menos dois vetores, $v_i$ e $v_j$, são colineares, então $\{v_1, v_2, \cdots, v_n\}$
é linearmente dependente. Isto porque, se $v_i$ e $v_j$ são colineares, então
podemos escrever $v_i = \alpha v_j$ para algum $\alpha \neq 0$. Assim sendo, temos o seguinte:

$$
0v_1 + \cdots + v_i + \cdots + (-\alpha) v_j + \cdots + 0v_n = \overrightarrow{0}
$$

Quando não estamos perante um conjunto de vetores onde pelo menos dois vetores
são colineares/não estamos na presença do vetor nulo, podemos ainda assim verificar
se este é linearmente dependente; para tal, recorreremos, mais uma vez,
à representação matricial de um sistema de equações lineares.

:::details[Exemplo]

Consideremos o seguinte conjunto de vetores:

$$
v_1 = (4, 3), \quad v_2 = (2, 1)
$$

Caso este conjunto seja linearmente independente, podemos escrever o seguinte:

$$
c_1 v_1 + c_2 v_2 = \overrightarrow{0} \leftrightarrow
c_1 \begin{bmatrix} 4 \\ 3 \end{bmatrix} + c_2 \begin{bmatrix} 2 \\ 1 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}
$$

Como sabemos, isto é equivalente à seguinte representação matricial:

$$
\begin{bmatrix} 4 & 2 \\ 3 & 1 \end{bmatrix} \begin{bmatrix} c_1 \\ c_2 \end{bmatrix} = \begin{bmatrix} 0 \\ 0 \end{bmatrix}
$$

Podemos utilizar eliminação de Gauss para colocar a matriz em escada de linhas,
obtendo:

$$
\begin{bmatrix} 4 & 2 \\ 0 & \frac{-1}{2} \end{bmatrix}
$$

Visto que todas as colunas do sistema possuem pivô, o sistema é consistente e
tem solução única, pelo que o conjunto de vetores é linearmente independente.
Note-se que, estando na presença de uma matriz quadrada, podíamos ter verificado
se o sistema é consistente e tem solução única através da determinante da matriz - caso seja não nulo,
o sistema é consistente e tem solução única (e estaríamos na presença de um
conjunto linearmente independente).

:::

Generalizando o observado no exemplo anterior, podemos verificar o seguinte:

:::info[Teorema]

Tendo $n$ vetores $\{v_1, v_2, \cdots, v_n\}$ em $\mathbb{R}^m$, o conjunto diz-se
linearmente independente se e só se a matriz abaixo puder ser transformada
numa matriz em escada de linhas, com um pivô por coluna, utilizando apenas operações elementares de linha:

$$
\begin{bmatrix} v_1 & v_2 & \cdots & v_n \end{bmatrix} =
\begin{bmatrix}
  v_{11} & v_{12} & \cdots & v_{1n} \\
  v_{21} & v_{22} & \cdots & v_{2n} \\
  \vdots & \vdots & \ddots & \vdots \\
  v_{m1} & v_{m2} & \cdots & v_{mn}
\end{bmatrix}
$$

Caso $m=n$, a matriz é dita quadrada, e podemos verificar a (in)dependência linear
através da nulidade do determinante da mesma.

Como consequência do supra-definido, temos o seguinte:

- Todo o subconjunto gerador de $\mathbb{R}^m$ tem pelo menos $m$ vetores;
- Todo o subconjunto de vetores de $\mathbb{R}^m$ com dimensão superior a $m$ é linearmente dependente (terá
  mais linhas que colunas, pelo que pelo menos uma coluna terá um pivô nulo);
- Todo o subconjunto de $\mathbb{R}^m$ com dimensão $m$ diz-se gerador de $\mathbb{R}^m$
  se e só se for linearmente independente.
- Todo o subconjunto de dimensão $m$ gerador de $\mathbb{R}^m$ é linearmente independente.

:::

Note-se, por fim, que dizemos que um conjunto gerador de $\mathbb{R}^m$ linearmente independente
diz-se uma [**base**](color:orange) de $\mathbb{R}^m$. Correspondendo a uma matriz quadrada,
e tendo em conta o que já referimos sobre a nulidade do seu determinante anteriormente,
podemos afirmar que um conjunto de vetores é uma base de $\mathbb{R}^m$ se e só se
a matriz correspondente for invertível!

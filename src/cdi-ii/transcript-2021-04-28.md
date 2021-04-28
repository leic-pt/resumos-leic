Def: $M \subset \R^n$ é uma variaedade diferenciável de dimensão $m$ se $\forall a \in \M$ existe
uma vizinhança na qual $M$ é o gráfico de uma função $f: U\subset \R^m$ \to $\R^{n - m}$ de classe $C^1$.

Exemplos:

1.

$M= \{(x,y) \in \R^2: x^2+y^2=1\}$

[imagem]

2.

$M = \{(x,y,z) \in \R^3: x^2+y^2+z^2 = 1\}$

[imagem]

3.

$M= \{(x,y,z) \in \R^3: x^2 + y^2 = z^2\}$

[imagem]

Na origem não consigo escrever nenhuma variável em função das outras duas.

Variedade de dimensão 2

Espaços vetoriais de $dim\ n$ são variedades de $dim\ m$.

Considerar só conjunto de nível:

$M = \{x \in \R^n: F(x) = 0\}$, $F: \R^n \to \R^{n-m}$, $C^1$.

$M$ é variedade de $dim\ m$ se $\forall a \in M$ eu consigo aplicar o Teorema da Função Implícita com $m$ variáveis independentes.

Tenho de encontrar $m$ variáveis para as quais $\det DF \ne 0 \implies \text{característica máxima}$.

$DF = ...$

Teorema: O conjunto de nível é uma variedade de $dim\ m$ se $DF$ tem sempre característica máxima.

Exemplos:

$$
\{x^2+y^2 = 1\} = \{F(x,y) = x^2+y^2-1=0\}, F \in C^1
$$

$$
DF = \begin{bmatrix}
2x & 2y
\end{bmatrix}
$$

$$
\car DF \ne 1 \implies x,y = 0 \text{não pretence ao conjunto}
$$

Logo, $\car DF$ é máxima em qualquer ponto do conjunto e $M$ é variedade de dimensão $1$.

$$
M = \{ x^2+y^2 + z^2 = N \} = {F(x,y,z) = x^2+y^2+z^2-1 = 0}, F \in C^1
$$

$$
DF = \begin{bmatrix}
2x & 2y & 2z
\end{bmatrix}
$$

$\car DF$ não é max, logo $x,y,z=0$ não pertence ao conjunto

Logo, $DF$ tem sempre característica máxima para qualquer ponto do conjunto e $M$ é uma variedade de $dim 3-1 = 2$.

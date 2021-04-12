## Integração em R^n

$$
f: I \subset \R^n \to \R \text{integrável} \Leftrightarrow \underline{\int_I} f = \overline{\int_I} f
$$

Que funções é que são integráveis?

::: tip TEOREMA

Seja $f: I \subset \R^n \to \R$ contínua e limitada,
então $f$ é integrável.

:::

Isto não apanha as funções características

$$
\1_A(x) = \begin{cases}
1 & x \in A\\
0 & x \notin A
\end{cases}
$$

Será que $\1_A$ é integrável?

## Conjunto de conteúdo nulo

$A \subset \R^n$ é de conteúdo nulo se, para qualquer $\epsilon > 0$, existirem intervalos $I_j$
tal que $A \subset \cup I_j$ e $\subset |I_j| < \epsilon$.

A área total de $I_j$ é tão pequena quanto se queira.

- Uma linha contínua tem área 0 e volume 0
- Uma superfície contínua tem volume 0

$$
\begin{array}{l}
B=A\backslash \text{linha roxa}\\
\operatorname{área}(A) = \operatorname{área}(B)\\
C=A\cup \text{linha laranja}\\
\operatorname{área}(A) = \operatorname{área}(C)
\end{array}
$$

::: tip PROPOSIÇÃO

Uma união finita de conjuntos de conteúdo nulo tem conteúdo nulo.

:::

::: alert ATENÇÃO

Uma união infinita já pode não ser de conteúdo nulo.

Se tivermos vários segmentos de área 0, a sua união pode formar um quadrado, que já tem área não nula.

:::

::: tip TEOREMA

Seja $f:I \subset \R^n \to \R$ contínua e limitada em $I$
(exceto possivelmente num conjunto de conteúdo nulo),
então $f$ é integrável.

:::

No caso das funções indicatrizes ($\1$):

Contínua dentro e fora.
Na fronteira é descontínua, mas tem conteúdo nulo.

Corolário:

Se a fronteira de um conjunto $A$ tiver conteúdo nulo então $\1_A$ é integrável.

Que conjuntos têm fronteira de conteúdo nulo?

Exemplo:

$A = \{ (x,y) \in ]0, 1[ \times ] 0, 1 [ : x,y \in \Q \}$
$f_r(A) = [0,1] \times [0,1]$ fronteira não tem conteúdo nulo (a fronteira equivale ao quadrado todo)

Teorema:

Se um conjunto $A$ for definido por inequações que envolvam só funções contínuas e $A$ for limitado, então
a fronteira tem conteúdo nulo (e portanto $\1_A$ é integrável).

Obs:

$$
\begin{array}{l}
I = ]a_1, b_1[ \times ]a_2, b_2[\\
\overline I = [a_1, b_1] \times [a_2, b_2]
\end{array}
$$

Integrar em $I$ é a mesma coisa que integrar em $\overline I$ porque a diferença são arestas,
que têm conteúdo nulo (não têm área).

Exemplo:

$\{(x,y,z) \in \R^3: \frac{x}{2} < y < x\quad,\quad 0 < z < x < 1\}$

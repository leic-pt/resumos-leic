---
description: 'Integrabilidade de funções: Que funções são integráveis?'
path: /cdi-ii/integracao-funcoes
---

# Integrabilidade de Funções

```toc

```

Sabemos que uma função é integrável quando $\underline{\int_I} f = \overline{\int_I} f$.  
Mas que tipos de funções são integráveis?

::: tip TEOREMA

Seja $f: I \subset \R^n \to \R$ contínua e limitada,
então $f$ é integrável.

:::

## Conjunto de conteúdo nulo

::: tip DEFINIÇÃO

$A \subset \R^n$ é de conteúdo nulo se, para qualquer $\epsilon > 0$, existirem intervalos $I_j$
tal que $A \subset \bigcup I_j$ e $\sum |I_j| < \epsilon$.

:::

A área total de $I_j$ é tão pequena quanto se queira.

- Uma linha contínua tem área 0 e volume 0
- Uma superfície contínua tem volume 0

![Conteúdo Nulo](./assets/0009-conteudo-nulo.svg#dark=1)

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

::: danger ATENÇÃO

Uma união infinita já pode não ser de conteúdo nulo.

Se tivermos vários segmentos de área 0, a sua união pode formar um quadrado, que já tem área não nula.

![União infinita de conjuntos de conteúdo nulo](./assets/0009-conteudo-nulo-quadrado.svg#dark=1)

:::

## Funções Integráveis

::: tip TEOREMA

Seja $f:I \subset \R^n \to \R$ contínua e limitada em $I$
(exceto possivelmente num **conjunto de conteúdo nulo**),
então $f$ é integrável.

:::

### No caso das funções indicatrizes

$$
\1_A(x) = \begin{cases}
1 & x \in A\\
0 & x \notin A
\end{cases}
$$

Tomando um conjunto $A$, a função indicatriz $\1_A$ é contínua no interior e exterior do conjunto (é sempre 1 ou 0, respetivamente).
Então, a sua integrabilidade depende somente da fronteira de $A$.

{green}(**Se a fronteira de um conjunto $A$ tiver conteúdo nulo então $\1_A$ é integrável.**)

Que conjuntos têm fronteira de conteúdo nulo?

::: details Exemplo

Tomando o conjunto $A = \{ (x,y) \in ]0, 1[ \times ] 0, 1 [ : x,y \in \Q \}$,
a sua fronteira será
$f_r(A) = [0,1] \times [0,1]$.

![Conjunto com fronteira igual à sua área](./assets/0009-fronteira-q.svg#dark=1)

Neste caso, podemos concluir que a fronteira não tem conteúdo nulo, porque equivale ao quadrado todo.

:::

::: tip TEOREMA

Se um conjunto $A$ for definido por inequações que envolvam só funções contínuas e $A$ for limitado, então
a fronteira tem conteúdo nulo (e portanto $\1_A$ é integrável).

:::

Vendo agora um pequeno exemplo.

![A fronteira de conteúdo nulo não importa para o integral](./assets/0009-conteudo-nulo-fronteira.svg#dark=1)

$$
\begin{array}{l}
I = ]a_1, b_1[ \times ]a_2, b_2[\\
\overline I = [a_1, b_1] \times [a_2, b_2]
\end{array}
$$

{yellow}(**Integrar em $I$ é a mesma coisa que integrar em $\overline I$**) porque a diferença são arestas,
que têm conteúdo nulo (não têm área).

---

Slides:

- [Aula 21](https://drive.google.com/file/d/1UZdMCK4g5bBHPECAcop5oTcbxfPz8B84/view?usp=sharing)

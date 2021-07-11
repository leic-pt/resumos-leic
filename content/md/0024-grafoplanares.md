---
title: Grafos Planares
path: /md/grafos-planares
type: content
---

# Grafos Planares

Grafos que podem ser desenhados sem que haja interseções de arestas.

## Teoremas

### Teorema 1

Num grafo conexo planar de $p$ vértices, $q$ arestas e $r$ regiões, então

$$p+r = q+2$$

:::details[Demonstração]

Por indução Simples

**Base**

$q=0$, então o grafo terá apenas $1$ vértice e $1$ região.

$$1+1=0+2 \quad \checkmark$$

**Hipótese de Indução**

$$p+r = q+2$$

Sustituindo $q$ por $q+1$ temos $2$ casos:

1. Grafo é uma árvore  
   Se é uma árvore, sabemos que terá $q+1$ arestas e apenas tem $1$ região, logo, por hipótese de Indução:

   $$(q+2) + 1 = (q+1) + 2 \quad \checkmark$$

2. Não é árvore, tem pelo menos um ciclo  
   Removendo uma aresta do ciclo ficamos com $q$ arestas. Agora já não temos ciclo, por isso também temos menos uma região (a do ciclo).

   $$
   p + (r-1) = ((q+1)-1) + 2 \quad \text{(Por Hip. Indução)}\\
   p + r = (q+1) +2 \quad \checkmark
   $$

   **NOTA** $(q+1)$ é o número de arestas do grafo em análise, por isso é que é verdade pela `Hipótese de Indução`.

QED

:::

### Teorema 2

Num grafo conexo planar de $p \geq 3$ vértices, tem-se que $q \leq 3p-6$

:::details[Demonstração]

Sabe-se que a menor região num grafo planar é limitada por $3$ vértices/arestar (um triângulo, que pode ser "torto" (exemplo no fim)).  
Deste modo, seja $N_i$ o número de arestas na fronteira da região $i$, $r$ o número de regiões e $q$ o número de arestas, no mínimo teremos só regiões formadas por triângulos e a soma de regiões será no máximo $2q$ (repetimos cada aresta $2$ vezes)

$$
3r \leq N_1 + \dots + N_r \leq 2q\\
r \leq \frac{2}{3}q\\
p+r \leq p+\frac{2}{3}q
$$

Como $q+2=p+r$ pelo [Teorema 1](#teorema-1)

$$
q+2 \leq p+\frac{2}{3}q\\
\frac{1}{3}q \leq p- 2 \Rightarrow q \leq 3p-6
$$

QED

:::details[Triângulo "torto"]

![Tri Torto](./imgs/0024-triTorto.png)

A região $R_1$ assinalada a [verde](color:green) é limitada por um triângulo ("torto").  
**Mas atenção:** "torto" não foi uma designação dada pelo professor na aula, nem sei se existe.

:::

:::details[Exemplo]

O grafo completo de $5$ vértices $(k_5)$ não é planar.  
Como é completo, o número de arestas será

$$ q = \frac{p(p-1)}{2}$$

Onde $p$ é o número de vértices. Se $p=5$, $q=10$ e, pelo [Teorema 2](#teorema-2) um grafo de $5$ vértices tem de ter:

$$q \leq 3 \times5 -6 = 9$$

Como $10>9$, conclui-se que $k_5$ não é planar

:::

:::warning[AVISO]

Um grafo pode respeitar as condições do [Teorema 2](#teorema-2) e não ser planar. Só podemos tirar conclusões se **não** respeitar a igualdade.

:::

### Teorema 3

Num grafo conexo planar de $p\geq 2$ vértices, que não tem triângulos, tem-se

$$q \leq 2p-4$$

:::details[Demonstração]

Quase igual à anterior, só temos de mudar os valores.

$$
4r \leq N_1 + \dots + N_r \leq 2q\\
r \leq \frac{1}{2}q\\
p+r \leq p+\frac{1}{2}q
$$

Como $q+2=p+r$ pelo [Teorema 1](#teorema-1)

$$
q+2 \leq p+\frac{1}{2}q\\
\frac{1}{2}q \leq p- 2 \Rightarrow q \leq 2p-4
$$

QED

:::

:::details[Exemplo]

Um grafo bipartido com partições de dimensão $3$ $(k_{3,3})$ não é planar.

![K 33](./imgs/0024-k33.png)

A região mínima é um quadrado.  
Se verificarmos, temos $9$ arestas. Pelo [Teorema 3](#teorema-3) temos de ter no máximo $8$ em grafos com $6$ vértices.  
$k_{3,3}$ não é planar.

:::

### Teorema 4

Num grafo planar há sempre pelo menos um vértice de grau $\leq 5$.

:::details[Demonstração]

Imagine-se que afinal havia pelo menos um vértice de grau $\leq 6$.

Então, para grafos onde os vértices têm todos grau $\geq 6$, pelo [Teorema Fundamental da Teoria dos Grafos](./0018-grafos-def.md#teorema-fundamental-da-teoria-dos-grafos)

$$6p \leq 2q$$

Onde $p$ é o número de vértices e $q$ o número de arestas.

$$
q \geq 3p > 3p -6\\
q > 3p-6
$$

O que significa que não pode ser planar pelo [Teorema 2](#teorema-2).

QED

:::

---
title: Caminhos mais Curtos
description: Caminhos mais Curtos de Origem Única.
  Representação e Propriedades dos Caminhos mais Curtos.
  Operação de Relaxação.
  Algoritmo de Dijkstra.
  Algoritmo de Bellman-Ford.
  Caminhos mais Curtos em DAGs.
path: /asa/caminhos-mais-curtos
type: content
---

# Caminhos mais Curtos

```toc

```

:::danger[Secção em Construção]

Esta secção encontra-se atualmente incompleta. Estará pronta em breve.

:::

:::tip[Problema]

O professor Patrick quer descobrir o caminho mais curto de Phoenix a Indianapolis. Dado um mapa dos Estados Unidos (onde a distância entre cada par de interseções adjacentes está marcada), como pode ele determinar o caminho mais curto?

:::

O livro que acompanha a cadeira introduz assim o tema dos caminhos mais curtos em grafos. Como podemos, então, ajudar o professor Patrick (e de forma eficiente)?

Num problema de caminhos mais curtos, é-nos dado um grafo dirigido pesado, $G = (V, E)$, com uma função de pesos $w$ que mapeia cada aresta de $E$ a um peso numérico. O peso $w$ de um dado caminho $p$ corresponderá, então, à soma dos pesos de todas as arestas que compõem o caminho, tal que:

$$
w(p) = \sum_{i=1}^{k} w(v_{i-1}, v_i)
$$

O [**peso do caminho mais curto**](color:orange), dado por $\delta(u, v)$, é definido tal que:

$$
\delta(u, v) = \begin{cases}
\min {\{w(p): u \to_{p} v\}} & \text{se existe caminho de u para v}\\
\infty & \text{caso contrário}
\end{cases}
$$

O caminho mais curto de $u$ para $v$ é, portanto, qualquer caminho $p$ tal que $\delta(u, v) = w(p)$.

Resta, por fim, notar que a [BFS](./algoritmos-elementares#bfs---breadth-first-search) corresponde a um algoritmo deste género, que funciona para grafos não-pesados/com pesos uniformes.

## Caminhos mais Curtos com Fonte Única

Esta secção irá abordar a identificação do caminho mais curto partindo de um vértice-fonte $s \in V$ a qualquer vértice $v \in V$. O algoritmo em questão permitirá resolver outros problemas, tais como:

- Caminhos mais Curtos com Destino Único (corresponde a inverter a direção de cada aresta e aplicar o algoritmo normal de caminhos mais curtos de fonte única).

- Caminhos mais Curtos entre Par Único.

- Caminhos mais Curtos entre todos os Pares.

---

<!-- TODO - ADD SLIDES AND NOTES -->

- [Slides]()
- [Notas Prof.]()
  $$

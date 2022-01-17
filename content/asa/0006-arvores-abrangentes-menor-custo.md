---
title: Árvores Abrangentes de Menor Custo
description: Definição de MST.
  Algoritmo Greedy Genérico.
  Algoritmo de Prim.
  Algoritmo de Kruskal.
path: /asa/arvores-abrangentes-menor-custo
type: content
---

# Árvores Abrangentes de Menor Custo

```toc

```

:::tip[Motivação]

O Sr. Johnson está a prototipar um novo design para um circuito elétrico. Um circuito é composto por um set de _pins_ e por um conjunto de fios que os interliga. Para poder vender o seu circuito a um preço mais baixo que os da concorrência, precisa de cortar custos, e, como tal, opta por procurar o conjunto de fios tal que consegue interligar todos os pins de modo mais barato. Cada possível ligação tem um custo associado, claro - o circuito tem desníveis e indireções que fazem com que o custo real do fio não seja uniforme para ligar quaisquer dois _pins_. Para encontrar o custo ótimo, recorre a um algoritmo que calcula a árvore abrangente de menor custo do circuito, [**_minimum spanning tree_**](color:yellow) (MST), um grafo não dirigido onde cada vértice corresponde a um _pin_ e onde as possíveis ligações (fios) entre estes correspondem a arcos pesados.

As MST's são, então, geralmente utilizadas para encontrar as soluções mais baratas para interligar um conjunto de vértices - interligar _pins_ num circuito, redes de telecomunicação e gás natural, entre outras.

:::

Começemos por verificar que só podemos chegar à MST do circuito caso este seja **ligado** - isto é, se para cada par de _pins_ existe um caminho que os liga (não necessariamente nos dois sentidos). Caso seja, podemos afirmar que a MST corresponde a um subconjunto $T \subseteq E$ de arcos que formam um circuito ligado com custo minimzado:

$$
w(T) = \sum_{(u, v) \in T} w(u, v)
$$

Podemos ainda notar que $T$ é acíclico (caso tivesse ciclos, podíamos sempre cortar pelo menos um dos arcos e obter um custo menor - não seria de _custo mínimo_) e que tem $|V| - 1$ arcos, claro - tendo 3 vértices, idealmente vamos ligá-los com 2 arcos, 6 vértices com 5 arcos, ..., $n$ vértices com $n - 1$ arcos.

## Algoritmo Greedy Genérico

## Algoritmo de Kruskal

## Algoritmo de Prim

---

<!-- TODO - ADD SLIDES AND NOTES -->

- [Slides]()
- [Notas Prof.]()

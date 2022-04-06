---
title: Procura Cega
description: Algoritmos de Procura Não Informada
path: /ia/procura-cega
type: content
---

# Procura Cega

```toc

```

Procura cega ou procura não informada, tal como o nome indica, trata-se de fazer uma procura sem informação do que vem a seguir. Os algoritmos de procura cega que aprendemos foram:

## BFS

A procura em largura expande o nó de menor profundidade na
fronteira. Ou seja, visita os nós de uma dada profundidade e expande-os gerando os nós da próxima profundidade que apenas serão visitados assim que todos os da atual tiverem sido visitados.

Propriedades (b é o fator máximo de ramificação, d é a profundidade da solução de menor custo):

- Completa: Sim, se b for finito
- Complexidade Temporal: $b+b^2+b^3+...+b^d=O(b^d)$
- Complexidade Espacial: $O(b^d)$
- Ótima: Sim, se o custo do caminho não diminuir ao aumentar a profundidade (Por exemplo custo de todas as ações igual a 1). Em geral, não é ótima.

## DFS

A procura em profundidade expande o nó na fronteira com a maior profundidade. Ou seja, percorre o caminho completo e volta para trás assim que deixa de haver um caminho possível.

Propriedades:

- Completa: Não, visto que pode haver profundidades infinitas ou ciclos
- Complexidade Temporal: $O(b^m)$ (m é a profundidade máxima)
- Complexidade Espacial: $O(b*m)$
- Ótima: Não

## DFS Limitada

Uma DFS em que existe uma profundidade limite onde não se consegue expandir nenhum dos nós.

Propriedades:

- Completa: Não, a solução pode estar fora do limite.
- Complexidade Temporal: $O(b^l)$ (l é a profundidade limite)
- Complexidade Espacial: $O(b*l)$
- Ótima: Não

## DFS Iterativa

Consiste em várias DFS iterativas. A primeira com limite 1, de seguida com limite 2, etc.

Propriedades:

- Completa: Sim
- Complexidade Temporal: $O(b^d)$
- Complexidade Espacial: $O(b*d)$
- Ótima: Sim, se o custo de cada ação for igual a 1

## Procura Custo Uniforme

A procura de custo uniforme, escolhe para visitar o nó com o menor custo no caminho até ele. Caso todas as ações tiverem o mesmo custo é equivalente à BFS.

Propriedades:

- Completa: Sim, se o custo do ramo ≥ ε
  - ε é uma constante > 0, para evitar ciclos em ramos com custo 0
  - Custo do caminho aumenta sempre com a profundidade
- Complexidade Temporal: TBA
- Complexidade Espacial: TBA
- Ótima: Sim, porque os nós são expandidados pela ordem de custo

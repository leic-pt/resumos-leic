---
title: Algoritmos (Cheat Sheet)
description: Algoritmos (Cheat Sheet);
path: /asa/cheatsheet/algoritmos
type: cheatsheets
---

# Algoritmos (Cheat Sheet)

|         Algoritmo         |                  Complexidade                  |                Descrição Rápida                 |
| :-----------------------: | :--------------------------------------------: | :---------------------------------------------: |
|            DFS            |                   $O(V + E)$                   |
|         Dijkstra          |                $O((V+E)\log V)$                |     Caminho mais curto entre dois vértices      |
|           Prim            |               $O((V + E)\log V)$               |
|          Kruskal          |                  $O(E\log V)$                  |
|       Bellman-Ford        |                    $O(VE)$                     |
| Método(\*) Ford Fulkerson |             $O(\vert f^*\vert E)$              |
|       Edmonds-Karp        |      $\min(O(VE^2), O(\vert f^*\vert E))$      |
|       Push-Relabel        |                   $O(V^2E)$                    |
|      Relabel-2-Front      |                    $O(V^3)$                    |
|           SCCs            |                    $O(V+E)$                    | DFS, transpor, DFS por ordem decrescente de fim |
|          Johnson          | $O(VE + V(V + E)\log V) \in O(V(V + E)\log V)$ |

(\*) = Não é verdadeiramente um algoritmo

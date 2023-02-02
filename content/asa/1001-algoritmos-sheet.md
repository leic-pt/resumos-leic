---
title: Algoritmos (Cheat Sheet)
description: Algoritmos (Cheat Sheet);
path: /asa/cheatsheet/algoritmos
type: cheatsheets
---

# Algoritmos (Cheat Sheet)

|                      Algoritmo                      |                      Complexidade                       |
| :-------------------------------------------------: | :-----------------------------------------------------: |
|                DFS[\*](color:green)                 |                       $O(V + E)$                        |
|              SCCs (algoritmo abordado)              |                        $O(V+E)$                         |
|                       BFS                           |                       $O(V + E)$                        |
|                      Dijkstra                       |                    $O((V+E)\log V)$                     |
|                    Bellman-Ford                     |                         $O(VE)$                         |
| Johnson (Bellman-Ford + $V$ aplicações de Dijkstra) |     $O(VE + V(V + E)\log V) \in O(V(V + E)\log V)$      |
|                        Prim                         |                   $O((V + E)\log V)$                    |
|                       Kruskal                       |                      $O(E\log V)$                       |
|       Método[\*](color:yellow) Ford Fulkerson       |                  $O(\vert f^*\vert E)$                  |
|                    Edmonds-Karp                     | $\min(O(VE^2), O(\vert f^*\vert E))$ [\*](color:orange) |
|                    Push-Relabel                     |                        $O(V^2E)$                        |
|                  Relabel-to-Front                   |                        $O(V^3)$                         |

[\*](color:green) A DFS pode ser diretamente aplicada para encontrar uma ordenação topológica num dado grafo.  
[\*](color:yellow) Não é verdadeiramente um algoritmo - não indica _como escolher_ o caminho.  
[\*](color:orange) Edmonds-Karp corresponde a uma implementação do Método Ford-Fulkerson, preservando portanto a sua _upper-bound_: o majorante relevante será aqui o menor, claro.

---
title: Bases de um Espaço Vetorial
description: >-
  Base de um espaço vetorial.
  Coordenadas de um vetor numa base.
  Dimensão de um espaço vetorial.
  Matriz de Mudança de Base.
path: /al/bases
type: content
---

# Bases de um Espaço Vetorial

```toc

```

Podemos generalizar o referido no final da última página para espaços vetoriais, definindo o seguinte:

:::info[Definição]

Considerando um espaço vetorial $V$ sobre $\mathbb{K}$, um conjunto $\mathcal{B} = \{v_1, v_2, \cdots, v_n\} \subset V$
diz-se uma [**base**](color:orange) de $V$ se e só se $\mathcal{B}$ é linearmente independente e
gerador de $V$: $L(\mathcal{B}) = V$, portanto.

Os conjuntos geradores de espaços como $\mathbb{R}^m$ e $\mathbb{M}_{m \times n}(\mathbb{R})$
são, claro, as respetivas [**bases canónicas**](color:blue): no caso de $\mathbb{R}^m$, por
exemplo, temos $\mathcal{B} = \{e_1, e_2, \cdots, e_m\}$, onde $e_i$ é o vetor unitário
na direção $i$.

:::

## Coordenadas de um Vetor numa Base

Considerando um espaço vetorial $V$ sobre $\mathbb{K}$ e um conjunto $\mathcal{B} = \{v_1, v_2, \cdots, v_n\} \subset V$
tal que $L(\mathcal{B}) = V$, existirá um conjunto de escalares $\{c_1, c_2, \cdots, c_n\} \subset \mathbb{K}$
onde, $\forall u \in V$, existe necessariamente um vetor $v' \in \mathbb{K}^n$ (**único**) em que:

$$
v' = (c_1, c_2, \cdots, c_n), \quad u = c_1 v_1 + c_2 v_2 + \cdots + c_n v_n = \sum_{i=1}^n v'_i v_i
$$

No fundo, significa que podemos representar qualquer vetor $u \in V$ como uma combinação linear
de vetores da base $\mathcal{B}$ - fisicamente, estamos a transformar a representação de um vetor
em coordenadas cartesianas para outro sistema de coordenadas, neste caso, o sistema de coordenadas
definido pelos vetores da base $\mathcal{B}$.

Dizemos que estes escalares, correspondentes a $v'$, correspondem às [**coordenadas**](color:blue) de $u$ na base $\mathcal{B}$,
representando a posição de $u$ no espaço vetorial $V$. Podemos representar esta informação
da seguinte forma:

$$
(u)_{\mathcal{B}} = (c_1, c_2, \cdots, c_n) \in \mathbb{K}^n
$$

Note-se que a correspondência $u \mapsto (u)_{\mathcal{B}}$, $V \mapsto \mathbb{K}^n$,
é uma transformação que preserva a adição e a multiplicação por escalares:

$$
(u + v)_{\mathcal{B}} = (u)_{\mathcal{B}} + (v)_{\mathcal{B}} \quad \forall u, v \in V \\
(\lambda u)_{\mathcal{B}} = \lambda (u)_{\mathcal{B}} \quad \forall u \in V, \lambda \in \mathbb{K}
$$

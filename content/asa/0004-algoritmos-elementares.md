---
title: Algoritmos Elementares sobre Grafos
description: DFS.
  Ordenação Topológica.
  Componentes Fortemente Ligados.
  Floresta e Árvores DFS.
  Teorema do Caminho Branco.
  BFS.
path: /asa/algoritmos-elementares
type: content
---

# Algoritmos Elementares sobre Grafos

```toc

```

Vamos procurar rever e aprofundar conceitos previamente abordados em IAED, tais como DFS (incluindo ordenação topológica e componentes fortemente ligados) e BFS.

## DFS - _Depth First Search_

Consiste num algoritmo recursivo que utiliza a noção de _backtracking_. Procura esgotar todos os caminhos possíveis em frente, voltando para trás quando já não há mais possibilidades de seguir em frente. Foi abordado em IAED, e será aprofundado nesta secção.

:::details[Exemplo simples da execução do algoritmo]

Consideremos o seguinte grafo:

![DFS - Grafo do primeiro exemplo](./assets/0004-dfs-grafo-primeiro-exemplo.png#dark=1)

Tenhamos ainda que, em caso de empate entre dois vértices, o algoritmo deve escolher o vértice que vem antes por ordem alfabética. Começaremos no vértice A.

- Do vértice A, podemos ir apenas para o vértice B. (_timestamp_ 1 a "abrir" A)

- Do vértice B, podemos ir apenas para o vértice E. (_timestamp_ 2 a "abrir" B)

- Do vértice E, podemos ir apenas para o vértice D. (_timestamp_ 3 a "abrir" E)

- Do vértice D, podemos ir para os vértices A e B. Contudo, ambos já foram visitados, pelo que não temos para onde ir, e assim que descobrimos D, trancamo-lo. (_timestamp_ 4 a "abrir" D, _timestamp_ 5 a "fechar" D)

(começa aqui um _backtracking_, após o "fecho" de um vértice)

- Do vértice E não temos para onde ir, pelo que o trancamos. (_timestamp_ 6 a "fechar" E)

- Do vértice B não temos para onde ir, pelo que o trancamos. (_timestamp_ 7 a "fechar" B)

- Do vértice A não temos para onde ir, pelo que o trancamos. (_timestamp_ 8 a "fechar" A)

Trancámos, então, o vértice onde começámos a procurar - restam, contudo, vértices por explorar. Assim sendo, começamos uma nova procura, desta vez pelo vértice C.

- Do vértice C, podemos ir apenas para os vértices E e F. Contudo, E já foi visitado, pelo que optamos por ir para F. (_timestamp_ 9 a "abrir" C)

- Do vértice F não temos para onde ir, pelo que o trancamos. (_timestamp_ 10 a "abrir" F, _timestamp_ 11 a "fechar" F)

- Do vértice C não temos para onde ir, pelo que o trancamos. (_timestamp_ 12 a "fechar" C)

Aqui, terminamos a procura - não restam vértices por explorar.

A tabela abaixo indica os tempos de descoberta e fecho de cada vértice:

|       | A   | B   | C   | D   | E   | F   |
| ----- | --- | --- | --- | --- | --- | --- |
| $d_i$ | 1   | 2   | 3   | 4   | 9   | 10  |
| $f_i$ | 8   | 7   | 6   | 5   | 12  | 11  |

(Aqui, $d_i$ corresponde ao tempo de descoberta e $f_i$ ao tempo de fecho)

Ao resolver um exercício de procura DFS, provavelmente optar-se-ia por desenhar algo deste género:

![DFS - Solução do grafo do primeiro exemplo](./assets/0004-dfs-solucao-primeiro-exemplo.png#dark=1)

Podíamos ainda, no fim, desenhar a **floresta DFS** do grafo acima. O conceito será abordado mais abaixo.

:::

No algoritmo que estudámos em aula, cada vértice do grafo tem algumas propriedades que facilitam o desenrolar da DFS:

- cada vértice tem um pai, `pi`, inicialmente nulo (`Nil`, no pseudocódigo).

- cada vértice tem uma cor - `White`, `Gray` ou `Black`. Um vértice é `White` antes de ser descoberto, `Gray` entre descoberta e fecho, e `Black` quando está fechado.

- cada vértice tem um tempo de descoberta e um tempo de fecho.

Tendo como argumento um grafo $G$, o pseudocódigo do algoritmo da DFS pode ser tal que:

```rust
DFS(G)
  for v in G.V // loop 1
    v.color = White
    v.d = 0
    v.f = 0
    v.pi = Nil
  time := 0
  for v in G.V // loop 2
    if v.color == White
      DFS_Visit(G, v)

DFS_Visit(G, v)
  time = time + 1
  v.d = time
  v.color = Gray
  for w in G.Adj[v] // loop 3
    if w.color == White
      w.pi = v
      DFS_Visit(G, w)
  time = time + 1
  v.f = time
  v.color = Black
```

As complexidades ([**agregadas**](color:orange) - durante todo o decorrer do algoritmo) de cada loop acima são:

- Loop 1 - $\Theta(V)$
- Loop 2 - $\Theta(V)$
- Loop 3 - $\Theta(V + E)$

Onde $V$ é o número de vértices do grafo e $E$ o número de arcos/arestas.

A complexidade do primeiro loop é trivial, o loop é claramente executado apenas uma vez para cada vértice. A do segundo também segue a mesma lógica, sendo executado uma vez para cada vértice. A do terceiro não é óbvia. Temos cada, para cada vértice, `DFS_Visit` é chamada apenas uma vez (porque assim que deixa o estado `White`, não vola a poder ter esse estado). Além disso, para cada vértice, o loop é executado $E$ vezes, uma vez para cada arco/aresta que liga aquele vértice a outro. Isto, claro, considerando todo o decorrer do algoritmo - foi assim que a complexidade do algoritmo foi abordada em aula.

Resta ainda realçar que foi utilizado $\Theta$ e não $O$ - os loops, aqui, são executados _exatamente_ com aquela complexidade, sempre, qualquer que seja o grafo-argumento do algoritmo.

:::info[Floresta DFS]

Uma [**árvore DFS**](color:yellow) corresponde à representação de uma procura DFS pela ordem em que os vértices são descobertos. A raiz da árvore é o vértice inicial. Um vértice pode ter mais do que um filho, caso haja mais que um vértice a ser descoberto a partir dele, mas apenas um pai. O conjunto de árvores DFS de um grafo diz-se uma [**floresta DFS**](color:orange).

[**Pode existir mais que uma floresta DFS possível num grafo.**](color:green)

:::

Temos, abaixo, dois exemplos de grafos com respetivas florestas DFS:

:::details[Exemplo 1 - Floresta com uma árvore]

![Florestas DFS - Exemplo 1 - Grafo](./assets/0004-floresta-ex1-grafo.png#dark=1)

Como podemos ver abaixo, a floresta contém apenas uma árvore.

![Florestas DFS - Exemplo 1 - Floresta](./assets/0004-floresta-ex1-floresta.png#dark=1)

:::

:::details[Exemplo 2 - Floresta com mais do que uma árvore]

![Florestas DFS - Exemplo 2 - Grafo](./assets/0004-dfs-solucao-primeiro-exemplo.png#dark=1)

Aqui, a floresta já tem duas árvores.

![Florestas DFS - Exemplo 2 - Floresta](./assets/0004-floresta-ex2-floresta.png#dark=1)

:::

:::details[Exemplo 3 - Variação do exemplo anterior]

Podemos, ainda demonstrar que há mais do que uma floresta possível para um dado grafo. Pegando no grafo do exemplo anterior, e fazendo uma DFS diferente (começando, por exemplo, em C):

![Florestas DFS - Exemplo 3 - Grafo](./assets/0004-floresta-ex3-grafo.png#dark=1)

Podemos, então, reparar que a floresta DFS é agora diferente:

![Florestas DFS - Exemplo 3 - Floresta](./assets/0004-floresta-ex3-floresta.png#dark=1)

:::

Podemos, na floresta DFS, representar vários tipos de arcos (arcos estes que representam arcos do próprio grafo):

- **Tree edges** - as arestas "normais" da árvore, consecutivas, de nó em nó.

- **Forward edges** - arestas "para a frente", não consecutivas.

- **Back edges** - arestas "para trás", não consecutivas.

- **Cross edges** - arestas "cruzadas". Ao contrário das outras arestas, estas **não correspondem** a descendentes/ascendentes diretos - podemos pensar nelas como relações entre primos, tios, etc.

:::details[Exemplo - tipos de Edges]

Pegando no grafo do Exemplo 1 acima:

![Grafo Exemplo - Arestas](./assets/0004-floresta-ex1-grafo.png#dark=1)

A árvore DFS da respetiva floresta é, normalmente, representada por:

![Floresta Exemplo - Arestas](./assets/0004-floresta-ex1-floresta.png#dark=1)

Contudo, **nem todas as arestas do grafo estão representadas** nesta árvore DFS - estão apenas representadas as arestas "normais" da árvore - **tree edges**. As restantes arestas são, respetivamente:

- $AF$ - Forward edge
- $EG$ - Forward edge
- $FB$ - Back edge
- $DA$ - Back edge
- $DH$ - Cross edge
- $HG$ - Cross edge

Poderiam ser representadas tal que:

![Floresta Exemplo - Arestas colocadas](./assets/0004-edge-type-exemplo.png#dark=1)

:::

Em termos de tempos de descoberta, para cada tipo de aresta, temos que (tendo dois vértices, $u$ e $v$):

- temos um tree ou um forward edge de $u$ para $v$ caso $d(u) < d(v) < f(v) < f(u)$.

- temos um back edge de $u$ para $v$ caso $d(v) < d(u) < f(u) < f(v)$.

- temos um cross edge de $u$ para $v$ caso $d(v) < f(v) < d(u) < f(u)$.

Antes de abordar a ordenação topológica e os componentes formemente ligados, é relevante enunciar o **Teorema do Caminho Branco**.

:::info[Teorema do Caminho Branco]

Tendo dois vértices $u$ e $v$, temos que $v$ é descendente de $u$ se e apenas se no momento em que $u$ é descoberto, existir um caminho de vértices brancos - por descobrir - a ligar $u$ a $v$.

:::

## BFS - _Breadth First Search_

test

---

- [Slides]()
- [Notas da Aula]()
- [Notas sobre DFS - Universidade de Edimburgo](https://www.inf.ed.ac.uk/teaching/courses/inf2b/algnotes/note10.pdf)

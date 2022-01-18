---
title: Árvores Abrangentes de Menor Custo
description: Definição de MST.
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

As MST's são, então, geralmente utilizadas para encontrar as soluções mais baratas para interligar um conjunto de vértices - interligar _pins_ num circuito, redes de telecomunicação, de gás natural, estradas, entre outras.

:::

Comecemos por verificar que só podemos chegar à MST do circuito caso este seja **ligado** - isto é, se para cada par de _pins_ existe um caminho que os liga. Caso seja, podemos afirmar que a MST corresponde a um subconjunto $T \subseteq E$ de arcos que formam um circuito ligado com custo minimizado:

$$
\min w(T) = \sum_{(u, v) \in T} w(u, v)
$$

Podemos ainda notar que $T$ é acíclico (caso tivesse ciclos, podíamos sempre cortar pelo menos um dos arcos e obter um custo menor - não seria de _custo mínimo_) e que tem $|V| - 1$ arcos, claro - tendo 3 vértices, idealmente vamos ligá-los com 2 arcos, 6 vértices com 5 arcos, ..., $n$ vértices com $n - 1$ arcos.

Nesta secção, serão abordados dois algoritmos que podem ser utilizados para encontrar a MST de um grafo, ambos partindo de uma abordagem [greedy](./tecnicas-algoritmos#algoritmos-greedy) e com complexidade temporal $O(E \log V)$.

Ambos os algoritmos procuram formar gradualmente um conjunto $A$ de arcos, que no fim corresponde a uma MST de $G$.

Será útil definir algumas coisas que nos irão ajudar nas provas dos algoritmos:

Temos que um **corte** $(S, V - S)$ de um grafo corresponde a uma partição do conjunto de vértices do mesmo. A figura abaixo exemplifica-o: os vértices acima do corte correspondem a $S$ e os abaixo a $V - S$.

![Corte - Exemplo](./assets/0006-corte-exemplo.png#dark=1)

Um arco **cruza** um corte caso um dos vértices do mesmo se encontre em $S$ e o outro em $V - S$. Mais ainda, o mesmo diz-se **leve** caso, de entre todos os arcos que cruzam o corte, este tenha peso mínimo. Por fim, temos que um conjunto $A$ **respeita um corte** caso nenhum dos seus arcos cruze o corte.

## Algoritmo de Prim

Observando o comportamento de algoritmo de Prim, podemos ser relembrados do comportamento do algoritmo de Dijkstra. Começamos num qualquer vértice de $G$, e exploramos todos os seus arcos. O arco de menor peso que o liga a um vértice por explorar é adicionado à MST, e fazemos o mesmo para o próximo vértice por explorar com menor distância à MST (esta noção de distância ficará mais clara mais abaixo). Esta abordagem repete-se $|V|$ vezes, terminando com todos os arcos de $G$ explorados. Podemos, claro, reparar que a escolha greedy consiste em escolher **sempre** o arco de menor peso que sai do vértice que estamos a explorar.

Olhando para o pseudo-código abaixo, podemos notar que o algoritmo guarda o predecessor de cada vértice, `pi`, bem como o peso do arco que o liga à MST já calculada, `distance`.

```rust
Prim(G, r) // r = vértice inicial
  for each vertex v in G.V
    v.distance = inf
    v.pi = nil
  r.distance = 0
  r.pi = nil
  Q = new MinPriorityQueue(G.V) // queue com prioridade = distancia
  // implicito: A é mantido, sendo adicionado cada vértice gradualmente
  while (!Q.empty())
    u = Q.extractMin()
    for each edge (u, v) in G.adj(u)
      if (v in Q && w(u, v) < v.distance)
        v.pi = u
        v.distance = w(u, v)
        // implicito - Q.decreaseKey(v)
```

:::details[Exemplo da aplicação do algoritmo]

O grafo abaixo considera $a$ como vértice inicial, e já tem o primeiro passo de Prim realizado (explorou todos os arcos que dele saem, atualizando os pais e distâncias à MST). De realçar que, ao longo do algoritmo, as arestas que vão estando preenchidas a verde são as que estão nesse momento a ser exploradas.

![Exemplo da aplicação do algoritmo - 1](./assets/0006-prim-exemplo-1.png#dark=1)

Podemos notar que, dos vértices por explorar, $b$ é o que tem menor `key` (distância à MST), pelo que o escolhemos. Repetimos o processo, tal que:

![Exemplo da aplicação do algoritmo - 2](./assets/0006-prim-exemplo-2.png#dark=1)

Como ficou claro acima, não vamos mantendo a soma de um vértice à raiz, mas sim ao vértice que o liga à MST. Por exemplo, ao explorar o arco $(b, c)$, a distância de $c$ foi atualizada para $8$, e não para $4 + 8 = 12$.

O processo acaba por ser bastante intuitivo, pelo que de seguida encontram-se todos os restantes passos da aplicação do algoritmo ao grafo:

![Exemplo da aplicação do algoritmo - 3](./assets/0006-prim-exemplo-3.png#dark=1)

![Exemplo da aplicação do algoritmo - 4](./assets/0006-prim-exemplo-4.png#dark=1)

![Exemplo da aplicação do algoritmo - 5](./assets/0006-prim-exemplo-5.png#dark=1)

![Exemplo da aplicação do algoritmo - 6](./assets/0006-prim-exemplo-6.png#dark=1)

(Podemos notar que o passo abaixo não tem arestas a verde, já que todas as arestas de $h$ já foram exploradas.)

![Exemplo da aplicação do algoritmo - 7](./assets/0006-prim-exemplo-7.png#dark=1)

![Exemplo da aplicação do algoritmo - 8](./assets/0006-prim-exemplo-8.png#dark=1)

![Exemplo da aplicação do algoritmo - 9](./assets/0006-prim-exemplo-9.png#dark=1)

A MST resultante será, então:

![Exemplo da aplicação do algoritmo - MST Resultante](./assets/0006-prim-exemplo-mst-resultante.png#dark=1)

:::

:::details[Prova da escolha ser ótima e funcionar]

Seja $G$ um grafo, $T$ a árvore que o algoritmo de Prim retorna e $S$ uma outra MST.

Consideremos a primeira vez em que o algoritmo não escolhe uma aresta que esteja no conjunto de vértices já selecionados - seja ela $(u, v)$. Temos, claro, que um dos vértices do arco pertence a $T$ e outro não. Como a MST tem de ser um grafo ligado, se $S$ não contém $(u, v)$, terá necessariamente de conter um caminho $p = (u, ..., v)$. Ao passar pelo caminho, teremos necessariamente de encontrar um arco em que um vértice esteja no conjunto de vértices já selecionados e outro que não, caso contrário o algoritmo nunca iria escolher $(u, v)$. Seja esse arco $(x, y)$. Já que ambos os arcos cruzam o corte atual e o algoritmo escolheu $(u, v)$, então temos necessariamente que $w(u, v) \leq w(x, y)$. Podemos ainda notar que a união dos arcos de $p$ com $(u, v)$ forma um ciclo, e que tanto a remoção de $(u, v)$ como a de $(x, y)$ quebram-no. Ora, temos que a remoção de $(x, y)$ a $p$ e posterior junção de $(u, v)$ ao mesmo levará a um conjunto com peso menor ou igual ao de $p$ original, já que, como visto anteriormente, $w(u, v) \leq w(x, y)$. Assim sendo, se a MST contém $w(x, y)$, podemos sem dúvidas afirmar que $w(u, v) = w(x, y)$, e que tanto $T$ como $S$ serão MSTs (diferentes).

Abaixo podemos ver uma imagem que exemplifica o ciclo criado por $p$ e $(u, v)$ referido acima, bem como o facto de tanto $(u, v)$ como $(x, y)$ cruzarem o corte.

![Prova Prim](./assets/0006-prova-prim.png#dark=1)

:::

A complexidade temporal do algoritmo é, em geral, $O((V + E) \log V)$. Contudo, como $G$ é necessariamente ligado, $|E| > |V|$, pelo que podemos afirmar (ainda que com a perda de algum rigor) que a complexidade temporal do algoritmo é $O(E \log V)$. A complexidade é esta, visto que:

- Inicialização de `pi` e `distance`: $\Theta(V)$

- Inicialização da Min Priority Queue: $O(V)$

O ciclo `while` é percorrido $\Theta(V)$ vezes, com operação `extractMin` a levar $O(\log V)$ tempo. Todas as arestas são percorridas durante o decorrer do algoritmo $O(E)$, e a operação implícita de atualização da queue leva $O(\log V)$ tempo. Assim sendo, podemos afirmar que, no total, a complexidade temporal do algoritmo é $O((V + E) \log V)$.

## Algoritmo de Kruskal

O algoritmo de Kruskal, já abordado em Matemática Discreta, é também bastante simples. É mantido um conjunto, $S$, inicialmente com $|V|$ árvores (uma por vértice). Cada árvore corresponde a um conjunto disjunto, um `set`, sem elementos repetidos. $E$ é inicialmente ordenado por ordem crescente de peso dos seus arcos e, seguindo essa mesma ordem, o algoritmo percorre todas as arestas de $E$. A cada momento, é escolhida uma aresta $(u, v)$, e é verificado se atualmente $u$ e $v$ pertencem a árvores diferentes em $S$ - se sim, as respetivas árvores são unidas (de modo disjunto, mantendo a propriedade de `set`), e a aresta é adicionada à MST. Caso contrário, nada acontece.

:::details[Exemplo da aplicação do algoritmo]

Começamos com o grafo abaixo (note-se que já estamos no primeiro passo, em que foi escolhido o arco $(h, g)$, com menor peso). Como atualmente $h$ e $g$ não pertencem à mesma árvore, os respetivos sets são unidos, e $(h, g)$ é adicionado à MST.

![Exemplo da aplicação do algoritmo - 1](./assets/0006-kruskal-exemplo-1.png#dark=1)

De seguida, temos 2 arcos com peso 2 - podemos escolher qualquer um, o algoritmo escolhe $(c, i)$. Os vértices não pertencem à mesma árvore, pelo que as respetivas árvoras são unidas, e $(c, i)$ é adicionado à MST.

![Exemplo da aplicação do algoritmo - 2](./assets/0006-kruskal-exemplo-2.png#dark=1)

Escolhemos, agora, o outro arco com peso 2, $(g, f)$. $g$ e $f$ não pertencem à mesma árvore, pelo que as respetivas árvores ($\{g, h\}$ e $\{f\}$) são unidas, com $(g, f)$ adicionado à MST.

![Exemplo da aplicação do algoritmo - 3](./assets/0006-kruskal-exemplo-3.png#dark=1)

O resto do algoritmo é sempre a fazer a mesma coisa:

![Exemplo da aplicação do algoritmo - 4](./assets/0006-kruskal-exemplo-4.png#dark=1)

![Exemplo da aplicação do algoritmo - 5](./assets/0006-kruskal-exemplo-5.png#dark=1)

![Exemplo da aplicação do algoritmo - 6](./assets/0006-kruskal-exemplo-6.png#dark=1)

No passo abaixo, a aresta $(h, i)$ não é adicionada, já que $h$ e $i$ já pertencem à mesma árvore - qualquer aresta a ser adicionada formaria um ciclo.

![Exemplo da aplicação do algoritmo - 7](./assets/0006-kruskal-exemplo-7.png#dark=1)

![Exemplo da aplicação do algoritmo - 8](./assets/0006-kruskal-exemplo-8.png#dark=1)

![Exemplo da aplicação do algoritmo - 9](./assets/0006-kruskal-exemplo-9.png#dark=1)

![Exemplo da aplicação do algoritmo - 10](./assets/0006-kruskal-exemplo-10.png#dark=1)

![Exemplo da aplicação do algoritmo - 11](./assets/0006-kruskal-exemplo-11.png#dark=1)

![Exemplo da aplicação do algoritmo - 12](./assets/0006-kruskal-exemplo-12.png#dark=1)

![Exemplo da aplicação do algoritmo - 13](./assets/0006-kruskal-exemplo-13.png#dark=1)

No fim, o conjunto-resposta de arestas será:

$$
A = \{(h, g), (i, c), (g, f), (a, b), (c, f), (c, d), (a, h), (d, e)\}.
$$

:::

Temos que o pseudo-código do algoritmo é:

```rust
Kruskal(G, w)
  A = {}
  for each vertex v in G.V
    makeSet(v)
  sort G.E by w
  for each edge (u, v) in G.E
    if findSet(u) != findSet(v)
      union(u, v)
      A = A U {(u, v)}
```

A escolha greedy aqui é, claro, a escolha do arco de menor peso possível de entre as que ainda não foram exploradas.

O algoritmo tem complexidade temporal $O(E \log V)$. Dissecando-o em pormenor, temos que:

- Realizamos $\Theta(V)$ operações de `makeSet` (com complexidade $O(1)$)

- Ordenados o conjunto $E$ por ordem crescente de peso, operação que leva $O(E \log E)$ tempo

São realizadas $O(E)$ operações de `findSet` e `union`. Recorrendo às estruturas de dados certas[**\***](color:yellow), podemos afirmar que a complexidade temporal do `for` loop é de $O(E \cdot\alpha(V))$, onde $\alpha(V)$ é uma função de crescimento prolongado (sub-logarítmico). Visto que $E < V^2$, temos necessariamente que $\log E = O(\log V)$, e que o algoritmo tem complexidade temporal $O(E \log V)$.

[**\***](color:yellow) As estruturas referidas podem ser encontradas [aqui](https://cp-algorithms.com/data_structures/disjoint_set_union.html). São utilizadas, para além do algoritmo de Kruskal, no algoritmo de Tarjan para encontrar $LCAs$ (_lowest common ancestors_).

:::details[Prova da Correção do Algoritmo]

Podemos provar por indução que, se $S$ é um conjunto de arestas escolhido pelo algoritmo a qualquer momento do mesmo, então há pelo menos uma MST $T$ tal que $S \subseteq T$.

Começando pelo caso base, $S = \{ \}$, temos que $S \subseteq T$, já que o conjunto vazio está contido em qualquer conjunto.

Podemos, então, partir para o caso geral - tenhamos então que estamos a explorar uma dada aresta $e$, e que, segundo Kruskal, queremos adicioná-la:

- Caso $e$ forme um ciclo com $T$, a aresta não seria escolhida pelo algoritmo, pelo que a afirmação inicial mantém-se.

- Caso $T$ contenha $e$, a afirmação inicial mantém-se (é correto que o algoritmo a escolha).

- Caso $T$ não contenha $e$, $T + e$ contém necessariamente um ciclo (qualquer arco adicionado a uma MST gera um ciclo). O ciclo terá, necessariamente, de conter uma outra aresta, $f$, aresta essa que não está em $S$. Tal como na prova do algoritmo de Prim, o objetivo aqui passará por remover $f$ a $T$ e adicionar-lhe $e$, ficando assim com outra árvore abrangente, $T'$. Ora, se o peso de $f$ fosse menor que o de $e$, $f$ já teria sido selecionada por Kruskal, pelo que $w(e) \leq w(f)$. Assim sendo, $w(T') \leq w(T)$. Como partimos de $T$ ser uma MST, então só podemos ter $w(T) = w(T')$, e portanto a adição de $e$ por Kruskal levará também a uma MST. A afirmação inicial mantém-se.

:::

---

<!-- TODO - NOTES (WHENEVER AVAILABLE) -->

- [Slides](https://drive.google.com/file/d/1TucBPnDwq49gX3yRaLscM2QDJV6Ijcep/view?usp=sharing)
- [Notas Prof.](https://www.youtube.com/watch?v=dQw4w9WgXcQ)

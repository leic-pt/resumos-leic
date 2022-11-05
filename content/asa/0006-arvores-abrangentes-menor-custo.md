---
title: Árvores Abrangentes de Menor Custo
description: Definição de MST.
  Algoritmo de Prim.
  Algoritmo de Kruskal.
  Estruturas de Dados para Conjuntos Disjuntos.
  Algoritmo Union-Find.
path: /asa/arvores-abrangentes-menor-custo
type: content
---

# Árvores Abrangentes de Menor Custo

```toc

```

:::tip[Motivação]

O Sr. Johnson está a prototipar um novo design para um circuito elétrico.
Um circuito é composto por um set de _pins_ e por um conjunto de fios que os interliga.
Para poder vender o seu circuito a um preço mais baixo que os da concorrência, precisa
de cortar custos, e, como tal, opta por procurar o conjunto de fios tal que consegue interligar todos os pins de modo mais barato.
Cada possível ligação tem um custo associado, claro - o circuito tem desníveis e
indireções que fazem com que o custo real do fio não seja uniforme para ligar quaisquer dois _pins_.
Para encontrar o custo ótimo, recorre a um algoritmo que calcula a árvore abrangente
de menor custo do circuito, [**_minimum spanning tree_**](color:yellow) (MST), um
grafo não dirigido onde cada vértice corresponde a um _pin_ e onde as possíveis
ligações (fios) entre estes correspondem a arcos pesados.

As MST's são, então, geralmente utilizadas para encontrar as soluções mais baratas
para interligar um conjunto de vértices - interligar _pins_ num circuito, redes de
telecomunicação, de gás natural, estradas, entre outras.

:::

Comecemos por verificar que só podemos chegar à MST do circuito caso este seja [**ligado**](color:green) -
isto é, se para cada par de _pins_ existe um caminho que os liga.
Caso seja, podemos afirmar que a MST corresponde a um subconjunto $T \subseteq E$
de arcos que formam um circuito ligado com custo minimizado:

$$
\min w(T) = \sum_{(u, v) \in T} w(u, v)
$$

Podemos ainda notar que $T$ é acíclico (caso tivesse ciclos, podíamos sempre cortar
pelo menos um dos arcos e obter um custo menor - não seria de _custo mínimo_) e que
tem $|V| - 1$ arcos, claro - tendo 3 vértices, idealmente vamos ligá-los com 2 arcos,
6 vértices com 5 arcos, ..., $n$ vértices com $n - 1$ arcos.

Nesta secção, serão abordados dois algoritmos que podem ser utilizados para encontrar
a MST de um grafo, ambos partindo de uma abordagem [greedy](./tecnicas-algoritmos#algoritmos-greedy)
e com complexidade temporal $O(E \log V)$.

Ambos os algoritmos procuram formar gradualmente um conjunto $A$ de arcos, que no fim corresponde a uma MST de $G$.

Será útil definir algumas coisas que nos irão ajudar nas provas dos algoritmos.

:::info[Corte]

Temos que um **corte** $(S, V - S)$ de um grafo corresponde a uma partição do conjunto
de vértices do mesmo. A figura abaixo exemplifica-o: os vértices acima do corte
correspondem a $S$ e os abaixo a $V - S$.

![Corte - Exemplo](./assets/0006-corte-exemplo.svg#dark=2)

Um arco **cruza** um corte caso um dos seus vértices se encontre em $S$ e o outro em $V - S$.
Mais ainda, o mesmo diz-se **leve** caso, de entre todos os arcos que cruzam o corte,
este tenha peso mínimo. Por fim, temos que um conjunto $A$ **respeita um corte** caso nenhum dos seus arcos cruze o corte.

:::

## Algoritmo de Prim

Observando o comportamento de algoritmo de Prim, podemos ser relembrados do comportamento do algoritmo de Dijkstra.
Começamos num qualquer vértice de $G$, e exploramos todos os seus arcos.
O arco de menor peso que o liga a um vértice por explorar é adicionado à MST, e
fazemos o mesmo para o próximo vértice por explorar com menor distância à MST (esta
noção de distância ficará mais clara mais abaixo). Esta abordagem repete-se $|V|$ vezes,
terminando com todos os arcos de $G$ explorados. Podemos, claro, reparar que a escolha
greedy consiste em escolher **sempre** o arco de menor peso que sai do vértice que estamos a explorar.

Olhando para o pseudo-código abaixo, podemos notar que o algoritmo guarda o predecessor
de cada vértice, `pi`, bem como o peso do arco que o liga à MST já calculada, `distance`.

```rust
Prim(G, r) // r = vértice inicial
  for each vertex v in G.V
    v.distance = inf
    v.pi = nil
  r.distance = 0
  r.pi = nil
  Q = new MinPriorityQueue(G.V) // queue com prioridade = distancia
  // implícito: A é mantido, sendo adicionado cada vértice gradualmente
  while (!Q.empty())
    u = Q.extractMin()
    for each edge (u, v) in G.adj(u)
      if (v in Q && w(u, v) < v.distance)
        v.pi = u
        v.distance = w(u, v)
        // implícito - Q.decreaseKey(v)
```

:::details[Exemplo da aplicação do algoritmo]

O grafo abaixo considera $a$ como vértice inicial, e já tem o primeiro passo de Prim
realizado (explorou todos os arcos que dele saem, atualizando os pais e distâncias à MST).

![Exemplo da aplicação do algoritmo - 1](./assets/0006-prim-exemplo-1.svg#dark=2)

Podemos notar que, dos vértices por explorar, $b$ é o que tem menor `key` (distância à MST),
pelo que o escolhemos. Repetimos o processo, tal que:

![Exemplo da aplicação do algoritmo - 2](./assets/0006-prim-exemplo-2.svg#dark=2)

Como ficou claro acima, não vamos mantendo a soma de um vértice à raiz, mas sim
ao vértice que o liga à MST. Por exemplo, ao explorar o arco $(b, c)$, a distância
de $c$ foi atualizada para $8$, e não para $4 + 8 = 12$.

O processo acaba por ser bastante intuitivo, pelo que de seguida encontram-se todos
os restantes passos da aplicação do algoritmo ao grafo:

![Exemplo da aplicação do algoritmo - 3](./assets/0006-prim-exemplo-3.svg#dark=2)

(Podemos notar que o passo abaixo não tem arestas a verde, já que todas as arestas de $H$ já foram exploradas.)

![Exemplo da aplicação do algoritmo - 4](./assets/0006-prim-exemplo-4.svg#dark=2)

A MST resultante será, então:

![Exemplo da aplicação do algoritmo - MST Resultante](./assets/0006-prim-exemplo-mst-resultante.svg#dark=2)

:::

:::details[Prova da escolha ser ótima e funcionar]

Seja $G$ um grafo, $T$ a árvore que o algoritmo de Prim retorna e $S$ uma outra MST.

Consideremos a primeira vez em que o algoritmo não escolhe uma aresta que esteja no
conjunto de vértices já selecionados - seja ela $(u, v)$. Temos, claro, que um dos
vértices do arco pertence a $T$ e outro não. Como a MST tem de ser um grafo ligado,
se $S$ não contém $(u, v)$, terá necessariamente de conter um caminho $p = (u, ..., v)$.
Ao passar pelo caminho, teremos necessariamente de encontrar um arco em que um vértice
esteja no conjunto de vértices já selecionados e outro que não, caso contrário o algoritmo
nunca iria escolher $(u, v)$. Seja esse arco $(x, y)$. Já que ambos os arcos cruzam o
corte atual e o algoritmo escolheu $(u, v)$, então temos necessariamente que $w(u, v) \leq w(x, y)$.
Podemos ainda notar que a união dos arcos de $p$ com $(u, v)$ forma um ciclo, e que
tanto a remoção de $(u, v)$ como a de $(x, y)$ quebram-no. Ora, temos que a remoção
de $(x, y)$ a $p$ e posterior junção de $(u, v)$ ao mesmo levará a um conjunto com
peso menor ou igual ao de $p$ original, já que, como visto anteriormente, $w(u, v) \leq w(x, y)$.
Assim sendo, se a MST contém $w(x, y)$, podemos sem dúvidas afirmar que $w(u, v) = w(x, y)$,
e que tanto $T$ como $S$ serão MSTs (diferentes).

Abaixo podemos ver uma imagem que exemplifica o ciclo criado por $p$ e $(u, v)$ referido
acima, bem como o facto de tanto $(u, v)$ como $(x, y)$ cruzarem o corte.

![Prova Prim](./assets/0006-prova-prim.svg#dark=2)

:::

A complexidade temporal do algoritmo é, em geral, $O((V + E) \log V)$.
Contudo, como $G$ é necessariamente ligado, $|E| > |V|$, pelo que podemos afirmar
(ainda que com a perda de algum rigor) que a complexidade temporal do algoritmo é
$O(E \log V)$. A complexidade é esta, visto que:

- Inicialização de `pi` e `distance`: $\Theta(V)$

- Inicialização da Min Priority Queue: $O(V)$

O ciclo `while` é percorrido $\Theta(V)$ vezes, com operação `extractMin` a levar
$O(\log V)$ tempo. Todas as arestas são percorridas durante o decorrer do algoritmo $O(E)$,
e a operação implícita de atualização da queue leva $O(\log V)$ tempo. Assim sendo,
podemos afirmar que, no total, a complexidade temporal do algoritmo é $O((V + E) \log V)$.

## Algoritmo de Kruskal

O algoritmo de Kruskal, já abordado em Matemática Discreta, é também bastante simples.
É mantido um conjunto, $S$, inicialmente com $|V|$ árvores (uma por vértice).
Cada árvore corresponde a um conjunto disjunto, um `set`, sem elementos repetidos.
$E$ é inicialmente ordenado por ordem crescente de peso dos seus arcos e, seguindo
essa mesma ordem, o algoritmo percorre todas as arestas de $E$. A cada momento, é
escolhida uma aresta $(u, v)$, e é verificado se atualmente $u$ e $v$ pertencem a
árvores diferentes em $S$ - se sim, as respetivas árvores são unidas (de modo disjunto,
mantendo a propriedade de `set`), e a aresta é adicionada à MST. Caso contrário, nada acontece.

:::details[Exemplo da aplicação do algoritmo]

Começamos com o grafo abaixo (note-se que já estamos no primeiro passo, em que foi
escolhido o arco $(h, g)$, com menor peso). Como atualmente $h$ e $g$ não pertencem
à mesma árvore, os respetivos sets são unidos, e $(h, g)$ é adicionado à MST.

![Exemplo da aplicação do algoritmo - 1](./assets/0006-kruskal-exemplo-1.svg#dark=2)

De seguida, temos 2 arcos com peso 2 - podemos escolher qualquer um, o algoritmo
escolhe $(c, i)$. Os vértices não pertencem à mesma árvore, pelo que as respetivas
árvores são unidas, e $(c, i)$ é adicionado à MST.

![Exemplo da aplicação do algoritmo - 2](./assets/0006-kruskal-exemplo-2.svg#dark=2)

Escolhemos, agora, o outro arco com peso 2, $(g, f)$. $g$ e $f$ não pertencem à mesma
árvore, pelo que as respetivas árvores ($\{g, h\}$ e $\{f\}$) são unidas, com $(g, f)$ adicionado à MST.

![Exemplo da aplicação do algoritmo - 3](./assets/0006-kruskal-exemplo-3.svg#dark=2)

O resto do algoritmo passa sempre por fazer a mesma coisa:

![Exemplo da aplicação do algoritmo - Intermédio](./assets/0006-kruskal-exemplo-4.svg#dark=2)

No passo abaixo, a aresta $(h, i)$ não é adicionada, já que $h$ e $i$ já pertencem à
mesma árvore - qualquer aresta a ser adicionada formaria um ciclo.

![Exemplo da aplicação do algoritmo - Final](./assets/0006-kruskal-exemplo-5.svg#dark=2)

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

A escolha greedy aqui é, claro, a escolha do arco de menor peso possível de entre
as que ainda não foram exploradas.

O algoritmo tem complexidade temporal $O(E \log V)$. Dissecando-o em pormenor, temos que:

- Realizamos $\Theta(V)$ operações de `makeSet` (com complexidade $O(1)$)

- Ordenados o conjunto $E$ por ordem crescente de peso, operação que leva $O(E \log E)$ tempo

São realizadas $O(E)$ operações de `findSet` e `union`. Recorrendo às estruturas de
dados certas[**\***](color:yellow), podemos afirmar que a complexidade temporal do
`for` loop é de $O(E \cdot\alpha(V))$, onde $\alpha(V)$ é uma função de crescimento
prolongado (sub-logarítmico). Visto que $E < V^2$, temos necessariamente que
$\log E = O(\log V)$, e que o algoritmo tem complexidade temporal $O(E \log V)$.

[**\***](color:yellow) As estruturas referidas podem ser encontradas mais abaixo.
São utilizadas, para além do algoritmo de Kruskal, no algoritmo de Tarjan para
encontrar $LCAs$ (_lowest common ancestors_).

:::details[Prova da Correção do Algoritmo]

Podemos provar por indução que, se $S$ é um conjunto de arestas escolhido pelo
algoritmo a qualquer momento do mesmo, então há pelo menos uma MST $T$ tal que $S \subseteq T$.

Começando pelo caso base, $S = \{ \}$, temos que $S \subseteq T$, já que o conjunto
vazio está contido em qualquer conjunto.

Podemos, então, partir para o caso geral - tenhamos então que estamos a explorar
uma dada aresta $e$, e que, segundo Kruskal, queremos adicioná-la:

- Caso $e$ forme um ciclo com $T$, a aresta não seria escolhida pelo algoritmo,
  pelo que a afirmação inicial mantém-se.

- Caso $T$ contenha $e$, a afirmação inicial mantém-se (é correto que o algoritmo a escolha).

- Caso $T$ não contenha $e$, $T + e$ contém necessariamente um ciclo (qualquer arco
  adicionado a uma MST gera um ciclo). O ciclo terá, necessariamente, de conter uma
  outra aresta, $f$, aresta essa que não está em $S$. Tal como na prova do algoritmo de Prim,
  o objetivo aqui passará por remover $f$ a $T$ e adicionar-lhe $e$, ficando assim
  com outra árvore abrangente, $T'$. Ora, se o peso de $f$ fosse menor que o de $e$, $f$
  já teria sido selecionada por Kruskal, pelo que $w(e) \leq w(f)$. Assim sendo,
  $w(T') \leq w(T)$. Como partimos de $T$ ser uma MST, então só podemos ter $w(T) = w(T')$,
  e portanto a adição de $e$ por Kruskal levará também a uma MST. A afirmação inicial mantém-se.

:::

### Estruturas de Dados para Conjuntos Disjuntos

Na secção imediatamente acima, foi referido que a complexidade do algoritmo de Kruskal
poderia ser drasticamente reduzida caso se recorresse às estruturas de dados certas.

Inventada em meados dos anos 60, a estrutura _Union-Find_ responde precisamente a
este problema em tempo ótimo. Foi descrita pela primeira vez por Bernard Galler e
Michael Fischer, num artigo para o _Journal of the ACM_, e passada cerca de uma
década Robert Tarjan (inventor, entre outros, do algoritmo que estudámos para encontrar
SCCs) provou que a complexidade temporal do algoritmo de união de conjuntos da estrutura
era majorada por $O(m \cdot \alpha(n))$, onde $\alpha$ corresponde à inversa da
[função de Ackermann](https://en.wikipedia.org/wiki/Ackermann_function#Inverse), sub-logarítmica.

A estrutura em questão mantém uma coleção de conjunto disjuntos dinâmicos, $S$, onde
cada conjunto é representado por um dos seus membros. É, aqui, relevante que o
representante seja o mesmo em qualquer momento do algoritmo - isto é, que um pedido
do representante de um conjunto seja **determinístico** para esse conjunto.
Precisaremos de suportar três operações principais para a manipulação da estrutura:

- `makeSet(x)`: cria um conjunto disjunto com um único membro, membro esse que, claro,
  fica como seu representante. Insere este novo conjunto em $S$.

- `findSet(x)`: retorna o representante do conjunto que contém o membro `x`.

- `union(x, y)`: une os conjuntos que contêm os membros `x` e `y`. A implementação
  abordada em aula leva a que o representante deste novo conjunto seja ou o representante
  do anterior conjunto de `x` ou do de `y`. Os dois conjuntos, agora irrelevantes, são removidos de $S$.

A estrutura em si possui várias implementações internas. Iremos nesta secção apenas
abordar a implementação utilizada no algoritmo de Kruskal, que recorre à noção de
floresta - $S$ é, aqui, uma floresta de conjuntos disjuntos, onde cada um dos seus
conjuntos corresponde a uma árvore _n-ária_. A raiz de cada árvore tem-se a si própria
como pai, e corresponde ao representante do conjunto em que está. Abaixo encontram-se
exemplos de árvores que podem representar conjuntos disjuntos nesta implementação:

![Conjuntos Disjuntos - Exemplo Árvores](./assets/0006-conjuntos-disjuntos-arvores.svg#dark=3)

À esquerda, podemos observar duas árvores de um hipotético conjunto $S$; à direita, o
resultado da união dos dois conjuntos. Parece então correto introduzir agora a
implementação (ainda não ótima) da estrutura com árvores:

- `makeSet(x)`: cria uma árvore cujo único vértice é `x`, sendo ele o seu próprio antecessor.

- `findSet(x)`: percorre os antecessores de `x` até encontrar o representante do conjunto em que se encontra.

- `union(x, y)`: a raiz de uma das árvores passa a apontar para a raiz da outra (observável na figura acima).

Em relação à complexidade temporal, contudo, estamos longe do ideal - $n$ chamadas
a `union` podem levar à criação de uma árvore linear de $n$ nós em cadeia, algo que
não queremos (a operação `findSet` levaria até $n$ subidas pela árvore, por exemplo).
Podemos, claro, melhorá-la, e vamos fazê-lo seguindo um par de heurísticas:

:::info[União por Categoria]

O representante de cada árvore mantém um majorante para o tamanho da árvore em que
se encontra, o `rank`. Aquando da união de duas árvores, a raiz da árvore mais
pequena passa a apontar para a raiz da maior, levando assim a uma complexidade temporal
$O(\log n)$ para `findSet`:

![FindSet Logarítmico](./assets/0006-findset-log.svg#dark=3)

Temos, claro, que aquando de `makeSet` o `rank` é inicializado a zero, e que a cada
união o `rank` da árvore maior pode ser aumentado (caso aumente com a introdução da
nova sub-árvore). Já que `findSet` corresponde a, na pior das hipóteses, subir a
árvore toda a partir de uma das folhas até a raiz, a sua complexidade é agora $O(\log n)$, com esta alteração.

:::

:::info[Compressão de Caminhos]

Cada operação `findSet` achata a árvore de procura que está a explorar, colocando
cada nó a apontar diretamente para o representante do conjunto.

![Findset - Compressão](./assets/0006-findset-compressao.svg#dark=3)

Podemos na imagem acima observar o antes e depois do efeito que a operação `findSet(a)`
tem na árvore - todas as procuras seguintes serão efetivamente realizadas em tempo constante.

:::

Postas estas duas heurísticas em prática, o pseudo-código das operações será:

```rust
makeSet(x)
  parent[x] = x
  rank[x] = 0

findSet(x)
  if parent[x] != x
    parent[x] = findSet(parent[x])
  return parent[x]

union(x, y)
  link(findSet(x), findSet(y))

link(x, y)
  if rank[x] > rank[y]
    parent[y] = x
  else
    parent[x] = y
    if rank[x] == rank[y]
      rank[y]++
```

Podemos notar que o próprio `union` chama, por definição, `findSet`, produzindo assim
resultados mais eficientes para várias chamadas sucessivas.

A execução de $m$ operações levará, então, $O(m \cdot \alpha(n))$ tempo. Visto que
para qualquer aplicação concebível para a estrutura o número de árvores iniciais é
menor que $10^{80}$, podemos considerar $\alpha(n) \leq 4$ (a prova encontra-se nos slides),
pelo que podemos até considerar o algoritmo linear para o número de operações requeridas.
Resta notar que apenas utilizando a união por categoria (sem compressão de caminhos),
a complexidade seria $O(m \cdot \log n)$, já assim bastante melhor que a original $O(mn)$.

:::details[Exemplo da aplicação de Union sucessivamente]

Tenhamos que inicialmente $S$ encontra-se assim:

![Conjuntos Disjuntos - Exemplo Início](./assets/0006-union-inicio.svg#dark=4)

Chamar sucessivamente `union(A, B)`, `union(B, C)`, `union(D, E)` e `union(F, G)` produzirá os seguintes resultados:

![Conjuntos Disjuntos - Exemplo Básico](./assets/0006-union-basico.svg#dark=4)

De seguida, é chamado `union(D, F)`. Para achatar a árvore, temos de chamar de novo `findSet`
com um dos nós para ver o efeito a ser produzido (numa possível chamada futura de
`union` um efeito semelhante seria observado).

![Conjuntos Disjuntos - Exemplo Intermédio](./assets/0006-union-intermedio.svg#dark=4)

Finalizamos ao unir as duas árvores finais, e a observar o achatamento (não completo)
da árvore resultante com uma chamada `findSet`:

![Conjuntos Disjuntos - Exemplo Final](./assets/0006-union-end.svg#dark=4)

:::

---

- [Notas Kruskal, Prim - Prof. José Fragoso](https://drive.google.com/file/d/1Wr_pz90HdpozQkmqrjHrpISow5oJnjrc/view?usp=sharing)
- [Notas Kruskal, Union-Find - Prof. José Fragoso](https://drive.google.com/file/d/1XhlrKXV241FoD4qjXO3Ql7r-0jDhJ4ok/view?usp=sharing)

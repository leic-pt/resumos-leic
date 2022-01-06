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

Podemos, claro, notar que a [BFS](./algoritmos-elementares#bfs---breadth-first-search) corresponde a um algoritmo deste género, que funciona para grafos não-pesados/com pesos uniformes.

:::info[Arcos com peso negativo]

Podemos, ao resolver problemas de caminho mais curto, depararmo-nos com arcos com peso negativo. Caso um grafo $G$ não contenha [**ciclos de peso negativo**](color:yellow) atingíveis a partir da fonte, temos que o peso do caminho mais curto entre a fonte e qualquer outro vértice atingível está **bem definido**, isto é, é sempre o mesmo, pelo que a existência de arcos de peso negativo não influencia o determinismo da solução. Caso contenha pelo menos um ciclo de peso negativo, não o podemos afirmar - tratando-se de um ciclo, podemos percorrê-lo infinitamente. Sendo o seu peso negativo, o "caminho mais curto" será tão mais curto (isto é, menos pesado) quantas mais vezes o percorrermos, chegando, no limite, a $-\infty$. Abaixo podemos encontrar um exemplo do mesmo, onde o caminho de $s$, fonte, ao vértice $z$ passa por um ciclo negativo:

![Caminho mais Curto - Ciclo Negativo](./assets/0005-ciclo-peso-negativo.png#dark=1)

O algoritmo de Dijkstra, abordado mais à frente, assume que o grafo-argumento não tem ciclos negativos. Pelo contrário, o algoritmo de Bellman-Ford permite que tal ocorra. Retorna uma resposta caso o grafo não contenha ciclos de peso negativo, caso contrário reporta a existência dos mesmos, sem devolver uma resposta.

:::

## Caminhos mais Curtos com Fonte Única

Esta secção irá abordar a identificação do caminho mais curto partindo de um vértice-fonte $s \in V$ a qualquer vértice $v \in V$. O algoritmo em questão permitirá resolver outros problemas, tais como:

- **Caminhos mais Curtos com Destino Único** (corresponde a inverter a direção de cada aresta e aplicar o algoritmo normal de caminhos mais curtos de fonte única).

- **Caminhos mais Curtos entre Par Único** (corresponde a identificar o caminho mais curto entre dois vértices).

- **Caminhos mais Curtos entre todos os Pares** (corresponde a uma generalização do último, em que encontramos o caminho mais curtos entre cada par de vértices do Grafo).

Serão abordados três algoritmos principais, com _use-cases_ diferentes consoante o grafo em mão:

- [**Algoritmo de Dijkstra**](color:orange), que não permite arcos com peso negativo.

- [**Algoritmo de Bellman-Ford**](color:yellow), que permite arcos com peso negativo e identifica ciclos negativos.

- [**Caminhos mais Curtos em DAGs**](color:green), que só permite grafos acíclicos.

### [Representação e Propriedades de Caminhos mais Curtos](color:orange)

Tenhamos $G = (V, E)$, um grafo dirigido e pesado, com função de pesos $w: E \to \R$. Assumimos que o mesmo não contém ciclos com peso negativo atingíveis a partir da fonte. Assim sendo, podemos afirmar que a sua [**árvore de caminhos mais curtos**](color:yellow) é um sub-grafo de $G$ dirigido, $G' = (V', E'), V' \subseteq V \wedge E' \subseteq E$, tal que:

- $V'$ corresponde ao conjunto de vértices atingíveis a partir de $S$ em $G$.

- $G'$ forma uma árvore com raiz em $s$ (a fonte).

- $\forall_{v \in V'}$, o único caminho de $s$ até $v$ em $G'$ é o caminho mais curto de $s$ até $v$ em $G$.

Podemos, claro, notar que os caminhos mais curtos não são necessariamente únicos, e, por consequência, nem as árvores de caminhos mais curtos o são. Abaixo temos um exemplo de duas árvores de caminhos mais curtos diferentes:

![Caminhos Mais Curtos - Árvores diferentes](./assets/0005-caminhos-mais-curtos-arvores-diferentes.png#dark=1)

Temos ainda que **todo o sub-caminho de um caminho mais curto é também um caminho mais curto**. Tenhamos, por exemplo, o caminho $p = (s, v_1, v_2, ..., v_k)$. Seja, ainda, $p_{ij}$ um sub-caminho de $p$, de $v_i$ até $v_j$. Podemos afirmar que $p_{ij}$ é um caminho mais curto de $v_i$ até $v_j$ em $G$, dado que, caso tal não acontecesse, poderíamos construir um caminho mais curto de $s$ a $v_k$, contradizendo a premissa de $p$ ser um caminho mais curto.

Podemos, decompondo um caminho, voltar definir uma recorrência para o seu peso. Tendo $p = (s, ..., u, v)$ e $p_{su}$ um caminho tal que $p$ pode ser decomposto em $p_{su} = (s, ..., u)$ e $(u, v)$, então $\delta(s, v) = \delta(s, u) + w(u, v)$:

- $p_{su}$ é um caminho mais curto de $s$ a $u$.

- $\delta(s, v) = w(p) = w(p_{su}) + w(u, v) = \delta(s, u) + w(u, v)$.

Podemos, por fim, afirmar que $\delta(s, v) \leq \delta(s, u) + w(u, v)$. Escrevemos $\leq$ em vez de $=$ porque pode haver um sub-caminho mais barato de $s$ a $v$ que não inclua necessariamente o arco $(u, v)$, como no exemplo abaixo:

![Sub-Caminho mais Barato](./assets/0005-sub-caminhos-mais-curtos.png#dark=1)

### [**Relaxação**](color:yellow)

Os algoritmos abordados mais abaixo irão recorrer à operação de **relaxação**. É mantido um vector, $d$, com $|V|$ elementos, onde para cada vértice $v \in V$ de $G = (V, E)$, $d[v]$ denota a estimativa atual do caminho mais curto de $s$ até $v$. Corresponderá a um **majorante** do peso do mesmo - isto é, se já sabemos que a melhor estimativa que temos é aquela, nunca iremos atualizar a mesma caso se trate de um custo mais caro. O algoritmo começa por inicializar todas as estimativas a $+\infty$, bem como todos os pais de todos os vértices a `Nil`:

```rust
InitializeSingleSource(G, s) // ocorre em \Theta(|V|) tempo
  for each v in V[G] do
    d[v] := +\infty
    pi[v] := Nil
  d[s] := 0 // temos, claro, que o custo de s a s é 0
```

**Relaxar** uma aresta $(u, v)$ consiste em verificar se podemos imediatamente melhorar a nossa estimativa atual do custo de $s$ a $v$ passando pela aresta $(u, v)$ - caso possamos, atualizamos tanto a nossa estimativa como o pai de $v$:

```rust
Relax(G, u, v, w) // ocorre em \Theta(1) tempo
  if d[v] > d[u] + w(u, v) then
    d[v] := d[u] + w(u, v)
    pi[v] := u
```

Abaixo encontramos exemplos de relaxação de arestas:

![Caminhos mais Curtos - Relaxação de Arestas](./assets/0005-caminhos-mais-curtos-relaxacao-arestas.png#dark=1)

No caso $(a)$, tinhamos que $d[u]$ tinha estimativa atual $5$ e que $d[v]$ tinha estimativa atual $9$. Assim, como a aresta que estávamos a ver tinha peso 2, atualizamos a estimativa de $v$ para $7$ e o pai de $v$ para $u$, já que deste modo temos uma estimativa mais barata em $v$. Por outro lado, em $(b)$, $d[u]$ tinha estimativa atual $5$ e $d[v]$ tinha estimativa atual $6$. Com uma aresta de custo 2, não faz sentido atualizar agora a estimativa de $v$ para $7$, pelo que nada acontece.

:::info[Propriedades da Relaxação]

- $d[v] \geq \delta(s, v), \forall_{v \in V}$ - a estimativa é atualizada ao longo do algoritmo, não podendo, contudo, ser menor que o custo final, seria uma contradição. Mais ainda, quando $d[v] = \delta(s, v)$, $d[v]$ nunca se voltará a alterar.

- Caso não haja um caminho de $s$ a $v$, $d[v]$ nunca será atualizado, mantendo-se portanto sempre a $+\infty$.

- Seja $p = (s, ..., u, v)$ um caminho mais curto de $s$ a $v$, passando por $u$. Se tivermos $d[u] = \delta(s, u)$ num qualquer momento anterior à relaxação de $(u, v)$, então $d[v] = \delta(s, v)$.

- De modo semelhante à propriedade anterior, tendo $p = (s, t, ..., u, v)$ um caminho mais curto de $s$ a $v$, se relaxarmos as arestas de $p$ pela ordem $(s, t)$, ..., $(u, v)$, então $d[v] = \delta(s, v)$. A propriedade mantém-se com quaisquer outras relaxações que se possam fazer posteriormente, dado que estas nunca poderão ter influência - já temos o custo mais baixo, nunca poderá ser mais baixo que isso.

:::

## Algoritmo de Dijkstra

O algoritmo de Dijkstra resolve o problema do **caminho mais curto de fonte única** para um grafo, $G=(V, E)$, pesado (função de pesos $w$) e dirigido, sem arcos negativos. Mantém um conjunto, $S$, de vértices cujo respetivo $\delta$ já foi calculado.

Trata-se de um [**algoritmo greedy**](color:green), cuja **escolha greedy** corresponde a selecionar sempre o vértice em $u \in V - S$ com menor estimativa de peso mais curto. $u$ é adicionado a $S$ e todas as arestas que originam de $u$ são relaxadas.

O algoritmo tem complexidade temporal no pior caso melhor que a do algoritmo de Bellman-Ford, abordado mais abaixo.

É utilizada uma **min priority queue**, $Q$, para ordenar os vértices de acordo com sua estimativa de peso mais curto.

```rust
Dijkstra(G, w, s)
  InitializeSingleSource(G, s) // ocorre em \Theta(V) tempo
  let S := new array
  let Q := new queue(V)
  while Q is not empty do // ocorre \Theta(V) vezes
    let u := extractMin(Q) // V vezes * O(logV) durante o algoritmo
    S.add(u)
    for each v in Adj[u] do // \Theta(E) vezes durante o algoritmo
      Relax(G, u, v, w(u, v))
```

A complexidade temporal total do algoritmo é, portanto, $\Theta((V + E) \cdot \log{V})$. Temos $E \cdot \log{V}$, não apenas $E$, já que por cada operação de relaxação, com a estimativa a ser atualizada, também temos de atualizar o vértice na queue - até $\log V$ por vértice. Esta operação está implícita no pseudocódigo.

:::details[Exemplo - Aplicação do Algoritmo]

Tenhamos o grafo abaixo:

![Caminhos mais Curtos - Dijkstra - Grafo, Exemplo 1](./assets/0005-caminhos-mais-curtos-dijkstra-grafo-exemplo-1.png#dark=1)

Temos, claro, que todos os vértices começam com estimativa $+\infty$, exceto $s$, com estimativa $0$.

O primeiro passo consiste em extrair $s$ de $Q$, adicionando-o a $S$, e passar por todas as suas adjacências, procurando relaxá-las. Neste caso, como tanto $u$ como $x$ têm estimativa atual $+\infty$, são ambos necessariamente atualizados, para $10$ e $5$, respectivamente. Como a estimativa de ambos é atualizada, também o respetivo pai é - $s$ fica pai de ambos. Fica ainda subentendido que, com a atualização das estimativas de cada vértice, a prioridade em $Q$ de cada um deles é também alterada.

![Caminhos mais Curtos - Dijkstra - Passo 2, Exemplo 1](./assets/0005-caminhos-mais-curtos-dijkstra-exemplo-1-passo-2.png#dark=1)

De seguida, $x$ é extraído de $Q$ (sendo uma _min_ priority queue e tendo o custo mínimo dentro dos vértices de $Q$, a escolha é natural) e adicionado a $S$. Tem três arestas que dele originam. $v$ e $y$ são atualizados normalmente, já que a sua estimativa é atualmente $+\infty$ (ficando, respetivamente, com pesos $14$ e $7$). $u$ é também atualizado, desta feita porque o seu peso atual, $10$, é maior que a estimativa agora proposta, $5 + 3 = 8$. O pai é também atualizado (agora $x$).

![Caminhos mais Curtos - Dijkstra - Passo 3, Exemplo 1](./assets/0005-caminhos-mais-curtos-dijkstra-exemplo-1-passo-3.png#dark=1)

Com estimativa menor atual associada, $y$ é o escolhido para ser extraído de $Q$. Tem apenas um arco que dele origina, para $v$, e a estimativa $7 + 6 = 13$ é menor que o seu custo atual, pelo que é atualizado.

![Caminhos mais Curtos - Dijkstra - Passo 4, Exemplo 1](./assets/0005-caminhos-mais-curtos-dijkstra-exemplo-1-passo-4.png#dark=1)

É, agora, extraído $u$, que tal como $y$ tem apenas um arco que dele sai, para $v$. A sua estimativa é de $8 + 1 = 9$, pelo que a estimativa de $v$ é atualizada.

![Caminhos mais Curtos - Dijkstra - Passo 5, Exemplo 1](./assets/0005-caminhos-mais-curtos-dijkstra-exemplo-1-passo-5.png#dark=1)

Por fim, $v$ é extraído, não havendo qualquer atualização feita. O grafo resultante fica então assim (as estimativas de cada vértice estão indicadas):

![Caminhos mais Curtos - Dijkstra - Passo 6, Exemplo 1](./assets/0005-caminhos-mais-curtos-dijkstra-exemplo-1-passo-6.png#dark=1)

Podemos, no fim, afirmar que o **caminho mais curto** que se pode fazer entre todos os vértices (com fonte em $s$) tem este aspeto (realçado a branco):

![Caminhos mais Curtos - Dijkstra - Caminho Final](./assets/0005-caminhos-mais-curtos-dijkstra-caminho-final.png#dark=1)

:::

:::details[Prova do Invariante do Algoritmo de Dijkstra]

Temos, como invariante do algoritmo de Dijkstra, que $d[u] = \delta(s, u)$ quando $u$ é adicionado a $S$, **e que esta igualdade é sempre verdade até ao fim do algoritmo**. Procuremos prová-lo (recorrendo ao absurdo):

Vamos então assumir que existe um qualquer vértice $u$ tal que $d[u] = \delta(s, u)$ não é verdade - isto é, que aquando da inserção de $u$ em $s$, a sua estimativa atual de custo não é a menor possível. Temos, claro, que esse vértice $u$ nunca poderá ser $s$ (pois $s$ é o vértice inicial, e o seu custo é invariavelmente zero, dado que estamos a trabalhar apenas com arestas não negativas). Além disso, no momento em que $u$ é adicionado a $S$, $S$ não está vazio, visto que se $s \neq u$ e $s$ é o primeiro elemento a ser adicionado a $S$, então este não se pode encontrar vazio aquando da inserção de $u$. Por fim, claro, existe necessariamente um qualquer caminho mais curto de $s$ a $u$, caso contrário teríamos que $d[u] = \delta(s, u) = +\infty$.

Vamos, então, supor que $u$ é o primeiro vértice tal que $d[u] \neq \delta(s, u)$ aquando da sua inserção em $S$. Além disso, tenhamos que $p = (s, ..., x, y, ..., u)$ é o caminho mais curto de $s$ a $u$. Para $d[u] \neq \delta(s, u)$, tem que existir um vértice de $p$ que ainda não tenha sido inserido em $S$, caso contrário eríamos obrigatoriamente $d[u] = \delta(s, u)$, já que o caminho mais curto teria sido completamente explorado, não havendo margem para dúvida.

Consideremos, então, o arco $(x, y)$ - um arco que liga dois vértices de $p$, com $x \in S \wedge y \notin S$. Como admitimos anteriormente que $u$ é o primeiro vértice em que $d[u] \neq \delta(s, u)$, temos que $d[x] = \delta(s, x)$. Além disso, temos que $d[y] = \delta(s, y)$, já que $(x, y)$ foi relaxado assim que $x$ foi adicionado a $S$. Temos ainda, necessariamente, que $\delta(s, y) \leq \delta(s, u)$, visto que $y$ precede $u$ em $p$.

Vamos agora adicionar $u$ a $S$. Como $y \notin S$, vamos inevitavelmente ter que $d[u] \leq d[y]$ - ora, mas como $d[y] = \delta(s, y)$, como referido acima, temos que $d[u] \leq \d[y] = \delta(s, y)$. Além disso, como $y$ aparece em $p$ antes de $u$, temos que $d[u] \leq \delta(s, y) \leq \delta(s, u)$, o que claramente contradiz o pressuposto de que $d[u] \neq \delta(s, u)$!

Fica, então, provado o invariante do algoritmo - para todo o vértice $v \in V$, aquando da sua inserção em $S$, $d[v] = \delta(s, v)$!

:::

Finalmente, depois de apresentado o algoritmo, podemos mostrar porque é que, aqui, só podemos ter grafos sem arestas negativas:

![Caminhos Mais Curtos - Dijkstra - Aresta Negativa](./assets/0005-caminhos-mais-curtos-dijkstra-aresta-negativa.png#dark=1)

Aqui, claro, o invariante não se verifica - $d(w) > \delta(s, w)$.

## Algoritmo de Bellman-Ford

O algoritmo de Bellman-Ford resolve o caso geral do problema dos caminhos mais curtos de fonte única, onde os arcos podem ter peso negativo. Indica, no fim, a existência (ou não) de ciclos negativos, sendo que, caso não existam, pode produzir ainda o caminho mais curto e os custos associados a cada vértice.

O algoritmo em si tem um aspeto bastante mais simples que o de Dijkstra: trata-se de operações de relaxação sucessivas, passando por todas as arestas do grafo $V$ vezes, com vista a atualizar gradualmente a estimativa de custo associado a cada vértice. Findas as relaxações, todas as arestas são percorridas, de modo a verificar se há algum ciclo negativo. O pseudocódigo é tal que:

```rust
BellmanFord(G, w, s)
  InitializeSingleSource(G, s)
  for each u in V do
    for each (u, v) in E do
      Relax(G, u, v, w(u, v))
  for each (u, v) in E do
    if d[v] > d[u] + w(u, v) then
      return false
  return true
```

A complexidade temporal do algoritmo é $\Theta(V) + \Theta(VE) + O(E) = \Theta(VE)$ (de realçar que o $\Theta(V)$ está associado a `InitializeSingleSource`). Como podemos notar, o algoritmo de Bellman-Ford é menos eficiente (do ponto de vista temporal) que o de Dijkstra, pelo que devemos recorrer a Dijkstra caso tenhamos a certeza que não há arestas negativas, a Bellman-Ford caso contrário.

:::info[Lema]

Seja $G = (V, E)$ um grafo pesado dirigido, com fonte $s$ e função de pesos $w$. Assumindo que não há ciclos negativos, após as $V$ iterações do primeiro loop do algoritmo de Bellman-Ford, temos que $d[v] = \delta(s, v), \forall_{v \in V}$ tal que $v$ é atingível a partir de $s$.

A prova baseia-se, claro, nas propriedades da relaxação. Começemos por considerar qualquer vértice atingível a partir de $s$, com $p = (v_0, v_1, ..., v_k)$ (com $v_0 = s \wedge v_k = v$) o caminho mais curto de $s$ a $v$ em $G$. Temos que $p$ é simples - tem, no máximo, $|V| - 1$ arcos, já que um caminho mais curto não passará por um vértice mais que uma vez, caso contrário estaríamos necessariamente na presença de um ciclo negativo. Cada arco é relaxado $|E|$ vezes. Temos, então, de procurar provar que $d[v_i] = \delta(s, v_i), \forall_{v_i \in V}$, após a iteração $i$ do primeiro loop de Bellman-Ford sobre os arcos de $G$, e que nunca se altera.

Provando por indução:

- $d[v_0] = \delta(s, v_0) = 0$, obrigatoriamente, já que $s$ = $v_0$. Temos, claro, que não se altera.

- assumindo que $d[v_{i - 1}] = \delta(s, v_{i - 1})$ após a iteração $i - 1$, temos que o arco $(v_{i - 1}, v_i)$ será necessariamente relaxado na iteração seguinte (já que sabemos que agora o arco "anterior" em $p$ já está relaxado), pelo que $d[v_i] = \delta(s, v_i)$ (e também não se alterará).

Esta prova foi retirada do livro que acompanha a cadeira, encontrando-se na página 673 do mesmo.

:::

Como [**corolário**](color:orange) do lema acima, podemos afirmar que só existe um caminho de $s$ a um qualquer vértice $v \in V$ caso, finda a execução do algoritmo de Bellman-Ford $d[v] \neq +\infty$.

:::details[Exemplo da aplicação do algoritmo]

Abaixo podemos observar um exemplo da execução completa do algoritmo de Bellman-Ford (passos de $a$ a $e$). A ordem de relaxação das arestas é, em cada iteração do loop, $(t, x), (t, y), (t, z), (x, t), (y, x), (y, z), (z, x), (z, s), (s, t), (s, y)$:

![Exemplo da aplicação do algoritmo](./assets/0005-caminhos-mais-curtos-bellman-ford-exemplo-1.png#dark=1)

Na primeira iteração, temos, claro, que as únicas arestas cuja relaxação provoca diferença nas estimativas são as que saem de $s$, já que são as únicas em que o vértice-fonte não tem estimativa $+\infty$. Na segunda, podemos notar que já há mais alterações. Relaxar $(t, x)$ provoca alterações em $x$, passando a sua estimativa para $11$ (que será já de seguida novamente alterada). Por outro lado, relaxar $(t, y)$ não provoca alterações ao custo de $y$, já que a sua estimativa é $7 < 6 + 8 = 14$. Relaxar $(t, z)$ provoca alterações ($\infty \to 2$), tal como $(y, x)$ ($11 \to 4$). Nenhuma das outras relaxações provoca diferenças. O resto das iterações do algoritmo não serão aqui detalhadas, visto que os passos a seguir são os mesmos (a diferença é quais as arestas cujo relaxamento _nessa vez_ provoca diferenças).

Podemos, por fim, notar que o algoritmo devolve `true`, já que não ocorrem ciclos negativos.

:::

:::info[Segundo Lema]

Se $G = (V, E)$ não contém ciclos negativos, o algoritmo retorna `true`, e `false` caso contrário. A primeira parte da afirmação é fácil de provar - caso não existam ciclos negativos, então é impossível que, no fim do algoritmo, $d[u] + w(u, v)$ seja menor que $d[v]$, visto que caso isso acontecesse o caminho não seria o mais curto. A segunda parte, contudo, pode parecer mais díficil à primeira vista. Procuremos uma prova por contradição, ou seja, admitir que o algoritmo retorna `true` mesmo havendo ciclos negativos. Ora, temos que Bellman-Ford só retorna `true` caso, $\forall (u, v) \in E, d[u] + w(u, v) \geq d[v]$. Dado que todas estas desigualdades são verificadas no último loop do algoritmo, podemos afirmar que as desigualdades [**ao longo do ciclo negativo**](color:yellow) (não confundir com durante todo o grafo) são dadas por:

$$
\sum_{i = 0}^k{d[v_i]} \leq \sum_{i = 0}^k{d[v_{i-1}]} + \sum_{i = 0}^k{w(v_{i-1}, v_i)}
$$

Ora, estando perante um ciclo, teremos que $\sum_{i = 0}^k{d[v_{i-1}]} = \sum_{i = 0}^k{d[v_i]}$ (cada vértice ocorre apenas uma vez em cada um dos somatórios). Este último ponto pode ser díficil de passar por escrito, por isso abaixo encontra-se uma imagem que pode ajudar a compreender esta afirmação:

![Ciclos Negativos Bellman-Ford](./assets/0005-ciclos-negativos-bellman-ford.png#dark=1)

Sendo eles iguais, podemos afirmar que:

$$
0 \leq \sum_{i = 0}^k{w(v_{i-1}, v_i)}
$$

Ora, isto claramente contradiz a existência de um ciclo negativo - ocorreria um ciclo negativo caso o resultado da soma fosse negativo. Conclui-se, então, que o algoritmo só retorna `true` caso não existam ciclos negativos!

:::

## Caminhos mais curtos em DAGs

O algoritmo para descobrir o caminho mais curto num DAG é ainda mais simples (e mais eficiente) que os de Dijkstra e Bellman-Ford. Sendo acíclico por definição, não nos teremos de preocupar com arestas negativas - caso estas existam, poderão provocar caminhos mais curtos, mas nunca ciclos negativos (visto que estamos a falar de DAGs).

A pedra basilar do algoritmo é a ordenação topológica dos vértices do grafo - com os vértices assim ordenados, o caminho mais curto será necessariamente relaxado de trás para a frente (seguindo a ordem topológica), pelo que nunca haverá o problema de termos de procurar relaxar arcos mais que uma vez (a prova desta afirmação encontra-se mais abaixo). O pseudocódigo do algoritmo é o seguinte:

```rust
DAG_ShortestPath(G, s)
    TopologicalSort(G)
    InitializeSingleSource(G, s)
    for each u in V, taken in topologically sorted order
        for each (u, v) in Adj[u]
            Relax(G, u, v, w(u, v))
```

Temos que a complexidade de `TopologicalSort` é $\Theta(V + E)$ e que a de `InitializeSingleSource` é $\Theta(V)$. Adicionalmente, o `for` loop exterior percorre todos os vértices ($\Theta(V)$), e cada aresta é percorridas apenas uma vez ($\Theta(E)$) ao longo do loop exterior; tendo em conta que `Relax` leva $O(1)$ tempo, então a complexidade total é $\Theta(V + E)$.

:::details[Exemplo da Aplicação do Algoritmo]

Consideremos o grafo cuja ordenação topológica é a seguinte:

![Ordenação Topológica](./assets/0005-caminhos-mais-curtos-dag-exemplo-1.png#dark=1)

Temos que na figura acima foi já aplicado `InitializeSingleSource`. Consideremos que a ordem de passagem pelos vértices é $A, B, C, D, E$. As arestas serão, então, relaxadas tal que:

![Relaxação - Vértice A](./assets/0005-caminhos-mais-curtos-dag-exemplo-1-passo-2.png#dark=1)

![Relaxação - Vértice B](./assets/0005-caminhos-mais-curtos-dag-exemplo-1-passo-3.png#dark=1)

![Relaxação - Vértice C](./assets/0005-caminhos-mais-curtos-dag-exemplo-1-passo-4.png#dark=1)

![Relaxação - Vértice D](./assets/0005-caminhos-mais-curtos-dag-exemplo-1-passo-5.png#dark=1)

![Relaxação - Caminho mais Curto (Final)](./assets/0005-caminhos-mais-curtos-dag-exemplo-1-passo-6.png#dark=1)

:::

**Podemos, no exemplo acima, reparar que o caminho mais curto vai sendo gradualmente relaxado, vértice a vértice**. Estando ordenados topologicamente, será impossível que o custo de um dado vértice possa, depois de explorado, vir a ser menor no futuro - os arcos estão de trás para a frente, é impossível voltar atrás. Contudo, nem todas as iterações têm de relaxar necessariamente uma aresta que faça parte do caminho mais curto - se tivéssemos, por exemplo, um vértice $X$ que viesse antes de $A$ na ordenação topológica, mas continuássemos a considerar $A$ como a fonte, a iteração que explorava as arestas que saíam de $X$ não contribuíria para o caminho mais curto, já que este vértice não é atingível a partir da fonte. Para provar que $\forall_{v \in V} d[v]  = \delta(s, v)$ no final do algoritmo, observemos o seguinte:

:::info[Prova da correção do Algoritmo]

Como consideração inicial, podemos notar que se um vértice $v$ não é atingível a partir de $s$, então $d[v] = \infty$ (tal como nos algoritmos de Dijkstra e Bellman-Ford). Suponhamos então que $v$ _é_ atingível a partir de $s$, com $p = (v_0, ..., v_k)$ um caminho mais curto de $s = v_0$ até $v = v_k$. Visto que os vértices serão exploradas pela sua ordem topológica, podemos garantir que os arcos que compõem $p$ são relaxados por ordem ($(v_0, v_1), ..., (v_{k-1}, v_k)$). Pela última propriedade abordada na [relaxação](./caminhos-mais-curtos#relaxação), podemos garantir que, para todas as iterações do loop do algoritmo, $i = 1, 2, ..., k, d[v_i] = \delta(s, v_i)$.

:::

:::tip[Curiosidade]

A título de curiosidade, podemos notar que o **caminho mais longo** entre dois vértices num grafo (assumindo que podemos atingir o vértice-destino a partir da fonte) pode ser obtido ao negar os pesos de todas as arestas, passar os $+\infty$ iniciais para $-\infty$ e, na operação de relaxação, trocar os $>$ por $<$! O caminho mais longo pode ser particularmente útil para, entre outros, calcular um minorante para a quantidade de tempo/operações que uma dada tarefa vai levar - daí o nome pelo qual também é conhecido, **caminho crítico**.

:::

---

<!-- TODO - ADD NOTES WHEN AVAILABLE  -->

- [Slides](https://drive.google.com/file/d/10QzxNY5Z2dHZLaYdyhG2S3-jTQwFjjgv/view?usp=sharing)
- [Notas Prof - Atualmente indisponíveis]()

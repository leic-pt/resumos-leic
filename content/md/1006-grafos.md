---
description: Cheat Sheet dos Grafos.
path: /md/cheatsheet/grafos
---

# Grafos 4 Dummies (Cheat Sheet)

```toc

```

Informação mais detalhada sobre o [Principío de Pombal](./0019-pombal)\
Informação mais detalhada sobre [Relacionamentos Estáveis](./0021-galeshapley)\
Informação mais detalhada sobre [Grafos Planares](./0024-grafoplanares)\
Informação mais detalhada sobre o [Algoritmo de Kuratowski](./0025-teoremakuratowski)\
Informação mais detalhada sobre [Autómatos](./0026-automatos)

## Grafos

Informação mais detalhada sobre [Grafos](./0018-grafos-def)

Um grafo é um par $g = (V,E)$, onde:

- $V$ é um conjunto de vértices finito e não vazio
- $E$ é o conjunto dos dos pares de vértices que estão ligados por uma **aresta**

- `Ordem do grafo`, $p$, é o número de vértices do grafo.
- `Tamanho do grafo`, $q$, é o número de arestas do grafo

Seja $g = (V,E)$,

$$
p = \#V\\
q = \#E
$$

#### Grau de um vértice

$g = (V,E)$. Para um vértice $v\in V$, o seu grau **em $g$** corresponde ao número de arestas de $g$ que incidem em $v$.  
$$\operatorname{deg}_g(v)$$

### Teoremas de Grafos

#### Teorema Fundamental da Teoria dos Grafos

Num grafo $g=(V,E)$, a soma dos graus dos seus vértices é igual ao **dobro** do Tamanho do grafo.

#### Teorema 2

Num grafo $g = (V,E)$, o número dos seus vértices ímpares é par.

#### Teorema 3 - Lei de Euler

Seja $g$ um [Grafo Planar](#grafo-planar), existe a seguinte relação:

$$
\text{Arestas}+2=\text{Vértices}+\text{Regiões}
$$

#### Teorema 4

Num grafo de $p$ vértices e $k$ [componentes](#Componentes), o nº de arestas $(q)$ é tal que:

$$
p-k\leq q \leq \frac{(p-k+1)(p-k)}{2}
$$

#### Teorema 5

Se um grafo de $p$ vértices tem mais de $\frac{(p-1)(p-2)}{2}$ arestas, então é [conexo](#grafo-conexo).

### Definições

#### Grafo Regular

Um grafo diz-se regular se todos os seus **vértices têm o mesmo** grau.

#### Grafo Completo

Um grafo diz-se completo quando cada par de vértices constitui uma aresta (está tudo ligado).

- Todo o grafo completo de $k$ vértices é $k$-1 regular
- $\binom{p}{2} = \frac{p(p-1)}{2}$ é o número máximo de arestas que um grafo pode ter
- $K_n \rightarrow$ grafo completo de $n$ vértices

#### Rede

Uma Rede é um grafo onde as arestas têm valores reais associados.

#### Multigrafo

É uma rede com arestas com apenas números naturais.

#### Aberto e Fechado

Um atalho, caminho, trajetória é fechado se o primeiro e o último vértice coincidirem. Se não coincidirem é aberto.

#### Caminho

Caminho é uma seguimento alternado de vértices e arestas.

#### Atalho

Caminho que não repete arestas.

#### Trajetória

Caminho que não repete vértices.

#### Ciclo

Atalho (caminho que não repete vértices) fechado com pelo menos 3 arestas.

#### Vértice Conectados

2 vértices em que existe um caminho entre eles.\
Também se considera se os vértices forem iguais.

#### Grafo Conexo

É conexo se quaisquer dois vértices do grafo estiverem conectados.

#### Ponte

Aresta de um grafo, que, se for removida, aumenta o número de componentes.

#### Componente

$h$ é uma componente de um grafo $g$, se $h$ for um grafo [conexo](#grafo-conexo) de $g$ e **não for** subgrafo de nenhum outro subgrafo conexo de $g$.

#### Grafo Planar

Grafo que é possível desenhar sem cruzar arestas.

## Grafos Eulerianos

Informação mais detalhada sobre [Grafos Eulerianos](./0020-labirintos)

### Definições

#### Atalho Euleriano

Percorre todos os vértices e arestas sem repetir arestas.

#### Multigrafo Euleriano

Tem um circuito euleriano (atalho euleriano fechado).

#### Multigrafo Atravessável

Tem uma travessia euleriana (atalho euleriano aberto).

### Teoremas Eulerianos

#### Teorema 1 - Teorema de Euler-Hierholzer

Um multigrafo é euleriano se e só se é [conexo](#grafo-conexo) e todo o seu vértice é par.

#### Teorema 2

Um multigrafo é atravessável se e só se tem apenas dois vértices ímpares.  
Para além disso, o **atalho Euleriano aberto** começa e acaba nos vértices ímpares, onde o primeiro é diferente do último.

#### Teorema 3 - Teorema de Euler

Se tivermos um grafo que não seja **Euleriano**, podemos **duplicar** cada aresta e dessa maneira todos os vértices terão grau par, assim já é **Euleriano**.  
**NOTA**: Outra solução é percorrer cada aresta duas vezes, em vez de duplicar.

#### Teorema 4 - Teorema de Lucas

Um multigrafo $\mathcal G$ **conexo** com $2n$ vértices _ímpares_ pode ser descrito por exatamente $n$ atalhos abertos que não partilham arestas.

#### Teorema 5 - Teorema de Tarry

Iniciando um caminho num grafo [conexo](#grafo-conexo) qualquer, e seguindo as regras do [Algoritmo de Tarry](#algoritmo-de-tarry), regressaremos ao vértice inicial, depois de ter percorrido cada aresta do grafo $2$ vezes em sentidos opostos.

## Algoritmos

### Algoritmo de Fleury

Com este Algoritmo consegue-se percorrer um **atalho euleriano fechado** num **multigrafo euleriano**.

1. Começa-se num vértice qualquer
2. Se houver mais que $1$ aresta possível a percorrer, escolhe-se uma que não seja [ponte](#ponte) \
   (não interessa qual, desde que não seja uma [ponte](#ponte))
3. Só se atravessam as [pontes](#ponte) em último caso (quando já não há mais arestas disponíveis).

#### Algoritmo Fleury - Multigrafo Atravessável

O **Algoritmo de Fleury** foi concebido para **multigrados eulerianos**.  
Mas, também o podemos aplicar, **informalmente**, em **multigrafos atravessáveis**.

Para isso, basta **começar num vértice ímpar**, é a única mudança no Algoritmo.\
 Mas, neste caso, não vamos acabar no mesmo vértice, mas sim no outro vértice ímpar.\
Reparem que, se, num **multigrafo atravessável**, ligarmos os dois vértices ímpares com uma aresta, ficamos com um **multigrafo euleriano**.\
 Nesse caso, já poderíamos acabar no vértice inicial.

#### Desvantagens

Não funciona em Labirintos se não os conhecermos, uma vez que nesses caso não sabemos se uma aresta (caminho do Labirinto) é [ponte](#ponte) ou não.

### Algoritmo de Trémaux

Com as regras deste Algoritmo, qualquer um pode sair de qualquer labirinto.

Passamos agora à descrição do Algoritmo:

1. Sempre que chegamos a um vértice não visitado anteriormente, seguimos por uma aresta também não percorrida, qualquer.

2. Sempre que chegarmos a um vértice através de uma aresta ainda não percorrida anteriormente, se chegarmos a um vértice já visitado ou a um beco sem saída, voltamos para o vértice de onde viemos pela aresta.

3. Sempre que chegarmos a um vértice através de uma aresta que já tinha sido percorrida anteriormente e chegarmos a um vértice já visitado, escolhemos a aresta ainda não percorrida que incide no vértice. Se não existir, escolhemos percorrer uma aresta que já tenha sido percorrida apenas **uma** vez.

### Algoritmo de Tarry

Se chegarmos a um vértice, escolhemos continuar por qualquer aresta que não tenha sido percorrida $2$ vezes, com exceção da aresta onde chegamos pela primeira vez ao vértice atual.

Só percorremos essa aresta em último caso, ou seja,\
 se for um beco sem saída, ou se as outras arestas já tiverem sido percorridas $2$ vezes.

## Árvores

Informação mais detalhada sobre [Árvores](./0022-kruskraldijkrsta)

#### Árvore

Grafo [conexo](#grafo-conexo) que não tem ciclos.

### Teoremas de Árvores

#### Teorema 1

Se $T$ é uma árvore de [ordem](#grafos) $p$ e [tamanho](#grafos) $q$, então

$$q = p-1$$

#### Teorema 2

Um grafo $g$ de [ordem](#grafos) $p$ é uma árvore, se e só se é [conexo](#grafo-conexo) e tem tamanho $q=p-1$.

### Definições

#### Árvore de cobertura

Seja $g$ um grafo, $T$ é a sua **Árvore de Cobertura** se:

- É uma árvore
- É um subgrafo de $g$ que contém todos os vértices

#### Custo de árvore

Dada uma [rede](#rede) $(V,E,c)$, o custo de uma árvore de cobertura $T$ da [rede](#rede) é\
 o **somatório** de todos os valores das arestas de $T$.

#### Árvore de cobertura mínima

Árvore de cobertura de uma [rede](#rede) $R$, cujo [custo](#custo-de-arvore) é **menor ou igual** ao\
 custo de qualquer outra Árvore de cobertura de $R$.

#### Árvore Económica

Árvore de cobertura construída através do [Algoritmo de Kruskal](#algoritmo-de-kruskal).

## Algoritmos

### Algoritmo de Kruskal

O resultado final é uma [Árvore Económica](#arvore-economica), que também será uma Árvore de Custo mínimo.

Também se pode usar o Algoritmos de Kruskal para encontrar uma árvore de cobertura máxima, basta ir assinalando as arestas pela ordem inversa (1º as que têm valor máximo).

[Exemplo 1](https://drive.google.com/file/d/1oZJCHj62aIndGWDfr7hDtphEoAo3VAzE/view?usp=sharing)  
[Exemplo 2](https://drive.google.com/file/d/1Vn6dirZylPZy4x81Q5-lnQtvHKqP2Wpd/view?usp=sharing)

### Algoritmo de Dijkstra

O resultado final será uma `Árvore de Cobertura`, onde para cada $v_i$, $\operatorname{F}(i)$ é o `custo mínimo possível`.

[Exemplo 1](https://drive.google.com/file/d/1NqX_csh6u_Yagpr2GJe15PGhaM24tA1s/view?usp=sharing)  
[Exemplo 2](https://drive.google.com/file/d/1lE08JD2B-MQaauCKmA55K1ZfnLh-UU7z/view?usp=sharing)  
[Exemplo 3](https://drive.google.com/file/d/1Z05NeIE4AHG4kb6qV6miBkosfe8kflgG/view?usp=sharing)

## Fluxos

Informação mais detalhada sobre [Fluxos](./0023-teoriadofluxo)

### Definições

#### Fonte

Uma fonte num digrafo [conexo](#grafo-conexo) $G$ é um vértice com grau de entrada nulo.

#### Sumidoro

Um subidouro num digrafo [conexo](#grafo-conexo) G é um vértice com grau de saída nulo

#### Digrafo

Grafo dirigido, todas as arestas têm orientação.\
Um digrafo-$s$-$t$ é um digrafo com `fonte` $s$
e `semidouro` $t$

![ponteeuclidiana](./imgs/1006-euc.png#dark=1)

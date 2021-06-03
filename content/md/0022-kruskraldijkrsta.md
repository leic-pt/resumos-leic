---
path: /md/kruskal-dijkstra
---

# Kruskal e Dijkstra

## Definições e Teoremas

### Árvore

Grafo conexo que não tem ciclos

::: details Exemplo

![Árvore Exemplo](./imgs/0022-arvEx.png)

:::

### Teorema 1

Se $T$ é uma árvore de ordem $p$ e tamanho $q$, então

$$q = p-1$$

::: tip Relembrar

Ordem de um grafo $(p)$

- Número de vértices

Tamanho de um grafo $(q)$

- Número de arestas

:::

### Teorema 2

Um grafo $g$ de ordem $p$ é uma árvores, se e só se é conexo e tem tamanho $q=p-1$.

### Árvore de cobertura

Seja $g$ um grafo, $T$ é a sua `Árvore de Cobertura` se:

- É uma árvore
- É um subgrafo de $g$ que contém todos os vértices

::: details Exemplo

![Cobertura Exemplo](./imgs/0022-arcCobEx.png)

:::

### Custo de árvore

Dada uma `Rede` $(V,E,c)$, o custo de uma árvore de cobertura $T$ da `Rede` é o **somatório** de todos os valores das arestas de $T$.

::: tip Relembrar
`Rede` é um grafo com um valor real associado a cada aresta.
:::

::: details Exemplo

![Custo Exemplo](./imgs/0022.custoEx.png)

O custo da árvore representada é $21.1$

:::

### Árvore de cobertura mínima

Árvore de cobertura de uma Rede $R$, cujo [custo](#custo-de-arvore) é **menor ou igual** que o custo de qualquer outra Árvore de cobertura de $R$.

### Árvore Económica

Árvore de cobertura construída através do [Algoritmo de Kruskal](#algoritmo-de-kruskal).

## Algoritmos

### Algoritmo de Kruskal

::: details Pseudo-Código

![Kruskal Pseudo](./imgs/0022-kruskalPseudo.png)

:::

#### Descrição Informal

Assinalam-se sempre as arestas de custo mínimo, se **não** formarem ciclos. Caso forme um ciclo, a aresta é identificada e ignorada durante resto da execução do Algoritmo.  
O `Algoritmo de Kruskal` termina quando todas as arestas já foram analisadas. Tanto podem estar assinaladas ou identificadas como arestas que completam ciclos.  
O resultado final é uma [Árvore Económica](#arvore-economica), que também será uma Árvore de Custo mínimo.

::: tip NOTA

Por convenção, só se deve identificar arestas que formam ciclos, quando o valor dessa aresta for o mínimo das arestas ainda por analisar.

:::

::: details Exemplos:

[Exemplo 1](https://drive.google.com/file/d/1oZJCHj62aIndGWDfr7hDtphEoAo3VAzE/view?usp=sharing)  
[Exemplo 2](https://drive.google.com/file/d/1Vn6dirZylPZy4x81Q5-lnQtvHKqP2Wpd/view?usp=sharing)  
:::

Também se pode usar o `Algoritmos de Kruskal` para encontrar uma `árvore de cobertura máxima`, basta ir assinalando as arestas pela ordem inversa (1º as que têm valor máximo).  
No entanto, esse método **não** pode ser chamado `Algoritmo de Kruskal`, é apenas uma adaptação

#### Teorema - Correção de Kruskal

::: warning AVISO
Mais um Teorema, cuja Demonstração é importante saber para preparar a Demonstração que sai no teste
:::

Uma [Árvore Económica](#arvore-economica) de uma Rede é sempre uma árvore de custo mínimo dessa Rede.

::: details Demonstração

Seja $N=(V,E,c)$ uma Rede, $T$ uma Árvore Económica construída com o `Algoritmo de Kruskal` e $T_0$ a árvore de custo **mínimo** (é conhecida).

Através do [Teorema 1](#teorema-1), sabe-se que $T$ e $T_0$ têm $p-1$ arestas ($p$ é o número de vértices da Rede $N$).  
Seja $a_1,\dots,a_i,\dots,a_{p-1}$ a sequência de arestas de $T$ assinaladas através do Algoritmo de Kruskal.  
Seja $a_i$ a **primeira** aresta que pertence a $T$ e não pertence a $T_0$. Se adicionarmos $a_i$ a $T_0$, ficaríamos com um `ciclo` em vez de uma árvore, porque ficávamos com $p$ arestas, e, novamente pelo [Teorema 1](#teorema-1), uma árvore só pode ter $p-1$ arestas.  
Nesse ciclo, há necessariamente uma aresta, $a_k$, que não pertence a $T$, se removermos $a_k$ de $T_0$ ficamos com uma nova árvore, $T_0'$.

$$T_0' = T_0+a_i-a_k$$

**Importante** (chave do Teorema)  
No `Algoritmo de Kruskal` escolhe-se sempre as arestas por ordem **crescente** do valor. Por isso, se $a_k$ não está em $T$ e todas as arestas até $a_i$ estão em $T$ e $T_0$ (foram feitas sempre as mesmas escolhas), das duas uma:

- $a_k$ e $a_i$ têm o mesmo custo, mas se escolhermos uma delas a outra completará um ciclo, e para $T$ escolheu-se $a_i$, ficando $a_k$ de fora
- Custo de $a_k$ é superior, e as escolhas que foram feitas para $T$ fizeram com que $a_k$ completa-se um ciclo

Em suma, é **impossível** que o custo de $a_k$ seja inferior ao de $a_i$.

Relembrando que $T_0$ é a árvore de **custo mínimo**, sabemos que:

- $\operatorname{c}(T_0')\geq \operatorname{c}(T_0)$
- $\operatorname{c}(T_0') = \operatorname{c}(T_0)+\operatorname{c}(a_i)-\operatorname{c}(a_k)$
- $\operatorname{c}(a_i)\leq \operatorname{c}(a_k)$

Pelas condições apresentadas, conclui-se que a única solução possível será quando $\operatorname{c}(a_i) = \operatorname{c}(a_k)$, então $\operatorname{c}(T_0')=\operatorname{c}(T_0)$.

Repare-se que $T_0'$ e $T$ têm mais uma aresta em comum, $a_k$, do que $T_0$ e $T$.

Este processo é **recursivo**. Seja $T_k$ a árvore com custo igual a $T_0$ que se obtém no final de processo descrito acima, por exemplo, agora teríamos $T_k=T_0'$.  
Se fossemos aplicando o processo para cada $T_k$ ($T_k$ seria agora o novo $T_0$), para todas as arestas que restam de $T$ $(a_{i+1},\dots$ $a_{p-1})$, ignorando as arestas que já são comuns, no final, o último $T_k$ será igual a $T$ e como o custo de $T_k$ é igual ao de $T_0$, **concluí-se** que $T$ também será uma `Árvore de custo mínimo`.

QED

:::

### Algoritmo de Dijkstra

Este Algoritmo resolve o Problema da Trajetória mínima.

::: details Pseudo-Código

![Dijkstra Pseudo](./imgs/0022-dijkstraPseudo.png)

:::

#### Descrição Informal

Seja $v_1$ o vértice de partida, $S$ o conjunto de arestas, ainda não percorridas, que **não** fazem ciclos e que incidem nos vértices já percorridos (vamos chamar ao conjunto de vértices já percorridos $Q$).  
Seja $\operatorname{F}(i)$ uma função que atribui a um vértice $v_i$, já percorrido, o custo necessário para lá chegar.

No início $Q=\{v_1\}$, por isso, escolhe-se a aresta que incide em $v_1$ com menor valor associado.  
Agora $\#Q>1$, por isso, em vez de escolhermos a aresta com menor valor disponível em $S$, escolhemos uma aresta que incida num novo vértice $v_k$, tal que ,**de todos os vértices ainda por explorar**, $\operatorname{F}(k)$ é o mínimo de todos os $\operatorname{F}(i)$ desse conjunto.  
O Algoritmo termina quando tivermos um custo associado a todos os vértices.

O resultado final será uma `Árvore de Cobertura`, onde para cada $v_i$, $\operatorname{F}(i)$ é o `custo mínimo possível`.

::: details Exemplos

[Exemplo 1](https://drive.google.com/file/d/1NqX_csh6u_Yagpr2GJe15PGhaM24tA1s/view?usp=sharing)  
[Exemplo 2](https://drive.google.com/file/d/1lE08JD2B-MQaauCKmA55K1ZfnLh-UU7z/view?usp=sharing)  
[Exemplo 3](https://drive.google.com/file/d/1Z05NeIE4AHG4kb6qV6miBkosfe8kflgG/view?usp=sharing)

:::

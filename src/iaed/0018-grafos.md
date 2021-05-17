---
description: Tabelas e Vetores.
---

# Grafos

[[toc]]

## Definição e Representação

- Constituído por um conjunto V de vértices (nó) e E de arcos (aresta).
  - Arco liga 2 vértices
  - Vértice pode estar ligado a qualquer número de outros bértices

### Grafo de um node

- O grau de 1 vértice (d,degree) contabiliza o números de ligações de 1 vértice.

- O g...

#### Grafo orientado

- As suas arestas têm direções (->)

#### Grafo Pesado

- As arestas têm valores

#### Grafo Acíclicos Orientados

- Para qualquer vértice v, não há nenhum caminho começando e acabando em v.

#### Grafo Conexo

- Para quaisqueres vértices v e u, há sempre o caminho a ligar u e v.

#### Grafo Bi-conectado

- Para qualquer vértice v, se removemos v, o grafo continua conexo.

### Representação

- Matriz Adjacente

- Listas

- Grafo não orientado

### Vantagens e Desvantagens

Vantagens

- Representação mais adequada quando:

  - Há espaço disponível
  - Grafos são densos
  - Algoritmos requerem mais de $V^2$ operações

- Adição e remoção de arcos é feita de forma eficiente

- Fácil evitar existência de arcos paralelos (repetidos)

- Fácil determinar se ...

Desvantagens

- Grafos esparsos de grande dimensão requerem espaço de memória proporcional a $V^2$

- Neste caso, ...

Lista de Adjacências
Vantagens

- Inicialização a ....

Desvantagens

- Arcos paralelos e adjacência entre vértices

Representações Alternativas

- 3 mecanismos básicos de representação de grafos

  - Vector de arcos (pouco comum)
  - Matriz de adjacências
  - Lista de adjacências

- Produzem diferentes desempenhos ao nível das operações de manipulação

- Escolha deverá depender ...

#### Desempenho

## Algoritmos de Exploração/Procura em Grafos

- Quero saber todas as páginas da WWW. (web crawling)

- Quero os meus amigos no facebook (se os tiveres), e os amigos dos meus amigos, e amigos dos amigos do amigos dos amigos dos amigos dos amigos dos amigos...

- Propargar mensagens numa rede

- AI, puzzles e labirintos :D

### Algoritmos de Procura em Grafos

- Dado um vértice origem/fonte

- Visitar todos os vértices atingíveis a partir da origem

  - Todos os vértices que estão em qualquer caminho do grafo que comece na origem

- A ordem pela qual os vértices são visitados depende do tipo de procura

- Procurar em grafos é equivalente a percorrer labirintos

  - Necessário marcar pontos já visitados
  - Ser-se capaz de recuar, num caminho efectuado, até ao ponto de partida

- Os vários algoritmos de procura em grafos limitam-se a executar uma determinada estratégia de procura em labirintos
  - Procura em profundidade primeiro (DFS - "Depth-first-search")
  - Admite 2 implementações: recursiva e com uso de pilha explícita
  - Substituindo a pilha por um FIFO ...

#### Porcura em Largura Primeiro (BFS)

BFS - Breadth-First Search

- Visita os vértice por ordem da sua distância à origem
- Vértice mais próximos são visitados em 1º lugar

  - Vértices não atingíveis a partir da origem, não são visitados

- Dados $G = (V,E)$ e vértice $s$, BFS explora sistemtaticamente vértices fe $G$ para descobri todos os vértices atingíveis a partir de $s$
  - Cálculo da distância: menor número de arcos de $s$ para cada vértice atingível
  - Identificação de árvore BF: caminho mais curto de $s$ para cada vértice atingível $v$
- ...

- Aplicações
  - Encontrar todos os nós de uma componente conexa.
  - Encontrar todos os caminhos mais curtos entre 2 nós, ...

<img src="./assets/0016-fun.png" alt="disp" class="invert-dark2">

Slides:

- [Aula 19](https://drive.google.com/file/d/1YBSPqEe4hLfTO3Th1F0TeISqUb_N0JAs/view?usp=sharing)

---
title: Resolução de Problemas com Procura
description: Algoritmos de Procura Não Informada
# TODO: add more to the description
path: /ia/resolucao-procura
type: content
---

# Resolução de Problemas com Procura

```toc

```

Nesta secção vamos explorar mais a ideia de agentes baseados em objetivos, focando-nos num subtipo em particular: os **agentes que resolvem problemas**.

## Problem-Solving Agents

Em particular, temos que _problem-solving agents_ devem, ao contrário de outros tipos de agentes mais elementares, poder considerar ações futuras (e as respetivas consequências).
Ora, tendo um **objetivo** estabelecido (objetivo esse gerado a partir do estado final onde queremos chegar, tendo em conta um conjunto de medidas de performance), encontrar a forma ótima de o atingir nem sempre é trivial, acabando frequentemente por requerer estratégias de **procura** adequadas à situação em que o agente se encontra.
De forma sucinta, dizemos que essa "forma ótima de o atingir" corresponde à sequência de ações que o agente terá sucessivamente de tomar por forma a satisfazer o objetivo.

O exemplo clássico utilizado para explicar o funcionamento-base deste tipo de agentes é o problema **Arad-Bucareste**.

:::tip[Arad-Bucareste]

Considere-se um casal que está de férias em Arad, na Roménia. Amanhã têm de apanhar o avião de volta para Lisboa, em Bucareste, e têm de decidir a melhor forma de lá chegar - neste caso, definimos _melhor forma_ como o caminho mais barato (com menor custo/km). Ora, considere-se o seguinte grafo, onde cada arco (estrada) é pesado consoante o custo de fazer o trajeto entre os vértices (cidades) que liga:

![Grafo Roménia (c/ custos associados)](./imgs/0002-romania-graph.svg#dark=2)

Uma procura relativamente simples, _a olho_, levar-nos-ia à conclusão que o caminho com menor custo que liga Arad a Bucareste é o caminho

$$
\text{Arad} \to \text{Sibiu} \to \text{Rimnicu Vilcea} \to \text{Pilesti} \to \text{Bucareste}
$$

Um agente não consegue, claro, fazer "pesquisas a olho": precisa de uma **estratégia de procura** adequada para encontrar a sequência pretendida (as estratégias serão abordadas mais à frente). Por fim, executa-se a sequência de ações obtida pelo agente pela ordem obtida.

Como nota adicional, podemos afirmar que o ambiente em questão é **estático**, **completamente observável**, **discreto** e **determinístico**.

:::

A partir do exemplo anterior, podemos indiretamente enunciar **5 pontos-chave** para a formulação (e posterior resolução) de problemas através destes agentes:

- o **estado inicial**: no caso do exemplo anterior, o agente encontra-se inicialmente em Arad;
- as **ações que o agente pode tomar**, considerando o seu estado atual. Em relação ao exemplo anterior, o agente pode, partindo de Arad, decidir ir para Zerind, Sibiu ou Timisoara;
- um **modelo de transição**, que retorna o estado resultante de executar uma dada ação partindo de um certo estado. Estando em Arad e tomando a ação `Ir(Sibiu)`, o agente passa a estar em Sibiu, sendo portanto Sibiu o estado retornado pelo modelo de transição nessa situação;
- um **teste objetivo**, um teste simples que nos diz se um dado estado é ou não um estado objetivo. A resposta do teste à pergunta "Siriu é um estado objetivo" seria negativa, claro, já que o objetivo é apenas Bucareste;
- um **custo caminho**, uma função que atribui um custo numérico a cada caminho (consideramos aqui caminho como um todo). Este custo está dependente das medidas de performance pretendidas - no caso Arad-Bucareste podemos escolher custos como distâncias em km, tempo gasto, entre um leque de outras opções possíveis.

Pegando nestes cinco pontos, podemos criar o pseudocódigo correspondente a um agente que resolve problemas relativamente simples:

```bash
function simple_problem_solving_agent(perception)
  static sequence = [] # sequência de ações a executar
  static state # descrição do estado atual
  static goal # descrição do objetivo, inicialmente não definido
  static problem = [...] # formulação do problema

  state = update_state(state, perception)
  if sequence is empty then # lembrar que a sequência é static
    goal = formulate_goal(state)
    problem = formulate_problem(state, goal)
    sequence = search(problem)
    if sequence is empty then
      return "I don't know how to solve this problem"
  action = sequence.first
  sequence = sequence.rest
  return action
end
```

## Procura Cega/Não Informada

Procura cega ou procura não informada, tal como o nome indica, trata-se de fazer uma procura **sem informação do que vem a seguir**. Os algoritmos de procura cega que aprendemos foram:

### BFS

A procura em largura expande o nó de menor profundidade na
fronteira. Ou seja, visita os nós de uma dada profundidade e expande-os gerando os nós da próxima profundidade que apenas serão visitados assim que todos os da atual tiverem sido visitados.

Propriedades ($b$ é o fator máximo de ramificação, $d$ é a profundidade da solução de menor custo):

- Completa: Sim, se $b$ for finito
- Complexidade Temporal: $b+b^2+b^3+...+b^d=O(b^d)$
- Complexidade Espacial: $O(b^d)$
- Ótima: Sim, se o custo do caminho não diminuir ao aumentar a profundidade (Por exemplo custo de todas as ações igual a $1$). Em geral, não é ótima.

### DFS

A procura em profundidade expande o nó na fronteira com a maior profundidade. Ou seja, percorre o caminho completo e volta para trás assim que deixa de haver um caminho possível.

Propriedades:

- Completa: Não, visto que pode haver profundidades infinitas ou ciclos
- Complexidade Temporal: $O(b^m)$ ($m$ é a profundidade máxima)
- Complexidade Espacial: $O(b*m)$
- Ótima: Não

### DFS Limitada

Uma DFS em que existe uma profundidade limite onde não se consegue expandir nenhum dos nós.

Propriedades:

- Completa: Não, a solução pode estar fora do limite.
- Complexidade Temporal: $O(b^l)$ ($l$ é a profundidade limite)
- Complexidade Espacial: $O(b*l)$
- Ótima: Não

### DFS Iterativa

Consiste em várias DFS iterativas. A primeira com limite $1$, de seguida com limite $2$, etc.

Propriedades:

- Completa: Sim
- Complexidade Temporal: $O(b^d)$
- Complexidade Espacial: $O(b*d)$
- Ótima: Sim, se o custo de cada ação for igual a $1$

### Procura Custo Uniforme

A procura de custo uniforme, escolhe para visitar o nó com o menor custo no caminho até ele. Caso todas as ações tiverem o mesmo custo é equivalente à BFS.

Propriedades:

- Completa: Sim, se o custo do ramo $\ge \varepsilon$
  - $\varepsilon$ é uma constante $> 0$, para evitar ciclos em ramos com custo $0$
  - Custo do caminho aumenta sempre com a profundidade
- Complexidade Temporal: TBA
- Complexidade Espacial: TBA
- Ótima: Sim, porque os nós são expandidados pela ordem de custo

---

Resta realçar que caso queiram recordar com mais pormenor alguns destes algoritmos (nomeadamente as versões básicas da [BFS e DFS](/asa/algoritmos-elementares) e da [Procura Custo Uniforme](/asa/arvores-abrangentes-menor-custo)), os resumos de ASA vão bastante _a fundo_ nas respetivas secções. Nesta cadeira, contudo, não será necessário ter uma memória tão "viva" dos conceitos abordados nessa UC.
Mais, adicionamos que esta secção corresponde ao terceiro capítulo do livro que acompanha a cadeira (_Solving Problems by Searching_), sub-secções 3.1 a 3.4.

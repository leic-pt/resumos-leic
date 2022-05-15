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

:::details[Exemplo Adicional - Jogo das 8 Rainhas]

O jogo das oito rainhas consiste em tentar colocar 8 rainhas num tabuleiro de xadrez 8x8, de forma a não se atacarem entre si. Temos, claro, que uma rainha pode atacar outra caso partilhem linha, coluna ou diagonal.

![Oito Rainhas](./imgs/0002-eight-queens.png#dark=2)

Uma estratégia possível seria adicionar sempre uma rainha na coluna mais à esquerda sem rainha colocada - sendo um tabuleiro 8x8, havendo 8 rainhas, terão todas de estar em linhas e colunas diferentes, pelo que podemos preencher o tabuleiro coluna a coluna, certificando-nos que estamos a colocar numa linha e diagonal que não interfira com outras rainhas.

Aqui, teríamos que o estado inicial é um tabuleiro sem rainhas, e que os **estados** correspondem a uma qualquer disposição do tabuleiro com $n \leq 8$ rainhas (respeitando a estratégia escolhida de todas as rainhas estarem nas $n$ colunas mais à esquerda).
As ações que o agente pode tomar são, seguindo esta estratégia, colocar a rainha na primeira coluna mais à esquerda por preencher (de forma a não poder ser atacada), e o modelo de transição retornará o tabuleiro com a rainha colocada na posição escolhida pela ação.
O teste objetivo corresponderá a verificar se existem 8 rainhas no tabuleiro **e** se nenhuma se puder atacar. Aqui, a noção de custo associado ao caminho não é relevante (todas as ações "custam o mesmo"), pelo que atribuímos um custo unitário a cada jogada _and call it a day_.

:::

Com o problema formulado, _resolvê-lo_ passa por encontrar a sequência de ações ótima para chegar ao objetivo. Para tal, utilizamos **algoritmos de procura**, que pesquisam vários ramos da "árvore da sequência de ações", em busca de uma sequência que satisfaça os objetivos dentro das medidas de desempenho pretendidas.
Temos, claro, que cada nó da árvore corresponde a um estado (com a raiz sendo o estado inicial), e que os filhos de um nó correspondem aos estados resultantes de tomar uma ação partindo do estado pai.

No caso Arad-Bucareste, por exemplo, podíamos ter uma árvore de procura deste tipo (note-se que está apenas parcialmente representada):

![Árvore de procura (parcial) Arad-Bucareste](imgs/0002-partial-search-tree-arad-bucharest.png#dark=2)

Note-se que costumamos dizer que a raiz está no "nível 0" da árvore, os seus filhos no "nível 1", e assim sucessivamente.

Partindo do estado inicial, **gerado automaticamente**, expandimo-lo, gerando Sibiu, Timisoara e Zerind. Aqui, temos três ramos que podemos seguir - três ações que podemos tomar. Se expandirmos Sibiu, como na imagem, geramos Arad (de novo - a ação correspondente a voltar atrás), Fagaras, Oradea e Rimnicu Vilcea. Note-se a diferença entre [**expandir**](color:orange) e [**gerar**](color:green): a expansão só acontece se de facto tomarmos a ação correspondente ao estado, enquanto que a geração ocorre assim que o pai é expandido. Temos, aliada a estas duas noções, a ideia de **fronteira de expansão** ou **lista de nós abertos**: o conjunto de nós que foram gerados mas que ainda não sofreram expansão.

O pseudocódigo de uma procura pode corresponder a algo deste género:

```bash
function tree_search(problem)
  static frontier = [problem.initial_state] # lista de nós abertos
  loop do
    if frontier is empty then
      return "I don't know how to solve this problem"
    node = choose_leaf_node(frontier)
    remove node from frontier
    if node is a goal then
      return node.state
    expand node
    frontier = frontier + node.children
end
```

:::warning[Atenção]

Esta secção (_problem-solving agents_) encontra-se incompleta, mas o conteúdo deve ser suficiente para o primeiro MAP. Assim que possível, adicionaremos o resto do conteúdo.

:::

## Procura Cega/Não Informada

A procura cega (ou não informada), tal como o nome indica, consiste em fazer uma procura **sem informação do que vem a seguir** - as estratégias sabem apenas o que a definição do problema lhes transmite, sem qualquer tipo de pista ou heurística que permita saber se uma ação é "mais promissora" que outra.

Antes de referir algumas estratégias de procura cega, vamos precisar de definir um par de noções bastante importantes quanto à classificação das mesmas:

- uma estratégia de procura diz-se [**completa**](color:purple) caso encontre **sempre** uma solução para o problema proposto, caso exista (e caso não exista, diz que não há solução).
- uma estratégia de procura diz-se [**ótima**](color:orange) caso encontre a solução ótima (de menor custo).

Em IAED e ASA, customávamos definir as noções de complexidade temporal e espacial com base em $|V|$ e $|E|$, a quantidade de vértices e arcos do grafo, respetivamente.
Ora, estas unidades de medida costumam ser apropriadas para grafos como mapas e afins, onde há uma estrutura de dados onde podemos explicitamente definir o que é que são vértices e arcos; em IA, nem sempre nos podemos dar a esse luxo, já que os grafos costumam ser definidos pelo seu estado inicial, ações e modelos de transição, podendo eventualmente ser infinitos.
Desta feita, será útil recorrer a medidas alternativas, apropriadas ao tipo de grafo que temos em mãos:

- **fator máximo de ramificação da árvore de procura**, $b$, vulgo _branching factor_, que corresponde ao **número máximo de sucessores de um dado nó**;
- **profundidade da solução de menor custo**, $d$, vulgo _depth of the shallowest node_:
- **profundidade máxima do espaço de estados**, $m$, que pode até ser infinita.

Note-se que a complexidade temporal é sempre função do número de nós gerados, não dos expandidos, já que o tempo para expandir um nó cresce com o número de nós por ele gerados. A complexidade espacial aborda todos os nós guardados em memória.

### Breadth-First Search (BFS)

A procura em largura expande o nó de menor profundidade na fronteira - visita os nós de uma dada profundidade e expande-os gerando os nós da próxima profundidade, que apenas serão visitados assim que todos os da atual tiverem sido visitados.

- **Completa**: Sim, se $b$ for finito.
- **Complexidade Temporal**: $b+b^2+b^3+\cdots+b^d=O(b^d)$
- **Complexidade Espacial**: $O(b^d)$
- **Ótima**: Sim, se o custo do caminho não diminuir ao aumentar a profundidade - em geral, não podemos afirmar que é ótima.

![BFS](imgs/0002-bfs.png#dark=2)

Note-se que a BFS deve realizar o teste objetivo **assim que o nó é gerado**, para evitar processamento desnecessário - numa BFS, sabemos que no nó do primeiro teste objetivo passado com sucesso temos a solução com menor profundidade (já que todos os nós que existem a uma profundidade menor - com menor custo - já foram exploradas e não passaram no teste), mas não necessariamente a solução de menor custo, já que se os arcos podem ter custos associados.
Caso não tenham (ou sejam uniformes), dizemos que a solução menos profunda é também a ótima, de menor custo.
Abaixo encontra-se a diferença entre fazer o teste na geração vs na expansão de nós (gráficos retirados dos slides da cadeira):

![Teste Expansão](imgs/0002-teste-expansao.png 'Teste na expansão (retirado dos slides)') ![Teste Geração](imgs/0002-teste-geracao.png 'Teste na geração (retirado dos slides)')

### Procura Custo Uniforme

A procura de custo uniforme equivale ao algoritmo de Dijkstra - corresponde a uma procura que expande sempre o nó da fronteira com menor custo caminho associado. Aqui, o teste objetivo tem de ser feito aquando da expansão, não na geração, já que o primeiro nó que passe o teste objetivo pode não ser o nó com menor custo em relação ao caminho total **aquando da sua geração**. Basta pensar que queremos gerar dois nós, $A$ e $B$, com custos associados $8$ e $6$, respetivamente - mesmo que ambos sejam objetivos, $B$ seria o nó com caminho ótimo, mas sendo $A$ gerado primeiro, seria também testado primeiro (e levaria a um resultado erróneo).

- **Completa**: Sim, se o custo do ramo $\ge \varepsilon$, com $\varepsilon$ a representar uma constante $> 0$. A verificação é utilizada para evitar ciclos em ramos com custo $0$ - o custo do caminho deve sempre aumentar com a profundidade, e caso tal não aconteça, podemos facilmente entrar em ciclos infinitos (até porque a procura não quer saber do número de passos de um caminho, apenas do seu custo).
- **Complexidade Temporal**: $O(b^{1 + \lfloor \frac{C^*}{\varepsilon}\rfloor})$ [\*](color:yellow)
- **Complexidade Espacial**: $O(b^{1 + \lfloor \frac{C^*}{\varepsilon}\rfloor})$
- **Ótima**: Sim, porque os nós são expandidados pela ordem de custo.

[\*](color:yellow) ${1 + \lfloor \frac{C^*}{\varepsilon}\rfloor}$, onde $C^*$ corresponde ao custo da solução ótima, e $\varepsilon$ a uma constante $> 0$.

![Custo Uniforme](imgs/0002-custo-uniforme.png 'Custo uniforme (retirado dos slides)')

### Depth-First Search (DFS)

A procura em profundidade primeiro expande sempre o nó na fronteira com a maior profundidade - procura percorrer um caminho até ao fim, voltando para trás (vulgo _backtracking_) assim que deixa de haver um caminho possível.

- **Completa**: Não, visto que pode haver profundidades infinitas ou ciclos.
- **Complexidade Temporal**: $O(b^m)$ ($m$ é a profundidade máxima)
- **Complexidade Espacial**: $O(b*m)$ se for implementada recursivamente, $O(m)$ iterativamente
- **Ótima**: Não, já que o nó retornado é o primeiro que satisfaz o objetivo, e não necessariamente o que satisfaz o objetivo **e** tem o caminho de menor custo. Olhando para o exemplo abaixo, caso $J$ e $C$ passassem no teste objetivo, $J$ seria retornado em vez de $C$, apesar de $C$ apresentar um custo caminho menor (considerando, claro, arcos com peso constante).

![DFS](imgs/0002-dfs.png 'DFS (retirado do livro)')

### DFS Limitada (Depth-Limited Search)

Uma DFS em que existe uma profundidade limite, a partir da qual não procuramos mais (como se a partir do limite os nós deixassem artificialmente de ter sucessores). Resolve, claro, o problema da profundidade infinita, tal como impõe um limite à profundidade máxima da solução.
Introduz, contudo, um problema: se o nó-objetivo menos profundo estiver para lá do limite, nunca o vamos encontrar, pelo que podemos chegar à conclusão (errada) que não há solução, quando na verdade apenas impusemos um limite demasiado restrito.

Pensando num caso como o de Arad-Bucareste, faz sentido aplicar um limite à profundidade da procura: existem 20 cidades, e é possível verificar que podemos chegar do ponto $A$ ao ponto $B$, $\forall_{A, B}$, em no máximo 9 "passos", pelo que impor um limite de profundidade em 9 unidades permite-nos remover o problema da profundidade infinita, mantendo a solução ótima ao nosso alcance.
Como nota, dizemos que este "número máximo de passos" para atravessar todo o espaço de estados é o seu **diâmetro**.

- **Completa**: Não, já que a solução pode estar fora do limite.
- **Complexidade Temporal**: $O(b^l)$ ($l$ é a profundidade limite)
- **Complexidade Espacial**: $O(b*l)$ com implementaçã recursiva, $O(l)$ com implementação iterativa
- **Ótima**: Nem sempre é garantido que conseguimos atingir a solução ótima, já que a sua profundidade pode estar para lá do limite imposto.

### DFS Iterativa (Iterative Deepening Search)

Consiste na realização de DFS limitadas sucessivas, com o limite de profundidade a aumentar a cada iteração (começando em 0 - na raiz).

Acaba por combinar vantagens da BFS e da DFS, combatendo algumas das suas fraquezas. A DFS regular acaba por não ser a melhor opção em árvores com objetivo "mais à direita", ainda que perto da raiz, já que vamos ter de visitar uma quantidade arbitrária de sub-árvores à sua esquerda na totalidade antes de lá chegar (em muitos casos acaba por ser uma perda de tempo, portanto).
A BFS acaba por combater esse problema, tendo contudo uma complexidade espacial bastante superior ($O(|E|)$ em vez de $O(d)$, para guardar os nós por visitar).
A DFS Iterativa acaba por pegar no "melhor dos dois mundos" e juntá-lo, sendo na prática uma estratégia _superior_ às outras duas (ainda que na prática a complexidade temporal no pior caso seja a mesma).

- **Completa**: Sim, caso a profundidade seja finita - explorando no pior caso todos os níveis, é garantido que se houver uma solução, será encontrada.
- **Complexidade Temporal**: $O(b^d)$
- **Complexidade Espacial**: $O(b*d)$
- **Ótima**: Sim, se o custo de cada ação for maior que 0.

![DFS Iterativa](imgs/0002-iterativa.png 'DFS Iterativa (retirado do livro)')

Explorando ainda a complexidade da procura em questão, temos que o _overhead_ adicionado pelas procuras adicionais não é particularmente significativo, já que numa árvore a vasta maioria dos nós encontra-se nas folhas (que são visitadas muito menos vezes).

### Procura Bi-Direcional

---

Adicionamos que esta secção corresponde ao terceiro capítulo do livro que acompanha a cadeira (_Solving Problems by Searching_), sub-secções 3.1 a 3.4.

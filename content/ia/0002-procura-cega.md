---
title: Procura Cega
description: Problem-Solving Agents.
  Algoritmos de Procura Não Informada.
  Procura em Largura Primeiro.
  Procura de Custo Uniforme.
  Procura em Profundidade Primeiro.
  Procura em Profundidade Limitada.
  Procura em Profundidade Iterativa.
  Procura Bi-Direcional.
path: /ia/procura-cega
type: content
---

# Resolução de Problemas com Procura

```toc

```

Nesta secção, vamos explorar mais a ideia de agentes baseados em objetivos, focando-nos num subtipo em particular: os **agentes que resolvem problemas**.

## Problem-Solving Agents

Em particular, temos que _problem-solving agents_ devem, ao contrário de outros tipos de agentes mais elementares, poder considerar ações futuras (e as respetivas consequências).
Ora, tendo um [**objetivo**](color:pink) estabelecido (objetivo esse gerado a partir do estado final onde queremos chegar, tendo em conta um conjunto de medidas de performance), encontrar a forma ótima de o atingir nem sempre é trivial, acabando frequentemente por requerer [**estratégias de procura**](color:blue) adequadas à situação em que o agente se encontra.
De forma sucinta, dizemos que essa "forma ótima de o atingir" corresponde à sequência de ações que o agente terá sucessivamente de tomar por forma a satisfazer o objetivo.

O exemplo clássico utilizado para explicar o funcionamento-base deste tipo de agentes é o problema **Arad-Bucareste**.

:::tip[Arad-Bucareste]

Considere-se um casal que está de férias em Arad, na Roménia. Amanhã têm de apanhar o avião de volta para Lisboa, em Bucareste, e têm de decidir a melhor forma de lá chegar - neste caso, definimos _melhor forma_ como o caminho mais barato (com menor custo/km). Ora, considere-se o seguinte grafo, onde cada arco (estrada) é pesado consoante o custo de fazer o trajeto entre os vértices (cidades) que liga:

![Grafo Roménia (c/ custos associados)](./imgs/0002-romania-graph.svg#dark=2)

Uma procura relativamente simples, _a olho_, levar-nos-ia à conclusão que o caminho com menor custo que liga Arad a Bucareste é o caminho

$$
\text{Arad} \to \text{Sibiu} \to \text{Rimnicu Vilcea} \to \text{Pilesti} \to \text{Bucareste}
$$

Um agente não consegue, claro, fazer "pesquisas a olho": precisa de uma [**estratégia de procura**](color:blue) adequada para encontrar a sequência pretendida (as estratégias serão abordadas mais à frente). Por fim, executa-se a sequência de ações obtida pelo agente pela ordem obtida.

Como nota adicional, podemos afirmar que o ambiente em questão é [**estático**](color:yellow), [**completamente observável**](color:yellow), [**discreto**](color:yellow) e [**determinístico**](color:yellow).

:::

A partir do exemplo anterior, podemos indiretamente enunciar **5 pontos-chave** para a formulação (e posterior resolução) de problemas através destes agentes:

- o [**estado inicial**](color:orange): no caso do exemplo anterior, o agente encontra-se inicialmente em Arad;
- as [**ações que o agente pode tomar**](color:orange), considerando o seu estado atual. Em relação ao exemplo anterior, o agente pode, partindo de Arad, decidir ir para Zerind, Sibiu ou Timisoara;
- um [**modelo de transição**](color:orange), que retorna o estado resultante de executar uma dada ação partindo de um certo estado. Estando em Arad e tomando a ação `Ir(Sibiu)`, o agente passa a estar em Sibiu, sendo portanto Sibiu o estado retornado pelo modelo de transição nessa situação;
- um [**teste objetivo**](color:orange), um teste simples que nos diz se um dado estado é ou não um estado objetivo. A resposta do teste à pergunta "Siriu é um estado objetivo" seria negativa, claro, já que o objetivo é apenas Bucareste;
- um [**custo caminho**](color:orange), uma função que atribui um custo numérico a cada caminho (consideramos aqui caminho como um todo). Este custo está dependente das medidas de performance pretendidas - no caso Arad-Bucareste podemos escolher custos como distâncias em km, tempo gasto, entre um leque de outras opções possíveis. Note-se que este ponto se refere ao _passado_: sei (e só sei) o caminho que já percorri.

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

![Oito Rainhas](./imgs/0002-eight-queens.svg#dark=2)

Uma estratégia possível seria adicionar sempre uma rainha na coluna mais à esquerda sem rainha colocada - sendo um tabuleiro 8x8, havendo 8 rainhas, terão todas de estar em linhas e colunas diferentes, pelo que podemos preencher o tabuleiro coluna a coluna, certificando-nos que estamos a colocar numa linha e diagonal que não interfira com outras rainhas.

Aqui, teríamos que o estado inicial é um tabuleiro sem rainhas, e que os **estados** correspondem a uma qualquer disposição do tabuleiro com $n \leq 8$ rainhas (respeitando a estratégia escolhida de todas as rainhas estarem nas $n$ colunas mais à esquerda).
As ações que o agente pode tomar são, seguindo esta estratégia, colocar a rainha na primeira coluna mais à esquerda por preencher (de forma a não poder ser atacada), e o modelo de transição retornará o tabuleiro com a rainha colocada na posição escolhida pela ação.
O teste objetivo corresponderá a verificar se existem 8 rainhas no tabuleiro **e** se nenhuma se puder atacar. Aqui, a noção de custo associado ao caminho não é relevante (todas as ações "custam o mesmo"), pelo que atribuímos um custo unitário a cada jogada _and call it a day_.

:::

Com o problema formulado, _resolvê-lo_ passa por encontrar a sequência de ações ótima para chegar ao objetivo. Para tal, utilizamos [**algoritmos de procura**](color:blue), que pesquisam vários ramos da "árvore da sequência de ações", em busca de uma sequência que satisfaça os objetivos dentro das medidas de desempenho pretendidas.
Temos, claro, que cada nó da árvore corresponde a um estado (com a raiz sendo o estado inicial), e que os filhos de um nó correspondem aos estados resultantes de tomar uma ação partindo do estado pai.

No caso Arad-Bucareste, por exemplo, podíamos ter uma árvore de procura deste tipo (note-se que está apenas parcialmente representada):

![Árvore de procura Arad-Bucareste - Fase 1](imgs/0002-search-tree-arad-step-1.svg#dark=2)
![Árvore de procura Arad-Bucareste - Fase 2](imgs/0002-search-tree-arad-step-2.svg#dark=2)
![Árvore de procura Arad-Bucareste - Fase 3](imgs/0002-search-tree-arad-step-3.svg#dark=2)

**Nesta figura**, considera-se que todos os estados a tracejado se encontram **por gerar**, tal como ações a tracejado ainda não foram realizadas (ou seja, o _pai_ ainda não foi explorado). Estados a traço cheio já foram gerados, não explorados, e ações a traço cheio já foram testadas. Estados a azul já foram explorados.

Note-se que costumamos dizer que a raiz está no "nível 0" da árvore, os seus filhos no "nível 1", e assim sucessivamente.

Partindo do estado inicial, **gerado automaticamente**, expandimo-lo, gerando Sibiu, Timisoara e Zerind. Aqui, temos três ramos que podemos seguir - três ações que podemos tomar. Se expandirmos Sibiu, como na imagem, geramos Arad (de novo - a ação correspondente a voltar atrás), Fagaras, Oradea e Rimnicu Vilcea. Note-se a diferença entre [**expandir**](color:orange) e [**gerar**](color:green): a expansão só acontece se de facto tomarmos a ação correspondente ao estado, enquanto que a geração ocorre assim que o pai é expandido. Temos, aliada a estas duas noções, a ideia de **fronteira de expansão** ou **lista de nós abertos**: o conjunto de nós que foram gerados mas que ainda não sofreram expansão.

Note-se, como definição adicional, a distinção entre nós abertos e fechados: **nós abertos** são todos os nós gerados por expandir, enquanto que nós fechados são todos os nós que já foram expandidos. Nós por gerar não encaixam em nenhuma destas descrições.

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

## Procura Cega/Não Informada

A procura cega (ou não informada), tal como o nome indica, consiste em fazer uma procura **sem informação do que vem a seguir** - as estratégias sabem apenas o que a definição do problema lhes transmite, sem qualquer tipo de pista ou heurística que permita saber se uma ação é "mais promissora" que outra.

Antes de referir algumas estratégias de procura cega, vamos precisar de definir um par de noções bastante importantes quanto à classificação das mesmas:

- uma estratégia de procura diz-se [**completa**](color:purple) caso encontre **sempre** uma solução para o problema proposto, caso exista (e caso não exista, diz que não há solução).
- uma estratégia de procura diz-se [**ótima**](color:orange) caso encontre a solução ótima (de menor custo).

Em IAED e ASA, costumávamos definir as noções de complexidade temporal e espacial com base em $|V|$ e $|E|$, a quantidade de vértices e arcos do grafo, respetivamente.
Ora, estas unidades de medida costumam ser apropriadas para grafos como mapas e afins, onde há uma estrutura de dados onde podemos explicitamente definir o que é que são vértices e arcos; em IA, nem sempre nos podemos dar a esse luxo, já que os grafos costumam ser definidos pelo seu estado inicial, ações e modelos de transição, podendo eventualmente ser infinitos.
Desta feita, será útil recorrer a medidas alternativas, apropriadas ao tipo de grafo que temos em mãos:

- [**fator máximo de ramificação da árvore de procura**](color:orange), $b$, vulgo _branching factor_, que corresponde ao **número máximo de sucessores de um dado nó**;
- [**profundidade da solução de menor custo**](color:yellow), $d$, vulgo _depth of the shallowest node_:
- [**profundidade máxima do espaço de estados**](color:purple), $m$, que corresponde à quantidade máxima de espaços entre um qualquer par de estados - dados dois estados aleatórios $E_1$ e $E_2$, qual é a quantidade máxima de estados pelos quais temos de passar para ir de um ao outro.

Note-se que a complexidade temporal é sempre função do número de nós gerados, não dos expandidos, já que o tempo para expandir um nó cresce com o número de nós por ele gerados. A complexidade espacial aborda todos os nós guardados em memória.

### Procura em Largura Primeiro (PLP) / Breadth-First Search (BFS)

A procura em largura primeiro expande o nó de menor profundidade na fronteira - visita os nós de uma dada profundidade e expande-os, gerando os nós da próxima profundidade, que apenas serão visitados assim que todos os da atual tiverem sido visitados.

- **Completa**: Sim, se $b$ for finito.
- **Complexidade Temporal**: $b+b^2+b^3+\cdots+b^d=O(b^d)$
- **Complexidade Espacial**: $O(b^d)$
- **Ótima**: Sim, se o custo do caminho não diminuir ao aumentar a profundidade[\*](color:yellow) - em geral, não podemos afirmar que é ótima, já que tal não é sempre garantido.

[\*](color:yellow) note-se que caso tal não aconteça, podemos facilmente entrar em ciclos infinitos - se eu quiser ir de Arad a Sibiu e esse trajeto tiver um custo negativo (ou seja, ganho tempo/dinheiro), vou querer fazê-lo infinitamente, para ter a "solução ótima"!

![BFS - Exemplo com o teste de Geração Errado](imgs/0002-bfs-example.svg#dark=2)

Note-se que a BFS deve realizar o teste objetivo [**assim que o nó é gerado**](color:red), para evitar processamento desnecessário. Numa BFS, sabemos que no nó do primeiro teste objetivo passado com sucesso vamos ter a solução com menor profundidade, já que todos os nós que existem a uma profundidade menor - **com menor custo** - já foram exploradas e não passaram no teste. Com efeito, os exercícios associados à procura em largura primeiro apresentados na [plataforma de apoio à cadeira disponibilizada pela docência](https://aitutorsystem.herokuapp.com/) recorrem ao teste [**na geração**](color:yellow), sendo portanto relevante ter esta ideia em conta.

![Teste Expansão vs Geração](imgs/0002-expansion-vs-generation-test.svg#dark=2)

É, aqui, clara a diferença temporal e espacial entre realizar o teste na geração e na expansão dos nós: com o teste na geração, exploramos completamente apenas 2 níveis da árvore (já que G ao ser gerado passa logo o teste objetivo e acabamos), poupando aí a expansão de todo um nível da árvore. Mais ainda, há seis nós que nunca precisamos de gerar, equivalendo a quase todo um nível da árvore que não precisamos de gerar, poupando memória. As complexidades temporal e espacial descem, portanto, de $O(b^{d + 1})$ para $O(b^d)$ (o que a escalas mais baixas pode não parecer fazer diferença, _but it adds up_ - principalmente em memória, a diferença de apenas uma escala de grandeza pode tornar coisas fazíveis em incomportáveis).

Como nota de rodapé, note-se que tal como na BFS lecionada em ASA e IAED, a BFS em IA tem por base uma fila (FIFO) onde vamos guardando os vários nós encontrados, por forma a não procurar nenhum nó num nível da árvore posterior a nós por explorar.

### Procura de Custo Uniforme

A procura de custo uniforme equivale ao [algoritmo de Dijkstra](/asa/caminhos-mais-curtos#algoritmo-de-dijkstra), já estudado em MD e ASA - uma procura que expande sempre o nó da fronteira com **menor custo caminho associado**. Aqui, o teste objetivo tem de ser feito aquando da expansão, não na geração, já que o primeiro nó que passe o teste objetivo pode não ser o nó com menor custo em relação ao caminho total **aquando da sua geração**. Basta pensar num caso arbitrário em que vamos gerar de seguida dois nós, $A$ e $B$ (**com o mesmo pai**), com custos associados $8$ e $6$, respetivamente. Mesmo que ambos sejam nós-objetivo, $B$ seria o nó com caminho ótimo; sendo $A$ gerado primeiro, caso o teste fosse realizado na geração, $A$ faria parte do caminho ótimo retornado (ao invés de $B$), o que seria uma resposta errada.

:::details[Exemplo - Procura Custo Uniforme]

Encontra-se abaixo um exemplo de procura custo uniforme por uma árvore (note-se que o teste é realizado **na expansão**).

![Procura Custo Uniforme - Exemplo](imgs/0002-uniform-cost-search.svg#dark=2)

Note-se que a fila usada nesta procura é uma **fila de prioridade**, não uma fila simples.

:::

- **Completa**: Sim, se o custo do ramo $\ge \varepsilon$, com $\varepsilon$ a representar uma constante $> 0$. A verificação é utilizada para evitar ciclos em ramos com custo $0$ - o custo do caminho deve sempre aumentar com a profundidade, e caso tal não aconteça, podemos facilmente entrar em ciclos infinitos (até porque a procura não quer saber do número de passos de um caminho, apenas do seu custo).
- **Complexidade Temporal**: $O(b^{1 + \lfloor \frac{C^*}{\varepsilon}\rfloor})$ [\*](color:yellow)
- **Complexidade Espacial**: $O(b^{1 + \lfloor \frac{C^*}{\varepsilon}\rfloor})$
- **Ótima**: Sim, porque os nós são expandidos pela ordem de custo.

[\*](color:yellow) ${1 + \lfloor \frac{C^*}{\varepsilon}\rfloor}$, onde $C^*$ corresponde ao custo da solução ótima, e $\varepsilon$ a uma constante $> 0$.

:::details[Complexidades - Porquê?]

Note-se que aqui definimos as complexidades temporal e espacial em função do _branching factor_ e do custo do caminho ótimo, [**não da profundidade do nó objetivo**](color:red): sendo esta procura baseada no custo e não em profundidade, seria aliás estranho se tal não fosse o caso. Não é, contudo, trivial perceber à primeira vista o porquê das complexidades serem estas.

Temos, claro, que cada ação/ramo custa pelo menos $\varepsilon$, como referido anteriormente. Como pior caso, assuma-se que todos os nós têm $b$ filhos (ou seja que o fator de ramificação se verifica para qualquer nó) - neste caso, existem:

- $1$ nó no nível $0$, a raíz;
- $b$ nós no nível $1$;
- $b^2$ nós no nível $2$;
- $\cdots$
- $b^k$ nós no nível $k$.

Caso a procura termine no nível $k$, vamos ter de expandir $1 + b + \cdots + b^k = \frac{b^{k + 1} - 1}{b - 1}$ nós no total para encontrar o caminho de custo ótimo. Com $C^*$ sendo o custo do caminho ótimo e a cada passo ficamos $\varepsilon$ mais perto do mesmo, vamos precisar de $\frac{C^*}{\varepsilon}$ passos até lá chegar, equivalente a $\frac{C^*}{\varepsilon}$ níveis (no pior caso, em que todas as ações custam $\varepsilon$) - o nosso $k$ aqui será $\frac{C^*}{\varepsilon}$. Como a verificação é feita na expansão e não na geração, vamos reutilizar o que já provámos na BFS anteriormente para afirmar que o custo temporal e espacial desta procura é $O(b^{1 + \frac{C^*}{\epsilon}})$.

:::

### Procura em Profundidade Primeiro (PPP) / Depth-First Search (DFS)

A procura em profundidade primeiro expande sempre o nó na fronteira com a maior profundidade - procura percorrer um caminho até ao fim, voltando para trás (vulgo _backtracking_) assim que deixa de haver um caminho possível.

- **Completa**: Não, visto que pode haver profundidades infinitas ou ciclos (que, numa procura por profundidade primeiro, rapidamente se tornam desagradáveis).
- **Complexidade Temporal**: $O(b^m)$
- **Complexidade Espacial**: $O(bm)$ se for implementada recursivamente, $O(m)$ iterativamente.
- **Ótima**: Não, já que o nó retornado é o primeiro que satisfaz o objetivo, e não necessariamente o que simultaneamente satisfaz o objetivo **e** tem o caminho de menor custo. Olhando para o exemplo abaixo, caso $D$ e $C$ fossem ambos nós-objetivo, $D$ seria retornado em vez de $C$, apesar de $C$ ter menor profundidade na árvore ($C$, considerando arcos com custo uniforme, seria a solução ótima).

![DFS](imgs/0002-dfs.svg#dark=3)

:::details[Complexidades - Porquê?]

Em primeiro lugar, é de realçar que aqui usamos uma pilha (LIFO) em vez das filas (FIFO) das procuras em largura primeiro e custo uniforme.

Voltámos, aqui, a evitar definir as complexidades temporal e espacial em função de $b$ e $d$, optando por defini-las em função de $b$ e $m$ - note-se, como referido acima, que a primeira solução retornada é a **primeira que passa o teste objetivo**, não a que passa o teste objetivo [**e**](color:green) e é menos profunda. O relevante, portanto, acaba por ser a profundidade máxima a que um nó pode estar na árvore de procura, e não a profundidade do nó objetivo mais abaixo (já que no pior caso vamos ter de atravessar a árvore de cima a baixo).

Em termos de complexidade temporal, parece então óbvio o porquê de $b^m$ (vs $b^d$ da BFS) - desta vez, expandimos no pior caso $1 + b + b^2 + \cdots + b^m$ nós. Note-se, na imagem exemplo utilizada mais acima, como teríamos de pesquisar até ao fim do "ramo da esquerda", fosse a profundidade do mesmo qual fosse (o que seria claramente contraprodutivo). Já quanto ao espaço ocupado, este acaba por diferir consoante a implementação escolhida. Temos, claro, que vamos guardar na pilha os nós do "caminho" da árvore de procura antecessores do que estamos a procurar atualmente: o número de nós guardados nunca deverá, portanto, exceder $m$ caso queiramos apenas iterar pela árvore. Recorrendo a recursão, contudo, acabamos por precisar de, no pior caso, guardar $b$ pilhas com $m$ elementos (uma por cada _branch_, caso a raiz tenha $b$ sucessores).

:::

### Procura em Profundidade Limitada / DFS Limitada (Depth-Limited Search)

Uma DFS em que existe uma profundidade limite, a partir da qual [**não procuramos mais**](color:red) (como se a partir do limite os nós deixassem artificialmente de ter sucessores). Resolve, claro, o problema da profundidade infinita, tal como impõe um limite à profundidade máxima da solução.
Introduz, contudo, um problema novo: se o nó-objetivo menos profundo estiver para lá do limite por nós imposto, nunca o vamos encontrar. Dada essa particularidade, o pseudocódigo desta procura apresenta agora um terceiro retorno possível (para além do sucesso, retornando o nó objetivo, e fracasso): retornamos _cut-off_ caso não tenhamos encontramos solução dentro da profundidade limite a que recorremos, mas sabemos que o limite utilizado [**não corresponde à profundidade máxima da árvore**](color:red).

Pensando num caso como o de Arad-Bucareste, faz sentido aplicar um limite à profundidade da procura: existem 20 cidades, e é possível verificar que podemos chegar do ponto $A$ ao ponto $B$, $\forall_{A, B}$, em no máximo 9 "passos", pelo que impor um limite de profundidade em 9 unidades permite-nos remover o problema da profundidade infinita (definitivamente **não vamos** procurar para lá da profundidade 9), mantendo a solução ótima ao nosso alcance.
Como nota, dizemos que este "número máximo de passos" para atravessar todo o espaço de estados é o seu **diâmetro**.

- **Completa**: Não, já que a solução pode estar fora do limite.
- **Complexidade Temporal**: $O(b^l)$ ($l$ é a profundidade limite).
- **Complexidade Espacial**: $O(bl)$ com implementação recursiva, $O(l)$ com implementação iterativa.
- **Ótima**: Nem sempre é garantido que conseguimos atingir a solução ótima, já que a sua profundidade pode estar para lá do limite imposto.

### Procura em Profundidade Iterativa / DFS Iterativa (Iterative Deepening Search)

Consiste na realização de DFS limitadas sucessivas, com o limite de profundidade a aumentar a cada iteração (começando em 0 - na raiz).

Acaba por combinar vantagens da BFS e da DFS, combatendo algumas das suas fraquezas. A DFS regular acaba por não ser a melhor opção em árvores com objetivo "mais à direita", ainda que perto da raiz, já que vamos ter de visitar uma quantidade arbitrária de sub-árvores à sua esquerda na totalidade antes de lá chegar (em muitos casos acaba por ser uma perda de tempo, portanto).
A BFS acaba por combater esse problema, tendo, contudo, uma complexidade espacial bastante superior ($O(|E|)$ em vez de $O(d)$, para guardar os nós por visitar).
A DFS Iterativa acaba por pegar no "melhor dos dois mundos" e juntá-los, sendo, na prática, uma estratégia "superior" às outras duas (ainda que, na prática, a complexidade temporal no pior caso seja a mesma).

- **Completa**: Sim, caso a profundidade seja finita - explorando, no pior caso, todos os níveis, é garantido que, se houver uma solução, será encontrada.
- **Complexidade Temporal**: $O(b^d)$
- **Complexidade Espacial**: $O(bd)$
- **Ótima**: Sim, se o custo de cada ação for maior que 0.

![DFS Iterativa](imgs/0002-iterative-dfs.svg#dark=2)

Explorando ainda a complexidade da procura em questão, temos que o _overhead_ adicionado pelas procuras adicionais não é particularmente significativo, já que numa árvore a vasta maioria dos nós encontra-se nas folhas (que são visitadas muito menos vezes).

### Procura Bi-Direcional

<!-- Consiste na realização de 2 procuras em simultâneo, uma a começar no estado inicial e outra no estado objetivo. (...)

É mais eficiente se a árvore cresce exponencialmente, visto que $b^{\frac{d}{2}} + b^{\frac{d}{2}} \ll b^d$. (...)

Problema: pode não ser conhecido o estado objetivo logo à partida (por exemplo, num jogo de Sudoku vs 8-puzzle). Existe também uma necessidade de calcular eficientemente os predecessores de um nó. (...) -->

:::warning[Em construção]

Esta secção encontra-se atualmente incompleta, será completada assim que possível.

:::

---

Adicionamos que esta secção corresponde ao terceiro capítulo do livro que acompanha a cadeira (_Solving Problems by Searching_), sub-secções 3.1 a 3.4.

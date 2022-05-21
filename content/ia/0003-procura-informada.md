---
title: Procura Informada
description: Algoritmos de Procura Informada.
  Função Heurística.
  Procura Gananciosa.
  Procura A*.
  Procura IDA*.
  Procura Melhor Primeiro Recursiva.
  Heurísticas.
path: /ia/procura-informada
type: content
---

# Procura Informada

```toc

```

Na [última secção](/ia/procura-cega) abordámos a procura cega, uma abordagem que explora
todo o espaço de procura sem qualquer indicação do quão longe se encontra dos nós-objetivo.
Ora, mas caso saibamos de antemão informações úteis sobre o objetivo, fará todo o sentido
usá-las a nosso favor, por forma a conseguir (idealmente) procuras mais eficientes.
É aqui que entram as estratégias de **procura informada**, abordagens que, de um modo geral,
baseiam-se na [**procura melhor primeiro**](color:green), uma estratégia de procura que recorre a uma
função de avaliação, $f(n)$, para escolher a ordem de expansão dos nós.

A função de avaliação é modelada como uma estimativa do custo entre um nó, $n$, e o objetivo.
Por norma, poderá ser constituída por algumas componentes principais (correspondendo à soma/composição/... destas):

- $g(n)$, o custo do caminho percorrido desde o estado inicial até $n$;
- $h(n)$, uma [**estimativa**](color:green) do custo do melhor caminho desde $n$ até ao objetivo;
- $h^*(n)$, o [**custo real**](color:orange) do melhor caminho desde $n$ até ao objetivo.

Dizemos que $h(n)$ é uma **função heurística**.

:::info[Função Heurística]

Uma função heurística [**estima**](color:green) o quão perto um dado estado está do nó objetivo mais próximo:
podemos pensar nela como uma espécie de detetor de metais, que apita cada vez mais alto à
medida que nos aproximamos de um objetivo.

Note-se que acima foi utilizada a palavra [**estimativa**](color:green): funções heurísticas
não são necessariamente representações fiéis do custo real de um nó ao objetivo, mas sim
aproximações que fazemos, [idealmente por baixo](/ia/nao-me-posso-esquecer-de-linkar-isto) do mesmo.

**Se estivermos num nó objetivo**, a função heurística deve ser nula ($h(n) = 0$, portanto).

:::

![Heurística - Exemplo Árvore](imgs/0003-heuristica-arvore.svg#dark=3)

Funções heurísticas ajudam-nos, portanto, a decidir que caminho tomar (ou seja, que nó escolher),
procurando minimizar os custos até ao objetivo.

## Procura Melhor Primeiro (Genérica)

Tal como referido mais acima, a procura melhor primeiro corresponde a uma estratégia baseia-se
na ideia de **função de avaliação**, que mapeia cada nó a uma estimativa: o quão perto estará
do objetivo mais próximo. Seguindo esta abordagem, vamos sempre tentar expandir o nó com o menor
valor de $f(n)$ na fronteira, já que idealmente será esse nó que nos aproximará de
forma ótima do objetivo (com algumas exceções, que vamos ver mais à frente). A fronteira em si
tem os nós ordenadados de forma crescente (através de uma _min priority queue_) segundo a respetiva
função de avaliação.

Se pensarmos bem, acaba por ter uma lógica igual à da [procura custo uniforme](/ia/procura-cega#procura-de-custo-uniforme),
onde aqui $f$ corresponde ao custo do caminho percorrido nessa procura: podemos, portanto,
recorrendo à notação $g$ exposta mais acima, afirmar que na procura custo uniforme temos

$$
f(n) = g(n).
$$

Isto é, na procura custo uniforme, a função de avaliação foca-se exclusivamente no caminho percorrido
até agora, sem se preocupar com o caminho para a frente - se pensarmos bem, faz então sentido
que se encaixe nas procuras cegas, já que de facto não há informação útil que usemos sobre o
objetivo: apenas sabemos coisas sobre o que está para trás.

<!-- TODO: maybe adicionar pseudocódigo depois? não sei o quão útil será -->

## Procura Gananciosa

Se na procura custo uniforme tínhamos $f(n) = g(n)$, isto é, a função de avaliação
focava-se exclusivamente no caminho percorrido para trás, a procura gananciosa olha
precisamente para o oposto: para o caminho que falta percorrer, sem se preocupar com o
caminho percorrido até agora (procurando, portanto, expandir sempre o nó que aparenta estar
mais próximo do objetivo). Dizemos, assim, que na _greedy search_

$$
f(n) = h(n).
$$

:::details[Exemplo - Procura Gananciosa, Arad-Bucareste]

Voltemos a pegar no exemplo de Arad-Bucareste, considerando como função heurística a
**distância em linha reta** do nó atual ao objetivo (Bucareste):

![Mapa Arad-Bucareste](imgs/0002-romania-graph.svg#dark=3)

| Cidade        | Distância a Bucareste | Cidade             | Distância a Bucareste |
| ------------- | --------------------- | ------------------ | --------------------- |
| **Arad**      | $366$                 | **Mehadia**        | $241$                 |
| **Bucareste** | $0$                   | **Neamt**          | $234$                 |
| **Craiova**   | $160$                 | **Oradea**         | $380$                 |
| **Drobeta**   | $242$                 | **Pitesti**        | $100$                 |
| **Eforie**    | $161$                 | **Rimnicu Vilcea** | $193$                 |
| **Fagaras**   | $176$                 | **Sibiu**          | $253$                 |
| **Giurgiu**   | $77$                  | **Timisoara**      | $329$                 |
| **Hirsova**   | $151$                 | **Urziceni**       | $80$                  |
| **Iasi**      | $226$                 | **Vaslui**         | $199$                 |
| **Lugoj**     | $244$                 | **Zerind**         | $374$                 |

**Note-se que temos na tabela acima a distância em linha reta entre nós e o objetivo**, não
a distância real! É apenas uma estimativa, utilizada aqui como heurística.

Seguindo uma abordagem _greedy_, partindo de Arad e procurando atingir Bucareste,
a árvore de procura resultante iria evoluir como se mostra abaixo:

![Árvore de Procura Procura Gananciosa Arad-Bucareste](imgs/0003-greedy-arad-bucareste.svg#dark=3)

A procura gananciosa não nos deu a solução ótima - em vez de seguir por Fagaras e depois para Bucareste,
o caminho ótimo passaria por Rimnicu Vilcea, Pitesti e só depois por Bucareste. Esta procura
[**não garante, portanto, otimalidade**](color:red).

:::

Como foi possível observar no exemplo acima, a _greedy search_ não garante otimalidade. Mais ainda,
podemos também afirmar que [**não é completa**](color:red): infelizmente, esta abordagem não está imune a entrar
em ciclos. Basta pensar, e olhando para o mapa da Roménia novamente, no caso em que queremos ir
de Iasi a Fagaras: a expansão de Iasi gera Neamt e Vaslui, e Neamt encontra-se, em linha reta,
mais próximo de Fagaras que Vaslui, pelo que seguimos esse caminho. A expansão de Neamt volta a
colocar Iasi na fronteira, e Iasi está mais próximo em linha reta de Fagaras que Vaslui, pelo que
voltamos a expandir Iasi - entramos, portanto, num ciclo infinito, e fica o caldo entornado.

Quanto às complexidades temporal e espacial, temos que o pior caso para ambas é exponencial,
$b^m$.
Note-se que em relação à memória basta pensar que a fronteira pode eventualmente conter todos os nós
(já que temos de manter as heurísticas em memória), sendo proporcional ao número de nós dentro da
fronteira e ao comprimento do maior caminho (em número de nós) percorrido.

Resta notar que apesar da complexidade temporal exponencial da procura gananciosa, esta pode
ser drasticamente reduzida utilizando uma boa heurística.

## Procura A$^*$

Na procura custo uniforme, a heurística utilizada baseava-se exclusivamente em $g(n)$. Já na
procura gananciosa, abordada acima, recorremos unicamente a $h(n)$, a estimativa do caminho até ao
objetivo: é então natural que surja a ideia de combinar ambas numa única função de avaliação,
em princípio mais precisa (já que terá em conta mais detalhes sobre o caminho). É precisamente essa
a função de avaliação utilizada pela procura $A^*$:

$$
f(n) = g(n) + h(n).
$$

A ideia-base da procura é evitar expandir caminhos que já sabemos que terão custos demasiado elevados,
considerando tanto o que ficou para trás como o que ainda devemos ter de percorrer para a frente.
Se pensarmos bem, $f$ corresponderá então ao **custo total estimado** da solução mais barata que
passa por $n$. Tal como na procura gananciosa, vamos manter a fronteira como uma
_min priority queue_, ordenada de forma crescente pelo valor da função de avaliação
de cada nó.

:::details[Exemplo - Procura $A^*$, Arad-Bucareste]

Voltemos a ter presente exemplo de Arad-Bucareste, considerando novamente como $h(n)$ a
**distância em linha reta** do nó atual ao objetivo (Bucareste):

![Mapa Arad-Bucareste](imgs/0002-romania-graph.svg#dark=3)

| Cidade        | Distância a Bucareste | Cidade             | Distância a Bucareste |
| ------------- | --------------------- | ------------------ | --------------------- |
| **Arad**      | $366$                 | **Mehadia**        | $241$                 |
| **Bucareste** | $0$                   | **Neamt**          | $234$                 |
| **Craiova**   | $160$                 | **Oradea**         | $380$                 |
| **Drobeta**   | $242$                 | **Pitesti**        | $100$                 |
| **Eforie**    | $161$                 | **Rimnicu Vilcea** | $193$                 |
| **Fagaras**   | $176$                 | **Sibiu**          | $253$                 |
| **Giurgiu**   | $77$                  | **Timisoara**      | $329$                 |
| **Hirsova**   | $151$                 | **Urziceni**       | $80$                  |
| **Iasi**      | $226$                 | **Vaslui**         | $199$                 |
| **Lugoj**     | $244$                 | **Zerind**         | $374$                 |

A procura $A^*$ que, partindo de Arad procura o caminho mais barato até Bucareste, cria
uma árvore de procura como a seguinte:

Note-se que os valores indicados ao lado de cada estado na árvore correspondem a $f$, sendo
a soma de $g$ (o caminho até agora percorrido) e $f$ (a estimativa do caminho por percorrer).

![Árvore de Procura Procura $A^*$ Arad-Bucareste](imgs/0003-a-estrela-arad-bucareste.svg#dark=3)

Podemos notar algo relevante: estados a representar a mesma cidade podem ser adicionados mais do que
uma vez à fronteira (temos, por exemplo, Sibiu e Bucareste a ser adicionadas duas vezes).
Mais, chegámos através desta abordagem ao caminho ótimo de Arad a Bucareste, algo que não
se tinha verificado na abordagem _greedy_: não é indicativo, contudo, da otimalidade geral
da procura; como vamos ver à frente, [**a procura $A^*$ não é ótima**](color:red).

:::

### Quando é que uma procura pode ser ótima?

## Procura IDA$^*$

## Procura Melhor Primeiro Recursiva (RBFS)

---

Adicionamos que esta secção corresponde ao terceiro capítulo do livro que acompanha a cadeira
(_Solving Problems by Searching_), sub-secções 3.5 e 3.6.

---
title: Procura Informada
description: Algoritmos de Procura Informada.
  Função Heurística.
  Procura Gananciosa.
  Procura A*.
  Heurísticas Admissíveis.
  Heurísticas Consistentes.
  Procura IDA*.
  Procura Melhor Primeiro Recursiva.
  Como obter boas heurísticas.
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
se baseiam na [**procura melhor primeiro**](color:green), uma estratégia de procura que recorre a uma
**função de avaliação**, $f(n)$, para escolher a ordem de expansão dos nós.

A função de avaliação é modelada como uma estimativa do custo entre um nó, $n$, e o objetivo.
Por norma, poderá ser constituída por algumas componentes principais (correspondendo à soma/composição/etc. destas):

- $g(n)$, o custo do caminho percorrido desde o estado inicial até $n$;
- $h(n)$, uma [**estimativa**](color:green) do custo do melhor caminho desde $n$ até ao objetivo;
- $h^*(n)$, o [**custo real**](color:orange) do melhor caminho desde $n$ até ao objetivo, isto é, a estimativa exata.

Dizemos que $h(n)$ é uma **função heurística**.

:::info[Função Heurística]

Uma função heurística [**estima**](color:green) o quão perto um dado estado está do nó objetivo mais próximo:
podemos pensar nela como uma espécie de detetor de metais, que apita cada vez mais alto à
medida que nos aproximamos de um objetivo.

Note-se que acima foi utilizada a palavra [**estimativa**](color:green): funções heurísticas
não são necessariamente representações fiéis do custo real de um nó ao objetivo, mas sim
aproximações que fazemos, [idealmente por baixo](/ia/procura-informada#quando-é-que-uma-procura-pode-ser-ótima) do mesmo.

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
tem os nós ordenados de forma crescente (através de uma _min priority queue_) segundo a respetiva
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
mais próximo do objetivo). Dizemos, assim, que na _greedy search_ se tem

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
a soma de $g$ (o caminho até agora percorrido) e $h$ (a estimativa do caminho por percorrer).

![Árvore de Procura Procura $A^*$ Arad-Bucareste](imgs/0003-a-estrela-arad-bucareste.svg#dark=3)

Podemos notar algo relevante: estados a representar a mesma cidade podem ser adicionados mais do que
uma vez à fronteira (temos, por exemplo, Sibiu e Bucareste a ser adicionadas duas vezes).
Mais, chegámos através desta abordagem ao caminho ótimo de Arad a Bucareste, algo que não
se tinha verificado na abordagem _greedy_: não é indicativo, contudo, da otimalidade geral
da procura; como vamos ver à frente, [**a procura $A^*$ não é ótima**](color:red).

:::

Infelizmente, não podemos garantir a otimalidade da procura $A^*$. Como contra-exemplo,
observe-se a seguinte árvore de procura (onde $D$ e $G$ são ambos estados objetivo):

![Árvore de Procura - Procura $A^*$ não é ótima](imgs/0003-a-estrela-nao-otima.svg#dark=3)

Aqui, $G$ é o objetivo ótimo, com custo caminho igual a $7$. Temos, contudo, que o seu pai
($C$) nunca é explorado, já que $B$ tem menor valor de $f$, $8$, e depois um dos seus filhos
também tem menor valor de $f$ - esse filho vai passar no teste objetivo, pelo que acabamos por não
pesquisar o resto da árvore, ficando sem passar por $G$.

### Quando é que uma procura pode ser ótima?

Parecia estar tudo a correr bem, mas voltámos a apercebermo-nos que se calhar ter uma procura
ótima não é assim tão fácil. Há, contudo, uma maneira de garantir que $A^*$ é ótima: recorrer
a **heurísticas admissíveis**.

:::tip[Heurísticas Admissíveis]

Dizemos que uma heurística é **admissível** se, para todo o nó $n$ da árvore de procura
se verificar que

$$
h(n) \leq h^*(n).
$$

Dito de outra forma, heurísticas admissíveis são sempre [**otimistas**](color:orange),
estimando sempre por baixo o custo de atingir o objetivo. Uma heurística admissível é,
por exemplo, a utilizada em Arad-Bucareste mais acima, onde $h$ corresponde à distância
em linha reta de cada nó ao destino: temos, claro, que a distância em linha reta é sempre
o **melhor caso**, mas que geralmente $h(n) < h^*(n)$ (os caminhos têm por norma curvas e afins).

[**Utilizar uma heurística admissível torna $A^*$ ótima**](color:green) em procura em árvore - podem ler
a prova detalhada [aqui](https://en.wikipedia.org/wiki/Admissible_heuristic#Optimality_Proof).

:::

Voltando ao exemplo de Arad-Bucareste, podemos agora perceber melhor a utilidade das garantias
que heurísticas admissíveis nos dão: há uma situação em que temos a possibilidade de ir
para Bucareste (já está na fronteira), mas que optamos por passar por Pitesti, visto
ter um valor de função de avaliação menor. A lógica acaba por ser bastante simples:
se existe a possibilidade de fazer um caminho mais curto por ali, vou primeiro verificar
se de facto consigo ou não antes de me contentar com o que já tenho.

Note-se que foi referido acima que utilizar heurísticas admissíveis só torna $A^*$ ótima
na procura em árvore: na **procura em grafo**, não adicionamos à fronteira estados por onde
já passámos, pelo que podemos eventualmente perder o caminho mais curto até ao objetivo.
Abaixo encontra-se um exemplo de uma situação onde podemos verificar isso mesmo:

![Procura em Grafo - Não Ótima](imgs/0003-procura-grafo-nao-otima.svg#dark=3)

A admissibilidade da heurística não garante, portanto, que $A^*$ seja ótima na procura em grafo,
visto que um nó pode ser descartado se já estiver sido explorado no passado - estamos
a perder possíveis caminhos mais curtos só por já ter explorado um mais caro anteriormente.

Podemos, contudo, garantir a otimalidade da procura $A^*$ em grafo, através de uma segunda
restrição às heurísticas: estas devem ser [**consistentes**](color:purple).

:::tip[Heurísticas Consistentes]

Dizemos que uma heurística é **consistente** se, para todo o $n$, para todos os seus
sucessores $n'$ gerados por ações $a$ se verificar a **desigualdade triangular**:

$$
h(n) \leq h(n') + c(n, a, n'),
$$

onde $c(n, a, n')$ corresponde ao custo associado a realizar a ação $a$ de $n$ para $n'$.

![Desigualdade Triangular](imgs/0003-desigualdade-triangular.svg#dark=3)

De forma mais simples, uma heurística diz-se consistente se, para todo o $n$, para todos os
seus sucessores $n'$ gerados por ações $a$, o custo estimado de ir de $n$ ao objetivo
for menor ou igual ao custo real de ir de $n$ a $n'$ somado ao custo estimado de ir de $n'$ ao objetivo.

Teremos, portanto:

$$
\begin{equation}
\begin{split}
f(n') &= g(n') + h(n')\\
&= g(n) + c(n, a, n') + h(n')\\
&\geq g(n) + h(n)\\
&\geq f(n)
\end{split}
\end{equation}
$$

Podemos assim depreender que, numa heurística consistente, $f$ nunca decresce ao longo do caminho.

:::

Voltemos então a olhar para a imagem-exemplo anterior:

![Procura em Grafo - Não Ótima (2)](imgs/0003-procura-grafo-nao-otima.svg#dark=3)

Ora, notando que não é ótima, resta tentar perceber porque é que não é consistente (já que
caso contrário a questão nem se colocaria). Pegando na nossa proposição inicial,
$h(n) \leq h(n') + c(n, a, n')$, podemos facilmente perceber que este é desrespeitado:

$$
h(A) = 7 \nleq 4 + 1 = c(A, B) + h(B).
$$

Como remate final, podemos dizer que [toda a heurística consistente é admissível](https://www.cs.cmu.edu/~15381-s19/recitations/rec2/rec2_sol.pdf),
mas [não podemos afirmar o contrário](https://cs.stackexchange.com/questions/63481/how-does-consistency-imply-that-a-heuristic-is-also-admissible).

---

Colocando de parte estas definições sobre heurísticas e voltando à procura $A^*$,
podemos afirmar que esta é completa para qualquer árvore com conjunto de estados finito.
Mais, é ótima para heurísticas admissíveis (como referido mais acima).

A complexidade temporal está, tal como as procuras que vamos abordar mais abaixo, dependente
da heurística utilizada - contudo, e como nos costumamos focar no pior caso, podemos afirmar
que esta é [exponencial](https://cs.stackexchange.com/questions/56176/a-graph-search-time-complexity),
$O(b^d)$. Adiciona-se ainda que, como $A^*$ acaba por consistir numa "BFS guiada por uma heurística",
podemos pensar no seu pior caso como tendo uma heurística constante - nesse caso, partilha
a complexidade espacial da BFS, também exponencial.

## Procura IDA$^*$

Da mesma maneira que tínhamos na DFS uma versão iterativa, que pesquisava a árvore
em profundidade com limites que aumentavam sequencialmente, existe uma abordagem de procura
$A^*$ que vai buscar parte da sua lógica à DFS iterativa: a procura $IDA^*$.

Corresponde, tal como se pode esperar, a uma versão iterativa em profundidade de $A^*$, onde
aqui o limite, $l$, baseia-se em $f$ (em vez dos níveis da árvore de procura).

A cada iteração, vamos procurar, **usando uma DFS**[\*](color:yellow) todos os nós da árvore que
possuam $f \leq l$; caso um nó, aquando da sua geração, tenha $f(n) > l$, **cortamo-lo** da árvore
momentaeamente. Levamos a iteração até ao fim, e quando a acabamos vamos atualizar o
limite para o **menor valor de $f$** entre os nós cortados na última iteração. Paramos
quando vamos expandir um nó e este passa o teste objetivo - como vamos ver um pouco mais
à frente, se o teste fosse feito na geração perdíamos otimalidade.

[\*](color:yellow)[**O valor de $f$ de um nó não é utilizado para escolher o próximo nó a expandir**](color:red),
apenas para decidir se este é cortado - a decisão de qual nó expandir é da DFS.

O exemplo seguinte pode ajudar a consolidar ideias:

![Exemplo IDA*](imgs/0003-ida-estrela.svg#dark=3)

$IDA^*$ partilha a completude e a complexidade temporal ($O(b^m)$) com $A^*$; mais,
é igualmente ótima para heurísticas admissíveis. Difere, contudo, quanto à complexidade
espacial: uma das propriedades que herda da sua semelhança com a DFS é precisamente
o espaço que ocupa, linear - $O(bm)$ - um claro _upgrade_ em relação ao espaço exponencial
ocupado pela abordagem $A^*$ "normal".

## Procura Melhor Primeiro Recursiva (RBFS)

No seu _core_, a RBFS acaba por procurar implementar a procura melhor primeiro
em espaço linear (através da recursão). Vamos procurando expandir sempre o nó, dentro
dos filhos do nó atual, que tenha menor valor de $f$. Ao mesmo tempo, vamos sempre guardando
recursivamente o **melhor caminho alternativo** ao nó atual - ou seja, o seu irmão ou antepassado
com menor valor de $f$. Se nenhum dos seus filhos tiver $f$ menor que esse valor alternativo,
passamos então a explorar o nó alternativo guardado (a recursão permite-nos recuperá-lo).
A procura termina assim que tentarmos expandir um nó que passa no teste objetivo.

**De realçar que a função de avaliação utilizada continua a ser igual à de $A^*$**,

$$
f(n) = g(n) + h(n).
$$

:::details[Exemplo RBFS, Arad-Bucareste]

Observe-se o exemplo seguinte:

![Exemplo - RBFS Step 1](imgs/0003-rbfs-fase-1.svg#dark=3)

Note-se a evolução da procura na imagem anterior:

- ao explorar Arad, encontrámos Sibiu, Timisoara e Zerind; Sibiu é o nó com menor $f$,
  logo vamos explorá-lo a seguir (e anotamos também que Timisoara, com $f = 447$, é a sua
  alternativa);
- ao explorar Sibiu, encontrámos Arad, Fagaras, Rimnicu Vilcea e Oradea; Rimnicu Vilcea
  é o nó com menor $f$, logo vamos explorá-lo a seguir (e anotamos também que Fagaras, com $f = 415$,
  é a sua alternativa);
- ao explorar Timisoara, encontrámos Craiova, Pitesti e Sibiu; estamos agora num impasse:
  o seu filho com menor valor de $f$ é Pitesti, com $f = 417$, mas existe uma alternativa
  com $f$ menor. Optamos, claro, por procurar primeiro a alternativa, visto que caso não o
  façamos podemos estar a ignorar um caminho melhor (e ainda por cima sabemos que ele existe,
  não faria sentido não ir lá).

![Exemplo RBFS Step 2](imgs/0003-rbfs-fase-2.svg#dark=3)

Após o _backtracking_, atualizamos o valor de $f$ em Rimnicu Vilcea (para o menor valor dos
seus filhos - sabemos mais sobre o custo de caminhos que partem dali, logo porque não
precisar ainda mais o custo daquele caminho?). Mais, anotamos agora Rimnicu Vilcea como alternativa
a Fagaras, e prosseguimos à respetiva expansão. Encontramos de novo o mesmo problema:
Bucareste, com $f = 450$, é o seu filho com menor valor de $f$, sendo este valor maior que
o caminho alternativo guardado anteriormente. Vamos, portanto, voltar a andar para trás
e seguir em frente em Pitesti:

![Exemplo - RBFS Step 3](imgs/0003-rbfs-fase-3.svg#dark=3)

Note-se como desta vez o caminho alternativo guardado é Timisoara - conseguimos recursivamente
voltar lá, ao **melhor caminho alternativo por visitar**, se for preciso. O próximo
nó a expandir seria Bucareste ($418$), que passa o teste objetivo, pelo que podemos
interromper a procura - chegámos ao caminho ótimo!

:::

No exemplo acima podemos notar que ocorrem duas **mudanças de opinião** por parte do
algoritmo. Estas mudanças de opinião, apesar de fulcrais para o funcionamento do algoritmo,
levam a uma regeneração de nós que rapidamente se pode tornar desagradável: utilizando apenas
espaço linear, o algoritmo acaba por ter de "esquecer" caminhos já expandidos, o que leva a que
tenhamos que expandir nós repetidamente, acabando por afetar a complexidade temporal
da procura. É, contudo, **completa** (para caminhos com custo crescente) e **ótima**
(para heurísticas admissíveis), _which is pretty nice_.

A complexidade espacial, linear, deve-se a guardarmos, na pior das hipóteses, o caminho
correspondente a todo um ramo, do início ao fim: caso tenhamos um caminho com profundidade
$d$, em que o último nó pai a ser expandido tem $b$ filhos, vamos ter $(d - 1) + bd$ nós em
memória (já que esquecemos todos os nós que não estejam no caminho que estamos a percorrer),
pelo que o espaço ocupado é dado por $O(bd)$. A complexidade temporal é, tal como em $IDA^*$,
exponencial: $O(b^d)$.

## Heurísticas - _deep-dive_

Considere-se o problema 8-Puzzle, onde, dada uma configuração inicial de peças, o objetivo
passa por movê-las horizontal ou verticalmente até atingir a configuração-objetivo.

![8 Puzzle - Exemplo](imgs/0003-8-puzzle-exemplo.svg#dark=3)
_Custo Ótimo = 26 passos_

Temos, como propriedades calculadas _à priori_ do problema, que a profundidade média
de uma solução para este problema (dada uma configuração inicial gerada aleatoriamente)
é de $22$ passos. Mais ainda, o fator de ramificação, $b$, é de cerca de $3$: com o canto
vazio, podemos mover para lá $2$ peças; com o centro vazio, podemos mover para lá $4$
peças, e com qualquer outra posição vazia podemos mover para lá $3$ peças (e a ramificação
média acaba por ser à volta de $3$). Temos, portanto, que uma árvore de procura poderá
ter, na pior das hipóteses, $b^d = 3^{22}$ estados: fazer uma procura exaustiva por
todos eles seria relativamente desagradável, pelo que convém arranjarmos uma boa heurística
que nos permita restringir de forma concisa certos ramos da árvore, evitando pesquisas
desnecessárias.

Existem duas heurísticas admissíveis clássicas para o 8-Puzzle a que se costuma recorrer
para ilustrar a utilidade de boas heurísticas:

- uma primeira, seja ela $h_1$, que admite que qualquer peça que não esteja na posição
  correta precisa de pelo menos um movimento para lá chegar. Com $g_i$ a representar a posição
  correta da peça $i$, e $n_i$ a sua posição atual, podemos definir $h_1$ tal que:

  $$
  h_1(n) = \sum_{i=1}^{8} \left\{
    \begin{array}{ll}
      1 & \text{se } n_i \neq g_i \\
      0 & \text{caso contrário}
    \end{array} \right.
  $$

  No caso do 8-Puzzle proposto acima, temos que $h_1(n) = 8$, inicialmente. A heurística é,
  claro, **admissível**: cada jogada move apenas uma peça, pelo que se houver inicialmente
  $x$ peças fora do sítio, pelo menos $x$ movimentos terão de ser feitos para chegar
  à configuração pretendida. Garantidamente, $h_1(n) \leq h^*(n)$.

- uma segunda, seja ela $h_2$, que recorre à noção de
  [distância de Manhattan](https://xlinux.nist.gov/dads/HTML/manhattanDistance.html)
  entre uma peça e a sua localização correta, por forma a estimar o número de passos necessários
  até a atingir. $h_2$ pode ser definida da seguinte forma:

  $$
  h_2(n) = \sum_{i=1}^{8} |g_i - n_i|
  $$

  Tal como $h_1$, $h_2$ é igualmente admissível: estamos aqui a admitir que se realizarmos
  uma quantidade de movimentos exatamente igual ao chão do número de movimentos requeridos
  para colocar todas as peças no sítio, elas ficam no sítio. Esta estimativa e o número real
  podem até ser iguais, mas como só movemos uma peça por jogada, a estimativa nunca
  ultrapassará o custo real, pelo que $h_2(n) \leq h^*(n)$. Note-se ainda que, para o exemplo
  utilizado, $h_2(n)$ é inicialmente $3 + 1 + 2 + 2 + 2 + 3 + 3 + 2 = 18$: a peça $1$
  precisa de $3$ movimentos horizontais e/ou verticais para chegar à peça ideal, a peça
  $2$ de apenas $1$ e assim sucessivamente.

### Comparar heurísticas

Seria agora interessante comparar $h_1$ e $h_2$, para procurar perceber qual das duas
acaba por dar maiores ganhos de performance em procuras. Uma maneira bastante comum de
fazer esta comparação é recorrendo a $b^*$,
o [**_effective branching factor_**](http://ozark.hendrix.edu/~ferrer/courses/335/f11/lectures/effective-branching.html)
da árvore de procura, já que este acaba por ser relativamente consistente para problemas
suficientemente difíceis. Dizemos que heurísticas são tanto melhores quanto mais o seu
$b^*$ se aproximar de $1$, já que dessa forma estamos efetivamente a dizer que para atingir
a "solução média" do problema praticamente não temos de fazer _branching_ (ou pouco),
havendo portanto menos caminhos alternativos a ser explorados: com uma heurística ideal,
teríamos $b^* = 1$ e a árvore de procura seria apenas um ramo contínuo.

O livro que acompanha a cadeira apresenta uma tabela que ajuda a comparar o total de
nós gerados e o $b^*$ entre $A^*$ com cada uma das heurísticas e a DFS iterativa (esta
última uma procura cega, sem heurísticas).

![Tabela, Comparação Heurísticas](imgs/0003-tabela-comparacao.svg#dark=4)

Como podemos observar, a procura cega torna-se rapidamente incomportável; mais, apesar
de $h_1$ não ser horrível, não traz qualquer benefício em comparação com $h_2$ e existe
uma justificação teórica para tal acontecer.

Em primeiro lugar, vamos notar que

$$
h_1(n) \leq h_2(n) \leq h^*(n), \forall_n.
$$

Quando para qualquer nó $n$ podemos garantir que $h_2(n) \geq h_1(n)$, afirmamos que
[**$h_2$ domina $h_1$**](color:orange). Mais importante ainda, a noção de dominância traduz-se
diretamente em eficiência: se $h_2$ domina $h_1$, $h_2$ [**nunca**](color:red) irá
expandir mais nós que $h_1$.

:::details[Prova: Dominância $\implies$ Eficiência]

Na procura $A^*$, é garantido que todos os nós com função de avaliação menor que o
custo do caminho mais barato vão ser expandidos - todos os nós tal que $f(n) < C^*$.
Tal é o mesmo que afirmar que todos os nós com $h(n) < C^* - g(n)$ serão expandidos.
Ora, mas se $h_2$ domina $h_1$, então qualquer nó expandido via $h_2$ será inevitavelmente
expandido por $h_1$, podendo ainda haver mais nós a ser expandidos com esta última.
Assim sendo, podemos afirmar que com $h_2$ vamos sempre expandir menos nó, garantindo
portanto que $h_2$ é mais eficiente.

:::

:::info[Heurísticas não admissíveis podem fazer sentido]

Considere-se um agente GPS. Um condutor fez uma _query_, em que pediu ao GPS o melhor
caminho para ir de Pombal a Vale de Cambra. Tenhamos em atenção o gráfico abaixo, que
apresenta o comportamento de três heurísticas em relação ao mesmo problema:

![Heurísticas Não Admissíveis?](imgs/0003-grafico-nao-admissiveis.svg#dark=2)

Ora, a primeira coisa em que reparamos ao olhar para $h_3$ é, provavelmente, de duas uma:

- $h_3$ não é ótima, já que há certos intervalos em que $h_3(n) > h^*(n)$;
- $h_3$ domina tanto $h_2$ como $h_1$, encontrando-se inclusive sempre muito mais próxima de
  $h^*$ que as outras duas.

Voltemos ao exemplo do GPS: considere-se que as duas primeiras heurísticas demoram $4$
e $5$ minutos, respetivamente, a responder à _query_ proposta, e que a terceira demora $7$
segundos. Com um erro associado tão baixo ($h_3$ nunca se desvia muito de $h^*$), não
fará mais sentido contentarmo-nos com uma resposta quase ótima mas muito rápida, em vez
de uma que seja garantidamente ótima mas que seja bastante demorada? Um trajeto de $1$ hora e
um quarto retornado de forma praticamente instantânea parece sem dúvida uma proposta melhor
do que um caminho que corte $2$ minutos à duração da viagem mas cuja resposta demore muito mais!

:::

### Como inventar boas heurísticas?

:::warning[Página em Construção]

Esta secção encontra-se atualmente incompleta.

O conteúdo será adicionado assim que possível.

:::

---

Adicionamos que esta secção corresponde ao terceiro capítulo do livro que acompanha a cadeira
(_Solving Problems by Searching_), sub-secções 3.5 e 3.6.

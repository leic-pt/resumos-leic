---
title: Procura Adversária e Jogos
description: Jogos zero-sum.
  Procura Adversária.
path: /ia/jogos
type: content
---

# Procura Adversária e Jogos

```toc

```

Até agora, abordámos apenas cenários em que um agente se encontra sozinho a tentar
resolver um problema, desde Arad-Bucareste até colorir o mapa australiano. O próximo passo
será procurar aprender abordagens que funcionem em [**sistemas multi-agente**](color:orange) - tentar prever
o impacto das ações de outros agentes, **imprevisíveis**, por forma a tentar fazer a melhor
escolha possível do nosso lado.

## Jogos

Por norma, vamos olhar para problemas completamente observáveis de dois jogadores, os
[**_zero-sum games_**](color:green): uma jogada que é boa para um agente será má para
o outro - se tentarmos quantificar o impacto de uma jogada para cada um dos agentes,
esta apresentará valores simétricos para cada um deles.

:::info[Caracterização de jogos zero-sum]

A definição clássica nomeia os dois agentes como [**MIN**](color:red) e [**MAX**](color:green),
onde MAX joga sempre primeiro e ambos os agentes procuram sempre a [**melhor jogada que podem
realizar a seguir**](color:green). Idealmente, os agentes atuam sob a perspetiva de pontuação,
por forma a conseguir quantificar (de forma mais ou menos precisa) o desempenho de cada um:
no final de cada jogo, cada um dos agentes recebe bonificações ou penalizações consoante
o seu desempenho durante o mesmo.

O jogo em si tem várias componentes-base:

- Um estado inicial, $S_0$, que corresponde à configuração inicial do mesmo.
- Uma função, $\op{player}(s: state)$, que especifica o jogador que vai jogar no estado em questão.
- Uma função, $\op{action}(s: state)$, que retorna todas as **jogadas possíveis** para o estado em questão.
- Uma função, $\op{result}(s: state, a:action)$, que, tal como abordado em secções anteriores,
  corresponde ao **modelo de transição** do jogo, que define o estado resultante de
  realizar uma jogada $a$ sob um estado $s$.
- No lugar do $\op{goal\_test}$, abordado anteriormente, vamos ter uma função $\op{terminal\_test}$
  (que funciona de forma praticamente igual): retorna _true_ caso o jogo esteja num [**estado
  terminal**](color:red), e _false_ caso contrário.
- Por fim, uma função $\op{utility}(s: state, p:player)$, que especifica a pontuação atribuída
  a um jogador $p$ caso o jogo termine num estado terminal $s$.

Voltamos, aqui, a ter associada a noção de [**espaço de estados**](color:orange), que resulta numa
árvore onde cada nó corresponde a um estado e os arcos correspondem a jogadas. A procura
da **melhor jogada** funcionará, tal como referido em secções anteriores, através de
travessias por essa mesma árvore (e, claro, tal como nessas secções, vamos ver formas
de tornar esta procura mais eficiente).

Abaixo encontra-se um exemplo do que corresponderia a dois níveis distintos da árvore,
devidamente identificados com MIN e MAX:

:::details[Exemplo - Árvore de Procura, Jogo do Galo]

![Jogo do Galo](imgs/0005-tic-tac-toe.svg#dark=2)

Note-se, claro, que o estado mais à esquerda é considerado [**estado terminal**](color:yellow) para o jogo
do galo, estando devidamente etiquetado com o valor da respetiva função de utilidade
para o jogador MAX, X. Idealmente, o jogador MIN, O, teria função de utilidade associada com valor
simétrico (apesar de em alguns jogos, como o xadrez, tal não ser necessariamente o caso).

:::

## Escolhas Ótimas - Algoritmo Minimax

Um dos algoritmos clássicos de procura em jogos é o [**Minimax**](color:green).

Considerando jogos com dois agentes, o funcionamento do algoritmo Minimax é relativamente
simples: cada agente vai sempre escolher a jogada que maximiza o [**valor minimax**](color:green),
que corresponde ao **melhor valor para a função de utilidade contra as melhores jogadas do
adversário**: assumimos, portanto, que o adversário escolhe sempre a melhor jogada possível
(diferindo aqui de cenários reais, onde as pessoas nem sempre executam jogadas previsíveis).
Este valor pode ser calculado através da seguinte função:

$$
\op{minimax(s)} = \begin{cases}
  \op{utility(s, MAX)} & \text{se} \op{terminal\_test(s)} \\
  \max_{a \in \op{actions(s)}} \op{minimax(result(s, a))} & \text{se} \op{player(s)} = \op{MAX} \\
  \min_{a \in \op{actions(s)}} \op{minimax(result(s, a))} & \text{se} \op{player(s)} = \op{MIN}
\end{cases}
$$

Colocando por palavras, temos que MIN vai sempre tentar escolher a jogada que [**minimiza**](color:red)
as hipóteses de MAX ganhar. Assim sendo, de entre todas as jogadas que MIN idealmente fará,
MAX vai tentar [**maximizar**](color:green) as suas próprias hipóteses de ganhar, escolhendo a jogada com
maior valor minimax. O exemplo abaixo poderá ajudar a clarificar este conceito:

![Minimax - Exemplo Inicial](imgs/0005-minimax-basic-example.svg#dark=2)

O algoritmo faz, portanto, uma **procura em profundidade** (para obter os valores dos estados
terminais e propagá-los para cima), acabando por ter de explorar toda a árvore
de jogo na mesma - já vamos ver que é um pormenor desagradável da implementação _naive_ do
algoritmo, podendo modificá-lo por forma a melhor a sua eficiência. Tratando-se basicamente
de uma $DFS$, partilha também as suas complexidades temporal e espacial: a **complexidade temporal**
é $O(b^d)$ e a **espacial** é linear, $O(bd)$ (podendo ainda ser melhorada para $O(d)$,
caso os sucessores sejam gerados um a um). É completo, claro, e tal como referido acima
só garante otimalidade contra adversários ótimos: em cenários reais, haverá obviamente
o fator de imprevisibilidade que retira a otimalidade ao algoritmo.

:::tip[Generalização para $n$ jogadores]

Podemos generalizar o funcionamento do algoritmo para $n$ agentes. Para tal,
vamos guardar um **vetor de valores de utilidade**, em vez de um valor só, e cada jogador
vai, idealmente, escolher a jogada que mais o beneficia de entre todas as possíveis,
mantendo, claro, guardados também os valores que cada jogada terá para os outros agentes:
havendo uma quantidade arbitrária de jogadores, cada um deles acaba por não se preocupar
tanto com "estragar o jogo ao outro" como com "preocupar-se com o próprio jogo". As
estratégias ótimas podem, naturalmente, traduzir-se em alianças informais entre vários
jogadores.

:::details[Minimax - Exemplo Multi-Agente]

![Minimax - Exemplo Multi-Agente](imgs/0005-minimax-multiplayer-example.svg#dark=2)

Note-se que $C$ escolhe, no seu nó mais à esquerda, $(1, 2, 6)$, visto que, entre os seus filhos, é essa a jogada
que maximiza $X_C$. Vamos aplicando lógicas semelhantes sucessivamente (para todos os nós
da árvore), chegando eventualmente à conclusão que $(1, 2, 6)$ é a jogada ótima para $A$,
considerando, claro, que todos os outros agentes também jogam de forma ótima.

:::

### Procura com Cortes

Como podem ter notado com o exemplo para o Minimax de 2 agentes acima, existem situações
em que não precisamos de olhar para todos os "filhos" de um nó para obter toda a informação
que precisamos - por vezes, podemos inferir se a jogada que estamos a ver é relevante
ou não mais cedo, conseguindo assim reduzir com segurança o número de estados que temos
de analisar. Uma das formas de verificar isso mesmo é, claro, [**cortando**](color:green)
ramos da árvore, e vamos abordar os cortes $\op{\alpha - \beta}$ para esse efeito.

Vamos ter, aqui, que a nossa $DFS$ vai manter um par de valores, $\op{\alpha}$ e $\op{\beta}$,
correspondendo, respetivamente, ao **valor da melhor escolha encontrada até agora para MAX** e ao
**valor da melhor escolha encontrada até agora para MIN**.

Procuremos olhar primeiro para o exemplo abaixo:

:::details[Exemplo - Alpha-Beta Pruning]

![Alpha-Beta Pruning](imgs/0005-alpha-beta-pruning.svg#dark=2)

Note-se que chegámos exatamente à mesma **jogada ótima** a que tínhamos chegado segundo
o Minimax clássico - fizemo-lo, contudo, de forma mais eficiente, cortando ramos irrelevantes!

:::

A abordagem seguindo cortes $\alpha$ e $\beta$ corresponde, na prática, a uma alteração simples
ao pseudo-código original do algoritmo Minimax: agora, caso nós já saibamos (porque já vimos)
que temos mais acima na árvore uma opção melhor do que aquela que estamos a analisar agora,
então a escolha ótima nunca recairá sobre o nó onde nos encontrámos, pelo que podemos
simplesmente cortá-lo e avançar para o próximo.

Note-se que aplicar este tipo de cortes [**não afeta a completude nem a otimalidade**](color:red)
do algoritmo: continua a ser completo, e a ser ótimo apenas considerando adversários ótimos.
Mais, a sua eficiência tem uma _range_ de melhoria, podendo ir desde ser completamente irrelevante
até uma melhoria exponencial de $O(b^d)$ para $O(b^{\frac{d}{2}})$!

:::info[Cortes - Melhoria de Desempenho]

A ordenação [**ótima**](color:green) de nós é a ordenada segundo os valores que queremos
visitar primeiro, claro - no caso do MIN, de forma [**crescente**](color:green), e [**decrescente**](color:red)
no caso do MAX, por forma a poder cortar logo todos os outros nós.
Note-se, contudo, que na prática só nos é completamente útil
caso saibamos de antemão que está assim ordenada, já que caso contrário podemos ter na mesma
de verificar todos os nós até ao fim. A imagem abaixo pode tornar esta ideia mais clara:

![Alpha Beta - Ordenação Ótima](imgs/0005-alpha-beta-optimal.svg#dark=2)

Caso consigamos **sempre** cortar o resto da sub-árvore assim que analisamos o primeiro nó
(estamos, aí, na presença da [**ordenação ótima**](color:orange)), vamos verificar que
o algoritmo corre em tempo $b^{\frac{d}{2}}$: podem encontrar uma prova mais completa
da complexidade temporal do melhor caso dos cortes $\alpha$-$\beta$
[aqui](http://www.cs.utsa.edu/~bylander/cs5233/a-b-analysis.pdf). Podemos, com a ordenação ótima,
atingir [**o dobro da profundidade**](color:green) na procura no mesmo período de tempo!

:::

---

Adicionamos que esta secção corresponde ao quinto capítulo do livro que acompanha a cadeira
(_Adversarial Search and Games_).

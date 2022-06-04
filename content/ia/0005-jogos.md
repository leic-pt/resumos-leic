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

Ora, mas se no jogo do galo vamos poder ter $9!$ nós terminais diferentes (não necessariamente
todos distintos), deverão haver maneiras de otimizar as nossas travessias pela árvore, por
forma a tornar as nossas previsões comportáveis para jogos com espaços de estados maiores.
Um dos algoritmos clássicos que procura isso mesmo é o [**Minimax**](color:green).

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

a

---

Adicionamos que esta secção corresponde ao quinto capítulo do livro que acompanha a cadeira
(_Adversarial Search and Games_).

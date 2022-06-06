---
title: Procura Local
description: # TODO
path: /ia/procura-local
type: content
---

# Procura Local

```toc

```

Tal como referido na secção dos CSPs, a procura local é uma abordagem de procura que
parte de uma configuração inicial completa, procurando encontrar uma configuração
completa e consistente - de um modo mais geral, e procurando abstrair-mo-nos do contexto
dos CSPs, procuramos um [**estado objetivo**](color:orange), realizando transições sucessivas
entre "estados vizinhos". Tem, claro, [**ganhos**](color:green) quanto à sua
[**complexidade espacial**](color:green), em comparação com a procura sistemática habitual: em vez
de termos de guardar uma árvore de procura, vamos apenas guardando uma configuração
do problema que se vai alterando com o passar do tempo. Contudo, e como
_there's no such thing as a free lunch_, estes ganhos em memória traduzem-se na
[**incapacidade de saber o caminho**](color:red) que leva uma configuração "vazia"
do problema a uma solução - esta forma de procura é, portanto, **ideal para cenários
onde o caminho é irrelevante**, e apenas queremos saber se existe uma solução possível
(e, se sim, qual). Mais ainda, correm o risco de ficar facilmente presas em ciclos,
não sendo, portanto, [**completas**](color:red) nem [**ótimas**](color:red) com implementações
normais.

A ausência de otimalidade é relativamente simples de compreender: se um estado tiver um
dada valor objetivo $n$, e todos os seus vizinhos tiverem valores objetivo superiores a $n$
(considerando, claro, que o objetivo é maximizar esse valor), o algoritmo fica sem saber para
onde ir, parando ali, mesmo que eventualmente exista outro estado com valor objetivo maior.
O gráfico abaixo ilustra de forma clara este problema: através da procura local, conseguimos
encontrar de forma rápida [**máximos locais**](color:orange), mas não é garantido que
encontremos o [**máximo global**](color:red), configuração ótima pretendida:

![Procura Local - Máximos Locais vs Globais](...)

Note-se como, olhando para o estado atual, e considerando que a cada momento temos apenas
dois vizinhos (o estado "à esquerda" e o "à direita"), vamos acabar sempre por ir para a direita,
efetivamente afastando-nos do estado ótimo. Assim que chegamos ao máximo local, os respetivos estados
à esquerda e à direita têm ambos valores objetivo menos, pelo que a procura para aí,
num **máximo local** que não é o **máximo global**.

## Procura Hill-Climbing/Local Gananciosa

Funciona tal e qual foi referido mais acima: uma procura que escolhe sempre o estado
com [**maior valor objetivo**](color:green) de entre os seus vizinhos, terminando quando
nenhum dos seus vizinhos tem valor melhor que ele próprio. O nome vem precisamente da forma
como se comporta: esta abordagem procura sempre "trepar a colina mais inclinada que consegue ver",
considerando, claro, que só consegue ver o que está imediatamente à sua frente.

```bash
function hill_climbing(problem)
  current_state = problem.initial_state
  while true do
    # se houver mais que um vizinho com valor objetivo máximo,
    # a escolha é feita de forma aleatória
    neighbor = current_state.get_highest_valued_neighbor()
    if neighbor.value <= current_state.value then
      return current_state
    current = neighbor
  done
```

Note-se mais uma vez como _hill climbing_ sofre o problema de poder parar em máximos
locais, ignorando outros máximos que existam (possivelmente com valor maior do que onde está):

![Hill Climbing - Ciclos](imgs/0006-hill-climbing-maximum.svg#dark=2)

[\*](color:yellow) Voltando a pegar na questão da completude, o nosso estado final
[**pode até não corresponder a uma solução admissível**](color:red): no exemplo das $8$
rainhas ilustrado abaixo, chegamos a uma situação onde qualquer movimento que façamos
leva a que mais rainhas se ataquem (no momento imediatamente seguinte), pelo que a
procura termina, e terminámos sem solução!

![8 Rainhas - Final sem Solução Completa](imgs/0006-chess-completeness.svg#dark=3)

Uma maneira que foi pensada para contornar o problema dos máximos locais nesta procura
foi alterar ligeiramente o pseudo-código do mesmo: passar de
`if neighbor.value <= current_state.value then` para `if neighbor.value < current_state.value then`,
podendo, assim, "atravessar planaltos". Surgem, contudo, outros problemas: podemos
facilmente entrar em ciclos (combatidos colocando um limite no número de _sideways moves_,
por exemplo), e, claro, continua sem haver garantia de que de facto encontremos a solução
pretendida.

### Variações - Hill Climbing

Sendo _hill climbing_ uma das abordagens clássicas para procura local, houve inevitavelmente
várias maneiras de a tentar melhorar.

:::info[Stochastic Hill Climbing]

Variação bastante simples: em vez de escolher sempre o estado com maior valor objetivo
de entre os vizinhos com valor objetivo maior que o seu, vamos aqui escolher um estado
de [**forma aleatória**](color:yellow) de entre esse mesmo grupo de vizinhos - deixa de ser uma escolha
_gananciosa_, já que não vamos sempre escolher o estado com maior valor objetivo, passando
a ser estocástica (ligada à sorte, portanto).

:::

:::tip[First-Choice Hill Climbing]

Em vez de gerar todos os sucessores de uma vez e escolher o vizinho entre o conjunto
de todos os vizinhos com valor objetivo maior que o próprio, vamos aqui gerar os
sucessores, de forma aleatória, um de cada vez, e escolher [**o primeiro**](color:green)
com valor objetivo maior que o que já temos. Poupa, claro, tempo de processamento
(visto que, por norma, há uma grande quantidade de sucessores que nunca é gerada),
sendo portanto ideal para espaços de estados onde cada um tem uma quantidade relativamente
grande de vizinhos.

:::

Note-se que nenhuma das abordagens referidas até agora resolve o problema do algoritmo
poder parar em máximos locais.

Ora, uma maneira interessante de contornar este problema seria, por exemplo, a
[**aleatoriedade**](color:orange): visto que vamos sempre iniciar a procura com uma
configuração inicial aleatória, se o fizermos vezes suficientes é bastante provável
que cheguemos à solução pretendida. Houve estudos realizados para o problema das $8$ rainhas,
precisamente para tentar perceber se esta abordagem valeria ou não a pena. Descobriu-se que,
em média, partindo de uma configuração inicial arbitrária:

- se for encontrar uma solução, fá-lo-á em cerca de $4$ passos;
- se for ficar preso, tal acontecerá em cerca de $3$ passos.

Podemos, assim, "parar a procura" (tanto artificialmente como porque chegamos a uma
solução) bastante rápido, pelo que vale a pena fazer a procura várias vezes, com
configurações iniciais distintas, por forma a tentar obter a solução pretendida.

Tem-se que esta variante, a [**random-restart hill climbing**](color:orange), é completa
para uma probabilidade próxima de $1$ - quanto mais vezes for repetida, maior a probabilidade
de encontrar a solução. Considerando $p$ como a probabilidade de sucesso de cada procura,
vamos (em princípio) precisar de cerca de $\frac{1}{p}$ tentativas para encontrar a solução.
Considerando, por exemplo, o problema das $8$ rainhas que converge para solução (ou fracasso)
bastante rápido, esta abordagem parece excelente: apesar de não garantir, em teoria,
completude, na prática é raríssimo que com um número suficiente de tentativas não encontremos
a solução.

---

Adicionamos que esta secção corresponde ao quarto capítulo do livro que acompanha a cadeira
(_Search in Complex Environments_).

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
não sendo, portanto, [**completas**](color:red)[\*](color:yellow) nem [**ótimas**](color:red) com implementações
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

Note-se o perigo de ciclos: rapidamente podemos começar a andar às voltas entre o mesmo par
de estados! Olhando para o exemplo abaixo, partindo do espaço atual, vamos mover-nos para
o "estado à direita". De seguida, vamos ver os valores objetivos dos vizinhos desse novo
estado, e como o original tem valor objetivo superior, voltamos a mover-nos para ele,
efetivamente entrando num ciclo, do qual não conseguimos sair.

![Hill Climbing - Ciclos](imgs/0006-hill-climbing-cycles.svg#dark=2)

[\*](color:yellow) Voltando a pegar na questão da completude, o nosso estado final
[**pode até não corresponder a uma solução admissível**](color:red): no exemplo das $8$
rainhas ilustrado abaixo, chegamos a uma situação onde qualquer movimento que façamos
leva a que mais rainhas se ataquem (no momento imediatamente seguinte), pelo que a
procura termina, e terminámos sem solução!

![8 Rainhas - Final sem Solução Completa](imgs/0006-chess-completeness.svg#dark=3)

<!-- TODO: adicionar mais cenas, slide 18/82 -->

---

Adicionamos que esta secção corresponde ao quarto capítulo do livro que acompanha a cadeira
(_Search in Complex Environments_).

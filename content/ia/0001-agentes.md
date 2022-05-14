---
title: Agentes
description: Agentes e Ambientes.
  Racionalidade.
  Caracterização de Agentes.
  Tipos de Agentes e Ambientes.
path: /ia/agentes
type: content
---

# Agentes

```toc

```

## Introdução a Agentes

A definição de **agente** está intrinsecamente ligada ao ambiente que o envolve - um [**agente**](color:orange) é tudo o que capta o ambiente que o envolve, através de **sensores**, e que consegue atuar sobre o mesmo (através de **atuadores**). Podemos pensar, por exemplo, nos **humanos** como agentes: os seus recetores são, entre outros, os olhos e o nariz, atuando através das mãos, pés e por aí fora. Um robô, por outro lado, teria câmeras e/ou infravermelhos como recetores, atuando através das respetivas partes motoras.

![Diagrama - Agentes e Ambientes](https://developmentalsystems.org/sensorimotor-lenia/public/mechanistic.svg#dark=3)

Todo o agente tem uma **sequência de perceções**: o histórico de perceções associadas ao agente. De um modo geral, agentes fazem escolhas baseadas nas suas percepções passadas, não em acontecimentos que ainda não ocorreram, daí a importância de guardar o respetivo histórico de percepções. Podemos até pensar na sequência de perceções como na **base de dados** de um programa em lógica: o programa tem um dado conjunto de coisas que conhece e pode fazer inferências sobre as mesmas, da mesma maneira que um agente tem um histórico de perceções e depois toma ações consoante as mesmas.

### Função Agente

:::info[Função Agente]

Dizemos que o comportamento de um agente pode ser descrito por uma função, a **função agente**:

$$
f: \mathcal{P^*} \rightarrow \mathcal{A}.
$$

A função agente mapeia uma sequência de percepções numa ação. Dizemos que uma função agente é executada por um programa, o **programa agente**, numa dada plataforma.

:::

O exemplo clássico (utilizado tanto no livro que acompanha a cadeira como nas aulas teóricas) utilizado para demonstrar funções agente é o do **aspirador**, um agente autónomo com um "mundo" e conjunto de ações finitos (e pequenos).

![Aspirador - Localizações](imgs/0001-aspirador.png#dark=2)

Aqui, consideramos que a localização $A$ está mesmo à direita da $B$ (e vice-versa), e que cada localização pode estar atualmente limpa ou suja. Mais, consideramos que só pode executar três ações: mover-se para a direita e para a esquerda e aspirar. Abaixo temos uma possível sequência de perceções, com a respetiva ação tomada pelo agente associada.

| Sequência de Perceções                | Ação              |
| ------------------------------------- | ----------------- |
| $[A, \text{Limpo}]$                   | $\text{Direita}$  |
| $[B, \text{Sujo}]$                    | $\text{Aspirar}$  |
| $[B, \text{Limpo}]$                   | $\text{Esquerda}$ |
| $[A, \text{Sujo}]$                    | $\text{Aspirar}$  |
| $[A, \text{Limpo}]$                   | $\text{Direita}$  |
| $\vdots$                              | $\vdots$          |
| $[A, \text{Limpo}], [A, \text{Sujo}]$ | $\text{Aspirar}$  |
| $\vdots$                              | $\vdots$          |

Note-se que esta tabela corresponde à tabulação de uma função agente relativamente simples - damos uma perceção ou sequência de perceções à função e ela devolve uma ação. Mais ainda, resta notar que o agente funciona em _loop_: da maneira definida atualmente, o aspirador nunca vai parar, estando sempre a limpar e trocar de localizações.

## Agentes Racionais

Agentes racionais procuram sempre realizar as ações que, segundo a informação que lhes é dada e os conhecimentos que têm, resultarão idealmente em cenários mais desejáveis/numa maior expectativa de sucesso, segundo um conjunto de medidas de desempenho - entra aqui a noção de fazer a [**escolha certa**](color:green). Em relação ao exemplo do aspirador, poderíamos introduzir medidas de desempenho ao agente: tempo gasto, quantidade de sujidade aspirada, entre outras.

![Diagrama - Agentes Racionais](imgs/0001-agentes-racionais.png#dark=3)

Existe aqui, mais que uma função agente quase direta (tenho isto, faço aquilo, sem considerar contexto nem nada do género), um raciocínio por detrás da escolha a tomar, que pode nem sempre ser o óbvio.

Devemos, contudo, atentar que tal como nós não sabemos sempre a decisão certa (apesar de poder raciocinar sobre a mesma), [**os agentes também não**](color:red): agentes racionais devem responder com a decisão ótima **dentro do que sabem**, mas não são **omniscientes** - não sabem tudo - pelo que a decisão que tomam pode não ser a ideal. Mais ainda, **a ação pode não resultar no que pretendemos**, já que imprevistos acontecem e nem sempre conseguimos escapar deles. Se estivermos numa estrada e de repente houver um acidente que corta todas as faixas, azar, ficamos umas horas presas no trânsito, mesmo tendo verificado que em teoria seguir essa estrada traduzir-se-ia no caminho mais curto antes de sair de casa. Podemos, portanto, a partir dos dois pontos aqui levantados, afirmar que [**o raciocínio nem sempre leva ao sucesso**](color:yellow).

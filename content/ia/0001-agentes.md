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

## Introdução à Inteligência Artificial

No geral, existem diferentes perspetivas relativamente ao estudo da Inteligência Artificial e da maneira como esta é definida, estando cada uma delas predominantemente associada a uma determinada área.

|               | **...como os humanos**                                             | **...racionalmente**                                          |
| ------------- | ------------------------------------------------------------------ | ------------------------------------------------------------- |
| **pensar...** | [**Pensar como os humanos**](color:pink) (Psicologia e Neurologia) | [**Pensar racionalmente**](color:green) (Matemática e Lógica) |
| **atuar...**  | [**Atuar como os humanos**](color:yellow) (Teste de Turing)        | _**[Atuar racionalmente](color:purple) (Agentes Racionais)**_ |

A perspetiva seguida na cadeira é a última apresentada, focando-se no estudo de [**agentes racionais**](color:purple) capazes de, tal como o nome sugere, atuar racionalmente.

## Introdução a Agentes

A definição de **agente** está intrinsecamente ligada ao ambiente que o envolve - um [**agente**](color:orange) é tudo o que capta o ambiente que o envolve, através de **sensores**, e que consegue atuar sobre o mesmo (através de **atuadores**). Podemos pensar, por exemplo, nos **humanos** como agentes: os seus recetores são, entre outros, os olhos e o nariz, atuando através das mãos, pés e por aí fora. Um **robô**, por outro lado, teria câmaras e/ou infravermelhos como recetores, atuando através das respetivas partes motoras.

![Diagrama - Agentes e Ambientes](imgs/0001-mechanistic-view.svg#dark=4)

Todo o agente tem uma **sequência de perceções**: o histórico de perceções associadas ao agente. De um modo geral, agentes fazem escolhas baseadas nas suas perceções passadas, não em acontecimentos que ainda não ocorreram, daí a importância de guardar o respetivo histórico de perceções. Podemos até pensar na sequência de perceções como na **base de dados** de um programa em lógica: o programa tem um dado conjunto de coisas que conhece e pode fazer inferências sobre as mesmas, da mesma maneira que um agente tem um histórico de perceções e depois toma ações consoante as mesmas.

### Função Agente

:::info[Função Agente]

Dizemos que o comportamento de um agente pode ser descrito por uma função, a **função agente**:

$$
f: \mathcal{P^*} \rightarrow \mathcal{A}.
$$

A função agente mapeia uma _sequência de perceções_ [(não apenas uma única perceção)](color:red) numa ação. Dizemos que uma função agente é executada por um programa, o **programa agente**, numa dada **plataforma**. Tem-se, portanto, que [um agente é composto por uma plataforma e por um programa](color:yellow) (que nela executado produz $f$).

:::

O exemplo clássico (presente tanto no livro que acompanha a cadeira como nas aulas teóricas) utilizado para demonstrar funções agente é o do **aspirador**, um agente autónomo com um "mundo" e conjunto de ações finito (e pequeno).

![Aspirador - Localizações](imgs/0001-vacuum-cleaner.svg#dark=1)

Aqui, consideramos que a localização $B$ está mesmo à direita da $A$ (e vice-versa), havendo portanto duas posições possíveis para o robô estar, e que cada localização pode estar atualmente limpa ou suja. Mais ainda, consideramos que este só pode executar três ações: (1) mover-se para a direita, (2) mover-se para a esquerda ou (3) aspirar. Abaixo, temos uma possível sequência de perceções, com a respetiva ação tomada pelo agente associada.

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

Note-se que esta tabela corresponde à tabulação de uma função agente relativamente simples - damos a sequência de perceções à função e ela devolve uma ação. Resta notar que o agente funciona em _loop_: da maneira definida atualmente, o aspirador nunca vai parar, estando sempre a limpar e trocar de localizações.

## Agentes Racionais

Agentes racionais procuram sempre realizar as ações que, segundo a informação que lhes é dada e os conhecimentos que têm, resultarão idealmente em cenários mais desejáveis/numa **maior expectativa de sucesso**, segundo um conjunto de medidas objetivas de desempenho (_performance_) - entra aqui a noção de fazer a [**escolha certa**](color:green). Em relação ao exemplo do aspirador, poderíamos introduzir medidas de desempenho ao agente: tempo gasto, quantidade de sujidade aspirada, entre outras.

![Diagrama - Agentes Racionais](imgs/0001-rational-agents.svg#dark=4)

Existe aqui, mais que uma função agente quase direta (tenho isto, faço aquilo, sem considerar contexto nem nada do género), um raciocínio por detrás da escolha a tomar, que pode nem sempre ser o óbvio.

Devemos, contudo, atentar que tal como nós, como seres humanos, não sabemos sempre a decisão certa (apesar de poder raciocinar sobre a mesma), [**os agentes também não**](color:red): agentes racionais devem responder com a decisão ótima **dentro do que sabem**, mas não são **omniscientes** - não sabem tudo - pelo que a decisão que tomam pode não ser a ideal.
Mais ainda, racionalidade não implica **clarividência**, isto é, **a ação tomada pode não resultar no que pretendemos**, já que imprevistos acontecem e nem sempre conseguimos escapar deles. Se estivermos numa estrada e de repente houver um acidente que corta todas as faixas, infelizmente, ficamos umas horas presas no trânsito, mesmo tendo verificado que em teoria seguir essa estrada traduzir-se-ia no caminho mais curto antes de sair de casa.
Podemos, portanto, a partir dos dois pontos aqui levantados, afirmar que [**o raciocínio nem sempre leva ao sucesso**](color:yellow).

Idealmente, agentes racionais devem **explorar, aprender e ser autónomos**. Voltando ao exemplo do aspirador, o agente deve inicialmente explorar as várias localizações e experimentando executar várias ações em situações semelhantes, procurando perceber qual delas se adequa melhor às nossas expectativas de sucesso - se tivermos um local sujo e mudarmos só de localização, vai continuar sujo (não ideal).
Um agente racional iria aperceber-se disso, e da próxima vez que por lá passasse ia tentar realizar uma das outras ações possíveis, para tentar perceber se desta vez já correu melhor (e inferir conclusões a partir daí).
Em relação à autonomia, não nos referimos à ausência de regras iniciais (essas terão inevitavelmente de existir - não vamos dizer a um agente para tentar descobrir como estacionar sem lhe dizer que não pode abalroar outros carros, por exemplo) mas sim à ausência de estratégias: um agente racional deve conseguir, a partir da exploração e aprendizagem, descobrir estratégias para chegar ao seu objetivo de forma ótima.
Esta exploração pode até ser feita fora do âmbito do objetivo, testando apenas se "desta forma fico ou não mais perto do objetivo, considerando tudo o que já tentei" - a chamada **recolha de informação**.

## Caracterização de um Agente

Para modelar agentes racionais, é útil ter um _standard_ para o fazer: algo que nos permita descrever o agente segundo um conjunto de características. Vamos aqui utilizar a descrição [**PEAS**](color:orange): _[**P**](color:orange)erformance_, _[**E**](color:orange)nvironment_, _[**A**](color:orange)ctuators_, _[**S**](color:orange)ensors_. De seguida, seguem-se alguns exemplos de agentes segundo esta descrição:

| Agente                          | _Performance_                                        | Ambiente                                        | Atuadores                  | Sensores                                                      |
| ------------------------------- | ---------------------------------------------------- | ----------------------------------------------- | -------------------------- | ------------------------------------------------------------- |
| Condutor de Táxi (Automatizado) | Maximizar o Lucro; Conforto; Segurança.              | Estradas; Tráfego; Peões; Clientes.             | Motor; Acelerador; Buzina. | Câmaras; GPS; Velocímetro.                                    |
| Robô Professor                  | Feedback dos Alunos; Notas dos Alunos.               | Alunos; Ambiente de Testes.                     | Monitor.                   | Teclado.                                                      |
| Robô que joga Futebol           | Golos Marcados; Golos (não) sofridos; Pontos ganhos. | Campo; Colegas de Equipa; Adversários; Árbitro. | Motores; Articulações.     | Câmaras; Sensores de proximidade; Sensores de infravermelhos. |

Existem mais alguns exemplos na página 42 do livro.

## Tipos de Ambientes

Os "ambientes" a que nos referimos correspondem, de forma bastante sucinta, ao que rodeia os agentes - estes interagem com o ambiente em que se encontram através dos tais atuadores e sensores. Dada a tarefa que temos em mãos e o ambiente em que nos encontramos, pode ser importante escolher um ou outro tipo de agente que se adeque mais aos nossos objetivos - dizemos que **o agente que escolhemos depende diretamente do ambiente em que nos encontramos**.

- Ambientes [**Completamente Observáveis**](color:yellow) vs [**Parcialmente Observáveis**](color:orange): dizemos que um agente consegue observar completamente um ambiente caso este consiga, através dos seus sensores, detetar tudo o que é **relevante para resolver o problema em questão**, [tornando-se assim desnecessário guardar estado interno sobre o que vai observando](color:purple), já que tem sempre tudo "na palma da mão".

  Temos, claro, que se tal não se verificar (isto é, se for um ambiente parcialmente observável), o agente [terá que manter um **estado interno** sobre o que vai detetando](color:purple), por forma a poder decidir que passos tomar a seguir.

  Podemos estar em ambientes parcialmente observáveis caso, por exemplo, o agente tenha sensores pouco exatos, ou se for pura e simplesmente impossível mapear o ambiente a todo o momento.
  O xadrez, por exemplo, é completamente observável, enquanto que o ambiente que envolve um agente condutor de táxi já não o é - não sabemos a todo o momento tudo o que se passa à nossa volta, podendo, por exemplo, haver um peão fora do campo de visão do condutor.

- Ambientes [**Determinísticos**](color:yellow) vs [**Estocásticos**](color:orange): um ambiente diz-se determinístico caso o próximo estado do mesmo seja apenas ditado pelo seu estado atual e pela ação seguinte do agente, sem qualquer grau de incerteza associado nem outras ações do exterior que o possam perturbar.

  Mais ainda, dizemos que um ambiente continua a ser determinístico (mas, mais concretamente, [**estratégico**](color:yellow)) caso estejamos num ambiente multi-agente onde o próximo estado pode estar também dependente das ações de outros agentes (como é o caso do xadrez).
  O ambiente que rodeia um taxista é, claro, estocástico - não podemos prever o tráfego a parar abruptamente, um pneu a rebentar, entre outros, pelo que o ambiente pode alterar sem que a ação do agente tenha uma influência direta sobre ele.

- Ambientes [**Episódicos**](color:yellow) vs [**Sequenciais**](color:orange): dizemos que um ambiente é episódico caso cada estado seja atómico - isto é, estamos num estado, realizamos uma ação, e o estado seguinte não vai ter qualquer dependência em relação às ações tomadas no estado anterior.

  Podemos, por exemplo, pensar num robô automático que faz _scan_ das peças numa linha de montagem uma a uma, dizendo se é defeituosa ou não - o facto da peça anterior estar defeituosa não deverá ter influência sobre a peça atual.

  Por outro lado, o ambiente diz-se sequencial caso haja uma clara "linha de acontecimentos" que afeta os estados seguintes - o xadrez acaba por ser um exemplo acessível deste tipo, já que as jogadas anteriores surtem efeitos diretos sobre a jogada a fazer a seguir.

- Ambientes [**Estáticos**](color:yellow) vs [**Dinâmicos**](color:orange): ambientes estáticos não se alteram a não ser através da ação do(s) agente(s), ou seja, enquanto os agentes estão a pensar sobre que decisão tomar o ambiente mantém-se inalterado.

  O ambiente que envolve um taxista, por exemplo, é claramente dinâmico, enquanto que o de um jogo de sudoku é estático. Temos ainda casos intermédios, como o de jogar **sudoku com relógio**, em que o ambiente em si não se altera com o passar do tempo mas o desempenho do agente vai diminuindo - trata-se de um ambiente [**semidinâmico**](color:purple).

- Ambientes [**Discretos**](color:yellow) vs [**Contínuos**](color:orange): a noção de continuidade de um ambiente está ligada à quantidade de perceções diferentes que um ambiente consegue obter/o número de ações diferentes que o agente pode tomar dentro do ambiente. Ambientes discretos têm, como o nome leva a crer, um número limitado de perceções e ações associadas - um caso possível é o xadrez, onde há um número limitado de ações que podemos tomar para o estado atual, e o ambiente em si "é o que é".

Por fim, notar que os ambientes podem ser de [**agente único**](color:yellow) (vs [**multi-agente**](color:orange)) - num jogo de sudoku, por exemplo, existe apenas um agente a atuar, enquanto que no caso do robô taxista existem vários agentes a atuar pela estrada fora, sejam eles iguais a este ou não.

Seguem-se alguns exemplos de ambientes, com as respetivas propriedades discriminadas.

| Ambiente                         | Observável?                              | Agentes?                     | Determinístico?                | Episódico?                 | Estático?                | Contínuo?                |
| -------------------------------- | ---------------------------------------- | ---------------------------- | ------------------------------ | -------------------------- | ------------------------ | ------------------------ |
| [Palavras Cruzadas](color:green) | [Completamente Observável](color:yellow) | [Agente Único](color:yellow) | [Determinístico](color:yellow) | [Sequencial](color:orange) | [Estático](color:yellow) | [Discreto](color:yellow) |
| [Poker](color:green)             | [Parcialmente Observável](color:orange)  | [Multi-Agente](color:orange) | [Estocástico](color:orange)    | [Sequencial](color:orange) | [Estático](color:yellow) | [Discreto](color:yellow) |
| [Mundo Real](color:green)        | [Parcialmente Observável](color:orange)  | [Multi-Agente](color:orange) | [Estocástico](color:orange)    | [Sequencial](color:orange) | [Dinâmico](color:orange) | [Contínuo](color:orange) |

Pode-se observar que o exemplo do mundo real tem o máximo da complexidade, tendo sempre a característica "pior" de cada par.

Note-se que na página 45 do livro estão mais alguns exemplos.

## Tipos de Agentes

Fará sentido dividir os agentes que vamos estudar consoante algumas das suas características - nem todos funcionarão seguindo as mesmas heurísticas, e terão naturalmente graus de complexidade diferentes. Na UC de Inteligência Artificial, são abordados 5 tipos principais.

### Agentes de Reflexos Simples

Corresponde ao tipo de agente mais elementar, escolhendo a ação a tomar tendo apenas em conta as perceções atuais, sem qualquer noção de histórico de perceções associada. Se voltarmos ao exemplo inicial do aspirador, este será, claro, um exemplo de um agente de reflexos simples: não precisa de saber perceções anteriores, já que a função agente associada só depende da sujidade do chão e da sua localização atual.

:::details[Programa Agente associado ao Aspirador]

```bash
function vacuum_agent([location, status])
  if status = Dirty then
    return SUCK
  else if location = A then
    return RIGHT
  else
    return LEFT
  end
end
```

Realça-se novamente que, tendo este programa, **não precisamos de qualquer noção de histórico de perceções**, já que estamos apenas dependentes do estado atual para tomar a decisão.

:::

![Diagrama -  Agentes de Reflexos Simples](./imgs/0001-simple-reflex-agent.svg#dark=4)

O diagrama acima representa o _core_ do funcionamento de um agente de reflexos simples. A noção de [**regras condições-ações**](color:purple), _condition-action rules_, referida no mesmo está relacionada com o funcionamento base de qualquer agente, por mais complexo que seja - nós próprios funcionamos assim!
Se estivermos a conduzir e o carro à nossa frente travar, fazemos internamente uma "conexão" causada pela condição `o-carro-está-a-travar` e procuramos também travar, já que chocar com ele não seria ideal.
Aplicamos uma lógica semelhante no aspirador, utilizando esta noção de condição-ação: se está sujo, limpo, e se não estiver, movo-me para a direita ou para a esquerda, conforme o sítio onde estiver agora.

Um programa-tipo para agentes de reflexos simples seria o seguinte:

```bash
function simple_reflex_agent(perception)
  static rules = [...] # conjunto de regras condição-ação

  state = interpret_input(perception)
  rule = pair_rule(state, rules)
  action = rule_action[rule]
  return action
end
```

### Agentes de Reflexos baseados em Modelos

Em ambientes parcialmente observáveis, o agente vai, por norma, precisar de manter um estado interno onde vai mapeando as partes do mundo que já viu (e que pode ou não estar a ver agora). Contrasta, portanto, diretamente com o último modelo, já que guarda um histórico de perceções.
Esta distinção é bastante útil, já que há problemas onde os agentes de reflexos simples não conseguem realizar as tarefas pedidas, casos em que nem sempre temos tudo o que precisamos no estado atual e precisamos de mais que um conjunto de regras para nos orientarmos.
Ainda assim, a sua complexidade não altera de forma drástica - é uma alteração relativamente suave, até - daí um outro nome para este tipo de agentes, **agentes de reflexos simples com estado interno**, ser tão próximo do último modelo.

![Diagrama - Agentes de Reflexos baseados em Modelos](./imgs/0001-model-based-reflex-agent.svg#dark=4)

Aqui, existe uma combinação da perceção atual com o estado interno anterior, que em conjunto geram uma nova noção do estado atual.

```bash
function model_based_reflex_agent(perception)
  # note-se que estas três variáveis são estáticas, sendo apenas
  # declaradas uma vez durante o decorrer do programa
  static rules = [...] # conjunto de regras condição-ação
  static state = [...] # descrição do estado do mundo
  static action = [...] # a ação mais recente

  state = update_state(state, action, perception)
  rule = pair_rule(status, rules)
  action = rule_action[rule]
  return action
end
```

### Agentes baseados em Objetivos

Nem sempre conseguimos fazer um programa abstrato que consegue sempre saber as ações que devemos tomar, qualquer que seja a situação - nem sempre temos um objetivo constante (como é o caso do aspirador, onde queremos sempre ter o chão limpo). É aqui que entra a noção de **agentes baseados em objetivos**, agentes aos quais podemos arbitrariamente dar um objetivo, e utilizando uma lógica semelhante à dos agentes baseados em modelos (guardando estado interno, etc.) conseguimos obter ações que nos colocam mais próximos de atingir o objetivo.

![Diagrama - Agentes baseados em objetivos](./imgs/0001-goal-based-agent.svg#dark=4)

Além do exposto acima, temos também de notar que este tipo de agente distingue-se dos últimos dois porque deixa de ser **baseado em reflexos** - não há um conjunto de condições-ação definido inicialmente que possamos usar sempre, já que teria de ser adaptado consoante o objetivo: tem de ser definido de forma dinâmica, através de considerações do agente quanto ao futuro ("o que é que acontece se fizer isto?", entre outros).

Assim, o agente opera tendo por base a **maximização do desempenho**, racionalizando de acordo com **objetivos pré-definidos**.

### Agentes baseados em Utilidade

Bastante semelhantes aos explicados acima, adicionando aos mesmos uma **função de utilidade** - uma "medida" que nos permite diferenciar ações a tomar numa mesma situação (que levariam ao mesmo objetivo) consoante um conjunto de preferências estabelecido inicialmente. Se quisermos pensar num robô taxista, por exemplo, podemos definir um conjunto de preferências que inclui tempo e lucro como parâmetros a ter em conta na decisão da ação a tomar.

![Diagrama - Agentes baseados em utilidade](./imgs/0001-utility-based-agent.svg#dark=4)

### Agentes com Aprendizagem

Por fim, abordamos os agentes com aprendizagem (_learning agents_), que correspondem à ideia inicial de máquina inteligente caraterizada por Turing, onde o agente atua num mundo que inicialmente desconhece. A ideia possui quatro elementos-chave:

- O elemento de [**crítica**](color:red): corresponde a um padrão de _performance_ que avalia o que os sensores percecionam e dá o feedback correspondente ao [**elemento de aprendizagem**](color:yellow).
- O elemento de [**aprendizagem**](color:yellow): tem como propósito tornar o agente mais eficiente ao longo do tempo, pega no feedback dado pela crítica e faz as alterações necessárias de acordo com o mesmo.
- O elemento de [**_performance_**](color:pink): seleciona a ação a tomar pelo agente (dentro do leque das ações que pode tomar agora) consoante o que espera surtir melhores resultados OU consoante o que o **gerador de problemas** lhe indicou.
- O [**gerador de problemas**](color:purple): peça muito importante nesta ideia, podemos pensar nele como um copiloto que sugere ações a tomar, que podem trazer informação útil (a partir da qual podemos vir a perceber melhor/ter mais certezas sobre as ações ótimas do agente).

O diagrama associado a estes agentes tem este aspeto:

![Diagrama - Agentes com aprendizagem](./imgs/0001-learning-agent.svg#dark=4)

---

Como nota final, adicionamos que esta secção corresponde ao segundo capítulo do livro que acompanha a cadeira (_Intelligent Agents_).

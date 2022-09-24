---
title: Fundamentos Computacionais
description: >-
  Fundamentos da arquitetura de um computador
  Response time e throughput
path: /oc/fundamentos-computacionais
type: content
---

# Fundamentos Computacionais

```toc

```

## Fundamentos da arquitetura de um computador

![Computer-system](./assets/0001-computer-system.png#dark=3)

Como já é sabido, um computador é constituido por vários elementos diferentes que, todos unidos, conseguem fazer com os os nossos dipositivos atuais funcionem como devem. Avaliando mais dentro de **processador**, ou seja o nosso [CPU](color:pink), conseguimos identificar duas componentes diferentes: o [_Datapath_](color:pink) que realiza as operações com dados e o [_Control_](color:pink) que trata de sequenciar o datapath, a memória, entre outros.

![CPU](./assets/0001-cpu.png#dark=3)

### Debaixo do nosso programa

Já que já visualizamos o que está na parte mais superficial dos nossos computadores, temos que também ver o que se passa ao corrermos um porgrama. Existem três etapas diferentes:

- [Aplicação software](color:orange) que está escrita numa linguagem de alto nível, ou seja de C até Java;
- [System software](color:orange) dividido entre o **compilador** que traduz as linguagens de alto nível para código de máquina e o **sistema operativo**, ou seja o código de serviço, que gere o input/output, memória e armazenamento assim como calendariza as tarefas e partilhas recursos;
- [Hardware](color:orange), ou seja o processador, memória e controladores de I/O.

### Níveis de código

Da mesma forma como podemos dividir as componentes de um computador, também podemos divir quais são os nossos níveis de código de um programa. Em primeiro lugar, temos as [linguagens de alto nível](color:pink) que têm um nível de abstração mais parecido do domínio do problema; de seguida temos [Assembly](color:pink) que trata da representação textual de instruções; por último temos a nossa [representação de hardware](color:pink) que trata de codificar instruções e data através de dígitos binários (**bits**).

É importante referir que a compilação em linguagens de alto nível é feita numa máquina particular à parte e que, como a arquitetura dos computadores varia, ou seja, às vezes é mais avançada, outras vezes nem por isso, **é muito difícil comentar objetivamente** quais são as arquiteturas melhores, depende muito do que nós pretendemos fazer. Desta forma, o melhor que temos a fazer é avaliar o tempo de execução.

### _Performance_

Se quisermos ter um computador com uma melhor _performance_ podemos alterar vários componentes diferentes, não há só uma forma mais correta de a melhorar, por exemplo, é como se estivessemos a ver um _Bubble Sort_ ou um _Quicksort_, em geral, um _Quicksort_ é melhor, contudo há algumas situações em que o _Bubble Sort_ funciona melhor.

:::info[Exemplo]

Avaliando quatro aviões diferentes, será possível dizer, objetivamente qual deles é o melhor?

![Definir performance](./assets/0001-avioes.png#dark=3)

[Não!](color:pink) Como podemos ver, cada avião tem características muito diferentes e, enquanto pode ser melhor numa área, tambem é pior noutra, logo dependendo da situação em que nos encontrarmos e para o que queremos usar o nosso avião, não podemos dizer objetivamente qual é o melhor.

Adaptando à nossa experiência enquanto programadores, nós precisamos de avaliar o que o nosso cliente [precisa](color:pink), não o que ele quer.

:::

## _Response time_ e _throughput_

Caracterizamos o nosso [response time](color:pink) como o tempo que uma tarefa demora, enquanto o [throughput](color:pink) é o trabalho feito por unidade de tempo, que também pode ser referido como _bandwidth_ e um exemplo muito comum disto são, por exemplo, o número de transações numa hora. Em geral, diminuir o response time melhora o throughput.

Mas, a questão surge: como é que estes dois são afetados por substituir um processador por um mais rápido? Adicionando processadores para tarefas separadas? No primeiro caso, [ambos melhoram](color:pink), contudo, no segundo caso, apenas o [throughout aumenta](color:pink); no entanto se a necessidade de processamento fosse quase tanta como throughput também pode forçar pedidos para _queue up_. Nesta situação, aumentra o throughput também pode melhorar response time, já que pode diminuir o tempo de espera na queue, em muitos sistemas, mudar tanto o execution time como o throughput muitas vezes afeta o outro.

### Relative Performance

$$
Performance = \frac{1}{Execution Time}
$$

$$
SpeedUp = \frac{ExeTimeAntes}{ExeTimeAgora} = n
$$

Ou seja, quanto mais tempo estivermos a executar, menor será a performance.

:::info[Exemplo]

Se tivermos um processador A que corre um programa em 10 segundos e um processador B que corre o mesmo programa em 15 segundos, à partida podemos concluir que o programa A é o melhor, já que tem o melhor tempo. Então podemos ver quão mais rápido é A. Usando a fórmula dada acima:

$$
\frac{ExeTimeB}{ExeTimeA} = 1,5
$$

Assim, sabemos que o processador A é 1,5 vezes mais rápido que o processador B.

:::

### Medir Execution time

Para avaliarmos quanto tempo um programa demora a executar temos que avaliar duas componentes diferentes:

- [_Elapsed time_](color:orange), isto é, o tempo de resposta total, incluindo todos os aspetos (processamento, I/O, OS overhead, idle time), que nos ajuda a determinar a _performance_ do sistema. Resumidamente é o tempo total que passou;

- [_CPU time_](color:orange), ou seja, o tempo que demora a processar uma determinada tarefa incluindo os acessos ao disco, memória e atividades I/O. Os diferentes programas são afetados de diferentes maneiras pelo cpu e performance do sistema.

Por exemplo, se tivermos a ver o tempo que demorou a construir uma casa e virmos que foram 3 anos, temos que avaliar mais profundamente para ver quanto tempo desses anos é que de facto foram passados a construir a casa em si. Assim, ao avaliarmos melhor, vemos que apesar de terem passado 3 anos, apenas 1 desses anos foi passado a construir a casa em si, e o resto foi passado a arranjar o material. O mesmo aplica-se ao nosso computador, apesar de termos passado uma determinada quantidade a executar algo, apenas uma parte desse tempo é que foi passada a correr a tarefa em si.

### CPU _clocking_

Corresponde à operação de um hardware digital governada por um [relógio de avaliação constante](color:pink). Por exemplo, se remos um processador que demora 5 ciclos a fazer uma instrução e 1 ciclo para fazer outra, o CPI será 3 ciclos [uma vez que essa é a média](color:pink) de ambas as instruções.

![CPI](./assets/0001-cpi.png#dark=3)

Também é relevante referir que [_clock period_](color:pink) corresponde à duração de um ciclo de relógio (_cycle time_) e o [_clock rate_](color:pink) corresponde ao número de ciclos por segundo. Assim, conseguimos chegar à seguinte fórmula:

$$
f = \frac{1}{P}
$$

Se nos questionarmos qual operação demora mais tempo, AND ou uma multiplicação a resposta é que **depende dos processadores**. Se um processador demora 1 ciclo de relógio a fazer uma operação AND e o mesmo tempo a fazer uma multiplicação e o outro processador demora 5 ciclos de relógio, é evidente que o primeiro processador é superior!

Mas como é que conseguimos calcular o nosso tempo de CPU? Através dos nossos ciclos de relógio e tempo dos mesmos ou até através do nosso _clock rate_, ou seja:

$$
CPU Time = CPU Clock Cycles * Clock Cycle Time
$$

$$
CPUTime = \frac{CPUClockCycles}{ClockRate}
$$

Resumidamente, o que estamos a calcular é o **tempo que demoramos através de quantos ciclos demos e quanto tempo demoramos por ciclo** ou o seu inverso, ou seja quantos ciclos demos sobre a frequência de cada ciclo. Assim, podemos facilmente concluir que a nossa _performance_ poderá ser melhorada através da [redução do número de ciclo de relógios](color:pink), simplificando o algoritmo ou tendo um processador mais inteligente; [aumentando o _clock rate_](color:pink), a frequência com que funciona ou até mesmo com um [_hardware_ mais adequado](color:pink) que troca o _clock rate_ com o _cycle count_.

:::info[Exemplo]

Imaginando que temos um Computador A com 2GHz de relógio, 10 segundo de tempo de CPU e queremos desenhar um Computador B com [6 segundos](color:orange) de tempo de CPU e tem um [relógio mais rápido](color:orange) mas faz com que os [ciclos de relógio sejam 1.2 vezes maiores](color:orange), o **quão rápido é que conseguimos ue o nosso relógio de B seja?**

Começando por calcular o _clock rate_ de B, temos:

$$
ClockRate_B = \frac{ClockCycles_B}{CPUTime_B}=\frac{1,2*ClockCycles_A}{6s}
$$

$$
ClockCycles_A = CPUTime_A * ClockRate_A = 10s * 2GHz = 20 * 10⁹
$$

$$
Sup = \frac{10s}{6s} = \frac{t_A = numCycle_A * T_{CB}}{t_B = numCycle_B * T_{CB}} = \frac{numCycle * T_{CA}}{1,2 * numCycle * T_{CB}} = \frac{6/10}{0,6}
$$

$$
ClockRate_B = \frac{1,2 * 20 * 10⁹}{6s} = \frac{24*10⁹}{6s} = 4GHz
$$

:::

### Número de instruções e ciclos por instrução

O nosso [número de instruções](color:pink) é determinado pelo programa, ISA e o compilador, enquanto o [CPI](color:pink) é determinado pelo CPU _hardware_. Este último, caso tenha diferentes instruções, tem que ter diferentes CPIs, o CPI médio é afetado por uma mistura de instruções.

Ficamos, portanto com as seguintes fórmulas:

$$
ClockCycles = InstructionCount * CyclesPerInstruction
$$

$$
CPUTime = InstructionCount * CPI * ClockCycleTime = \frac{InstructionCount * CPI}{ClockRate}
$$

Então, se tivermos diferentes classes de instruções, temos um número diferente de ciclos:

$$
ClockCycles = \sum^n_{i=1} (CPI_i * InstructionCount_i)
$$

E, para a média ponderada do CPI:

$$
CPI = \frac{ClockCycles}{InstructionCount} = \sum^n_{i=1} (CPI_i * \frac{InstructionCount_i}{InstructionCount}
$$

Vendo um exemplo, se dissermos que uma determinada quantidade de alunos já não tem que pagar as suas proprinas, para calcularmos a média ponderada que irá ficar paar cada aluno, então temos que ver cada aluno, quanto ele paga e a sua relação com o total de todos os alunos.

## MIPS

O [MIPS](color:pink), _Millions of Instructions per Second_ é uma arquitetura de microprocessadores RISC usada na maior parte dos processadores hoje em dia. Contudo, esta arquitetura não tem em conta as diferenças entre os ISA dos computadores nem a complexidade entre as instruções.

$$
MIPS = \frac{InstructionCount}{ExecutionTime * 10⁶}

= \frac{ClockRate}{CPI * 10⁶}
$$

![MIPS](./assets/0001-MIPS.png#dark=3)

### Lei de Amdahl

Apesar de ser muito importante porque nos ajuda a perceber que o caso comum é o mais rápido, tem o lado mais negativo que ao melhorarmos um aspeto do computador não podemos esperar que haja a _performance_ total também melhor proporcionalmente.

$$
T_{improved} = \frac{T_{affected}}{ImprovementFactor} + T_{unaffected} = (\frac{f}{ImprovementFactor}+(1-f))* T_{original}
$$

$$
Speedup = \frac{T_{original}}{T_{improved}} = \frac{1}{(f/ImprovementFactor)+(1-f)}
$$

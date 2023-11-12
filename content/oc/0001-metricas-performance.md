---
title: Métricas de Performance
description: >-
  Fundamentos da Arquitetura de um Computador.
  Performance.
  Medir Performance.
  Ciclos de Relógio.
  Comparação de Performance.
  Millions of Instructions per Second (MIPS).
  Lei de Amdahl.
path: /oc/metricas-performance
type: content
---

# Métricas de Performance

```toc

```

Medir a performance de um computador pode ser desafiante. Ao escolher entre
diferentes computadores, encontrar aquele com a melhor performance para a
tarefa é de extrema importância. Nesta secção, vamos definir a performance de
um computador de uma forma quantitativa.

## Fundamentos da Arquitetura de um Computador

Como já se sabe de [IAC](/iac), um computador é constituído por vários elementos
diferentes, como o processador, cache, memória (RAM), armazenamento, e vários
periféricos, que, quando unidos, nos dão um dispositivo funcional.

Dentro do **processador** (CPU), conseguimos identificar duas
categorias de componentes:

- o [_Datapath_](color:pink), que realiza as operações com dados, e, por isso,
  contém a ALU, Register File, Program Counter, etc.
- a [_Control Unit_](color:purple), que trata de sequenciar o datapath,
  a memória, entre outros.

![Datapath and Control Unit](./assets/0001-datapath-control-unit.svg#dark=3)

### Debaixo do Nosso Programa

Agora que já visualizamos o que está na parte de hardware dos nossos
computadores, temos que também ver o que se passa ao corrermos um programa.  
Existem três camadas diferentes:

- [Application software](color:orange): está escrito numa linguagem de alto nível,
  como C, Java, etc.;
- [System software](color:orange): dividido entre o **compilador**,
  que traduz as linguagens de alto nível para código de máquina
  e o [**sistema operativo**](/so/introducao), que gere o input/output, memória e
  armazenamento, assim como o escalonamento de tarefas e partilhas de recursos;
- [Hardware](color:orange) (processador, memória, I/O, etc.): onde realmente
  corre o nosso programa, após ser convertido para código máquina pelo compilador.

### Níveis de Código

Usualmente escrevemos código numa linguagem de alto nível, como C, Java, Rust, etc.,
visto que torna o processo mais rápido, mais simples, e, muitas vezes, mais eficiente.

Quando queremos executar este programa, temos primeiro de o compilar.
A tarefa do [**compilador**](color:orange) é muito importante, visto que tem o
objetivo de converter o nosso código de alto nível em assembly, uma representação
textual das instruções do processador.  
Poderíamos escrever código diretamente em assembly, mas, na maioria dos casos,
isso seria ineficiente: tanto por ser muito mais trabalhoso de escrever, como
por o compilador fazer um trabalho muito melhor a produzir assembly **eficiente**.

Finalmente, existe o [**assembler**](color:yellow) que codifica o assembly
(ou gerado pelo compilador ou feito à mão pelo programador) em código máquina,
isto é, 0s e 1s, que finalmente pode ser executado pelo hardware.

![Levels of Program Code](./assets/0001-levels-program-code.svg#dark=3)

Dependendo da arquitetura do processador, o [compilador](color:orange) irá produzir
um resultado diferente, o que pode influenciar o tempo de execução, como veremos abaixo.

## Performance

Existem diferentes maneiras de definir performance. Ao falarmos de um avião,
podemos argumentar que um bom critério de performance é a sua velocidade
máxima. Poderá também ser o número de passageiros que pode levar... ou aquele
que consegue realizar uma maior viagem sem ter que reabastecer...
O que é melhor depende das nossas necessidades e da situação em que nos encontramos,
pelo que, por vezes, precisamos de fazer _trade-offs_ entre as opções que temos.

:::info[Exemplo]

Avaliando quatro aviões diferentes, será possível dizer, objetivamente, qual deles é o melhor?

![Comparação entre aviões](./assets/0001-planes-example.svg#dark=3)

[**Não!**](color:red) Como podemos ver, cada avião tem características
muito diferentes e, enquanto pode ser melhor numa área, é, por outro lado, pior noutra.
Logo, dependendo da situação em que nos encontrarmos e para o que queremos
usar o nosso avião, a melhor escolha vai ser diferente.

Adaptando à nossa experiência enquanto programadores, precisamos
de avaliar o que o cliente [precisa](color:green) ao invés daquilo que ele quer.

:::

Tal como a performance de um avião, podemos definir a performance de um
computador de diferentes maneiras. Para dois computadores a correr o mesmo programa,
podemos dizer que o mais rápido é aquele que termina primeiro, isto é, aquele que tem
menor [**tempo de resposta**](color:orange). Entre dois sistemas bancários,
podemos dizer que o melhor é aquele que realiza mais operações por segundo,
isto é, aquele que tem maior [**throughput**](color:yellow).

Mas, a questão surge: como é que estes dois são afetados ao substituir um
processador por outro mais rápido?
E ao adicionar mais processadores para tarefas separadas?
No primeiro caso, [ambos melhoram](color:green). Contudo, no segundo caso,
apenas o [throughput aumenta](color:yellow).

Ao definir a performance de computadores, vamos ter em conta o [tempo de resposta](color:orange).
Intuitivamente, de modo a maximizar a performance, teremos de
minimizar o tempo de resposta. Definimos, então, performance como o inverso do
tempo de execução.

$$
\text{Performance}_X = \frac{1}{\text{Tempo de Execução}_X}
$$

Por vezes, dizemos que o computador $X$ é $n$ vezes **mais rápido** do que o
computador $Y$. Este conceito corresponde à noção de performance relativa.
Definimos performance relativa, ou [**_speedup_**](color:pink), como o rácio entre duas performances.

$$
\op{SpeedUp} = \frac{\text{Performance}_X}{\text{Performance}_Y}
= \frac{\text{Tempo de Execução}_Y}{\text{Tempo de Execução}_X}
$$

:::tip[Dica]

Para não confundir qual dos valores é o $X$ ou o $Y$, basta relembrar que o
_speedup_ deve ser sempre $\geq 1$.

:::

:::info[Exemplo]

Se tivermos um processador $A$ que corre um programa em 10 segundos e
um processador $B$ que corre o mesmo programa em 15 segundos,
concluímos que o processador $A$ é melhor que o $B$,
já que tem um tempo de execução **menor**.

Mas quão mais rápido é? Para isso, podemos calcular o _speedup_:

$$
\op{SpeedUp}
= \frac{\text{Tempo de Execução}_B}{\text{Tempo de Execução}_A}
= \frac{15}{10}
= 1.5
$$

Assim, sabemos que o processador $A$ é 1.5 vezes mais rápido que o processador $B$.

:::

## Medir Performance

### Tempo

O tempo é a medida mais simples de performance de um computador. Contudo, o
tempo de execução de um programa pode ser definido de maneiras diferentes.

O [**tempo total**](color:orange) ou [_elapsed time_](color:orange) corresponde
à totalidade do tempo de resposta, incluindo processamento, operações de I/O
(como esperar que o utilizador insira um valor), _OS overhead_, _idle time_, etc.  
Resumidamente, é o tempo total desde o início até ao fim da execução do programa.

O [**tempo de CPU**](color:yellow) ou [_CPU time_](color:yellow) contém apenas
o tempo gasto pelo CPU na computação da tarefa,
não incluindo, por exemplo, o tempo de espera por uma operação I/O.
O tempo de CPU pode ser também distinguido entre _user CPU time_ e _system CPU time_.

:::info[Analogia]

Se estivermos a analisar o tempo que se demorou a construir uma casa
e chegarmos à conclusão de que desde o início da construção até à sua
conclusão passaram 3 anos ([_elapsed time_](color:orange)),
podemos avaliar mais pormenorizadamente para discriminar quanto desse
tempo é que de facto corresponde à construção da casa em si.
Podemos vir a descobrir que, apesar de terem passado 3 anos, apenas 1 desses anos
foi passado a construir a casa em si ([_CPU time_](color:yellow)), enquanto
o resto foi gasto a arranjar material e em planeamento.

O mesmo se aplica ao nosso computador: apesar de termos passado um determinado
intervalo de tempo a executar algo, apenas uma parte desse tempo é que
foi gasta em processamento da tarefa.

:::

### Ciclos de Relógio

Embora para nós humanos, enquanto utilizadores de computadores, o tempo seja
uma métrica importante, poderá ser apropriado pensar numa métrica que se
aproprie do funcionamento básico do hardware.

Tal métrica é o número de ciclos de relógio. O relógio coordena os eventos
que ocorrem no hardware. A cada intervalo de tempo destes dá-se o nome de
[**períodos de relógio**](color:green) ou _clock period_. A frequência dos ciclos de relógio é
chamada a [**frequência de relógio**](color:blue) ou _clock frequency_/_clock rate_.

$$
f_{\text{clock}} = \frac{1}{\smartcolor{green}{T_{\text{clock}}}} [\op{Hz}]
$$

$$
T_{\text{CPU}} = \#\text{Clock Cycles} \times \smartcolor{green}{T_{\text{clock}}}
= \frac{\#\text{Clock Cycles}}{\smartcolor{blue}{f_{\text{clock}}}}
$$

Podemos constatar que podemos aumentar a performance de um computador reduzindo
o número de ciclos de relógio necessários para um programa ou aumentando a
frequência do relógio.

### Instruções

As equações acima não referem nada sobre o número de instruções necessárias
para executar um programa. Contudo, ao compilar o código, o tempo que o
computador demora a executá-lo depende desse número de instruções.
Além disso, cada instrução pode necessitar de um diferente número de ciclos de relógio.
Ao número de ciclos que uma instrução necessita chama-se [**CPI**](color:pink)
(_cycles per instruction_).

Podemos determinar quantos ciclos é que um programa executa, ao
multiplicar o número de instruções pelos respetivos [CPIs](color:pink):

$$
\#\text{Clock Cycles} = \sum_{i=1}^n \left(\smartcolor{pink}{\op{CPI}_i} \times \#\text{Instructions}_i\right)
$$

:::info[Exemplo]

Considere-se um programa que executa as seguintes instruções,
com os respetivos [CPIs](color:pink), num determinado processador:

|                      |  A  |  B  |  C  |  D  |
| -------------------: | :-: | :-: | :-: | :-: |
| Número de Instruções | 100 | 500 | 200 | 150 |
|    [CPI](color:pink) |  4  |  1  |  2  |  6  |

$$
\#\text{Clock Cycles} = 100 \times 4 + 500 \times 1 + 200 \times 2 + 150 \times 6 = 2200
$$

Então, este processador necessita de $2200$ ciclos de relógio para executar este programa.

:::

Define-se o **número médio de ciclos por instrução** ou [**average CPI**](color:purple)
(_average cycles per instruction_) como:

$$
\smartcolor{purple}{\text{avg CPI}} = \frac{\#\text{Clock Cycles}}{\#\text{Instructions}}
$$

:::info[Exemplo]

Continuando com o exemplo acima, sabemos que temos

$$
100 + 500 + 200 + 150 = 950
$$

instruções.

Então, o [average CPI](color:purple) vai ser:

$$
\smartcolor{purple}{\text{avg CPI}} = \frac{2200}{950} = 2.32
$$

:::

Assim, podemos derivar as seguintes expressões:

$$
\#\text{Clock Cycles} = \# \text{Instructions} \times \smartcolor{purple}{\op{CPI}}
$$

$$
\begin{darray}{rll}
T_{\text{CPU}} &= \# \text{Instructions} \times \smartcolor{purple}{\op{CPI}} \times \smartcolor{green}{T_{\text{clock}}}
&= \frac{\# \text{Instructions} \times \smartcolor{purple}{\op{CPI}}}{\smartcolor{blue}{f_{\text{clock}}}}\\\\
&= \#\text{Clock Cycles} \times \smartcolor{green}{T_{\text{clock}}}
&= \frac{\# \text{Clock Cycles}}{\smartcolor{blue}{f_{\text{clock}}}}
\end{darray}
$$

:::info[Exemplo]

Consideremos um [processador $A$](color:pink) com _clock rate_ de 2GHz, e que
demora [10 segundos](color:orange) de tempo de CPU a executar um certo programa.  
Queremos desenhar um [processador $B$](color:purple) que demore
[6 segundos](color:orange) de tempo de CPU a executar o mesmo programa,
mas que necessite de [1.2 vezes mais ciclos de relógio](color:yellow).
**Qual será o _clock rate_ do [processador $B$](color:purple)?**

Começando por escrever a expressão da _clock rate_ de [$B$](color:purple), temos:

$$
\text{Clock Rate}_B = \frac{\#\text{Clock Cycles}_B}{\text{CPU Time}_B} = \frac{1.2 \times \text{Clock Cycles}_A}{6 \op{s}}
$$

No entanto, precisamos de descobrir quantos ciclos efetua o [processador $A$](color:pink)
ao executar este programa:

$$
\#\text{Clock Cycles}_A = \text{CPU Time}_A \times \text{Clock Rate}_A
= 10 \op{s} \times 2 \op{GHz} = 20 \times 10^9
$$

$$
\text{Clock Rate}_B = \frac{1.2 \times 20 \times 10^9}{6\op{s}} = \frac{24 \times 10^9}{6\op{s}} = 4\op{GHz}
$$

:::

### Comparação da Performance

Ao avaliar a performance de um computador, é importante notar que comparar
apenas uma destas métricas pode-nos levar a uma conclusão errada. Ao realizar
estas comparações, devemos ter em conta o número de instruções, o CPI e a
frequência de relógio.

:::info[Exemplo]

Se nos questionarmos sobre qual operação é a mais rápida entre **`AND`** e a **multiplicação**,
a resposta é que **depende do processador**.

Imaginemos que cada processador demora os seguintes ciclos de relógio a efetuar
cada uma destas operações:

|                                 | Operação `AND` | Multiplicação |
| ------------------------------: | :------------: | :-----------: |
|   [Processador $A$](color:pink) |       1        |       1       |
| [Processador $B$](color:purple) |       1        |       5       |

Conseguimos claramente ver que, no [processador $A$](color:pink), ambas as operações demoram
o mesmo tempo a ser executadas, enquanto no [processador $B$](color:purple) é evidente que a operação
mais rápida é o `AND`.

**Mas entre estes dois, qual será o mais rápido a efetuar multiplicações?**
Não é possível concluir nada, visto que depende da _clock rate_ de cada processador.  
Pode acontecer que o [processador $B$](color:purple) tenha uma _clock rate_ suficientemente superior ao do
[processador $A$](color:pink), de forma a que execute os 5 ciclos de relógio em menos tempo
que este executa um único ciclo de relógio.

:::

### Sumário da Performance

Conclui-se que a performance depende do:

- [**Algoritmo**](color:orange): Afeta o número de instruções e possivelmente o CPI. Se um
  algoritmo utilizar muitas instruções de divisão, notáveis por serem
  instruções lentas, o CPI será maior.

- [**Linguagem de Programação**](color:yellow): Afeta o número de instruções e o CPI. Uma linguagem
  com bastantes abstrações, como o _Java_, utiliza muitas _indirect calls_, o que
  aumenta o CPI.

- [**Compilador**](color:green): Afeta o número de instruções e o CPI. O compilador determina a
  tradução do código fonte para instruções hardware. Pode-se dizer que tem,
  portanto, um trabalho muito complexo, que pode afetar o CPI de várias
  maneiras.

- [**ISA**](color:red) (_Instruction Set Architecture_):
  Afeta o número de instruções, o CPI e o período de relógio. A arquitetura
  afeta os três aspetos da performance, pois condiciona as instruções
  necessárias, o custo de cada instrução e a frequência de relógio do
  processador.

### Millions of Instructions per Second

:::danger[Não Confundir]

É importante não confundir o MIPS, _Millions of Instructions per Second_
(métrica de performance), com o MIPS, _Microprocessor without Interlocked Pipelined Stages_
(arquitetura de CPUs), que iremos abordar mais à frente nesta disciplina.

:::

O [**MIPS**](color:orange), _Millions of Instructions per Second_, é uma métrica
que pode ser usada para classificar a performance de um processador.  
No entanto, esta não considera as diferenças entre os diferentes ISAs nem
a diferença entre a complexidade das instruções (i.e., o CPI).

$$
\begin{aligned}
\op{MIPS} &= \frac{\text{Instruction Count}}{\text{Execution Time} \times 10^6}\\\\
&= \frac{\text{Clock Rate}}{\op{CPI} \times 10^6}
\end{aligned}
$$

### Floating Point Operations per Second

O [**FLOPS**](color:orange), _Floating Point Operations per Second_, é outra métrica
utilizada na avaliação da performance de um processador.
Enquanto que o [MIPS](#millions-of-instructions-per-second) se refere a qualquer instrução,
o FLOPS refere-se apenas a instruções dos registos de vírgula flutuante e faz a
distinção entre instruções de 64, 32 e 16 bits, sendo por isso uma métrica mais precisa.

### Lei de Amdahl

A Lei de Amdahl defende que [**devemos tornar mais rápidas as operações mais comuns**](color:green).

Um erro comum é pensar que uma melhoria de um aspeto do computador nos
traz um crescimento linear da sua performance, o que nem sempre é verdade.

:::tip[Lei de Amdahl]

$$
\begin{aligned}
T_{\text{improved}} &= \frac{T_{\text{affected}}}{\text{improvement factor}} + T_{\text{unaffected}}\\
&= \left(\frac{f}{\text{improvement factor}} + (1 - f)\right) \times T_{\text{original}}
\end{aligned}
$$

$$
\op{SpeedUp} = \frac{T_{\text{original}}}{T_{\text{improved}}} = \frac{1}{\frac{f}{\text{improvement factor}} + (1-f)}
$$

em que $f$ representa a fração do trabalho realizado pela componente melhorada, em relação à componente original.

:::

:::info[Exemplo]
Tomando como exemplo um programa com duas instruções arbitrárias A e B,
tal que $T_{A} = 0.5\op{s}$, $N_{A} = 10$, $T_{B} = 1.5\op{s}$ e $N_{B} = 2$.

Note-se que $N_A \cdot T_A = 5\op{s} > N_B \cdot T_B = 3\op{s}$.

Assim se tornarmos a instrução B 3 vezes mais rápida,

$$
T_{\text{improvement}} = \frac{3}{3} + {5} = 6 \op{s}
$$

o tempo total de execução do programa é 6 segundos, com $\text{Speedup} \approx 1.33$.

Contudo, se alternativamente tornarmos a instrução A apenas 1.8 vezes mais rápida,

$$
T_{\text{improvement}} = \frac{5}{1.8} + 3 = 5.78 \op{s}
$$

o tempo total de execução do programa é 5.78 segundos, com $\text{Speedup} \approx 1.38$!

Conclui-se, assim, que melhorando menos $(1.8 \ll 3)$ a rapidez de uma instrução mais comum,
é possível obter um maior Speedup, tal como previsto pela **Lei de Amdahl**.

:::

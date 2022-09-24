---
title: Métricas de Performance
description: >-
  Performance.
  Medir Performance.
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

## Performance

Existem diferentes maneiras de definir performance. Ao falarmos de um avião
podemos argumentar que um bom critério de performance é a sua velocidade
máxima. Poderá também ser o número de passageiros que pode levar... ou aquele
que consegue uma maior viagem sem reabastecer...

Tal como a performance de um avião, podemos definir a performance de um
computador de diferentes maneiras. Para dois computadores a correr um programa,
podemos dizer que o mais rápido é aquele que termina primeiro, aquele que têm
menor **tempo de resposta**. Entre dois sistema bancários, podemos dizer que o
melhor é aquele que realiza mais operações por segundo, aquele que tem maior
**throughput**.

Ao definir a performance de computadores, vamos ter em conta o tempo de
resposta. Intuitivamente, de modo a maximizar a performance, teremos de
minimizar o tempo de resposta. Definimos, então, performance como o inverso do
tempo de execução.

$$
Performance_X = \frac{1}{Tempo\ de\ Execução_X}
$$

Por vezes, dizemos que o computador `X` é `n` vezes mais rápido do que o
computador `Y`. Este conceito corresponde à noção de performance relativa.
Definimos performance relativa, ou _speedup_ como o rácio de duas performances.

$$
speedup = \frac{Performance_X}{Performance_Y} = \frac{Tempo\ de\ Execução_Y}{Tempo\ de\ Execução_X}
$$

## Medir Performance

### Tempo

O tempo é a medida mais simples de performance de um computador. Contudo, o
tempo de execução de um programa pode ser definido de muitas maneiras
diferentes.

O **tempo total** ou _elapsed time_ contém todo o tempo de resposta, incluindo
processamento e de operações de I/O, como esperar que o utilizador insira um
valor.

O **tempo de CPU** ou _CPU time_ contém apenas o tempo gasto pelo CPU na
computação da tarefa, não incluindo o tempo de espera por uma operação I/O. O
tempo de CPU pode ser também distinguido entre _user CPU time_ e _system CPU
time_.

### Ciclos de Relógio

Embora para nós humanos, enquanto utilizadores de computadores, o tempo seja
uma métrica importante, poderá ser apropriado pensar numa métrica que se
aproprie do funcionamento básico do hardware.

Tal métrica é o número de ciclos de relógio. O relógio coordenado os eventos
que ocorrem no hardware. A cada intervalo de tempo destes dá-se o nome de
**períodos de relógio** ou _clock period_. A frequência dos ciclos de relógio é
chamada a **frequência de relógio** ou _clock frequency_.

$$
f_{clock} = \frac{1}{T_{clock}} [Hz]
$$

$$
T_{CPU} = \#Clock\ Cycles \times T_{clock} = \frac{\#Clock\ Cycles}{f_{clock}}
$$

Podemos constatar que podemos aumentar a performance de um computador reduzindo
o número de ciclos relógio necessários para um programa ou aumentar a
frequência do relógio.

### Instruções

As equações acima não referem nada sobre o número de instruções necessárias
para executar um programa. Contudo, ao compilar o código, o tempo que o
computador demora a executá-lo depende desse número de instruções.

Define-se o **número médio de ciclos por instrução** ou **CPI** (_average
cycles per instruction_) como:

$$
CPI = \frac{\# Clock\ Cycles}{\# Instructions}
$$

Assim, podemos derivar as seguintes expressões:

$$
\#Clock\ Cycles = \# Instructions \times CPI
$$

$$
T_{CPU} = \# Instructions \times CPI \times T_{clock} = \frac{\# Instructions \times CPI}{f_{clock}}
$$

### Comparação da Performance

Ao avaliar a performance de um computador, é importante notar que comparar
apenas uma destas métricas pode-nos levar a uma conclusão errada. Ao realizar
estas comparações, devemos ter em conta o número de instruções, o CPI e a
frequência de relógio.

### Sumário da Performance

Conclui-se que a performance depende do:

- **Algoritmo**: Afeta número de instruções, e possivelmente o CPI. Se um
  algoritmo utilizar muitas instruções de divisão, notáveis por serem
  instruções lentas, o CPI será maior.

- **Linguagem de Programação**: Afeta número de instruções e CPI. Uma linguagem
  com bastantes abstrações, como _Java_, utiliza muitas _indirect calls_, o que
  aumenta o CPI.

- **Compilador**: Afeta número de instruções e CPI. O compilador determina a
  tradução do código fonte para instruções hardware. Pode-se dizer que tem,
  portanto, um trabalho muito complexo que pode afetar o CPI de várias
  maneiras.

- **ISA**: Afeta número de instruções, CPI e período de relógio. A arquitetura
  afeta os três aspetos da performance, pois condiciona as instruções
  necessárias, o custo de cada instrução e a frequência de relógio do
  processador.

### Lei de Amdahl

A lei de Amdahl defende que devemos tornar mais rápidas as operações mais
comuns.

Um erro é comum é pensar que um melhoramento a um aspeto do computador, nos
traz um crescimento linear na sua performance.

$$
T_{improved} = \frac{T_{affected}}{improvement\ factor} + T_{unaffected}
$$

$$
Speedup = \frac{T_{original}}{T_{improved}} = \frac{1}{\frac{f}{improvement\ factor} + (1-f)}
$$

em que $f$ representa a fração do trabalho realizado pela componente melhorada, em relação à componente original.

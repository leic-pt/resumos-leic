---
title: Complexidade Computacional
description: 'Complexidade Computacional'
path: /tc/complexidade-computacional
type: content
---

# Complexidade Computacional

```toc

```

A computação é uma tarefa que consome recursos.
Os recursos que mais usualmente são considerados são o tempo (a duração da computação) e o espaço (uma medida da informação que é armazenada/consumida durante a computação), mas também é possível considerar outras quantidades, como a energia (necessária para executar a computação).  
A complexidade computacional consiste no estudo dos recursos necessários para resolver um problema.

Podemos calcular a eficiência de uma máquina de Turing (que seja um classificador) relativamente ao tempo e ao espaço, de forma relativamente simples, se tomarmos o número de passos de cada computação como uma medida do tempo, e o número de células de memória lidas/escritas ao longo de cada computação como uma medida de espaço.

:::tip[Definição]

Para uma máquina classificadora $M$ definimos as funções $time_M, space_M : \mathbb{N} \to \mathbb{N}$ da seguinte forma:

- $time_M(n)$ é o comprimento máximo - ou seja, o número de passos máximo - de uma computaçao de $M$ sobre um input $\omega$ com $|\omega| \leq n$;
- $space_M(n)$ é o número máximo de células de memória lidas/escritas durante uma computação de $M$ sobre um input $\omega$ com $|\omega| \leq n$.

:::

Para cada $n \in \mathbb{N}$, $time_M(n)$ e $space_M(n)$ dão-nos uma avaliação do pior caso, em termos de duração da computação ou da quantidade de memória necessária, respectivamente, para processar inputs de tamanho limitado por $n$.  
Mais do que a expressão exacta das funções $time_M$ e $space_M$ associadas a um classificadora $M$, estamos interessados em avaliar o seu crescimento. Por essa razão é usual usar notação assintótica, nomeadamente a notação $O$ [como visto em cadeiras anteriores](/iaed/introducao-algoritmos#limite-assimpt%C3%B3tico-superior-o) como IAED ou ASA).

### Classes de Complexidade

Agrupamos problemas, de acordo com a sua dificuldade relativa, em classes de complexidade.

:::tip[Definição]

Seja $f : \mathbb{N} \to \mathbb{R}_0^+$ uma funçao. Definiem-se as seguintes classes de linguagens:

- $\mathbf{TIME}(f(n)) = \{ L : \text{ existe uma máquina } M \text{ que decide } L \text{ com } \\ time_M(n) = O(f(n)) \}$;
- $\mathbf{SPACE}(f(n)) = \{ L : \text{ existe uma máquina } M \text{ que decide } L \text{ com } \\ space_M(n) = O(f(n)) \}$;

:::

Em certas áreas de estudo, são consideradas como eficientes as máquinas cujo comportamento é limitado por um polinómio.
Por outro lado, o protótipo das máquinas ineficientes é precisamente o crescimento exponencial.
Estas considerações levam à definição das seguintes classes de complexidade.

:::tip[Definição]

Definem-se as seguintes classes de linguagens, em relação ao tempo:

- $\mathbf{P} = \bigcup_{k \in \mathbb{N}} \mathbf{TIME}(n^k)$;
- $\mathbf{EXPTIME} = \bigcup_{k \in \mathbb{N}} \mathbf{TIME}(2^{n^k})$.

analogamente, para o espaço, definimos

- $\mathbf{PSPACE} = \bigcup_{k \in \mathbb{N}} \mathbf{SPACE}(n^k)$;
- $\mathbf{EXPSPACE} = \bigcup_{k \in \mathbb{N}} \mathbf{SPACE}(2^{n^k})$.

:::

:::tip[Relação entre função tempo e espaço]

Para uma máquina classificadora $M$, tem-se que $time_M$ e $space_M$ são funções monótonas e, para qualquer, $n \in \mathbb{N}$:

1. $space_M(N) \leq time_M(n)$
2. $time_M(n) \leq 2^{O(space_M(n))}$.

:::

:::details[Prova]

// TODO

:::

:::tip[Corolário]

$P \subset PSPACE \subset EXPTIME \subset EXPSPACE$

:::

### Variantes

#### Movimentos-$S$

:::tip[Proposição]

Toda a máquina de Turing $M$ com transições-$S$ é equivalente a uma máquina de Turing $T$ sem transições-$S$ tal que $time_T(n) = O(time_M(n))$ e $space_T(n) = O(space_M(n))$

:::

:::details[Prova]

Na prova da equivalência, simulamos todos os movimentos-$S$ com um movimento à direita seguido de um movimento à esquerda.
Temos então que cada movimento em $M$ corresponde no máximo a dois movimentos em $T$ pelo que

$$
time_T(n) \leq 2 time_M(n) = O(time_M(n))
$$

$$
space_T(n) \leq space_M(n) + 1 = O(space_M(n))
$$

:::

#### Bidirecional

:::tip[Proposição]

Toda a máquina bidirecional $M$ é equivalente a uma máquina unidirecional $T$ tal que $time_T(n) = O(n + time_M(n)^2)$ e $space_T(n) = O(space_M(n))$

:::

:::details[Prova]

Vamos basear-nos na prova de equivalência apresentada no [capítulo de Máquinas de Turing](/tc/maquinas-de-turing#m%C3%A1quinas-bidirecionais).  
A computaçao de $T$ começa por balizar o input com os símbolos $I$ e $F$, fazendo $2n + 3$ passos.  
O resto da computação é identica a $M$, exceto nos casos em que é necessário introduzir espaçamento.
Para introduzir espaço à direita precisamos apenas de 3 movimentos, enquando que à esquerda precisamos de copiar a palavra toda, o que implica $O(space_M(n))$ passos.  
No final há que apagar o delimitador $F$, o que demora $O(space_M(n))$.
Na pior das hipóteses, temos que é preciso abrir espaço à esquerda em cada passo, pelo que:

$$
time_T(n) \leq (2n+3) + time_M(n) \cdot O(space_M(n)) + O(space_M(n))
$$

$$
\leq O(n) + time_M(n) \cdot O(time_M(n)) + O(time_M(n))
$$

$$
= O(n + time_M(n)^2 + time_M(n))
$$

$$
= O(n + time_M(n)^2)
$$

Quando ao espaço, $T$ usa apenas mais duas células, as que usa para delimitar a palavra.
Então:

$$
space_T(n) \leq 2 + space_M(n) = O(space_M(n))
$$

:::

#### Multifita

:::tip[Proposição]

Toda a máquina de Turing multifita $M$ é equivalente a uma máquina com apenas uma fita $T$ tal que $time_T(n) = O(n + time_M(n)^2)$ e $space_T(n) = O(space_M(n))$

:::

:::details[Prova]

// TODO

:::

### Não-Determinismo

No caso das máquinas não-deterministas vai surgir a primeira diferença substantiva relativamente à teoria da computabilidade.

:::tip[Definição]

Seja $M$ uma máquina não-determinista classificador. Definem-se as funções $ntime_M, nspace_M: \mathbb{N} \to \mathbb{N}$ da seguinte forma:

- $ntime_M(n)$ é o comprimento do maior rame de computação de $M$ sobre um input $\omega$ com $| \omega | \leq n$;
- $nspace_M(n)$ é o número máximo de células de memória lidas/escritas durante algum dos ramos de computação de $M$ sobre um input $\omega$ com $| \omega | \leq n$.

:::

Tal como para as máquinas deterministas, definimos as classes de tempo e espaço não-deterministas:

:::tip[Definição]

Seja $f : \mathbb{N} \to \mathbb{R}_0^+$ uma funçao. Definiem-se as seguintes classes de linguagens:

- $\mathbf{NTIME}(f(n)) = \{ L : \text{ existe uma máquina não-determinista } \\ M \text{ que decide } L \text{ com } ntime_M(n) = O(f(n)) \}$;
- $\mathbf{NSPACE}(f(n)) = \{ L : \text{ existe uma máquina não-determinista } \\ M \text{ que decide } L \text{ com } nspace_M(n) = O(f(n)) \}$;

:::

:::tip[Definição]

Definem-se as seguintes classes de linguagens, em relação ao tempo:

- $\mathbf{NP} = \bigcup_{k \in \mathbb{N}} \mathbf{NTIME}(n^k)$;
- $\mathbf{NEXPTIME} = \bigcup_{k \in \mathbb{N}} \mathbf{NTIME}(2^{n^k})$.

analogamente, para o espaço, definimos

- $\mathbf{NPSPACE} = \bigcup_{k \in \mathbb{N}} \mathbf{NSPACE}(n^k)$;
- $\mathbf{NEXPSPACE} = \bigcup_{k \in \mathbb{N}} \mathbf{NSPACE}(2^{n^k})$.

:::

Uma vez que máquinas deterministas são casos particulares de máquinas não-deterministas, temos que:

:::tip[Proposição]

$$
\begin{matrix}
\mathbf{P} \subset \mathbf{NP} &
\mathbf{PSPACE} \subset \mathbf{NPSPACE} \\
\mathbf{EXPTIME} \subset \mathbf{NEXPTIME} &
\mathbf{EXPSPACE} \subset \mathbf{NEXPSPACE}
\end{matrix}
$$

:::

A seguinte proposição também transita para máquinas não deterministas:

:::tip[Proposição]

Para uma máquina não-determinista classificadora $M$, tem-se que $ntime_M$ e $nspace_M$ são funções monótonas e, para qualquer, $n \in \mathbb{N}$:

1. $nspace_M(N) \leq ntime_M(n)$
2. $ntime_M(n) \leq 2^{O(nspace_M(n))}$.

:::

:::details[Prova]

Idêntica à para máquinas deterministas, quando considerado um ramo específico da computaçao não determinista.

:::

e consequentemente

:::tip[Corolário]

$NP \subset NPSPACE \subset NEXPTIME \subset NEXPSPACE$

:::

Finalmente, é importante estabelecer a relação entre a eficiência de máquinas deterministas com máquinas não-deterministas.

:::tip[Proposição]

Toda a máquina de Turing não-determinista $N$ é equivalente a uma máquina de Turing determinista $T$ tal que $time_T(n) = O(n + ntime_N(n)) \cdot 2^{O(ntime_N(n))}$ e $space_T(n) = O(n + ntime_N(n))$

:::

:::details[Prova]

// TODO

:::

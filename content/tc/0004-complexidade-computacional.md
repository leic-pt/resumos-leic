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

## Classes de Complexidade

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

O facto de as funções $time_M$ e $space_M$ serem monótonas segue da definição.

(1) A primeira propriedade vem apenas do facto de que, para escrever numa célula de memória de memória, é necessário deslocarmo-nos para essa célula.
Desta forma, o número de passos de uma computação é pelo menos igual ao número de células escritas.

(2) Considere-se a computação da máquina de Turing $M$ com alfabeto de trabalho $\Gamma$ e conjunto de estados $Q$ sobre um input de comprimento menor ou igual a $n$, com o maior número de configurações.
Então $r$ não tem configurações repetidas, pelo que o número de configurações em $r$ tem de ser inferior ou igual ao número de configurações que podem existir no espaço que $r$ utiliza.  
Suponha-se que em $r$ são visitadas $m$ células.
Então, o número de configurações possíveis é $|\Gamma|^m \cdot |Q| \cdot m$, pelo que:

$$
\begin{align*}
time_M(n) &\leq |\Gamma|^m \times |Q| \times m
\leq 2^{m\log_2(|\Gamma|)} \cdot 2^{\log_2(|Q|)} \cdot 2^m \\
&= 2^{m(\log_2(|\Gamma|) + 1) + \log_2(|Q|)}
= 2^{O(space_M(n))}
\end{align*}
$$

:::

:::tip[Corolário]

$P \subset PSPACE \subset EXPTIME \subset EXPSPACE$

:::

## Variantes

### Movimentos-$S$

:::tip[Proposição]

Toda a máquina de Turing $M$ com transições-$S$ é equivalente a uma máquina de Turing $T$ sem transições-$S$ tal que $time_T(n) = O(time_M(n))$ e $space_T(n) = O(space_M(n))$

:::

:::details[Prova]

Na prova da equivalência, simulamos todos os movimentos-$S$ com um movimento à direita seguido de um movimento à esquerda.
Temos então que cada movimento em $M$ corresponde no máximo a dois movimentos em $T$ pelo que

$$
time_T(n) \leq 2 time_M(n) = O(time_M(n)) \\
$$

$$
space_T(n) \leq space_M(n) + 1 = O(space_M(n))
$$

:::

### Bidirecional

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
\begin{align*}
time_T(n) &\leq (2n+3) + time_M(n) \cdot O(space_M(n)) + O(space_M(n)) \\
&\leq O(n) + time_M(n) \cdot O(time_M(n)) + O(time_M(n)) \\
&= O(n + time_M(n)^2 + time_M(n)) \\
&= O(n + time_M(n)^2)
\end{align*}
$$

Quando ao espaço, $T$ usa apenas mais duas células, as que usa para delimitar a palavra.
Então:

$$
space_T(n) \leq 2 + space_M(n) = O(space_M(n))
$$

:::

### Multifita

:::tip[Proposição]

Toda a máquina de Turing multifita $M$ é equivalente a uma máquina com apenas uma fita $T$ tal que $time_T(n) = O(n + time_M(n)^2)$ e $space_T(n) = O(space_M(n))$

:::

:::details[Prova]

Atente-se na máquina $T$ construída a partir de $M$ tal como no capítulo de Máquinas de Turing.  
A computação de $T$ começa por inicializar a fita de memória, balizando o input com os símbolos $I$ e $F$, e demarcando o espaço de cada uma das $k$ fitas da máquina $T$, num número de passos da ordem de $O(n + k)$, onde $n$ é o tamanho do input e $k$ o número de fitas.  
De seguida simula cada uma das transições de $M$, percorrendo a fita da esquerda para a direita de forma a ler os símbolos marcados, e depois da direita para a esquerda actualizando as marcações, visitando um número de células da ordem de $O(space_M(n))$.
Pode ter de efectuar um máximo de $k$ espaçamentos, 1 em cada fita, visitando assim um número máximo de células da ordem de $k \cdot O(space_M(n))$.  
Finalmente, após a aceitação por $M$, os símbolos marcados são adequadamente substituídos, e o símbolo $F$ é removido, o que de novo implica que um número de células da ordem de $O(space_M(n))$ seja visitado.  
Assim, temos:

$$
\begin{align*}
time_T(n) &\leq O(n+k) + time_M(n) \cdot \left( O(space_M(n)) + k O(space_M(n)) \right) \\
&\quad + O(space_M(n)) \\
&\leq O(n) + time_M(n) \cdot O(time_M(n)) + O(time_M(n)) \\
&= O(n + time_M(n)^2)
\end{align*}
$$

Quanto ao espaço, a máquina $T$ usa exatamente $k+1$ células de memória adicionais, pelo que:

$$
space_T(n) = k+1+space_M(n) = O(space_M(n))
$$

:::

## Não-Determinismo

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

Vamos considerar a máquina $T$ construída a partir de $N$ como no capítulo de Máquinas de Turing.  
A computação de $T$ começa por inicializar 3 fitas de memória, a segunda das quais com o comprimento máximo das computações possíveis, que pode ser calculado num número de passos da ordem de $O(ntime_N(n))$.
De seguida, copia o input da primeira para a terceira fita, balizando-o com os símbolos $I$ e $F$, e executando um número de passos da ordem de $O(n)$.
Na terceira fita é então simulado o caminho de computação de $N$ descrito na fita 2, num número de passos inferior ou igual a $ntime_N(n)$, após o que volta a limpar a fita 3, visitando um número de células da ordem de $O(space_N(n))$.  
Em caso de aceitação por $N$, há ainda que, na terceira fita, remover o símbolo $F$ e colocar a cabeça de leitura/escrita no início da palavra, visitando um número de células da ordem de $O(nspace_N(n))$.  
Se $b$ for o número máximo de escolhas não-deterministas na máquina $N$, temos assim:

$$
\begin{align*}
time_T(n) &\leq O(ntime_N(n)) +
b^{ntime_N(n)} \left( O(n) + ntime_N(n) + O(nspace_N(n)) \right) \\
& \quad + O(nspace_N(n)) \\
&\leq O(ntime_N(n)) + b^{ntime_N(n)} \left( O(n) + O(ntime_N(n)) \right) \\
&= O(n + ntime_N(n)) \cdot 2^{O(ntime_N(n))}
\end{align*}
$$

Quanto ao espaço, como vimos na secção de máquinas multifita, temos que o espaço numa máquina multifita tem a mesma complexidade que a máquina de Turing com uma fita correspondente, pelo que:

$$
\begin{align*}
space_T(n) &\leq O(n) + O(ntime_N(n)) + O(nspace_N(n)) \\
&\leq O(n) + O(ntime_N(n)) + O(ntime_N(n)) \\
&= O(n + ntime_N(n))
\end{align*}
$$

:::

Note-se que isto implica que a existência de uma máquina não-determinista de tempo polinomial para resolver um problema parece não nos poder garantir mais do que uma máquina determinista de tempo exponencial para resolver o mesmo problema.  
O problema $\mathbf{P} \text{ vs } \mathbf{NP}$ pode ser compreendido como perguntando se é possível fazer esta simulação de forma mais eficiente (polinomial).

## Propriedades de Fecho e Redução Polinomial

:::tip[Proposição]

Seja $\mathcal{C}$ uma das classes de complexidade $\mathbf{P}$, $\mathbf{NP}$, $\mathbf{PSPACE}$, $\mathbf{NPSPACE}$, $\mathbf{EXPTIME}$, $\mathbf{NEXPTIME}$, $\mathbf{EXPSPACE}$, $\mathbf{NEXPSPACE}$, e sejam $\Sigma$ um alfabeto, e $L_1, L_2 \in \mathcal{C}$ linguagens sobre $\Sigma$.  
Então:

- $\emptyset \in \mathcal{C}$
- $\Sigma^* \in \mathcal{C}$
- $L_1 \cup L_2 \in \mathcal{C}$
- $L_1 \cap L_2 \in \mathcal{C}$
  Se $\mathcal{C} \neq \mathbf{NP}$ e $\mathcal{C} \neq \mathbf{NEXPTIME}$, então temos também que:
- $L_1 \backslash L_2 \in \mathcal{C}$

:::

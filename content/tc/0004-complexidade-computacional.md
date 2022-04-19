---
title: Complexidade Computacional
description: >-
  Complexidade Computacional.
  Funções time e space.
  Classes de Complexidade.
  Não determinismo: funções ntime e nspace.
  Propriedades de Fecho e Redução Polinomial.
path: /tc/complexidade-computacional
type: content
---

# Complexidade Computacional

```toc

```

A computação é uma tarefa que consome recursos.
Os recursos que mais usualmente são considerados são o tempo (a duração da computação) e o espaço (uma medida da informação que é armazenada/consumida durante a computação), mas também é possível considerar outras quantidades, como a energia (necessária para executar a computação).  
A complexidade computacional consiste no estudo dos recursos necessários para resolver um problema.

Podemos calcular a eficiência de uma máquina de Turing (que seja um classificador) relativamente ao tempo e ao espaço de forma relativamente simples, se tomarmos o número de passos de cada computação como uma medida do tempo, e o número de células de memória lidas/escritas ao longo de cada computação como uma medida de espaço.

:::tip[Definição]

Para uma máquina classificadora $M$ definimos as funções $\op{time}_M, \op{space}_M : \mathbb{N} \to \mathbb{N}$ da seguinte forma:

- $\op{time}_M(n)$ é o comprimento máximo - ou seja, o número de passos máximo - de uma computaçao de $M$ sobre um input $\omega$ com $|\omega| \leq n$;
- $\op{space}_M(n)$ é o número máximo de células de memória lidas/escritas durante uma computação de $M$ sobre um input $\omega$ com $|\omega| \leq n$.

:::

Para cada $n \in \mathbb{N}$, $\op{time}_M(n)$ e $\op{space}_M(n)$ dão-nos uma avaliação do pior caso, em termos de duração da computação ou da quantidade de memória necessária, respectivamente, para processar inputs de tamanho limitado por $n$.  
Mais do que a expressão exacta das funções $\op{time}_M$ e $\op{space}_M$ associadas a um classificadora $M$, estamos interessados em avaliar o seu crescimento. Por essa razão é usual usar notação assintótica, nomeadamente a notação $O$ ([como visto em cadeiras anteriores](/iaed/introducao-algoritmos#limite-assimpt%C3%B3tico-superior-o) como IAED ou ASA).

## Classes de Complexidade

Agrupamos problemas, de acordo com a sua dificuldade relativa, em classes de complexidade.

:::tip[Definição]

Seja $f : \mathbb{N} \to \mathbb{R}_0^+$ uma funçao. Definem-se as seguintes classes de linguagens:

- $\mathbf{TIME}(f(n)) = \{ L : \text{ existe uma máquina } M \text{ que decide } L \text{ com } \\ \op{time}_M(n) = O(f(n)) \}$;
- $\mathbf{SPACE}(f(n)) = \{ L : \text{ existe uma máquina } M \text{ que decide } L \text{ com } \\ \op{space}_M(n) = O(f(n)) \}$;

:::

Em certas áreas de estudo, são consideradas como eficientes as máquinas cujo comportamento é limitado por um polinómio.
Por outro lado, o protótipo das máquinas ineficientes é precisamente o crescimento exponencial.
Estas considerações levam à definição das seguintes classes de complexidade:

:::tip[Definição]

Definem-se as seguintes classes de linguagens, em relação ao tempo:

- $\mathbf{P} = \bigcup_{k \in \mathbb{N}} \mathbf{TIME}(n^k)$;
- $\mathbf{EXPTIME} = \bigcup_{k \in \mathbb{N}} \mathbf{TIME}(2^{n^k})$.

analogamente, para o espaço, definimos

- $\mathbf{PSPACE} = \bigcup_{k \in \mathbb{N}} \mathbf{SPACE}(n^k)$;
- $\mathbf{EXPSPACE} = \bigcup_{k \in \mathbb{N}} \mathbf{SPACE}(2^{n^k})$.

:::

:::tip[Relação entre função tempo e espaço]

Para uma máquina classificadora $M$, tem-se que $\op{time}_M$ e $\op{space}_M$ são funções monótonas e, para qualquer, $n \in \mathbb{N}$:

1. $\op{space}_M(N) \leq \op{time}_M(n)$
2. $\op{time}_M(n) \leq 2^{O(\op{space}_M(n))}$.

:::

:::details[Prova]

O facto de as funções $\op{time}_M$ e $\op{space}_M$ serem monótonas segue da definição.

(1) A primeira propriedade vem apenas do facto de que, para escrever numa célula de memória de memória, é necessário deslocarmo-nos para essa célula.
Desta forma, o número de passos de uma computação é pelo menos igual ao número de células escritas.

(2) Considere-se a computação da máquina de Turing $M$ com alfabeto de trabalho $\Gamma$ e conjunto de estados $Q$ sobre um input de comprimento menor ou igual a $n$, com o maior número de configurações.
Então $r$ não tem configurações repetidas, pelo que o número de configurações em $r$ tem de ser inferior ou igual ao número de configurações que podem existir no espaço que $r$ utiliza.  
Suponha-se que em $r$ são visitadas $m$ células.
Então, o número de configurações possíveis é $|\Gamma|^m \cdot |Q| \cdot m$, pelo que:

$$
\begin{align*}
\op{time}_M(n) &\leq |\Gamma|^m \times |Q| \times m
\leq 2^{m\log_2(|\Gamma|)} \cdot 2^{\log_2(|Q|)} \cdot 2^m \\
&= 2^{m(\log_2(|\Gamma|) + 1) + \log_2(|Q|)}
= 2^{O(\op{space}_M(n))}
\end{align*}
$$

:::

:::tip[Corolário]

$\mathbf{P} \subset \mathbf{PSPACE} \subset \mathbf{EXPTIME} \subset \mathbf{EXPSPACE}$

:::

## Variantes

### Movimentos-$S$

:::tip[Proposição]

Toda a máquina de Turing $M$ com transições-$S$ é equivalente a uma máquina de Turing $T$ sem transições-$S$ tal que $\op{time}_T(n) = O(\op{time}_M(n))$ e $\op{space}_T(n) = O(\op{space}_M(n))$

:::

:::details[Prova]

Na prova da equivalência, simulamos todos os movimentos-$S$ com um movimento à direita seguido de um movimento à esquerda.
Temos então que cada movimento em $M$ corresponde no máximo a dois movimentos em $T$ pelo que

$$
\op{time}_T(n) \leq 2 \op{time}_M(n) = O(\op{time}_M(n)) \\
$$

$$
\op{space}_T(n) \leq \op{space}_M(n) + 1 = O(\op{space}_M(n))
$$

:::

### Bidirecional

:::tip[Proposição]

Toda a máquina bidirecional $M$ é equivalente a uma máquina unidirecional $T$ tal que $\op{time}_T(n) = O(n + \op{time}_M(n)^2)$ e $\op{space}_T(n) = O(\op{space}_M(n))$

:::

:::details[Prova]

Vamos basear-nos na prova de equivalência apresentada no [capítulo de Máquinas de Turing](/tc/maquinas-de-turing#m%C3%A1quinas-bidirecionais).  
A computaçao de $T$ começa por balizar o input com os símbolos $I$ e $F$, fazendo $2n + 3$ passos.  
O resto da computação é idêntica a $M$, exceto nos casos em que é necessário introduzir espaçamento.
Para introduzir espaço à direita precisamos apenas de 3 movimentos, enquando que à esquerda precisamos de copiar a palavra toda, o que implica $O(\op{space}_M(n))$ passos.  
No final há que apagar o delimitador $F$, o que demora $O(\op{space}_M(n))$.
Na pior das hipóteses, temos que é preciso abrir espaço à esquerda em cada passo, pelo que:

$$
\begin{align*}
\op{time}_T(n) &\leq (2n+3) + \op{time}_M(n) \cdot O(\op{space}_M(n)) + O(\op{space}_M(n)) \\
&\leq O(n) + \op{time}_M(n) \cdot O(\op{time}_M(n)) + O(\op{time}_M(n)) \\
&= O(n + \op{time}_M(n)^2 + \op{time}_M(n)) \\
&= O(n + \op{time}_M(n)^2)
\end{align*}
$$

Quando ao espaço, $T$ usa apenas mais duas células, as que usa para delimitar a palavra.
Então:

$$
\op{space}_T(n) \leq 2 + \op{space}_M(n) = O(\op{space}_M(n))
$$

:::

### Multifita

:::tip[Proposição]

Toda a máquina de Turing multifita $M$ é equivalente a uma máquina com apenas uma fita $T$ tal que $\op{time}_T(n) = O(n + \op{time}_M(n)^2)$ e $\op{space}_T(n) = O(\op{space}_M(n))$

:::

:::details[Prova]

Atente-se na máquina $T$ construída a partir de $M$ tal como no capítulo de Máquinas de Turing.  
A computação de $T$ começa por inicializar a fita de memória, balizando o input com os símbolos $I$ e $F$, e demarcando o espaço de cada uma das $k$ fitas da máquina $T$, num número de passos da ordem de $O(n + k)$, onde $n$ é o tamanho do input e $k$ o número de fitas.  
De seguida simula cada uma das transições de $M$, percorrendo a fita da esquerda para a direita de forma a ler os símbolos marcados, e depois da direita para a esquerda actualizando as marcações, visitando um número de células da ordem de $O(\op{space}_M(n))$.
Pode ter de efectuar um máximo de $k$ espaçamentos, 1 em cada fita, visitando assim um número máximo de células da ordem de $k \cdot O(\op{space}_M(n))$.  
Finalmente, após a aceitação por $M$, os símbolos marcados são adequadamente substituídos, e o símbolo $F$ é removido, o que de novo implica que um número de células da ordem de $O(\op{space}_M(n))$ seja visitado.  
Assim, temos:

$$
\begin{align*}
\op{time}_T(n) &\leq O(n+k) + \op{time}_M(n) \cdot \left( O(\op{space}_M(n)) + k O(\op{space}_M(n)) \right) \\
&\quad + O(\op{space}_M(n)) \\
&\leq O(n) + \op{time}_M(n) \cdot O(\op{time}_M(n)) + O(\op{time}_M(n)) \\
&= O(n + \op{time}_M(n)^2)
\end{align*}
$$

Quanto ao espaço, a máquina $T$ usa exatamente $k+1$ células de memória adicionais, pelo que:

$$
\op{space}_T(n) = k+1+\op{space}_M(n) = O(\op{space}_M(n))
$$

:::

## Não-Determinismo

No caso das máquinas não-deterministas vai surgir a primeira diferença substancial relativamente à teoria da computabilidade.

:::tip[Definição]

Seja $M$ uma máquina não-determinista classificadora. Definem-se as funções $\op{ntime}_M, \op{nspace}_M: \mathbb{N} \to \mathbb{N}$ da seguinte forma:

- $\op{ntime}_M(n)$ é o comprimento do maior ramo de computação de $M$ sobre um input $\omega$ com $| \omega | \leq n$;
- $\op{nspace}_M(n)$ é o número máximo de células de memória lidas/escritas durante algum dos ramos de computação de $M$ sobre um input $\omega$ com $| \omega | \leq n$.

:::

Tal como para as máquinas deterministas, definimos as classes de tempo e espaço não-deterministas:

:::tip[Definição]

Seja $f : \mathbb{N} \to \mathbb{R}_0^+$ uma funçao. Definiem-se as seguintes classes de linguagens:

- $\mathbf{NTIME}(f(n)) = \{ L : \text{ existe uma máquina não-determinista } \\ M \text{ que decide } L \text{ com } \op{ntime}_M(n) = O(f(n)) \}$;
- $\mathbf{NSPACE}(f(n)) = \{ L : \text{ existe uma máquina não-determinista } \\ M \text{ que decide } L \text{ com } \op{nspace}_M(n) = O(f(n)) \}$;

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

Para uma máquina não-determinista classificadora $M$, tem-se que $\op{ntime}_M$ e $\op{nspace}_M$ são funções monótonas e, para qualquer, $n \in \mathbb{N}$:

1. $\op{nspace}_M(N) \leq \op{ntime}_M(n)$
2. $\op{ntime}_M(n) \leq 2^{O(\op{nspace}_M(n))}$.

:::

:::details[Prova]

Idêntica à para máquinas deterministas, quando considerado um ramo específico da computaçao não determinista.

:::

e consequentemente

:::tip[Corolário]

$\mathbf{NP} \subset \mathbf{NPSPACE} \subset \mathbf{NEXPTIME} \subset \mathbf{NEXPSPACE}$

:::

Finalmente, é importante estabelecer a relação entre a eficiência de máquinas deterministas com máquinas não-deterministas.

:::tip[Proposição]

Toda a máquina de Turing não-determinista $N$ é equivalente a uma máquina de Turing determinista $T$ tal que $\op{time}_T(n) = O(n + \op{ntime}_N(n)) \cdot 2^{O(\op{ntime}_N(n))}$ e $\op{space}_T(n) = O(n + \op{ntime}_N(n))$

:::

:::details[Prova]

Vamos considerar a máquina $T$ construída a partir de $N$ como no capítulo de Máquinas de Turing.  
A computação de $T$ começa por inicializar 3 fitas de memória, a segunda das quais com o comprimento máximo das computações possíveis, que pode ser calculado num número de passos da ordem de $O(\op{ntime}_N(n))$.
De seguida, copia o input da primeira para a terceira fita, balizando-o com os símbolos $I$ e $F$, e executando um número de passos da ordem de $O(n)$.
Na terceira fita é então simulado o caminho de computação de $N$ descrito na fita 2, num número de passos inferior ou igual a $\op{ntime}_N(n)$, após o que volta a limpar a fita 3, visitando um número de células da ordem de $O(\op{space}_N(n))$.  
Em caso de aceitação por $N$, há ainda que, na terceira fita, remover o símbolo $F$ e colocar a cabeça de leitura/escrita no início da palavra, visitando um número de células da ordem de $O(\op{nspace}_N(n))$.  
Se $b$ for o número máximo de escolhas não-deterministas na máquina $N$, temos assim:

$$
\begin{align*}
\op{time}_T(n) &\leq O(\op{ntime}_N(n)) +
b^{\op{ntime}_N(n)} \left( O(n) + \op{ntime}_N(n) + O(\op{nspace}_N(n)) \right) \\
& \quad + O(\op{nspace}_N(n)) \\
&\leq O(\op{ntime}_N(n)) + b^{\op{ntime}_N(n)} \left( O(n) + O(\op{ntime}_N(n)) \right) \\
&= O(n + \op{ntime}_N(n)) \cdot 2^{O(\op{ntime}_N(n))}
\end{align*}
$$

Quanto ao espaço, como vimos na secção de máquinas multifita, temos que o espaço numa máquina multifita tem a mesma complexidade que a máquina de Turing com uma fita correspondente, pelo que:

$$
\begin{align*}
\op{space}_T(n) &\leq O(n) + O(\op{ntime}_N(n)) + O(\op{nspace}_N(n)) \\
&\leq O(n) + O(\op{ntime}_N(n)) + O(\op{ntime}_N(n)) \\
&= O(n + \op{ntime}_N(n))
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

:::details[Prova]

É evidente que $\emptyset$ e $\Sigma^*$ podem ser decididas em $O(1)$, pelo que estão contidas nas classes enumeradas.

Quanto as proposições 3 e 4, usamos as máquinas $M$ como definidas nas [prova que $L_1 \cap L_2$ e $L_1 \cup L_2$ são decidíveis](./tc/teoria-da-computabilidade#propriedades), para $L_1$ e $L_2$ decidíveis.  
Usamos o caso da disjunção como exemplo, mas a conjução é análoga.
Se $M_1$ é computada em $O(f(x))$ e $M_2$ é computada em $O(g(x))$, então a máquina $M$ que decide $L_1 \cup L_2$ computa em $O(f(x) + g(x))$, o que é suficiente para provar ambas proposições ([não em teste!](color:red)).

A quinta proposição fica como exercício (agradecem-se contribuições).

:::

Stephen Cook e Leonid Levin mostraram que existem algumas linguagens em $\mathbf{NP}$ às quais todas as outras linguagens dessa classe se reduzem.
Mais ainda, mostraram que essa redução pode ser feita em tempo polinomial de forma que se se encontrar uma solução eficiente para um desses problemas, também se consegue decidir eficientemente qualquer outro problema de $\mathbf{NP}$.
Vamos então começar por definir o que é uma redução polinomial de uma linguagem a outra:

:::tip[Definição]

Dadas linguagens sobre $L_1$ e $L_2$ sobre alfabetos $\Sigma_1$ e $\Sigma_2$, respetivamente, dizemos que [**há uma redução polinomial de $L_1$ para $L_2$**](color:orange) ou que [$L_1$ reduz polinomialmente a $L_2$](color:orange), o que denotamos por [$L_1 \leq_P L_2$](color:orange) se existe uma funçao total $f : \Sigma_1^* \to \Sigma_2^*$, calculada por uma máquina determinista em tempo polinomial tal que, para cada $\omega \in \Sigma_1^*$

$$
\omega \in L_1 \Leftrightarrow f(\omega) \in L_2
$$

:::

Obviamente, se $L_1 \leq_P L_2$, então $L_1 \leq L_2$.

:::tip[Proposição]

Sejam $L_1$ e $L_2$ linguages sobre alfabetos $\Sigma_1$ e $\Sigma_2$, respetivamente.
Seja $\mathcal{C}$ uma das classes de complexidade $\mathbf{P}$, $\mathbf{NP}$, $\mathbf{PSPACE}$, $\mathbf{NPSPACE}$, $\mathbf{EXPTIME}$, $\mathbf{NEXPTIME}$, $\mathbf{EXPSPACE}$, $\mathbf{NEXPSPACE}$.
Se $L_1 \leq_P L_2$ e $L_2 \in \mathcal{C}$, então $L_1 \in \mathcal{C}$.

:::

:::details[Prova]

Eish, a prova é bué longa :depressao:.

:::

## Teorema de Savitch

:::tip[Teorema de Savitch]

Seja $f : \mathbb{N} \to \mathbb{R}^+$ tal que $f(n) \geq n$. Então

$$
\mathbf{NSPACE}(f(n)) \subset \mathbf{SPACE}(f(n)^2)
$$

:::

:::details[Prova]

// TODO

:::

:::tip[Corolário]

$\mathbf{PSPACE} = \mathbf{NPSPACE}$ e $\mathbf{ESPSPACE} = \mathbf{NEXPSPACE}$

:::

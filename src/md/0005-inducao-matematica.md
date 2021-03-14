---
description: Demonstrações por indução matemática; Exemplos; Indução simples e complexa; Sequência de Fibonacci
---

# Indução Matemática

[[toc]]

## Demonstrações por indução matemática

Relembrando que quando queremos provar uma coleção de enunciados através de Indução Matemática, devem-se provar os seguintes pontos:

- Que $P(0)$ é verdadeiro;
- $\forall_{n \in \mathbb N} \ (P(n) \text{ é verdadeiro}\implies P(n+1) \text{ é verdadeiro})$

onde $P(n)$ (antecedente) é a nossa _Hipótese de Indução._ A sucessão de _Fibonacci_ é um ótimo exemplo de algo donde se podem derivar várias propriedades a partir da indução matemática. É definida da seguinte forma:

$$f_n=\begin{cases}\ 0\quad \text{se } \quad n = 0\\\  1\quad \text{se } \quad n = 1 \\\ f_{n-1} + f_{n-2}\quad \text{se }\quad n \in \mathbb N\end{cases}$$

Com termos:

$$
\begin{array}{l|l|l|l|l|l|l|l|l|l|l|l}
n&0 & 1 & 2 & 3 & 4 & 5 & 6 & 7  & 8  & 9  & 10 \\ \hline
f_n&0 & 1 & 1 & 2 & 3 & 5 & 8 & 13 & 21 & 34 & 55
\end{array}
$$

## Exemplos de aplicações da indução matemática

### Primeiro exemplo

Pretende-se provar que:

$$\sum_{k=0}^{n}f_k = f_{n+2} -1$$

Base da indução (n = 0)

$$\sum_{k=0}^{0}f_k = 0 = 1-1 = f_{0+2}-1$$

Hipótese de Indução: $\sum_{k=0}^{n}f_n = f_{n+2} -1$

Passo de indução

$$
\sum_{k=0}^{n+1}f_k =\sum_{k=0}^{n}f_k + f_{n+1}=\\
= f_{n+2}-1+f_{n+1} =f_{n+3}-1
$$

Onde se aplicou a nossa hipótese de indução.

### Segundo exemplo

Pretende-se provar que:

$$\sum_{k=0}^{n}f_k^2 = f_nf_{n+1}$$

Base da indução (n = 0)

$$\sum_{k=0}^{0}f_k^2 = 0^2=0=0\cdot1=f_0f_{0+1}$$

Hipótese de Indução: $\sum_{k=0}^{n}f_k^2 = f_nf_{n+1}$

Passo de indução

$$
\sum_{k=0}^{n+1}f_k^2=\sum_{k=0}^{n}f_k^2+f_{n+1}^2 = \\=f_nf_{n+1}+f_{n+1}^2 = f_{n+1}(f_n+f_{n+1}) = f_{n+1}f_{n+2}
$$

### Terceiro exemplo

Pretende-se provar que:

$$f_{n-1}f_{n+1} = f_n^2 +(-1)^n$$

Base da indução (n = 1)

$$f_{0}f_{2}= 0\cdot1 = 0 = f_1^2+(-1)^1=1-1=0$$

Hipótese de Indução: $f_{n-1}f_{n+1} = f_n^2 +(-1)^n$

Passo de indução

$$f_{n}f_{n+2} = f_n(f_{n+1}+f_{n}) =\\ f_n^2+f_nf_{n+1} = f_{n-1}f_{n+1}-(-1)^n + f_{n}f_{n+1} =\\ f_{n+1}(f_n+f_{n-1}) + (-1)^{n+1} = f_{n+1}^2 + (-1)^{n+1}$$

## Tipos de indução

Definição de **indução simples:**

> Se $P(m), P(m+1), P(m+2),\dots ( m \in \mathbb N)$ é uma sequência infinita de enunciados tal que:

- $P(m)$ é verdadeiro;
- $\forall_{n \in \mathbb N}$ $(P(n)$ é verdadeiro $\longrightarrow P(n+1)$ é verdadeiro$)$;

Definição de **indução completa:**

> Se $P(m), P(m+1), \dots$ são enunciados, então se:

- $P(m), P(m+1), \dots$ são verdadeiros;
- $\forall_{n \in \mathbb N}, P(m), \dots, P(m+ \gamma), P(m+\gamma+1), \dots, P(m+\gamma+n) \longrightarrow P(m+\gamma+n+1)$;

então $\forall_{n \in \mathbb N} P(n)$ é verdadeiro.

## Exemplo de **indução completa:**

Quer se provar que **todo o número natural é a soma de números de Fibonacci não consecutivos.**

Base da indução (n = 0)

$$0~\text{é um número de Fibonacci.}$$

Hipótese de Indução: $\text{Todo o número natural é a soma de números de Fibonacci não consecutivos.}$

Passo de indução

Tem-se que 0,1,2,3 são números de Fibonacci, pelo que cumprem logo o requisito da prova. Se $n$ for número de Fibonacci, não há o que provar. Caso contrário, existe $j$ tal que $F_j < m < F_{j+1}$ donde se repara que $F_{j+1} = F_j + F_{j-1} \Leftrightarrow f_{i-1} > m - f_{j}$, pelo que, se $f_j$ vai pertencer ao conjunto $D$ de números de Fibonacci que vai somar até dar $m$, então é impossível $f_{i-1}$ também pertença ao mesmo conjunto $D$ $(F_j + F_{j-1} = F_{j+1} > m).$

A partir da nossa hipótese de indução, conclui-se que $m-f_j$ resulta da soma entre números de Fibonacci não consecutivos.

Como resultado, $\ n$ pode ser representado como a soma de $F_j$ e o conjunto $D_{m-f_j}$, e está provada a etapa de indução.

Como exemplo, tome-se o número doze como valor para $m$:

$$8 < 12 < 13$$

Tem-se que $m-f_j = 12 - 8 = 4 = 3+1$ (sabe-se que tem representação através de números de Fibonacci devido à nossa hipótese). Logo tem-se que:

$$12= 8+4 = 8+3+1$$

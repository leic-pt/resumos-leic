---
title: Variáveis Aleatórias Discretas
description: >-
  Variáveis Aleatórias Discretas:
  Distribuição Uniforme Discreta, de Bernoulli, Binomial, Geométrica, Hipergeométrica e de Poisson.
path: /pe/va-discretas
type: content
---

# Variáveis Aleatórias Discretas

```toc

```

Vamos, inicialmente, olhar para duas noções que nos vão ser muito importantes aquando do estudo de probabilidades.

:::tip[Prova de Bernoulli]

Damos o nome de **prova de Bernoulli** a qualquer experiência aleatória cujo espaço de resultados tem apenas dois eventos elementares: um evento a que damos o nome de **sucesso**, com probabilidade $p$, e um a que damos nome de **insucesso**, com probabilidade $1-p$.

:::

:::warning[Sucesso pode ser mau!]

Enquanto que estamos habituados a associar sucesso a coisas boas e insucesso a coisas más, neste caso, o sucesso deve ser entendido apenas como **aquilo que queremos modelar**.  
Sendo assim, por exemplo, se considerarmos a Experiência $A$ que verifica se o ecrã de um telemóvel se parte no primeiro ano de uso, o sucesso será "o ecrã partiu-se".  
Claro que dada uma Prova de Bernoulli $A$, podemos sempre considerar a experiência aleatória contrária $B$, e, nesse caso, o sucesso de $B$ será o insucesso de $A$ e vice-versa.
Podemos aproveitar-nos disto à vontade, desde que tenhamos em atenção que o sucesso da prova de Bernoulli e o que queremos medir com a VA sejam coerentes.

:::

## Distribuição Uniforme Discreta

:::danger[]

Esta distribuição não é lecionada no programa de 2021/22, mas pode ser importante para perceber alguns conceitos.

:::

:::tip[Motivação]

Esta distribuição é normalmente usada em situações em que [**todos os eventos são equiprováveis**](color:green).

:::

Dizemos que uma VA discreta $X$ tem uma [**distribuição uniforme discreta**](color:green) e representamos $X~\sim~\op{uniforme \, discreta}(S)$ se, dados os **parâmetros**:

- $S = \{ x_1, x_2, \cdots, x_n \}$ para $n \in \N$ e $x_i \in \R, \forall_{i \in \{ 1, 2, \cdots, n \}}$

satisfizer:

**Contradomínio**: $S$  
**Função de Probabilidade**

$$
P(X = x) =
\begin{cases}
\frac{1}{n}, &x \in S \\
0, &x \notin S
\end{cases}
$$

Uma VA $X$ com [distribuição uniforme discreta](color:green) tem:

- **Valor Esperado**:
  $$
  E(X) = \frac{1}{n} \sum_{i=1}^n x_i
  $$
- **Variância**:
  $$
  V(X) = \frac{1}{n} \sum_{i=1}^n x_i^2 - \left( \frac{1}{n} \sum_{i=1}^n x_i \right)^2
  $$

:::details[Exemplo]

Se considerarmos a VA $X$ que mede o resultado do lançamento de um dado ao ar, temos que:

$$
X~\sim~\text{uniforme discreta}(\{1,2,3,4,5,6\})
$$

Sendo assim, a função de probabilidade desta VA é

$$
P(X = x) =
\begin{cases}
\frac{1}{6}, &x \in \{1,2,3,4,5,6\} \\
0, &x \notin \{1,2,3,4,5,6\}
\end{cases}
$$

e o seu valor esperado e variância são

$$
E(X) = \frac{1}{6} \sum_{i=1}^6 i = \frac{7}{2} \quad \quad
V(X) = \frac{1}{6} \sum_{i=1}^6 i^2 - \left( \frac{1}{6} \sum_{i=1}^6 i \right)^2 = \frac{91}{6} - \frac{49}{4} = \frac{35}{12}
$$

:::

## Distribuição Binomial

:::tip[Motivação]

Esta distribuição é usada para, dada uma [**prova de Bernoulli**](color:green) que é [**executada $n$ vezes**](color:green) (independentemente), [**medir a probabilidade de haver exatamente $x$ sucessos**](color:green).

:::

Dizemos que uma VA discreta $X$ tem uma [**distribuição binomial**](color:yellow) e representamos $X~\sim~\op{binomial}(n,p)$ se, dados os **parâmetros**:

- $n$: número de provas de Bernoulli executadas ($n \in \N$);
- $p$: probabilidade de sucesso da prova de Bernoulli ($p \in [0,1]$).

satisfizer:

**Contradomínio**: $\{0,1,2,\cdots,n\}$  
**Função de Probabilidade**

$$
P(X = x) =
\begin{cases}
{n \choose x} p^x(1-p)^{n-x}, &x \in \{0,1,\cdots,n\} \\
0, &x \notin \{0,1,\cdots,n\}
\end{cases}
$$

Uma VA $X$ com [distribuição binomial](color:yellow) tem:

**Valor Esperado**: $E(X) = np$  
**Variância**: $V(X) = np(1-p)$

:::details[Exemplo]

Aproveitando a prova de Bernoulli que vimos no exemplo acima, temos que um exemplo de uma VA com distribuição binomial é a VA $X$ que regista o número de coroas em 10 lançamentos de uma moeda ao ar.
Para realçar a diferença entre um sucesso e insucesso, vamos, no entanto, usar uma moeda enviesada, cuja probabilidade de sucesso é $p=0.6$.
Temos que:

$$
X~\sim~\text{binomial}(10, 0.6)
$$

A função de probabilidade desta VA é

$$
P(X = x) =
\begin{cases}
{10 \choose x} ~ 0.6^x ~ 0.4^{10-x}, &x \in \{0,1,2,3,4,5,6,7,8,9,10\} \\
0, &x \notin \{0,1,2,3,4,5,6,7,8,9,10\}
\end{cases}
$$

e o seu valor esperado e variância são

$$
E(X) = 10 \cdot 0.6 = 6 \quad \quad V(X) = 10 \cdot 0.6 \cdot 0.4 = 2.4
$$

:::

**Propriedades da [distribuição binomial](color:yellow)**:

- A distribuição binomial [**não tem uma função de distribuição**](color:red) que possa ser escrita em forma fechada (isto é, sem um somatório);
- Se $X~\sim~\op{binomial}(n,p)$ e $Y$ for a VA que mede o número de insucessos associados a $X$, isto é
  $$
  Y = n-X~\sim~\op{binomial}(n, 1-p)
  $$
  temos que
  $$
  F_Y(y) = 1 - F_X(n-y-1)
  $$

## Distribuição Geométrica

:::tip[Motivação]

Esta distribuição é usada para, dada uma prova de Bernoulli, medir a probabilidade de o [**primeiro sucesso ocorrer ao fim de exatamente $x$ tentativas**](color:green).

:::

Dizemos que uma VA discreta $X$ tem uma [**distribuição geométrica**](color:orange) e representamos $X~\sim~\op{geométrica}(p)$ se, dados os **parâmetros**:

- $p$: probabilidade de sucesso da prova de Bernoulli ($p \in [0,1]$).

satisfizer:

**Contradomínio**: $\Z^+$  
**Função de Probabilidade**

$$
P(X = x) =
\begin{cases}
p(1-p)^{x-1}, &x \in \Z^+ \\
0, &x \notin \Z^+
\end{cases}
$$

Uma VA $X$ com [distribuição geométrica](color:orange) tem:

**Valor Esperado**: $E(X) = \frac{1}{p}$  
**Variância**: $V(X) = \frac{1-p}{p^2}$

:::details[Exemplo]

Continuando com o lançamento da moeda enviesada, queremos agora contar quantas vezes temos de lançar a moeda até sair coroa (sucesso).
Temos que a VA $X$ que regista esse valor satisfaz:

$$
X~\sim~\text{geométrica}(0.6)
$$

A função de probabilidade desta VA é

$$
P(X = x) =
\begin{cases}
0.6 \cdot 0.4^{x-1}, &x \in \Z^+ \\
0, &x \notin \Z^+
\end{cases}
$$

e o seu valor esperado e variância são

$$
E(X) = \frac{1}{0.6} \approx 1.67 \quad \quad V(X) = \frac{0.4}{0.6^2} \approx 1.11
$$

:::

**Propriedades da [distribuição geométrica](color:orange)**:

- A distribuição geométrica tem função de distribuição dada por

  $$
  F_X(x) =
  \begin{cases}
  0, &x<1 \\
  1-(1-p)^{\lfloor x \rfloor}, &x>1
  \end{cases}
  $$

  Isto, claro, dado que

  $$
  \begin{aligned}
    &\sum_{n=1}^{x}{p(1 - p)^{n - 1}}\\
    &= p \cdot \frac{1 - (1 - p)^x}{1 - (1 - p)}\\
    &= p \cdot \frac{1 - (1 - p)^x}{p}\\
    &= 1 - (1 - p)^x
  \end{aligned}
  $$

- **Propriedade da Falta de Memória**: Dada uma VA com distribuição geométrica $X$, temos que, $\forall_{k, x \in \Z^+}$:

  $$
  P(X > k+x | X > k) = P(X > x)
  $$

  Por outras palavras, a VA $Y = X-k | X>k$ é tal que

  $$
  Y \sim \op{geométrica}(p)
  $$

  A falta de memória é uma propriedade extremamente útil de algumas distribuições, que nos permite encurtar bastante alguns cálculos.

## Distribuição de Poisson

:::tip[Motivação]

A [distribuição de Poisson](color:purple) mede o número de ocorrências de uma EA num dado intervalo.  
Para que isto seja possível, é necessário assumirmos que:

- existe um intervalo pequeno suficiente tal que podemos considerar que é impossível o evento acontecer duas vezes nesse intervalo;
- a ocorrência do evento num intervalo é independente da ocorrência noutros intervalos, bem de como qual é o intervalo em questão.

:::

Dizemos, então, que uma VA discreta $X$ tem uma [**distribuição de Poisson**](color:purple) e representamos $X~\sim~\op{Poisson}(\lambda)$ se, dados os **parâmetros**:

- $\lambda$: valor esperado de ocorrências do evento num intervalo base ($\lambda \in \R^+$)

satisfizer:

**Contradomínio**: $\Z_0^+$  
**Função de Probabilidade**

$$
P(X = x) =
\begin{cases}
\frac{e^{-\lambda} \lambda^x}{x!}, &x \in \Z_0^+ \\
0, &x \notin \Z_0^+
\end{cases}
$$

Uma VA $X$ com [distribuição de Poisson](color:purple) tem:

**Valor Esperado**: $E(X) = \lambda$  
**Variância**: $V(X) = \lambda$

:::details[Exemplo]

Considere-se a VA $X$ que regista o número de remates que há num dado intervalo de um jogo de futebol.
Se assumirmos que o valor esperado de remates num minuto é $\lambda = 0.08$, temos que o número de remates que acontecem em qualquer intervalo de um minuto do jogo satisfaz

$$
X~\sim~\text{Poisson}(0.08)
$$

Sendo assim, a VA tem função de probabilidade

$$
P(X = x) =
\begin{cases}
\frac{e^{-0.08} 0.08^x}{x!}, &x \in \Z^+_0 \\
0, &x \notin \Z^+_0
\end{cases}
$$

e valor esperado e variância

$$
E(X) = V(X) = 0.08
$$

Se, por outro lado, quisermos a VA $Y$ que regista o número de remates em 5 minutos do jogo de futebol, temos que:

$$
Y~\sim~\text{Poisson}(5 \cdot 0.08)
$$

:::

**Propriedades da [distribuição de Poisson](color:purple)**:

- A distribuição de Poisson pode ser aproximada pela binomial, se considerarmos o acontecimento do evento no intervalo em que é impossível o evento acontecer duas vezes como uma prova de Bernoulli. Desta forma, temos que
  $$
  X \sim \op{Poisson}(\lambda) \Leftrightarrow X \sim \lim_{n \to \infty} \op{binomial}\left(n, \frac{\lambda}{n} \right)
  $$

## Distribuição de Bernoulli

:::tip[Motivação]

Este tipo de distribuição é usado para modular situações em que apenas há dois resultados possíveis.

:::

Dizemos que uma VA discreta $X$ tem uma [**distribuição de Bernoulli**](color:blue) e representamos $X~\sim~\op{Bernoulli}(p)$ se, dados os **parâmetros**:

- $p = P(\op{Sucesso})$, $p \in [0,1]$

satisfizer:

**Contradomínio**: $\{ 0, 1 \}$  
**Função de Probabilidade**

$$
P(X = x) =
\begin{cases}
p, &x=1 \\
1-p, &x=0 \\
0, &x \notin \{0,1\}
\end{cases}
\Leftrightarrow
\begin{cases}
p^x(1-p)^{1-x}, &x \in \{0,1\} \\
0, &x \notin \{0,1\}
\end{cases}
$$

Uma VA $X$ com [distribuição de Bernoulli](color:blue) discreta tem:

**Valor Esperado**: $E(X) = p$  
**Variância**: $V(X) = p(1-p)$

:::details[Exemplo]

O lançamento de uma moeda ao ar é um exemplo de uma prova de Bernoulli com $p = 0.5$.
Se $X$ for uma VA que mede se o lançamento da moeda ao ar dá "coroa" (vamos tomar isto como o nosso sucesso), dizemos que

$$
X~\sim~\op{Bernoulli}(0.5)
$$

A função de probabilidade desta VA é

$$
P(X = x) =
\begin{cases}
0.5, &x \in \{0,1\} \\
0, &x \notin \{0,1\}
\end{cases}
$$

e o seu valor esperado e variância são

$$
E(X) = 0.5 \quad \quad V(X) = 0.5 \cdot 0.5 = 0.25
$$

:::

## Distribuição Hipergeométrica

:::danger[]

Esta distribuição não faz parte da matéria lecionada no programa de 2021/22.

:::

:::tip[Motivação]

Tal como a distribuição binomial, esta distribuição tem a ver com o número de sucessos em $n$ provas de Bernoulli. No entanto, desta vez, as provas não são independentes entre si e podem ser pensadas como seguindo um processo de extração sem repetição.

:::

Dizemos que uma VA discreta $X$ tem uma [**distribuição hipergeométrica**](color:red) e representamos $X~\sim~\op{hipergeométrica}(N, M, n)$ se, dados os **parâmetros**:

- $N$: tamanho da população ($n \in \Z^+$);
- $M$: tamanho da população sucesso ($m \in \Z^+$);
- $n$: número de provas de Bernoulli executadas ($n \in \Z^+, n \leq L$)

satisfizer:

**Contradomínio**: $\{ \op{max}(0, n - (N-M)), \cdots , \op{min}(n, M) \} = D$  
**Função de Probabilidade**

$$
P(X = x) =
\begin{cases}
\frac{{M \choose x}{N-M \choose n-x}}{{N \choose n}}, &x \in D
0, &x \notin D
\end{cases}
$$

Uma VA $X$ com [distribuição hipergeométrica](color:red) tem:

- **Valor Esperado**:
  $$
  E(X) = n\frac{M}{N}
  $$
- **Variância**:
  $$
  V(X) = n\frac{M}{N} \left( 1-\frac{M}{N} \right)\frac{N-n}{N-1}
  $$

---
title: Variáveis Aleatórias Discretas
path: /pe/va-discretas
type: content
---

# Variáveis Aleatórias Discretas

```toc

```

## Distribuição Uniforme Discreta

:::tip[]

Esta distribuição é normalmente usada em situações em que todos os eventos são equiprováveis.

:::

Dizemos que uma VA discreta $X$ têm uma [**distribuição uniforme discreta**](color:green) e representamos $X \sim uniforme \, discreta(S)$ se, dados os **parâmetros**:

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

**Valor Esperado**: $E(X) = \frac{1}{n} \sum_{i=1}^n x_i$  
**Variância**: $V(X) = \frac{1}{n} \sum_{i=1}^n x_i^2 - \left( \frac{1}{n} \sum_{i=1}^n x_i \right)^2$

:::details[Exemplo]

:::

## Distribuição de Bernoulli

:::tip[]

Este tipo de distribuição é usado para modular situações em que apenas há dois resultados possíveis.

:::

:::tip[Prova de Bernoulli]

Damos o nome de **prova de Bernoulli** a qualquer experiência aleatória cujo espaço de resultados tem apenas dois eventos elementares: um evento a que damos o nome de **sucesso**, com probabilidade $p$, e um a que damos nome de **insucesso**, com probabilidade $1-p$.

:::

:::warning[Sucesso pode ser mau!]

Enquanto que estamos habituados a associar sucesso a coisas boas e insucesso a coisas más, neste caso, o sucesso deve ser entendido apenas como **aquilo que queremos modelar**.  
Sendo assim, por exemplo, se considerarmos a EA que verifica se o ecrã de um telemóvel se parte no primeiro ano de uso, o sucesso será "o ecrã partiu-se".  
Claro que dada uma Prova de Bernoulli $A$, podemos sempre considerar a experiência aleatória contrária $B$, e, nesse caso, o sucesso de $B$ será o insucesso de $A$ e vice-versa.
Podemos aproveitar-nos disto à vontade desde que tenhamos em atenção que o sucesso da prova de Bernoulli e o que queremos medir com a VA sejam coerentes.

:::

Dizemos que uma VA discreta $X$ têm uma [**distribuição de Bernoulli**](color:blue) e representamos $X \sim Bernoulli(p)$ se, dados os **parâmetros**:

- $p = P(Sucesso)$, $p \in [0,1]$

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
X \sim Bernoulli(0.5)
$$

:::

## Distribuição Binomial

:::tip[]

Esta distribuição é usada para, dada uma prova de Bernoulli que é executada $n$ vezes (independentemente), medir a probabilidade de haver exatamente $x$ sucessos.

:::

Dizemos que uma VA discreta $X$ têm uma [**distribuição binomial**](color:yellow) e representamos $X \sim binomial(n,p)$ se, dados os **parâmetros**:

- $n$: número de provas de Bernoulli executadas ($n \in \N$);
- $p$: probabilidade de sucesso da prova de Bernoulli ($p \in [0,1]$).

satisfizer:

**Contradomínio**: $\{0,1,2,\cdots,n\}$  
**Função de Probabilidade**

$$
P(X = x) =
\begin{cases}
{n \choose x} p^x(1-p)^{1-x}, &x \in \{0,1,\cdots,n\} \\
0, &x \notin \{0,1,\cdots,n\}
\end{cases}
$$

Uma VA $X$ com [distribuição binomial](color:yellow) tem:

**Valor Esperado**: $E(X) = np$  
**Variância**: $V(X) = np(1-p)$

:::details[Exemplo]

:::

**Propriedades da [distribuição binomial](color:yellow)**:

- A distribuição binomial **não tem uma função de distribuição** que possa ser escrita em forma fechada (isto é, sem um somatório);
- Se $X \sim binomial(n,p)$ e $Y$ for a VA que mede o número de insucessos associados a $X$, isto é
  $$
  Y = n-X \sim binomial(n, 1-p)
  $$
  temos que
  $$
  F_Y(y) = 1 - F_X(n-y-1)
  $$

## Distribuição Geométrica

:::tip[]

Esta distribuição é usada para, dada uma prova de Bernoulli, medir a probabilidade de o primeiro sucesso ocorrer ao fim de exatamente $x$ tentativas.

:::

Dizemos que uma VA discreta $X$ têm uma [**distribuição geométrica**](color:orange) e representamos $X \sim geométrica(p)$ se, dados os **parâmetros**:

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
- **Propriedade da Falta de Memória**: Dada uma VA com distribuição geométrica $X$, temos que, $\forall_{k, x \in \Z^+}$:
  $$
  P(X > k+x | X > k) = P(X > x)
  $$
  Por outras palavras, a VA $Y = X-k | X>k$ é tal que
  $$
  Y \sim geométrica(p)
  $$

## Distribuição Hipergeométrica

:::tip[]

Tal como a distribuição binomial, esta distribuição tem a ver com o número de sucessos em $n$ provas de Bernoulli. No entanto, desta vez, as provas não são independentes entre si e podem ser pensadas como seguindo um processo de extração sem repetição.

:::

Dizemos que uma VA discreta $X$ têm uma [**distribuição hipergeométrica**](color:red) e representamos $X \sim hipergeométrica(N, M, n)$ se, dados os **parâmetros**:

- $N$: tamanho da população ($n \in \Z^+$);
- $M$: tamanho da população sucesso ($m \in \Z^+$);
- $n$: número de provas de Bernoulli executadas ($n \in \Z^+, n \leq L$)

satisfizer:

**Contradomínio**: $\{ max(0, n - (N-M)), \cdots , min(n, M) \} = D$  
**Função de Probabilidade**

$$
P(X = x) =
\begin{cases}
\frac{{M \choose x}{N-M \choose n-x}}{{N \choose n}}, &x \in D
0, &x \notin D
\end{cases}
$$

Uma VA $X$ com [distribuição hipergeométrica](color:red) tem:

**Valor Esperado**: $E(X) = n\frac{M}{N}$  
**Variância**: $V(X) = n\frac{M}{N} \left( 1-\frac{M}{N} \right)\frac{N-n}{N-1}$

:::details[Exemplo]

:::

## Distribuição de Poisson

:::tip[]

A [distribuição de Poisson](color:purple) mede o número de ocorrência de uma EA num dado intervalo.  
Para que isto seja possível é necessário assumirmos que:

- existe um intervalo pequeno suficiente tal que podemos considerar que é impossível o evento acontecer duas vezes nesse intervalo;
- a ocorrência do evento num intervalo é independente da ocorrência noutros intervalos, bem de como qual é o intervalo em questão.

:::

Dizemos então que uma VA discreta $X$ têm uma [**distribuição de Poisson**](color:purple) e representamos $X \sim Poisson(\lambda)$ se, dados os **parâmetros**:

- $\lambda$: valor esperado de ocorrências do evento num intervalo base ($\lambda \in \R^+$)

satisfizer:

**Contradomínio**: $\Z_0^+$  
**Função de Probabilidade**

$$
P(X = x) =
\begin{cases}
e^{-\lambda}\frac{\lambda^x}{x!}, &x \in \Z_0^+ \\
0, &x \notin \Z_0^+
\end{cases}
$$

Uma VA $X$ com [distribuição de Poisson](color:purple) tem:

**Valor Esperado**: $E(X) = \lambda$  
**Variância**: $V(X) = \lambda$

:::details[Exemplo]

:::

**Propriedades da [distribuição de Poisson](color:purple)**:

- A distribuição de Poisson pode ser aproximada pela binomial, se considerarmos o acontecimento do evento no intervalo em que é impossível o evento acontecer duas vezes como uma prova de Bernoulli. Desta forma, temos que
  $$
  X \sim Poisson(\lambda) \Leftrightarrow X \sim \lim_{n \to \infty} binomial\left(n, \frac{\lambda}{n} \right)
  $$

---
title: Variáveis Aleatórias Contínuas
description: >-
  Variáveis Aleatórias Contínuas:
  Distribuição Uniforme Contínua, Normal e Exponencial.
path: /pe/va-continuas
type: content
---

# Variáveis Aleatórias Contínuas

```toc

```

## Distribuição Uniforme Contínua

:::tip[]

Esta distribuição é normalmente usada em situações em que há um intervalo de possíveis resultados de um evento equiprováveis.

:::

Dizemos que uma VA contínua $X$ tem uma [**distribuição uniforme contínua**](color:green) e representamos $X~\sim~\op{uniforme \, contínua}(a,b)$ se, dados os **parâmetros**:

- $a,b$: limites do intervalo ($a,b \in \R$)

satisfizer:

**Contradomínio**: $[a,b]$  
**Função de Probabilidade**

$$
P(X = x) =
\begin{cases}
\frac{1}{b-a}, &x \in [a,b] \\
0, &x \notin [a,b]
\end{cases}
$$

Uma VA $X$ com [distribuição uniforme contínua](color:green) tem:

**Valor Esperado**: $E(X) = \frac{a+b}{2}$  
**Variância**: $V(X) = \frac{(b-a)^2}{12}$

:::details[Exemplo]

O Humberto trabalha na RNL.
O Humberto tem um turno definido entre as 10h e as 12h.
Como o Humberto tem problemas com alarmes, a hora a que ele chega ao trabalho é uniformemente distribuída pelo turno todo.
Sendo assim, temos que

$$
X~\sim~\text{uniformemente contínua}(10, 12)
$$

A função de probabilidade desta VA é

$$
P(X = x) =
\begin{cases}
\frac{1}{2}, &x \in [10, 12] \\
0, &x \notin [10, 12]
\end{cases}
$$

e o seu valor esperado e variância são:

$$
E(X) = \frac{10+12}{2} = 11 \quad \quad
V(X) = \frac{(12-10)^2}{12} = \frac{1}{3}
$$

:::

**Propriedades da [distribuição uniforme contínua](color:green)**:

- Uma VA $X$ com distribuição uniforme contínua tem função de distribuição dada por
  $$
  F_X(x) =
  \begin{cases}
  0, &x < a \\
  \frac{x-a}{b-a}, &x \in [a,b] \\
  1, &x > b
  \end{cases}
  $$
- Dois intervalos com a mesma amplitude têm a mesma probabilidade de acontecer. Isto é, para $\Delta \in \R^+$ e $c, d \in [a, b-\Delta]$ temos que:
  $$
  P(c \leq x \leq c+\Delta) = P(d \leq x \leq d+\Delta) = \frac{\Delta}{b-a}
  $$

## Distribuição Exponencial

:::tip[]

Esta distribuição é normalmente usada para atribuir uma probabilidade ao tempo que um evento demora a acontecer.

:::

Dizemos que uma VA contínua $X$ tem uma [**distribuição exponencial**](color:orange) e representamos $X~\sim~\op{exponencial}(\lambda)$ se, dados os **parâmetros**:

- $\lambda \in \R_0^+$: valor esperado do tempo até o evento acontecer

satisfizer:

**Contradomínio**: $\R_0^+$  
**Função de Probabilidade**

$$
P(X = x) =
\begin{cases}
\lambda e^{-\lambda x}, &x \geq 0 \\
0, &x < 0
\end{cases}
$$

Uma VA $X$ com [distribuição exponencial](color:orange) tem:

**Valor Esperado**: $E(X) = \frac{1}{\lambda}$  
**Variância**: $V(X) = \frac{1}{\lambda^2}$

:::details[Exemplo]

Lançamos um dado ao ar.
Considere-se a VA $X$ que mede o tempo, em segundos, que o dado demora a cair sobre a superfície da mesa.
Assuma-se que o valor esperado desta medição é de 2 segundos.
Então:

$$
X~\sim~\text{exponencial}(2)
$$

A função de probabilidade desta VA é

$$
P(X = x) =
\begin{cases}
2e^{-2x}, &x \geq 0 \\
0, x < 0
\end{cases}
$$

e o seu valor esperado e variância são

$$
E(X) = \frac{1}{2} \quad \quad
V(X) = \frac{1}{2^2} = \frac{1}{4}
$$

:::

**Propriedades da [distribuição exponencial](color:orange)**:

- A distribuição exponencial tem função de distribuição dada por
  $$
  F_X(x) =
  \begin{cases}
  0, &x < 0 \\
  1-e^{-\lambda x}, &x \geq 0
  \end{cases}
  $$
- **Propriedade da Falta de Memória**: Dada uma VA com distribuição exponencial $X$, temos que, $\forall_{k, x \in \Z^+}$:
  $$
  P(X > k+x | X > k) = P(X > x)
  $$
  Por outras palavras, a VA $Y = X-k | X>k$ é tal que
  $$
  Y \sim \op{exponencial}(p)
  $$
- **Processo de Poisson**: Damos o nome de Processo de Poisson a uma coleção de VA's $\{ N_t: t \in \R^+ \}$ que registam o número de ocorrências de um certo evento no intervalo $]0,1]$ tal que:
  - O número de ocorrências em intervalos disjuntos são VA independentes;
  - O número de ocorrências em intervalos de amplitude igual satisfazem a mesma distribuição;
  - $N_t \sim \op{Poisson}(\lambda t)$
    Podemos então concluir que a VA $X_t$ que determina o tempo entre duas ocorrências do evento satisfaz
    $$
    X_t \sim \op{exponencial}(\lambda)
    $$

:::warning[]

Esta última propriedade também aparece muito raramente em exercícios, sendo pouco provável que apareça em alguma avaliação que não oral.

:::

## Distribuição Normal

:::tip[]

Esta distribuição é usada para... tipo quase tudo.

:::

Dizemos que uma VA contínua $X$ tem uma [**distribuição normal**](color:yellow) e representamos $X~\sim~\op{normal}(\mu,\sigma^2)$ se, dados os **parâmetros**:

- $\mu = E(X) \in \R$
- $\sigma^2 = V(X) \in \R_0^+$

satisfizer:

**Contradomínio**: $\R$  
**Função de Probabilidade**

$$
P(X = x) = \frac{1}{\sqrt{2\pi} \sigma} e^{-\frac{(x-\mu)^2}{2 \sigma^2}}
$$

Uma VA $X$ com [distribuição normal](color:yellow) tem:

**Valor Esperado**: $E(X) = \mu$  
**Variância**: $V(X) = \sigma^2$

:::details[Exemplo]

Considere-se a VA $X$ que regista a altura de um português aleatório.
Assumindo que a altura dos portugueses satisfaz uma distribuição normal com valor esperado 1.75m e variância 30cm temos que:

$$
X~\sim~\text{normal}(1.75, 0.3)
$$

A função de probabilidade desta VA é

$$
P(X = x) =
\frac{1}{\sqrt{0.6\pi}} e^{-\frac{(x-1.75)^2}{0.6}}, \quad x \in \R
$$

e o seu valor esperado e variância são 1.75m e 0.3m.

:::

**Propriedades da [distribuição normal](color:yellow)**:

- O integral $\int_{-\infty}^x \frac{1}{\sqrt{2\pi} \sigma} e^{-\frac{(t-\mu)^2}{2 \sigma^2}} \, dt$ não tem forma fechada, pelo que a distribuição normal **não tem uma função de distribuição** que possa ser escrita em forma fechada. Sendo assim, os valores desta função têm de ser obtidos por consulta de tabelas. Esta consulta é facilitada pela próxima propriedade;
- $X \sim \op{normal}(\mu, \sigma^2) \Leftrightarrow aX+b \sim \op{normal}(aX + b, a^2 \sigma^2)$  
  Consequentemente, $X \sim \op{normal}(\mu, \sigma^2) \Leftrightarrow \frac{X-\mu}{\sigma} \sim \op{normal}(0,1)$.  
  Desta forma, para qualquer VA $X$ com distribuição normal, é sempre possível fazer uma transformação linear de forma a obter uma VA com distribuição normal centrada em $0$ e com variância $1$.
  À distribuição normal centrada em $0$ com variância $1$ dá-se o nome de **distribuição normal padrão**. A sua função de distribuição representa-se por $\Phi(x)$ e é dada por
  $$
  \Phi(x) = \int_{-\infty}^x \frac{1}{\sqrt{2\pi}} e^{-\frac{t^2}{2}} \, dt
  $$
- A distribuição normal padrão satisfaz $\Phi(x) + \Phi(-x) = 1, \forall_{x \in \R}$, pelo que as tabelas estatísticas só precisam de ter os valores desta função para $x$ positivo.

:::details[Como obter $F_X(x)$ através da tabela]

Para uma distribuição $X \sim \op{normal}(23,{0.1}^{2})$ queremos saber o valor de $P(X \leq 23.045)$.

Sabendo que $X \sim \op{normal}(\mu, \sigma^2) \Leftrightarrow Z = \frac{X-\mu}{\sigma} \sim \op{normal}(0,1)$ e que os valores da função

$$
\Phi(x) = P(Z \leq x) = \int_{-\infty}^x \frac{1}{\sqrt{2\pi}} e^{-\frac{t^2}{2}} \, dt
$$

podem ser consultados numa tabela estatística, temos então uma forma de calcular a probabilidade pretendida.

Temos que $P(X \leq 23.045) = P (\frac{X - 23}{{0.1}} \equiv \frac{X-\mu}{\sigma}  \leq \frac{23.045 - 23}{{0.1}}) = \Phi(0.45)$

Indo ver à tabela, concluímos que $\Phi(0.45) = 0.6736$, pelo que $P(X \leq 23.045) = 0.6736$.

![table](./assets/0004-table.png#dark=1)

Observe-se que a tabela não permite consultar a função $\Phi$ em valores negativos.
Nesse caso, basta aproveitarmo-nos do facto que $\Phi(-x) = 1 - \Phi(x)$ e depois consultar a tabela.

Por exemplo, temos que $\Phi(-0.45) = 1-\Phi(0.45) = 0.3264$.

:::

---
title: Variáveis Aleatórias Contínuas
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

Dizemos que uma VA discreta $X$ têm uma [**distribuição uniforme contínua**](color:green) e representamos $X \sim uniforme \, contínua(a,b)$ se, dados os **parâmetros**:

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
- Dois intervalos com a mesma amplitude têm a mesmpa probabilidade de acontecer. Isto é, para $\Delta \in \R^+$ e $c, d \in [a, b-\Delta]$ temos que:
  $$
  P(c \leq x \leq c+\Delta) = P(d \leq x \leq d+\Delta) = \frac{\Delta}{b-a}
  $$

## Distribuição Normal

:::tip[]

Esta distribuição é usada para... tipo quase tudo.

:::

Dizemos que uma VA discreta $X$ têm uma [**distribuição normal**](color:yellow) e representamos $X \sim normal(\mu,\sigma^2)$ se, dados os **parâmetros**:

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

:::

**Propriedades da [distribuição normal](color:yellow)**:

- O integral $\int_{-\infty}^x \frac{1}{\sqrt{2\pi} \sigma} e^{-\frac{(t-\mu)^2}{2 \sigma^2}} \, dt$ não tem forma fechada pelo que a distribuição normal **não tem uma função de distribuição** que possa ser escrita em forma fechada. Sendo assim, os valores desta função têm de ser obtidos por consulta de tabelas. Esta consulta é facilitada pela próxima propriedade;
- $X \sim normal(\mu, \sigma^2) \Leftrightarrow aX+b \sim normal(aX + b, a^2 \sigma^2)$  
  Consequentemente, $X \sim normal(\mu, \sigma^2) \Leftrightarrow \frac{X-\mu}{\sigma} \sim normal(0,1)$.  
  Desta forma, para qualquer VA $X$ com distribuição normal, é sempre possível fazer uma transformação linear de forma a obter uma VA com distribuição normal centrada em $0$ e com variância $1$.
  À distribuição normal centrada em $0$ com variância $1$ dá-se o nome de **distribuição normal padrão**. A sua função de distribuição representa-se por $\Phi(x)$ e é dada por
  $$
  \Phi(x) = \int_{-\infty}^x \frac{1}{\sqrt{2\pi}} e^{-\frac{t^2}{2}} \, dt
  $$
- A distribuição normal padrão satisfaz $\Phi(x) + \Phi(-x) = 1, \forall_{x \in \R}$, pelo que as tabelas estatísticas só precisam de ter os valores desta função para $x$ positivo.

:::details[Como obter $F_X(x)$ através da tabela]

- fazer TL
- se for negativo, cenas
- obter valor que queremos

:::

## Distribuição Exponencial

:::tip[]

Esta distribuição é normalmente usada para atribuir uma probabilidade ao tempo que um evento demora a acontecer.

:::

Dizemos que uma VA discreta $X$ têm uma [**distribuição exponencial**](color:orange) e representamos $X \sim exponencial(\lambda)$ se, dados os **parâmetros**:

- $\lambda \in \R_0^+$: valor esperado do tempo até o evento acontecer

satisfizer:

**Contradomínio**: $\R_0^+$  
**Função de Probabilidade**

$$
P(X = x) =
\begin{cases}
\lambda e^{-\lambda x}, &x \leq 0 \\
0, &x < 0
\end{cases}
$$

Uma VA $X$ com [distribuição exponencial](color:orange) tem:

**Valor Esperado**: $E(X) = \frac{1}{\lambda}$  
**Variância**: $V(X) = \frac{1}{\lambda^2}$

:::details[Exemplo]

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
  Y \sim exponencial(p)
  $$
- **Processo de Poisson**: Damos o nome de Processo de Poisson a uma coleçao de VA's $\{ N_t: t \in \R^+ \}$ que registam o número de ocorrências de um certo evento no intervalo $]0,1]$ tal que:
  - O número de ocorrências em intervalos disjuntos são VA independentes;
  - O número de ocorrências em intervalos de amplitude igual satisfazem a mesma distribuição;
  - $N_t \sim Poisson(\lambda t)$
    Podemos então concluir que a VA $X_t$ que determina o tempo entre duas ocorrências do evento satisfaz
    $$
    X_t \sim exponencial(\lambda)
    $$

:::warning[]

Esta última propriedade também aparece muito raramente em exercícios, sendo pouco provável que apareça em alguma avaliação que não oral.

:::

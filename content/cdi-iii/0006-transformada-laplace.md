---
title: Transformada de Laplace
description: >-
  Transformada de Laplace.
path: /cdi-iii/transformada-laplace
type: content
---

# Transformada de Laplace

```toc

```

## Definição de Transformada de Laplace

:::warning
Esta primeira parte não é particularmente útil para a maioria dos exercícios, mas pode dar jeito
para deduzir algumas expressões não frequementemente utilizadas e em exercícios mais complicados.
:::

Seja $f: [0, +\infty] \to \R$. Define-se a [**Transformada de Laplace**](color:green) de $f$ como sendo a função de variável complexa

$$
\lapt{f} (s) = F(s) = \int_{0}^{+\infty} f(t) e^{-st} \d t
$$

### Domínio da Transformada de Laplace

Se a função $f$ for seccionalmente contínua em qualquer $[0, T]$ com $T \in \R^+$ e verificar

$$
|f(t)| \leq M e^{\alpha t} \quad,\quad \forall t \geq 0
$$

para certas contanstes $M >0$ e $\alpha \in \R$, então a transformada de Laplace de $f$ está
bem definida no semi-plano complexo $\operatorname{Re} s > \alpha$.

:::details[Demonstração]

Para qualquer $t > 0 $ e $s \in \C$ tal que $\operatorname{Re} s > \alpha \Leftrightarrow \alpha - \operatorname{Re} s < 0$:

$$
\left|e^{-st} f(t) \right| = \left| e^{(-\operatorname{Re} s)t}\right| \left| e^{-i(\operatorname{Im} s)t} \right| \left| f(t) \right | \leq e^{(-\operatorname{Re} s) t} M e^{\alpha t} = M e^{(\alpha - \operatorname{Re}s)t}
$$

Então, para $\operatorname{Re} s > \alpha$:

$$
\left| \int_{0}^{+\infty} e^{-st} f(t) \d t \right| \leq \int_{0}^{+\infty} M e^{(\alpha - \operatorname{Re}s)t} \d t =
M \lim_{R \to +\infty} \frac{e^{(\alpha -\operatorname{Re}s)t}}{\alpha-\operatorname{Re}s} \bigg|^R_0 = \frac{M}{\operatorname{Re}s-\alpha}
$$

:::

:::info{Exemplo}

Sendo $f(t) = e^{at}, a \in \R$, (ou $a \in \C$) tem-se que

$$
\lapt{e^{at}} (s) = \int_{0}^{+\infty} e^{at} e^{-st} \d t = \lim_{R \to +\infty} \frac{e^{(a-s)t}}{a-s} \bigg |^R_{t=0} = \frac{1}{s-a}, \quad \operatorname{Re} s > a
$$

Como caso particular

$$
\lapt{1}(s) = \lapt{e^{0t}} (s) = \frac{1}{s} , \operatorname{Re}s > 0
$$

:::

### Função de Heaviside

Tal como já tínhamos [visto em CDI-I](/cdi-i/continuidade-limites#função-heaviside), a **função Heaviside** (centrada em $c$) é definida por:

$$
H_c(t) = \begin{cases}
0 & \text{se} & t < c\\
1 & \text{se} & t \geq c
\end{cases}
$$

:::info[Exemplo]

**Transformada de Laplace da função de Heaviside**

Se $c \geq 0$

$$
\lapt{H_c(t)}(s) = \int_{0}^{+\infty} H(t-c)e^{-ts} \d t = \int_{c}^{+\infty} e^{-ts} \d t = \lim_{N\to +\infty} -\frac{e^{-ts}}{s} \bigg|^N_c = \frac{e^{-cs}}{s}, \operatorname{Re} s > 0
$$

:::

## Propriedades Elementares da Transformada de Laplace

- **Linearidade**

  $$
  \lapt{f+g} (s) = \lapt{f} (s) + \lapt{g}(s)
  $$

  e para $\alpha \in \R$

  $$
  \lapt{\alpha f}(s) = \alpha \lapt{f}(s)
  $$

  Consequentemente, para $\alpha,\beta \in \R$:

  $$
  \lapt{\alpha f + \beta g}(s) = \alpha \lapt{f}(s) + \beta \lapt{g}(s)
  $$

- **Translação da Transformada de Laplace**

  Para $a \in \R$,

  $$
  \lapt{e^{-at} f(t)} (s) = \lapt{f(t) } (s+a)
  $$

- **Derivada da Transformada de Laplace**

  Para $n \in \N$,

  $$
  \frac{\d^n}{\d s^n} \left(\lapt{f(t)} (s) \right) = (-1)^n \lapt{t^n f(t)}(s)
  $$

- **Transformada de Laplace da Translação**

  Para $c \in \R^+$,

  $$
  \lapt{H(t-c) f(t-c)}(s ) = e^{-cs} \lapt{f(t)} (s)
  $$

- **Transformada de Laplace da Derivada**

  Se $f$ admite derivada seccionalmente contínua em $[0, +\infty[$ e $\operatorname{Re} s > 0$ então,

  $$
  \lapt{f'(t)}(s) = - f(0) + s\lapt{f(t)}(s)
  $$

  E para uma derivada de ordem $n$,

  $$
  \lapt{f^{(n)}(t)}(s) = -f^{(n-1)}(0) - sf^{(n-2)}(0) - \dots - s^{n-1} f(0) + s^n \lapt{f(t)}(s)
  $$

## Transformada de Laplace de Funções Comuns

Através da definição e propriedades, é possível as Transformadas de Laplace de várias funções comuns.

Uma tabela pode ser encontrada na [Cheat Sheet](/cdi-iii/cheatsheet/laplace-cheat).

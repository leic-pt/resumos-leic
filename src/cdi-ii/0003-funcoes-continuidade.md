---
description: Sucessões, Funções, Continuidade e Limites em Rⁿ
---

# Funções e Continuidade em Rⁿ

[[toc]]

## Sucessões em Rⁿ

Uma sucessão $(u_k)$ de termos em $\R^n$ é uma função

$$
\begin{array}{ c c c }
u: & \mathbb{N} \longrightarrow \mathbb{R}^{n} & \\
 & n\longrightarrow u_{k} & =\underbrace{( u_{k1} ,u_{k2} ,\dotsc ,u_{kn})}_{n\text{ coordenadas}}
\end{array}
$$

::: tip EXEMPLO
Se tivermos uma sucessão de termos em $\R^3$, $u_k = (\frac 1k, k, 2^k) \in \R^3$,
as suas **sucessões coordenadas** vão ser:

$$
u_{k1}=\frac 1k\quad,\quad u_{k2}=k\quad, \quad u_{k3} = 2^k
$$

:::

### Convergência de sucessões em Rⁿ

::: tip DEFINIÇÃO

Diz-se que uma sucessão $(u_k) \subset \R^n$ converge para $a\in\R^n$ se, por definição,

$$
\forall r > 0, \exists N \in \N: k > N => || u_k - a || < r\\
\text{ou}\\
\forall r > 0, \exists N \in \N: k > N => u_k \in B_r(a)
$$

:::

Podemos usar a seguinte notação para indicar a convergência de uma sucessão:

$$
u_{k} \longrightarrow a\quad \text{ou} \quad u_{k}\underset{k\rightarrow \infty }{\longrightarrow } a\quad \text{ou} \quad \lim u_{k} =a\quad \text{ou} \quad \lim_{k\rightarrow \infty } u_{k} =a
$$

Mais simplesmente, podemos dizer que uma sucessão converge para $a$ se $\lim ||u_k - a|| = 0$.

Para calcular este limite, devemos calcular individualmente para cada coordenada, e verificar a sua convergência.

$$
\underset{\text{em } \R^n}{u_k \to a} \Leftrightarrow \underset{\text{em }\R}{u_{ki} \to a_i} \text{ para cada } i=1,2,\dotsc, n
$$

::: details Exemplos

1. $\displaystyle u_k = \left(\frac 1k, e^{-k}\right)$

   $$
   u_{k1} = \frac 1k \to 0 \quad, \quad u_{k2} = e^{-k} \to 0
   $$

   donde $\lim u_k = (0,0)$.

---

2. $\displaystyle u_k = \left(\frac 1k, 2^k\right)$

   Não é convergente pois $2^k \to \infty$

---

3. $\displaystyle u_k = \left(\frac{k-1}{k}, 0, \frac 1 {3^k}\right)$

   $$
   \begin{array}{ l }
   u_{k1} =\frac{k-1}{k} =\frac{1-\frac{1}{k}}{1}\rightarrow 1\\
   u_{k2} =0\rightarrow 0\\
   u_{k3} =\frac{1}{3^{k}}\rightarrow \frac{1}{+\infty } =0\\
   \end{array}
   $$

   donde $\lim u_k = (1,0,0)$.

:::

::: tip TEOREMA
Se $D\subset \R^n$ é [fechado](./0002-norma-topologia.md#conjunto-aberto-fechado-limitado-e-compacto)
(ou seja, $D = \overline D$), então qualquer sucessão de termos em $D$ ($(u_k)\subset D$)
e convergente, tem o seu limite em $D$.
:::

## Continuidade

Esta é outra das relações que naturalmente migra para $\R^n$, sem muitas alterações.

::: tip DEFINIÇÃO

Seja $f: D \subseteq \R^n -> \R^m$, $f$ é contínua em $a$ se e só se

$$
\forall r>0, \exists \epsilon > 0: x\in B_\epsilon (a) \implies f(x) \in B_r(f(a))\\
\text{ou seja} \\
\forall r>0, \exists \epsilon > 0: || x - a|| < \epsilon \implies || f(x) - f(a) || < r
$$

:::

::: tip TEOREMA

Se uma função $f: D \subset \R^n \to \R^m$ é contínua em $a\in D$, então
qualquer sucessão $(u_k)\subset D$ com $u_k \to a$ implica que $f(u_k) \to f(a)$.

:::

Para provarmos uma maneira mais simples de estudar a continuidade de uma função em $\R^n$ num ponto,
necessitamos de definir limite em $\R^n$.

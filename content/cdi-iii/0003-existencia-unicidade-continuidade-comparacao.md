---
title: Existência, Unicidade, Continuidade e Comparação
description: >-
  Teorema de Peano.
  Função Lipschitziana.
  Teorema de Picard-Lindelöf.
  Iteradas de Picard.
  Lema de Grönwall.
path: /cdi-iii/existencia-unicidade-continuidade-comparacao
type: content
---

# Existência, Unicidade, Continuidade e Comparação

```toc

```

## Teorema de Peano

Este teorema ajuda-nos a dizer que existe uma solução local, exigindo apenas a continuidade de $f(t,y)$.

:::tip[Teorema]

Considere-se $D \subseteq \R^2$ aberto, e $f: D \to \R$, contínua em $(t,y) \in D$. Se $(t_0, y_0) \in D$, o problema de valor inicial

$$
\begin{cases}
y' = f(t, y)\\
y(t_0) = y_0
\end{cases}
$$

admite **pelo menos uma solução** numa vizinhança de $t_0$.

:::

## Função Lipschitz

:::tip[Definição]

Seja uma função $f: D \subset \R \times \R^n \to \R^n$.
Diz-se que $f$ é Lipschitz em relação a $y$ se e só se existe um $L$ tal que

$$
|f(y_1) - f(y_2) | \leq L |y_1 - y_2|
$$

em que se diz que $L$ é a constante de Lipschitz.

:::

Por exemplo, se tivermos a função $f(y) = |y|$, temos a seguinte expressão (pela diferença de quadrados):

$$
\begin{darray}{ccc}
\Big| |y_1| - |y_2| \Big| \leq |y_1 - y_2|
& , & L = 1
\end{darray}
$$

Podemos também dizer que uma função é **localmente de Lipschitz** se,
$\forall (t_0,y_0) \in D$, então existe uma vizinhança $B_\epsilon (t_0,y_0)$, tal que,

$$
\exists L> 0 : \forall (t,y_1),(t,y_2) \in B_\epsilon (t_0, y_0)
$$

e

$$
f(y_1) - f(y_2) | \leq L |y_1 - y_2|
$$

Outra definição mais simples para **localmente Lipschitziana**, embora mais difícil de provar, é
considerando um $k$ compacto, tal que $\forall k \subset D$, então

$$
\exists L > 0: \forall (t, y_1), (t, y_2) \in k \implies \left|f(y_1) - f(y_2) \right| \leq L |y_1 - y_2|
$$

:::details[Exemplos]

**Considerando $f(t, y) = | y - \sqrt(t) |$, verifique se a função é Lipschitziana.**

$$
\begin{aligned}
| f(t, y_1) - f(t, y_2) | = \Big||y_1-\sqrt{t} | - |y_2 - \sqrt{t}|\Big| \leq |y_1 - \sqrt{t} - (y_2 - \sqrt{t})| = |y_1 - y_2|
\end{aligned}
$$

(pelo que $L = 1$)

Logo, $f$ é Lipschitz em relação a $y$ em $\R^2$.

---

**Considerando $f(t,y) = \sqrt{|y|} - \sqrt{|t|}$, em que $y_1, y_2 \geq 0$, verifique se a função é Lipschitziana.**

$$
f(t,y_1) - f(t,y_2) = \sqrt{y_1} - \sqrt{y_2} = \frac{(\sqrt{y_1} - \sqrt{y_2}) (\sqrt{y_1} + \sqrt{y_2})}{\sqrt{y_1} + \sqrt{y_2}} = \frac{y_1 - y_2}{\sqrt{y_1} + \sqrt{y_2}}
$$

Se assumirmos, por exemplo, $y_1 = 0$, temos que:

$$
| f(t, 0) - f(t, y_2)| = \frac{1}{\sqrt{y_2}} | 0 - y_2| \leq L |y_1 - y_2| \implies \frac{1}{\sqrt{y_2}} \leq L
$$

Precisaríamos que $\frac{1}{\sqrt{y_2}} \leq L$, o que é impossível porque precisamos de $t_2 \to 0$, visto que pela definição $t_1 - t_2 \to 0$.

Logo, $f(t,y)$ não é localmente Lipschitziana em relação a $y$ em $\R \times \R$.

:::

## Teorema de Picard-Lindelöf

:::tip[Teorema]

Seja $D \subset \R \times \R^n$ um conjunto aberto
$f: D \to \R^n$ e $(t_0, y_0) \in D$
e $f$ contínua em $D$ e $f(t,y)$ localmente Lipschitz em relação a $y$ em $D$.

Então o problema de valor inicial

$$
\begin{darray}{cc}
\frac{\d y}{\d t} = f(t, y) & y(t_0) = y_0
\end{darray}
$$

tem uma única solução $y(t)$ que está definida numa vizinhança de $t_0$.

:::

### Equivalência entre um Problema de Valor Inicial e um Problema Integral

O problema de valor inicial

$$
\begin{cases}
\frac{\d y}{\d t} = f(t,y)\\
y(t_0) = y_0
\end{cases}
$$

é equivalente à equação integral

$$
y(t) = y_0 + \int_{t_0}^{t} f(s,y(s)) \d s
$$

com $y \in C^1 (I)$, sendo $I$ qualquer intervalo aberto contendo $t_0$.

### Iteradas de Picard

A partir da equação integral, podemos definir as **iteradas de Picard**, que é uma sucessão de funções contínuas $y_n: I \to \R$ definida recursivamente por:

$$
\begin{aligned}
y_0(t) &= y_0\\
y_1(t) &= y_0 + \int_{t_0}^{t} f(s,y_0(s)) \d s\\
y_2(t) &= y_0 + \int_{t_0}^{t} f(s,y_1(s)) \d s\\
&\vdots\\
y_{n+1}(t) &= y_0 + \int_{t_0}^{t} f(s,y_n(s)) \d s
\end{aligned}
$$

## Lema de Grönwall

Sejam $u, v: I \to \R$ tais que $u, v \geq 0$, $t_0 \in I$

$\forall t \in I$, $u(t) \leq \alpha + | \int_{t_0}^{t} v(s)u(s) \d s|$

Então

$u(t) \leq \alpha e^{| \int_{t_0}^{t} v(s) \d s|}$

Se $\alpha = 0$ no Lema de Gronwall então $u(t) \equiv 0$.

$$
\begin{darray}{ccc}
\frac{\d y_1}{\d t} = f(t,y_1) &
\frac{\d y_2}{\d t} = f(t,y_2) &
y_1(t_0) = y_2(t_0) = y_0
\end{darray}
$$

$$
y_1(t) = y_0 + \int_{t_0}^{t} f(s,y_1(s)) \d s
$$

$$
y_2(t) = y_0 + \int_{t_0}^{t} f(s,y_2(s)) \d s
$$

$$
||y_1 - y_2|| = || \int_{t_0}^{t} f(s, y_1) - f(s, y_2) \d s || \leq | \int_{t_0}^{t} ||f(s,y_1) - f(s,y_2)|| \d s \leq | \int_{t_1}^{t} L ||y_1 -y_2|| \d s|
$$

$$
\leq | \int_{t_0}^{t} u(s) \d s
$$

HELP, no idea oq isto é suposto ser

---

:::tip[Teorema]

Seja $D \subset \R \times \R^n$ um conjunto aberto e $f: D \to \R^n$ tal que

1. $f$ é contínua em $D$
2. $f(t,y)$ é localmente Lipschitz em relação a $y$

Se $y(t)$ é tal que, para certo intervalo $I$ aberto não vazio,

$$
\begin{darray}{cc}
\frac{\d y}{\d t} = f(t,y) & \forall t \in I
\end{darray}
$$

Então existe um intervalo máximo de definição $]a, b[$
tal que $I \subset ]a,b[$ e $y(t)$ admite um prolongamento com $\frac{\d y}{\d t} = f(t,y)$, $\forall t \in ]a,b[$
e verifica-se uma das seguintes propriedades que caracterizam $b$ (e $a$, respetivamente)

1. $b = + \infty$, $a = -\infty$
2. $y(t)$ não é limitada para $t$ berto de $b$ (... $a$)
3. $\frac{\d y}{\d t}(t)$ não é limitada para $t$ perto de $b$ (... $a$)
4. $\lim_{t\to b} y(t) = \beta$ existe e $(b, \beta) \in \partial D$ ($\lim_{t\to a} y(t) = \alpha$ existe e $(a, \alpha) \in \partial D$)

:::

:::tip[Proposição]

$f: \R \times \R^n \to \R^n$

uma função localmente lip. em $y$ e limitada então para cada $(t_0, y_0) \in \R \times \R^n$
a solução de $\frac{\d y}{\d t} = f(t,y)$, $y(t_0) = y_0$

... intervalo máximo de definição $\R$

TODO HELP

:::

---

:::tip[Teorema]

Sejam $D \subset \R \times \R$ e funções $f,g: D \to \R$ nas condições do Teorema de Picard-Lindelöf.

Suponha-se que

$$
\begin{darray}{cr}
f(t,y) \leq g(t,y) & \forall (t,y) \in D\\
u_0 \leq v_0 & (t_0, u_0) \in D, (t_0, v_0) \in D
\end{darray}
$$

Considere-se $u(t)$ e $v(t)$ soluções dos seguintes PVI:

$$
\begin{cases}
\frac{\d u}{\d t} = f(t,u)\\
u(t_0) = u_0
\end{cases}
$$

e

$$
\begin{cases}
\frac{\d v}{\d t} = g(t,v)\\
v(t_0) = v_0
\end{cases}
$$

definidas no intervalo $[t_0, b[$, com $b > t_0$.

Então,

$$
\forall t \in [t_0, b[, u(t) \leq v(t)
$$

(só para $t > t_0$)

:::

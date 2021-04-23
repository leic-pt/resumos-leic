---
description: MDC. Equações Diofantinas.
---

# M.D.C e Diofantinas (Cheat Sheet)

[[toc]]

## M.D.C

$a \frown b = c$, significa que c é o m.d.c. de a e b

$108x + 75y =\textcolor{pink} 6$

$$
\begin{array}{c|c|c|c}
a_i & q_i & x_i & y_i \\
108 & - & 1 & 0 \\
75 & 1 & 0 & 1 \\
33 & 2 & 1 & -1 \\
9 & 3 & -2 & 3 \\
6 & 1 & 7 & -10 \\
\textcolor{red}3 & 2 & \textcolor{orange}{-9} & \textcolor{yellow}{13} \\
0 & - & - & - \\

\end{array}
$$

$108 \frown 75 = \textcolor{red}3 = 108 * \textcolor{orange}{-9} + 75 * \textcolor{yellow}{13}$

Multiplicar os valores por 2

$108 \frown 75 = \textcolor{pink}6 = 108 * \textcolor{orange}{-18} + 75 * \textcolor{yellow}{26}$

Coeficientes de Bézout: $x_0 = \textcolor{orange}{-18}, y_0 = \textcolor{yellow}{26}$

$$
\left\{ \begin{aligned}
  x = x_0 + \frac b d t\\
  y = y_0 - \frac a d t
\end{aligned} \right.
$$

$$
\left\{ \begin{aligned}
  x = -18 + 25t\\
  y = 26 - 36t
\end{aligned} \right.
$$

- [M.D.C. no WolframAlpha](https://www.wolframalpha.com/input/?i=ExtendedGCD%5B108%2C75%5D)

- [Diafontinas no WolframAplha](https://www.wolframalpha.com/input/?i=solve+108x%2B75y+%3D+6+over+the+integers)

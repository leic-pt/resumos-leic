---
description: MDC. Equações Diofantinas.
---

# M.D.C, Diofantinas e Congruências (Cheat Sheet)

[[toc]]

## M.D.C e Diofantinas

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
  x = x_0 + \frac {b} {a \frown b} t\\
  y = y_0 - \frac a {a \frown b} t
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

## Congruências

$16x {\equiv_{12}}10 = 16x - 12y = 10$ (Resolver por diofantinas para $x$)

- [Congruências no WolframAplha](https://www.wolframalpha.com/input/?i=%2816x+mod+29%29+%3D+27)

::: warning
Obrigatório justificar no teste que existe solução única
:::

Se os módulos forem primos entre si 2 a 2, há sempre solução única

Se não, temos de fazer o MDC de 2 módulos successivos e ver se a diferença dos $r_i$ respetivos, divide o tal MDC calculado.

$$
\begin{cases}
 x {\equiv_{12}}10\\
 x {\equiv_8}2\\
 x {\equiv_5}2
\end{cases}
$$

$m_1 \frown m_2 = 4 a_1 - a_2 = 8$\
8 é divisível por 4\
$m_1 \frown m_3 = 1 a_1 - a_3 = 8$\
8 é divisível por 1\
$m_2 \frown m_3 = 4 a_2 - a_3 = 8$\
0 é divisível por 1

Logo há solução (única).

$$
\left\{ \begin{aligned}
 x \textcolor{orange}{\equiv_5} \textcolor{red}1\\
 x \textcolor{orange}{\equiv_7}\textcolor{red}3\\
 x \textcolor{orange}{\equiv_9} \textcolor{red}5\\
\end{aligned} \right.
$$

$$
\begin{array}{ c|c|c|c|c|c|c }
r_{i} & módulos & c_{i} & n_{i} & ñ_{i} & rn_{i} ñ_{i} & Resultados\\
\hline
\textcolor{red}1 & \textcolor{orange}5 & 5 & 63 & 7 & 441 & M\ =\ 315\\
\textcolor{red}3 & \textcolor{orange}7 & 7 & 45 & 5 & 675 & \\
\textcolor{red}5 & \textcolor{orange}9 & 9 & 57 & 8 & 1400 & x_{0} \ =\ 311
\end{array}
$$

$c_i =$ têm de ser primos entre si

$n_i =$ multiplicação dos elementos da coluna $c_i$ exceto o da própria linha

$ñ_i =$ congruência do $n_i$ pelo $c_i$da própria linha

$M =$ produto dos módulos

$x_0 =$ soma dos $rn_{i} ñ_{i}$ % $M$

Resposta $= x_0 +Mt$

::: warning

No caso de os módulos não serem primos entre si

Temos de achar o m.m.c. deles\
E dispôr nas suas filas respetivas onde o módulo tem de dividir o $c_i$
:::

- [Sistemas de Congruências no WolframAplha](https://www.wolframalpha.com/input/?i=%283+x+%2B+1%29+mod+7+%3D+6%2C+x+mod+9+%3D+2%2C+%28x+-+2%29+mod+4+%3D+1)

![desISTo2](./imgs/1004-q.jpeg)

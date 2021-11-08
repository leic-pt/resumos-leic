revisões aula anterior (que ainda n está feita '-')

Transformada de Laplace

$f: [0, +\infty[ \to \C$

$f$ tem de ser

- seccionalmente contínua
- $\exists M, c > 0 : |f(t)| \leq M e^{ct}$

Então:

$$
\mathcal{L}(f) = F(s) = \int_{0}^{+\infty} f(t)e^{-st} \d t
$$

$\mathcal{L} \{e^{\lambda t} \} = \frac{1}{s- \lambda}$, $\mathcal{L} \{1\} = \frac{1}{s}$

$\mathcal{L} \{\sin(w t)\} = \frac{w}{s^2 + w^2}$, $\mathcal{L} \{\cos(wt) \} = \frac{s}{s^2 + w^2}$

(isto talvez seja um w fancy, idk)

$\mathcal{L} \{e^{\lambda t} \cos t\} = \frac{s-\lambda}{(s-\lambda)^2 + w^2}$

$$
F(s) = \mathcal{L} \{f(t) \} \implies \mathcal{L} \{e^{\lambda t} f(t)\} = F(s-\lambda)
$$

$$
\mathcal{L} \{t^n f(t) \} = (-1)^n \frac{\d^n }{\d s^n} \mathcal{L} \{f(t) \}
$$

$$
\mathcal{L} \{t^n e^{\lambda t} \} = \frac{n!}{(s-\lambda)^{n+1}}
$$

$\mathcal{L} \{t^2\sin(w t)\} = \frac{\d^2}{\d s^2}\frac{w}{s^2 + w^2}$

$$
\mathcal{L} \{t^n \} = \frac{n!}{s^{n+1}}
$$

Função de heaviside

$$
H(t) = \begin{cases}
0 & \text{se } t < 0\\
1 & \text{se } t > 0
\end{cases}
$$

$$
e^{-sc} \mathcal{L} \{f(t)\} = \mathcal{L} \{f(t-c) H(t-c)\}
$$

$$
\mathcal{L} \{H(t-cc)\} = \frac{e^{-sc}}{s}
$$

---

$$
y^{(n)} + a_{n-1} y^{(n-1)} + a_{n-2} y^{(n-2)} + \dots + a y' = a_0 y = h(t)
$$

temos de aprender como fazer a transformada de laplace disto para podermos resolver estas equações

$$
\mathcal{L} \{f'(t) \} = \int_{0}^{+\infty} f'(t) e^{-st} \d t = \dots = s \mathcal{L} \{f\} - f(0)
$$

$$
\mathcal{L} \{f''(t) \} = s \mathcal{L} \{f'\} - f'(0) = s^2 \mathcal{L} \{f\} - sf(0) - f'(0)
$$

$$
\mathcal{L} \{f'''(t) \} = s \mathcal{L} \{f''\} - f''(0) = s^3 \mathcal{L} \{f\} - s^2 f(0) - s f'(0) - f''(0)
$$

$$
\mathcal{L} \{f^{(n)}} = s^n \mathcal{L} \{f\} - \sum_{j=0}^{n-1} s^{n-1-j} f^{(j)} (0)
$$

---

exemplo

$$
y'' - 2y' + y = t^5 e^t, y(0) = 1, y'(0) = 3
$$

$$
\mathcal{L} \{y''\} - 2\mathcal{L} \{y'\} + \mathcal{L} \{y\} = \mathcal{L} \{t^5 e^t}
$$

$$
Y(s) = \mathcal{L} \{y\}
$$

$$
\begin{darray}{c}
s^2 Y - s y(0) - y'(0) - 2(s Y - y(0)) + Y = \frac{5!}{(s-1)^6}\\
(s^2 - 2s + 1) Y - sy(0) - y'(0) + 2y(0) = \frac{5!}{(s-1)^6}\\
(s-1)^2 Y - s - 1 = \frac{5!}{(s-1)^6}\\
Y = \frac{s+1}{(s-1)^2} + \frac{5!}{(s-1)^8}\\
Y = \frac{s-1+2}{(s-1)^2} + \frac{5!}{7!}\frac{7!}{(s-1)^8}\\
Y = \frac{1}{s-1} + \frac{2}{(s-1)^2} + \frac{1}{7 \times 6} \frac{7!}{(s-1)^8}\\
Y = \mathcal{L} \{e^t + 2 te^t + \frac{1}{42} t^7 e^t}
\end{darray}
$$

Então:

$$
y(t) = e^t + 2te^t + \frac{t^7}{42} e^t = (1+2t + \frac{t^7}{42}) e^t
$$

---

exemplo 2

$$
y'' - 2y' + y = \begin{cases}
e^t \text{se } 0 \leq t < 1\\
-e^t \text{se } 0 \leq t
\end{cases}
$$

$y(0) = y'(0) = 0$

podemos usar a função heaviside para isto: $e^t - 2e^t H(t-1)$

$$
y'' - 2y' + y = e^t - 2e^t H(t-1)
$$

$$
Y(s) = \mathcal{L} \{y\}
$$

$$
\begin{darray}{c}
s^2 Y - s y(0) - y'(0) - 2s (Y - y(0)) + Y = \frac{1}{s-1} + 2e \mathcal{L} \{e^{t-1} H(t-1)\}\\
(s^2 - 2s + 1) Y = \frac{1}{s-1} - 2e e^{-s} \times \frac{1}{s-1}\\
Y = \frac{1}{(s-1)^3} - 2e e^{-s} \frac{2}{(s-1)^3}\\
Y = \frac{1}{2} \mathcal{L} \{t^2 e^t \} - e e^{-s} \mathcal{L} \{t^2 e^t\}\\
Y = \frac{1}{2} \mathcal{L} \{t^2 e^t \} - e \mathcal{L} \{(t-1)^2 e^{t-1} H(t-1)\}
\end{darray}
$$

$$
y(t) = \frac{t^2}{2}e^t - e(t-1)^2 e^{t-1} H(t-1)\\
y(t) = (\frac{t^2}{2} - H(t-1) (t-1)^2) e^t\\
y(t) = \begin{cases}
\frac{t^2}{2} e^t & \text{se } 0 \leq t < 1\\
(\frac{t^2}{2} - (t-1)^2) e^t & \text{se } t \gte 1
\end{cases}
$$

---

$$
f(t) = g(t) + l H(t - c)
$$

$g$ contínua $C^1$, $[0, + \infty [ \to \R$

$f'(t) = g'(t)$ se $t \ne c$

(delta = delta de dirac)
$f'(t) = g'(t) + l \delta (t-c)$

_gráfico de H(t-c) e a sua derivada, onde tem um "pico" infinito em c de comprimento epsilon (que tende para zero)_

$$
\begin{darray}{c}
\mathcal{L} \{f\} = \mathcal{L} \{g + l H(t-c)\}\\
\mathcal{L} \{f'\} = \mathcal{L} \{g'\} + l \mathcal{L} \{\delta (t-c)\}\\
s \mathcal{L} \{f\} - f(0) = s \mathcal{L} \{g\} - g(0) + l \mathcal{L} \{\delta (t-c)}\\
s \mathcal{L} \{g\} + sl \mathcal{L} \{H(t-c)\} - g(0) = s \mathcal{L} \{g\} - y(0) + l \mathcal{L}\{\sigma (t-c) \}\\
s \frac{e^{-sc}}{s} = \mathcal{L} \{\delta (t-c)\}
\end{darray}
$$

$\mathcal{L} \{\delta (t-c)\}  = e^{-sc}$

---

exemplo

$$
y''(t) = \delta (t-2)
$$

com $y(1) = 0$ e $y'(1) = 0$

Seja $u(t) = y(t+1)$, $u''(t) = y''(t+1)$

Temos então um novo problema:

$u'' = \delta (t-1)$ com $u(0) = u''(0) = 0$

$$
U (s) = \mathcal{L} \{u\}
$$

$$
s^2 U = e^{-s}
$$

$$
U = \frac{e^{-s}}{s^2}
$$

$$
U = e^{-s} \mathcal{L} \{t\} = \mathcal{L} \{(t-1) H(t-1)\}
$$

$$
u(t) = (t-1) H(t-1)\\
y(t) = u(t-1)\\
y(t) = (t-2) H(t-2)
$$

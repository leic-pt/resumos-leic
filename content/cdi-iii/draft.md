duvido que seja útil, mas estamos a passar a série de fourier para complexos

$$
SF_f(x) = \sum_{n=-\infty}^{+\infty} c_n e^{inx}
$$

$$
c_n = \begin{cases}
\frac{a_n - ib_n}{2} & \text{se } n \gte 1\\
\frac{a_0}{2} & \text{se } n = 0\\
\frac{a_n + ib_n}{2} & \text{se } n \leq -1
\end{cases}
$$

:::tip[Definição]

**Identidade de Pcoserval (?)**

$$
f(x) \aprox \sum_{n=-\infty}^{+\infty} \alpha_n \varphi_n
$$

:::

$$
\int_{0}^{2\pi} |f(x)|^2 = \sum_{n=1}^{+\infty} |\alpha_n|^2
$$

---

$f: [0, 2\pi] \to \R$

$$
\frac{1}{\pi} \int_{0}^{2\pi} |f(x)|^2 = \frac{a_0^2}{2} + \sum_{n=1}^{+\infty} (a_n^2 + b_n^2)
$$

---

exemplo (da última aula)

$f(x) = x$, $[-\pi, \pi]$

$$
\begin{array}{c}
x = \sum_{n=1}^{+\infty} \frac{2}{n} (-1)^{n+1} \sin(nx) , x \in ]-\pi, \pi[\\
\frac{1}{\pi} \int_{-\pi}^{\pi} x^2 \d x = \sum_{n=1}^{+\infty} \frac{4}{n^2}\\
\frac{2}{\pi} \frac{\pi^3}{3} = 4 \sum_{n=1}^{+\infty} \frac{1}{n^2}
\end{array}
$$

# Equações de Calor

continuando o que já existe de aulas anteriores...

Se tivermos $u(t,0)=0$ e $u(t, L) = 0$ (ao que se chama Condições Fronteira de Dirichelet), e $X(0) = 0 = X(L) = 0$.

Se $\lambda = 0$ temos $X(x) = 0$:

- $X(0) = A + B \times 0 \implies A = 0$
- $X(L) = BL = 0 \implies B = 0$

Se $\lambda > 0$:

$$
X(0) = A + B = 0\\
B = -A\\
X(x) = A(e^{\sqrt{\lambda} x} - e^{-\sqrt{\lambda} x})\\
X(L) = A(e^{\sqrt{\lambda} L} - e^{-\sqrt{\lambda} L}) = 0\\
e^{\sqrt{\lambda} L} - e^{-\sqrt{\lambda} L} = 0 \Leftrightarrow e^{2 \sqrt{\lambda} L} = 1
$$

Se $\lambda < 0$:

$$
X(x) = a \cos(\sqrt{-\lambda} x) + b \sin(\sqrt{-\lambda} x)\\
X(0) = a = 0\\
X(L) = b\sin(\sqrt{-\lambda} L) = 0\\
\sqrt{-L} L = n\pi\\
\lambda = - \frac{n^2 \pi^2}{L^2}, n\in \Z\backslash \{0\}
$$

$$
X(x) = b\sin(\frac{n\pi x}{L})\\
T(t) = c_2 e^{-\frac{n^2\pi^2}{L^2} kt}\\
u(t,x) = b_n e^{-\frac{n^2\pi^2}{L^2} kt} \sin(\frac{n\pi x}{L})\\
u(t,x) = \sum_{n=1}^{+\infty} b_n e^{-\frac{n^2\pi^2}{L^2} kt} \sin(\frac{n\pi x}{L})\\
$$

condição inicial $u(0, x) = f(x)$

$$
f(x) = \sum_{n=1}^{+\infty} b_n \sin(\frac{n\pi}{L}x)
$$

$$
b_n = \frac{2}{L} \int_{0}^{L} f(x) \sin(\frac{n\pi x}{L}) \d x
$$

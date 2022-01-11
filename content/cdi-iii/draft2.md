Exemplo:

$k = 1$

$$
u(t,1) = 0\\
u(0,x) = \sin(2\pi x) + 3\sin(5\pi x)
$$

$$
b_n = \begin{cases}
0 & \text{se } n\ne 2 \land n \ne 5\\
1 & \text{se } n = 2\\
3 & \text{se } n = 5
\end{cases}
$$

$$
u(t, x) = e^{-4\pi^2 t} \sin{2\pi x} + 3 e^{-25 \pi^2 t} \sin(5 \pi x)
$$

---

**Teorema**

Se $f$ é contínua em $[0, \pi]$ seccionalmente $C^1$, então exsite uma única solução do (\*) que é contínua em $\R_0^+ \times [0, L]$

---

Se $u_1$ e $u_2$ são soluções de (\*) então $v = u_1 - u_2$ e $v = u_2 - u_1$, e $v \leq 0$. Logo $v = 0$.

---

## Condições Fronteira de Neumann

$$
\begin{cases}
\frac{\partial u}{\partial t} = k \frac{\partial^2 u}{\partial x^2}\\
\frac{\partial u}{\partial x} (t,0) = \frac{\partial u}{\partial x} (t, L) = 0\\
u(0, x) = f(x)
\end{cases}
$$

$$
u(t,x) = \frac{a_0}{2} + \sum_{n=1}^{+\infty} a_n e^{-\frac{\pi^2 k}{L^2}n^2 t} \cos(\frac{\pi n}{L}x)
$$

$$
f(x) = \frac{a_0}{2} + \sum_{n=1}^{+\infty} a_n \cos(\frac{\pi n}{L} x)
$$

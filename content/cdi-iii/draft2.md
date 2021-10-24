equações escalares

$\frac{\d y}{\d t} = f(t, y)$

$y(t_0) = y_0$

$f: D \subset \R \times \R \to \R$

---

($t \gte 1$?)

$$
\begin{darray}{cc}
\frac{\d y}{\d t} = y^2 + t^2 & y(1) = 0
\end{darray}
$$

$$
\frac{\d y}{\d t} \gte y^2 + 1
$$

$$
\frac{1}{y^2 + 1} \frac{\d y}{\d t} \gte 1
$$

$$
\int_{1}^{t} \frac{\d y}{\d s} \d s \gte \int_{1}^{t} 1 \d s
$$

$$
\arctan y(t) - \arctan y(1) \gte t - 1
$$

$$
\arctan y(t) - \arctan 0 \gte t - 1
$$

$$
y(t) \gte \tan (t-1)
$$

$$
t \to \frac{\pi}{2} + 1
$$

---

:::tip[Teorema]

Sejam $D \subset \R \times \R$ e funções $f,g: D \to \R$ nas condições do Teorema de Picard-Lindelo..f.

Suponha-se que

$$
\begin{darray}{cr}
f(t,y) \leq g(t,y) & \forall (t,y) \in D\\
u_0 \leq \v_0 & (t_0, u_0) \in D, (t_0, v_0) \in D
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

---

## semana 4

Exemplo

$$
\begin{darray}{cc}
\frac{\d y}{\d t} = \frac{1}{y^6 + y^2 + 1} & y(1) = 0
\end{darray}
$$

$$
(y^6 + y^2 + 1) \frac{\d y}{\d t} = 1
$$

A solução é data implicitamente por

$$
\frac{y^7}{7} + \frac{y^3}{3} + y = t - 1
$$

$$
F(x) = \frac{x^7}{7} + \frac{x^3}{3} + x\\
F' = x^6 + x^2 + 1
$$

$$
F(y(t)) = t - 1\\
y(t) = F^{-1} (t-1)
$$

Se encontrarmos uma função que define implicitamente a solução, podemos dizer que resolvemos a equação diferencial.

---

$$
\phi(t, y(t)) = c
$$

$$
\frac{\partial \phi}{\partial t} + \frac{\partial \phi}{\partial y} y'(t) = 0
$$

$$
M(t,y) + N(t,y) y' = 0
$$

$$
\begin{darray}{cc}
M = \frac{\partial \phi}{\partial t} & N = \frac{\partial \phi}{\partial y}
\end{darray}
$$

é preciso campo ser gradiente, e fechado

;

é uma equação exata sse

$$
\begin{darray}{cc}
M,N \in C^1 & \frac{\partial M}{\partial y} = \frac{\partial N}{\partial t}
\end{darray}
$$

Neste caso existe $\phi$ tal que $M = \frac{\partial \phi}{\partial t}, N = \frac{\partial \phi}{\partial y}$
e as soluções de (\* (cena inicial)) são definidas implicitamente por

$$
\phi(t, y(t)) = constante
$$

---

Exemplo

$$
\begin{darray}{cc}
\frac{\d y}{\d t} = \frac{t-y^2}{ty} & y(1) = \sqrt{\frac{2}{3}}
\end{darray}
$$

$M = y^2 - t$, $N = ty$

- $y^2 - t + ty \frac{\d y}{\d t} = 0$

$$
\begin{darray}{ccc}
\frac{\partial M}{\partial y} = 2y & \ne & \frac{\partial N}{\partial t} = y
\end{darray}
$$

Não é exata

;

- $\underbrace{ty^2 - t^2}_{M} + \underbrace{t^2 y}_{N} \frac{\d y}{\d t} = 0$

$$
\begin{darray}{ccc}
\frac{\partial M}{\partial y} = 2ty & = & \frac{\partial N}{\partial t} = 2ty
\end{darray}
$$

é exata

$$
\frac{\partial \phi}{\partial t} = ty^2 -t^2
$$

$$
\phi = \frac{t^2 y^2}{2} - \frac{t^3}{3} + C(y)
$$

$$
\frac{\partial \phi}{\partial y} = t^2 y + C'(y) = t^2 y, C'(y) = 0
$$

$$
\frac{t^2 y^2}{2} - \frac{t^3}{3} = \frac{\sqrt{\frac{2}{3}}^2}{2} - \frac{1}{3} = 0, y(1) = \sqrt{\frac{2}{3}}
$$

$$
y^2 = \frac{2}{3}t \to y(1) = \sqrt{\frac{2}{3}}
$$

$$
y = \sqrt{\frac{2t}{3}}
$$

---

$$
\begin{darray}{ccc}
M(t,y) & N(t,y) & \mu (t,y)
\end{darray}
$$

$$
\begin{darray}{c}
M + N y' = 0\\
\mu M + \mu N y' = 0 \text{ é exata}
\end{darray}
$$

$$
\frac{\partial }{\partial y} (\mu M) = \frac{\partial }{\partial t} (\mu N)
$$

$$
\frac{\partial \mu}{\partial y} M + \mu \frac{\partial M}{\partial y} = \frac{\partial M}{\partial t} N + \mu \frac{\partial N}{\partial t}
$$

$$
\frac{\partial \mu}{\partial t} N - \frac{\partial \mu}{\partial y} M = (\frac{\partial M}{\partial y} - \frac{\partial N}{\partial t}) \mu
$$

Se $\frac{\partial \mu}{\partial y} = 0$, $\mu \equiv \mu(t)$

$$
\frac{\d \mu}{\d t} = \frac{\frac{\partial M}{\partial y} - \frac{\partial N}{\partial t}}{N} \mu
$$

se só depende de $t$

Se $\frac{\partial \mu}{\partial t} = 0$

$$
\frac{\d \mu}{\d y} = -\frac{\frac{\partial M}{\partial y} - \frac{\partial N}{\partial t}}{M} \mu
$$

se só depende de $y$

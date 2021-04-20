.....

$$
\begin{array}{l l}
f: \R^2 \to \R, C^1 & F: \R \to \R\\
F(t) = \int^b_a f(x,t) \d x & F'(t) = \int^b_a \frac{\partial f}{\partial t}(x,t) \d x
\end{array}
$$

Teorema de Leibniz

Ex:

$$
F(t) = \int^3_0 e^{-tx^2}\d x
$$

O problema é que $e^{-tx^2}$ não tem primitiva que se consiga escrever explicitamente.

Qual é o valor de $F'(0)$?

...

$$
F'(0) = - \int^3_0 x^2 = - \left[\frac{x^3}{3} \right]^3_0 = -9
$$

---

$$
H(x)=\int^x_0 f(x,y) \d y
$$

$f =f(x,y)$

Seja

$$
\begin{array}{l l}
I(x,z) = \int^x_0 f(z,y) \d y &
H(x)=I(x,x)
\end{array}
$$

$$
\frac{\partial I}{\partial x} = f(z,x)
$$

$$
\begin{aligned}
\frac{\partial I}{\partial z} &= \int^x_0 \frac{\partial}{\partial z} (f(z,y)) \d y\\
&=\int^x_0 \frac{\partial f}{\partial 1ºvar} \cdot \frac{\partial 1ºvar}{\partial z} \d y\\
&=\int^x_0 \frac{\partial f}{\partial x} 1 \d y\\
&=\int^x_0 \frac{\partial f}{\partial x} (z,y) \d y
\end{aligned}
$$

$$
\begin{aligned}
H'(x) &= \frac{\d}{\d x} (I(x,x))\\
&= \frac{\partial I}{\partial x} \cdot \frac{\partial x}{\partial x} + \frac{\partial I}{\partial z} \cdot \frac{\partial x}{\partial x}\\
&= \frac{\partial I}{\partial x} + \frac{\partial I}{\partial z}\\
&= f(z,x) + \int^x_0 \frac{\partial f}{\partial x} (z,y) \d y
\end{aligned}
$$

Ex (ex 9 ficha 7)

$$
V_t = \{(x,y,z) \in \R^3: 1 \leq x^2 + y^2 \leq t \quad, \quad 0 \leq z \leq 1 \quad,\quad y>0\}
$$

$$
F(t)=\int\int\int_{V_t} \frac{e^{t(x^2+y^2)}}{x^2+y^2} \d x \d y \d z
$$

Qual o valor de $F'(4)$?

$V_t$ é de revolução

$$
\begin{cases}
x = r \cos \theta\\
y = r \sin \theta\\
z = z
\end{cases}
$$

$Jacobiana = r$

$$
1 \leq x^2+y^2 \leq t \Leftrightarrow 1 \leq r^2 \leq t \Leftrightarrow 1 \leq r \leq \sqrt{t}
$$

$ 0 \leq z \leq 1$

$$
y > 0 \Leftrightarrow r \sin \theta > 0 \Leftrightarrow \sin \theta 0 > 0\Leftrightarrow \theta \in ]0, \pi[
$$

$$
\begin{aligned}
F(t)&= \int^{\pi}_0 \int^{\sqrt{t}}_1 \int^1_0 \frac{e^{tr^2}}{r^2} \cdot r \d z \d r \d \theta\\
&= \int^{\pi}_0 \int^{\sqrt{t}}_1 \frac{e^{tr^2}}{r} \d r \d \theta\\
&= \int^{\sqrt{t}}_1 \int^{\pi}_0 \frac{e^{tr^2}}{r} \d \theta \d r\\
&= \int^{\sqrt{t}}_1 \frac{e^{tr^2}}{r} \d r
\end{aligned}
$$

$$
\begin{aligned}
F'(t) &= \frac{\pi e^{tr^2}}{r} |_{r=\sqrt{t}} \cdot (\sqrt{t})' + \int^{\sqrt t}{1} \frac{\partial }{\partial t} \frac{\pi e^{tr^2}}{r} \d r\\
&=\frac{\pi e^{t^2}}{\sqrt t} \cdot \frac{1}{2\sqrt t} + \int^{\sqrt t}_1 \frac{r^2 e^{tr^2}}{r} \cdot \pi \d r
\end{aligned}
$$

$$
...
$$

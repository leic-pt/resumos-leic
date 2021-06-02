a) Teorema Div.

$$
\int_{\partial D} G \cdot \vec n = \iiint_D \div G = 0
$$

$$
\int_S G \cdot \vec n + \int_{\text{tampa}} G \cdot \vec n
$$

$$
\int_{\text{tampa}} G \cdot \vec n
$$

$$
\begin{array}{l}
\vec n_{ext} = (0,0,-1)\\
G \cdot \vec n_{ext} = (xz, yz, 1-z^2) \cdot (0,0,-1) = 0 + 0 + z^2-1 = -1
\end{array}
$$

$$
\int_{tampa} G \cdot \vec n = \int_{tampa} -1 = - \text{área} (tampa)
$$

---

ex 4

b)

Teorema de Stokes

$$
\int_S \rot F \cdot \vec n = \int_{\partial S} F \d g
$$

$$
\int_S G \cdot \vec n
$$

Será que $G$ é um rotacional?

$$
\begin{cases}
\div G = 0\\
\text{domínio de } G: \R^3 \text{é um aberto em estrela}
\end{cases}
\Rightarrow G = \rot F
$$

$$
\rot F = \begin{vmatrix}
e_1 & e_2 & e_3\\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z}\\
F_1 & F_2 & F_3
\end{vmatrix}
\Rightarrow
\begin{cases}
\frac{\partial F_3}{\partial y} - \frac{\partial F_2}{\partial z} = xz\\
- \frac{\partial F_3}{\partial x} + \frac{\partial F_1}{\partial z} = yz\\
\frac{\partial F_2}{\partial x} - \frac{\partial F_1}{\partial y} = 1-z^2
\end{cases}
$$

$F_3 == 0$

$$
\begin{cases}
\frac{\partial F_2}{\partial z} = -xz\\
\frac{\partial F_1}{\partial z} = yz\\
-
\end{cases}
\Rightarrow
\begin{cases}
F_2 = - \frac{z^2}{2} x + C_1(x,y)\\
F_1 = y\frac{z^2}{2} + C_2(x,y)\\
-\frac{z^2}{2} + \frac{\partial C_1}{\partial x} - \left(\frac{x^2}{2} + \frac{\partial C_2}{\partial y} \right) = 1-z^2
\end{cases}
\Rightarrow
\begin{cases}
-\\
-\\
-z^2 + \frac{\partial C_1}{\partial x} - \frac{\partial C_2}{\partial y} = 1 - z^2
\end{cases}
$$

$C_2 = 0, C_1 = x$

$$
F = (\frac{yz^2}{2}, - \frac{z^2}{2} x + x, 0)
$$

$$
\int_S G \cdot \vec n = \int_S \rot F \cdot \vec n = \int_{\partial S} F \d g
$$

$$
\partial S = \{z = 0, x^2+y^2 = 1 \}
$$

$$
\begin{array}{ll}
g(t) = (\cos t, \sin t, 0) & g'(t) = (- \sin t, \cos t, 0)\\
F(g(t)) = (0, \cos t, 0) & F(g(t)) \cdot g'(t) = \cos^2 t
\end{array}
$$

$\cos^2 t = \frac{2 + \cos (2t)}{2}$

$$
\begin{aligned}
\int_{\partial S} F \d g &= \int_0^{2 \pi} \cos^2 t \d t\\
&= \int_0^{2 \pi} \frac{1+ \cos(2t)}{2} \d t\\
&= \left[\frac{t}{2} + \frac{\sin(2t)}{4} \right]^{2\pi}_0\\
&= \pi + 0 = \pi
\end{aligned}
$$

Logo, $\int_S G \cdot \vec n = 0$

---

ex5

$S$ é de revolução em torno de $Oz$

$$
R^2 = x^2+y^2 \Rightarrow z^2 + (R-2)^2 = 1
$$

$S$ é um "donut" (toro)

$$
\begin{array}{ll}
F = (1, 2z, 2xy) & \div F = 0 + 0 + 0 = 0
\end{array}
$$

a)

$$
\int_S F \cdot \vec n
$$

$D = \text{interior do meio-donut} = \{z^2+(\sqrt{x^2+y^2} - 2)^2 \leq 1, x > 0\}$

$$
\partial D = S \cup \text{tampa centrada em } (0,2,0) \cup \text{tampa centrada em } (0, -2, 0)
$$

$$
\int_{\partial S} F \cdot \vec n = \iiint_D \div F = 0
$$

$$
\int_S F \cdot \vec n + \int_{\text{tampa } (0,2,0)} F \cdot \vec n + \int_{\text{tampa } (0,-2,0)} F \cdot \vec n
$$

$\int_{\text{tampa } (0,2,0)} F \cdot \vec n$:

$$
\begin{array}{ll}
\vec n_{ext} = (-1, 0, 0) & F \cdot \vec n_{ext} = - 1
\end{array}
$$

$$
\int_{\text{tampa } (0,2,0)} F \cdot \vec n = + \int_{\text{tampa } (0,2,0)} -1 = - \text{área} = -\pi
$$

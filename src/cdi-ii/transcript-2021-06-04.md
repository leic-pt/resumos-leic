continuação aula anterior:

$\int_{\text{tampa } (0,-2,0)} F \cdot \vec n$:

$$
\begin{array}{ll}
\vec n_{ext} = (-1, 0, 0) & F \cdot \vec n_{ext} = - 1
\end{array}
$$

$$
\int_{\text{tampa } (0,-2,0)} F \cdot \vec n = + \int_{\text{tampa } (0,2,0)} -1 = - \text{área} = -\pi
$$

Conclusão: $\int_S F \cdot \vec n = 2\pi

b)

$$
\int_S F \cdot \vec n = \int_S \rot G \cdot \vec n = \int_{\partial S} G \d g
$$

$$
\begin{cases}
...\\
\text{domínio de }F = \R^3 \text{(aberto em estrela)}
\end{cases}
\Rightarrow
F = \rot G
$$

$$
\rot G = \begin{vmatrix}
e_1 & e_2 & e_3\\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z}\\
G_1 & G_2 & G_3
\end{vmatrix}
=(1, 2z, 2xy)
$$

$$
\begin{cases}
\frac{\partial G_3}{\partial y} - \frac{\partial G_2}{\partial z} = 1\\
-\frac{\partial G_3}{\partial x} + \frac{\partial G_1}{\partial z} = 2z\\
\frac{\partial G_2}{\partial x} - \frac{\partial G_1}{\partial y} = 2xy
\end{cases}
\Rightarrow
\begin{cases}
-\\
\frac{\partial G_3}{\partial x} = -2z\\
\frac{\partial G_2}{\partial x} = 2xy
\end{cases}
\Rightarrow
\begin{cases}
\frac{\partial C_2}{\partial y} - \frac{\partial C_1}{\partial z} = 1\\
G_3 = -2zx + C_2(y,z)\\
G_2 = x^2y + C_1(y,z)
\end{cases}
$$

......

$G = (0,x^2y, -2zx + y)$

$$
\int_S F \cdot \vec n = \int_S \rot G \cdot \vec n = \int_{\partial S} G \d g
$$

$\int_{C_1} G$:

$$
\begin{array}{ll}
g(t) = (0, 2+\cos t, \sin t) & \begin{cases} x = 0 \\ y = \cos t + 2 \\ z = \sin t\end{cases}\\
g'(t) = (0, -\sin t, \cos t) & G(g(t)) = (0, 0, 2 + \cos t)
\end{array}
$$

$$
\begin{aligned}
\int_{C_1} G &= \int_0^{2\pi} 2 \cos t + \cos^2 t \d t\\
& = \int_0^{2\pi} 2 \cos t + \frac{cos(2t + 1)}{2} \d t\\
& = \left[ 2 \sin t + \frac{\sin(2t)}{4} + \frac{t}{2} \right]_0^{2\pi}\\
& = \pi - 0 = \pi
\end{aligned}
$$

$\int_{C_2} G$:

$$
\begin{array}{ll}
g(t) = (0, -2+\cos t, \sin t) & g'(t) = (0, -\sin t, \cos t)\\
G(g(t)) = (0, 0, -2 + \cos t) & G(g(t)) \cdot g'(t) = -2\cos t + \cos^2 t
\end{array}
$$

$$
\int_{C_2} G \d g = \int_0^{2\pi} - 2\cos t + \cos^2t \d t = \pi
$$

$$
\int_S F \cdot \vec n = 2\pi
$$

Teorema de mudança de variável

Se $g: U \to V$ mudança de coordenadas, $g(y_1, \dots, y_n) = (x_1, \dots, x_n)$

$$
\int_V f(x_1, \dots, x_n) \d x_1, \dots, \d x_n =
\int_U f(g(y_1, \dots, y_n)) |\det D_g| \d y_1, \dots, y_n
$$

Recordar: $g$ injetiva, $g \in C'$, $\det Dg \ne 0$.

---

1.

$\R^2$

Polares:

$$
\begin{cases}
x = r \cos \theta\\
y = r \sin \theta
\end{cases}
$$

$\theta$ está entre $0$ e $2\pi$, $r > 0$

$\det Dg| = r$

2.

$\R^3$: útil para regiões de revolução -> coordenadas cilíndricas

[imagem]

$(x,y,z) -> (r, \theta, z)$

$$
\begin{cases}
x = r \cos \theta\\
y = r \sin \theta\\
z = z
\end{cases}
$$

$0 < \theta < 2\pi$, $r > 0$

$$
\begin{aligned}

\det Dg & = \det \begin{bmatrix}
\cos \theta & -r \sin \theta & 0\\
\sin \theta & r \cos \theta & 0\\
0 & 0 & 1
\end{bmatrix}\\
&= 1 \times \begin{vmatrix}
\cos \theta & -r \sin \theta\\
\sin \theta & r \cos \theta
\end{vmatrix}\\
&=r\cos^2 \theta + r \sin^2 \theta\\
&=r \ne 0 (\text{porque} r > 0)
\end{aligned}
$$

---

Ex: Volume do cone

$$
C = \left\{(x,y,z) \in \R^3: \sqrt{x^2+y^2} < z < h \right\}
$$

[imagem]

$$
\text{Volume} = \int_C 1 \d x \d y \d z
$$

Coordenadas cilíndricas:

$$
\begin{cases}
x = r \cos \theta\\
y = r \sin \theta\\
z = z
\end{cases}
$$

$x^2 + y^2 = r^2$
$r < z < h$

$$
\begin{array}{l l l}
0 < z < h & 0 < \theta < 2\pi & 0 < r < z
$$

$$
\begin{aligned}
\text{Volume} &= \int^h_0(\int^{2\pi}_0(\int^z_0 1\cdot r \d r) \d \theta) \d z\\
&=\int^h_0 (\int^{2\pi}_0 \left[\frac{\pi^2}{2}\right]^z_0 \d \theta) \d z\\
&=\int^h_0 ( \int^{2\pi}_0 \frac{z^2}{2} \d \theta) \d z\\
&=\int^h_0 2\pi \times \frac{z^2}{2} \d z\\
&=\int^h_0 \pi z^2 \d z\\
&=\left[\pi \frac{z^3}{3} \right]^h_0\\
&=\frac{\pi h^3}{3}
\end{aligned}
$$

---

$\R^3$: coordenadas esféricas:

[image]

- $r$ é a distância à origem
- $\varphi$ é o ângulo que o vetor faz com o eixo dos $zz$
- $\theta$ éo ângulo entre o semi-eixo positivo dos $xx$ e a projeção do vertor no plano $Oxy$

$z = r \cos \varphi$

$r \sin \varphi$ -> raio no plano $xy$

$x = \text{raio} \cos \theta = r \sin \varphi \cos \theta$
$y = \text{raio} \sin \theta = r \sin \varphi \sin \theta$

$$
\begin{array}{l l l l}
r > 0 & 0 < \varphi < \pi & 0 < \theta < 2\pi & g=g(r,\pi,\varphi)
\end{array}
$$

$$
\begin{aligned}
\det Dg &= \det \begin{bmatrix}
\sin \varphi \cos \theta & -r \sin \varphi \sin \theta & r \cos \varphi \cos \theta\\
\sin \varphi \sin \theta & r \sin \varphi \cos \theta & r \cos \varphi \sin \theta\\
\cos \varphi & 0 & -r \sin \varphi
\end{bmatrix}\\
&= \cos \varphi \begin{vmatrix}
-r \sin \varphi \sin \theta & r \cos \varphi \cos \theta\\
r \sin \varphi \cos \theta & r \cos \varphi \sin \theta
\end{vmatrix}\\
&\quad + (-r\sin \varphi) \begin{vmatrix}
\sin \varphi \cos \theta & -r \sin \varphi \sin \theta\\
\sin \varphi \sin \theta & r \sin \varphi \cos \theta
\end{vmatrix}\\
&= \cos \varphi ( -r^2 \sin \varphi \cos \varphi \sin^2 \theta - r^2 \sin \varphi \cos\varphi \cos^2 \theta)\\
&\quad + (-r\sin \varphi)(r \sin^2 \varphi \cos^2 \theta + r \sin^2 \varphi \sin^2 \theta)\\
&= -r^2 \sin \varphi \cos^2 \varphi - r^2 \sin \varphi \sin^2 \varphi\\
&= -r^2 \sin \varphi \ne 0
\end{aligned}
$$

$r>0$ $0 < \varphi < \pi$ $\sin \varphi > 0$

$$
|\det Dg| = r^2 \sin \varphi
$$

---

Volume Bola em $\R^3$: 

C = \{ (x,y,z) \in \R^3: x^2+y^2+z^2 < \R^2\}
$$

$\text{Volume} = \int_C 1 \d x \d y \d z$


Coordenadas esféricas: $r^2 < R^2$

$$
\begin{array}{l l l}
0 < \theta < 2\pi & 0 < \varphi < \pi & 0 < r < R
\end{array}
$$

$$
\begin{aligned}
\text{Volume} &= \int^{2\pi}_0 ( \int^\pi_0 (\int^R_0 1 \cdot r^2\sin \varphi \d r) \d \varphi) \d \theta\\
&= \int^{2\pi}_0 (\int^\pi_0 \left[\frac{r^3}{3} \sin \varphi \right]^{r=R}_{r=0} \d \varphi) \d \theta\\
&= \int^{2\pi}_0 (\int^\pi_0 \frac{R^3}{3} \sin \varphi \d \varphi) \d \theta\\
&= \int^{2\pi}_0 \left[- \frac{R^3}{3} \cos \varphi \right]^{\varphi = \pi}_{\varphi = 0} \d \theta\\
&= \int^{2\pi}_0 \frac{R^3}{3} - (-\frac{\R^3}{3}) \d \theta\\
&= \int^{2\pi}_0 \frac{2R^3}{3} \d \theta\\
&= \frac{2R^3}{3} \times 2\pi\\
&= \frac{4\pi R^3}{3}
\end{aligned}
$$
$M$ variedade de dimensão 1 (caminho, linha, ...)

$f: M \to \R$ campo escalar

$$
\int_M f \d \gamma = \int^b_a f(g(t)) || g'(t) || \d t
$$

integral de linha do campo escalar

[imagem]

Exemplo:

$$
M = \{ x^2 +y^2 = 1, y > 0\}
$$

$$
\begin{array}{ll}
g(t) = (\cos t, \sin t) & t \in ]0, \pi[\\
g'(t) = (-\sin t, \cos t) & || g'(t) || = 1
\end{array}
$$

Centroíde de $M$: $(\overline x, \overline y)$

$$
\overline x = \frac{S_M x}{S_M 1} = \frac{1}{\pi} \int_M x \d \gamma = \frac{1}{\pi} \int^{\pi}_0 \cos t \cdot 1 \d t =
\frac{1}{\pi} \left[\sin t\right]^{\pi}_0 = 0
$$

$$
\overline y = \frac{S_M y}{S_M 1} = \frac{1}{\pi} \int_M y \d \gamma = \frac{1}{\pi} \int^{\pi}_0 \sin t \cdot 1 \d t =
\frac{1}{\pi} \left[-\cos t\right]^{\pi}_0 = \frac{2}{\pi}
$$

Centroíde: $(0, \frac{2}{\pi})$

---

(Mesma coisa mas para variedades de dimensão superior)

$M$ variedade de $\dim m \subset \R^n$, $f: M \to \R$

Como definir $\int_M f$?

[imagem]

$$
\int_M f = \int_D f(g(t)) \sqrt{ |\det Dg^t Dg | } \d t
$$

($Dg^t$ é a transposta de $Dg$)

---

Exemplo:

$P = \{(x,y,z) \in \R^3: x^2+y^2=z, z < 1\}$ (parabolóide)

Qual a área de $P$?

Podemos utilizar coordenadas cilíndricas:

$$
\begin{cases}
x=r \cos \theta\\
y=r \sin \theta\\
z=z=r^2
\end{cases}
$$

$g(r, \theta) = (r \cos \theta, r \sin \theta, r^2)$, $\theta \in ]0, 2 \pi[$

$$
\int_P 1 \d S = \int^{2 \pi}_0 \int^1_0 1 \cdot \sqrt{|\det (Dg^t Dg ) | } \d r \d theta
$$

$$
Dg(r, \theta) = \begin{bmatrix}
\cos \theta & - \r \sin \theta\\
\sin \theta & r \cos \theta\\
2 r & 0
\end{bmatrix}
$$

(matrix simétrica)

$$
Dg^t \cdot Dg = \begin{bmatrix}
\cos \theta & \sin \theta & 2r\\
-r \sin \theta & r \cos \theta & 0
\end{bmatrix}
\begin{bmatrix}
\cos \theta & - \r \sin \theta\\
\sin \theta & r \cos \theta\\
2 r & 0
\end{bmatrix}
=
\begin{bmatrix}
1+4r^2 & 0
0 & r^2
\end{bmatrix}
$$

$$
\det (4r^2 + 1 ) r^2\\
\sqrt{\det} = r \sqrt{4r^2 +1}
$$

$$
\begin{aligned}
\int_P 1 \d S &= \int^{2 \pi}_0 \int^1_0 1 \cdot r \sqrt{4r^2 + 1} \d r \d \theta\\
&= \int^{2 \pi}_0 \int^1_0 \frac{1}{8} \cdot 8 r \sqrt{4r^2 + 1} \d r \d \theta\\
&= \frac{1}{8} \int^{2\pi}_0 \left[\frac{(4r^2 + 1)^{\frac{3}{2}}}{\frac{3}{2}} \right]^1_0 \d \theta\\
&= \frac{1}{8} \int^{2\pi}_0 \frac{2}{3} (5^{\frac{3}{2}} - 1) \d \theta\\
&= \frac{1}{8} \cdot \frac{2}{3} \cdot 2\pi \cdot (5^{\frac{3}{2}} - 1)\\
&= \frac{\pi}{6} (5^{\frac{3}{2}} - 1)
\end{aligned}
$$

---

Produto externo de $u, v \in \R^3$

$u = (u_1, u_2, u_3)$
$v = (v_1, v_2, v_3)$

$e_1, e_2, e_3$, vetores da base canónica

$$
u \cdot v = \det \begin{bmatrix}
e_1 & e_2 & e_3\\
u_1 & u_2 & u_3\\
v_1 & v_2 & v_3
\end{bmatrix}
$$

Laplace na primeira linha:

$$
= (u_2 v_3 - v_2 u_3) e_1 - (u_1v_3 - v_1u_3) e_2 + (u_1 v_2 - v_1u_2) e_3\\
= (u_2 v_3 - v_2 u_3, -u_1 v_3 + v_1u_3 , u_1v_2-v_1u_2)
$$

Propriedades:

- $u \times v$ é ortogonal a $u$ e $v$
- $u \cdot (v \times w) = v\cdot (w \times u)$
- $u \times (v \times w ) = (u \cdot w) v - (u \cdot v) w$

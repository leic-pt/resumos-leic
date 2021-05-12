$$
u \times v = \det \begin{bmatrix}
e_1 & e_2 & e_3\\
u_1 & u_2 & u_3\\
v_1 & v_2 & v_3
\end{bmatrix}
$$

Seja $g: D \to \R^3$, com $D \subset \R^2$, a parametrização de uma superfície.

$g=g(u,v)$

$\text{fator de escala} = \sqrt{ | \det \left(Dg^t Dg \right) | } = \left|\left| \frac{\partial g}{\partial u} \times \frac{\partial g}{\partial v} \right|\right|$

Resumindo:

- $m = 1$ (linha) $\sqrt{ | \det \left(Dg^t Dg \right) | } = || g'(t) ||$
- $m = 2$ (superfície) $\sqrt{ | \det \left(Dg^t Dg \right) | } = \left|\left| \frac{\partial g}{\partial u} \times \frac{\partial g}{\partial v} \right|\right|$

---

Exemplo:

$S = \{x^2 + y^2 = z^2 + 1, 0 < z < 1\}$

Densidade de massa $\phi (x,y,z) = \frac{1}{\sqrt{2z^2+1}}$

**Qual a massa de $S$?**

Massa = $\int_S \phi$

Parametrizar $S$:

Usar coordenadas cilindricas.

$$
\begin{cases}
x=r \cos \theta\\
y=r \sin \theta\\
z=z
\end{cases}
$$

$$
\begin{array}{lll}
r^2 = z^2 + 1 & r = \sqrt{z^2 + 1} & 0 < z < 1
\end{array}
$$

$$
g(\theta, z) = (\sqrt{z^2 + 1} \cos \theta, \sqrt{z^2+1} \sin \theta, z)
$$

$$
Dg (\theta, z) = \begin{bmatrix}
-\sqrt{z^2+1} \sin \theta & \frac{z}{\sqrt{z^2 + 1}}\cos \theta\\
\sqrt{z^2+1} \cos \theta & \frac{z}{\sqrt{z^2 + 1}}\sin \theta\\
0 & 1
\end{bmatrix}
$$

$$
\frac{\partial g}{\partial \theta} \times \frac{\partial g}{\partial z} = \begin{pmatrix}
e_1 & e_2 & e_3\\
-\sqrt{z^2 + 1} \sin \theta & \sqrt{z^2 + 1}\cos \theta & 0\\
\frac{z}{\sqrt{z^2 + 1}}\cos \theta & \frac{z}{\sqrt{z^2 + 1}}\sin \theta & 1
\end{pmatrix}
=(\sqrt{z^2+1} \cos \theta, \sqrt{z^2 + 1} \sin \theta, -z \sin ^2 \theta - z \cos^2 0)
$$

$$
||\frac{\partial g}{\partial \theta} \times \frac{\partial g}{\partial z}||^2 =
(z^2 + 1) \cos^2 \theta + (z^2 + 1) \sin^2 \theta + z^2 = 2z^2 + 1
$$

Densidade: $\phi = \frac{1}{\sqrt{2z^2 + 1}}$, $\phi (g(\theta,z )) = \frac{1}{\sqrt{2z^2 + 1}}$

$$
\begin{aligned}
\int_S \phi &= \int^1_0 \int^{2\pi}_0 \frac{1}{\sqrt{2z^2 + 1}} \cdot \sqrt{2z^2 + 1} \d \theta \d z\\
&= \int^1_0 \int^{2\pi}_0 1 \d \theta \d z\\
&= 2\pi
\end{aligned}
$$

## Integral de linha de campo vectorial

Seja $C \subset \R^n$ uma curva parametrizada por $g: ]a, b[ \to \R^n$ e $F ...$

Definimos

$$
\int_C F \cdot \d g = \int^b_a F(g(t)) \cdot g'(t) \d t
$$

Obs:

$$
\int_C F \cdot \dg = \int^b_a F(g(t)) \cdot \frac{g'(t)}{||g'(t)||} \cdot ||g'(t)|| \d t
$$

$F \cdot \text{vetor tangente a}\ C\ \text{com norma} = 1$

$$
= \int_C F \cdot \vec{t}angente \d \gamma
$$

Interpretação física

$F$ campo de forças, uma partícula a percorrer $C$

$\int_C F \cdot \d g$ é o trabalho realizado por $F$.

---

Exemplo:

$$
\begin{array}{lll}
g(t)=(t,t) & t \in [0, 1] & F(x,y) = (1,x)
\end{array}
$$

$$
\begin{aligned}
S_C F \cdot \d g &= \int^1_0 F(g(t)) \cdot g'(t) \d t\\
&= \int^1_0 (1,t) \cdot (1,1)\d t\\
&= \int^1_0 (1 + t) \d t\\
&= \left[t + \frac{t^2}{2} \right]^1_0\\
&= \frac{3}{2}
$$

$$
\begin{array}{ll}
g(t)=(t,t) & t \in [0, 1]
\end{array}
$$

$$
\begin{aligned}
\int_{C_2} F \cdot \d h &= \int^1_0 F(h(t)) \cdot h'(t) \d t\\
&= \int^1_0 (1,t) \cdot (1,2t) \d t\\
&= \int^1_0 (1 + 2t^2) \d t\\
&= \left[t + \frac{2t^3}{3} \right]^1_0\\
&= \frac{5}{3}
\end{aligned}
$$

1. Se $g_1$ e $g_2$ são duas parametrizações da curva $C$ que percorrem a curva no mesmo sentido, o integral $\int_C F \cdot \d g_1 = \int_C F \cdot \d g_2$
2. Se $g_1$ e $g_2$ são duas parametrizações da curva $C$ que percorrem a curva em sentido contrário, o integral $\int_C F \cdot \d g_1 = - \int_C F \cdot \d g_2$
3. O exemplo mostra que o valor do integral pode não depender só dos pontos inicial e final

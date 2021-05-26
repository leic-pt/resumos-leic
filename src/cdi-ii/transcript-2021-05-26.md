$$
\begin{array}{ll}
F(x,y,z) = \frac{1}{(x^2+y^2+z^2)^{\frac{3}{2}}} \cdot (x,y,z) & \div F = 0
\end{array}
$$

Se $S$ for uma superfície fechada ($S = \partial D$, $D$ domínio regular)

- $(0,0,0) \nin D$

Teorema da Divergência: (porque $F$ está definido em $D$), $$\int_S F \vec{n}_{ext} = \iiint \div F = 0$$

- $(0,0,0) \in D$

$S \cup E = \partial (D \backslash \text{bola centrada em } (0,0,0))$, $F$ está bem definido

Teorema Divergência:

$$
\int_{\partial B} F \vec{n}_{ext} = \iiint_B \div F = 0
$$

$$
\int_S F \vec{n}_{ext} + \int_E F \vec{n}_{ext} \Rightarrow \int_S F \vec{n}_{ext} - = \int_E F \vec{n}_{ext}
$$

Em $E$:

$$
\vec n_{ext} = -\frac{(x,y,z)}{||(x,y,z)||}
$$

$$
F \cdot \vec n_{ext} = \frac{1}{||(x,y,z)||^3}(x,y,z) \cdot (-\frac{(x,y,z)}{||(x,y,z)||})
= -\frac{1}{||(x,y,z)^4||} (x^2+y^2+z^2)
= - \frac{1}{||(x,y,z)||^2}
$$

Se a esfera tiver raio $R$:

....................

Logo,

$$
\int_S F \cdot \vec n_{ext} = - (-4\pi) = 4\pi
$$

---

$$
F(x,y,z) = (x+e^{z^2}, y+e^{z^2}, z^2-z)
$$

$$
S = \{x^2+y^2 = 1, 0 < z < 1 \}
$$

Parte lateral do cilindro

$\vec n$ é a normal exterior ao cilindro

$\int_S F \vec n = ?$

$\div F = 1+1+2z-1=1+2z$

$D = \text{cilindro entre } 0 \text{ e } 1$

$\partial D = S + \text{tampa}_{z=1} + \text{tampa}_{z=0}$

$$
\int_S F \vec n_{ext} + \int_{\text{tampa}_{z=1}} F \vec n_{ext} + \int_{\text{tampa}_{z=0}} F \vec n_{ext}
= \int_{\partial D} F \vec n_{ext} = \iiint_D 1+2z
$$

Tampa $z=1$:

$$
\begin{array}{ll}
\vec n_{ext} = (0,0,1) & F \cdot \vec n_{ext} = z^2-z
\end{array}
$$

Na tampa $z=1$, $F \cdot \vec n_{ext} = 0 \implies \int_{\text{tampa}_{z=1}} F \vec n_{ext} = 0$

Tampa $z=0$:

$$
\begin{array}{ll}
\vec n_{ext} = (0,0,-1) & F \cdot \vec n_{ext} = -z^2+z
\end{array}
$$

Na tampa $z=0$, $F \cdot \vec n_{ext} = 0 \implies \int_{\text{tampa}_{z=0}} F \vec n_{ext} = 0$

$$
\begin{aligned}
\iiint_D 1 + 2z &= \int_0^1 \int_0^{2\pi} \int_0^1 (1+2z) \cdot r \d r \d \theta \d z\\
&= \int_0^1 \int_0^{2\pi} \left[(1+ 2z) \frac{r^2}{2} \right]^1_0 \d \theta \d z\\
&= \int_0^1 \int_0^{2\pi} \frac{1+2z}{2} \d \theta \d z\\
&= \int_0^1 \pi (1+2z) \d z\\
&= \left[\pi (z + z^2) \right]^1_0\\
&= 2\pi
\end{aligned}
$$

---

$F: \R^3 \to \R^3$ campo vetorial de classe $C^1$

Definimos o rotacional de $F$, $\rot F$ ( ou $\nabla \times F$),

$$
\rot F = \nabla \times F = \begin{vmatrix}
e_1 & e_2 & e_3\\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z}\\
F_1 & F_2 & F_3
\end{vmatrix}
=\left(\frac{\partial F_3}{\partial y}- \frac{\partial F_2}{\partial z}, -\frac{\partial F_3}{\partial x} + \frac{\partial F_1}{\partial z}, \frac{\partial F_2}{\partial x} - \frac{\partial F_1}{\partial y})
$$

Exemplo:

$$
F(x,y,z) = (-y,x,z)
$$

$$
\rot F = \begin{vmatrix}
e_1 & e_2 & e_3\\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z}\\
-y & x & z
\end{vmatrix}
= (0,0, 1+1) = (0,0,2)
$$

---

$$
F(x,y,z) = (x^2, 3x^2,y+z)
$$

$$
\rot F = \begin{vmatrix}
e_1 & e_2 & e_3\\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z}\\
x^2 & 3x^2 & y+z
\end{vmatrix}
=(1,0,6x)
$$

---

$S$ superfície orientada com bordo $\partial S$

Qual a orientação de $\partial S$?

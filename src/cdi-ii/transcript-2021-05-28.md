$S$ superfície em $\R^3$ orientada

$\partial S$ bordo da superfície (linha)

Como orientar o bordo? Regra da mão direita

1.

$S = \{x^2 + y^2 + z^2 = 1, z > 0\}, \vec n_z > 0$

[imagem]

2.

$$
T = \{ x^2 + y^2 = 1, 0 \leq z \leq 1 \}, \text{normal exterior}
$$

[imagem]

---

Teorema de Stokes

$$
S \subset \R ...
$$

$$
\int_S \rot F \cdot \vec n = \int_{\partial S} \vec F \d g
$$

$\partial S$ tem a orientação dada pela regra da mão direita

Recordar: (rotacional ...)

Exemplo:

$$
S = \{ x = -1 + y^2 + z^2, x \leq 0 \}, \vec n \text{com 1º componente negativa}
$$

$F = (xy, ze^x, -y)$

**Qual o valor de $\int_S \rot F \cdot \vec n$?**

normal apontada para fora da taça

$\partial S = \{ x = 0, y^2 + z^2 = 1 \}$ com orientação no sentido horário

$$
\int_S \rot F \cdot \vec n = \int_{\partial S} \vec F \d g = \int_{\partial S} (0, z , -y) \d g
$$

Parametrizar:

$$
\begin{cases}
x = 0\\
y = \cos t\\
z = \sin t
\end{cases}
$$

$$
\begin{array}{ll}
g(t) = (0, \cos t, \sin t) & g'(t) = (0, -\sin t, \cos t)\\
\vec F (g(t)) = (0, \sin t, -\cos t) & \vec F(g(t)) \cdot g'(t) = -\sin^2 t - \cos^2 t = -1
\end{array}
$$

$$
\int_{\partial S} \vec F \d g = - \int_0^{2\pi} -1 \d t = 2\pi
$$

---

Prop: Se $F \in C^2$, então $\div (\rot F) = 0$
$F: \R^3 \to \R^3$, $\rot F: \R^3 \to \R^3$

Demonstração:

$\rot F = ... = ( ... )$

$$
\div(\rot F) = \frac{\partial}{\partial x} (\frac{\partial F_3}{\partial y} - \frac{\partial F_2}{\partial z})
+ \frac{\partial}{\partial y} (-\frac{\partial F_3}{\partial x} + \frac{\partial F_1}{\partial z})
+ \frac{\partial}{\partial z} (\frac{\partial F_2}{\partial x} - \frac{\partial F_1}{\partial y})
= 0
$$

---

Prop: Se $\rot F = (0,0,0)$,

$$
\begin{array}{lll}
\frac{\partial F_3}{\partial y} = \frac{\partial F_2}{\partial z} &
\frac{\partial F_3}{\partial x} = \frac{\partial F_1}{\partial z} &
\frac{\partial F_2}{\partial x} = \frac{\partial F_1}{\partial y}
\end{array}
$$

Logo, $F$ é fechado

Corolário:
Se $\rot \vec F = 0$ e domínio de $F$ for simplesmente conexo então $\vec F$ é gradiente (e conservativo).

Obs:

1. Se $F = \rot A$ e $S$ for uma superfície sem bordo

$$
\int_S F \cdot \vec n = \int_S \rot A \cdot \vec n = \int_{\partial S} A \cdot \d \vec g = 0
$$

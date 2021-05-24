Integrais de superfície de campos vetoriais:

Def: $S \subset \R^3$ superfície. Dizemos que $S$ é orientável se existir $\vec n: S \to \R^3$ com

- $\forall x \in S$, $\vec n (x) \in T_x S$
- $|| \vec n (x) || = 1, \forall x$
- $\vec n$ é contínuo

Fita de Möbius

Seja $g: D \to S$ uma parametrização, então

- $T_x S = \mathcal{L} \{ \text{colunas de}\ Dg \} = \mathcal{L} \left\{ \frac{\partial g}{\partial u} , \frac{\partial g}{\partial v} \right\}$
- $\frac{\partial g}{\partial u} \times \frac{\partial g}{\partial v}$ é ortogonal a $\frac{\partial g}{\partial u} \text{e} \frac{\partial g}{\partial v} \implies \frac{\partial g}{\partial u} \times \frac{\partial g}{\partial v} \in (T_x S)^{\perp}$
- ...

Uma superfície descrita por uma parametrização é sempre orientável.

Uma superfície orientável tem sempredois campos normais.

Definição:

$F: \R^3 \to \R^3$, $S$ superfície orientável com orientação $\vec n$.

Definimos o fluxo de $F$ através de $S$:

$$
\int_S F \cdot \vec n = \int_S F(x,y,z) \cdot \vec n (x,y,z)
$$

ou

$$
\int_S F \cdot \vec n = \int \int_D F(g(u,v)) \cdot \frac{\frac{\partial g}{\partial u} \times \frac{\partial g}{\partial v}}{||\frac{\partial g}{\partial u} \times \frac{\partial g}{\partial v}||}
\cdot ||\frac{\partial g}{\partial u} \times \frac{\partial g}{\partial v}|| \d u \d v
= \int \int_D F(g(u,v)) \cdot (\frac{\partial g}{\partial u} \times \frac{\partial g}{\partial v}) \d u \d v
$$

Exemplo:

$$
\begin{array}{ll}
F(x,y,z) = (x,y,z) &
S= \{x^2+y^2+z^2 = 1, z > 0 \}
\end{array}
$$

com orientação tal que, no ponto $(0,1,0)$, a segunda componente de $\vec n$ seja positiva.

Qual o fluxo de $F$ através de $S$?

$$
g(u, v) = (\sin v \cos u, \sin u, \sin v, \cos v), \text{coordenadas esfericas}
u \in ]0,2\pi[, v \in ]0, \frac{\pi}{2}[
$$

$$
\frac{\partial g}{\partial u} = (-\sin u \sin v, \cos u \sin v, 0)
$$

$$
\frac{\partial g}{\partial v} = (\cos v \cos u, \cos v \sin u, -\sin v)
$$

$$
\begin{aligned}
\frac{\partial g}{\partial u} \times \frac{\partial g}{\partial v} &= \begin{vmatrix}
e_1 & e_2 & e_3 \\
-\sin u \sin v & \cos u \sin v & 0\\
\cos v \cos u & \cos v \sin u & - \sin v
\end{vmatrix}\\
&= (-\cos u \sin^2 v, - \sin u \sin^2 v, - \sin^2 u \sin v \cos v - \cos^2 u \sin v \cos v)\\
&= (-\cos u \sin^2 v, - \sin u \sin^2 v, - \sin v \cos v)
$$

$$
F(g(u,v)) = (\sin v \cos u, \sin u \sin v, \cos v)
$$

$$
\begin{aligned}
F(g(u,v)) \cdot (\frac{\partial g}{\partial u} \times \frac{\partial g}{\partial v})
&= - \cos^2 u \sin^3 v - \sin^2 u \sin^3 v - \sin v \cos^2 v\\
&= - \sin^3 v - \sin v \cos^2 v\\
&= - \sin v
\end{aligned}
$$

$$
\begin{aligned}
\text{fluxo} &= - \int^{2\pi}_0 \int^{\frac{\pi}{2}}_0 (- \sin v) \d v \d u\\
&= - \int^{2 \pi}_0 [\cos v]^{\frac{\pi}{2}}_0 \d u\\
&= - \int^{2\pi}_0 - 1 \d u
&= 2\pi
\end{aligned}
$$

OU

$$
\vec m (x,y,z) = (x,y,z)
$$

$$
F \cdot \vec m = (x,y,z) \cdot (x,y,z) = x^2+ y^2+ z^2 = 1
$$

$$
\text{fluxo} = \int_S F \vec m = \int_S 1 \d S = \text{área}(S) = 2 \pi
$$

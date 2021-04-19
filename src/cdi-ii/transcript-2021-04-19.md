Exemplos:

[imagem]

$$
\int \int_X \exp \left(\frac{x-y}{x+y} \right) \d x \d y
$$

$$
\begin{cases}
u = x - y\\
v = x + y
\end{cases}
$$

$$
\exp \left(\frac{x-y}{x+y} \right) = \exp \left(\frac{u}{v} \right)
$$

$$
\begin{cases}
u + v = 2x\\
v - y = 2y
\end{cases}
\Leftrightarrow
\begin{cases}
x = \frac{u+v}{2}\\
y = \frac{v-u}{2}
\end{cases}
$$

$$
\begin{array}{l l}
D\varphi (u,v)=\begin{bmatrix}
\frac{1}{2} & \frac{1}{2}\\
-\frac{1}{2} & \frac{1}{2}
\end{bmatrix}
&
\det = \frac{1}{4} - \left(-\frac{1}{4}\right) = \frac{1}{2}
\end{array}
$$

$\varphi$ é injetiva porque para cada $(x,y)$ corresponde um único $(u, v)$

$$
\int \int_X \exp \left(\frac{x-y}{x+y} \right) \d x \d y =
\int \int \exp \left(\frac{u}{v}\right) \cdot \frac{1}{2} \d u \d v
$$

$$
x+y \leq 1 \implies v \leq 1
$$

$x > 0: \frac{u+v}{2} > 0 \implies u > -v$
$y > 0: \frac{v-u}{2} > 0 \implies v > u$

[imagem]

$$
\begin{aligned}
\int^1_0 \int^v_{-v} \exp \left(\frac{u}{v} \right) \cdot \frac{1}{2} \d u \d v
&= \int^1_0 \left[\frac{v}{2} \exp\left(\frac{u}{v} \right) \right]^{u=v}_{u=-v}\d v\\
&= \int^1_0 \frac{ev}{2} - \frac{v}{2e} \d v\\
&= \left[\frac{ev^2}{4} - \frac{v^2}{4e}]^1_0\\
&= \frac{e}{4} - \frac{1}{4e}
\end{aligned}
$$

---

2:

Volume

$$
T = \{(x,y,z) \in \R^3: (\sqrt{x^2+y^2}- 2)^2 +z^2 < 1\}
$$

Fixando $z$:

$$
\begin{array}{l}
(\sqrt{x^2+y^2} - 2)^2 = 1-z^2\\
\sqrt{x^2+y^2}-2 = \pm \sqrt{1-z^2}\\
\sqrt{x^2+y^2} = 2 \pm \sqrt{1-z^2}
\end{array}
$$

Para cada $z$ fixo, a expressão acima representa uma circunferência.

$R = \sqrt{x^2+y^2}$

$(R-2)^2+z^2 < 1$

[imagem]

Coordenadas cilíndricas:

$$
\begin{cases}
x= R \cos \theta\\
y= R \sin \theta\\
z = z
\end{cases}
$$

Jacobiano = $R$  
$0 < \theta < 2\pi$

$(R, z) \in \text{círculo}$
$(R - 2)^2 + z < 1$

$$
\text{Volume}=\int^{2\pi}_0 \left(\int\int_{(R-2)^2+z^2<1} 1 \cdot R \d R \d z \right) \d \theta
$$

e a seguir polares em $(R, z)$

$$
\begin{cases}
R-2=\rho \cos \varphi
z = \rho \sin \varphi
\end{cases}
$$

[imagem]

$$
1 > (R-2)^2 + z^2 = \rho^2 \implies 0 < \rho < 1
$$

$0 < \varphi < 2\pi$

Jacobiana: $\rho$

$$
\begin{aligned}
\text{Volume} &= \int^{2\pi}_0 \left( \int^{2\pi}_0 \int^1_0 \right) ........\\
...?

&= \int^{2\pi}_0 \int^{2\pi}_0 \int^1_0 \rho^2 \cos \varphi + 2 \rho \d \rho \d \varphi \d \theta\\
&= \int^{2\pi}_0 \int^{2\pi}_0 \left[\frac{\rho^3}{3} \cos\varphi + \rho^2 \right]^1_0 \d \varphi \d \theta\\
&= \int^{2\pi}_0 \int^{2\pi}_0 \frac{\cos\varphi}{3} + 1 \d \varphi \d \theta\\
&= \int^{2\pi}_0 ....

\end{aligned}
$$

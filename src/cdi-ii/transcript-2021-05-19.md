Teorema:

$F: D \subset \R^n \to \R^n$ fechado e $D$ é simplesmente conexo $\implies F$ é gradiente em $D$

[esquema]

Exemplo:

$$
\begin{array}{ll}
F(x,y,z) = (y+x^3, y+x , e^z) & (x,y,z) \in \R^3
\end{array}
$$

Será que $F$ é gradiente?

Vamos ver se $F$ é fechado:

$$
\begin{array}{ll}
\frac{\partial(y+x^3)}{\partial y} = 1 & \frac{\partial (y+x)}{\partial x} = 1\\
\frac{\partial (y+x^3)}{\partial z} = 0 & \frac{\partial(e^z)}{\partial x} = 0\\
\frac{\partial(y+x)}{\partial z} = 0 & \frac{\partial (e^z)}{\partial y} = 0
\end{array}
$$

Logo $F$ é fechado e portanto é gradiente

**b) Calcule $\int_C F \d \vec g$**

**Interseção de $z = x^2+y^2$ e $z=1$ com orientação que quiser**

$$
\begin{cases}
z = x^2+y^2\\
z= 1
\end{cases}
\Leftrightarrow
\begin{cases}
x^2+y^2 = 1\\
z= 1
\end{cases}
$$

que corresponde a uma circunferência.

Logo, como a curva é fechada e o campo é conservativo, $\int_C F \d \vec g = 0$.

---

Teorema de Green

$D \subset \R^2$, $\partial D$ curva de classe $C^1$ com orientação canónica (conjunto à esquerda)

$F: D \to \R^2, C^1$

$$
\int_{\partial D} F \cdot \d \vec g = \int \int_D \left(\frac{\partial F_2}{\partial x} - \frac{\partial F_1}{\partial y} \right) \d x \d y
$$

Obs:

- $F$ fechado -> $\frac{\partial F_2}{\partial x} = \frac{\partial F_1}{\partial y} -> \int_{\partial D} F \d \vec g = 0  
  ($F$ tem de estar definida em $D$ para isto funcionar)

- $F: D \to \R^2$, $C_1$ e $C_2$ curvas fechadas em $D$

$$
\begin{aligned}
\int_{\partial D} F \cdot \d \vec g = 0 &\Leftrightarrow \int_{C_1} F \cdot \d \vec g + \int_{C_2} F \cdot \d \vec g = 0\\
&\Leftrightarrow \int_{C_1} F \cdot \d \vec g = - \int_{C_2} F \cdot \d \vec g\\
...
\end{aligned}
$$

Prop: Se duas curvas (...) têm a mesma orientação, $F: D \to \R^2$ fechado,

$$
\int_{C_1} F \cdot \d \vec g = \int_{C_2} F \cdot \d \vec g
$$

Exemplo:

$$
F(x,y) = \left(- \frac{y-1}{x^2+(y-1)^2}, \frac{x}{x^2+(y-1)^2}\right)
$$

**Seja $C$ a fronteira do quadrado de vértices $(3,0)$, $(0,3)$, $(-3,0)$ e $(0,-3)$ percorrida no sentido anti-horário.**  
**Qual o valor de $\int_C F \d \vec g$?**

$F$ é fechado (mas não é gradiente)

$C$ é homotópica a $C_2$

Logo $\int_C F \d \vec g = \int_{C_2} F \d \vec g$.

Parametrizar $C_2$:

$$
\begin{cases}
x = \cos t\\
y = \sin t + 1
\end{cases}
$$

$$
F(x,y) = \left(- \frac{y-1}{x^2 + (y-1)^2}, \frac{x}{x^2+(y-1)^2})
$$

$$
F(g(t)) = (-\frac{\sin t}{1}, \frac{\cos t}{1}) = (-\sin t, \cos t)
$$

$$
\begin{aligned}
\int_C F \d \vec g = \int_{C_2} F \d \vec g &= \int^{2\pi}_0 (-\sin t, \cos t) \cdot (-\sin t, \cos t) \d t\\
&= \int^{2\pi}_0 1 \d t = 2 \pi
\end{aligned}
$$

Exemplo:

$$
F(x,y) = (-y,x), D \subset \R^2
$$

$$
\begin{aligned}
\int_{\partial D} F \d \vec g &= \int \int_D \frac{\partial F_2}{\partial x} - \frac{\partial F_1}{\partial y} \d x \d y\\
&= \int \int_D 2 \d x \d y = 2 \text{Área}(D)
\end{aligned}
$$

$$
\text{Área} (D) = \frac{1}{2} \int_{\partial D} F \d \vec g
$$

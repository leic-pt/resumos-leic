$\int_C F \d \vec g$

$C$ é uma curva parametrizada por $g$
$F: \R^n \to \R^n$

- Se existir $\phi \in C^1$, $\phi : \R^n \to \R$, $\nabla \phi = F$, então
  $\int_C F \d \vec g = \phi (B) - \phi (A)$

$A$ ponto inicial, $B$ ponto inicial (final?)

- $F$ é conservativo se o valor do integral depender só dos extremos da curva
  gradiente $\implies$ conservativo

- $F$ é fechado se

$$
\frac{\partial F_i}{\partial x_j} = \frac{\partial F_j}{\partial x_i}, \forall i,j
$$

- Se $F$ gradiente com $phi \in C^2$, então $F$ é fechado.

Exemplo:

$$
F(x,y) = (\frac{y}{x^2+y^2}, -\frac{x}{x^2+y^2})
$$

**Será que $F$ é fechado?**

$$
\frac{\partial }{\partial y}\left(\frac{y}{x^2+y^2}\right) = \frac{\partial}{\partial x} \left(-\frac{x}{x^2+y^2} \right)
$$

$$
\frac{\partial }{\partial y}\left(\frac{y}{x^2+y^2}\right) = \frac{(x^2+y^2)-y\cdot 2y}{(x^2+y^2)^2} = \frac{x^2-y^2}{(x^2+y^2)^2}
$$

$$
\frac{\partial}{\partial x} \left(-\frac{x}{x^2+y^2} \right) = \frac{-(x^2+y^2) + x\cdot 2x}{(x^2+y^2)^2} = \frac{x^2-y^2}{(x^2+y^2)^2}
$$

Logo, $F$ é fechado.

No entanto, $F$ não é gradiente.

$$
\begin{array}{lll}
C=\{x^2+y^2 = 1\} & g(t) = (\cos t, \sin t) & t \in [0, 2\pi]
\end{array}
$$

$$
\int_C F \d g = \int^{2\pi}_0 F(g(t)) \cdot g'(t) \d t
$$

$$
\begin{array}{ll}
F(g(t)) = (\sin t, - \cos t) & g'(t) = (-\sin t, \cos t)\\
F(g(t)) \cdot g'(t) = -1 &
\end{array}
$$

Logo, $F$ não é gradiente

$$
\begin{array}{l}
F(x,y) = (\frac{y}{x^2+y^2}, -\frac{x}{x^2+y^2})\\
||F(x,y)|| = \sqrt{\frac{y^2}{(x^2+y^2)^2} + \frac{x^2}{(x^2+y^2)^2}} = \frac{1}{\sqrt{x^2+y^2}}
\end{array}
$$

---

Teorema

Um campo é gradiente se e só se é conservativo.

gradiente $\Leftrightarrow$ conservativo

Demonstração:

Gradiente $\implies$ conservativo

Se $F$ conservativo,
$\phi (x) = \int_C F \d \vec g$, $C$ ligando $A$ a $x$
está bem definido porque não depende da curva

......

Exemplo:

$F(x,y,z) = (y+z, x+z, y+x)$

1. **$F$ é fechado?**

$$
\begin{darray}{l}
\frac{\partial}{\partial y}(y+z) = \frac{\partial}{\partial x}(x+z) \Leftrightarrow 1 = 1\\
\frac{\partial}{\partial z}(y+z) = \frac{\partial}{\partial x}(x+z) \Leftrightarrow 1 = 1\\
\frac{\partial}{\partial z}(x+z) = \frac{\partial}{\partial y}(y+x) \Leftrightarrow 1 = 1
\end{array}
$$

Logo, $F$ é fechado.

2. **$F$ é gradiente?**

Será que $F$ = $\nabla \phi$?

$$
\begin{cases}
\frac{\partial \phi}{\partial x} = F_1 = y+z\\
\frac{\partial \phi}{\partial y} = F_2 = x+z\\
\frac{\partial \phi}{\partial z} = F_3 = x+y
\end{cases}
\Leftrightarrow
\begin{cases}
\phi(x,y,z) = (y+z) x + C_1(y,z)\\
\phi(x,y,z) = (x+z) y + C_2(x,z)\\
\phi(x,y,z) = (x+y) z + C_3(x,y)
\end{cases}
$$

$$
\begin{aligned}
\phi(x,y,z) &= xy+yz+zx\\
&=xy+zxx+yz\\
&=xy+zy+xz\\
&=xz+yz+xy
\end{aligned}
$$

(.......)

3. **$\int_C F \d \vec g$ $C = \{z=0, x=\frac{1+y^4}{2}, y \in [0,1]\}$**

Ponto inicial $(\frac{1}{2}, 0, 0)$  
Ponto final $(1,1,0)$

$$
\int_C F \d \vec g = \phi(1,1,0) - \phi(\frac{1}{2}, 0, 0) = (1+0+0) - (0+0+0) = 1
$$

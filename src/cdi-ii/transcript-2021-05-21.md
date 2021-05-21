[esquema]

$C_1$ e $C_2$ homotópicas no domínio de $F$ (com orientações iguais)

$$
\int_A^B F \d \vec g = \phi(B) - \phi(A)
$$

Teorema de Green

$D \subset \R^2$, $\partial D$ orientação canónica

$\oint_{\partial D} F \d g = \int \int_D \left(\frac{\partial F_2}{\partial x} - \frac{\partial F_1}{\partial y} \right) \d x \d y$

$F: D \to \R^2 C^1$

### Exemplos

1. $\int_{\partial D} (e^{x^2} - 3y, \arctan y + x) \d \vec g$

$\partial D$ é a fronteira do quadrado $[-1, 1] \times [-1, 1]$ percorrida no sentido direto

**NOTA:** Sentido direto = Sentido Positivo = Sentido Anti-Horário

Será que $F$ é fechado?

$$
\begin{array}{ll}
\frac{\partial F_1}{\partial y} = -3 & \frac{\partial F_2}{\partial x} = 1
\end{array}
$$

Como são diferentes, não, $F$ não é fechado.

Teorema de Green:

$$
\begin{aligned}
\int_{\partial D} (e^x-3y, \arctan y + x) \d \vec g & = \int \int _D 1 - (-3) \d x \d y\\
&= 4 \text{Área}(D)
&= 4\times 4 = 16
\end{aligned}
$$

---

2. $$
   \begin{array}{ll}
   F(x,y) = \left(\frac{x}{x^2+y^2}, \frac{y}{x^2+y^2} \right)
   & F: \R^2 \backslash \{(0,0)\} \to \R^2
   \end{array}
   $$

a) Será que $F$ é fechado?

$$
\frac{\partial}{\partial x} \left(\frac{y}{x^2 + y^2} \right) = \frac{-y\cdot (2x)}{(x^2+y^2)^2} = \frac{-2xy}{(x^2+y^2)^2}
$$

$$
\frac{\partial}{\partial y} \left(\frac{x}{x^2 + y^2} \right) = \frac{-x\cdot (2y)}{(x^2+y^2)^2} = \frac{-2xy}{(x^2+y^2)^2}
$$

b) Será que $F$ é gradiente?

Será que existe $\nabla \phi = F$?

$$
\begin{cases}
\frac{\partial \phi}{\partial x} = \frac{x}{x^2+y^2}\\
\frac{\partial \phi}{\partial y} = \frac{y}{x^2+y^2}
\end{cases}
\Leftrightarrow
\begin{cases}
\phi(x,y) = \frac{1}{2} \log(x^2+y^2) + C_1(y)\\
\phi(x,y) = \frac{1}{2} \log(x^2+y^2) + C_2(x)
\end{cases}
$$

Escolhendo $C_1 = C_2 = 0$, $\phi = \frac{1}{2} \ln(x^2+y^2)$ é um potencial de $F$.

Logo, $F$ é gradiente.

c)

$$
C = \{(x,y) \in \R^2 : x = \frac{(1+y)^4}{2} , 0 \leq y \leq 1 \}
$$

percorrida no sentido dos $yy$ decrescentes

$$
\int_C F \d \vec g = \phi (B) - \phi (A) = \frac{1}{2} \ln (\frac{1}{4}) - \frac{1}{2} \ln (64 + 1)
$$

Ponto inicial: $A$ = (8,1)$  
Ponto final: $B = (\frac{1}{2}, 0)$

---

Ex 2. Ficha 12

$$
F(x,y) = \left(\frac{y}{(x+1)^2 + y^2} - \frac{y}{(x-1)^2 + y^2}, \frac{-(x+1)}{(x+1)^2 + y^2} + \frac{x-1}{(x-1)^2 + y^2} \right)
$$

$F: \R^2 \backslash \{(1,0), (-1,0)\} \to \R^2$

não é simplesmente conexo

Calcule o trabalho de $F$ ao longo de (percorrido no sentido horário):

a) $(x+1)^2 +y^2 = 1$

$G_{-1}$: ralo centrado em $(-1,0)$  
$G_1$: ralo centrado em $(1,0)$

$G_{-1}: \R^2\backslash \{(-1,0)\} \to \R^2$  
$G_1: \R^2 \backslash \{(1,0)\} \to \R^2$

$F = G_{-1} + G_1$

$$
\oint_{C_1} F = \oint_{C_1} G_{-1} + \oint_{C_1} C_1
$$

$$
\oint_{C_1} G_{-1}
$$

É bom integrar raos de banheira em circunferências centradas no ralo!

Parametrizar $C_1$:

$$
\begin{cases}
x = \cos t - 1\\
y = \sin t
\end{cases}
$$

$$
\begin{array}{l}
g(t) = (\cos t - 1, \sin t)\\
g'(t) = (-\sin t, \cos t)
\end{array}
$$

$$
G_{-1}(x,y) = \left(\frac{y}{(x+1)^2+y^2}, \frac{-(x+1)}{(x+1)^2 +y^2} \right)
$$

$$
G_1(g(t)) = (\sin t, -\cos t)
$$

$$
G_{-1} (g(t)) \cdot g'(t) = -1
$$

$$
\oint_{C_1} G_{-1} = - \int_0^{2\pi} -1 \d t = 2 \pi
$$

...

No domínio de $G_1$, $C_1$ é homotópica a um ponto

$G_1$ é fechado (porque é ralo de banheira)

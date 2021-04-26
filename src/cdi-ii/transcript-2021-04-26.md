$$
F: \R^n \times \R^m \to \R^m, C^1
$$

$F = 0$ conjunto de nível

$a = (x_0, y_0) \in$ conjunto de nível

$F = (F_1, \dots, \F_m)$

$$
\begin{cases}
F_1 = 0\\
F_2 = 0\\
\vdots\\
F_m = 0
$$

Se eu fixar as primeiras incógnitas $(x)$, o sistema passa a ter $m$ incógnitas.
Se o sistema for possível e determinado, para cada $x \in \R^n$ fixo, sei exatamente os $y \in \R^m$ correspondentes.

$y = y(x)$ para cada $x$ tal que $F(x, y(x)) = 0$

## Teorema da Função Implícita

Se $\det D_yF(a) \ne 0$ (o determinante da jacobiana relativa às variáveis que vão ficar dependentes).

então, numa vizinhança de $a$, $y=y(x)$ e $F(x,y(x)) = $.

$D_x y = -(D_yF)^{-1} D_xF$

Exemplo:

$$
\begin{array}{l l}
x^3 + x^2y + e^{y^2-1} = 3 & a = (1,1)
\end{array}
$$

$y = y(x)$

- $F(x,y) = x^3+x^2y+e^{y^2-1} - 3$
- $F \in \C^1$
- $F(a) = 0 \Leftrightarrow F(1,1) = 1+1+1-3 = 0$
- $\det D_yF = x^2+2ye^{y^2-1} \big|_{(x,y) = (1,1)} = 1+2=3 \ne 0$

Pelo Teorema da Função Implícita, numa vizinhança de $(1,1)$, $y = y(x)$ e $F(x,y(x)) = 0$

[imagem]

$y'(1), y''(1) = ?$

$y(1) = 1$

$$
y'(1) = -(\frac{\partial F}{\partial y})^{-1} \cdot \frac{\partial F}{\partial x} = - \frac{1}{3} \cdot \frac{\partial F}{\partial x}(1,1) = -\frac{5}{3}
$$

$\frac{\partial F}{\partial x}(1,1) = 5$

$$
F(x,y(x)) = 0 \quad \forall x \text{na vizinhança de } 1
$$

$$
\begin{aligned}
\frac{\d}{\d x} F(x,y(x)) = 0 &\Leftrightarrow \frac{\partial F}{\partial x} (x,y(x)) + \frac{\partial F}{\partial y} (x,y(x)) \cdot \frac{\partial y}{\partial x} = 0\\
&\Leftrightarrow y'=\frac{\partial y}{\partial x} = - (\frac{\partial F}{\partial y})^{-1} \frac{\partial F}{\partial x}
\end{aligned}
$$

$$
\begin{aligned}
\frac{\d^2}{\d x^2}(F(x,y(x))) = 0 & \Leftrightarrow \frac{\d}{\d x}(\frac{\partial F}{\partial x}(x,y(x)) + \frac{\partial F}{\partial y}(x,y(x)) \cdot y'(x)) = 0\\
&\Leftrightarrow ...
\end{aligned}
$$

$$
F(x,y) = x^3+x^2y + e^{y^2-1} -3
$$

$$
\frac{\partial F}{\partial x} = 3x^2 + 2xy
$$

$$
\frac{\partial F}{\partial y} = x^2 + 2ye^{y^2-1}
$$

$$
\frac{\partial F}{\partial y}(1,1) = 3
$$

$$
\frac{\partial^2 F}{\partial x^2} = 6x +2y
$$

$$
\frac{\partial^2 F}{\partial x \partial y} = 2x
$$

$$
\frac{\partial^2 F}{\partial y^2} = 4y^2e^{y^2-1} + 2e^{y^2-1}
$$

$$
x,y=1
$$

$$
\frac{\partial^2 F}{\partial x^2} = 8
$$

$$
\frac{\partial^2 F}{\partial x \partial y} = 2
$$

$$
\frac{\partial^2 F}{\partial y^2} = 6
$$

Então,

$$
\begin{array}{l}
8+2y'(1) + (2+6\cdot y'(1)) \cdot y'(1) + 3y''(1) = 0\\
y'(1) = -\frac{5}{3}\\
y''(1) = -\frac{1}{3} (8+2y'(1) + 2y'(1) + 6(y'(1))^2) = ...
\end{array}
$$

---

Exemplo:

$F(x,y) = xy, C^1$

$F=0 \Leftrightarrow x=0\lor y=0$

[imagem]

$(x_0, y_0) = (0,0), \quad F(x_0, y_0)$

$y = y(x)?$

$$
\frac{\partial F}{\partial \y} = x |_{x_0,y_0 = 0} = 0
$$

$x = x(y)?$

$$
\frac{\partial F}{\partial \x} = y |_{x_0,y_0 = 0} = 0
$$

noutro ponto:

$(x_0, y_0) = (0,0)$

$x = x(y)?$

$$
\frac{\partial F}{\partial \x} = y |_{(x_0,y_0) = (0,1)} = 1
$$

O Teorema da Função Implícita aplica-se.

Neste caso, $x(y) = 0$.

...

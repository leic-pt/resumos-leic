$D \subset \R^2$ aberto limitado

$\partial D$ - bordo de $D$ (fronteira)

Orientação canónica de $\partial D$: é a orientação que deixa o conjunto do lado esquerdo da curva

Teorema de Green

Se $F = (P, Q)$, $F: \R^2 \to \R^2$ e é de classe $C^1$.

Então

$$
\oint_{\partial D} F \d g = \oint_{\partial D} P \d x + Q \d y = \int \int_{D} \left(\frac{\partial Q}{\partial x}- \frac{\partial P}{\partial y} \right) \d x \d y
$$

Exemplo:

$F(x,y) = \left(-\frac{1}{3} y^3, \frac{1}{3}x^3 \right)$

$C$: circunferência $x^2+y^2=10$ orientada no sentido horário.

$\oint_C F = ?$

$C = \partial D$ com a orientação contrária à canónica

$\oint_C F \d g = - \oint_{\partial D} F \d g$

$$
\begin{aligned}
\oint_{\partial D} F \d g &= \int \int_D (x^2-(-y^2)) \d x \d y\\
&= \int^{2\pi}_0 \int^{\sqrt{10}}_0 r^2 \cdot r \d r \d \theta\\
&= \int^{2\pi}_0 \left[\frac{r^4}{4}]^{\sqrt{10}}_0 \d \theta\\
&= 50 \pi
\end{aligned}
$$

$$
\oint_C F \d g = -50 \pi
$$

Nota:

Se $F: D \subset \R^2 \to \R^2$, $F=(P,Q)$, $C^1$ fechado ($\Leftrightarrow \frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x}$)

$$
\oint_{\partial D} F = \int \int_D \left( \frac{\partial P}{\partial y} = \frac{\partial Q}{\partial x} \right) \d x \d y = 0
$$

"Um campo fechado é conservativo nas curvas que delimitam regiões onde $F$ esteja definido."

Exemplo:

"Ralo de Banheira"

$F: \R^2 \backslash \{(0,0)\} \to \R^2$

$$
F(x,y) = \left( -\frac{y}{x^2+y^2}, \frac{x}{x^2+y^2} \right)
$$

Fechado não é gradiente

$(x,y) \ne (0,0)$

Restringir o ralo de banheira a $x > 0$

$$
-\frac{y}{x^2+y^2} = -\frac{1}{x^2} \left( \frac{y}{1+\left(\frac{y}{x}\right)^2} \right) = \frac{-\frac{y}{x^2}}{1+\left(\frac{y}{x} \right)^2}
= \frac{\partial}{\partial x} \left(\arctan \left(\frac{y}{x}\right) \right)
$$

$$
\frac{x}{x^2+y^2} = \frac{\frac{1}{x}}{1+ \left(\frac{y}{x} \right)^2} = ...
$$

$F(x,y) = \nabla(\arctan(\frac{y}{x}))$ -> $F$ restrito a $x>0$ é gradiente!

O domínio influencia a propriedade de ser gradiente!

### Homotopia

Dadas duas curvas $C_1$ e $C_2$ num domínio $D$ dizemos que $C_1$ e $C_2$ são homotópicas se eu consigo deformar $C_1$ e chegar a $C_2$ sem sair de $D$.

Def: Um domínio $D$ é simplesmente conexo se qualquer curva em $D$ for homotópica a um ponto.

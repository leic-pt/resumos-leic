$f: I \to \R$ , $I = ]a_1, b_1[ \times \dots \times ]a_n, b_n[$
Teorema de Fubini

$$
\int_I f = \int^{b_1}_{a_1} \left ( \int^{b2}_{a2} \dots \left( \int^{b_n}_{a_n} fdx_n \right)\dots dx_2\right) dx_1
$$

A ordem de integração não importa

"Área = $\int$ comprimento, Volume = $\int$ Área, \dots"

[imagem]

Área = $\int^b_a$ comprimento $(x) dx$ = \int^b*a(f(x)-g(a)) dx$
$=\int^b_a(\int^{f(x)}*{g(x)} 1 dy) dx=$
Fubini $= \int \mathbb{1}_A (x,y) dxdy$

$$
\mathbb{1} A =
\begin{cases}
1&,&(x,y) \in A\\
0&,&(x,y)\nin A
\end{cases}
$$

Def:
Volume $n$-dimensional de um conjunto $A$ $= \int \mathbb{1}_A$

Exemplo:

[imagem]

$$
\{x> 0, y> 0, z > 0, x+y+z<1\}
$$

Volume?

$\text{Volume} = \int^1_0 \text{Área}(z) dz$

Fixado $z$,

[imagem]

$$
\begin{cases}
x>0\\
y>0\\
x+y<1-z
\end{cases}
$$

$\text{Área} = \int^{1-z}_0(\int^{1-z-x}_0 1 dy) dx$

$\text{Volume} = \int^1_0 (\int^{1-z}_0(\int^{1-z-x}_0 1 dy) dx) dz$
$=\int^1_0 (\int^{1-z}_0(1-z-x) dx) dz=$
$=\int^1_0 [(1-z)x - \frac{x^2}{2}]^{1-z}_0 dz=$
$=\int^1_0 ((1-z)^2 - \frac{(1-z)^2}{2} - 0) dz=$
$=\int^1_0 \frac{(1-z)^2}{2} dz = [-\frac{(1-z)^3}{6}]^1_0 = 0 - (-\frac{1}{6}) = \frac{1}{6}$

Exemplo

$S={(x,y) \in \R^2, y> x^2, y < 1-x^2}$

[imagem]

$$
\begin{cases}
y=x^2\\
y=1-x^2
\end{cases}
\Leftrightarrow
\begin{cases}
1-x^2= x^2\\
y=x^2
\end{cases}
\Leftrightarrow
1=2x^2
\Leftrightarrow
x=\pm \frac{\sqrt 2}{2}
$$

Fixando primeiro $x$:

$\text{Área} = \int^{\frac{\sqrt 2}{2}}_{-\frac{\sqrt 2}{2}} (\int^{1-x^2}_{x^2} 1 dy)dx=$
$=\int^{\frac{\sqrt 2}{2}}_{-\frac{\sqrt 2}{2}} 1-x^2-x^2 dx=$
$=\int^{\frac{\sqrt 2}{2}}_{-\frac{\sqrt 2}{2}} 1-2x^2 dx=$
$=[x-\frac{2x^3}{3}]^{\frac{\sqrt 2}{2}}_{-\frac{\sqrt 2}{2}}=$
$=\frac{\sqrt 2}{2} - \frac{2 \frac{2\sqrt 2}{8}}{3} - (-\frac{\sqrt 2}{2} - \frac{2 ( -\frac{2\sqrt 2}{8})}{3})=$
$=\frac{\sqrt 2}{2} - \frac{\sqrt 2}{6} +\frac{\sqrt 2}{2} - \frac{\sqrt 2}{6}$
$=\frac{2\sqrt{2}}{3}$

Fixando primeiro $y$:

[imagem]

$\int^1_0 \text{comprimento}(y) dy$

$...$

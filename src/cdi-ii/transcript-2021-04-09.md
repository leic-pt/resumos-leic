Volume de $\{0 \leq z \leq x^2 +y^2 , 0 \leq x,y \leq 1\}$

[imagem]

$z=x^2+y^2$ Parabolóide
$x^2+y^2 =\R^2 = z$

Fixando $x$ primeiro: ($0 \leq x \leq 1$)

[imagem]

$0 \leq z$
$z \leq x^2+y^2$
$0 \leq y \leq 1$

Fixando $y$ ($0 \leq y \leq 1$) $0 \leq z \leq x^2+y^2$

Volume= $\int^1_0 \left(\int^1_0 \left(\int^{x^2+y^2}_0 1 \d z \right) \d y \right) \d x$

OU

Fixando $z$ primeiro $(0 \leq z \leq 2)

[imagem]

$0 \leq x,y \leq 1$
$z \leq x^2+y^2$

$\sqrt{z} < 1 \Leftrightarrow z < 1$

[imagem]

$1 < z < 2$

Fixando $x$:

($z=x^2+y^2 \Rightarrow y = \sqrt{z-x^2})

Se $0 < x < \sqrt{z}$, então $\sqrt{z-x^2} < y < 1$
Se $\sqrt z < x < 1$, então $0 < y < 1$

Fixando $x$:

$\sqrt{z-1} \leq x \leq 1$
$\sqrt{z-x^2} \leq y \leq 1$

Volume:

$$
\int^1_0 \left( \int^{\sqrt z}_{0} \left(\int^1_{\sqrt{z-x^2}} 1 \d y \right) \d x \right) \d z +
\int^1_0\left( \int^1_{\sqrt z} \left(\int^1_0 1 \d y \right) \d x \right) \d z +
\int^2_1\left( \int^1_{\sqrt{z-1}} \left(\int^1_{\sqrt{z-x^2}} 1 \d y \right) \d x \right) \d z
$$

Exemplo 2

$\{\frac{x}{2} \leq y \leq x, 0 \leq z \leq x, 0 \leq x \leq 1\}$

Escreva o volume como um integral nas ordens

a) $\int(\int(\int \d x) \d z) \d y$
b) $\int(\int(\int \d z) \d y) \d x$

a) Fixando $0 \leq y \leq 1$ ($0 \leq \frac x2 \leq y \leq x \leq 1$)

Se $y < \frac{1}{2}$
[imagem]

$0 \leq x \leq 1$
$0 \leq z \leq x$
$\frac{x}{2} \leq y \leq x$

$x \leq 2y$
$2y \leq 1 \Leftrightarrow y \leq \frac{1}{2}$

Fixando $z$,
$0 < z < y, y < x < 2y$
$y < z < 2y, z < x < 2y$

Se $y > \frac{1}{2}$
[imagem]

Fixando $z$,
$0 < z < y, y < x < 1$
$y < z < 1, z < x < 1$

$$
...
$$

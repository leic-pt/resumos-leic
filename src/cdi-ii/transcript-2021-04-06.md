$f: I \to \R$, sendo $I$ um intervalo em $\R^n$

$\underline{\int_I}f=0$ o maior volume (n+1)-dimensional por defeito
$\overline{\int_I}f=0$ o menor volume (n+1)-dimensional por excesso

$f$ integrável $\Leftrightarrow$ $\overline{\int_I}f=\underline{\int_I}f$ e $\int_I f=\overline{\int_I}f=\underline{\int_I}f$

---

Exemplo:

[imagem]

$$
A=\int^b_a f(x) dx - \int^b_a g(x) dx= \int^b_a(f(x)-g(x)) dx= \int^b_a \text{comprimento} dx
= \int^b_a(\int^{f(x)}_{g(x)} 1 dy) dx
$$

Área = integral do comprimento

Volume = $\int^b_a$ Área $(x) dx$

## Teorema de Fubini

Se $f: I \to \R$, $I$ intervalo em $\R^n$, for integrável em todas as variáveis, então, se $I = ]a_1,b_1[ \times \dots \times ]a_n,b_n[$

$\int_I f= $\int^{b_n}_{a_n} \left( \int^{b_{n+1}}_{a_{n+1}} ... \left(\int^{b_1}_{a_1} f(x) dx_1 \right) \dots \right) dx_n$

não interessa a ordem das variáveis

$I = ]0, 1[\times ] 2, [$

$\int_I f = \int^1_0 (\int^3_2 f dy)dx = \int^3_2 ( \int^1_0 f dx)dy$

Exemplos:

$I = ]0, 1[ \times ]0, 1[$

$f(x,y) = x(x^2+y)^2$

$\int_I f = \int^1_0 ( \int^1_0 f(x,y) dx) dy = \int^1_0(\int^1_0 x(x^2+y)^2 dx) dy$
$= \frac 12 \int^1_0 ( \int^1_0 2x(x^2+y)^2 dx) dy = \frac 12 \int^1_0 [\frac{(x^2+y)^3}{3}]^1_0 dy$
$= \frac 12 \int^1_0 ( \frac{(1+y)^3}{3} - \frac{y^3}{3})dy = \frac 12 [\frac{(1+y)^4}{3\times 4} - \frac{y^4}{3\times 4}]^1_0$
$= \frac 12 ((\frac{2^4}{12}- \frac{1}{12})-(\frac{1}{12} - 0)) = \frac{1}{2} \cdot \frac{14}{12} = \frac{7}{12}$

Exemplo:

$I = ]0,1[ \times ]0, 2[$

$$
f(x,y) =
\begin{cases}
x^3y & x^2 < y <2x^2\\
0 & \text{c.c.}
\end{cases}
$$

[imagem]

$\int_I f = \int^1_0 (\int^2_0 f(x,y) dy)dx = \int^1_0 (\int^{2x^2}_{x^2} x^3 y dy)dx$
$=\int^1_0 [x^3 \frac{y^2}{2}]^{2x^2}_{x^2} dx = \int^1_0 (x^3\frac{(2x^2)^2}{2} - \frac{x^3(x^2)^2}{2}) dx$
$=\int^1_0 2x^7 - \frac{x^7}{2} dx = \int^1_0 \frac{3}{2} x^7 dx = \frac{3}{2} [\frac{x^8}{8}]^1_0$
$=\frac{3}{2} \cdot (\frac{1}{8} - 0) - \frac{3}{16}$

Porquê integrar primeiro em $y$ e depois em $x$:

[imagens]

$\int^1_0 ( \int^{\sqrt{y}}_{\frac{\sqrt{y}}{2}} f(x,y) dx)dy + \int^2_1 ( \int^1_{\frac{\sqrt y}{2}} f(x,y) dx=) dy$

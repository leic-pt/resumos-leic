Dada uma variedade $M$ e $f: M \to \R$, como definir $\int_M f$?

Por exemplo, $\dim M = 1$ e sendo $M$ um caminho em $\R^n$

Considerando n = 2:

[imagem]

$$
\int_M f = \int^b_a f(g(t)) ||g'(t)|| \d t
$$

Integral de um campo escalar (porque $f \to \R$) numa variedade de $\dim 1$
OU integral de linha de um campo escalar.

---

Exemplo:

$x^2+y^2=1$ circunferência

Qual o perímetro (comprimento) da circunferência?

$$
\int_{x^2+y^2=1} 1 \d \gamma
$$

$$
\begin{array}{ll}
g(t) = (\cos t, \sin t) & t \in ]0, 2\pi[
\end{array}
$$

$$
\begin{array}{ll}
g'(t) = (-\sin t, \cos t) & ||g'(t)|| = \sqrt{\sin^2t + \cos^2t} = 1
\end{array}
$$

$$
\int_{x^2+y^2=1} 1 \d \gamma = \int^{2\pi}_{0} 1 \cdot ||g'(t)|| \d t =
\int^{2\pi}_{0} 1 \d t = 2\pi
$$

---

Exemplo:

Segmento que une $(1,0,1)$ a $(0,1,0)$.

Densidade de massa é $z^2$

Massa do segmento = $\int_{\text{segmento}} \text{densidade de massa}$

$g(t) = (1,0,1) + t((0,1,0) - (1,0,1))$, $t \in [0,1]$

$g(1) = (0,1,0)$

$g(t) = (1,0,1) + t(-1,1,-1) = (1-t, t, 1-t)$

$g'(t) = (-1,1,-1)$

$$
\begin{aligned}
\text{Massa} &= \int_{\text{segmento}} z^2 \d \gamma\\
&= \int^1_0 (1-t)^2 \sqrt{3} \d t\\
&= \sqrt{3} \left[- \frac{(1-t)^3}{3} \right]^1_0\\
&= \sqrt{3} \left(0 - \left(-\frac{1}{3} \right) \right)\\
&= \frac{\sqrt{3}}{3}
\end{aligned}
$$

Centroide:

$\overline x = \frac{\int_M x}{\int_M 1}$

$\overline y = \frac{\int_M y}{\int_M 1}$

As definições de quantidades físicas em regiões de $\R^2$ e $\R^3$ têm definições idênticas no contexto.

Exemplo:

$M = \{ y = x^2, x \in ]-1, 1[\}$

Qual o centroide de $M$?

$g(t) = (t, t^2), t \in ]-1,1[$

$g'(t) = (1,2t), ||g'(t)|| = \sqrt{1 + 4t^2}$

$\int_M 1 \d \gamma = \int^1_{-1} \sqrt{1 + 4t^2} \d t$

$$
\overline x = \frac{\int_M x \d \gamma}{\int_M 1 \d \gamma} =
\frac{\int^1_{-1} t \sqrt{1+4t^2} \d t}{\int^1_{-1} \sqrt{1+4t^2} \d t}
$$

$$
\overline y = \frac{\int_M y \d \gamma}{\int_M 1 \d \gamma} =
\frac{\int^1_{-1} t^2 \sqrt{1+4t^2} \d t}{\int^1_{-1} \sqrt{1+4t^2} \d t}
$$

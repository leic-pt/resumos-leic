[imagens]

Tomando como exemplo:

$$
A = \{ (x,y) \in \R^2: 1\leq x^2+y^2 \leq 4 \quad,\quad x > 0, y> 0\}
$$

$$
\begin{cases}
x = r \cos \theta\\
y = r \sin \theta
\end{cases}
$$

[imagem]

$$
A=\{ 1 \leq r \leq 2, 0 < \theta < \frac{\pi}{2}\}
$$

Nas variáveis $(r, \theta)$,
$A ~= [1,2] \times ]0, \frac{pi}{2}[$

[imagem]

As áreas não são iguais nas duas figuras.

Não basta passar para o plano $(r, \theta)$ e fazer o integral.
Temos de saber o peso relativo de cada quadrado no plano $(r, \theta)$.

$\d x \d y \to |\operatorname{det} D\varphi(r,\theta)| \d r \d \theta$,
sendo $|\operatorname{det} D\varphi(r,\theta)|$ o peso de cada quadrado.

Neste caso, $varphi(r,\theta) = (r\cos \theta, r \sin \theta)$.

$$
D\varphi (r,\theta)=
\begin{bmatrix}
\cos \theta & -r \sin \theta\\
\sin \theta & r \cos \theta
\end{bmatrix}
$$

Então:

$det = r \cos^2 \theta + r \sin^2 \theta = r$
$|det D\varphi| = r$

$$
\begin{aligned}
\int_A 1 \d x \d y &= \int^{\frac{pi}{2}}_0 \int^2_1 1 \cdot r \d r \d \theta\\
&= \int^{\frac{pi}{2}}_0 \left[\frac{r^2}{2} \right]^2_1 \d \theta\\
&= \int^{\frac{pi}{2}}_0 \left(2- \frac{1}{2} \right) \d \theta\\
&= \frac{3}{2} \cdot \frac{\pi}{2}\\
&= \frac{3\pi}{4}
\end{aligned}
$$

Def. (Transformação de coordenadas)

- $g: U \subset \R^n \to V \subset \R^n$, com $U,V$ abertos
- $g$ é injetiva
- $g$ é de classe $C^1$
- $det D_g \ne 0$

## Teorema de Mudança de Variáveis

$$
\int_V f(x_1,\dots,x_n) \d x_1 \dots \d x_n = \int_U f(g(y_1,\dots,y_n))|det Dg| \d y_1 \dots \d y_n
$$

Nota: em $n=1$

$$
\int_{[a,b]} f(x) \d x= \int_{[c,d]}f(\varphi (t)) |\varphi'(t)| \d t
$$

Exemplo:
Área de círculo de raio $R$

[imagem]

$$
\begin{cases}
x = r \cos \theta\\
y = r \sin \theta
\end{cases}
$$

$|det Dg| = r$

$0 \leq r \leq R$, $0 \leq \theta \leq 2\pi$
$r = 0 \implies det Dg = 0$
$0 < r \leq R$ já não tenho problemas com o $det Dg$
$0 < 2 < 2\pi$ já não tenho problemas com a injetividade

$$
\begin{aligned}
\text{Área} &= \int_{\text{circulo}} 1 \d x \d y\\
&= \int_{]0,r] \times ]0, 2 \pi[} 1 \times r \d r \d \theta\\
&= \int^R_0\left(\int^{2\pi}_0 r \d \theta \right) \d r\\
&= \int^R_0 2\pi r \d r\\
&= \left[2 \pi \frac{\pi^2}{2} \right]^R_0\\
&= \pi \R^2
\end{aligned}
$$

$g: U \to V$ mudança de coordenadas $g(y_1, \dots, y_n) = (x_1, \dots, x_n)$

$$
\int_V f(x_1, \dots, x_n) \d x_1 \dots \d x_n = \int_U f(g(y_1, \dots, y_n)) | \det Dg| \d y_1 \dots \d y_n
$$

---

Aplicações do integral:

Sendo $S$ um sólido em $\R^3$
$f$ - densidade de massa do sólido $S$

Massa de S = $\int_S f$

Centro de massa: $(\overline x, \overline y, \overline z)$

$$
\overline x = \frac{\int_S xf}{\int_S f} = \frac{1}{\text{Massa}} \cdot \int_S xf
$$

$$
\overline y = \frac{\int_S yf}{\int_S f} = \frac{1}{\text{Massa}} \cdot \int_S yf
$$

$$
\overline z = \frac{\int_S zf}{\int_S f} = \frac{1}{\text{Massa}} \cdot \int_S zf
$$

No caso $f=1$, $(\overline x, \overline y, \overline z)$ chama-se centroide.

$$
\overline x = \frac{\int_S x}{\int_S 1}
$$

Momento de inércia em relação a um eixo (por ex. eixo $zz$).

$$
I_z = \int_S f\cdot (\underbrace{\text{distância de um ponto ao eixo dos }zz}{\sqrt{x^2+y^2}})^2 = \int_S f\cdot (x^2+y^2)
$$

$$
I_y = \int_S f\cdot (x^2+z^2)
$$

Em geral,

$$
I_L = \int_S \operatorname{densidade} \times \operatorname{distância à lateral}
$$

---

1.

$$
V = \{(x,y,z) \in \R^3: x^2+y^2\leq 1, x^2+y^2 \leq z \leq 3-x^2-y^2 \}
$$

Densidade de massa $f(x,y,z) = z^2$
Qual a massa de $V$?

$\int_V z^2 \d x \d y \d z$

$V$ é sólido de revolução em torno do eixo dos $z$.

Em coordenadas cilíndricas,

$$
\begin{cases}
x = r \cos \theta\\
y = r \sin \theta\\
z = z
\end{cases}
$$

$$
\begin{array}{l l}
r^2 \leq 1 & r^2 \leq z \leq 3 - r^2\\
\theta \text{não tem restrições} & \theta \in ]0, 2\pi [\\
0 \leq r \leq 1 &
\end{array}
$$

[imagem]

$$
\begin{aligned}
\text{Massa} &= \int^1_0 \int^{2\pi}_0 \int^{3-r^2}_{r^2} z^2 \cdot r \d z \d \theta \d r\\
&= \int^1_0 \int^{2\pi}_0 \left[\frac{z^3}{3} \cdot r \right]^{z=3-r^2}_{r=r^2} \d \theta \d r\\
&= \int^1_0 \int^{2\pi}_0 \left(\frac{(3-r^2)^3}{3} \cdot r - \frac{r^6}{3} \cdot r \right) \d \theta \d r\\
&= 2\pi \int^1_0 \left(\frac{(3-r^2)^3}{-2\times 3} \cdot (-2r) - \frac{r^7}{3} \right) \d r\\
&= 2\pi \left[\frac{(3-r^2)^4}{-2\times 3 \times 4} - \frac{r^8}{3 \times 8} \right]^1_0\\
&= 2\pi \left(\left(-\frac{16}{24} - \frac{1}{24} \right) - \frac{81}{-24}\right)\\
&= 2\pi \frac{64}{24}
$$

---

$$
A = \{(x,y,z) \in \R^3: 1 \leq x^2+ y^2 + z^2 \leq 4, z^2 \leq x^2 + y^2, x \gte 0, y \gte 0 \}
$$

$z^2=x^2+y^2$

Para cada $z$ fixo, circunferência no plano $xy$ de raio $r = |z|$

[imagem] -> cone (o de cima e o de baixo)

Em coordenadas esféricas:

$1 \leq r \leq 2$
$\frac{\pi}{4} \leq \varphi \leq \frac{3\pi}{4}$
$0 \leq \theta \leq \frac{\pi}{2}$

$$
\text{Massa de} A = \int^2_1 \int^{\frac{3\pi}{4}}_{\frac{\pi}{4}} \int^{\frac{\pi}{2}}_0 r^2 \sin^2 \varphi \times (r^2 \sin \varphi) \d \theta \d \varphi \d r
$$

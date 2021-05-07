$M = \{x \in \R^n: F_1(x) = 0, \dots, F_{n-m}(x) = 0 \}$ variedade de $\dim m$

$f: M \to \R$, $C^1$

$a$ é ponto de máximo (ou mínimo) se:

$$
\begin{cases}
\nabla(f - \lambda_1 F_1 - \dots - \lambda_{n-m} F_{n-m}) (a) = 0\\
F_1(a) = 0\\
\vdots\\
F_{n-m}(a) = 0
\end{cases}
\lambda_j : \text{Multiplicadores de Lagrange}
$$

---

Exemplos:
Quais os pontos que estão na interseção do plano $x+z=1$ com $z = x^2+y^2$ e que estão mais próximos da origem?

$M = \{(x,y,z) \in \R^3 : x+z-1 = 0, x^2+y^2-z = 0 \}

(minimizar a distância é a mesma coisa que minimizar distância ao quadrado)

$f(x,y,z) = (\text{distância à origem})^2 = (\sqrt{x^2+y^2+z^2})^2 = x^2+y^2+z^2$

Método dos multiplicadores de Lagrange:

$$
\begin{cases}
\nabla(f-\lambda_1 F_1 - \lambda_2 F_2) = 0\\
F_1=0\\
F_2=0
\end{cases}
\Rightarrow
\begin{cases}
\nabla(x^2+y^2+z^2-\lambda_1 (x+y-1) - \lambda_2 (x^2+y^2-z)) = 0\\
x+z=1\\
z=x^2+y^2
\end{cases}
\Rightarrow
\begin{cases}
2x-\lambda_1-\lambda_2\cdot 2x=0\\
2y-2\lambda_2 y = 0\\
2z-\lambda_1 + \lambda_2 = 0\\
x+z=1\\
z=x^2+y^2
\end{cases}
$$

Se $y=0$,

\begin{cases}
2x-\lambda_1-\lambda_2\cdot 2x=0\\
2z-\lambda_1 + \lambda_2 = 0\\
x+z=1\\
z=x^2+y^2
\end{cases}

$x^2=1-x\implies x^2+x-1=0 \implies x= \frac{-1 \pm \sqrt{5}}{2}$
$z=1-x=1-\frac{-1\pm \sqrt{5}}{2} = \frac{3}{2} \mp \frac{\sqrt{5}}{2}$

Pontos com $y=0$: $(\frac{-1 \pm \sqrt{5}}{2}, 0, \frac{3 \mp \sqrt{5}}{2})$

Se $\lambda_2 = 1$

$$
\begin{cases}
2x-\lambda_1-2x=0\\
2z-\lambda_1 + 1 = 0\\
x+z=1\\
z=x^2+y^2
\end{cases}
\Rightarrow
\begin{cases}
...........
2x-\lambda_1-2x=0\\
2z-\lambda_1 + 1 = 0\\
x+z=1\\
z=x^2+y^2
\end{cases}
$$

Candidatos são:

$(\frac{-1 - \sqrt{5}}{2}, 0, \frac{3 + \sqrt{5}}{2})$ e $(\frac{-1 + \sqrt{5}}{2}, 0, \frac{3 - \sqrt{5}}{2})$

$f$ (ponto):

$(\frac{-1 - \sqrt{5}}{2})^2 + 0^2 + (\frac{3 + \sqrt{5}}{2})^2 = \frac{1+2\sqrt{5} + 5}{4} + \frac{9+6\sqrt{5} + 5}{4}$

$(\frac{-1 + \sqrt{5}}{2})^2 + 0^2 + (\frac{3 - \sqrt{5}}{2})^2 = \frac{1-2\sqrt{5} + 5}{4} + \frac{9-6\sqrt{5} + 5}{4}$

O último tem a menor imagem

Logo o ponto mais próximo da origem é $(\frac{-1 + \sqrt{5}}{2}, 0, \frac{3 - \sqrt{5}}{2})$

[imagem]

- $M$ é limitado
- O mínimo de $f$ em $M$ está de certeza dentro de uma bola de raio $R$ grande

$M \cap \overline{B_R(0)}$ fechado, limitado e tem o mínimo lá dentro.

Pelo Teorema de Weierstrass:

- $f$ tem mínimo em $M \cap B_R(0)$
- $f$ tem mínimo em $M$

---

$R = \{(x,y) \in \R^2 : y=x-1\}$
$P = \{(z,w) \in \R^2 : w = z^2\}$

[imagem]

Quais os pontos de $P$ e $R$ que estão à menor distância entre si?

$f(x,y,z,w) = (x-z)^2 + (y-w)^2 = (\text{distância entre }(x,y)~\text{e}~(z,w))^2$

$$
\begin{cases}
\nabla((x-z)^2+(y-w)^2 - \lambda_1(x-1-y) - \lambda_2(z^2-w)) = 0\\
y=x-1\\
w=z^2
\end{cases}
\Rightarrow
\begin{cases}
2(x-z)-\lambda_1 = 0\\
2(y-w)+ \lambda_1 = 0\\
-2(x-z) - 2\lambda_2 z = 0\\
-2(y-w) + \lambda_2 = 0\\
y=x-1\\
w = z^2
\end{cases}
\Rightarrow
\begin{cases}
2(x-z) + 2(y-w) = 0\\
2(y-w)+ \lambda_1 = 0\\
-\lambda_1-2\lambda_2 z = 0\\
\lambda_1 + \lambda_2 = 0\\
y=x-1\\
w = z^2
\end{cases}
$$

Se $\lambda_2 = 0$: $\lambda_1 + \lambda_2 = 0 \Rightarrow \lambda_1 = 0$

$$
\begin{cases}
2(x-z) = 0\\
2(y-w) = 0\\
(x-z) = 0\\
(y-w) = 0\\
y=x-1\\
w = z^2
\end{cases}
\Rightarrow
\begin{cases}
x=z\\
y=w\\
y=x-1\\
w = z^2
\end{cases}
\Rightarrow
\begin{cases}
x=z\\
y=w\\
w=z-1\\
w = z^2
\end{cases}
\Rightarrow z^2=z-1 \Rightarrow z^2-z+1 = 0 \Rightarrow z=\frac{1\pm \sqrt{1-4}}{2} Imp
$$

Se $\lambda_2 \ne 0$: ...

$M$ variedade de $\dim m \subset \R^n$

$$
\begin{array}{ll}
M = \{x \in \R^n: F(x) = 0\} & F: \R^n \to \R^{n-m}
\end{array}
$$

$f: \R^n \to \R$

Como calcular máximo (ou mínimo) de $f$ em $M$?

Seja $\gamma$ caminho em $M$ e $x_0$ um máximo local em $M$

$\gamma(0) =x_0$, $f(\gamma(t))$ atinge o máximo em $t=0$

$$
\frac{\d}{\d t} f(\gamma(t)) \big|_{t=0} = 0
$$

$$
\begin{array}{ll}
\nabla f(\gamma (0)) \cdot \gamma'(0) = 0 & \nabla f(x_0) \cdot \gamma'(0) = 0 \forall \gamma \text{ caminho com } \gamma(0) = 0
\end{array}
$$

$$
\implies \nabla f(x_0) \in (T_{x_0}M)^{\perp} = \mathcal{L}\{\text{linhas de } DF(x_0)\}
$$

$$
\begin{array}{l}
F=(F_1, F_2, \dots, F_{n-m})\\
\text{linhas de } DF(x_0) = \nabla F_1(x_0), \nabla F_2(x_0), \dots, \nabla F_{n-m}(x_0)
\end{array}
$$

$\implies$ existme $\lambda_1, \dots, \lambda_{n-m} \in \R$ com
$\nabla f(x_0) = \lambda_1 \nabla F_1(x_0) + \dots + \lambda_{n-m} \nabla F_{n-m}(x_0)$

$\nabla (f-\lambda_1 F_1 - \lambda_2 F_2 - \dots - \lambda_{n-m} F_{n-m})(x_0) = 0$

Conclusão: existem $\lambda_1, \dots, \lambda_{n-m} \in \R$ tais que $x_0$ é ponto crítico de
$f - \lambda_1 F_1 - \dots- \lambda_{n-m} F_{n-m}$

Exemplo:

$M= \{x^2+y^2+z^2=1\}$ esfera de raio 1

$f(x,y,z) = z$

$f$ tem máximo $(0,0,1)$ e mínimo $(0,0,-1)$ em $M$

$F(x,y,z) = x^2+y^2+z^2-1$

[imagem]

$$
\begin{array}{l}
\begin{cases}
\nabla(f - \lambda F) = 0 &\text{(critério acima)}\\
F=0 & \text{(estar na variedade)}
\end{cases}\\
\Leftrightarrow
\begin{cases}
\nabla(z-\lambda(x^2+y^2+z^2-1)) = 0\\
x^2+y^2+z^2=1
\end{cases}\\
\Leftrightarrow
\begin{cases}
-2\lambda x = 0\\
-2 \lambda y = 0\\
1-2\lambda z = 0\\
x^2+y^2+z^2=1
\end{cases}
\end{array}
$$

Logo $y\ne 0$:
Portanto:

$$
\begin{cases}
y = 0 \text{ e } x = 0\\
2\lambda z = 1 \implies \lambda = \pm \frac{1}{2}\\
z^2=1 \implies z=\pm 1
\end{cases}
$$

Soluções do sistema:

$$
\begin{array}{ll}
(x,y,z) = (0,0,1) & \lambda = \frac{1}{2}\\
(x,y,z) = (0,0,-1) & \lambda = -\frac{1}{2}
\end{array}
$$

O critério indica os candidatos a máximo ou mínimo.

Recordar:

Teorema de Weierstrass

$f: M \to \R$, $M$ limitado fechado (compacto), $f$ contínua.

Então $f$ tem máximo e mínimo em $M$.

1º passo) Justifica a existência de máximo (ou mínimo)
2º passo) Critério para encontrar os candidatos a máximo ou mínimo.

---

Problemas:

[imagem]

Quero encontrar o paralelipípedo com maior volume de entre aqueles que satisfazem
$x+y+z = 1$, $x,y,z \gte 0$

maximizar volume $V = xyz$, com $F=x+y+z-1=0$

1. Será que existe máximo?
   $V = xyz$ é contínua

   $$
   \begin{cases}
   x+y+z=1\\
   x,y,z\geq 0
   \end{cases}
   $$

   [imagem]
   $M$ fechado e limitado

   Pelo Teorema de Weierstrass, $V$ tem máximo em $M$.

2. $$
   \begin{array}{l}
   \begin{cases}
   \nabla(V-\lambda F) = 0\\
   F=0 \Leftrightarrow x+y+z=1
   \end{cases}
   \implies
   \begin{cases}
   \nabla(xyz-\lambda(x+y+z-1))=0\\
   x+y+z=1
   \end{cases}\\
   \implies
   \begin{cases}
   yz-\lambda = 0\\
   xz-\lambda = 0\\
   xy-\lambda = 0\\
   x+y+z=1
   \end{cases}
   \implies
   \begin{cases}
   yz=\lambda\\
   xz=yz=xy\\
   x+y+z=1
   \end{cases}
   \end{array}
   $$

   Será que interessa $x=0 \land y=0 \land z=0$? Não, porque nesse caso $V=0$.

   $$
   \begin{cases}
   xz=yz\implies x=y\\
   yz=xy\implies z=x\\
   x+y+z=1
   \end{cases}
   \implies
   \begin{cases}
   x=y\\
   z=x\\
   3x=1
   \end{cases}
   \implies
   \begin{cases}
   x=\frac{1}{3}\\
   y=\frac{1}{3}\\
   z=\frac{1}{3}
   \end{cases}
   $$

   Só há um candidato a máximo. Como sei que ele existe, o máximo tem de ser atingido em $(\frac{1}{3},\frac{1}{3},\frac{1}{3})$.

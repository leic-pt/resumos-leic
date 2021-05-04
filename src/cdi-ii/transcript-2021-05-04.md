$M$ variedade de $\dim m \subset \R^n$, $a \in M$

$T_aM = \{\text{vetores tangentes a } M \text{ em } A\}$

$v$ é tangente se existir um caminho $\gamma: ]- \epsilon, \epsilon [ \to M$, $\gamma (0) = a, \gamma'(0) = v$

$(T_aM)^{\perp}$ espaço normal $\to$ espaço vetorial de $\dim = n-m$

Seja $v$ tangente a $M$ em $a$:

$$
\begin{array}{l l l}
\gamma: ]-\epsilon, \epsilon[ \to M &
\gamma(0) = a &
\gamma'(0) = v
\end{array}
$$

Suponhamos que $M = \{x \in \R^n: F(x) = 0\}$, $F: \R^n \to \R^{n-m}$, $C^1$,

$0 = F(\gamma (t)), \forall t \in ]-\epsilon, \epsilon[$

$0 = \frac{\d}{\d t}F(\gamma (t)) = DF(\gamma (t)) \cdot \gamma'(t)$

Para $t = 0$, $DF(a) \cdot v = 0$, então as linhas de $DF$ são ortogonais a $v$ (para qualquer $v \in T_aM$)
ou seja, as linhas de $DF$ que pertencem a $(T_aM)^{\perp}$
(há $n-m$ linhas linearmente independentes)

Logo $(T_aM)^{\perp}$ = $L \{\text{linhas de } DF(a) \}$

Exemplo:

$S = \{(x,y,z) \in \R^3: z = x^4+y^3\}, a = (1,1,2)$

$S$ é variedade de $\dim 2$

$S = \{(x,y,z) \in \R^3: F = x^4 +y^3 - z = 0\}, F \in C^1$

$$
DF(x,y,z) = \begin{bmatrix}
4x^3 & 3y^2 & -1
\end{bmatrix}
$$

$$
DF(1,1,2) = \begin{bmatrix}
4 & 3 & -1
\end{bmatrix}
$$

$$
(T_{(1,1,2)}S)^{\perp} = L \{(4,3,-1)\}
$$

que é uma reta.

$(x,y,z) \in T_{(1,1,2)}S: (x,y,z) \cdot (4,3,-1) = 0$
$4x+3y-z=0$ plano

$T_{(1,1,2)} S = L \{(1,-1,1), (0,1,3)\}$

Exemplo:

$$
L = \{(x,y,z) \in \R^3: z=x^4+y, x+y+z=6\}
$$

Será que é variedade? Qual a sua dimensão?
Qual o espaço tangente e normal no ponto $(1,2,3)$?

$F(x,y,z) = (x^4+y-z, x+y+z-6)$

$L=\{(x,y,z) \in \R^3: F=(0,0)\}$

$$
DF(x,y,z) = \begin{bmatrix}
4x^3 & 1 & -1\\
1 & 1 & 1
\end{bmatrix}
$$

$DF$ tem característica 2.

Logo $L$ é variedade de $\dim 1$ (curva)

$$
DF (1,2,3) = \begin{bmatrix}
4 & 1 & -1\\
1 & 1 & 1
\end{bmatrix}
$$

$(T_{(1,2,3)}L)^{\perp} = L\{(4,1,-1), (1,1,1)\}$

Qual o valor de $T_{(1,2,3)}L$?

$$
\begin{aligned}
(x,y,z) \in T_{(1,2,3)}L &\Leftrightarrow \begin{cases}
(x,y,z) \cdot (4,1,-1) = 0\\
(x,y,z) \cdot (1,1,1) = 0
\end{cases}\\
& \Leftrightarrow \begin{cases}
4x+y-z=0\\
x+y+z=0
\end{cases}\\
& \Leftrightarrow \begin{cases}
5x+2y=0\\
3x-2z = 0
\end{cases}
\end{aligned}
$$

Por exemplo: $(1, -\frac{5}{2}, \frac{3}{2})$

$T_{(1,2,3)}L = L\{(1,-\frac{5}{2}, \frac{3}{2})\}$

---

Suponhamos que $g$ é parametrização de $M = \{F = 0\}$

$g(t_0) = a$
$g: V \to M$

$$
0=F(g(t)) \implies 0 = D(F(g(t))) = DF(g(t))\cdot Dg(t)
$$

cada coluna de $Dg$ é ortogonal às linhas de $DF$

Em $t=t_0$, $DF(a) \cdot Dg(t_0) = 0$

As linhas de $DF(a)$ geram o espaço normal.

As colunas de $Dg(t_0)$ pertencem ao espaço tangente

$(DF)_{n-m\times n} \cdot (Dg)_{n\times m}$

...

---

$P=\{(x,y,z)\}$ ...

$g(\rho, \theta) = (\rho \cos \theta, \rho \sin \theta, \rho^2)$

Qual o espaço tangente e normal em $(\frac{1}{2}, \frac{1}{2},\frac{1}{2})$?

$\rho^2 = \frac{1}{2} \implies \rho = \frac{\sqrt{2}}{2}$

$$
\begin{cases}
\rho \cos \theta = \frac{1}{2}\\
\rho \sin \theta = \frac{1}{2}
\end{cases}\\
\Rightarrow
\begin{cases}
\cos \theta = \frac{\sqrt{2}}{2}\\
\sin \theta = \frac{\sqrt{2}}{2}
\end{cases}\\
\Rightarrow \theta = \frac{\pi}{4}
$$

Sistemas

$$
\begin{cases}
x' = Ax + b(t)\\
x(t_0) = x_0
\end{cases}
$$

Sendo $A$ uma matriz $n \times n$ com entradas reais.

Exemplo:

$$
x' = \begin{bmatrix}
2 & -5\\
1 & 2
\end{bmatrix}
x + \begin{bmatrix}
2\\
1
\end{bmatrix}
$$

Solução geral tem a forma

$$
x(t) = \underbrance{e^{\begin{bmatrix}
2 & -5\\
1 & 2
\end{bmatrix} t} v}{\text{solução geral da eq. homogénea}} + \text{uma solução qualquer}
$$

$$
x' = \begin{bmatrix}
2 & -5\\
1 & 2
\end{bmatrix} x
$$

$$
y' + a(x) y = b(x)
$$

Se $x(t) = \text{vetor constante} \begin{bmatrix}a \\ b\end{bmatrix}$

$$
x' = \begin{bmatrix}
0\\
0
\end{bmatrix}
= \begin{bmatrix}
2 & -5\\
1 & 2
\end{bmatrix}
\begin{bmatrix}
a\\
b
\end{bmatrix}
+
\begin{bmatrix}
2\\
1
\end{bmatrix}
$$

$$
\begin{bmatrix}
a\\
b
\end{bmatrix}
=
\begin{bmatrix}
-1\\
0
\end{bmatrix}
$$

$$
\begin{darray}{c}
| A - \lambda I | = \begin{vmatrix}
2 - \lambda & -5\\
1 & 2 - \lambda
\end{vmatrix}\\
(2- \lambda) ^2 + 5 = 0\\
\lambda^2 - 4\lambda + 4 + 5= 0\\
\lambda ^2 - 4\lambda + 9 = 0
\end{darray}
$$

raízes:

$$
\frac{4 \pm \sqrt{16 - 36}}{2} = 2 \pm i \sqrt{5}
$$

ver vetores próprios:

Para $\lambda = 2 - i \sqrt{5}$

$$
A - (2 - i \sqrt{5} I) = \begin{bmatrix}
i \sqrt{5} & -5\\
1 & i \sqrt{5}
\end{bmatrix}
$$

:::details[aparte]

$e^{A t}$
$A$ -> valor próprio de $A \lambda$
vetor próprio $Av = \lambda V$

$e^{A t} v = e^{\lambda t} v$

$$
e^{A t} = I + At + A^2 \frac{t^2}{2} + \dots
$$

$$
e^{At} v = v + Avt + A^2v \frac{t^2}{2} + \dots
= v + \lambda t + \frac{\lambda ^2}{2}t^2 v + \frac{\lambda^3}{3!} t^3 v + \dots
$$

:::

Um vetor próprio é

$$
\begin{bmatrix}
5\\
i\sqrt{5}
\end{bmatrix}
$$

$$
e^{At} \begin{bmatrix}
5\\
i \sqrt{5}
\end{bmatrix}
= e^{(2-i \sqrt{5})t} \begin{bmatrix}
5\\
i \sqrt{5}
\end{bmatrix}
$$

Fórmula de Euler

$$
e^{i \alpha} = \cos (\alpha) + i \sin (\alpha)
$$

$$
e^{2t} [\cos (\sqrt{5} t ) - i \sin (\sqrt{5} t)] \begin{bmatrix}
5\\
i \sqrt{5}
\end{bmatrix}
$$

$$
e^{2t} [\cos (\sqrt{5} t ) + i \sin (\sqrt{5} t)] \begin{bmatrix}
5\\
-i \sqrt{5}
\end{bmatrix}
$$

$$
e^{At} \begin{bmatrix}
v_1 \\
v_2
\end{bmatrix}
= v_1 e^{At} \begin{bmatrix}
1\\
0
\end{bmatrix}
+ v_2 e^{At} \begin{bmatrix}
0\\
1
\end{bmatrix}
$$

$$
\begin{darray}{c}
y_1 = e^{2t} \begin{bmatrix}
5 \cos (\sqrt{5} t)\\
\sqrt{5} \sin \sqrt{5} t
\end{bmatrix}\\
y_2 = e^{2t} \begin{bmatrix}
- 5 \sin (\sqrt{5} t)\\
\sqrt{5} \cos \sqrt{5} t
\end{bmatrix}
\end{darray}
$$

---

Em geral para determinar a solução

$$
\begin{cases}
x' = Ax + b(t)\\
x(t_0) = x_0 \in \R^n
\end{cases}
$$

e seja $A$ uma matrix $n \times n$.

1. Calcular $e^{At}$ (fator integrante $e^{-At}$)

2. $\frac{\d}{\d t} [e^{-At} x] = e^{-At} x' + e^{-At} (-A) x = e^{-At} [x - Ax]$
   $\frac{\d}{\d t} [e^{At} x] = e^{-At} b(t)$
   $\int_{t_0}^{t} \frac{\d }{\d s}(e^{-As}x) \d s = \int_{t_0}^{t} e^{-As}b(s) \d s$
   $e^{-At}x(t) - e^{-A t_0} x(t_0) = \int_{t_0}^{t} e^{-As} b(s) \d s$
   $e^{-At}x(t) = e^{-A t_0} x(t_0) + \int_{t_0}^{t} e^{-As} b(s) \d s$
   $x(t) = e^{A(t-t_0)} x(t_0) + e^{At} \int_{t_0}^{t} e^{-As}b(s) \d s$

---

exemplo

$$
x' = \begin{bmatrix}
4 & -2\\
8 & -4
\end{bmatrix} x + \begin{bmatrix}
1\\
1
\end{bmatrix}
$$

$$
x' = Ax + \begin{bmatrix}
a\\
b
\end{bmatrix}
$$

$$
\begin{vmatrix}
4 - \lambda & -2\\
8 & - (4 + \lambda)
\end{vmatrix} = (\lambda + 4)(\lambda - 4) + 16 = \lambda^2 - 16 + 16 = \lambda^2
$$

$\lambda = 0$

$$
\begin{bmatrix}
4 & -2\\
8 & -4
\end{bmatrix}, v = \begin{bmatrix}
1\\
2
\end{bmatrix}
$$

$v \ne 0$

$$
\begin{darray}{c}
Av = \lambda v\\
(A - \lambda I)v =0
\end{darray}
$$

:::tip
$AB = BA$ então $e^{(A+B) t} = e^{At} e^{Bt}$
:::

$$
\begin{darray}{c}
e^{At}v = e^{[\lambda I + (A - \lambda I)]t}\\
(\lambda I)(A - \lambda I) = (A - \lambda I)(\lambda I)\\
e^{\lambda t} [I + (A- \lambda I) t + (A - \lambda I)^2 \frac{t^2}{2} + \dots]
\end{darray}
$$

Vetor próprio: $(A- \lambda I) v = 0$

SEARCH: vetores próprios generalizados

$$
\begin{darray}{c}
(A- \lambda I)^2 v = 0
(A- \lambda I)^3 v = 0
\end{darray}
$$

$$
(A - \lambda I) v = 0 \implies
e^{A t}v = e^{\lambda t} [I v+ (A- \lambda I) vt + (A - \lambda I)^2 v\frac{t^2}{2} + \dots]
$$

$$
\begin{bmatrix}
4 & -2\\
8 & - 4
\end{bmatrix}^2
=\begin{bmatrix}
4 & -2\\
8 & - 4
\end{bmatrix}\begin{bmatrix}
4 & -2\\
8 & - 4
\end{bmatrix}
=
\begin{bmatrix}
16 - 16 & -8 + 8\\
32 - 32 & -16 + 16
\end{bmatrix} = 0
$$

$$
e^{At} = I + At + A^2 \frac{t^2}{2} + \dots
= I + At
$$

$$
e^{\begin{bmatrix}
4 & -2\\
8 & -4
\end{bmatrix} t} = \begin{bmatrix}
1 + 4t & -2t\\
8t & 1- 4t
\end{bmatrix}
$$

$$
x' = \begin{bmatrix}
4 & -2\\
8 & -4
\end{bmatrix}x + \begin{bmatrix}
1\\
1
\end{bmatrix}
$$

$$
e^{-At} = \begin{bmatrix}
1-4t & 2t\\
-8t & 1+4t
\end{bmatrix}
$$

$$
[e^{-At} x]' = \begin{bmatrix}
1-4t & 2t\\
-8t & 1+4t
\end{bmatrix} \begin{bmatrix}
1\\
1
\end{bmatrix} = \begin{bmatrix}
1 -2t\\
1 -4t
\end{bmatrix}
$$

$$
e^{-At}x - x(0) = \int_{0}^{t} \begin{bmatrix}
1 -2s\\
1-4s
\end{bmatrix} \d s = \begin{bmatrix}
t-t^2\\
t-2t^2
\end{bmatrix}
$$

$$
x(t) = e^{At}x_0 + e^{At} \begin{bmatrix}
t - t^2\\
t- 2t^2
\end{bmatrix}
$$

---

Seja $A$ uma matrix 2x2.

$x' = Ax$

$e^{At}$

$|A - \lambda I| = (\lambda - \lambda_1)(\lambda - \lambda_2)$

**Caso 1:** $\lambda_1 \ne \lambda_2$:

$\exists v_1, v_2$ tais que $\{v_1, v_2\}$ é uma base

$$
\begin{darray}{cc}
e^{At} v_1 = e^{\lambda_1 t} v_1 & e^{At} v_2 = e^{\lambda_2 t} v_2
\end{darray}
$$

$$
e^{At} \begin{bmatrix}
v_1 & v_2
\end{bmatrix} = \begin{bmatrix}
e^{\lambda_1 t} v_1 & e^{\lambda_2 t} v_2
\end{bmatrix}
$$

$$
e^{At} S = S \begin{bmatrix}
e^{\lambda_1 t} & 0\\
0 & e^{\lambda_2 t}
\end{bmatrix}
$$

$$
e^{At} = S \begin{bmatrix}
e^{\lambda_1 t} & 0\\
0 & e^{\lambda_2 t}
\end{bmatrix} S^{-1}
$$

**Caso 2:** $\lambda_1 = \lambda_2$:

$(A - \lambda_1 I)^2 = 0$

$$
e^{At} = e^{\lambda_1 t} [I + (A - \lambda_1 I) t]
$$

---

Seja $A$ uma matrix 3x3.

$|A - \lambda I| = (\lambda - \lambda_1)(\lambda - \lambda_2)(\lambda - \lambda_3)$

**Caso 1:** $\lambda_1 = \lambda_2 = \lambda_3$

$$
\lambda_1 = \lambda_2 = \lambda_3 \implies (A - \lambda_1 I)^3 = 0
$$

$$
S^{-1} A S = \begin{bmatrix}
\lambda_1 & 1 & 0\\
0 & \lambda_1 & 1\\
0 & 0 & \lambda_1
\end{bmatrix}
$$

$$
\lambda_1 = \lambda_2 \ne \lambda_3
$$

$$
x' = \begin{bmatrix}
0 & -1 & 0\\
-1 & 0 & 0\\
0 & 0 & 1
\end{bmatrix} + \begin{bmatrix}
e^{2t}\\
0\\
t
\end{bmatrix}
$$

$$
\begin{vmatrix}
-\lambda & -1 & 0\\
-1 & -\lambda & 0\\
0 & 0 & 1 - \lambda
\end{vmatrix} =
(1 - \lambda) \begin{vmatrix}
-\lambda & -1\\
-1 & -\lambda
\end{vmatrix}
= (1-\lambda) (\lambda^2 - 1) = (1-\lambda)(\lambda - 1)(\lambda + 1)
$$

$\lambda = -1$ mult. alg 1 (uma solução)

$$
A - I = \begin{bmatrix}
1 & -1 & 0\\
-1 & 1 & 0\\
0 & 0 & 2
\end{bmatrix}
$$

$$
v = \begin{bmatrix}
1\\
1\\
0
\end{bmatrix}
$$

Sol $$e^{-t} = \begin{bmatrix}1\\1\\0\end{bmatrix}$

$$
e^{At} \begin{bmatrix}
1\\
1\\
0
\end{bmatrix} = e^{-t} \begin{bmatrix}
1\\
1\\
0
\end{bmatrix}
$$

$\lambda = 1$ mult. alg 2 (duas soluções)

$$
A - I = \begin{bmatrix}
-1 & -1 & 0\\
-1 & -1 & 0\\
0 & 0 & 0
\end{bmatrix}
$$

$$
\begin{darray}{cc}
v = \begin{bmatrix}
0\\
0\\
1
\end{bmatrix} &
w = \begin{bmatrix}
1\\
-1\\
0
\end{bmatrix}
\end{darray}
$$

$$
e^{At} \begin{bmatrix}
0\\
0\\
1
\end{bmatrix} = e^t \begin{bmatrix}
0\\
0\\
1
\end{bmatrix}
$$

$$
e^{At} \begin{bmatrix}
1\\
-1\\
0
\end{bmatrix} = e^t \begin{bmatrix}
1\\
-1\\
0
\end{bmatrix}
$$

continuação solução geral

$$
e^{At} = \begin{bmatrix}
e^{-t} & e^{-t} & 0\\
e^{-t} & -e^{-t} & 0\\
0 & 0 & e^t
\end{bmatrix}
\begin{bmatrix}
1 & 1 & 0\\
1 & -1 & 0\\
0 & 0 &1
\end{bmatrix}^{-1}
$$

$$
S \begin{bmatrix}
e^{-t} & 0 & 0\\
0 & e^{-t} & 0\\
0 & 0 & e^t
\end{bmatrix} S^{-1}
$$

c.a.

$$
\begin{bmatrix}
1 & 1 & 0\\
1 & -1 & 0\\
0 & 0 &1
\end{bmatrix}^{-1} = \begin{bmatrix}
\frac{1}{2} & \frac{1}{2} & 0\\
\frac{1}{2} & -\frac{1}{2} & 0\\
0 & 0 & 1
\end{bmatrix}
$$

$$
e^{At} = \begin{bmatrix}
e^{-t} & e^{-t} & 0\\
e^{-t} & -e^{-t} & 0\\
0 & 0 & e^t
\end{bmatrix}\begin{bmatrix}
\frac{1}{2} & \frac{1}{2} & 0\\
\frac{1}{2} & -\frac{1}{2} & 0\\
0 & 0 & 1
\end{bmatrix}
$$

$$
e^{-At} = \begin{bmatrix}
e^{t} & e^{t} & 0\\
e^{t} & -e^{t} & 0\\
0 & 0 & e^{-t}
\end{bmatrix}\begin{bmatrix}
\frac{1}{2} & \frac{1}{2} & 0\\
\frac{1}{2} & -\frac{1}{2} & 0\\
0 & 0 & 1
\end{bmatrix}
$$

$$
e^{-At} = \begin{bmatrix}
e^{2t}\\
0\\
t
\end{bmatrix} = \begin{bmatrix}
\frac{e^{3t}}{2} + \frac{e^{t}}{2}\\
\frac{e^{3t}}{2} - \frac{e^t}{2}\\
t e^{-t}
\end{bmatrix}
$$

$$
[e^{-At} x]' = ...?
$$

$$
\frac{\d }{\d t} (-t e^{-t}- e^{-t}) = -e^{-t}+ t e^{-t} + e^{-t}
$$

$$
e^{-At} x = v + \begin{bmatrix}
\frac{e^{3t}}{6} + \frac{e^t}{2}\\
\frac{e^{3t}}{6} - \frac{e^t}{2}
\end{bmatrix}
$$

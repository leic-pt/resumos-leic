# Equações diferenciais de ordem N (EDO)

$$
y^{(n)} = f(t, y, y', \dots , y^{(n-1)})
$$

E queremos descobrir $y(t)$

$$
\begin{array}{l}
x_1(t) = y(t)\\
x_2 (t) = y'(t)\\
\vdots\\
x_n (t) = y^{(n-1)}(t)
\end{array}
$$

$$
x = \begin{bmatrix}
x_1\\
x_2\\
\vdots\\
x_n
\end{bmatrix}
$$

$$
\begin{cases}
x_1' = x_2\\
x_2' = x_3\\
\vdots\\
x_{n-1}' = x_n\\
x_n' = f(t, x_1, x_2, \dost, x_{n-1})
\end{cases}
$$

$$
x' = F(t,x)
$$

$$
F(t, x_1, \dots, x_{n-1}) = (x_1, x_2, \dots, x_n, f(t, x))
$$

Este problema tem uma e uma só solução se $f$ é contínua e localmente Lipschitz em $(x_1, \dots , x_n)$.

$$
f:D \subset \R \times \R^{n} \to \R\\
f \equiv f(t, x_1, \dots, x_n)
$$

---

exemplo

$$
\begin{darray}{c}
y'' = \sin t + (1+y) y' & y(0) = 2 & y'(0) = 3
\end{darray}
$$

---

$$
y^{(n)} + a_{n-1} y^{(n-1)} + a_{n-2} y^{(n-2)} + \dots + a_1 y' + a_0 y = h(t)
$$

(1)

$$
\begin{darray}{l|l}
x_1 = y & x_1 ' = x_2\\
x_2 = y' & x_2' = x_3\\
x_n = y^{n-1} & x_{n-1}' = x_n
\end{darray}
$$

$$
x_n' = -a_0 x_1 + a_1 x_2 + \dots - a_{n-1} x_{n-1} (ISTO PARECE ESTAR MAL?)
$$

$$
x' = Ax + B(t)
$$

$$
x = \begin{bmatrix}
x_1\\
x_2\\
\vdots\\
x_n
\end{bmatrix}
$$

$$
B(t) = \begin{bmatrix}
0\\
0\\
\vdots\\
0\\
h(t)
\end{bmatrix}
$$

$$
A = \begin{bmatrix}
0 & 1 & 0 & \dots & 0
0 & 0 & 1 & \dots & 0\\
0 & 0 & 0 & \dots & 1\\
-a_0 & -a_1 & \dots & -a_{n-1}
\end{bmatrix}
$$

$$
x = e^{tA} c + \int_{0}^{t} e^{(t-s)A} B(s) \d s
$$

---

exercícios

$$
\det (A-\lambda I) = (-1)^n (\lambda^n + a_{n-1}\lambda^{n-1} + a_{n-2} \lambda^{n-2} + \dots + a_1 \lambda + a_0)
$$

:::tip[Definição]

Polinómios característicos de (1) é

$$
p(\lambda) = \lambda^n + a_{n-1} \lambda^{n-1} + \dots + a_1 \lambda + a_0
$$

:::

O conjunto das soluções de (1) é um espaço linear de dimensão $n$

---

$$
\begin{darray}{c}
D^0y = 1\\
...\\
D^2 y = y^{(5)}
(D^2 + D^3)y = y'' + y'''\\
(D^2 + 3) y = y'' + 3y\\
(D^3 + 2D^2 + 5)y = y''' + 2y'' + 5y
\end{darray}
$$

---

exemplo

$$
y'' - 3y' + 2y = 0
$$

$$
\begin{aligned}
y'' - 3y' + 2y &= y'' - y' - 2y' + 2y\\
&= D(y' - y) - 2(y' -y)\\
&=(D- 2) (y' - y)\\
&=(D-2) (D-1) y
\end{aligned}
$$

$$
\begin{aligned}
y'' - 3y' + 2y &= y''-2y' - y' + 2y\\
&= D(y'-2y) - (y' - 2y)\\
&= (D-1)(D-2)y
\end{aligned}
$$

Se $(D-1)y = 0 \implies y'' - 3y' + 2y = 0$
$y' = y$
$y = c_1 e^t$

Se $(D-2)y = 0$ então $y'' - 3(?)y + 2y =0$

$$
(D-2)y = 0, y'=2ym y=c_2 e^{2-t}
$$

A mesma equação (1) pode ser escrita na forma $p(D) y = 0$ onde $p$ é o polinómio característico da equação (1)

escrever pelas raízes

$$
p(\lambda) = (\lambda - \lambda_1)^{m_1} (\lambda - \lambda_2)^{m_2} \dots (\lambda - \lambda_j)^{m_j}
$$

$m_1 + m_2 + \dots + m_j = n$

$$
a \ne b \implies \lambda_a \ne \lambda_b
$$

$$
P(D) = (D-\lambda_1)^{m_1} (D - \lambda_2)^{m_2} \dots (D-\lambda_j)^{m_j}
$$

:::tip[Teorema]

Se $\lambda_1, \lambda_2, \dots, \lambda_j$ são as raízes do polinómio caraterístico de (1) e
$m_1, m_2, \dots, m_j$ as respetivas multiplicidades então as funções

$$
y(t) = t^{p} e^{\lambda_k t}
$$

com $0 \leq p \leq m_k - 1$ e $1 \leq k \leq j$

são soluções linearmente independentes de (1)

:::

$$
P(D)y = (D-\lambda_1)^{m_1} \dots (D-\lambda_j)^{m_j} (D-\lambda_k)^{m_k}y
$$

$$
(D-\lambda_k)^{m_k} y = 0 \implies p(D) y = 0
$$

---

exemplo

$$
y''' - 3y' + 2y
$$

(\*)

Polinómio característico: $p(y) = \lambda^3 - 3\lambda + 2$

ir buscar raiz (trivial) e rufini + fórmula resolvente

$p(\lambda) = (\lambda - 1)(\lambda^2 + \lambda - 2) = (\lambda - 1)(\lambda-1)(\lambda +2) = (\lambda-1)^2 (\lambda + 2)$

a solução geral de (\*) é

$$
y(t) = c_1 e^t + c_2 t e^t + c_3 e^{-2t}
$$

---

exemplo

$$
y''' - 3y'' + 2y' = 0
$$

(\*)

pol característico: $p(\lambda) = \lambda^3 - 3\lambda^2 + 2\lambda = \lambda(\lambda^2 - 3\lambda + 2 = \lambda^2 (\lambda - 1)(\lambda - 2)$

a solução geral de (\*) é $y(t) = c_1 + c_2 e^t + c_3 e^{2t}

---

exemplo

$$
y''' - 8y'' + 25y' - 26y = 0
$$

$$
p(\lambda) = \lambda^3 - 8\lambda^2 + 25\lambda - 26 = (\lambda-2)(\lambda^2 -6\lambda + 13) = (\lambda-2)((\lambda-3)^2 + 4)
$$

$$
\begin{darray}{ccc}
\lambda=2 & \lambda = 3+2i & \lambda = 3-2i
\end{darray}
$$

tem solução geral

$$
y(t) = c_1 e^{2t} + c_2 e^{3t} \cos(2t) + c_3 e^{3t} \sin (2t)
$$

---

exemplo:

$$
y^{(4)} + 2y^{(2)} + y = 0
$$

$$
p(\lambda) = \lambda^4 + 2\lambda^2 + 1 = (\lambda^2 + 1)^2 = (\lambda-i)^2(\lambda + i)^2
$$

$$
y=c_1 \cos t + c_2 \sin t + c_3 t \cos t + c_4 t \sub t
$$

---

# Método dos coeficientes indeterminados

$$
y^{(n)} + a_{n-1} y^{(n-1)} + \dots + a_1y' + a_0 y = h(t)
$$

Sabendo que $h(t)$ é solução de uma EDO homogénea de coeficientes constantes.
ou seja existe um polinómio $\tilde p$ tal que $\tilde p(D)h = 0$

por exemplo

$$
\begin{darray}{cc}
h(t) = e^{2t} + t e^{3t} & \tilde p(\lambda) = (\lambda - 2)(\lambda - 3)^2\\
h(t) = t^2 \sin t + e^t & \tild p (\lambda) = (\lambda-i)^3 (\lambda + i)^2(\lambda - 1)
\end{darray}
$$

---

exemplo

$y^{(4)} + 2y^{(2)} + y=e^t$

$$
p(\lambda) = \lambda^4 + 2\lambda^2 + \lambda = (\lambda^2 + 1)^2
$$

$$
\tilde p(\lambda) = (\lambda - 1)
$$

$(\lambda - 1) (\lambda^2 + 1)^2$

$y(t) = c_1 \cost t + c_2 \sin t + c_3 t \cos t + c_4 t \sin t +\alpha e^t$

$$
\begin{aligned}
P(D)y(t) &= P(D) (c_1 \cos t + \dots + c_4 t \sin t) + P(D) \alpha e^t\\
&= (D^4 + 2D^2 + 1) \alpha e^t\\
&= \alpha (1+2+1)e^t\\
&= \alpha \times 4 e^t\\
\alpha = \frac{1}{4}
\end{aligned}
$$

A solução geral é

$$
y(t) = c_1 \cost t + c_2 \sin t + c_3 t \cos t + c_4 t \sin t + \frac{1}{4} e^t
$$

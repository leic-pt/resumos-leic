$$
\begin{darray}{c}
y''' - y'' - y' + y = 2e^{-t} + 3\\
\implies y^{(4)} - y^{(3)} - y'' + y' = -2e^{-t}\\
\implies (y^{(4)} - y^{(3)} - y'' + y')' + (y^{(4)} - y^{(3)} - y'' + y') = 0\\
\implies y^{(5)} - 2y^{(3)} + y' = 0 (B)
\end{darray}
$$

pois $(e^{-t})' + e^{-t} = 0$

polinómio da equação inicial

$$
p(\lambda) = \lambda^3 - \lambda^2 - \lambda + 1 = \lambda^2 (\lambda - 1) - (\lambda - 1) = (\lambda^2 - 1)(\lambda-1) = (\lambda-1)^2(\lambda + 1)
$$

(a solução de $y''' - y'' - y' + y = 0 $ é $= c_1 e^{-t} + c_2 e^t + c_3 t e^t$)

polinómio característico de (B)

$$
\tilde \tilde p (\lambda) = \lambda^5 - 2\lambda^3 + \lambda = \lambda (\lambda^5 - 2\lambda^2 + 1) = \lambda(\lambda^2 - 1)^2 = \lambda(\lambda-1)^2 (\lambda + 1)^2
$$

a solução é $c_1 e^{-t} + c_2 e^t + c_3 t e^t + \alpha + \beta t e^{-t}$ (reparar que a primeira parte é igual à solução acima)

... cenas com o lado direito da equação ($h(t)$), $(D + 1)Dh=0$, $h''+h'=0$, $\tilde p(\lambda) = \lambda^2 + \lambda = (\lambda + 1) \lambda$

$P(D)y = h(t)$

$P(D)z = z''' - z'' -z' + z = P(D)(c_1e^{-t} + c_2e^t + c_3te^t) + P(D)(\alpha + \beta t e^{t})$

resolver mesmo agora o problema:

$2e^{-t} + 3$ é solução de uma equação diferencial homogénea com polinómio característico $\lambda(\lambda + 1)$
$y$ é solução de uma equação diferencial homogénea com polinómio característico $\lambda(\lambda-1)^2(\lambda + 1)^2$

$$
y(t) = c_1 e^{-t} + c_2 e^t + c_3 t e^t + \alpha + \beta t e^{-t}
$$

$$
\begin{darray}{c}
z(t) = \alpha + \beta t e^{-t}\\
z'(t) = \beta(1-t) e^{-t}\\
z''(t) = \beta(t-2) e^{-t}\\
z'''(t) = \beta(3-t)e^{-t}
\end{darray}
$$

$$
z''' - z'' -z' + z = \beta(3-t)e^{-t} - \beta(t-2) e^{-t} - \beta(1-t) e^{-t} + \alpha + \beta t e^{-t} = \beta 4 e^{-t} + \alpha
$$

$$
\beta = \frac{1}{2}, \alpha = 3
$$

A solução geral é

$$
c_1 e^{-t} + c_2 + e^t + c_3 t e^t + 3 + \frac{t e^{-t}}{2}
$$

---

$P(D)(t^p e^{\lambda t})$

$$
p(D) e^{\lambda t} = p(\lambda) e^{\lambda t}
$$

Caso $p=0$

$$
\begin{darray}{c}
De^{\lambda t} = \lambda e^{\lambda t}\\
D^2 e^{\lambda t} = \lambda^2 e^{\lambda t}\\
p(\lambda) = \lambda^2 + 3\lambda + 1\\
p(D) e^{\lambda t} = (D^2 + 3D + 1) e^{\lambda t} = (\lambda^2 + 3\lambda + 1) e^{\lambda t} = p(\lambda)e^{\lambda t}
\end{darray}
$$

caso $p=1$:

$$
p(D) te^{\lambda t} = (t P(\lambda) + P'(\lambda)) e^{\lambda t}
$$

$$
\begin{darray}{c}
D(te^{\lambda t}) = (t\lambda + 1) e^{\lambda t}\\
D^2 (te^{\lambda t}) = (t\lambda^2 + \lambda + \lambda) = (t\lambda^2 + 2\lambda) e^{\lambda t}\\
D^3(t e^{\lambda t}) = (t\lambda^3 + 2\lambda^2 + \lambda^3) e^{\lambda t} = (t\lambda^3 + 3\lambda^2) e^{\lambda t}
\end{darray}
$$

caso $p=2$:

$$
p(D) t^2 e^{\lambda t} = (t^2 p(\lambda) + 2t p'(\lambda) + p''(\lambda)) e^{\lambda t}
$$

---

exemplos:

$$
p(\lambda) = \lambda^3 - \lambda^2 - \lambda + 1
$$

$$
p'(\lambda) = 3\lambda^2 - 2\lambda - 1
$$

$$
\begin{darray}{cc}
P(D)1 = 1
p(D) t e^{-t} = (t p(-1) + p'(-1)) e^{-t} = (3+2-1) e^{-t} = 4 e^{-t}\\
p(D) = \alpha + \beta t e^{-t} = \alpha + 4\beta e^{-t}
\end{darray}
$$

---

exemplos:

$$
y'' - 3y' + 2y = te^t
$$

$$
p(\lambda) = \lambda^2 -3\lambda + 2 = (\lambda -2) (\lambda -1)
$$

$y$ é solução de uma equação homogénea com polinómio característico $(\lambda - 2)(\lambda -1)^3$

$$
y(t) = c_1 e^{2t} + c_2 e^t + \alpha t e^t + \beta t^2 e^t
$$

existe uma solução particular da forma

$$
\alpha t e^t + \beta t^2 e^t
$$

$$
\begin{darray}{c}
p'(\lambda) = 2\lambda - 3\\
p''(\lambda) = 2\\
p'(1) = -1
\end{darray}
$$

$$
\begin{darray}{c}
p(D) (te^t) = (t p(1) + p'(1))e^t = -e^t\\
p(D) (t^2 e^t) = (t^2 p(1) + 2tp'(1) + p''(1)) e^t = (-2t +2)e^t\\
p(D) (\alpha t e^t + \beta t^2 e^t) = -\alpha e^t + (-2t + 2) \beta e^t = (-\alpha + 2\beta) e^t - 2\beta e^t
\end{darray}
$$

$$
\begin{cases}
-\alpha + 2\beta = 0\\
-2\beta = 1
\end{cases} \Leftrightarrow \begin{cases}
\beta = -\frac{1}{2}\\
\alpha = -1
\end{cases}
$$

---

exemplo

metendo agora condições iniciais ao exercício anterior: $y(0) = y'(0) = 0$

temos que

$$
\begin{darray}{c}
y(t) = c_1 e^{2t} + c_2 e^t - t e^t - \frac{1}{2} t^2 e^t\\
y(0) = c_1 + c_2\\
y'(t) = 2c_1 e^{2t} + c_2 e^{t} - (1+t) e^t - \frac{1}{2} (2t + t^2) e^t\\
y'(0) = 2c_1 + c_2 - 1
\end{darray}
$$

$$
\begin{cases}
c_1 + c_2 = 0\\
2c_1 + c_2 = 1
\end{cases} \Leftrightarrow \begin{cases}
c_1 = 1\\
c_2 = -1
\end{cases}
$$

temos então a solução:

$$
y(t) = e^{2t} - e^t - te^t - \frac{t^2}{2} e^t
$$

---

$$
y^{(n)} + a_{n-1} y^{(n-1)} + \dots + a_1 y' + a_0 y = h(t)
$$

(A)

$$
\begin{darray}{l}
x_1 = y\\
x_2 = y'\\
\vdots\\
x_n = y^{(n-1)}
\end{darray}
$$

$$
x' = A x + B(t)
$$

... matrizes tal como na última aula

$$
x = e^{tA} x_0 + e^{tA} \int_{0}^{t} e^{-sA} B(s) \d s
$$

$u_1, u_2, \dots, u_n$ soluções da equação homogénea de (A)

$$
\begin{bmatrix}
u_1\\
u_1'\\
u_1''\\
\vdots\\
u_1^{(n-1)}
\end{bmatrix}, \begin{bmatrix}
u_2\\
u_2'\\
u_2''\\
\vdots\\
u_2^{(n-1)}
\end{bmatrix}, \begin{bmatrix}
u_n\\
u_n'\\
u_n''\\
\vdots\\
u_n^{(n-1)}
\end{bmatrix}
$$

são soluções de $x' = Ax$

---

_something_ determinar matriz Wronskiana:

$$
W = \begin{bmatrix}
u_1 & u_2 & \dots &u_n\\
u_1' & u_2' & \dots & u_n'\\
\vdots & \vdots & \ddots & \vdots\\
u_1^{(n-1)} & u_2^{(n-1)} & \dots &u_n^{(n-1)}
\end{bmatrix}
$$

$W' = AW$

$e^{tA} = W(t) w^{-1} (0)$

$e^{-tA} = (W(t) W^{-1} (0))^{-1}$

$$
x = W(t) W^{-1}(0)x_0 + W(t) W^{-1}(0) \int_{0}^{t} (W^{-1}(0))^{-1} W^{-1}(s) B(s) \d s\\
= W(t) (W^{-1}(0)x_0 + \int_{0}^{t} w^{-1}(s) B(s) \d s)
$$

$$
x=W(t) \begin{bmatrix}
c_1(t)\\
c_2(t)\\
\vdots\\
c_n(t)
\end{bmatrix}
$$

$$
\begin{bmatrix}
c_1(t)\\
c_2(t)\\
\vdots\\
c_n(t)
\end{bmatrix} = \int^{t} W^{-1}(t) \begin{bmatrix}
0\\0\\\vdots\\0\\ h(t)
\end{bmatrix} \d t
$$

como queremos só descobrir $y$ é $x$ é a matriz com as derivadas todas, queremos só a "primeira linha"

$$
y = c_1(t) u_1(t) + c_2(t) u_2(t) + \dots + c_n(t) u_t(t)
$$

---

exemplo

Para $t>1$, $y''-2y' + y = \frac{e^t}{1+t}$

polinómio característico é: $(\lambda^2 - 2\lambda + 1) = (\lambda - 1)^2$

$u_1 = e^t$ e $u_2 = te^t$ são soluções lineares independentes do sistema homogéneo associado

matriz wronskiana:

$$
W = \begin{bmatrix}
u_1 & u_2\\
u_1' & u_2'
\end{bmatrix} = \begin{bmatrix}
e^t & te^t\\
e^t & (1+t)e^t
\end{bmatrix}
$$

$$
W^{-1} = \begin{bmatrix}
? & -te^{-t}\\
? & e^{-t}
\end{bmatrix}
$$

$$
\begin{bmatrix}
c_1(t)\\
c_2(t)
\end{bmatrix} = \int_{0}^{t} W^{-1} \begin{bmatrix}
0\\
\frac{e^t}{1+t}
\end{bmatrix} \d t = \int_{0}^{t} \begin{bmatrix}
- \frac{t}{1+t}\\
\frac{1}{1+t}
\end{bmatrix} \d t = \begin{bmatrix}
-t + \log(1+t) + k_1\\
\log(1+t) + k_2
\end{bmatrix}
$$

$$
y(t) = (-t + \log(1+t) + k_1) e^t + (\log(1+t) + k_2) t e^t\\
= (-t + \log(1+t) + t\log(1+t)) e^t + k_1 e^t + k_2 t e^t
$$

---

$$
\begin{darray}{c}
W' = AW\\
x= W(t) (\int W^{-1} (t) B(t) \d t)\\
x' = W'(\int w^{-1} B dt) + W(t) W^{-1} (t) B(t) = A W \int W^{-1} B \d t + B(t) = Ax + B(t)
\end{darray}
$$

(O W SUPOSTAMENTE É UM ÓMEGA????)

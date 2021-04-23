Teorema da função inversa

$f: \R^n \to \R^n, C^1, a \in \R^n, \det Df(a) \ne 0$

Então $f$ é invertível numa vizinhança de $a$ e:

$$
D f^{-1} (y) = (Df(f^{-1}(y)))^{-1}
$$

---

[imagem]

$x^2+y^2=1$

Em que pontos do círculo é que a circunferência é um gráfico $y=f(x)$?

[imagem]

Não é um gráfico $y=f(x)$

retas tangentes são verticais, $\nabla f$ é horizontal

$F(x,y) = x^2+y^2-1$
$\nabla F(x,y)$ é sempre ortogonal à curva de nível

$$
\nabla F(x,y) \text{ horizontal} \Leftrightarrow \frac{\partial F}{\partial y} =0
$$

## Teorema Função Implícita

$F \in C^1, F: \R^n \times \R^m \to \R^m$

Considero a curva de nível $F = 0$ e um ponto $a = (x_0, y_0)$ nessa curva.

Se $\det (D_y F)(a) \ne 0$, então numa vizinhança de $a$, a curva de nível é um gráfico $y=f(x)$ para uma função desconhecida $f$.

Matriz jacobiana só em relação às variáveis $y$

Mais,

$$
\begin{aligned}
\begin{cases}
F(x,y) = 0\\
y=f(x)
\end{cases}
&
\Rightarrow
F(x,f(x)) = 0,\quad \forall x \text{na vizinhança}\\
& \Rightarrow D(F(x, f(x))) = 0\\
& \Rightarrow D_xF + D_yF \cdot D_x f = 0\\
& \Rightarrow D_yF + D_xf = - D_xF\\
& \Rightarrow D_xf(x) = - (D_yF)^{-1} D_x F(x, f(x))
\end{aligned}
$$

Exemplo:

Mostre que numa vizinhança de $(0, \pi)$ a equação $F(x,y) = x^2y + \sin(x+y) = 0$
define $y$ como função de $x$.

- $F \in C^1$
- $F(0, \pi) = 0^2 \times \pi + \sin(0 + \pi) = 0$
- $\frac{\partial F}{\partial y}\big|_{(0,\pi)} = x^2+cos(x+y) \big|_{(0,\pi)} = cos(\pi) = -1 \ne 0$
  (matriz jacobiana relativa à variáveis que vão ficar dependentes)

Pelo Teorema da Função Implícita, numa vizinhança de $(0, \pi)$, $y = f(x)$.

$$
\begin{aligned}
f'(0) &= - (\frac{\partial F}{\partial y} (0, \pi))^{-1} \cdot \frac{\partial F}{\partial x}(0, \pi)\\
&= -\frac{1}{-1} (2xy+\cos(x+y)) \big|_(0,\pi)\\
&= -1
\end{aligned}
$$

Exemplo:

Mostre que na vizinhança de $(1,1,1,1)$ as equações

$$
\begin{cases}
xu + yvu^2 = 2\\
xu^3 + y^2v^4 = 2
\end{cases}
$$

definem $u$ e $v$ como funções de $x e y$

Calcule $\frac{\partial u}{\partial x}(1,1)$

Resposta:
$F(x,y,u,v) = (xu + yvu^2 - 2, xu^3 + y^2v^4 - 2)$

- F\in C^1
- F(1,1,1,1) = (1+1-2, 1+1-2) = (0,0)

$$
D_{(u,v)} F &= \begin{bmatrix}
x+2yvu & yu^2\\
3xu^2 & 4y^2v^3
\end{bmatrix}
\big |_{(1,1,1,1)} = \begin{bmatrix}
3 & 1\\
3 & 4
\end{bmatrix}
$$

$\det = 9 \ne 0$

Pelo TFI, numa vizinhança de $(1,1,1,1)$, $(u,v) = f(x,y)$

$$
\begin{aligned}
D_{(x,y)} f (1,1) &= - [D_{(u,v)} F(1,1,1,1)]^{-1} DF_{(x,y)} (1,1,1,1)\\
&= ...\\
&= \begin{bmatrix}
-\frac{1}{3} & -\frac{2}{9}\\
0 & -\frac{1}{3}
\end{bmatrix}
\end{aligned}
$$

$$
(u, v) = f(x,y) = (f_1(x,y) , f_2(x,y))
$$

$$
\begin{cases}
u=f_1(x,y)\\
v=f_2(x,y)
\end{cases}
\Rightarrow
\begin{cases}
u=u(x,y)\\
v=v(x,y)
\end{cases}
$$

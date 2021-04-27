Ficha 8,ex 1

$$
\begin{array}{ll}
f: \{(x,y) \in \R^2, x \ne 0\} \to \R^2\\
f(x,y) = (xy, \frac{y}{x})
\end{array}
$$

a. **$f$ não é injetiva.**

Temos de encontrar 2 pontos c/ a mesma imagem.

$$
\begin{cases}
f(1,1)=(1,1)\\
f(-1,-1) = (1,1)
\end{cases}
$$

$$
f(x,0) = (0,0), \quad \forall x \ne 0
$$

b. **Encontrar um subconjunto do domínio onde $f$ seja injetiva**

$$
D= \{ (x,y) \in \R^2 : x,y > 0 \}
$$

Será que $f$ é injetiva em $D$?

$$
f(x_1,y_1) = f(x_2, y_2), \quad (x_1,y_1), (x_2, y_2) \in \D
$$

Então, será que $(x_1,y_1) = (x_2, y_2)$?

$$
f(x_1, y_1) = f(x_2,y_2) \Leftrightarrow \begin{cases}
x_1 y_1 = x_2 y_2\\
\frac{y_1}{x_1} = \frac{y_2}{x_2}
\end{cases}
\Rightarrow \begin{cases}
y_1 = \frac{x_2}{x_1} y_2\\
\frac{x_2 y_2}{x_1^2} = \frac{y_2}{x_2}
\end{cases}
\Rightarrow \begin{cases}
y_1 = \frac{x_2}{x_1} y_2\\
\frac{x_2}{x^2_1} = \frac{1}{x_2}
\end{cases}
\Rightarrow \begin{cases}
-\\
x^2_2=x^2_1
\end{cases}
\Rightarrow \begin{cases}
y_1=\frac{x_2}{x_1}y_2\\
x_2=x_1 \lor \underbrace{x_2=-x_1}_{\text{impossível porque} x_1,x_2>0}
\end{cases}
\Rightarrow \begin{cases}
y_1=y_2\\
x_1=x_1
\end{cases}
$$

Logo é injetiva

c. **Mostre que $f$ tem inversa local em torno do ponto $(2,2)$**

Sim, porque $(2,2) \in D$ e $f$ é injetiva em $D$.

Aplicando

....

$$
\begin{array}{cc}
Df(x,y)=
\begin{bmatrix}
y & x\\
-\frac{y}{x^2} & \frac{1}{x}
\end{bmatrix}
\\
Df(2,2) = \begin{bmatrix}
2 & 2\\
-\frac{1}{2} & \frac{1}{2}
\end{bmatrix}
\end{array}
$$

$$
\det Df(2,2) = 1-(-1) = 2 \ne 0
$$

Pelo Teorema da Função Inversa, a função é localmente invertível em $(2,2)$.

d. **Calcule $Df^{-1} (4,1)$, em que $f^{-1}$ designa uma das funções inversas de $f$**

$f^{-1}(4,1) = (2,2)$

$$
Df^{-1}(4,1) = (Df(2,2))^{-1} = \begin{bmatrix}
2 & 2\\
-\frac{1}{2} & \frac{1}{2}
\end{bmatrix}
$$

---

Ficha 8 ex 4

**Mostre que a equação $2z + x^2z^5 + y^2x^3 + xy = 2$ define implicitamente $z$ como função de $x$ e
de $y$, em torno do ponto $(0, 0, 1)$. Calcule a derivada $\frac{\partial^2 z}{\partial y \partial x}(0,0)$.**

Começamos por definir a função $F$:

$$
F(x,y,z) = 2z + x^2z^5 + y^2x^3 + xy - 2
$$

Verificamos as condições para aplicação do TFI:

- $F \in C^1$
- $F(0,0,1)= 2+0+0+0-2=0$
- $\det D_z F(0,0,1) = \frac{\partial F}{\partial z}(0,0,1) = [2+5x^2z^4]_{\big|_{(0,0,1)}} = 2 \ne 0$

Pelo Teorema da Função Implícita, numa vizinhança de $(0,0,1)$,

$$
\begin{array}{cc}
z = z(x,y) & F(x,y, z(x,y)) = 0
\end{array}
$$

$$
\begin{aligned}
D_{x,y} z &= -(D_zF)^{-1} D_{x,y} F\\
&= -\frac{1}{2+5x^2z^4} \cdot D_{x,y} F\\
&= -\frac{1}{2+5x^2z^4} \begin{bmatrix} 2xz^5 + 3x^2y^2+ y & 2yx^3+x\end{bmatrix}
\end{aligned}
$$

$$
\frac{\partial z}{\partial x} = - \frac{2xz^5+3x^2y^2+y}{2+5x^2z^4}
$$

$$
\frac{\partial^2 z}{\partial y \partial x} = \frac{\partial}{\partial y}(-\frac{2xz^5+3x^2y^2+y}{2+5x^2z^4})
= -\frac{(10xz^4 \frac{\partial z}{\partial y} + 6x^2y+1) \cdot(2+5x^2z^4) - (2xz^5+3x^2y^2+y)\cdot(20x^2z^3 \frac{\partial z}{\partial y})}{(2+5x^2z^4)^2}
$$

Para $(x,y) = (0,0)$ e $z=1$:

$$
=-\frac{2-0}{4} = \frac{1}{2}
$$

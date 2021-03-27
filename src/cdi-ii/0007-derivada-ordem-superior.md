---
description: Derivadas de Ordem Superior. Teorema de Schwarz. Fórmula de Taylor. Extremos.
---

# Derivada de Ordem Superior. Extremos

[[toc]]

## Derivada de Ordem Superior

A derivada de ordem superior de uma função é simplesmente a derivada da derivada.  
Por exemplo, podemos representar a derivada parcial de segunda ordem de $f$ segundo $x_i$ e $x_j$ da seguinte forma:

$$
\frac{\partial^2f}{\partial x_1 \partial x_j} = \frac{\partial}{\partial x_i}\left(\frac{\partial t}{\partial x_j}\right)
$$

::: tip DEFINIÇÃO
$f: \R^n \to \R$ diz-se de classe $C^k$ se cada uma das derivadas parciais de ordem k

$$
\frac{\partial^k f}{\partial x_1 \dots \partial x_d}
$$

\(os índices podem-se repetir) existir e for função contínua.
:::

::: details Exemplo

Seja $f$, uma função diferenciável em qualquer ponto do seu domínio.

$$f(x,y)=x^2y+xy^3=p_1(x,y)^2 p_2(x,y) + p_1(x,y)p_2(x,y)^3$$

$$\frac{\partial f}{\partial x}(x,y)=\frac{\partial}{\partial x}(x^2y+xy^3)=y\cdot 2x + y^3 \cdot 1 = 2xy+y^3$$
$$\frac{\partial f}{\partial y}(x,y)=\frac{\partial}{\partial y}(x^2y+xy^3)=x^2+3xy^2$$

$$\frac{\partial^2 f}{\partial x^2}(x,y)=\frac{\partial}{\partial x}(2xy+y^3)=2y$$
$$\frac{\partial^2 f}{\partial y \partial x}(x,y)=\frac{\partial}{\partial y}(2xy+y^3)=2x+3y^2$$
$$\frac{\partial^2 f}{\partial y^2}(x,y)=\frac{\partial}{\partial x}(x^2+3xy^2)=6xy$$
$$\frac{\partial^2 f}{\partial x \partial y}(x,y)=\frac{\partial}{\partial x}(x^2+3xy^2)=2x+3y^2$$

:::

### Teorema de Schwarz

Este teorema mostra-nos que a ordem por que derivamos não é importante.
Se derivarmos uma função segundo $x$ e de seguida derivarmos esse resultado segundo $y$, vamos
obter o mesmo resultado se derivarmos segundo $y$ e depois $x$.

::: tip DEFINIÇÃO

Seja $f \in C^2$, então

$$
\frac{\partial ^2 f}{\partial x_i \partial x_j} = \frac{\partial^2 f}{\partial x_j \partial x_i}
$$

:::

## Fórmula de Taylor

::: tip Recordar de CDI 1

Seja $f: \R \to \R$ , $C^k$ tem-se

$$f(x+h)=f(a)+f'(a)h+\frac{1}{2!}f''(a)h^2 + \dots + \frac{1}{k!}f^{(k)}(a) h^k + R_k(a,h)$$

com $\lim_{h\to 0} \frac{R_k(a,h)}{h^k}=0$

Também tinhamos restos, por exemplo o resto de Lagrange:

$$
R_k(a,h)=\frac{f^{(k+1)}(a+\epsilon h) h^{k+1}}{(k+1)!}, 0 < \epsilon < 1
$$

:::

### Para dimensões superiores a 1

::: tip DEFINIÇÃO

Seja $f: \R^n \to \R$, $f$ é $C^{n+1}$, e sejam $a \in \R^n$ e $v \in \R^n$  
Seja $g: \R \to \R$, $C^{k+1}$, tal que $g(t) = f(a+tv)$.

Então, a **fórmula de taylor em $g$ e em $t = 0$ de ordem $k$** é representada pela expressão:

$$
g(t)=g(0)+g'(0)t+\frac{1}{2!}g''(0)t^2 + \dots + \frac{g^{(k)}(0)}{k!}t^k + R_k(t)
$$

:::

Tentando agora obter os valores para as derivadas de $g$ para $t=0$:

- $g(0)=f(a+0\cdot v)=f(0)$
- $\displaystyle g'(0) = \nabla f(a+tv)\cdot v \big|_{t=0} = \nabla f(a)\cdot v = \sum^n_{i=1} \frac{\partial f}{\partial x_i}(a)v_i$
- $\displaystyle g''(t)=\sum_{i,j=1}^n \frac{\partial^2 f}{\partial x_j \partial x_y}(a+tv_i)v_i v_j$
- $\displaystyle g''(0) = \sum_{i,j=1}^n \frac{\partial^2 f}{\partial x_j \partial x_y}(a)v_i v_j$

Então, podemos obter a Fórmula de Taylor de $f$ até à segunda ordem:

$$
f(a+tv)=f(a)+\nabla f(a)\cdot tv + \frac{1}{2} \sum^n_{i,j=1} \frac{\partial^2 f}{\partial x_i \partial x_j} (a)\cdot (tv_i)\cdot(tv_j)+ R_2(t)
$$

Se assumirmos $h = tv$, $||v||=1$, obtemos a definição da Fórmula de Taylor de 2º ordem:

::: tip DEFINIÇÃO
Sejam $f: \R^n \to \R$ de classe $C^3$, $h = tv$ e $||v||=1$, podemos obter Fórmula de Taylor de $f$ de 2º ordem pela expressão:

$$
f(a+h)=f(a)+\nabla f(a)\cdot h + \frac{1}{2} +\sum_{i,j=1}^n \frac{\partial^2 f}{\partial x_i \partial x_j} (a)\cdot h_i\cdot h_j+ R_2(t)
$$

com $\displaystyle \lim_{h\to \vec 0}\frac{R_2(h)}{||h||^2}=\vec 0$

:::

### Matriz Hessiana

Pode-se reescrever a expressão da Fórmula de Taylor de 2º ordem da seguinte forma:

$$
f(a+h)=f(a)+\nabla f(a)\cdot h+\frac{1}{2}\begin{pmatrix}
h_{1} & h_{2} & \dotsc  & h_{n}
\end{pmatrix} \cdot Hf(a)\cdot \begin{pmatrix}
h_{1}\\
h_{2}\\
\vdots \\
h_{n}
\end{pmatrix}
+ R_2(h)
$$

ou ainda

$$
f(a+h)=f(a)+\nabla f(a)\cdot h + \frac 12 h^T H_f(a)h + R_2(h)
$$

com $\lim_{h \to \vec 0} \frac{R_2(h)}{||h||^2}=\vec 0$  
em que $Hf(a)$ é a matriz Hessiana de $f$ em $a$, que é uma matriz simétrica pelo [Teorema de Schwarz](#teorema-de-schwarz).

$$
Hf( a) =\begin{bmatrix}
\frac{\partial ^{2} f}{\partial x^{2}_{1}} & \frac{\partial ^{2} f}{\partial x_{2} \partial x_{1}} & \dotsc  & \frac{\partial ^{2} f}{\partial x_{n} \partial x_{1}}\\
\frac{\partial ^{2} f}{\partial x_{1} \partial x_{2}} & \frac{\partial ^{2} f}{\partial x^{2}_{2}} & \dotsc  & \frac{\partial ^{2} f}{\partial x_{2} \partial x_{1}}\\
\vdots  & \vdots  & \ddots  & \vdots \\
\frac{\partial ^{2} f}{\partial x_{1} \partial x_{n}} & \frac{\partial ^{2} f}{\partial x_{2} \partial x_{n}} & \dotsc  & \frac{\partial ^{2} f}{\partial x^{2}_{n}}
\end{bmatrix}
$$

::: details Exemplos de Polinómios de Taylor de 2º ordem

Escrever o polinómio de Taylor de 2º ordem da função
$f(x,y) = e^x - e^y$ em torno da origem, $a=(0,0)$

Começamos por ver se é diferenciável. Como
$f(x,y)=e^{p_1(x,y)}-e^{p_2(x,y)}$ é diferenciável.

O primeiro passo é obter o gradiente de $f$, $\nabla f(0,0)$.

$$
\begin{darray}{l l}
\frac{\partial f}{\partial x}=\frac{\partial}{\partial x}(e^x-e^y)=e^x & \frac{\partial f}{\partial x}(0,0)=e^0=1\\
\\
\frac{\partial f}{\partial y}=\frac{\partial}{\partial y}(e^x-e^y)=-e^y & \frac{\partial f}{\partial y}(0,0)=-e^0 =-1
\end{darray}
$$

Obtemos assim

$$
\nabla f(0,0) = \begin{pmatrix}
1 & -1
\end{pmatrix}
$$

De seguida, vamos calcular a Matriz Hessiana de $f$ em $(0,0)$:

$$
\begin{darray}{l l}
\frac{\partial^2 f}{\partial x^2}=\frac{\partial}{\partial x}\left(\frac{\partial f}{\partial x}\right)=\frac{\partial }{\partial x}e^x=e^x
& \frac{\partial^2 f}{\partial x^2}(0,0)=e^0=1\\
\\
\frac{\partial^2 f}{\partial y^2}=\frac{\partial}{\partial y}\left(\frac{\partial f}{\partial y}\right)=\frac{\partial }{\partial y}\left(-e^y\right)=-e^y
& \frac{\partial^2 f}{\partial y^2}(0,0)=-e^0=-1\\
\\
\frac{\partial^2 f}{\partial x \partial y}=\frac{\partial f}{\partial x}\left(\frac{\partial f}{\partial y}\right)=\frac{\partial}{\partial x}\left(-e\right)^y=0
& \frac{\partial^2 f}{\partial x \partial y}(0,0)=0
\end{darray}
$$

Sendo que a Matriz Hessiana será:

$$
H_f(0,0)=\begin{pmatrix}
1 & 0\\
0 & -1
\end{pmatrix}
$$

Obtemos assim o polinómio de Taylor de ordem $2$ de $f$ em $(0,0)$

$$
\begin{aligned}
p^{f}_{2} (x,y) & =f(0,0)+\nabla f(0,0)\cdot \begin{pmatrix}
x & y
\end{pmatrix} +\frac{1}{2}\begin{pmatrix}
x & y
\end{pmatrix} H_{f} (0,0)\begin{pmatrix}
x\\
y
\end{pmatrix}\\
 & =0+(1,-1)\begin{pmatrix}
x & y
\end{pmatrix} +\frac{1}{2}\begin{pmatrix}
x & y
\end{pmatrix}\begin{pmatrix}
1 & 0\\
0 & -1
\end{pmatrix}\begin{pmatrix}
x\\
y
\end{pmatrix}\\
 & =x-y+\frac{1}{2}\begin{pmatrix}
x & -y
\end{pmatrix}\begin{pmatrix}
x\\
y
\end{pmatrix}\\
 & =x-y+\frac{1}{2} (x^{2} -y^{2} )
\end{aligned}
$$

O polinómio pedido é $x-y+\frac 12 ( x^2-y^2)$

:::

## Extremos

Tal como em CDI-I, sabemos que se um ponto é um extremo, então o gradiente nesse ponto vai ser nulo.

::: tip TEOREMA

Seja $f: \R^n \to \R$, que tem extremo em $a \in \R^n$

Então, $\nabla f(a) = \vec 0$

:::

Estes pontos, chamam-se **pontos de estacionariedade** ou **pontos críticos**.

::: tip DEFINIÇÃO

Seja $f: \R^n \to \R$ os pontos $a \in \R^n$ para os quais $\nabla f(a) = \vec 0$ dizem-se pontos de estacionariedade ou pontos críticos.

:::

::: warning

É importante relembrar que nem todos os pontos $\nabla f(a) = \vec 0$ são extremos,
tal como em CDI-I nem todos os pontos onde a derivada se anulava eram extremos.

:::

::: details Exemplos

Seja $f: \R^2 \to \R$, $f(x,y)=x^2+y^2$, determine os pontos críticos de $f$.

$$
(0,0) = \nabla f(x,y) = (2x, 2y) \implies x=0 \land y = 0
$$

Então, o único ponto crítico de $f$ é $(0,0)$.

Como $f(x,y)=x^2+y^2 \geq 0, \forall (x,y) \in \R^2$ e $f(0,0) = 0$,
concluímos que este ponto crítico corresponde a um mínimo, ou seja ocorre mínimo (absoluto) de $f$ em $(0,0)$.

---

Seja $f: \R^2 \to \R$, $f(x,y) = \frac{1}{1+x^2+y^2}$, determine os pontos críticos de $f$.

$$
\begin{aligned}
\frac{\partial f}{\partial x}(x,y) & = \frac{\partial }{\partial x}\frac{1}{1+x^2+y^2}\\
& =\frac{\partial}{\partial x} \left(\left(1+x^2+y^2\right)^{-1}\right)\\
& =(-1)(1+x^2+y^2)^{-1-1} \frac{\partial}{\partial x}\left(1+x^2+y^2\right)\\
& =\frac{-1}{\left(1+x^2+y^2\right)^2}2x\\
& =\frac{-2x}{\left(1+x^2+y^2\right)^2}
\end{aligned}
$$

$$
\begin{aligned}
\frac{\partial f}{\partial y}(x,y) & = \frac{\partial }{\partial y}\frac{1}{1+x^2+y^2}\\
& =\frac{\partial}{\partial y} \left(\left(1+x^2+y^2\right)^{-1}\right)\\
& =(-1)(1+x^2+y^2)^{-1-1} \frac{\partial}{\partial y}\left(1+x^2+y^2\right)\\
& =\frac{-1}{\left(1+x^2+y^2\right)^2}2y\\
& =\frac{-2y}{\left(1+x^2+y^2\right)^2}
\end{aligned}
$$

$$
(0,0) = \nabla f(x,y) = \begin{pmatrix}
\frac{-2x}{\left(1+x^2+y^2\right)^2} &
\frac{-2y}{\left(1+x^2+y^2\right)^2}
\end{pmatrix}
\implies x = 0 \land y = 0
$$

Portanto $f$ tem um ponto crítico $(x,y) = (0,0)$.
Será que é extremo relativo?

Pegando novamente na expressão da função, $f(x,y)= \frac{1}{1+x^2+y^2}$,
podemos majorá-la.

$$
x^2+y^2\geq 0 \implies 1+x^2+y^2 \geq 1 \implies \frac 11 \geq \frac{1}{1+x^2+y^2}
$$

$$
\begin{darray}{l l}
f(x,y)=\frac{1}{1+x^2+y^2}\leq 1, \forall (x,y) \in \R^2
& f(0,0)= \frac{1}{1+0^2+0^2}=1
\end{darray}
$$

Portanto ocorre máximo de $f$ em $(0,0)$.

---

Seja $f: \R^2 \to \R$, $f(x,y) = xy$, determine os pontos críticos de $f$.

$$
\begin{darray}{l l}
\frac{\partial f}{\partial x}=\frac{\partial}{\partial x}(xy) = y\frac{\partial x}{\partial x} = y\cdot 1 = y\\
\frac{\partial f}{\partial x}=\frac{\partial}{\partial x}(xy) = x
\end{darray}
$$

Podemos agora calcular os pontos críticos:

$$
(0,0) = \nabla f(x,y) = (y, x) \implies y = 0 \land x = 0
$$

Assim, o único ponto crítico de $f$ é $(x,y) = (0,0)$

Será que ocorre extremo de $f$ em $(0,0)$?

Como é que esta função se comporta junto a $(0,0)$?

$$
\begin{darray}{l l}
f(x,y) = xy & f(0,0) = 0
\end{darray}
$$

- $xy > 0$ se $x$ e $y$ têm o mesmo sinal
  $(x > 0 \land y > 0) \lor (x < 0 \land y < 0)$
- $xy < 0$ se $x$ e $y$ têm o sinais distintos
  $(x > 0 \land y < 0) \lor (x < 0 \land y > 0)$

Então, temos [ponto de sela](./0006-conjunto-de-nivel.md#ponto-de-sela) em $(0,0)$.

Este é um exemplo de ponto crítico que não é extremo.

---

Seja $f: \R^2 \to \R$, $f(x,y) = x^2-y^2$, quais são os pontos críticos de $f$?

$$
(0,0)=\nabla f(x,y) = (2x, -2y) \implies x=0 \land y=0
$$

Portanto ponto crítico de $f$ é $(x,y)=(0,0)$.

Será que ocorre extremo de $f$ em $(0,0)$?

- Se $x = 0$ então $f(x,y) = -y^2 \leq 0$.
- Se $y = 0$ então $f(x,y) = x^2 \geq 0$

Então, este ponto crítico não corresponde a extremo, pois temos [ponto de sela](./0006-conjunto-de-nivel.md#ponto-de-sela) em $(0,0)$.

:::

---

Slides:

- [Aula 13](https://drive.google.com/file/d/12vZLRp9qFxKanHFAt_GM7xedekEc1pyV/view?usp=sharing)
- [Aula 14](https://drive.google.com/file/d/1j9nv1inN2UGH9NpyxokZkj5MtRloKh1W/view?usp=sharing)

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
Sejam $f: \R^n \to \R$, $h = tv$ e $||v||=1$, podemos obter Fórmula de Taylor de $f$ de 2º ordem pela expressão:

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
$$

em que $Hf(a)$ é a matriz Hessiana de $f$ em $a$, que é uma matriz simétrica pelo [Teorema de Schwarz](#teorema-de-schwarz).

$$
Hf( a) =\begin{bmatrix}
\frac{\partial ^{2} f}{\partial x^{2}_{1}} & \frac{\partial ^{2} f}{\partial x_{2} \partial x_{1}} & \dotsc  & \frac{\partial ^{2} f}{\partial x_{n} \partial x_{1}}\\
\frac{\partial ^{2} f}{\partial x_{1} \partial x_{2}} & \frac{\partial ^{2} f}{\partial x^{2}_{2}} & \dotsc  & \frac{\partial ^{2} f}{\partial x_{2} \partial x_{1}}\\
\vdots  & \vdots  & \ddots  & \vdots \\
\frac{\partial ^{2} f}{\partial x_{1} \partial x_{n}} & \frac{\partial ^{2} f}{\partial x_{2} \partial x_{n}} & \dotsc  & \frac{\partial ^{2} f}{\partial x^{2}_{n}}
\end{bmatrix}
$$

---

Slides:

- [Aula 13](https://drive.google.com/file/d/12vZLRp9qFxKanHFAt_GM7xedekEc1pyV/view?usp=sharing)

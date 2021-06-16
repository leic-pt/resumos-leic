---
title: Derivada da Função Composta em Rⁿ
description: Derivada da Função Composta, Fórmula da Cadeia (Chain Rule)
path: /cdi-ii/derivada-composta
type: content
---

# Derivada da Função Composta em Rⁿ

```toc

```

## Derivada da Função Composta em Rⁿ

:::tip[DEFINIÇÃO]

Seja $g: D \subseteq \R^n \to \R^m$ diferenciável em $a \in D$  
Seja $f: \R^m \to \R^p$ diferenciável em $g(a)$

Então, $f\circ g: D \subseteq \R^n \to \R^p$ é diferenciável em $a$ e

$$
D(f\circ g)(a)=Df(g(a))\cdot Dg(a)
$$

:::

Também podemos obter a [Matriz Jacobiana](./0004-diferenciabilidade.md#matriz-jacobiana) de $f\circ g(a)$, $J^{f\circ g}_{a}$,
visto que é o produto da jacobiana de $f$ em $g(a)$, $J^f_{g(a)}$ com a jacobiana de $g$ em $a$, $J_a^g$:

$$
J^{f\circ g}_{a} = J^f_{g(a)}\cdot J^g_a
$$

Isto acontece porque a composta de transformações lineares corresponde ao produto de matrizes.

:::details[Exemplos]

Considerando as funções $g$ e $f$, determine $J^{f\circ g}_{(1,1)}$.

$$
\begin{darray}{l l}
g: \R^2 \to \R^2 & g(x,y)=(x^2+1,y^2)\\
f: \R^2 \to \R^3 & f(u,v)=(u+v, u, v^2)
\end{darray}
$$

$$
\begin{array}{l l l}
g_1(x,y)=x^2+1 &
g_2(x,y)=y^2 &\\
f_1(u,v)=u+v &
f_2(u,v)=u &
f_3(u,v)=v^2
\end{array}
$$

- $g$ é diferenciável porque as componentes são funções polinomiais
- $f$ é diferenciável porque as componentes são funções polinomiais

$$
J^{g}_{(x,y)} =\begin{bmatrix}
\frac{\partial g_{1}}{\partial x} (x,y) & \frac{\partial g_{1}}{\partial y} (x,y)\\
\frac{\partial g_{2}}{\partial x} (x,y) & \frac{\partial g_{2}}{\partial y} (x,y)
\end{bmatrix} =\begin{bmatrix}
2x & 0\\
0 & 2y
\end{bmatrix}
$$

$$
J^{f}_{(u,v)} =\begin{bmatrix}
\frac{\partial f_{1}}{\partial u} (u,v) & \frac{\partial f_{1}}{\partial v} (u,v)\\
\frac{\partial f_{2}}{\partial u} (u,v) & \frac{\partial f_{2}}{\partial v} (u,v)\\
\frac{\partial f_{3}}{\partial u} (u,v) & \frac{\partial f_{3}}{\partial v} (u,v)
\end{bmatrix} =\begin{bmatrix}
1 & 1\\
1 & 0\\
0 & 2v
\end{bmatrix}
$$

Então, através do produto matricial:

$$
\begin{aligned}
J^{f\circ g}_{(1,1)} & =J^{f}_{g(1,1)} \cdot J^{g}_{(1,1)}\\
 & =J^{f}_{(1^{2} +1,1^{2} )} \cdot J^{g}_{(1,1)}\\
 & =J^{f}_{(2,1)} \cdot J^{g}_{(1,1)}\\
 & =\begin{bmatrix}
1 & 1\\
1 & 0\\
0 & 2\cdot 1
\end{bmatrix} \cdot \begin{bmatrix}
2 & 0\\
0 & 2
\end{bmatrix}\\
 & =\begin{bmatrix}
2 & 2\\
2 & 0\\
0 & 4
\end{bmatrix}
\end{aligned}
$$

---

Seja $f: \R^2 \to \R^3 \quad f(x,y) = (e^{xy}, x+y,y^2)$, verifique se é diferenciável.

$$
\begin{array}{l l l}
f_1(x,y)=e^{xy} & f_2(x,y)=x+y & f_3(x,y)=y^2
\end{array}
$$

- $f_1(x,y)=f^2_1\circ f^1_1(x,y)$ com:

  - $f^1_1(x,y)=xy=p_1(x,y)\cdot p_2(x,y)$, um produto de funções diferenciáveis, logo diferenciável
  - $f^2_1(t)=e^t$ função diferenciável

  Então, $f_1(x,y)$ sendo a composta de duas funções diferenciáveis é diferenciável.

- $f_2(x,y) = x+y = p_1(x,y) + p_2(x,y)$, uma soma de funções diferenciáveis, logo diferenciável

- $f_3(x,y)= y^2=(p_2(x,y))^2 = p_2(x,y)\circ p_2(x,y)$, um produto de funções escalares diferenciáveis, logo diferenciável

Como cada uma das três funções componentes da $f$ são funções diferenciáveis então $f$ é diferenciável.

Considerando agora $g: \R^3 \to \R^2$, diferenciável em $(1,0,0)$ e com

$$
J^{g}_{(1,0,0)} =\begin{bmatrix}
-1 & 0 & 2\\
5 & \sqrt{2} & -\sqrt{2}
\end{bmatrix}
$$

Calcule $D(g\circ f)(0,0)$.

Como $g$ é diferenciável em $(1,0,0)$ e $f$ é diferenciável em $f(0,0)=(1,0,0)$
então $g\circ f$ é diferenciável em $(0,0)$. Portanto faz sentido calcular $D(g\circ f)(0,0)$.

$$
\begin{aligned}
J^{g\circ f}_{(0,0)} & =J^{g}_{(1,0,0)} \cdot J^{f}_{(0,0)}\\
 & =\begin{bmatrix}
-1 & 0 & 2\\
5 & \sqrt{2} & -\sqrt{2}
\end{bmatrix}\begin{bmatrix}
ye^{xy} & xe^{xy}\\
1 & 1\\
0 & 2y
\end{bmatrix}_{( x,y) =( 0,0)}\\
 & =\begin{bmatrix}
-1 & 0 & 2\\
5 & \sqrt{2} & -\sqrt{2}
\end{bmatrix}\begin{bmatrix}
0 & 0\\
1 & 1\\
0 & 0
\end{bmatrix}\\
 & =\begin{bmatrix}
0 & 0\\
\sqrt{2} & \sqrt{2}
\end{bmatrix}
\end{aligned}
$$

:::

## Fórmula da Cadeia (Chain Rule)

Se pegarmos na expressão anterior, podemos obter a expressão que
nos indica como calcular, individualmente, cada elemento da matriz $J^{f\circ g}{a}$.

$$
\left[\frac{\partial (f\circ g)_i}{\partial x_j}(a)\right]_{j = 1,\dots, n;\\ i = 1,\dots, p} =
\left[\frac{\partial f_i}{\partial y_k}(g(a))\right]_{k = 1,\dots, m;\\ i = 1,\dots, p}\cdot
\left[\frac{\partial g_k}{\partial x_j}(a)\right]_{k = 1,\dots, m;\\ j = 1,\dots, n}
$$

Atentendo ao produto matricial, podemos obter uma expressão mais simples:

:::tip[DEFINIÇÃO]

Seja $g: D \subseteq \R^n \to \R^m$ diferenciável em $a \in D$  
Seja $f: \R^m \to \R^p$ diferenciável em $g(a)$

$$
\frac{\partial (f\circ g)_i}{\partial x_j}(a)=\sum^m_{k=1} \frac{\partial f_i}{\partial y_k}(g(a))\cdot \frac{\partial g_k}{\partial x_j}(a)
$$

:::

:::details[Exemplos]

Sejam $f$ e $g$, diferenciáveis,

$$
\begin{array}{l l}
f:\R^3 \to \R^3 & f(x,y,z) = (x^2+y^2+z^2, x+y-z, xye^z)\\
g: \R^3 \to \R & g(u,v,w) = u^2-v^2+e^w
\end{array}
$$

$$
\begin{darray}{ l }
\frac{\partial (g\circ f)}{\partial y} (x,y,z)=\\ \\
=\frac{\partial g}{\partial u} (f(x,y,z))\frac{\partial f_{1}}{\partial y} (x,y,z)+\frac{\partial g}{\partial v} (f(x,y,z))\frac{\partial f_{2}}{\partial y} (x,y,z)\\
+\frac{\partial g}{\partial w} (f(x,y,z))\frac{\partial f_{3}}{\partial y} (x,y,z)\\ \\
=2u\Bigl|_{(u,v,w)=f(x,y,z)} \cdot 2y\Bigl|_{(x,y,z)} +(-2v)\Bigl|_{(u,v,w)=f(x,y,z)} \cdot 1+e^{w}\Bigl|_{(u,v,w)=f(x,y,z)} \cdot xe^{z}\Bigl|_{(x,y,z)}\\ \\
=2(x^{2} +y^{2} +z^{2} )\cdot 2y-2(x+y-z)+e^{xye^{z}} \cdot xe^{z}\\ \\
=4y(x^{2} +y^{2} +z^{2} )-2(x+y-z)+xe^{z} \cdot e^{xye^{z}}
\end{darray}
$$

:::

---

Slides:

- [Aula 9](https://drive.google.com/file/d/1hD4cmbOMvQePGDpdGdBiW7dDN5211U-_/view?usp=sharing)
- [Aula 10](https://drive.google.com/file/d/16jeZ0qLZeC0opCixeGwUH25yVjLjDSBn/view?usp=sharing)

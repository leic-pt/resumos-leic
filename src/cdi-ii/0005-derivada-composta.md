---
description: Derivada da função composta
---

# Derivada da Função Composta em Rⁿ

[[toc]]

## Derivada da Função Composta em Rⁿ

::: tip DEFINIÇÃO

Seja $g: D \subseteq \R^n \to \R^m$ diferenciável em $a \in D$  
Seja $f: \R^m \to \R^p$ diferenciável em $a \in g(a)$

Então, $f\circ g: D \subseteq \R^n \to \R^p$ é diferenciável em $a$ e

$$
D(f\circ g)(a)=Df(g(a))\circ Dg(a)
$$

:::

Também podemos obter a [Matriz Jacobiana](./0004-diferenciabilidade.md#matriz-jacobiana) de $f\circ g(a)$, $J^{f\circ g}_{a}$,
visto que é o produto da jacobiana de $f$ em $g(a)$, $J^f_{g(a)}$ com a jacobiana de $g$ em $a$, $J_a^g$:

$$
J^{f\circ g}{a} = J^f_{g(a)}\cdot J^g_a
$$

Isto acontece porque a composta de transformações lineares corresponde ao produto de matrizes.

::: details Exemplo

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

:::

## Fórmula de Cadeia (Chain Rule)

Se pegarmos na expressão anterior, podemos obter a expressão que
nos indica como calcular, individualmente, cada elemento da matriz $J^{f\circ g}{a}$.

$$
\left[\frac{\partial (f\circ g)_i}{\partial x_j}(a)\right]_{j = 1,\dots, n;\\ i = 1,\dots, p} =
\left[\frac{\partial f_i}{\partial y_k}(g(a))\right]_{k = 1,\dots, m;\\ i = 1,\dots, p}\cdot
\left[\frac{\partial g_k}{\partial x_j}(a)\right]_{k = 1,\dots, m;\\ j = 1,\dots, n}
$$

Atentendo ao produto matricial, podemos obter uma expressão mais simples:

::: tip DEFINIÇÃO

Seja $g: D \subseteq \R^n \to \R^m$ diferenciável em $a \in D$  
Seja $f: \R^m \to \R^p$ diferenciável em $a \in g(a)$

$$
\frac{\partial (f\circ g)_i}{\partial x_j}(a)=\sum^m_{k=1} \frac{\partial f_i}{\partial y_k}(g(a))\cdot \frac{\partial g_k}{\partial x_j}(a)
$$

:::

---

- [Aula 9](https://drive.google.com/file/d/1hD4cmbOMvQePGDpdGdBiW7dDN5211U-_/view?usp=sharing)

---
description: Teorema da Função Inversa e Teorema da Função Implícita
---

# Função Inversa e Função Implícita

[[toc]]

## Teorema da Função Inversa

Em CDI-I, tínhamos que qualquer $f: \R \to \R$ injetiva, isto é, objetos diferentes têm imagens diferentes,
admitia inversa $f^{-1}: C \to \R$.

Também se sabia que numa vizinhança, se $f$ for diferenciável e $f' \ne 0$, então $f^{-1}$ é diferenciável e que

$$
(f^{-1})'(y)=\frac{1}{f'(f^{-1}(y))}
$$

Como exemplo, temos $f(x) = e^x$, em que

$$
\begin{darray}{c}
f(x)=e^x \quad f'(x) = e^x \ne 0 \implies f^{-1} \text{é diferenciável}\\
(\log y)' = (f^{-1})'(y)=\frac{1}{f'(f^{-1}(y))} = \frac{1}{f'(\log y)} = \frac{1}{e^{\log y}} = \frac{1}{y}
\end{darray}
$$

::: tip TEOREMA

Seja $f: \R^n \to \R^n$ uma função de classe $C^1$, e $a\in\R^n$.

Se $\det Df(a) \ne 0$, então $f$ é invertível numa vizinhança de $a$ e está definida a função $f^{-1}$:

$$
\begin{darray}{c}
f^{-1}: V \subset \R^n \to \R^n\\
Df^{-1}(y) = \left(D f(f^{-1}(y))\right)^{-1}, \forall y \in V
\end{darray}
$$

:::

::: warning

Caso tenhamos que $\det D f(a) = 0$, não podemos concluir se a função é inversa ou não.

Por exemplo:

- Com $f: \R \to \R, f(x) = x^2$, então $f'(0) = 0$ e a função não é invertível na vizinhança de 0.
  [imagem]
- Com $f: \R \to \R, f(x) = x^3$, então $f'(0) = 0$ e a função é invertível na vizinhança de 0.
  [imagem]

:::

::: details Exemplo

Seja

$$
\begin{array}{l l l l}
f(x,y) = (e^x \cos y, e^x \sin y) & x,y \in \R & f:\R^2 \to \R^2 & C^1
\end{array}
$$

Será que $f$ é inversível numa vizinhança de $(1,0)$?

Começamos então por calcular a Jacobiana de $f$, e ver se esta é nula em $(1,0)$.

$$
Df(x,y)=
\begin{bmatrix}
e^x \cos y & - e^x \sin y\\
e^x \sin y & e^x \cos y
\end{bmatrix}
$$

$$
Df(1,0)=
\begin{bmatrix}
e & 0\\
0 & e
\end{bmatrix}
$$

$$
\det Df(1,0) = e^2 \ne 0
$$

Então, pelo {green}(**Teorema da Função Inversa**), $f$ é inversível numa vizinhança de $(1,0)$ e

$$
Df^{-1}(u,v) = \left(Df \left(f^{-1}(u,v) \right) \right)^{-1}
$$

$$
\begin{darray}{c}
f(1,0) = (e,0) \implies f^{-1}(e,0) = (1,0)\\
Df^{-1}(e, 0) = \left(Df\left(f^{-1}(e,0) \right) \right)^{-1} = \left(Df(1,0) \right)^{-1} = \begin{bmatrix}
e & 0\\
0 & e
\end{bmatrix}^{-1}
=
\begin{bmatrix}
\frac{1}{e} & 0 \\
0 & \frac{1}{e}
\end{bmatrix}

\end{darray}
$$

:::

## Teorema da Função Implícita

::: tip TEOREMA

Seja $F \in C^1, F: \R^n \times \R^m \to \R^m$ e
considerando a curva de nível $F = 0$ e um ponto $a = (x_0, y_0)$ nessa curva.

Se $\det (D_y F)(a) \ne 0$, então numa vizinhança de $a$, a curva de nível é um gráfico $y=f(x)$ para uma função desconhecida $f$.

{red}(_$D_y F$ é a matriz jacobiana só em relação às variáveis $y$_)

Além disso, ficamos também a saber que:

$$
D_xf(x) = - (D_yF)^{-1} D_x F(x, f(x))
$$

:::

::: details Demonstração

$$
\begin{aligned}
\begin{cases}
F(x,y) = 0\\
y=f(x)
\end{cases}
&
\Rightarrow
F(x,f(x)) = 0,\quad \forall x \text{ na vizinhança}\\
& \Rightarrow D(F(x, f(x))) = 0\\
& \Rightarrow D_xF + D_yF \cdot D_x f = 0\\
& \Rightarrow D_yF + D_xf = - D_xF\\
& \Rightarrow D_xf(x) = - (D_yF)^{-1} D_x F(x, f(x))
\end{aligned}
$$

:::

::: details Exemplos

**Mostre que numa vizinhança de $(0, \pi)$ a equação $F(x,y) = x^2y + \sin(x+y) = 0$ define $y$ como função de $x$.**

Começamos por certificar as condições para aplicar o {green}(**Teorema da Função Implícita**):

- $F \in C^1$
- $F(0, \pi) = 0^2 \times \pi + \sin(0 + \pi) = 0$
- $\frac{\partial F}{\partial y}\big|_{(0,\pi)} = x^2+\cos(x+y) \big|_{(0,\pi)} = \cos(\pi) = -1 \ne 0$  
  {red}(_$\frac{\partial F}{\partial y}$ é a matriz jacobiana relativa às variáveis que vão ficar dependentes_)

Pelo {green}(**Teorema da Função Implícita**), numa vizinhança de $(0, \pi)$, existe $y = f(x)$.

$$
\begin{aligned}
f'(0) &= - \left(\frac{\partial F}{\partial y} (0, \pi) \right)^{-1} \cdot \frac{\partial F}{\partial x}(0, \pi)\\
&= -\frac{1}{-1} (2xy+\cos(x+y)) \big|_{(0,\pi)}\\
&= -1
\end{aligned}
$$

---

**Mostre que na vizinhança de $(1,1,1,1)$ as equações**

$$
\begin{cases}
xu + yvu^2 = 2\\
xu^3 + y^2v^4 = 2
\end{cases}
$$

**definem $u$ e $v$ como funções de $x$ e $y$.**  
**Além disso, calcule $\frac{\partial u}{\partial x}(1,1)$**

Podemos então escrever
$F(x,y,u,v) = (xu + yvu^2 - 2, xu^3 + y^2v^4 - 2)$

De seguida, verificamos as condições para a aplicação do teorema:

- $F\in C^1$
- $F(1,1,1,1) = (1+1-2, 1+1-2) = (0,0)$

$$
D_{(u,v)} F = \begin{bmatrix}
x+2yvu & yu^2\\
3xu^2 & 4y^2v^3
\end{bmatrix}
_{\big |_{(1,1,1,1)}} = \begin{bmatrix}
3 & 1\\
3 & 4
\end{bmatrix}
$$

- $\det D_{(u,v)} F = 9 \ne 0$

Pelo {green}(**Teorema da Função Implícita**), numa vizinhança de $(1,1,1,1)$, existe $(u,v) = f(x,y)$.

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

Pelo que $\frac{\partial u}{\partial x} = -\frac{1}{3}$, correspondente à entrada $0,0$ da matriz acima.

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

:::

---

Slides:

- [Aula 27](https://drive.google.com/file/d/1qTo9pZIwfMRTr8X3kEv1MQ6hqVha6bLy/view?usp=sharing)
- [Aula 28](https://drive.google.com/file/d/1ZGn5YcukL4WcDkqqijbVqdovz_sO0smc/view?usp=sharing)

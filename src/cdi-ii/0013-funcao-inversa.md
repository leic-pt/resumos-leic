---
description: Teorema da Função Inversa
---

# Função Inversa

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

---

Slides:

- [Aula 27](https://drive.google.com/file/d/1qTo9pZIwfMRTr8X3kEv1MQ6hqVha6bLy/view?usp=sharing)

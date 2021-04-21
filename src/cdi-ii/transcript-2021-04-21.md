$f: \R \to \R$ injetiva (objetos diferentes têm imagens diferentes)

$f^{-1}: C \to \R$ está bem definido

$f(x) = e^x$ injetiva

$f^{-1} (y)=\log(y)$

Se $f$ for diferenciável, então $f^{-1}$ é diferencial

$$
(f^{-1})'(y)=\frac{1}{f'(f^{-1}(y))}
$$

$$
\begin{array}{l l}
f(x)=e^x & f'(x) = e^x \ne 0 \implies f^{-1} \text{é diferenciável}
\end{array}
$$

$$
(\log y)' = (f^{-1})'(y)=\frac{1}{f'(f^{-1}(y))} = \frac{1}{f'(\log y)} = \frac{1}{e^{\log y}} = \frac{1}{y}
$$

---

$$
f: \R^n \to \R^n, C^1
$$

? $f$ é invertível e $f^{-1}$ é $C^1$?

1. Inverter uma função sem restringir o domínio podo ser complicado

$f(x)=\sin x$

[imagem]

?Fixado $a \in \R^n$, será que $f$ é invertível numa vizinhança desse ponto?

$f(x)=\sin x$

[imagem]

? Se $f'(a) \ne 0$, $f$ é invertível na vizinhança de $a$ ?

$f(x) = x^3$

[imagem]

é invertível

---

Teorema da função inversa

$$
\begin{array}{l l l}
f: \R^n \to \R^n & C^1 & a \in \R^n
$$

Se $\det Df(a) \ne 0$, então $f$ é invertível numa vizinhança de $a$,
$f^{-1}: V \subset \R^n \to \R^n$

$$
Df^{-1}(y)=(Df(f^{-1}(y)))^{-1}, \forall y \in V
$$

--

Exemplo

$$
\begin{array}{l l l l}
f(x,y) = (e^x \cos y, e^x \sin y) & x,y \in \R & f:\R^2 \to \R^2 & C^1
\end{array}
$$

? Será que $f$ é inversível numa vizinhança de $(1,0)$?

$$
Df(x,y)=
\begin{bmatrix}
e^x \cos y & - e^x \sin y\\
e^x \sin y & e^x \cos y
\end{bmatrix}
$$

$$
Df(x,y)=
\begin{bmatrix}
e & 0\\
0 & e
\end{bmatrix}
$$

$$
\det = e^2 \ne 0
$$

Pelo **Teorema da Função Inversa**, $f$ é inversível numa vizinhança de $(1,0)$ e

$$
Df^{-1}(u,v) = (Df(f^{-1}(u,v)))^{-1}
$$

$$
\begin{darray}
f(1,0) = (e,0) \implies f^{-1}(e,0) = (1,0)\\
Df^{-1}(e, 0) = (Df(f^{-1}(e,0)))^{-1} = (Df(1,0))^{-1} = \begin{bmatrix}
\frac{1}{e} & 0 \\
0 & \frac{1}{e}
\end{bmatrix}\\

\begin{bmatrix}
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

Obs:

$$
\begin{aligned}
\det Df(x,y) &= (e^x \cos y)^2 - (-(e^x)^2 \sin^2 y)\\
&=(e^x)^2(\cos^2 y + \sin^2 y)\\
&=(e^x)^2 \ne 0
\end{aligned}
$$

Teorema da função inversa -> $f$ é invertível numa vizinhança de um ponto qualquer $(x,y)$

?$f$ é invertível? NÃO

$$
f(x,y) = (e^x\cos y, e^x \sin y)
$$

$$
\begin{aligned}
f(x,y + 2 \pi) &= (e^x \cos(y+2\pi), e^x \sin (y + 2\pi))\\
&= (e^x \cos(y) , e^x \sin(y))\\
&= f(x,y)
$$

Logo, $f$ não é injetiva, então $f$ não é invertível

Obs:

Se $\det D f(a) = 0$, não consigo concluir nada:

$$
\begin{array}{l l l}
f:\R \to \R & f(x) = x^2 & f'(0) = 0
$$

[imagem]

não é invertível na vizinhança de 0

$$
\begin{array}{l l l}
f:\R \to \R & f(x) = x^3 & f'(0) = 0
$$

[imagem]

é invertível na vizinhança de 0

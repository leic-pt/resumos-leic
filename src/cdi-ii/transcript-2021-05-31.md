$F: \R^3 \to \R^3$

$$
rot F = \nabla \times F = \begin{vmatrix}
e_1 & e_2 & e_3\\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z}\\
F_1 & F_2 & F_3
\end{vmatrix}
$$

Teorema de Stokes:

$S$ superfície orientada com bordo $\partial S$ (com orientação dada pela regra da mão direita)

$$
\int_S \rot F \cdot \vec n = \int_{\partial S} F \d g
$$

Dado $G: \R^3 \to \R^3$ se $G = \rot f$

$$
\int_S G \cdot \vec n = \int_S \rot F \cdot \vec n = \int_{\partial S} F \d g
$$

1. Vimos que $\div (\rot F) = 0, F \in C^2$

   Então, se $\div G \ne 0$, não pode ser um rotacional

2. Definição: $A \subset \R^n$ aberto, diz-se em estrela se existir $x_0 \in A$ (centro da estrela) tal que o segmento que une $x_0$ a qualquer ponto de A está contido em $A$.

[imagem]

aberto estrelado => aberto simplesmente conexo  
mas o contrário não é verdade

Teorema:

Se $G: D \subset R^3 \to \R^3$ com $\div G = 0$ e o domínio de $G$ é um aberto em estrela então existe $F: \R^3 \to \R^3$ tal que $\rot F = G$.

Exemplo:

Se $G: \R^3 \to \R^3 com $\div G = 0$. Como $\R^3$ é um aberto em estrela, $G = \rot F$.

---

Como calcular o potencial vetor de $F$?

1.

$$
rot F = \nabla \times F = \begin{vmatrix}
e_1 & e_2 & e_3\\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z}\\
F_1 & F_2 & F_3
\end{vmatrix}
= (\frac{\partial F_3}{\partial y} - \frac{\partial F_2}{\partial z}, - \frac{\partial F_3}{\partial x} + \frac{\partial F_1}{\partial z}, \frac{\partial F_2}{\partial x} - \frac{\partial F_1}{\partial y})
$$

$$
\begin{cases}
\frac{\partial F_3}{\partial y} - \frac{\partial F_2}{\partial z} = G_1\\
\frac{\partial F_1}{\partial z} - \frac{\partial F_3}{\partial x} = G_2\\
\frac{\partial F_2}{\partial x} - \frac{\partial F_1}{\partial y} = G_3
\end{cases}
$$

2.

Se $G = \rot F$ e $\phi: \R^3 \to \R$

$$
\rot (F + \nabla \phi) = \rot F + \rot (\nabla \phi) = \rot F + 0 = G
$$

3.

Seja $\phi = - \int F_1 (x,y,z) \d x$ ($\phi$ é menos a primitiva de $F_1$ em ordem a $x$)

- $\rot(F + \nabla \phi) = G$
- A 1º coordenada de $F + \nabla \phi$ é $F_1 + \frac{\partial \phi}{\partial x} = F_1 - F_1 = 0$

Logo, existe um potencial vetor com a 1º componente nula.

(o mesmo é válido com qualquer componente)

Exemplo:

$F(x,y,z) = (x e^y, -2e^y, ze^y)$

a) $F$ é um rotacional?

$$
\div F = e^y - 2e^y + e^y = 0
$$

Domínio de $F = \R^3$ é aberto em estrela

Logo, $F$ é um rotacional

Será que $F = \rot A$?, Por exemplo, $A_2$ = 0,

$$
\begin{cases}
\frac{\partial A_3}{\partial y} - \frac{\partial A_2}{\partial z} = x e^y\\
\frac{\partial A_1}{\partial z} - \frac{\partial A_3}{\partial x} = -2e^y\\
\frac{\partial A_2}{\partial x} - \frac{\partial A_1}{\partial y} = z e^y
\end{cases}
\Leftrightarrow
\begin{cases}
\frac{\partial A_3}{\partial y} = x e^y\\
-\\
\frac{\partial A_1}{\partial y} = - z e^y
\end{cases}
\Leftrightarrow
\begin{cases}
A_3 = \int x e^y \d y = x e^y + C_1(x,z)\\
(-e^y + \frac{\partial C_2}{\partial z}) - (e^y + \frac{\partial C_1}{\partial x}) = -2 e^y\\
A_1 = -z e^y + C_2(x,z)
\end{cases}
\Leftrightarrow
\begin{cases}
-\\
-2e^y + \frac{\partial C_2}{\partial z} - \frac{\partial C_1}{\partial x}= -2 e^y\\
-
\end{cases}
\Leftrightarrow
\begin{cases}
-\\
\frac{\partial C_2}{\partial z} = \frac{\partial C_1}{\partial x}\\
-
\end{cases}
$$

Escolhendo $C_1 = C_2 = 0$, $A = (-z e^y, 0, xe^y)$

b) $S = \{x^2 + z^2 = y^2: 1 < y < 2\}$, $\vec n_y < 0$

[imagem]

Qual o valor de $\int_S F \cdot \vec n$?

$$
\int_S F \cdot \vec n = \int_S \rot A \cdot \vec n = \int_{\partial S} A \d g
$$

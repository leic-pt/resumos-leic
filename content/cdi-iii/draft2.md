Exemplo 3.4.2 (do livro)

$$
\varphi = \frac{q}{4\pi M}
$$

$M = \sqrt{x^2 + y^2 + z^2}$

$E = -\nabla \varphi = \frac{q}{4\pi M^3}(x,y,z)$

$$
\frac{\partial \varphi}{\partial x} = \frac{q}{4\pi} \left(\frac{-1}{M^2}\right) \frac{\partial M}{\partial x} = \frac{-q}{4\pi} \frac{x}{M^3}
$$

Seja $V \subset \R^3$ um domínio simples tal que $0 \notin \partial V$

$$
\int_{\partial V} E\cdot n = \begin{cases}
0 & \text{se} 0 \notin V\\
q & \text{se} 0 \in V
\end{cases}
$$

Se $0 \notin V$

$$
\int_{\partial V} E \cdot n = \iiint_V \div E
$$

$$
\div E = \frac{q}{4\pi} \left(\frac{M^2 -3x^2+m^2-3y^2+M^2-3z^2}{M^5}\right)
= \frac{q}{4\pi} \left(\frac{3M^2 -3(x^2+y^2+z^2)}{M^5}\right)
$$

$$
\frac{\partial }{\partial x}(\frac{x}{M^3}) = \frac{1}{M^3} + x \frac{-3}{M^4} \frac{\partial M}{\partial x} = \frac{1}{M^3} - \frac{3x^2}{M^5} = ... = 0
$$

$x=\frac{1}{M^3}$

Para $0 \in V$ (?)

Não sei oq com uma bola de raio r

$$
U = V \blackslash B_r(0,0,0)
$$

Seja $r>0$, $B_r(0,0,0) \subset V$

$$
0 = \iiint_U \div E = \int_{\partial U} E\cdot n = \int_{\partial V} E \cdot n + \frac{1}{M} \int_{\partial B_r} E\cdot (-x,-y,-z)
$$

$$
\int_{\partial V} E \cdot n = \frac{1}{M} \int_{\partial B_r} E\cdot (x,y,z)
= \frac{q}{4\pi} \frac{1}{M^4} \int_{\partial B_r} (x^2+y^2+z^2)
= \frac{q}{4\pi} \frac{1}{M^2} \int_{\partial B_r}
= \frac{q}{4\pi} 4\pi r^2 = q
$$

---

Rotacional

Sejam $F: U \to \R^3$, $F = (P,Q,R)$ e $U \subset \R^3$ aberto, então:

$$
\rot F = (\frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z}, \frac{\partial P}{\partial z} - \frac{\partial R}{\partial x}, \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y})
= \begin{vmatrix}
e_1 & e_2 & e_3\\
\frac{\partial }{\partial x} & \frac{\partial }{\partial y} & \frac{\partial }{\partial z}\\
P & Q & R
\end{vmatrix} = \nabla \times F
$$

---

Propriedades rotacional

Se $F$ é gradiente, ou seja, $F = grad \varphi = \nabla \varphi$ com $\varphi \in C^2$, então $\rot F = (0,0,0)$

Demonstração:

$$
F = \left(\frac{\partial \varphi}{\partial x}, \frac{\partial \varphi}{\partial y}, \frac{\partial \varphi}{\partial z})
$$

$$
\rot F = (\frac{\partial^2 \varphi}{\partial y \partial z} - \frac{\partial^2 \varphi}{\partial z \partial y}, \dots, \dots) = (0,0,0)
$$

---

Propriedades rotacional

Se $F \in C^2$ então $\dim(\rot F) = 0$.

Demonstração:

$$
\div (\rot F) = \frac{\partial^2 R}{\partial x \partial y} - \frac{\partial^2 Q}{\partial x \partial z} + \frac{\partial^2 P}{\partial y \partial z} - \frac{\partial^2 R}{\partial y \partial x} + \frac{\partial^2 Q}{\partial z \partial x} - \frac{\partial^2 P}{\partial z \partial y} = 0
$$

---

propriedades rotacional

Seja $U$ um retângulo (paralelipípedo (?)) aberto em $\R^3$

$$
U = \{(x,y,z) : a_0 < x < a_1 \land b_0 < y < b_1 \land c_0 < z < c_1\}
$$

Se $\div G = 0$ em $U$ então $\exists F : U \to \R^3$ de classe $C^2$ tal que $G = \rot F$

Demonstração:

Sejam $G = (A,B,C)$ e $F = (P, Q, R)$

$$
\begin{cases}
\frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z} = A\\
\frac{\partial P}{\partial z} - \frac{\partial R}{\partial x} = B\\
\frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} = C
\end{cases}
$$

Como existem infinitas soluções, e só queremos mostrar que existe uma, podemos tomar, por exemplo, $R \equiv 0$

Ou seja, ficamos com

$$
- \frac{\partial Q}{\partial z} = A\\
Q = - \int_{z_0}^{z} A(x,y,s) \d s + \alpha (x,y)\\

\frac{\partial P}{\partial z} = B\\
P = \int_{z_0}^{z} B(x,y,s) \d s + \beta (x,y)\\
$$

Assim,

$$
- \int_{z_0}^{z} \frac{\partial A}{\partial x}(x,y,s) \d s + \frac{\partial \alpha}{\partial x} - \int_{z_0}^{z} \frac{\partial B}{\partial y}(x,y,s) \d s - \frac{\partial \beta}{\partial y} = C\\
\int_{z_0}^{z} \frac{\partial C}{\partial z} (x,y,s) \d s + \frac{\partial \alpha}{\partial x} - \frac{\partial \beta}{\partial y} = C(x,y,z)
$$

Como $\int_{z_0}^{z} \frac{\partial C}{\partial z} (x,y,s) \d s = C(x,y,z) - C(x,y,z_0) = 0$, ficamos com

$$
\frac{\partial \alpha}{\partial x} - \frac{\partial \beta}{\partial y} = C(x,y,z)
$$

Tomando $\alpha = 0$, fica-se com $\beta = - \int_{y_0}^{y} C(x,s,z_0) \d s + \gamma(x)$.

Toma-se $\gamma \equiv 0$

Ficamos então com

$$
F = \left( \int_{z_0}^{z} B(x,y,s) \d s- \int_{y_0}^{y} C(x,s,z_0) \d s, -\int_{z_0}^{z} A(x,y,s) \d s, 0\right)
$$

---

Exercício 3.12 (do livro)

**Seja o campo**

$$
F(x,y,z) = (x-2z, 1-y, -1)
$$

a. **Verifique que $F$ é um rotacional**

$$
\div F = 1 - 1 + 0 = 0
$$

Como $\div F = 0$, então $F$ é um rotacional (pela propriedade anterior).

b. **Determine $G$ tal que $F = \rot G$**

Seja $G = (G_1, G_2, G_3)$,

$$
\begin{cases}
\frac{\partial G_3}{\partial y} - \frac{\partial G_2}{\partial z} = x-2z\\
\frac{\partial G_1}{\partial z} - \frac{\partial G_3}{\partial x} = 1-y\\
\frac{\partial G_2}{\partial x} - \frac{\partial G_1}{\partial y} = -1
\end{cases}
$$

Tome-se $G_3 = 0$

$$
- \frac{\partial G_2}{\partial z} = x-2z\\
G_2 = -zx + z^2 + C_2 (x,y)
$$

$$
\frac{\partial G_1}{\partial z} = 1-y\\
G_1 = z-yz + C_1(x,y)
$$

$$
\frac{\partial }{\partial x} (-zy + z^2 + C_2) - \frac{\partial }{\partial z} (z-yz +C_1) = -1\\
-z + \frac{\partial C_2}{\partial x} + z - \frac{\partial C_1}{\partial y} = -1\\
\frac{\partial C_2}{\partial x} - \frac{\partial C_1}{\partial y} = -1
$$

Tomando $C_2 = 0$, então, $C_1 = y+C_3(x)$; tomando $C_3 = 0$  
vem $G = (z-yz+y, -zx+z^2, 0)$

c. **Verifique que $G-(x+y+z, z^2, xy)$ tem rotacional $0$**

Chamamos $L = G-(x+y+z, z^2, xy)$ e $H = (x+y+z, z^2, xy)$.

$$
\rot L = \rot G - \rot H = F - \rot H
$$

$$
DH = \begin{bmatrix}
1 & 1 & 1\\
0 & ... & 2z\\
y & x & ...
\end{bmatrix}
$$

$$
\rot L = F - (x-2z, 1-y, -1) = 0
$$

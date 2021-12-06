Propriedades, para uma certa função $F: U \to \R^3$, que tem $\rot F$.

- $\div(\rot F) = 0$
- Sendo $varphi = U \to \R$, então $\rot(\nabla \varphi) = 0$

---

:::tip[Teorema]

Seja $U = ]a_0, a_1[ \times ]b_0, b_1[ \times ]c_0, c_1[$, e $G : U \to \R^3$ e $\rot G =(0,0,0)$,

então existe $\varphi: U \to \R$ tal que $G = \nabla \varphi$.

:::

:::info[Exemplo (3.11)]

**Seja $F(x,y,z) = (x^2, y^2, z^2)$ e $\rot F = (0,0,0)$, determine o potencial escalar de $F$**

Queremos descobrir um $\varphi$ tal que $F = \nabla \varphi$:

$$
\begin{cases}
\frac{\partial \varphi}{\partial x} = x^2\\
\frac{\partial \varphi}{\partial y} = y^2\\
\frac{\partial \varphi}{\partial z} = z^2
\end{cases}
$$

Então, pegando num dos termos, ficamos com $\varphi = \frac{x^3}{3} + C_1(y,z)$.

Continuando a resolver o sistema,

$$
\frac{\partial \varphi}{\partial y} = \frac{\partial C_1}{\partial y} = y^2
$$

Aqui, como $C_1$ não depende de $x$, podemos dizer que $C_2$ só depende de $z$:

$$
C_1 = \frac{y^3}{3} + C_2(z)
$$

$$
\varphi = \frac{x^3}{3} + \frac{y^3}{3} + C_2(z)
$$

... tá incompleto, faltam acabar e descobrir o fim

:::

---

$$
F = (P, Q, R)\\
\rot F = \left( \frac{\partial R}{\partial y} - \frac{\partial Q}{\partial z}, \frac{\partial P}{\partial z} - \frac{\partial R}{\partial x}, \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y} \right)\\
F: V \to \R^2, V \subset \R^3 \text{aberto}\\
$$

Queremos calcular o fluxo $\int_S \rot F \cdot n$

$S = \varphi(U), U \subset \R^3, \varphi: U \to \R^3$

$$
n = \frac{\frac{\partial \varphi}{\partial u} \times \frac{\partial \varphi}{\partial v}}{||\frac{\partial \varphi}{\partial u} \times \frac{\partial \varphi}{\partial v}||}
$$

ou seja, $||n|| = 1$

$S$ é orientável se existe $n$ contínua.

$$
\int_S \rot F \cdot n = \int_{\partial S} F \d \gamma
$$

onde $\gamma$ é um caminho seccionalmente regular que percorre $\partial S$ no sentido induzido por $n$ (normal unitária à superfície).

Se $P$ e $Q$ não depender de $z$, temos que $\rot F = (0, 0, \frac{\partial Q}{\partial x} - \frac{\partial P}{\partial y})$

O Teorema de Green é basicamente o Teorema da Divergência a 2 dimensões

---

demonstração

Seja $F = (P, 0, 0)$ (para simplificar) e um caminho $\gamma(t)$

$$
\int_{\partial S} F \d \gamma = \int_I F(\gamma(t)) \cdot \gamma'(t) \d t
$$

okay, i give up, n vale a pena fazer isto

---

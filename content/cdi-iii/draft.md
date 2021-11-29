Superfícies

$$
S \subset \R^3
$$

parametrização

$$
\varphi: U \subset \R^2 \to \R^3
$$

de classe $C^1$ e $D \varphi$ com car = 2 e injetiva (relacionado com o exemplo abaixo)

---

$$
S \subset \R^3
$$

$S$ superfície regular

parece-me ser arranjar duas parametrizações ad mesma coisa e ver se $S \union V (p) = \varphi (p)$

por exemplo, se tiveremos $S = \{(x,y,z) \in \R^3: x^2+ y^2 = 1\}$

Temos por exemplo a parametrização $\varphi_1 (\theta, z) = (\cos \theta, \sin \theta, z)$.

$$
D \varphi_1 = \begin{bmatrix}
-\sin\theta & 0\\
\cos \theta & 0\\
0 & 1
\end{bmatrix}
$$

---

ardeu, n há material teórico online wut

---

exemplo (maybe not?)

(o $V$ é a vizinhança)

Seja $S \subset \R^3$ uma superfície regular

a) $F: V \to \R$, $V$ é aberta de $\R^3$

$$
\forall p \in \S \exists V(p)\\
S \union V(p) = \{(x,y, z) \in \R^3: F(x,y,z) = 0\}\\
\nabla F \ne (0, 0, 0)
$$

b) $S \union V(p) = \{(x,y,z): z=\psi (\alpha,\beta)\}$
para $\psi : W \subset \R^2 \to \R, C^1$, com $W$ aberto

---

pegando em $S = \{(x,y,z) \in \R^3: x^2+ y^2 = 1\}$ novamente, podemos "dividir" no seguinte (não percebo bem para quê nem porquê tho)

- $\{y > 0\} \union S = \{(x,y,z)} \in \R^3 : y=\sqrt{1 -x^2}$
- $\{y < 0\} \union S = \{(x,y,z)} \in \R^3 : y=-\sqrt{1 -x^2}$
- $\{x > 0\} \union S = \{(x,y,z)} \in \R^3 : x=\sqrt{1 -y^2}$
- $\{x < 0\} \union S = \{(x,y,z)} \in \R^3 : y=-\sqrt{1 -y^2}$

---

Seja $S$ uma superfície regular, e um vetor $v \in \R^3$.
Então, $v$ é tangente à superfície $S$ em $p$ se e só se existe um caminho $\gamma : I \to \S$
com $0 \in \int I$ e $\gamma (0) = P$ tal que $\gamma'(0) = v$

Ao conjunto dos vetores tangentes a $p \in S$ dá-se o nome de $T_p S$, espaço tangente de $S$ em $p$, e ao conjunto dos vetores normais, dá-se o nome de $(T_pS)^\prep$, espaço normal de $S$ em $p$.

---

$S = \varphi (U)$
$S = \{(x,y,z) \in \R^3: F(x,y,z) = 0\}$
$p = \varphi (u_0)$
$F(\varphi(U)) = 0$ para $u$ numa vizinhança de $u_0$
$\nabla F (\phi(u_0)) . D\varphi(u_0) = 0$
$\nabla F(p) . D\varphi (u) =0$

---

Definição de integral de superfície

:::tip[Definição]

Dada uma superfície $S \subset \R^3$ regular e determinada para uma única parametrização $\varphi: U \to \R^3$,
e uma função contínua $f: S \to \R$:

$$
\int_S f = \iint_D f \circ \phi(u) \times \sqrt{\det(D \varphi(u))^T D \varphi(u)} \d u
$$

:::

isto parece ser muito parecido a CDI2 ngl

$\sqrt{\det(D \varphi(u))^T D \varphi(u)}$ é o fator de integração (? n tenho a certeza do nome), que é igual a $||v|| \cdot ||w|| \cdot \sin \theta = ||v\times w||$

Portanto também se pode escrever

$$
\int_S f = \iint_D f \circ \phi(u) \times ||\frac{\partial \varphi}{\partial x} \times \frac{\partial \varphi}{\partial y}|| \d u
$$

---

se tivermos uma superfície que é o gráfico de uma função

$$
S = \{(x,y,z) \in U : z = \psi(x,y)\}
$$

se tivermos este caso, é trivial defini-la como uma parametrização: $\varphi(x,y) = (x,y, \psi(x,y))$

Assim teríamos:

$$
D \varphi = \begin{bmatrix}
1&0\\
0&1\\
\frac{\partial \varphi}{\partial x} & \frac{\partial \varphi}{\partial y}
\end{bmatrix} = \begin{bmatrix}
1&0\\
0&1\\
a&b
\end{bmatrix}
$$

$$
D\varphi^T D\varphi = \begin{bmatrix}
1+a^2 & ab\\
ab & 1+b^2
\end{bmatrix}
$$

$$
\det(D\varphi^T D\varphi) = (1+a^2)(1+b^2) - a^2b^2 = 1+a^2 +b^2
$$

$$
\int_S f = \iint_D f \circ \phi(u) \times \sqrt{1+ (\frac{\partial \varphi}{\partial x}) + (\frac{\partial \varphi}{\partial y})^2} \d u
$$

---

Sejam $F: U \subset \R^3 \to \R^3$ e $S$ uma superfície regular.
Então, o fluxo de $F$ na superfície $S$ é

$$
\int_S F\cdot n
$$

em que $n$ é o vetor unitário normal a $S$, ou seja, $n(p) \in T_p S$ e $||n|| = 1$.

---

Sendo $F=(P,Q,R)$

A divergência de $F$ é definida por

$$
\div F = \frac{\partial P}{\partial x}+\frac{\partial Q}{\partial y}+\frac{\partial R}{\partial z} = \nabla F
$$

$$
F(x,y,z) = (xyz, e^y xz, xy)\\
\div F = yz + e^y xz + 0 = (y+e^yx) z
$$

---

Teorema da Divergência

Seja $F: U \to \R^3$ de classe $C^1$ e $U \subset \R^3$ aberto e $V \subset U$ um domínio simples.

Então,

$$
\int_V \div F = \int_{\partial V} F\cdot n
$$

onde $n$ é a normal unitária exterior a $V$.

---

Domínio elementar:

Exemplo (a semi esfera):

$$
V = \{(x,y,z) \in \R^3: x^2+y^2+z^2 < 1 \land z > 0\} = \{(x,y) \in D : 0 < z < \sqrt{x^2 + y^2}\}
$$

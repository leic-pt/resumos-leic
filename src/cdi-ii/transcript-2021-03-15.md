Recapitulando diferenciabilidade

$f: D \subseteq \R^n\to\R^m , a\in D, h\in\R^n$

f é diferenciável em a <=> existe uma transformação linear (chamada "derivada de $f$ em $a$") tal que
$f(a+h)-f(a)=Df(a)(h)+o(h)$ quando $h\to \vec 0$.
ou
$\lim_{h\to \vec 0}\frac{f(a+h)-f(a)-Df(a)(h)}{||h||}=\vec 0

Se $f$ é diferenciável em $a$, como é que se caracteriza a transformação linear $Df(a)$?
Pela matriz jacobiana de $f$ em $a$, $J^f_a$ (em relação às bases canónicas).

$$
...
$$
derivadas parciais de $f_i$ em $a$ em ordem a $x_j$

e as derivadas parciais são casos particulares de "derivada de $f$ em $a$ segundo vetor $v$":

$$
\frac{\partial f}{\partial v}(a)=\lim_{t\to 0} \frac{f(a+tv) - f(a)}{t}
$$
quando $v = e_i = (...)$

$$
\frac{\partial f}{\partial e_i}(a)=\frac{\partial f}{\partial x_i}(a)
$$
derivada parcial de $f$ em $a$ em ordem a $x_i$

---

Seja $g: D \subseteq \R^n\to \R^m$ diferencial em $a \in\D$ i.e. $g(a+h)-g(a)=Dg(a)+o(h)$, $h\to \vec 0$

Seja $f: \R^m \to \R^p$ diferencial em $g(a)$ i.e $f(g(a)+h')-f(g(a)) = Df(g(a))(h')+o(h')$, $h \to \vec 0$

Então $(f \circ g) (a+h) - (f\circ g)(a) = f(g(a+h))-f(g(a)) = f(g(a)+Dg(a)(h)+o(h))-f(g(a))$


Obs $Dg(a)(h)+o(h)\to \vec 0 + \vec 0 = \vec 0$ então $h'= Dg(a)(h)+o(h)$

$$
...= f(g(a)+h')-f(g(a))\\
=Df(g(a))(h')+o(h'), h'\to 0\\
=Df(g(aa))(Dg(a)(h)+o(h))+o(Dg(a)(h)+o(h)), h\to \vec 0\\
=Df(g(a))Dg(a)(h)+Df(g(a))(o(h))+o(Dg(a)(h)+o(h)), h \to \vec 0\\
$$

transformação linear
confrontar com álgebra linear
$$
\frac{||Df(g(a))(o(h))||}{||h||} \leq \frac{C||o(h)||}{||h||} = C \frac{||o(h)||}{||h||} \to C\cdot 0 = 0
$$

fizemos a conta acima
$$
\frac{||o(Dg(a)(h)+o(h))||}{||h||}=\frac{||o(Dg(a)(h)+o(h))||}{||Dg(a)(h)+o(h)||}\cdot \frac{||Dg(a)(h)+o(h)||}{||h||}
$$
é limitado?

$$
\frac{||Dg(a)(h)+o(h)||}{||h||} \leq (desigualdade triangular) \frac{||Dg(a)(h)||+||o(h)||}{||h||}\leq
 \frac{C'||h||}{||h||} + \frac{||o(h)||}{||h||}\leq C' + \frac{||o(h)||}{||h||} \leq D (constante)
$$

Portanto é verdade que:

$$
(f \circ g)(a+h)-(f\circ g)(a)=...
$$

TEOREMA

Seja $g: D\subseteq \R^n \to \R^m$ diferenciável em $a \in \D$  
Seja $f: \R^m \to \R^p$ diferenciável em $a \in g(a)$

Então, $f\circ g: D \subseteq \R^n \to \R^p$ é diferenciável em $a$
e $D(f\circ g)(a)=Df(g(a))\circ Dg(a)$

Pergunta: qual é a matriz jacobiana de $f\circ g(a)$, $J_a^{f \circ a}$?

É o produto da jacobiana de $f$ em $g(a)$, $J^f_{g(a)}$
com a jacobiana de $g$ em $a$, $J_a^g$

$J^{f\circ g}{a} = J^f_{g(a)}\cdot J^g_a$

porque a composta de transformações lineares corresponde ao produto de matrizes (quando representamos transformações lineares por matrizes)

$J^{f\circ g}{a} = J^f_{g(a)}\cdot J^g_a$

$$
[\frac{\partial (f\circ g)_i}{\partial x_j}(a)]_{j = 1,\dots, n\\ i = 1,\dots, p} = \\
[\frac{\partial f_i}{\partial y_k}(g(a))]_{k = 1,\dots, m\\ i = 1,\dots, p}\cdot
[\frac{\partial g_k}{\partial x_j}(a)]_{k = 1,\dots, m\\ j = 1,\dots, n}
$$

donde

$$
\frac{\partial (f\circ g)_i}{\partial x_j}(a)=\sum^m_{k=1} \frac{\partial f_i}{\partial y_k}(g(a))\cdot \frac{\partial g_k}{\partial x_j}(a)
$$

Exemplo:

$$
g: \R^2 \to \R^2 g(x,y)=(x^2+1,y^2)\\
f: \R^2 \to \R^3 f(u,v)=(u+v, u, v^2)
\\
g_1(x,y)=x^2+1\\
g_2(x,y)=y^2\\
f_1(u,v)=u+v\\
f_2(u,v)=u\\
f_3(u,v)=v^2
$$

$D(f\circ g)(1,1)=?$

$g$ é diferenciável porque as componentes são funções polinomiais  
$f$ é diferenciável porque as componentes são funções polinomiais

$J^g_{(x,y)} = [\frac{\partial g_1}{\partial x}(x,y) ...] = [...]$

$J^f_{(u,v)} = [\frac{\partial f_1}{\partial u}(u,v) ...] = [...]$

$$
J^{f\circ g}_{(1,1)}=J^f_{g(1,1)}\cdot J^g_{(1,1)} = J^f_{(1^2+1,1^2)}\cdot J^g_{(1,1)}=\\
J^f_{(2,1)}\cdot J^g_{(1,1)}=[...][...]=...
$$

$h = f\circ g$ portanto $h_1(x,y), h_2(x,y), h_3(x,y)$

$$
\frac{\partial h_2}{\partial y}(1,1)=\frac{\partial f_2}{\partial u}(g(1,1))\frac{\partial g_1}{\partial y}(1,1)+
\frac{\partial f_2}{\partial v}(g(1,1))\frac{\partial g_2}{\partial y}(1,1)=\\
=1\cdot 0 + 0 \cdot 2y |(1,1) = 0 + 0 = 0
$$

$$
\frac{\partial h_3}{\partial y}(1,1)=\frac{\partial f_3}{\partial u}(g(1,1))\frac{\partial g_1}{\partial y}(1,1)+
\frac{\partial f_3}{\partial v}(g(1,1))\frac{\partial g_2}{\partial y}(1,1)=\\
=0\cdot 0 + 2v |(1,1) \cdot 2y | (1,1) = 0 + 2 \cdot 1\cdot 2 \cdot 1=4
$$

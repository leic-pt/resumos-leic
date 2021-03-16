Recapitulando:

$$
g: D \subseteq \R^n\to \R^m, a \in D, h \in \R^n
$$

$g$ é diferenciável em $a$ <=> existe transformação linear, dita transformação linear "derivada de $g$ em $a$", $Dg(a)$ tal que
$g(a+h)-g(a) = Dg(a)(h)+o(h), h \to 0$
$\lim_{h\to \vec 0} \frac{g(a+h)-g(a)-Dg(a)(h)}{||h||} = \vec 0$

O problema que se coloca quando temos transformação linear é como representá-la.
Fixadas as bases - aqui fixam-se as bases canónicas- transformação linear é representada por uma matriz.
Então, a derivada de $f$ em $a$ é, ficadas as bases canónicas, representada pela matriz jacobiana.

$$
J^g_a = [\frac{\partial g_1}{\partial x_1}(a)...]
$$

Estamos a falar de derivadas de $g$ em $a$ separados $v$'s:

$\frac{\partial g}{\partial v}(a)=\lim_{t\to 0} \frac{g(a+tv)-g(a)}{t}$ derivada de $g$ em $a$ segundo $v$

Se $v=e_i=...$ então $\frac{\partial g}{\partial v}(a)=\frac{\partial g}{\partial e_i}(a)=\frac{\partial g}{\partial x_i}(a)$ <- derivada partial de $g$ em ordem a $x_i$ calculada em $a$.

Mostrámos que se $g$ é diferenciável em $a$ (i.e., se existe a tal transformação linear) então
$g$ é contínua em $a$ - "tal como em CDI 1"

...

Também vimos que existiam operações que reescrevem funções diferenciáveis originando novas funções diferenciável

Se $f$ e $g$ são diferenciáveis, então são diferenciáveis:

- $f +g $ é diferenciável
- $\lambda f$ é diferenciável onde $\lambda \in \R$ constante
- $fg$ com funções escalares
- $f/g$ com funções escalares

Ontem:

$$
g: D\subseteq \R^n \to \R^m dif em a\in D\\
f: \R^m \to \R^p dif em g(a)
$$

então $f\circ g$ é diferenciável em $a$

Regra da cadeira:

$$
1 \leq i \leq p\\
1 \leq j \leq n\\

\frac{\partial (f\circ g)_i}{\partial x_j}(a)=\sum^m_{k=1}\frac{\partial f_i}{\partial y_k}(g(a))\frac{\partial g_k}{\partial x_j}(a)
$$

Agora já posso encarar novas funções e tentar perceber se são ou não diferenciáveis:

1. $f: \R^2 \to \R^3 \quad f(x,y) = (e^{xy}, x+y,y^2)$

$$
f_1(x,y)=e^xy\\
f_2(x,y)=x+y\\
f_3(x,y)=y^2
$$
São diferenciáveis?

$$
f_1(x,y)=f^2_1\circ f^1_1(x,y)\\
com f^1_1(x,y,)=xy=p_1(x,y)\cdot p_2(x,y) <- produto de funções diferenciáveis, logo diferenciável\\
f^2_1(t)=e^t <- função dif conf. CDI 1

f_1(x,y) sendo a composta de duas funções diferenciáveis é diferenciável.

f_2(x,y) = x+y = p_1(x,y) + p_2(x,y) <-- soma de funções diferenciáveis logo diferenciável

f_3(x,y)= y^2=(p_2(x,y))^2 = p_2(x,y)\circ p_2(x,y) <--- produto de funções escalares diferenciáveis logo diferenciável

$$

Como cada uma das três funções componentes da $f$ é uma função diferenciáveis então $f$ é diferenciável.

$g: \R^3 \to \R^2$ é diferenciável em $(1,0,0)$
com $J^g_{(1,0,0)}= (...)$

Calcular $D(g\circ f)(0,0)$

Como $g$ é diferenciável em $(1,0,0)$ e $f$ é diferenciável em f(0,0)=(1,0,0)
então $g\circ f$ é diferenciável em $(0,0)$. Portanto faz sentido calcular $D(g\circ f)(0,0)$.

$$
J^{g\circ f}_{(0,0)}=J^g_{(1,0,0)}\cdot J^f_{(0,0)} = ...
$$

2. $$
f:\R^3 \to \R^3\quad f(x,y,z) = (x^2+y^2+z^2, x+y-z, xye^z) é dif\\
g: \R^3 \to \R \quad g(u,v,w) = u^2-v^2+e^w é dif
$$

$$
\frac{\partial g\circ f}{\partial y} (x,y,z) = ?\\
\frac{\partial (g\circ f)}{\partial y}(x,y,z) = \frac{\partial g}{\partial u}(f(x,y,z)) \frac{\partial f_1}{\partial y}(x,y,z)+
\frac{\partial g}{\partial v}(f(x,y,z)) \frac{\partial f_2}{\partial y}(x,y,z)
+\frac{\partial g}{\partial w}(f(x,y,z)) \frac{\partial f_3}{\partial y}(x,y,z)=
2u| (u,v,w) = f(x,y,z) \cdot 2y | (x,y,z) + (-2v)|(u,v,w) = f(x,y,z) \cdot 1 + e^w|_{(u,v,w)=f(x,y,z)} \cdot xe^z|_({x,y,z})=
2(x^2+y^2+z^2)\cdot 2y - 2(x+y-z) + e^{xye^z}\cdot xe^z=\\
=4y(x^2+y^2+z^2)- 2(x+y-z)+xe^z \cdot e^{xye^z}
$$

3. $f,g: \R \to \R$ diferenciável - transformação linear derivadas de $f$ em $a$ é
$Df(a)(h)=f'(a)h, \forall h \in \R$

Por exemplo, $f(x) = \sin x$ em $a = 0$
$f'(0) = \cos 0 = 1$
logo $Df(a)(h)=f'(a)h=1\cdot h=h \forall h \in \R$

Recordar que transformação linear em $\R$ é $ct$ (constante vezes variável)

$T: \R \to \R, t \to ct$ com $c$ constante

$p: \R^2 \to \R p(u,v)=uv$

$q: \R \to \R^2 q(x)=(f(x), g(x))$

Donde de $p \circ q$

$J^{p\circ q}_x = J^p_{q(x)}\circ J^q_x = (\frac{\partial p}{\partial u} (q(x)) \frac{\partial p}{\partial v} (q(x))) (f'(x)\\g'(x)) = ...$

Interpretámos produto de funções como uma certa composta ($p\circ g$) e deu certo

TPC: mesmo exercício mas com ...

4. $f: \R^2 \to \R$ de classe $C^1$ (isto é, as derivadas existem e são contínuas) => $f é diferenciável$

$f(1,1)=1$, $triangulo f(1,1) =J^f_{(1,1)}= (2 3)$

Calcular $triangulo g(1,1)$ em que $g(x,y) = f(f(x,y), xy)$

notar que $g = f\circ h$ em que $h(x,y) = (f(x,y), xy), h:\R^2 \to \R^2$
$h(1,1) = (f(1,1), 1 \cdot 1)= (1,1)$

Calcular também $\frac{\partial g}{\partial y}(1,1)$

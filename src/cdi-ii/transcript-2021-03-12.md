Recapitulando: estamos a falar de diferenciabilidade

A noção central/principal aqui é a da existência de uma certa transformação linear derivada

Seja $f: D \subseteq \R^n\to\R^m$, $a\in D, h \in \R^n$

- $f$ é diferenciável em $a$ <=> existe transformação linear, $Df(a)$, tal que
  $f(a+h)-f(a)=Df(a)(h)+o(h), h\to \vec 0$ ou $lim\_{h\to \vec 0}\frac{f(a+h)-f(a)-Df(a)(h)}{||h||}=0

- Mas, por vezes é útil calcular derivadas segundo certas direções:
  derivada de $f$ em $a$ segundo um vetor $v$

$\frac{\partial t}{\partial v} (a) = lim_{t\to 0} \frac{f(a+tv)+f(a)}{t} = $ declive quando $||v|| = 1$

segundo $\vec{e_i}$ (vetores da base canónica):

$\frac{\partial t}{\partial \vec{e_i}}(a)=\frac{\partial t}{\partial \vec{x_i}}$ e chamamos derivada parcial em $a$ em ordem a $x_i$

Provámos: Se $f$ é diferenciável em $a$ (se existe transformação linear derivada ...), então $f$ é contínua em $a$ (como em CDI 1)
Se $f$ é diferenciável em $a$ então $\frac{\partial t}{\partial v}(a)=Df(a)(v)$ $\forall v \in \R^n\backslash \{\vec 0\}$ (muito útil pois limites podem ser muito complicados de calcular...)

Em particular provámos também que a matriz jacobiana (a matriz que representa a transformação linear derivada, $Df(a)$) tem por entradas as derivadas parciais:

$$
J^f_a=[\frac{\partial f_i}{\partial x_j}(a)]_{i=1,\dots,m\\j=1,\dots,n}
$$

Será que podemos ter jacobiana em $a$ sem ter diferenciabilidade em $a$.

---

Para hoje:

$f: D \subseteq \R^n \to \R^m$ diz-se de classe $C^1$ (em $D$) se as suas derivadas parciais (em qualquer $a \in D$) forem funções contínuas.

TEOREMA

Seja $f: D \subset \R^n \to \R^m$ e $D$ conjunto aberto

Se $f$ é $C^1$ em $D$ então $f$ é diferenciável em $D$.

Exemplo 1: Seja $f: \R^n \to \R^m$ uma transformação linear com $A$ a matriz que a representa, fixadas as bases canónicas.
$ f(x)=Ax$

Seja $a\in\R^n, h \in \R^n$
$f(a+h)-f(a)=A(a+h)-Aa=Aa+Ah-Aa=Ah+\vec 0$
transformação linear calculada em $h$
$o(h), h\to \vec 0$

portanto $f$ é diferenciável em qualquer $a\in\R^n$ e $Df(a)=A$ ($A$ é uma matriz)

Exemplo 2:

$f:\R^3 \to \R$, $f(x,y,z)=xyz$, $v=(-1,0,1)$

Calcular $frac{\partial f}{\partial v}(2,1,1)$

a) Pela definição
b) Através da matriz jacobiana

a)

$$
\frac{\partial f}{\partial v}(2,1,1) = \lim_{t\to 0}\frac{f((2,1,1)+tv)-f(2,1,1)}{t}\\
= \lim_{t\to 0}\frac{f((2,1,1)+t(-1,0,1))-f(2,1,1)}{t}\\
= \lim_{t\to 0}\frac{f(2-t,1,1+t)-f(2,1,1)}{t}=\\
=\lim_{t \to 0}\frac{(2-t)\cdot 1 \cdot (1+t) - 2\cdot 1 \cdot 1}{t}=\\
= \lim_{t \to 0}\frac{2+2t-t-t^2-2}{t}=\\
=\lim_{t \to 0}\frac{t(1-t)}{t}=\lim_{t\to 0}(1-t)=1
$$

ou seja $\frac{\partial f}{\parial v}(2,1,1) = 1$

b)
$f(x,y,z) = xyz = p_1(x,y,z) p_2(x,y,z) p_3(x,y,z)$

$p_i$'s são diferenciáveis e produto de funções diferenciáveis é diferenciável.

Portanto $f$ é diferenciável em qualquer ponto; portnato existe a transformação linear derivada em qualquer ponto do domínio de $f$.

$$
J^f_{(2,1,1)}=[\frac{\partial f}{\parialx} (2,1,1) \frac{\partial f}{\parialy} (2,1,1) \frac{\partial f}{\parialz} (2,1,1)]=\\
=[\frac{d (x,y,z)}{d x} | (2,1,1) \frac{d (x,y,z)}{d y} | (2,1,1) \frac{d (x,y,z)}{d z} | (2,1,1)]=\\
=[yz\frac{d x}{d x}|(2,1,1) xz\frac{d y}{d y}|(2,1,1) xy\frac{d z}{d z}|(2,1,1)]=\\
=[yz\cdot 1|(2,1,1) xz\cdot 1|(2,1,1) xy\cdot 1|(2,1,1)]=\\
=[1 2 2]
$$

e porque $f$ é diferenciável, em particular em (2,1,1) tem-se

$$
...
$$

Exemplo 3:

$$
f(x,y) = | \frac{x^2y}{x^2+y^2} se (x,y) \ne (0,0), 0 se (x,y) \ne (0,0)
$$

a) é diferenciável em (0,0)?
b) $\frac{\partial f}{\partial v}(0,0)$ com $v=(1,1)$ ?

a)
Para responder preciso de calcular
$\frac{f((a_1, a_2) + (h_1,h_2))-f(a_1,a_2)-Df(a_1,a_2)(h_1,h_2)}{||(h_1,h_2)|| \to (h_1,h_2)\to (0,0) 0$

**Se** existir $Df(0,0)$ a jacobiana $J^f_{(0,0)} = [...]$

$$
\frac{\partial f}{\partial x}(0,0) = \frac{\partial f}{\partial \vec{e_1}}(0,0) = \lim_{t\to 0}\frac{f((0,0)+t(1,0))-f(0,0)}{t}\\
=\lim_{t\to 0}\frac{f(t,0)- 0}{t}=\lim_{t\to 0}\frac{\frac{t^2\cdot 0}{t^2+0^2}}{t}\\
=\lim_{t\to 0}\frac{0}{t^3} = 0\\
\vec{e_1}=(1,0)
$$

$$
...
$$

Portanto, **se** $f$ for diferenciável em $(0,0)$ a $Df(0,0)$ é representada pela jacobiana $J^f_{(0,0)} = (0,0)$

Então,

$$
\frac{f((0,0)+(h_1,h_2))-f(0,0)-Df(0,0)(h_1,h_2)}{||(h_1,h_2)||}=\\
=\frac{f(h_1,h_2)-0-(0,0)(h_1,h_2)}{\sqrt{h_1^2+h^2_2}}=\\
=\frac{\frac{h^2_1\cdot h_2}{h^2_1+h^2_2}-0h_1-0h_2}{\sqrt{h^2_1+h^2_2}}=\\
=\frac{h^2_1\cdot h_2}{(h^2_1+h^2_2)^{\frac32}}\to 0, (h_1,h_2) \to (0,0)
$$

limites direcionais $h_2=mh_1$

$$
\lim_{(h_1,h_2) \to (0,0)} \frac{h^2_1\cdot h_2}{(h^2_1+h^2_2)^{\frac32}}=\lim_{h_1\to 0} \frac{h^2_1\cdot mh_1}{(h^2_1+(mh_1)^2)^{\frac32}}=\\
=\lim_{h_1\to 0} \frac{mh_1^3}{(h^2_1(1 + m^2))^{\frac32}}=\\
=\lim_{h_1\to 0} \frac{mh_1^3}{h^2_1(1 + m^2)^{\frac32}}=\\
=\lim_{h_1\to 0} \frac{m}{(1 + m^2)^{\frac32}}=
$$

portanto $m$'s diferentes $\implies$ limite diferente

portanto não existe $\lim_{(h_1,h_2) \to (0,0)} \frac{h^2_1\cdot h_2}{(h^2_1+h^2_2)^{\frac32}}$.

Logo $f$ não é diferenciável em $(0,0)$.

[Mas existem as derivadas parciais de $f$ em $(0,0)$ !]

A noção principal é a de (transformação linear) derivada!!

b)

$\frac{\partial f}{\partial v}(0,0)$ com $v=(1,1)$

Obs. Como a função não é diferenciável em $(0,0)$, não posso usar $\frac{\partial f}{\partial v}(0,0) = Df(0,0) v$

$$
\frac{\partial f}{\partial v}(0,0)= \lim_{t\to 0}\frac{f((0,0) + t(1,1))- f(0,0)}{t}=\\
=\lim_{t\to 0}\frac{f(t,t)}-0{t}=\\
=\lim_{t\to 0} \frac{\frac{t^2\cdot t}{t^2+t^2}}{t}=\\
=\lim_{t\to 0} \frac{t^3}{t(2t^2)}=\\
=\lim_{t\to 0} \frac{t^3}{2t^3}=\lim_{t \to 0} \frac{1}{2} = \frac{1}{2}
$$

**Não posso**, mas o que aconteceria se usasse ...?

$$
...
$$

4.  $f: \R^2\to \R f(x,y,) = ||(x,y)|| = \sqrt{x^2+y^2}$

Mostrar que $f$ não é diferenciável na origem ($(0,0)$).

Ou seja, mostrar que certo limite não existe.

$\frac{f((0,0) + (h_1,h_2)) - f(0,0) - Df(0,0) (h_1,h_2)}{||(h_1,h_2)||}$

Se $Df(0,0)$ existisse:

$$
\frac{\partial f}{\partial x}(0,0) = \lim_{t\to 0} \frac{f((0,0) + t(1,0)) - f(0,0)}{t} = \\
=\lim_{t \to 0}\frac{f(t,0)-0}{t}=\\
=\lim_{t\to 0}\frac{\sqrt{t^2+0^2}{t}}=\\
=\lim_{t\to 0}\frac{1+1}{t}
$$

Portanto não existe $...$ logo $f$ não é diferenciável em $(0,0)$

(porque se fosse existirira $...$).

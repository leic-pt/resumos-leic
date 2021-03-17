Recapitulando:
$f: D \subseteq \R^n \to \R^m, a \in D, h \in \R^n$

$f$ é diferenciável em $a$ <=> existe uma transformação linear, dita "derivada de $f$ em $a$", $D f(a)$ tal que

$$
f(a+h)-f(a)=Df(a)(h) + o(h), h \to \vec 0

\lim_{h \to \vec 0} \frac{f(a+h)-f(a)-Df(a) (h)}{||h||}=\vec 0
$$

Sendo $Df(a)$ uma transformação linear gostaríamos de a representar matricialmente.  
Fixadas as bases canónicas $Df(a)$ é representada pela jacobiana de $f$ em $a$:

$$
J_a^f=...
$$

derivadas parciais de $f$ em $a$ em ordfem a $x_j$

Obs: a jacobiana de $f$ em $a$ pode existir sem que a $f$ seja diferenciável em $a$!!
Vimos exemplo em aula passada.

As derivadas parciais são casos particulares das ditas derivadas segundo vetor $v \in \R^n \backslash \{\vec 0\}$:

$$
\frac{\partial f}{\partial v}(a) = \lim_{t \to 0}\frac{f(a+tv)+f(a)}{t}
$$

Se $v = e_i=(...)$ então $\frac{\partial t}{\partial v}(a) = \frac{\partial f}{\partial e_i}(a)=\frac{\partial f}{\partial x_i}(a)$

Obs. Se $f$ é diferenciável em $a$ então $\frac{\partial f}{\partial v}(a)=Df(a)(v)$ para qualquer $v \in \R^n \backslash \{0\}$

Outra questão:

$f: D \subseteq \R^n \to \R$ função escalar $a \in D, h \in \R^n$
suponha que $f$ é diferenciável em $a$

Então, $\frac{\partial f}{\partial v}(a)= J^f_a v = (...)(...) = \frac{\partial f}{\partial x_1}(a)v_1+\frac{\partial f}{\partial x_2}(a)v_2+\dots+\frac{\partial f}{\partial x_n}(a)v_n$
outra notação para $J_a^f$ quando $f$ é escalar

$= triangulo f(a) \cdot v = || triangulo f(a)|| ||v|| cos(triangulo f(a), v)chapeu$

Se estou a calcular taxa de variação quando $||v|| = 1$, então a nossa fórmula fica

$$
\frac{\partial f}{\partial v}(a) = || triangulo f(a)|| cos(triangulo f(a), v)chapeu
$$

esta expressão é maximixada quando $cos(...) = 1$
ou seja $v = \frac{...}{...}$

Portanto quando me afasto de $a$ no sentido de $triangulo f (a)$ a função tem variação máxima.

Por outro lado, quando $cos(...)= 0$ (ou seja $v -|- triangulo f(a)$)
a função "não varia localmente" - curvas de nível

Graficamente:

se escolher $(x,y)$'s tais que ...

por isso se diz que

o gradiente dá a direção e sentido segundo os quais a função "varia mais" (melhor dizendo, que dá a variação máxima da função)

Obs. Para função diferenciáveis vetoriais $f: \D \subseteq \R^n \to \R^m$
(portanto existem $f_i: D \subseteq \R^n \to \R$ diferenciáveis para $i = 1, 2, \dots, m$)

Estas considerações são válidas para cada uma das $f_i$'s.

Exemplo:

$f(x,y) = x^2+xy$
$triangulo f (x,y) = \left(\frac{\partial f}{\partial x} (x,y) \frac{\partial f}{\partial y} (x,y)\right) = (2x+y, x)$

$triangulo f(1,1) = (2\cdot 1 + 1, 1) = (3,1)$

Em $(1,1)$ devo afastar-me no sentido $(3,1)$ para sentir a variação máxima da função (junto a $(1,1)$).

Por outro lado para não sentir variação de $f$ junto a $(1,1)$:

$(3,1) \cdot (v_1,v_2) = 3v_1 + v_2 \implies v=(1, -3)$ (vetor perpendicular)

Ao me afastar de $(1,1)$ no sentido $(1,-3)$ a função não varia localmente.

Def. conjunto de nível

Seja $f: D \subseteq \R^n \to \R$ e $ k \in \R$

$N(k) = \{x\in D: f(x) = k\}$ conjunto de nível de $f$ de valor $k$

Se $n = 2$ - curvas de nível
Se $n = 3$ - superfíceis de nível

Exemplos:
(i) $f(x,y)=x^2+y^2$ - ver atrás

(ii) $f(x,y) = x^2-y^2$

$N(0) = \{(x,y) \in D: x^2-y^2= 0\} = \{(x,y) \in D: x^2=y^2\} = \{(x,y) \in D: y=x \lor y=-x\}$

$N(1) = \{(x,y) \in D: x^2-y^2 = 1\} \implies y= \pm \sqrt{x^2-1}$

$N(-1) = \{(x,y) \in D: x^2-y^2=-1\} \implies y= \pm \sqrt{x^2+1}$

Com $k > 0$:

$N (k) =...$
$n (-k) = ...$

Conjuntos de nível:

... [imagem]

A função tem este aspeto junto a $(0,0)$:

Ponto de sela em $(0,0)$
ao longo de uma direção cresce
ao longo de outra direção decresce

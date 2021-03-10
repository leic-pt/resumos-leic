Seja $f: D \subset eq \R^n \to R^m$, $a \in  D$, $h \in \R^n$

$f$ é diferenciável em $a$ <=> existe uma transformação linear chamada "derivada de $f$ em $a$"; notação $Df(a)$
tal que:

$f(a+h)-f(a)=Df(a) (h) + o(h), h \to \vec 0$ <=> ...
$
\lim_{h\to \vec 0} \frac{f(a+h)-f(a)-Df(a)(h)}{||h||}=\vec 0
$

i) são equivalentes
ii) (\*) é uma fórmula elegante com significado claro
(\*\*) é para aqueles que não gostam de o's pequenos...

A transformação linear derivada de $f$ em $a$ ($Df(a)$) é a entidade principal desta parte da matéria de CDI 2.
No entanto, muitas vezes é importante saber como varia a função segundo direções especiais - ou saber quais são estas direções.
Por exemplo, qual é a direção segundo a qual a função aumenta mais ou diminui mais.

Def. derivada de f em a segundo $v$.

$$
\lim_{t\to 0} \frac{f(a+tv)-f(a)}{t}=\frac{\partial f}{\partial v}(a)
$$

com $||v|| = 1$.

Quando escolhemos $v=e_i=(0,\dots,0,1,0,\dots,0)$ i-ésima casa

$$
\frac{\partial f}{\partial v}(a) = \frac{\partial f}{\partial x_i}(a)
$$

e é chamada derivada parcial de $f$ em ordem a $x_1$ em $a$.

Proposição:
se $f$ é diferenciável em $a$ (isto é, existe aquela tranformação linear derivada que satisfaz (\*) ou (\*\*))

(i) $f$ é contínua em $a$
(ii) $\frac{\partial f}{\partial v}(a) = Df(a)(v)$ - a transformação linear derivada de $f$ em $a$ calculada em $v$

e finalmente fixadas as bases canónicas em $\R^n$ e $\R^m$ a transformação linear derivada de $f$ em $a$ é representada pela matriz jacobiana de $f$ em $a$.

...

---

Exemplos:
calcular as jacobianas de:

(i) $f:\R \to \R f(x)=xe^x$

$$
\frac{df}{dx}=1e^x+x\cdot e^x=(1+x)e^x
$$

$$
J^f_x=(1+x) e^x
$$

matrix 1x1

(ii) $f: \R^2\to \R f(x,y)=x^2y$

$$
\frac{\partial f}{\partial x}(x,y)=2xy\\
\frac{\partial f}{\partial y}(x,y)=x^2\cdot 1 = x^2
$$

$$
J^f_{(x,y)}=[2xy, x^2]
$$

matrix 1x2

(iii) $f: \R\to \R^2 f(x)=(\cos x, \sin x)$

$$
J^f_x=[-\sin x \\ \cos x]
$$

matrix 2x1

(iv) $f: \R^2\to \R^2 f(x,y)=(x^2-y^2, x^2+y^2)$

$$
J^f_{(x,y)}=[2x, -2y\\ 2x, 2y]
$$

Obs: Se $f: \D \subseteq \R^n \to \R^1$ isto é, $f$ é escalar
Se $f$ é diferenciável em $a$ então a matriz jacobiana de $f$ em $a$ é uma matriz linha que se chama gradiente de $f$ em $a$.

Notação $triangulo f(a) = (\frac{\partial f}{\partial x_1}(a),\frac{\partial f}{\partial x_2}(a),\dots,\frac{\partial f}{\partial x_n}(a))$

Exemplo:
Seja $f: \R^2 \to \R$ com $f(x,y) = x^2y$

a. Mostre que $f$ é diferenciável em $(1,1)$
b. Calcule $\frac{\partial f}{\partial v}(1,1)$ para $v=(1,2)$

a. $f$ é diferenciável em $(1,1)$ se por definição:

$$
\lim_{(h,k)\to (0,0)}\frac{f((1,1)+(h,k))-f(1,1)-Df(1,1)(h,k)}{||(h,k)||}=0
$$

$$
J^f_{(1,1)} = (...) = (2xy | (1,1), x^2/(1,1)) = (2 1)
$$

$$
...
$$

"e o que fazemos daqui? sei lá o que fazemos daqui. deixa ver a minha cábula"

Logo, $f$ é dif em $a$.

b.

$$
...
$$

proposição

sejam $f, g: D \subseteq \R^n \to \R^m$, $\lambda \in \R, a \in D, h \in \R^n$
$f$ e $g$ são diferenciáveis em $a$

Então

- $f+g$ é diferenciável em $a$
- $\lambda f$ é diferenciável em $a$

demonstração

1.

$f$ e $g$ diferenciáveis em $a$, então $Df(a)$ e $Dg(a)$ donde

$$
\lim_{h\to 0} (f+g)(a+h)-(f+g)(a)-(Df(a)+Dg(a))(h)
$$

($= \vec 0$? se sim, então $f+g$ é diferenciável em $a$)

Portanto $f+g$ é diferenciável em $a$ e $...$

2.  $$
    ...
    $$
    portanto $\lambda f$ é diferenciável em $a$ e $...$

proposição $f,g: D \subset \R^n\to \R $ $a\in D, h\in \R^n$

$f$ e $g$ diferenciáveis em $a$

1. $fg$ é diferenciável em $a$
2. $f/g$ é diferenciável em $a$ se $g(a)\ne 0$

demonstrações

...

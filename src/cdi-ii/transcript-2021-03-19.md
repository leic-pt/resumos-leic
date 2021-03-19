Recapitulando: $f : D \subseteq \R^n \to \R^m$, $a \in D$, $h \in \R^n$

$f$ é diferenciável em $a$ <=> existe transformação linear, dita derivada de $f$ em $a$, $Df(a)$, tal que

$$
f(a+h)-f(a)=Df(a)(h) + o(h), h \to \vec 0\\
\lim_{h\to \vec 0} \frac{f(a+h)-f(a)-Df(a)(h)}{||h||} = \vec 0
$$

$Df(a)$ é transformação linear - como representá-la?

Fixadas as bases canónicas (em $\R^n$ e $\R^m$) $Df(a)$ é representada pela matriz jacobiana.

$$
J^f_a=[...] = (...)
$$

Derivadas parciais são caso particular de

$$
\frac{\partial f}{\partial v}(a)=\lim_{t \to 0}\frac{f(a+tv)-f(a)}{t}\\
quando v=e_i=(...)

...
$$

Se $f$ é diferenciável em $a$ (se existe transformação linear derivada)

$$
\frac{\partial f}{\partial v}(a) = Df(a)(v) = J^f_a \cdot v
$$

Na última aula com $f:D \subseteq \R^n \to \R$:

$$
\frac{\partial f}{\partial v}(a)=J^f_a \cdot v = triangulo f(a) \cdot v = (...)(...)\\

= ...\\
= ...\\


$$

Então $\frac{\partial f}{\partial v}(a)$ é maximizado para $v = \frac{triangulo f(a)}{||triangulo f(a)||}$

Então, se me afastar de $a$ no sentido $v = \frac{triangulo f(a)}{||triangulo f(a)||}$ a variação de $f$ é máxima.

TEOREMA

O gradiente de $f$ em $a$ indica o sentido em que a variação de $f$ é máxima (em $a$).

Por outro lado, se não quero variação de $f$ junto a $a$ escolho $v$ perpendicular a $triangulo f(a)$
porque nessas condições o $cos(triangulo f(a), v)\^ = 0$
O que nos leva aos conjuntos de nível de $f$.

---

Definição: Caminho em $\R^n$

Caminho em $\R^n$ é uma função contínua $c: \R \to \R^n$.
A imagem de $c$ diz-se linha ou curva e denota-se $\Gamma$.

[imagem]

exemplo de caminho:
$c(t)=(\cos t, \sin t), \forall t \in \R$

$\Gamma = \{(x,y) \in \R^2: x^2+y^2=1\}$

Se um caminho é $C^1$ (i.e. as derivadas parciais são contínuas)
a derivada é dada por $c'(t)=\lim_{h \to 0} \frac{c(t+h)-c(t)}{h}$

Def. Seja $c: \R \to \R^n$, $C^1$ e $\Gamma$ a linha descrita por $c$.
O vetor $c'(t)$ diz-se o vetor tangente à linha $\Gamma$ no ponto $c(t)$.

[imagem]

$c_i: \R \to \R$

"Quando junto todas as $c_i'(t)$" tenho o vetor tangente, $c'(t)$, à curva $\Gamma$ em $c(t)$.

Exemplos:

$c(t) = (\cos t, \sin t), \forall t \in \R$
$c' (t) = (-\sin t, \cos t) \forall t \in \R$
$c'(\frac{\pi}{2})=(-\sin\frac{\pi}{2}, \cos \frac{\pi}{2})=(-1,0)$
$c'(0) = (-\sin 0, \cos 0) = (0, 1)$
$c('\frac{\pi}{2}) = (-\sin \frac{\pi}{2}, \cos \frac{\pi}{2}, 1) = (-1,0,1)$

Def. Um vetor $v\in \R^n$ diz-se tangente a um conjunto $M \subset \R^n$ num ponto $a \in M$
se existir um caminho $C^1, c:\R \to M$ tal que $c(0) = a$ e $c'(0) = v$.

[imagem]

Exemplos de aplicação desta definição

Seja $f: D \subseteq \R^n \to \R$ - função escalar; $k \in \R$

Seja $M = N(k) = \{x \in \D: f(x)= x\}$

Seja $a \in M, v \in \R^n$, então $c: \R \to M$ com $c(0) = a, c'(0) = v$.

[imagem]

então $f(c(t)) = k \implies 0=(f\circ c)'(t) =(derivada de função composta) triangulo f(c(t)) \implies$

em particular, para $t=0$:

$0 = triangulo f(c(0))\cdot c'(0) = triangulo f(a) \cdot v \implies v \perp triangulo f(a)$, ou seja, $v$ é ortogonal a $triangulo f(a)$

portanto se $M$ é conjunto de nível e$a\in M$, $triangulo f(a)$ é ortogonal à tangente a $M$ em $a$.

TEOREMA

O gradiente de um campo escalar $f$ em $a$ é ortogonal ao conjunto de nível de $f$.

Obs.

Se $f: \R^3 \to \R$ os conjuntos de nível são superfícies.

Exemplos:

1. Qual o vetor perpendicular ao plano de equação $ax + by + cz = d$ ?

O plano é conjunto de nível com valor $d$ da função

$f(x,y,z)=ax+by+cz$

$N(d)=\{(x,y,z)\in \R^3: ax+by+cz=d\}$

$triangulo f(x,y,z) = (a b c), \forall (x,y,z) \in \R^3 $ é $\perp$ a $N(a)$ em qualquer ponto de $N(a)$

[imagem]

2.  a) Determine uma equação do plano tangente à esfera $x^2+y^2+z^2=9$ no ponto $(2,2,1)$.

b) e a reta normal à esfera nesse ponto.

a) Esfera $N(9) = \{(x, y,z) \in \R^3: x^2+y^2+z^2=9\}$ com $f(x,y,z) = x^2+y^2+z^2$
$triangulo f(x,y,z) = (2x 2y 2z)$
$triangulo f(2,2,1) = (4 4 2)$

[imagem]

$v(x-2,y-2,z-1) \perp triangulo f(2,2,1) = (4 4 2)$

$0=(4 4 2) \dot (x-2 y-2 z-1) = 4(x-2) + 4(y-2) + 2(z-1)$

$4x+4y+2z=8+8+2$

$2x+2y+z=9$ equação do plano tangente (a $N(9)$) à esfera em $(2,2,1)$

b)

Reta normal em $(2 2 1)$:

$$
R= \{(x,y,z) \in \R^3: (x,y,z) = (2,2,1) + \lambda triangulo f(2,2,1), \lambda \in \R\}\\
=\{(x,y,z) \in \R^3: (x,y,z) = (2,2,1) + \lambda (4,4,2), \lambda \in \R\}
$$

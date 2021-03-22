$v$ é tangente a $M$ em a se existir um caminho $c: \R \to M$ diferenciavel tal que $c(0)=a$ e $c'(0)=v$.
O gradiente $\nabla f$ de $f: \R^n \to \R$ indica o sentido a seguir para se experienciar a variação máxima da função;
por outro lado, $\nabla f$ é perpendicular aos conjuntos de nível de $f$.

Exercício: Em cartas unidades, a pressão $p$ de um gás à temperatura $T$ e volume $V$ é dado por

$$
p(T,V) = \frac TV
$$

Se $T=1=V$ como devemos variar a temperatura e o volume para que a pressão aumente o máximo possível.

$$
\nabla p(T,V) = (\frac{d}{dT}(\frac TV), \frac{d}{dv}(\frac TV)) = (\frac{1}{V} - \frac {T}{V^2})
$$

$$
\nabla p(1,1)=(\frac{1}{1} - \frac{1}{1^2})= (1, -1)
$$

Resposta: devemos aumentar a temperatura e diminuir o volume na mesma porpoção

Def.

$$
\frac{\partial^2f}{\partial x_1 \partial x_j} = \frac{\partial}{\partial x_i}(\frac{\partial t}{\partial x_j})
$$

derivadas parciais de segunda ordem

Exemplo:

$f(x,y)=x^2y+xy^3=p_1(x,y)^2 p_2(x,y) + p_1(x,y)p_2(x,y)^3$ -> função diferenciável em qualquer ponto do seu domínio.

$\frac{\partial f}{\partial x}(x,y)=\frac{\partial}{\partial x}(x^2y+xy^3)=y\cdot 2x + y^3 \cdot 1 = 2xy+y^3$
$\frac{\partial f}{\partial y}(x,y)=\frac{\partial}{\partial y}(x^2y+xy^3)=x^2+3xy^2$

$\frac{\partial^2 f}{\partial x^2}(x,y)=\frac{\partial}{\partial x}(2xy+y^3)=2y$
$\frac{\partial^2 f}{\partial y \partial x}(x,y)=\frac{\partial}{\partial y}(2xy+y^3)=2x+3y^2$
$\frac{\partial^2 f}{\partial y^2}(x,y)=\frac{\partial}{\partial x}(x^2+3xy^2)=6xy$
$\frac{\partial^2 f}{\partial x \partial y}(x,y)=\frac{\partial}{\partial x}(x^2+3xy^2)=2x+3y^2$

Será que é sempre assim para cada $f$?

Def. $f: \R^n \to \R$ diz-se de classe $C^k$ se cada uma das derivadas parciais de ordem k $\frac{\partial^k f}{\partial x_1 \dots \partial x_d}$ (indices podem-se repetir) existir
e for função contínua

TEOREMA (SCHWARZ)

$f \in C^2 => \frac{\partial ^2 f}{\partial x_i \partial x_j} = \frac{\partial^2 f}{\partial x_j \partial x_i}$

Demonstração. (em $(0,0)$ com $f: \R^2 \to \R$)

$$
\frac{\partial^2 f}{\partial y\partial x}(0,0) =
\frac{\partial}{\partial y}(\frac{\partial f}{\partial x}(0,0))=
\lim_{h\to 0}\frac{\frac{\partial f}{\partial x}(0,h) - \frac{\partial f}{\partial x}(0,0)}{h} =
...
$$

Sejam $g(t) = f(k, t) - f(0, t)$; $h(t)=f(t,h)-f(t,0)$

$f(k,h)-f(0,h)-f(k,0)+f(0,0) = g(h) - g(0) = g'(c_h)h$ (com $0< c < h$)
$= ...$

teorema de lagrange

$f$ contínua e diferenciável em $[a,b]$ então
$\frac{f(b)-f(a)}{b-a}=f'(c)$ com $a < c < b$.

Por outro lado,
$f(k,h) - f(0,h) - f(k,0) + f(0,0) = h(k) - h(0) = h'(\delta k)k = (\frac{d f}{dx}(\delta_k, h)-\frac{df}{dx} (\delta_k, 0))k$
$= ...$

Portanto:

$...$

Exemplo:

$$
f:\R^n \to \R, a \in \R^n$, f(x)=e^{a\cdot x} = e^{a_1x_1+a_2x_2p\dots+a_nx_n}=?
$$

$$
\frac{\partial f}{\partial x_j}(x)= \frac{\partial}{\partial x_j} e^{a_1x_1+\dots+a_dx_d+\dots+a_nx_n}=
e^{a\cdot x} \cdot \frac{\partial}{\partial x_j} (a_1x_1+\dots+a_dx_d+\dots+a_nx_n) = a_j e^{a\cdot x}
$$

$$
\frac{\partial^p f}{\partial x_d^p}(x)=...
$$

$$
\frac{\partial^2 f}{\partial x_i\partial x_j}(x)=a_ia_je^{a \cdot x}
$$

...

Exemplo
Seja $f,g: \R \to \R$, $C^2$

Mostrar que $u(x,t) = f(x+ct) + g(x-ct)$ onde $c\in\R$ é constante
é solução da equação (de onda) $\frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}$

$\frac{\partial u}{\partial t}= \frac{\partial}{\partial t}(f(x+ct)+g(x-ct))=\frac{\partial}{\partial t}f(x+ct)+\frac{\partial}{\partial t}g(x-ct)=$
$= f'(x+ct)\cdot \frac{\partial}{\partial t}(x+ct) +g'(x-ct)\cdot \frac{\partial}{\partial t}(x-ct)$
$=f'(x+ct)\cdot c + g'(x-ct)(-c)=c(f'(x+ct)-g'(x-ct))$

$\frac{\partial^2 u}{\partial t^2}=\frac{\partial}{\partial t}(c(f'(x+ct)-g'(x-ct)))=c(f''(x+ct)\cdot c-g''(x-ct)(-c))=c^2(f''(x+ct)+g''(x-ct))$

$\frac{\partial u}{\partial x} = \frac{\partial}{\partial x} (f(x+ct)+g(x-ct))=f'(x+ct)\cdot 1 + g'(x-ct)\cdot 1$
$\frac{\partial^2 u}{\partial x^2}=\frac{\partial}{\partial x} (f'(x+ct)+g'(x+ct))=f''(x+ct)\cdot 1 + g''(x-ct)\cdot = f''(x+ct)+g''(x-ct)$

$c^2\frac{\partial^2 u}{\partial x^2}=c^2(f''(x+ct)+g''(x-ct))=\frac{\partial^2 u}{\partial t^2}$
portanto com $u(x,t)=f(x+ct)+g(x-ct)$ tem-se
$\frac{\partial^2 u}{\partial t^2}= c^2\frac{\partial u}{\partial x^2}$
portanto é solução da equação de onda.

---

Fórmula de Taylor

Recordando - em $\R$ - Seja $f: \R \to \R$ , $C^k$ tem-se

$\f(x+h)=f(a)+f'(a)h+\frac{1}{2!}f''(a)h^2 + \dots + \frac{1}{k!}f^{(k)}(a) h^k + R_k(a,h)$ com
$\lim_{h\to 0} \frac{R_k(a,h)}{h^k}=0$

Obj. $ R_k(a,h)=\frac{f^{(k+1)}(a+\epsilon h) h^{k+1}}{(k+1)!}, 0 < \epsilon < 1$
fórmula do resto de lagrange

Obs, com $k=1$ temos a definição de derivada:

$f(a+h)=f(a)+f'(a)h+R_1(a,h)$ com $\lim_{h\to 0}\frac{R_1(a,h)}{h}= 0$

constante, $T: \R \to \R$ , $x \to cx$ com c=constante

---

Fórmula de taylor em dim > 1

Seja $g(t) = f(a+tv)$ notar que $g: \R \to \R$, $t \to f(a+tv) \in \R$, $C^k+1$

fórmula de taylor em $g$ e em $t = 0$

$g(t)=g(0)+g'(0)t+\frac{1}{2!}g''(0)t^2 + \dots + \frac{g^{(k)}(0)}{k!}t^k + R_k(t)$

Tem-se: $g(0)=f(a+0\cdot v)=f(0)$
$g'(0) = \nabla f(a+tv)\cdot v$, $| t=v$, = $\nabla f(a)\cdot v$

$g''(t)=\sum_{i,j=1}^n \frac{\partial^2 t}{\partial x_j \partial x_y}(a+tv_i)v_i v_j$

$g''(0) = \sum_{i,j=1}^n \frac{\partial^2 t}{\partial x_j \partial x_y}(a)v_i v_j$

---

donde até 2º ordem:

$f(a+tv)=f(a)+\nabla f(a)\cdot tv + \frac{1}{2} \sum^n_{i=1} ...$

fazendo $h = tv$, $||v||=1$, obtemos:

TEOREMA (fórmula de taylor de 2º ordem)

com $f: \R^n \to \R$

$f(a+h)=f(a)+\nabla f(a)\cdot h + \frac{1}{2} +\sum_{i,j=1}^n ...$
com $lim_{h\to \vec 0}\frac{R_2(h)}{||h||^2}=\vec 0$

Pode-se também escrever:

$f(a+h)=f(a)+\nabla f(a) \cdot h + \frac 12 (h_1 ? - h_n) ...$

em que $Hf(a) = ...$
matriz Hessiana de $f$ em $a$
(matriz simétrica pelo teorema de schwarz)

TPC. escrever polinómio de taylor de ordem 2 de $f(x,y) = e^x - e^y$ em torno de $(0,0)$

$a = (0,0)$

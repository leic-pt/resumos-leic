Fórmula de Taylor de 2º ordem $f: \R^n \to \R$, $C^3$, $a \in \R^n$, $h \in \R^n$

$f(a+h)=f(a)+\nabla f(a)\cdot h + \frac 12 h^T H_f(a)h + R_2(h)$ com $lim_{h \to \vec 0} \frac{R_2(h)}{||h||^2}=\vec 0$

Polinómio de Taylor de 2º ordem (de $f$ em $a$)

Onde $H_f(a) = [\frac{\partial^2 f}{\partial x_1^2} ...]$
Matriz HESSIANA de $f$ em $a$. (matriz simétrica por causa do teorema de Schwarz)

**Exemplo:** Escrever o polinómio de Taylor de 2º ordem da função
$f(x,y) = e^x - e^y$ em torno da origem ($a=(0,0)$)

$=e^{p_1(x,y)}-e^{p_2(x,y)}$ é diferenciável

$\frac{\partial f}{\partial x}=\frac{\partial}{\partial x}(e^x-e^y)=e^x, \frac{\partial f}{\partial x}(0,0)=e^0=1$
$\frac{\partial f}{\partial y}=\frac{\partial}{\partial y}(e^x-e^y))=-e^y, \frac{\partial f}{\partial y}(0,0)=-e^0 =-1$

$\frac{\partial^2 f}{\partial x^2}=\frac{\partial}{\partial x}(\frac{\partial f}{\partial x})=\frac{\partial }{\partial x}e^x=e^x, \frac{\partial^2 f}{\partial x^2}(0,0)=e^0=1$
$\frac{\partial^2 f}{\partial y^2}=\frac{\partial}{\partial y}(\frac{\partial f}{\partial y})=\frac{\partial }{\partial y}(-e^y)=-e^y, \frac{\partial^2 f}{\partial y^2}(0,0)=-e^0=-1$
$\frac{\partial^2 f}{\partial x \partial y}=\frac{\partial f}{\partial x}(\frac{\partial f}{\partial y})=\frac{\partial}{\partial x}(-e)^y=0, \frac{\partial^2 f}{\partial x \partial y}(0,0)=0$

Polinómio de Taylor de ordem $2$ de $f$ em $(0,0)$

$p_2^f(x,y)=f(0,0)+\nabla f(0,0)\cdot (x,y)+\frac 12 (x, y)H_f(0,0)(x,y)$
$=0 + (1, -1)(x,y)+\frac 12(x,y)(1,0,0,-1)(x,y)= x-y+\frac 12 (x,-y) (x,y)=x-y+\frac 12( x^2-y^2)$

O polinómio pedido é $x-y+\frac 12 ( x^2-y^2)$, $(h_1-h_2+\frac 12(h_1^2-h_2^2))$

Usar este polinómio para estimar $e^{0.1} - e^{-0.1}$.

Fazemos $(x,y) = (0.1, -0.1)$

$p_2^f(0.1,-0.1)=0.1-(-0.1)+\frac 12 ( 0.1^2-(-0.1)^2)=0.2$ erro = $0.0003335 < 10 ^{-3}$

$e^{0.1}-e^{-0.1}=0.2003335$

---

Extremos

Conseguir prever das expressões da função em estudo situações do tipo:
[imagem]

Se $f$ é diferenciável e tem extremo relativo ou absoluto (máximo ou mínimo) em $a \in \R^n$ então a restrição de $f$ ao eixo $x_i$ tem um extremo relativo em $a$,
ou seja a função $g: \R \to \R$ dado por $g(t)=f(a_1, a_2, ...?)$

Tem extremo em $t=0$ - estamos em CDI 1.

$0 = g'(0)=\lim_{t\to 0} \frac{g(t)-g(0)}{t}=\lim_{t\to 0}\frac{f(...)-f(...)}{t} = \frac{\partial f}{\partial x_i} (t)$ donde $\frac{...}{...}...?$

Ou seja $\nabla f(a) = \vec 0$ se houver? extremo em $a$

TEOREMA

$f: \R^n \to \R$ tem extremo em $a \in \R^n$

Então, $\nabla f(a) = \vec 0$

Definição

Seja $f: \R^n \to \R$ os pontos $a \in \R^n$ para os quais $\nabla f(a) = \vec 0$ dizem-se pontos de estacionariedade ou pontos críticos.

Exemplos:

1. $f: \R^2 \to \R$, $f(x,y)=x^2+y^2$

pontos críticos de $f$?
$(0,0) \nabla f(x,y) = (2x, 2y) \implies x=0 \land y = 0$

Pontos críticos de $f$ é $(0,0)$

Como $f(x,y)=x^2+y^2 \geq, \forall (x,y) \in \R^2$, $f(0,0) = 0$

Concluímos que este ponto crítico corresponde a um mínimo, ou seja ocorre mínimo (absoluto) de $f$ em $(0,0)$.

2. $f: \R^2 \to \R$, $f(x,y) = \frac{1}{1+x^2+y^2}$ Pontos críticos?

$\frac{\partial f}{\partial x}(x,y) = \frac{\partial }{\partial x}\frac{1}{1+x^2+y^2}=\frac{\partial}{\partial x} ((1+x^2+y^2)^{-1})=(-1)(1+x^2+y^2)^{-1-1} \frac{\partial}{\partial x}(1+x^2+y^2)=\frac{-1}{(1+x^2+y^2)^2}2x=\frac{-2x}{(1+x^2+y^2)^2}$

$\frac{partial f}{\partial y}(x,y) = ... = \frac{-2y}{(1+x^2+y^2)^2}$

$...$

portanto ponto crítico de $f: (x,y) = (0,0)$ - extremo relativo?

$f(x,y)= \frac{1}{1+x^2+y^2}$, $x^2+y^2\geq 0 \implies 1+x^2+y^2 \geq 1(> 0) \implies \frac 11 \geq \frac{1}{1+x^2+y^2}$

Portanto $f(x,y)=\frac{1}{1+x^2+y^2}\leq 1, \forall (x,y) \in \R^2$
$f(0,0)= \frac{1}{1+0^2+0^2}=1$
Portanto ocorre máximo de $f$ em $(0,0)$.

3. $f: \R^2 \to \R$, $f(x,y) = xy$ - pontos críticos de $f$?

$\frac{\partial f}{\partial x}=\frac{\partial}{\partial x}(xy) = y\frac{\partial x}{\partial x} = y\cdot 1 = y$
$\frac{\partial f}{\partial x}=\frac{\partial}{\partial x}(xy) = x$

$(0,0) = \nabla f(x,y) = (y, x) \implies y = 0 \land x = 0$
ponto crítico de $f: (x,y) = (0,0)$
Será que ocorre extremo de $f$ em $(0,0)$?

Como é que esta $f$ se comporta junto a $(0,0)$?

$f(x,y) = xy$, $f(0,0) = 0$

$xy > 0$ se $x$ e $y$ têm o mesmo sinal
$(x > 0 e y > 0) ou (x < 0 e y < 0)$

$xy <> 0$ se $x$ e $y$ têm o sinais distintos
$(x > 0 e y < 0) ou (x < 0 e y > 0)$

Temos ponto de sela em $(0,0)$.
(ao longo de uma direção ocorre máximo enquando que ao longo de outra direção ocorre mínimo - em relação a um mesmo ponto, $(0,0)$ neste caso)

Este é exemplo de ponto crítico que não é extremo

4. $f: \R^2 \to \R$, $f(x,y) = x^2-y^2$ - ponto críticos?

$(0,0)=\nabla f(x,y) = (2x, -2y) \implies x=0 \land y=0$

Portanto ponto crítico de $f$ é $(x,y)=(0,0)$.

Será que ocorre extremo de $f$ em $(0,0)$?

Se $x = 0$ então $f(x,y) = -y^2 \leq 0$.
Se $y = 0$ então $f(x,y) = x^2 \geq 0$

Este ponto crítico não corresponde a extremo.

---

cf. AL

Matriz $A$ simétrica (como por ex. a matriz hessiana), então existe base ortonormada de vetores próprios, $u_1, u_2, \dots u_n$
correspondente ao valores próprios reais $\lambda_1, \lambda_2, \dots, \lambda_n$

Se $h = a_1 u_1 + a_2 u_2 + \dots + a_n u_n$ então $h^TAh= h \cdot Ah= (a_1u_1+ \dots + a_n u_n ) \cdot (a_1\lambda_1 u_1 + \dots + a_n \lambda_n u_n) = \lambda_1 a_1^2+ \lambda_2 a_2^2+\dots+\lambda_n a^2_n$

Forma quadrática
determinada pela matriz A - a ser continuado!

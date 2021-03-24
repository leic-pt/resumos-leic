Recapitulando: $f$ diferenciável em $a \in \R^n$ com extremo em $a$ $implies \nabla f(a) = \vec 0$

- Pontos $a$ tal que $\nabla f(a) = \vec 0$ dizem-se pontos críticos (ou pontos de estacionariedade)
  Estes podem ser máximos ou mínimos ou pontos de sela
- Fórmula de Taylor de 2º ordem em torno de $a \in \R^n$ para $f: \R^n \to \R$
  $f(a+h) = f(a) + \nabla f(a) \cdot h + \frac 12 h^T H_f(a)h + R_2(h)$ com $lim_{h \to \vec 0} \frac{R_2(h)}{||h||^2}=\vec 0$
  Polimónio de Taylor de 2º ordem de $f$ em torno de $a$

e $H_f(a) = [\frac{\partial^2 f}{\partial x_1^2}(a), ...]
matriz HESSIANA de $f$ em $a$ (matriz simétrica devido ao teorema de schwag)

A propósito de matriz simétrica (c.f. álgebra linear):

- Se $A$ é matriz simétrica então existe base ortonormada de vetores próprios (de $A$), $u_1, u_2, \dots, u_n$ correspondentes ao valores próprios reais
  $\lambda_1, \lambda_2, \dots, \lambda_n$ (i.e. $Au_i = \lambda_i u_i$, ...)
  Escrevendo $h=a_1u_1+a_2u_2+\dots+a_nu_n$ com $a_i \in \R$, então
  $h^T A h = h_i(Ah)=(a_1u_1+ a_2u_2+ \dots + a_nu_n) \cdot (a_1\lambda_1 u_1p a_2 \lambda_2 u_2 + \dots + a_n \lambda_n u_n)$
  $= \lambda_1 a^2_1 + \lambda_2 a^2_2 + \dots + \lambda_n a^2_n$ <- sinal é dado pelo $\lambda_i$'s
  Forma quadrática determinada por $A$

Por exemplo:

(i) se $\lambda_i > 0$, $\forall i$ então $h^T A h > 0$, $\forall H$
(ii) se $\lambda_i < 0$, $\forall i$ então $h^T A h < 0$, $\forall H$
(iii) $\lambda_i > 0, \lambda_j < 0$ então ?

Escrevemos agora a fórmula de Taylor de 2º ordem para $f: \R^n \to \R$
em torno de $a \in \R^n$ ponto crítico de $f$ (i.e. $\nabla f(a) = \vec 0$)
Então,
$f(a+h) = f(a) + 0 + \frac 12 h^T H_f(a) h + R_2(h?)$ com $\lim_{h\to \vec 0} \frac{R_2(h)}{||h||^2} = \vec 0$

Donde pelas contas feitas acima
$H_f(a)u_i = \lambda_i u_i, i=1,\dots n, \lambda_i > 0 $ e $u_i \cdot u_j = S_{ij}$

$f(a+h) -f(a) = \frac 12 (\lambda_1\a^2_1+ \lambda_2 a^2_2 + \dots + \lambda_n a^2_n) + R_2(h)$
pequeno: despresável para quando $h\to \vec 0$.

é esta expressão que "manda" quando estamos bem próximos de $a$ (i.e $h\to \vec 0$)

$f(a+h)-f(a) > 0 $ se $\lambda_i$' s $> 0 $ (todos) donde em $a$ ocorre mínimo
$f(a+h)-f(a) < 0 $ se $\lambda_i$' s $< 0 $ (todos) donde em $a$ ocorre máximo

TEOREMA

Seja $f: \R^n \to \R$, $a \in \R$ é ponto crítico de $f$ ($\nabla f(a) = \vec 0$)
Então:
Se $H_f(a)$ é:

- definida positiva (cada valor próprio $\lambda_i > 0$) - minimo local em $a$
- definida negativa (cada valor próprio $\lambda_i < 0$) - máximo local em $a$
- indefinida (valores próprios $\lambda_i >0$ e $\lambda_j < 0$) - ponto de sela $a$
- semidefinida positiva (valores próprios $lambda_i \geq 0$) - mínimo ou sela em $a$
- semidefinida negativa (valores próprios $lambda_i \leq 0$) - máximo ou sela em $a$

Exemplos:

Datermine e clarifique os pontos de estacionariedade da função $f: \R^2 \to \R$
$f(x,y) = -x^4+2x^2-y^2+3$

$\nabla f(x,y) = (-4x^3+4x, -2y)$

$(0,0) = \nabla f(x,y) = (-4x^3+4x, -2y) \implies$
$0 = -4x^3+2x$, $0=-2y$
$y=0$, $0 = 4x(1-x^2)$
$y=0$, $x=0 \lor x=\pm 1$

Pontos críticos: $(0,0), (1,0), (-1,0)$

$$
\frac{\partial^2 t}{\partial x^2} = \frac{\partial}{\partial x}(-4x^4+4x) = -12x^2+4
\frac{\partial^2 t}{\partial y^2} = \frac{\partial}{\partial x}(-2y) = 0
...
$$

em $(0,0)$ $H_f(0,0)= [...]$ já está na forma diagonal portanto valores próprios 4 e -2 portanto ponto de sela em $(0,0)$

em $(1,0)$ $H_f(1,0) =[...]$ valores próprios $-8$ e $-2$ ambos negativos, portanto ocorre máximo em $(1,0)$

em $(-1,0)$ $H_f(-1,0) = [...]$ valores próprios $-8$ e $-2$ -> máximo em $(-1, 0)$

[imagem]

Recordando mais $AL$ com $A$ matriz simétrica portanto $A_i = \lambda_i u_i$ base ortonormada

$det A= \lambda_1 * \lambda_2 * \dots* \lambda_n$ determinante
$tr A = \lambda_1 + \lambda_2 + \dots + \lambda_n$ traço

Obs. se $A$ for $2x2$ $detA = \lambda_1 \lambda_2$, $tr A= \lambda_1 + \lambda_2$
Portanto $det$ e $tr$ permitem obter os valores próprios quando $A$ simétrica é $2x2$.

Corolário:

Se $f: \R^2 \to \R$ com $\nabla f(x) = \vec 0$

$H_f(a) = (...)$ com $A= \frac{\lambda^2 f}{\partial x_i^2}(a)$, $B=\frac{\lambda^2 f}{\partial x\partial y}(a)$, $C=\frac{\lambda^2 f}{\partial y^2}(a)$

$det H_f(a) = AC-B^2 = \lambda_1 \lambda_2$, $tr H_f(a) = A+ C = \lambda_1 + \lambda_2$ Então
(1) Se $det H_f(a) < 0$, $f$ tem ponto de sela em $a$
(2) Se $det H_f(a) > 0$, $tr H_f(a) > 0$ então $f$ tem mínimo local em $a$
(3) Se $det H_f(a) < 0$, $tr H_f(a) < 0$ então $f$ tem máximo local em $a$

Exemplo
$f(x,y) = (x-y)^2 -x^4-y^4$ - determinar e caracterizar os seus pontos críticos

$\frac{\partial f}{\partial x} = 2(x-y)\cdot 1 - 4x^3$
$\frac{\partial f}{\partial y} = 2(x-y)\cdot (-1) - 4y^3$

$(0, 0) = \nabla f(x,y) = (2(x-y)-4x^3, -2(x-y)-4y^3) \implies $
$x-y=2x^3$, $x-y= -2y^3$
$2x^3 = x-y=-2y^3 \implies x^3 = -y^3 \implies (0,0), (1,-1), (-1, 1)$

$\frac{\partial^2 f}{\partial x^2} = \frac{\partial }{\partial x} (2(x-y)-4x^3)= 2-12x^2$
$\frac{\partial^2 f}{\partial y^2} = \frac{\partial }{\partial y} (-2(x-y)-4y^3)= 2-12y^2$

$\frac{\partial^2 f}{\partial x\partial y} = \frac{\partial }{\partial x} (-2(x-y)-4y^3)= -2$

$H_f(x,y)= (...)$

- $(1,-1)$ e/ou $(-1,1)$

$H_f(...) = (...)$
determinante $96 > 0$, traço $-20 < 0$ ocorrem máximos em $(1,-1)$ e em $(-1,1)$

- $(0,0)$
  $H_f(0,0) = (...) $
determinante $0$, traço $4$

Recapitulando:

$f$ real diferenciável em $a \in \R^n$ tem extremo relativo em $a$ $\implies$ $\nabla f(a) = \vec 0$

Pontos $a$ onde $\nabla f(a)= \vec 0$ chamam-se pontos críticos (pontos de estacionariedade)
Portanto tais pontos podem representar máximos, mínimos ou pontos de sela da função em estudo.
Portanto há que determiá-los e ?

Fórmula de Taylor de 2º ordem de $f: \R^n \to \R$, $C^3$, em torno de $a \in \R^n$ ($\h \in \R^n$)
$f(a+h) = f(a) + \nabla f(a) \cdot h + \frac 12 h^T H_f(a) h + R_2(h)$ com $\lim_{\h \to \vec 0} \frac{R_2(h)}{||h||^2} = \vec 0$
Polinómio de Taylor de 2º ordem de $f$ em $a$.

e $H_f(a) = [...]$
matriz hessiana de $f$ em $a$ (matriz simétrica pelo teorema de schwarz)

A propósito de matrizes simétrica (c.f. AL)
Se A é matriz simétrica então existe base ortonormada de vetores próprios de $A$.
$u_1, u_2, \dots, u_n$ correspondentes aos valores próprios de $A$ que são reais
$\lambda_1, \lambda_2, \dots, \lambda_n \to Au_i = \lambda_i u_i, i = 1, \dots, n$

Escrevo o nosso vetor $h$ nesta base $\{u_i's\}$
$h=a_1u_1+ a_2u_2 + \dots + a_nu_n$

Se fosse na base canónica:

$h=h_1e_1+h_2e_2+\dots+h_ne_n$

então:
$h^T Ah = h\cdot (Ah) = h \cdot (\lambda_1a_1u_1+\lambda_2a_2u_2+ \dots + \lambda_na_nu_n)$
$= (a_1u_1+ \dots + a_n u_n) \cdot (\lambda_1 a_1 u_1 + \lambda_2 a_2 u_2 + \dots + \lambda_n a_n u_n )$
$= \lambda_1 a^2_1 + \lambda_2 a^2_2 +\dots + \lambda_n a^2_n$
sinal desta expressão é dado pelos sinais dos valores próprios de $A$.

---

E se eu escrevesse a fórmula de Taylor de 2º ordem de $f$ em torno de ponto crítico de $f$ ($\nabla f(a) = \vec 0$)?

$f(a+h) - f(a) = \vec 0 + \frac 12 h^T H_f(a) h + R_2(h)$ com $\lim_{h\to \vec 0} \frac{R_2(h)}{||h||^2} = \vec 0$

$f(a + h) - f(a) = \frac 12 ( \lambda_1 a^2_1 + \lambda_2 a^2_1 + \dots + \lambda_n a^2_n) + \R_2(h)$
onde $\lambda_1, \lambda_2, \dots, \lambda_n$ são valores próprios de $H_f(a)$ e os $a_i$'s são os coeficientes
de $h$ na ? de $h$ na base ortonormada de vetores próprios da Hessiana.

Permite classificar ponto crítico

Porque se $f(a+h) - f(a) > 0 $ junto a $a$ (ou seja, com $h$ pequeno)
então temos mínimo

se $f(a+h) - f(a) < 0$ então máximo

se $f(a+h) - f(a) > 0 $ para certos $h$'s e $f(a+h) - f(a) < 0$ para outros $h$'s, temos ponto de sela

TEOREMA

Seja $f: \R^n \to \R$, $a \in \R^n$ ponto crítico de $f$ ($\nabla f(a) = \vec 0$)

Então, se $H_f(a)$ é definida positiva (cada valor pŕoprio $lambda_i > 0$), máximo local em $a$
se $H_f(a)$ é definida negativa (cada valor pŕoprio $lambda_i < 0$), mínimo local em $a$
se $H_f(a)$ é indefinida (valor pŕoprio $lambda_i > 0$ e $\lambda_i < 0$), ponto de sela
semi definida positiva (valor próprio $\lambda_i \geq 0$) - máximo ou ponto de sela
semi definida negativa (valor próprio $\lambda_i \leq 0$) - mínimo ou ponto de sela

Corolário

Se $f: \R^2 \to \R$ com $\nabla f(a) = \vec 0$

Se $det H_f(a) < 0$ $f$ tem ponto de sela em $a$
Se $det H_f(a) > 0 $ e $tr H_f(a) > 0$ - $f$ tem mínimo local em $a$
Se $det H_f(a) > 0 $ e $tr H_f(a) < 0$ - $f$ tem máximo local em $a$

---

Exemplos

1. $f(x,y) = xy + \frac 1x + \frac 8y$ identificar e classificar pontos críticos de $f$

$(0,0)=\nabla f(x,y) = (u- \frac{1}{x^2}, x-\frac{8}{y^2}) \implies$
$y = \frac{1}{x^2}, x=\frac{8}{y^2}$
...

1 ponto crítico $(\frac{1}{2}, 4)$

$H_f(x,y) = [...] \implies H_f(\frac 12, 4) = (...) = (...)$
$det = 3 > 0$
$tr = 16 + \frac 14 > 0$

mínimo local em $(\frac 12, 4)$

2.  $f (x,y,z) = x^2+ y^2+ z^2+ xy$ identificar e classificar pontos críticos de $f$

$(0,0,0)=\nabla f(x,y,z) = (2x+y, 2y+x, 2z)\implies ...$

único ponto crítico $(0,0,0)$

$H_f(x,y,z) = (2, 1, 0, ...)$
valores próprios: $\frac 32, 2, 2$
são todos positivos, mínimo local em $(0,0,0)$

---

Recapitulando: TEOREMA (WEIERSTRASS)
seja $f: D \subseteq \R^n \to \R$ e $D \ne \empty$

Se $D$ é compacto (i.e fechado, limitado e $\ne \empty$) e $f$ contínua em $D$
então ... máximo e mínimo de $f$ em $D$.

Exemplo

$f(x,y) = xy(1-xy) no triangulo de vetores $(0,0), (1,0), (0,1)$

$0 \leq x \leq 1$ ; $0 \leq y \leq 1$; $0 \leq 1 -x -y$

[imagem]

$\implies x\cdot y(1 - x- y)\leq 0$

e $=0$ quando $x=0$ ou $y=0$ ou $1-x-y = 0$
?mas antes de T?

Portanto $f(x,y) > 0$ em $T$ e $=0$ nas arestas portanto mínimo; ocorre por exemplo em $(0,0)$

Se há máximo tem de ocorrer no interior de $T$

$f(x,y) = xy(1-x-y) = xy- x^2y - xy^2$
$(0,0)= \nabla f(x,y) = (y-2xy-y^2, x-x^2-2xy) \implies ...$

Confirmar:

$H_f(x,y) = (-2y, 1-2x-2y, ...) \implies H(\frac 13, \frac 13) = (...) = (...)$
$det = \frac 13 > 0$
$tr = -\frac 43 < 0$

máximo local em $(\frac 13, \frac 13)$ como esperávamos.

---

aula passada
$f(x,y) = (x-y)^2 - x^4 - y^4$

"último ponto crítico $(0,0)$ e $H_f(0,0) = (...)$
$det = 0$
$tr = 4 > 0$
$\implies \lambda_1 = 0 \land \lambda_2 = 4$
mínimo segundo uma certa direção

o que se passa com $f$ junto a $(0,0)$?
com $y=x$ vem $f(x,y) = 0^2 - x^4 - x^4= -2x^4$
máximo local segundo $y=x$

Logo ponto de sela

com $y=0$ vem $f(x,y) = x^2 - x^4 = x^2(1-x^2)$

mínimo local segundo $y=0$

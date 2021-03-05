recapitulado

dado f: D \subseteq R^n -> R^m; a \in D

f é contínua em a <=> \forall r > 0, \exists \epsilon > 0: || x- a || < \epsilon => || f(x)-f(a) || < r

Teorema:
Para cada sucessão (x_k) \subset D com x_k -> a
tem-se f(x_k) -> f(a)

- lim\_{x-> a} f(x) = b <=> \forall r > 0 \exists \epsilon > 0: || x -a || < \epsilon => || f(x) - b|| < r
- f é contínua em a <=> lim\_{x-> a} f(x) = f(a)

---

Exemplos mais simples de funções contínuas:

1. função contante f(x) = constante
2. função identidade f(x) = x
   f: D \subseteq R^n -> R^m

Para ex 1:
Dado a \in R^n \land r > 0, será que existe \epsilon > 0 tal que || x-a|| < epsilon => || f(x) - f(a) || < r?

|| f(x) - f(a) || = ||constante - constante || = ||\vec 0|| = ||(0,0,\dots,0)|| = 0 < r

portanto, \forall \epsilon > 0 || x- a || < \epsilon => ||f(x) - f(a)|| = 0 < r, portanto $f$ é contínua em $a$ e como
$a$ era qualquer, então $f$ é contínua no seu domínio.

Para ex 2:
Dado $a \in \R^n \land r>0$ será que existe \epsilon > 0 tal que || x- a|| <\epsilon => ||f(x) - f(a)|| < r ?

||f(x) - f(a)|| = ||x-a|| então, com \epsilon = r:
|| x - a|| < \epsilon (= r) => || f(x) - f(a)|| = || x- a|| < \epsilon = r
portanto esta função $f$ também é contínua em $a$.
Como $a$ é genérico, logo $f$ é contínua em $\R^n$.

3. Será que a soma de 2 funções contínuas em $a$ também é contínua em $a$?
   Sejam f,g: D \subset R^n -> R^m, a\in D, f e g contínua em $a$.

Dado r>0, existe \epsilon > 0: || x- a|| < epsilon => || f(x) - f(a)|| < r/2 \land || g(x) - g(a)|| < r/2
(r/2 por vai dar jeito; nós podemos escolher)

então || (f(x) + g(x)) - (f(a) + g(a)) || = || (f(x) - f(a)) + (g(x) - g(a))|| <= (desigualdade triangular) || f(x) - f(a)|| + ||g(x) - g(a)|| < r/2 + r/2 = r
portanto f + g é contínua em $a$. Portanto f + g é contínua em D_f \cap D_g.

Proposição:

Seja f,g: D \subset \R^n -> \R^m contínuas ; \alpha \in\R

polinómios são funções contínuas
funções racionais são contínuas (i.e. quociente de polinómios) são funções contínuas. 0. p_i(x_1,\dots,x_i,\dots,x_n) = x_i é contínua

1. \alpha f é contínua
2. f + g é contínua
3. f \* g é contínua (m = 1, senão não dá para fazer a multiplicação)
4. f / g é contínua (m = 1), nos pontos x: g(x) != 0
5. (com h: R^m -> R^p contínua em b=f(a) com a \in D) h o f é contínua em a

demonstração:

5. dada (x_k) \subset D com x_n -> a => f(x_k) -> (converge para) f(a) porque f é contínua => h(f(x_k)) -> h(f(a)) porque h é contínua em f(a)

logo a composta é contínua em D

0. Dado r> 0, || p_i(x) - p_i(a) || = | x_i - a_i | = \sqrt {(x_1 - a_1) ^2 + \dots + (x_i -x_i) + \dots + (x_n - a_n)^2} = || x-a|| < \epsilon e escolho \epsilon = r

donde se ||x-a|| < \epsilon => ||p_i(x)- p_i(a)|| < ||x-a|| < \epsilon = r portanto p_i é contínua em $a$, $p_i$ é contínua em D.

---

limites

proposição
seja f,g, h: D\subseteq R^n -> R^m , a \in D; existem lim\_{x->a} f, g, h

1. se o limite existe é único.
2. lim*{x-> a} (f(x) + g(x)) = lim*{x->a} f(x) + lim\_{x->a} g(x)
3. lim*{x-> a} (f(x)g(x)) = lim*{x->a}f(x) \* lim\_{x->a} g(x) (m=1)
4. lim*{x->a} f(x) = lim*{x->a}(f_1(x), f_2(x), \dots, f_m(x)) = (lim\_{x->a} f_1(x), lim\_{x->a} f_2(x), \dots, lim\_{x->a} f_m(x)) com f_1: D \subseteq R^n -> R

5. f(x) <= g(x) =>lim*{x->a} f(x) < lim*{x->a} g(x)
6. lim*{x->a} f(x) = lim*{x->a} h \land f(x) <= g(x) <= h(x) => lim*{x->a} g(x) = lim*{x->a} f(x) = lim\_{x->a} h(x)
7. se f é limitada junto a $a$ e lim*{x->a} g(x) = 0 (m = 1) então lim*{x->a} f(x) \* g(x) = 0
8. se lim*{x->a} f(x) = \vec 0 <=> lim*{x->a} || f(x) || = 0

---

exemplos (cálculo de limites / continuidade)

1. f(x_y) = x^2+y^2 - polinómio logo contínua
2. f(x,y,z) = e^xyz : f_1(x,y,z) = xyz - polinómio (monómio) logo contínua
   f_2(t) = e^t - contínua (confrontar CDI 1)
   logo, f(x,y,z) = f_2 o f_1 (x,y,z) é contínua porque a composta de funções contínua é contínua

3. f(x,y) = x^3 - y^3 / x^2+y^2 - função racional, logo contínua em R^2\ {(0,0)}
   Será que existe lim\_{(x,y)->(0,0)} f(x,y) ?

x^3 / x^2+y^2 = x \* x^2/x^2+y^2 <= x^2 + y^2 / x^2 + y^2 = 1 ->(x,y) -> (0,0) 0 ;

-y^3 / x^2 +y^2 ... -> 0

Logo, existe lim\_{(x,y)->(0,0)} f(x,y) = 0, logo podemos prolongar f por continuidade a(0,0)

\overline f(x,y) = x^3 - y^3/x^2+y^2 (x,y) != (0,0), 0 (x,y) = (0,0)

---

1. lim*{(x,y)->(0,0)} sin(xy)/y = lim*{(x,y)->(0,0)} sin(xy)/xy _ x = 1 _ 0 = 0

(confrontar com CDI 1, lim \_{t->0} sint/t = 1)

2. lim\_(x,y) -> (0,0) (x-y)^2/x^2+y^2 usamos limites direcionais

lim*{(x,y)->(0,0), y=mx} (x-y)^2/x^2+y^2 = lim*{x->0} (x-mx)^2/(x^2+(mx)^2)=lim*{x->0} (x^2(1-m)^2)/(x^2(1+m^2))
= lim*{x->0} (1-m)^2/(1+m^2) = (1-m)^2/(1+m^2) <- depende de m
logo o limite não é único logo não existe!!

pergunta: será que quando existirem os limites direcionais e foram todos iguais entre si o limite existe?
NÃO necessariamente; ver exemplo 3

3. lim*{(x,y)->(0,0)} (x^2\*y)/(x^4+y^2)
   lim*{(x,y)->(0,0), y=mx} x^2\*y/x^4+y^2=lim\_{x->0} x^2\*mx/x^4+(m.x)^2 = lim\_{x->0} x^2\*m ... \forall m

   no entanto ... (ir por outra curva)

... lim = 1/2 != 0, logo o limite não existe

4. lim\_{(x,y)->(0,0)} x^3 y^2/(x^2+y^2)^2 0<= | x^3 y^2/(x^2+y^2)^2| = |x| x^2/x^2+y^2 * y^2/x^2+y^2 <= |x| *x^2+y^2/x^2+y^2 \* x^2+y^2/x^2+y^2 = |x| -> 0

5. lim*{(x,y)->(0,0)} sin(x^2+2y^2)+x^3y^2/x^2+2y^2 = lim*{(x,y)->(0,0)} sin(x^2+2y^2)/x^2+2y^2 + lim\_{(x,y)->(0,0)} x^3 y^2/(x^2+2y^2)

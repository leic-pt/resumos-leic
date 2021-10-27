_xournal 1_

dado $c < d$:

$$
x(t) = \begin{cases}
-(c-t)^2 & \text{se} t \leq c\\
0 & \text{se} c \leq t \leq d\\
(t-d)^2 & \text{se } t \gte d
\end{cases}
$$

é solução

---

várias notações:

$y' = f(t,y)$ ; $x' = f(t,x)$ ; $y' = f(x,y)$ (dá tudo ao mesmo)

exemplo 3

$f(t,y) = \sqrt{y} - \sqrt{|t|}$ é localmente Lip. em relação a $y$ em $\R \times ]0, +\infty [$

$$
| f(t,y_1) - f(t,y_2)| = |\sqrt{y_1} - \sqrt{y_2}|
$$

$$
\sqrt{y_1} - \sqrt{y_2} = \frac{1}{2 \sqrt{\theta}} (y_1 - y_2)
$$

(teorema de lagrange???)

$(\sqrt{x})' = \frac{1}{2 \sqrt{x}}$, $\theta$ está entre $y_1$ e $y_2$

_xournal 2_

$y_1, y_2 > \frac{y_0}{2}$, $\theta > \frac{y_0}{2}$, $\sqrt{\theta} < \sqrt{\frac{y_0}{2}}$, $\frac{1}{\sqrt{\theta}} < \sqrt{\frac{2}{y_0}}$
$\frac{1}{2\sqrt{\theta}} < \frac{1}{\sqrt{2 y_0}}$

$\frac{1}{2\sqrt{\theta}} < \frac{1}{\sqrt{2 y_0}} = L$

então

$$
| f(t,y_1) - f(t,y_2)| = |\sqrt{y_1} - \sqrt{y_2}| \leq L |y_1-y_2|
$$

---

um bocado de demonstrações do teorema de picard-lindelo..f

$\frac{\d y}{\d t} = f(t,y)$ com $y(t_0) = y_0$ $\Leftrightarrow$ $y(t) = y_0 + \int_{t_0}^{t} f(s, y(s)) \d s$ -> $y' =f(t, y(t))$ -> $y(t_0) = y_0$

equiv

$$
\int_{t_0}^{t} y'(s) \d s = y(t) - y(t_0) = \int_{t_0}^{t} f(s, y(s)) \d s
$$

$T(\alpha (t) ) = y_0 + \int_{t_0}^{t} f(s,\alpha(s)) \d s$

_xournal 3_

$$
y_0 (t) = y_0
$$

$$
y_1(t) = y_0 + \int_{t_0}^{t} f(s,y_0) \d s
$$

$$
y_{m+1}(t) = y_0 + \int_{t_1}^{t} f(s, y_m (s)) \d s
$$

$$
\alpha(s) , \beta(t)
$$

$$
||\alpha - \beta||= \sup ||\alpha(t) - \beta(t)||
$$

---

Lema de Gro..nwall (?)

$u, v: I \to \R$

$u, v \gte 0$, $t_0 \in I$

$\forall t \in I$, $u(t) \leq \alpha + | \int_{t_0}^{t} v(s)u(s) \d s|$

Então

$ $u(t) \leq \alpha e^{| \int_{t_0}^{t} v(s) \d s|}$

Se $\alpha = 0$ no Lema de Gronwall$ então $u(t) \equiv 0$.

$$
\begin{darray}{ccc}
\frac{\d y_1}{\d t} = f(t,y_1) &
\frac{\d y_2}{\d t} = f(t,y_2) &
y_1(t_0) = y_2(t_0) = y_0
\end{darray}
$$

$$
y_1(t) = y_0 + \int_{t_0}^{t} f(s,y_1(s)) \d s
$$

$$
y_2(t) = y_0 + \int_{t_0}^{t} f(s,y_2(s)) \d s
$$

$$
||y_1 - y_2|| = || \int_{t_0}^{t} f(s, y_1) - f(s, y_2) \d s || \leq | \int_{t_0}^{t} ||f(s,y_1) - f(s,y_2)|| \d s \leq | \int_{t_1}^{t} L ||y_1 -y_2|| \d s|
$$

$$
\leq | \int_{t_0}^{t} u(s) \d s
$$

---

Dependência contínua nas condições iniciais.

$$
\begin{darray}{cc}
\frac{\d y}{\d t} = f(t,y) & y(t_0) = y_0
\end{darray}
$$

$$
y(t_0, y_0, t) \equiv y(t)
$$

$(y_1, y_0) - y(t_0, y_0, t)$ é contínua

_xournal 4_

---

:::tip[Teorema]

Seja $D \subset \R \times \R^n$ um conjunto aberto e $f: D \to \R^n$ tal que

a) $f$ é contínua em $D$
b) $f(t,y)$ é localmente Lipschitz em relação a $y$

Se $y(t)$ é tal que, para certo intervalo $I$ aberto não vazio,

$$
\begin{darray}{cc}
\frac{\d y}{\d t} = f(t,y) & \forall t \in I
\end{darray}
$$

Então existe um intervalo máximo de definição $]a, b[$
tal que $I \subset ]a,b[$ e $y(t)$ admite um prolongamento com $\frac{\d y}{\d t} = f(t,y)$, $\forall t \in ]a,b[$
e verifica-se uma das seguintes propriedades que caracterizam $b$ ($a$ respetivamente)

i) $b = + \infty$, $a = -\infty$
ii) $y(t)$ não é limitada para $t$ berto de $b$ (... $a$)
iii) $\frac{\d y}{\d t}(t)$ não é limitada para $t$ perto de $b$ (... $a$)
iv) $\lim_{t\to b} y(t) = \beta$ existe e $(b, \beta) \in \partial D$ ($\lim_{t\to a} y(t) = \alpha$ existe e $(a, \alpha) \in \partial D$)

:::

Proposição (1.55)

$f: \R \times \R^n \to \R^n$

uma função localmente lip. em $y$ e limitada então para cada $(t_0, y_0) \in \R \times \R^n$
a solução de $\frac{\d y}{\d t} = f(t,y)$, $y(t_0) = y_0$

... intervalo máximo de definição $\R$

# gaspa notes

## exs semana 3

(ex 5.)

- com módulos, optar por resolver para x > 0 e para x < 0 separadamente

- olhar para o dado e tentar interpretá-lo -> se for x' = 2 sqrt(x), a derivada vai ser smp positiva (e portanto a funçao sempre crescent)
  -> importante para a solução

## teorema de picard-lindelof

- a equação diferencial tem de ser de primeira ordem btw, e a solução é _única_

- só temos de saber aquela primeira definição de localmente Lipschitz; a segunda está no livro e é um bocado mais complicada mas não precisamos de saber

# notes 18-10-2021 - cdi3

- diferenciabilidade implica ser localmente lipschitz por causa do t. lagrange

### ex 2 - ver se sao localmente lipschitzianas, determinar L

- f(t, y) = t² + y²

### ex 1 - iteradas de picard (?)

wtf oqq é uma iterada de picard sequer -> o b) é uma bootleg série de taylor pog

iteradas de picard parecem fixes mas o b) foi estranho, cagaram no y(0) no resto for some reason, nao percebi bem

falámos do lema de gronwall wtf? questa merda

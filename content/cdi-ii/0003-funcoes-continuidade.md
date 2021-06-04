---
title: Funções e Continuidade em Rⁿ
description: Sucessões, Funções, Continuidade e Limites em Rⁿ
path: /cdi-ii/funcoes-continuidade
---

# Funções e Continuidade em Rⁿ

```toc

```

## Sucessões em Rⁿ

Uma sucessão $(u_k)$ de termos em $\R^n$ é uma função

$$
\begin{array}{ c c c }
u: & \mathbb{N} \longrightarrow \mathbb{R}^{n} & \\
 & n\longrightarrow u_{k} & =\underbrace{( u_{k1} ,u_{k2} ,\dotsc ,u_{kn})}_{n\text{ coordenadas}}
\end{array}
$$

:::tip[EXEMPLO]
Se tivermos uma sucessão de termos em $\R^3$, $u_k = (\frac 1k, k, 2^k) \in \R^3$,
as suas **sucessões coordenadas** vão ser:

$$
u_{k1}=\frac 1k\quad,\quad u_{k2}=k\quad, \quad u_{k3} = 2^k
$$

:::

### Convergência de sucessões em Rⁿ

:::tip[DEFINIÇÃO]

Diz-se que uma sucessão $(u_k) \subset \R^n$ converge para $a\in\R^n$ se, por definição,

$$
\forall r > 0, \exists N \in \N: k > N \implies || u_k - a || < r\\
\text{ou}\\
\forall r > 0, \exists N \in \N: k > N \implies u_k \in B_r(a)
$$

:::

Podemos usar a seguinte notação para indicar a convergência de uma sucessão:

$$
u_{k} \longrightarrow a\quad \text{ou} \quad u_{k}\underset{k\rightarrow \infty }{\longrightarrow } a\quad \text{ou} \quad \lim u_{k} =a\quad \text{ou} \quad \lim_{k\rightarrow \infty } u_{k} =a
$$

Mais simplesmente, podemos dizer que uma sucessão converge para $a$ se $\lim ||u_k - a|| = 0$.

Para calcular este limite, devemos calcular individualmente para cada coordenada, e verificar a sua convergência.

$$
\underset{\text{em } \R^n}{u_k \to a} \Leftrightarrow \underset{\text{em }\R}{u_{ki} \to a_i} \text{ para cada } i=1,2,\dotsc, n
$$

:::details[Exemplos]

1. $\displaystyle u_k = \left(\frac 1k, e^{-k}\right)$

   $$
   u_{k1} = \frac 1k \to 0 \quad, \quad u_{k2} = e^{-k} \to 0
   $$

   donde $\lim u_k = (0,0)$.

---

2. $\displaystyle u_k = \left(\frac 1k, 2^k\right)$

   Não é convergente pois $2^k \to \infty$

---

3. $\displaystyle u_k = \left(\frac{k-1}{k}, 0, \frac 1 {3^k}\right)$

   $$
   \begin{array}{ l }
   u_{k1} =\frac{k-1}{k} =\frac{1-\frac{1}{k}}{1}\rightarrow 1\\
   u_{k2} =0\rightarrow 0\\
   u_{k3} =\frac{1}{3^{k}}\rightarrow \frac{1}{+\infty } =0\\
   \end{array}
   $$

   donde $\lim u_k = (1,0,0)$.

:::

:::tip[TEOREMA]
Se $D\subset \R^n$ é [fechado](./0002-norma-topologia.md#conjunto-aberto-fechado-limitado-e-compacto)
(ou seja, $D = \overline D$), então qualquer sucessão de termos em $D$ ($(u_k)\subset D$)
e convergente, tem o seu limite em $D$.
:::

#### Sucessão limitada mas não convergente

Uma sucessão pode ser limitada sem ser convergente. Vejamos o seguinte exemplo:

$$
u_{k} =\left(\underset{0\leqslant }{\overset{\leqslant 2}{r_{k}}} ,\underset{-1\leqslant }{\overset{\leqslant 2}{( -1)^{k} +\frac{1}{k}}}\right) \ \ \text{com } r_{k} =k\%3\in \{0,1,2\}
$$

Podemos facilmente concluir que $(u_k)$ é limitada mas não converge, pois:

- se $k$ par $(-1)^k+\frac{1}{k}\to 1$
- se $k$ ímpar $(-1)^k+\frac{1}{k}\to -1$
- a sucessão $r_k$ alterna entre $\{0,1,2\}$

Se tomarmos a subsucessão $(u_{3k})$, resolvemos o problema da primeira parcela:

$$
u_{3k} = \left(r_{3k}, (-1)^{3k}+\frac{1}{3k}\right) = \left(0, (-1)^{3k}+\frac{1}{3k}\right)
$$

No entanto, $3k$ continua a ser alternadamente par e ímpar.

Então, se tomarmos $(u_{6k})$, resolvemos o problema da segunda parcela:

$$
u_{6k} = \left(r_{6k}, (-1)^{6k}+\frac{1}{6k}\right) = \left(0, {(-1)^2}^{3k}+\frac{1}{6k}\right)\to (0,1)
$$

Portanto, $(u_{6k})$ é subsucessão convergente da sucessão limitada $(u_k)$.

## Continuidade

Esta é outra das relações que naturalmente migra para $\R^n$, sem muitas alterações.

:::tip[DEFINIÇÃO]

Seja $f: D \subseteq \R^n \to \R^m$, $f$ é contínua em $a$ se e só se

$$
\forall r>0, \exists \epsilon > 0: x\in B_\epsilon (a) \implies f(x) \in B_r(f(a))\\
\text{ou seja} \\
\forall r>0, \exists \epsilon > 0: || x - a|| < \epsilon \implies || f(x) - f(a) || < r
$$

:::

:::tip[TEOREMA]

Se uma função $f: D \subset \R^n \to \R^m$ é contínua em $a\in D$, então
qualquer sucessão $(u_k)\subset D$ com $u_k \to a$ implica que $f(u_k) \to f(a)$.

:::

Para provarmos uma maneira mais simples de estudar a continuidade de uma função em $\R^n$ num ponto,
necessitamos de definir limite em $\R^n$.

### Limite

:::tip[DEFINIÇÃO]

Sejam $f: D\subseteq \R^n \longrightarrow \R^m$, $b \in \R^m$, $a \in \overline D$.  
Diz-se que $b$ é o limite de $f$ quando $x\to a$, se, por definição,

$$
\forall r > 0, \exists \epsilon > 0: x\in B_\epsilon (a) \implies f(x) \in B_r(b)\\
\text{ou seja}\\
\forall r > 0, \exists \epsilon > 0: || x - a||_m < \epsilon \implies ||f(x) -b ||_m < r
$$

Representa-se, tal como já era conhecido, por $\displaystyle b=\lim_{x\to a} f(x)$

:::

Voltando à contínuidade, dizemos então que **$f$ é contínua em $a$ $\Leftrightarrow$ $\lim_{x\to a} f(x) = f(a)$**.

Também podemos concluir que se $\lim_{x\to a}f(x) = b$, então para qualquer sucessão $(x_k) \subset D$ com $x_k \to a$ tem-se $f(x_k) \to b$.

### Prolongamento por continuidade

Tal como já vimos a CDI-I, quando um ponto não pertence ao domínio de uma função,
mas pertence a $\overline D$ e existe limite da função nesse ponto,
podemos **prolongar a função por continuidade**.  
Vejamos um exemplo, ainda em $\R$.

Seja $\displaystyle f(x) = \frac{\sin x}{x}, \forall x \in \R \backslash \{0\} = D$.
Como existe $\displaystyle \lim_{x \to 0} \frac{\sin x}x = 1$,
podemos definir o **prolongamento por continuidade de $f$ a $0 \in \overline D$**.

$$
\tilde{f}( x) =\begin{cases}
f( x) & \text{se } x\neq 0\\
1 & \text{se } x=0
\end{cases}
$$

:::warning[CONTRA-EXEMPLO]

No entanto, se tivessemos a função

$$
f_1( x) =\begin{cases}
\frac{\sin x}{x} & \text{se } x\neq 0\\
\frac{1}{\sqrt{\pi}} & \text{se } x=0
\end{cases}
$$

esta não seria contínua em $x=0$ porque

$$
1=\lim_{x\rightarrow 0} f_{1}( x) =\lim_{x\rightarrow 0}\frac{\sin x}{x} \neq \frac{1}{\sqrt{\pi }} =f_{1}( 0)
$$

:::

### Continuidade de funções conhecidas

As seguintes funções são contínuas, pelas demonstrações abaixo:

- $f(x) = \text{constante}$ (função constante)
- $f(x) = x (f: D \subseteq \R^n \to \R^m)$ (função identidade)

:::details[Demonstrações]
**Para a função constante:**

Dado $a \in R^n \land r > 0$, será que existe $\epsilon > 0$ tal que $|| x-a|| < \epsilon \implies || f(x) - f(a) || < r$?

$|| f(x) - f(a) || = ||\text{constante} - \text{constante} || = ||\vec 0|| = ||(0,0,\dots,0)|| = 0 < r$

Logo, $\forall \epsilon > 0, || x- a || < \epsilon \implies ||f(x) - f(a)|| = 0 < r$, portanto $f$ é contínua em $a$ e como
$a$ era qualquer, então $f$ é contínua no seu domínio.

---

**Para a função identidade:**

Dado $a \in \R^n \land r>0$ será que existe $\epsilon > 0$ tal que $|| x- a|| <\epsilon => ||f(x) - f(a)|| < r$ ?

$||f(x) - f(a)|| = ||x-a||$ então, com $\epsilon = r$:  
$|| x - a|| < \epsilon (= r) => || f(x) - f(a)|| = || x- a|| < \epsilon = r$

Logo esta função $f$ também é contínua em $a$.
Como $a$ é genérico, logo $f$ é contínua em $\R^n$.

:::

### Operações algébricas entre funções contínuas

Sejam $f,g: D \subset \R^n \to \R^m$ contínuas; $\alpha \in\R$

0. $p_i(x_1,\dots,x_i,\dots,x_n) = x_i$ é contínua
1. $\alpha f$ é contínua
2. $f + g$ é contínua
3. $f \times g$ é contínua (para $m = 1$, senão não dá para fazer a multiplicação)
4. $\frac f g$ é contínua (para $m = 1$), nos pontos $x: g(x) \ne 0$
5. $h \circ f$ é contínua em $a$ (com $h: R^m \to R^p$ contínua em $b=f(a)$ com $a \in D$)

Através destas propriedades, podemos concluir que **qualquer função polinomial é contínua** e
que **qualquer função racional (quociente de polinómios) é contínua**.

:::details[Demonstrações]

**Demonstração da propriedade 0 ($p_i(x_1,\dots,x_i,\dots,x_n) = x_i$ é contínua)**

Dado $r> 0$,

$$
|| p_i(x) - p_i(a) || = | x_i - a_i | = \\
= \sqrt {(x_1 - a_1) ^2 + \dots + (x_i -x_i) + \dots + (x_n - a_n)^2} =\\
= || x-a|| < \epsilon
$$

e escolhe-se $\epsilon = r$

De onde se tira $||x-a|| < \epsilon \implies ||p_i(x)- p_i(a)|| < ||x-a|| < \epsilon = r$
portanto $p_i$ é contínua em $a$.

Logo, $p_i$ é contínua em $D$.

---

**Demonstração da propriedade 2 ($f+g$ é contínua)**

Sejam $f,g: D \subset R^n \to R^m, a\in D$, $f e g$ contínua em $a$.

Dado $r>0$, existe $\epsilon > 0: || x- a|| < \epsilon \implies || f(x) - f(a)|| < \frac r 2 \land || g(x) - g(a)|| < \frac r 2$  
(neste caso, $\frac r 2$ vai dar jeito, mas quando estamos a fazer uma demonstração podemos escolher)

Então,

$$
|| (f(x) + g(x)) - (f(a) + g(a)) || = || (f(x) - f(a)) + (g(x) - g(a))|| \leq\\
(\text{pela desigualdade triangular}) \leq || f(x) - f(a)|| + ||g(x) - g(a)|| < \frac r2 + \frac r2 = r
$$

portanto $f + g$ é contínua em $a$.  
Logo, $f + g$ é contínua em $D_f \cap D_g$.

---

**Demonstração da propriedade 5 ($h \circ f$ é contínua em $a$)**

Dada $(x_k) \subset D$ com $x_n \to a \implies f(x_k) \to f(a)$ porque $f$ é contínua,
então $h(f(x_k)) \to h(f(a))$ porque $h$ é contínua em $f(a)$.

Logo a composta é contínua em $D$.

:::

:::details[Exemplos Continuidade]

$$
f(x,y)= x^2+y^2
$$

É um polinómio, logo é contínua.

---

$$
f(x,y,z) = e^{xyz}
$$

Separando em duas funções:

- $f_1(x,y,z) = xyz$ é um polinómio (neste caso, um monómio), logo é contínua
- $f_2(t) = e^t$ também é contínua (pelo que já é conhecido de CDI-I)

Então, $f(x,y,z) = f_2 \circ f_1 (x,y,z)$ é contínua porque a composta de funções contínuas é contínua.

---

$$
f(x,y) = \frac{x^3 - y^3}{x^2+y^2}
$$

É uma função racional, logo é contínua em $\R^2\ \backslash \left\{(0,0)\right\}$.  
Temos de verificar se existe $\lim_{(x,y)\to(0,0)} f(x,y)$, para estudar o prolongamento contínuo.  
Para simplificar os cálculos, separamos a expressão da função em duas parcelas, e calculamos o limite de cada uma,
somando os seus limites (caso existam).

$$
\frac{x^{3}}{x^{2} +y^{2}} =x\times \frac{x^{2}}{x^{2} +y^{2}}\rightarrow 0,\ \text{pois } 0\leqslant \ \frac{x^{2}}{x^{2} +y^{2}} \leqslant \frac{x^{2} +y^{2}}{x^{2} +y^{2}} =1\\
\frac{-y^{3}}{x^{2} +y^{2}} =-y\times \frac{y^{2}}{x^{2} +y^{2}}\rightarrow 0,\ \text{pois } 0\leqslant \frac{y^{2}}{x^{2} +y^{2}} \leqslant \frac{x^{2} +y^{2}}{x^{2} +y^{2}} =1
$$

Logo, existe $\displaystyle \lim_{(x,y)\to(0,0)} f(x,y) = 0$. Então, podemos prolongar $f$ por continuidade a $(0,0)$:

$$
\tilde{f} =\begin{cases}
\frac{x^{3} -y^{3}}{x^{2} +y^{2}} & \text{se }( x,y) \neq ( 0,0)\\
0 & \text{se }( x,y) =( 0,0)
\end{cases}
$$

:::

## Limites

### Propriedades de limites

Sejam $f,g,h: D\subseteq \R^n \to \R^m$ , $a \in D$ e existem $\lim_{x\to a} f(x), g(x), h(x)$

1. Se o limite existe é único.
2. $\lim_{x\to a} \left(f(x) + g(x)\right) = \lim_{x\to a} f(x) + \lim_{x\to a} g(x)$
3. $\lim_{x\to a} \left(f(x)g(x)\right) = \lim_{x\to a}f(x) \times \lim_{x\to a} g(x)$ (apenas para $m=1$)
4. $$
   \lim_{x\to a} f(x) = \lim_{x\to a}\left(f_1(x), f_2(x), \dots, f_m(x)\right) =\\
   = \left(\lim_{x\to a} f_1(x), \lim_{x\to a} f_2(x), \dots, \lim_{x\to a} f_m(x)\right)
   $$

   com $f_1: D \subseteq \R^n \to \R$

5. $f(x) \leq g(x) \implies \lim_{x\to a} f(x) < \lim_{x\to a} g(x)$
6. $$
   \lim_{x\to a} f(x) = \lim_{x\to a} h(x) \land f(x) \leq g(x) \leq h(x) \implies \\
   \implies \lim_{x\to a} f(x) = \lim_{x\to a} g(x) = \lim_{x\to a} h(x)
   $$
7. Se $f$ é limitada junto a $a$ e $\displaystyle \lim_{x\to a} g(x) = 0$ (para $m = 1$), então $\displaystyle \lim_{x\to a} f(x) \times g(x) = 0$
8. Se $\lim_{x\to a} f(x) = \vec 0 \iff \lim_{x\to a} || f(x) || = 0$

### Limites direcionais

Quando não conseguimos provar que um limite existe e calcular o seu valor,
podemos tentar provar que esse limite não existe através dos **limites direcionais**.

:::tip[DEFINIÇÃO]

Em $\R^2$ em particular, se se substituir $y=mx$, então

$$
\lim_{(x,y)\to (0,0)} f(x,y) = \lim_{x \to 0} f(x,mx)= \dots = F(m)
$$

ou seja, se o limite depende explicitamente de $m$ então o limite não existe, pois o limite quando existe é único.

:::

Além de limites em $\R^2$ segundo retas, também podemos ter limites segundo a família de quadráticas, $y=kx^x$.

Se o limite

$$
\lim_{(x,y)\to (0,0)} f(x, y) = \lim_{x\to 0} f(x, kx^2)
$$

depender de $k$, então o limite não existe.

Esta é uma boa estratégia quando queremos provar que o limite não existe.

:::warning

Não ser pode usar limites direcionais para provar que um limite existe.
Se obtivermos um valor que não depende de $m$, $k$, etc, **nada se pode concluir**.

:::

:::details[Exemplos Limites]

$$
\lim_{(x,y)\to(0,0)} \frac{\sin(xy)}{y} = \lim_{(x,y)\to(0,0)} \frac{\sin(xy)}{xy} \times x = 1 \times 0 = 0
$$

(em semelhança a CDI-I, $\lim_{t\to 0} \frac{\sin t}{t} = 1$)

---

$$
\lim_{(x,y)\to (0,0)} \frac{(x-y)^2}{x^2+y^2}
$$

Temos de usar limites direcionais para resolver este limite.  
Tomando $y=mx$,

$$
\lim _{( x,y)\rightarrow ( 0,0)}\frac{( x-y)^{2}}{x^{2} +y^{2}} =\lim _{x\rightarrow 0}\frac{( x-mx)^{2}}{x^{2} +( mx)^{2}} =\lim _{x\rightarrow 0}\frac{x^{2}( 1-m)^{2}}{x^{2}\left( 1+m^{2}\right)} =\\
=\lim _{x\rightarrow 0}\frac{( 1-m)^{2}}{1+m^{2}} =\frac{( 1-m)^{2}}{1+m^{2}}
$$

que depende de $m$.  
Logo, o limite não é único, então não existe.

---

Nem sempre quando existem os limites direcionais e estes forem todos iguais, existe o limite.

$$
\lim_{(x,y)\to (0,0)} \frac{x^2 y}{x^4+y^2}
$$

Novamente, vendo o limite direcional $y=mx$:

$$
\lim _{( x,y)\rightarrow ( 0,0)}\frac{x^{2} y}{x^{4} +y^{2}} =\lim _{x\rightarrow 0}\frac{x^{2} \cdot mx}{x^{4} +( mx)^{2}} =\lim _{x\rightarrow 0}\frac{x^{2} \cdot mx}{x^{2}\left( x^{2} +m^{2}\right)} =\lim _{x\rightarrow 0}\frac{mx}{x^{2} +m^{2}} =0,\ \forall m
$$

No entanto, se tomarmos $y=x^2$, outra curva em que também passa pelo ponto $(0,0)$,

$$
\lim _{( x,y)\rightarrow ( 0,0)}\frac{x^{2} y}{x^{4} +y^{2}} =\lim _{x\rightarrow 0}\frac{x^{2} \cdot x^{2}}{x^{4} +\left( x^{2}\right)^{2}} =\lim _{x\rightarrow 0}\frac{x^{4}}{x^{4} +x^{4}} =\lim _{x\rightarrow 0}\frac{1}{2} =\frac{1}{2} \neq 0
$$

Logo, o limite não existe.

---

$$
\lim _{( x,y)\rightarrow ( 0,0)}\frac{x^{3} y^{2}}{\left( x^{2} +y^{2}\right)^{2}} =0
$$

Enquadrando o limite:

$$
0\leqslant \left| \frac{x^{3} y^{2}}{\left( x^{2} +y^{2}\right)^{2}}\right| =|x|\cdot \frac{x^{2}}{x^{2} +y^{2}} \cdot \frac{y^{2}}{x^{2} +y^{2}} \leqslant |x|\cdot \frac{x^{2} +y^{2}}{x^{2} +y^{2}} \cdot \frac{x^{2} +y^{2}}{x^{2} +y^{2}} =|x|\rightarrow 0
$$

Logo, o limite é $0$.

:::

## Teorema de Bolzano-Weierstrass

:::tip[Definição]

Seja $D \subseteq \R^n$.

Se $D$ é compacto (isto é, fechado e limitado), então toda a sucessão de pontos em $D$ contém uma sub-sucessão convergente para um ponto de $D$.

:::

A demonstração deste teorema encontra-se nos slides da aula 5.

## Teorema de Weirestrass

Deste teorema, podemos retirar:

- As funções contínuas aplicam conjuntos compactos em compactos

- Para funções escalares, isto é, $f:D\subset \R^n \to \R^m$ com $m=1$,  
  Funções escalares contínuas em compactos têm máximo e mínimo

---

Slides:

- [Aula 3](https://drive.google.com/file/d/1HvXWYyDzDM-2AjaXc879YdIEZf2qMCl8/view?usp=sharing)
- [Aula 4](https://drive.google.com/file/d/1bzEqLW97nD_SDGK-SBO2uQaD2Gv7GxSN/view?usp=sharing)
- [Aula 5](https://drive.google.com/file/d/1jx3tDKvyx2_y126sT2BB38B_pGg1pB-f/view?usp=sharing)

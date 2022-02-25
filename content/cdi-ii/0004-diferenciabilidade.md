---
title: Diferenciabilidade em Rⁿ
description: Diferenciabilidade em dim > 1.
path: /cdi-ii/diferenciabilidade
type: content
---

# Diferenciabilidade em Rⁿ

```toc

```

## Diferenciabilidade em Rⁿ

Recordando a definição de diferenciabilidade em $\R$, tínhamos que $f$ é diferenciável em $a$
se existe $\displaystyle \lim_{h\to 0} \frac{f(a+h)-f(a)}{h}$.

No entanto, este limite envolve a divisão e a divisão não está definida em $dim > 1$.  
Deste modo, temos de reformular esta definição.

$$
\begin{darray}{l}
f'( a) =\lim _{h\rightarrow 0}\frac{f( a+h) -f( a)}{h} \Leftrightarrow\\
\Leftrightarrow 0=\lim _{h\rightarrow 0}\frac{f( a+h) -f( a)}{h} -f'( a) \Leftrightarrow \\
\Leftrightarrow 0=\lim _{h\rightarrow 0}\frac{f( a+h) -f( a) -f'( a) h}{h} \Leftrightarrow \\
\Leftrightarrow f( a+h) -f( a) -f'( a) h=o( h) ,\ \quad h\rightarrow 0
\end{darray}
$$

### "o" pequeno de h

Esta nova definição contém $o(h)$, uma nova função ao qual que chama "o pequeno de h".  
Isto é simplesmente uma função de $x$ que dividida por $x$ tende para $0$ quando $x \to 0$.

:::details[Exemplos]

Quando $x \to 0$:

1. $f(x) = 0$, $\frac{f(x)}{x}=\frac{0}{x}=0\to 0$

2. $f(x) = x^2$, $\frac{f(x)}{x}=\frac{x^2}{x}=x\to 0$

3. $f(x) = x\sin x$, $\frac{f(x)}{x}=\frac{x\sin x}{x}=\sin x \to 0$

4. $g(x) = x$, $\frac{g(x)}{x}=\frac{x}{x}=1 \not\to 0$ logo, esta não é $o(x)$

:::

### Diferenciabilidade como Transformação Linear

Se continuarmos a desenvolver a equação obtida acima, obtemos:

$$
f(a+h)-f(a)-f'(a)h=o(h)\Leftrightarrow \\
\Leftrightarrow f(a+h)-f(a)=f'(a)h+o(h)
$$

No contexto deste problema, $f$ e $a$ são constantes e $h$ é variável.

Então, temos a função $Df(a)\ (h)=f'(a)h$, que é uma transformação linear $Df(a): \R\to \R$.

Assim, chegamos à definição em $dim > 1$:

:::tip[DEFINIÇÃO]

Seja $f: D \subseteq \R^n \to \R^m$ é diferencial em $a\in D$ se existir uma transformação linear $Df(a): \R^n \to \R^m$
(chamada transformação linear derivada de $f$ em $a$), tal que

$$
f(a+h)-f(a)=Df(a)\ (h)+o(h), \quad \text{quando}\quad h \to 0
$$

Também podemos reescrever esta definição como

$$
\lim_{h\to \vec 0} \frac{f(a+h)-f(a)-Df(a)(h)}{||h||}=\vec 0
$$

:::

Relembrando da Álgebra Linear:

1. Uma transformação linear $T:\R^n \to \R^m$ é univocamente representada
   por uma matriz ($m\times n$) uma vez que se fixem bases em $\R^n$ e $\R^m$.

2. Quais são as bases preferidas?

   - A base canónica $\overrightarrow{e_{1}} =\begin{pmatrix}1\\0\\\vdots \\0\end{pmatrix} ,\overrightarrow{e_{2}} =\begin{pmatrix}0\\1\\\vdots \\0\end{pmatrix} ,\overrightarrow{e_{n}} =\begin{pmatrix}0\\0\\\vdots \\1\end{pmatrix}$
   - Alguma base que torne a matriz diagonal (ou "quase" diagonal)

   Por defeito, usamos a base canónica.

3. $T:\R \to \R$ é representada pela matriz $[c]$ onde $c$ é constante.

:::details[Exemplos de funções diferenciáveis]

1. **Função constante**

   $$
   \begin{array}{ c c }
   f: & \mathbb{R}^{n}\rightarrow \mathbb{R}^{m}\\
   & x\longrightarrow \begin{pmatrix}
   2\\
   2\\
   \vdots \\
   2
   \end{pmatrix}
   \end{array}
   $$

   Seja $a \in \R^n$ $a=\begin{pmatrix}a_{1}\\a_{2}\\\vdots \\a_{n}\end{pmatrix}$, $\vec h \in \R^n$ $\vec h=\begin{pmatrix}h_{1}\\h_{2}\\\vdots \\h_{n}\end{pmatrix}$

   $$
   f(a+h)-f(a)=\begin{pmatrix}
   2\\
   2\\
   \vdots \\
   2
   \end{pmatrix} -\begin{pmatrix}
   2\\
   2\\
   \vdots \\
   2
   \end{pmatrix} =\begin{pmatrix}
   2-2\\
   2-2\\
   \vdots \\
   2-2
   \end{pmatrix} =\begin{pmatrix}
   0\\
   0\\
   \vdots \\
   0
   \end{pmatrix} =\\
   =\underbrace{\overbrace{\begin{bmatrix}
   0 & 0 & \dotsc  & 0\\
   0 & 0 & \dotsc  & 0\\
   \vdots  & \vdots  & \ddots  & \vdots \\
   0 & 0 & \dotsc  & 0
   \end{bmatrix}}^{\text{matriz } m\times n}\begin{pmatrix}
   h_{1}\\
   h_{2}\\
   \vdots \\
   h_{n}
   \end{pmatrix}}_{L_{a}( h)} +\underbrace{\begin{pmatrix}
   0\\
   0\\
   \vdots \\
   0
   \end{pmatrix}}_{o( h)}
   $$

   Portanto como $a \in \R^n$ é genérico, então $f$ é diferenciável e a derivada em $a$ é $Df(a) = \vec 0$

2. **Função identidade**

   $$
   \begin{array}{ c c }
   f: & \mathbb{R}^{n}\rightarrow \mathbb{R}^{m}\\
   & x\longrightarrow x
   \end{array}
   $$

   Seja $a \in \R^n$, $\vec h \in \R^n$,

   $$
   f(a+h)-f(a)=a+h-a=h=\begin{pmatrix}
   h_{1}\\
   h_{2}\\
   \vdots \\
   h_{n}
   \end{pmatrix} =\\
   =\underbrace{\overbrace{\begin{bmatrix}
   1 & 0 & \dotsc  & 0\\
   0 & 1 & \dotsc  & 0\\
   \vdots  & \vdots  & \ddots  & \vdots \\
   0 & 0 & \dotsc  & 1
   \end{bmatrix}}^{\text{matriz } m\times n}\begin{pmatrix}
   h_{1}\\
   h_{2}\\
   \vdots \\
   h_{n}
   \end{pmatrix}}_{L_{a}( h)} +\underbrace{\begin{pmatrix}
   0\\
   0\\
   \vdots \\
   0
   \end{pmatrix}}_{o( h)}
   $$

   Portanto $f$ é diferenciável em $\R^n$ e a derivada em qualquer $a \in \R^n$ é a identidade.

3. **Função projeção**

   $$
   \begin{array}{ c c }
   p_{i} : & \mathbb{R}^{n} \longrightarrow \mathbb{R}\\
   & x=\begin{pmatrix}
   x_{1}\\
   x_{2}\\
   \vdots \\
   x_{n}
   \end{pmatrix} \longrightarrow x_{i}
   \end{array}
   $$

   Seja $a \in \R^n, h\in \R^n$,

$$
p_{i} (a+h)-p_{i} (a)=a_{i} +h_{i} -a_{i} =h_{i}\\
=\underbrace{\overbrace{\begin{bmatrix}
0 & \dotsc  & 1 & \dotsc  & 0
\end{bmatrix}}^{\text{matriz } 1\times n}\begin{pmatrix}
h_{1}\\
h_{2}\\
\vdots \\
h_{i}\\
\vdots \\
h_{n}
\end{pmatrix}}_{L_{a}( h)} +\underbrace{\begin{pmatrix}
0\\
0\\
\vdots \\
0\\
\vdots \\
0
\end{pmatrix}}_{o( h)}
$$

Portanto as funções projeção são diferenciáveis

:::

## Derivadas Parciais

No entanto, por vezes poderá ser importante calcular derivadas segundo direções especiais - ou saber quais são essas direções especiais.
Por exemplo, dada uma função $f$ e um ponto $a$ do seu domínio, ao longo de que direção e sentido me devo afastar de $a$ de forma a sentir a variação máxima ou mínima da função?

:::tip[DEFINIÇÃO]

A derivada de $f: \R^n \to \R$ no ponto $a \in \R^n$ segundo o vetor $v \in\R^n$ é o limite, se existir,

$$
\frac{\partial f}{\partial v}(a)= \lim_{t\to 0} \frac{f(a+tv)-f(a)}{t}
$$

:::

Observações:

1. Convém, por vezes, que $||v|| = 1$

2. Se $v=\overrightarrow{e_{i}} =\begin{pmatrix}0\\\vdots \\1\\\vdots \\0\end{pmatrix}$
   então $\displaystyle \frac{\partial f}{\partial v}( a) =\frac{\partial f}{\partial x_{i}}( a)$,
   a que se chama **derivada parcial em ordem a $x_i$ em $a$**.

:::details[Exemplos]

$$
f( x,y) =x^{2} y\quad ,\quad v=( 1,2)
$$

Qual o valor de $\frac{\partial f}{\partial v}( 1,1)$?

$$
\begin{aligned}
\frac{\partial f}{\partial v}( 1,1) & =\lim _{t\rightarrow 0}\frac{f(( 1,1) +t( 1,2)) -f( 1,1)}{t}\\
 & =\lim _{t\rightarrow 0}\frac{f( 1+t,1+2t) -1^{2} \cdot 1}{t}\\
 & =\lim _{t\rightarrow 0}\frac{( 1+t)^{2}( 1+2t) -1}{t}\\
 & =\lim _{t\rightarrow 0}\frac{1+2t+2t+4t^{2} +t^{2} +2t^{3} -1}{t}\\
 & =\lim _{t\rightarrow 0} t\frac{4+5t+2t^{2}}{t}\\
 & =\lim _{t\rightarrow 0}\left( 4+5t+2t^{2}\right)\\
 & =4+0+0\\
 & =4
\end{aligned}
$$

:::

## Propriedades de uma função diferenciável

Se $f$ é diferenciável em $a$, isto é, se existe transformação linear $Df(a): \R^n\to \R^m$ tal que $f(a+h)-f(a)=Df(a)\ (h)+o(h)$, então:

- $f$ é contínua em $a$
- Para todo o $v \in \R^n\backslash \{\vec 0 \}$ existe $\displaystyle \frac{\partial f}{\partial v}( a) = Df(a)\ (v)$
  (transformação linear derivada de $f$ em $a$ calculada em $v$).

Sejam $f, g: D \subseteq \R^n \to \R^m$, $\lambda \in \R, a \in D, h \in \R^n$,
em que $f$ e $g$ são diferenciáveis em $a$.

Então,

- $f+g$ é diferenciável em $a$
- $\lambda f$ é diferenciável em $a$
- $fg$ é diferenciável em $a$, sendo $D( fg)( a) =g( a) Df( a) +f( a) Df( a)$
- $\frac fg$ é diferenciável em $a$ se $g(a)\ne 0$, sendo $D\left(\frac{f}{g}\right)( a) =\frac{g( a) Df( a) -f( a) Dg( a)}{g( a)^{2}}$

Seja $f: D \subset \R^n \to \R^m$ e $D$ conjunto aberto

- Se $f$ é $C^1$ em $D$ então $f$ é diferenciável em $D$.

## Matriz Jacobiana

Se a função $f$ é diferenciável em $a$ então a transformação linear derivada é única.  
Fixadas as bases canónicas, a matriz que a transformação linear representa é chamada **jacobiana** e tem por entradas as derivadas parciais em $a$.

Temos então a **matriz jacobiana de $f$ em $a$**:

$$
J^{f}_{a} =\begin{bmatrix}
\frac{\partial f_{1}}{\partial x_{1}}( a) & \frac{\partial f_{1}}{\partial x_{2}}( a) & \dotsc  & \frac{\partial f_{1}}{\partial x_{n}}( a)\\
\frac{\partial f_{2}}{\partial x_{1}}( a) & \frac{\partial f_{2}}{\partial x_{2}}( a) & \dotsc  & \frac{\partial f_{2}}{\partial x_{n}}( a)\\
\vdots  & \vdots  & \ddots  & \vdots \\
\frac{\partial f_{m}}{\partial x_{1}}( a) & \frac{\partial f_{m}}{\partial x_{2}}( a) & \dotsc  & \frac{\partial f_{m}}{\partial x_{n}}( a)
\end{bmatrix}
$$

:::details[Exemplos de matrizes jacobianas]

$$
f:\R \to \R\quad, \quad f(x)=xe^x
$$

$$
\frac{df}{dx}=1e^x+x\cdot e^x=(1+x)e^x
$$

$$
J^f_x=\begin{bmatrix}(1+x) e^x\end{bmatrix}
$$

---

$$
f: \R^2\to \R\quad,\quad f(x,y)=x^2y
$$

$$
\frac{\partial f}{\partial x}(x,y)=2xy\\
\frac{\partial f}{\partial y}(x,y)=x^2\cdot 1 = x^2
$$

$$
J^f_{(x,y)}=\begin{bmatrix}2xy& x^2\end{bmatrix}
$$

---

$$
f: \R\to \R^2\quad,\quad f(x)=(\cos x, \sin x)
$$

$$
J^f_x=\begin{bmatrix} -\sin x \\ \cos x \end{bmatrix}
$$

---

$$
f: \R^2\to \R^2\quad,\quad f(x,y)=(\overbrace{x^2-y^2}^{f1}, \overbrace{x^2+y^2}^{f2})
$$

$$
J^f_{(x,y)}=\begin{bmatrix}2x & -2y\\ 2x & 2y\end{bmatrix}
$$

:::

:::warning
Pode existir a jacobiana de uma função $f$ em $a$ sem que $f$ seja diferenciável em $a$.
:::

### Gradiente de uma função

Seja $f: D \subseteq \R^n \to \R$ isto é, seja $f$ uma função escalar.
Se $f$ é diferenciável em $a$ então a matriz jacobiana de $f$ em $a$ é uma matriz linha que se chama **gradiente de $f$ em $a$**.

$$
\nabla f( a) =\left(\frac{\partial f}{\partial x_{1}}( a) ,\frac{\partial f}{\partial x_{2}}( a) ,\dotsc ,\frac{\partial f}{\partial x_{n}}( a)\right)
$$

:::details[Exemplos de diferenciabilidade]

Seja $f: \R^2 \to \R$ com $f(x,y) = x^2y$

1. **Mostre que $f$ é diferenciável em $(1,1)$**

$f$ é diferenciável em $(1,1)$ se por definição:

$$
\lim_{(h,k)\to (0,0)}\frac{f((1,1)+(h,k))-f(1,1)-Df(1,1)(h,k)}{||(h,k)||}=0
$$

$$
J^{f}_{(1,1)} =\begin{pmatrix}
\frac{\partial f}{\partial x}( 1,1) & \frac{\partial f}{\partial y}( 1,1)
\end{pmatrix} =\begin{pmatrix}
2xy\Bigl|_{( 1,1)} & x^{2}\Bigl|_{( 1,1)}
\end{pmatrix} =\begin{pmatrix}
2 & 1
\end{pmatrix}
$$

$$
\begin{darray}{ l }
\lim\limits _{( h,k)\rightarrow ( 0,0)}\frac{f( 1+h,1+k) -f( 1,1) -\begin{pmatrix}
2 & 1
\end{pmatrix}\begin{pmatrix}
h\\
k
\end{pmatrix}}{\sqrt{h^{2} +k^{2}}} =\\
=\lim\limits _{( h,k)\rightarrow ( 0,0)}\frac{( 1+h)^{2}( 1+k) -1^{2} \cdot 1-( 2h+k)}{\sqrt{h^{2} +k^{2}}}\\
=\lim\limits _{( h,k)\rightarrow ( 0,0)}\frac{1+2h+h^{2} +k+2kh+kh^{2} -1-2h-k}{\sqrt{h^{2} +k^{2}}}\\
=\lim\limits _{( h,k)\rightarrow ( 0,0)}\frac{h^{2} +2kh+kh^{2}}{\sqrt{h^{2} +k^{2}}}\\
=\lim\limits _{( h,k)\rightarrow ( 0,0)} h\frac{h+2k+kh}{\ \sqrt{h^{2} +k^{2}}}\\
=\lim\limits _{( h,k)\rightarrow ( 0,0)}( h+2k+kh)\frac{h}{\sqrt{h^{2} +k^{2}}}\\
=0
\end{darray}
$$

$$
\text{c.a.}\\
\left| \frac{h}{\sqrt{h^{2} +k^{2}}}\right| =\frac{|h|}{\sqrt{h^{2} +k^{2}}} =\frac{\sqrt{h^{2}}}{\sqrt{h^{2} +k^{2}}} \leqslant \frac{\sqrt{h^{2} +k^{2}}}{\sqrt{h^{2} +k^{2}}} =1
$$

Logo, $f$ é diferenciável em $a$.

2. **Calcule $\frac{\partial f}{\partial v}(1,1)$ para $v=(1,2)$**

$$
\frac{\partial f}{\partial v}( 1,1) =J^{f}_{a}\begin{pmatrix}
1\\
2
\end{pmatrix} =\begin{pmatrix}
2 & 1
\end{pmatrix}\begin{pmatrix}
1\\
2
\end{pmatrix} =\begin{pmatrix}
2\cdot 1+1\cdot 2
\end{pmatrix} =\begin{pmatrix}
4
\end{pmatrix}
$$

---

Seja $f: \R^n \to \R^m$, $f(x)=Ax$, uma transformação linear com $A$ a matriz que a representa, fixadas as bases canónicas.

Seja $a\in\R^n, h \in \R^n$,

$$
f(a+h)-f(a)=A(a+h)-Aa=Aa+Ah-Aa=Ah+\vec 0
$$

$Ah$ é a transformação linear calculada em $h$  
$\vec 0$ é o $o(h), h\to \vec 0$

Portanto $f$ é diferenciável em qualquer $a\in\R^n$ e $Df(a)=A$ ($A$ é uma matriz)

---

Sendo, $f:\R^3 \to \R\quad, \quad f(x,y,z)=xyz\quad,\quad v=(-1,0,1)$

Calcular $\frac{\partial f}{\partial v}(2,1,1)$:

1. **Pela definição**

$$
\begin{aligned}
\frac{\partial f}{\partial v}(2,1,1) &= \lim_{t\to 0}\frac{f((2,1,1)+tv)-f(2,1,1)}{t}\\
&= \lim_{t\to 0}\frac{f((2,1,1)+t(-1,0,1))-f(2,1,1)}{t}\\
&= \lim_{t\to 0}\frac{f(2-t,1,1+t)-f(2,1,1)}{t}=\\
&=\lim_{t \to 0}\frac{(2-t)\cdot 1 \cdot (1+t) - 2\cdot 1 \cdot 1}{t}=\\
&= \lim_{t \to 0}\frac{2+2t-t-t^2-2}{t}=\\
&=\lim_{t \to 0}\frac{t(1-t)}{t}\\
&=\lim_{t\to 0}(1-t)\\
&=1
\end{aligned}
$$

ou seja $\frac{\partial f}{\partial v}(2,1,1) = 1$

2. **Através da Matriz Jacobiana**

$f(x,y,z) = xyz = p_1(x,y,z) \cdot p_2(x,y,z)\cdot p_3(x,y,z)$

Como $p_i$'s são diferenciáveis e produto de funções diferenciáveis é diferenciável,
então $f$ é diferenciável em qualquer ponto e existe a transformação linear derivada em qualquer ponto do domínio de $f$.

$$
\begin{aligned}
J^{f}_{(2,1,1)} & =\begin{bmatrix}
\frac{\partial f}{\partial x} (2,1,1) & \frac{\partial f}{\partial y} (2,1,1) & \frac{\partial f}{\partial z} (2,1,1)
\end{bmatrix}\\
 & =\begin{bmatrix}
\frac{\mathrm{d} (xyz)}{\ \mathrm{d} x}\Bigl|_{(2,1,1)} & \frac{\mathrm{d} (xyz)}{\mathrm{d} y}\Bigl|_{(2,1,1)} & \frac{\mathrm{d} (xyz)}{\mathrm{d} z}\Bigl|_{(2,1,1)}
\end{bmatrix}\\
 & =\begin{bmatrix}
yz\frac{\mathrm{d} x}{\mathrm{d} x}\Bigl|_{(2,1,1)} & xz\frac{\mathrm{d} y}{\mathrm{d} y}\Bigl|_{(2,1,1)} & xy\frac{\mathrm{d} z}{\mathrm{d} z}\Bigl|_{(2,1,1)}
\end{bmatrix}\\
 & =\begin{bmatrix}
yz\cdot 1\Bigl|_{(2,1,1)} & xz\cdot 1\Bigl|_{(2,1,1)} & xy\cdot 1\Bigl|_{(2,1,1)}
\end{bmatrix}\\
 & =\begin{bmatrix}
1 & 2 & 2
\end{bmatrix}
\end{aligned}
$$

Como $f$ é diferenciável, em particular em (2,1,1) tem-se

$$
\frac{\partial t}{\partial v}( 2,1,1) =J^{f}_{( 2,1,1)} v=\begin{bmatrix}
1 & 2 & 2
\end{bmatrix}\begin{bmatrix}
-1\\
0\\
1
\end{bmatrix} =\\
=1\cdot ( -1) +2\cdot 0+1\cdot 2=-1+2=1
$$

---

$$
f( x,y) =\begin{cases}
\frac{x^{2} y}{x^{2} +y^{2}} \  & \text{se } (x,y) \neq 0\\
0 & \text{se }( x,y) =0
\end{cases}
$$

1. **Será que f é diferenciável em $(0,0)$?**

Para $f$ ser diferenciável em $(0,0)$, o seguinte tem de ser verdade.

$$
\frac{f((a_1, a_2) + (h_1,h_2))-f(a_1,a_2)-Df(a_1,a_2)(h_1,h_2)}{||(h_1,h_2)||} \underset{(h_1,h_2)\to (0,0)}{\longrightarrow} 0
$$

**_Se_** existir $Df(0,0)$ a jacobiana é $J^{f}_{(0,0)} =\begin{bmatrix}\frac{\partial f}{\partial x} (0,0) & \frac{\partial f}{\partial y} (0,0)\end{bmatrix}$

$$
\begin{aligned}
\frac{\partial f}{\partial x}( 0,0) & =\frac{\partial f}{\partial \overrightarrow{e_{1}}}( 0,0)\\
 & =\lim _{t\rightarrow 0}\frac{f(( 0,0) +t( 1,0)) -f( 0,0)}{t}\\
 & =\lim _{t\rightarrow 0}\frac{f( t,0) -0}{t}\\
 & =\lim _{t\rightarrow 0}\frac{\frac{t^{2} \cdot 0}{t^{2} +0^{2}}}{t}\\
 & =\lim _{t\rightarrow 0}\frac{0}{t^{3}}\\
 & =0
\end{aligned}
$$

$$
\begin{aligned}
\frac{\partial f}{\partial y}( 0,0) & =\frac{\partial f}{\partial \overrightarrow{e_{2}}}( 0,0)\\
 & =\lim _{t\rightarrow 0}\frac{f(( 0,0) +t( 0,1)) -f( 0,0)}{t}\\
 & =\lim _{t\rightarrow 0}\frac{f( 0,t) -0}{t}\\
 & =\lim _{t\rightarrow 0}\frac{\frac{0\cdot t}{0^{2} +t^{2}}}{t}\\
 & =\lim _{t\rightarrow 0}\frac{0}{t^{2}}\\
 & =0
\end{aligned}
$$

Portanto **_se_** $f$ for diferenciável em $(0,0)$ a $Df(0,0)$ é representada pela jacobiana $J^{f}_{(0,0)} =\begin{bmatrix}0 & 0\end{bmatrix}$

$$
\begin{array}{ c }
\frac{f(( 0,0) +( h_{1} ,h_{2})) -f( 0,0) -Df( 0,0)( h_{1} ,h_{2})}{||( h_{1} ,h_{2}) ||} =\\
=\frac{f( h_{1} ,h_{2}) -0-\begin{pmatrix}
0 & 0
\end{pmatrix}\begin{pmatrix}
h_{1}\\
h_{2}
\end{pmatrix}}{\sqrt{h^{2}_{1} +h^{2}_{2}}} =\\
=\frac{\frac{h^{2}_{1} \cdot h_{2}}{h^{2}_{1} +h^{2}_{2}} -0h_{1} -0h_{2}}{\sqrt{h^{2}_{1} +h^{2}_{2}}} =\\
=\frac{h^{2}_{1} \cdot h_{2}}{\left( h^{2}_{1} +h^{2}_{2}\right)^{\frac{3}{2}}}
\end{array}
$$

Não conseguimos determinar o limite, mas podemos tentar provar que não existe através dos limites direcionais $h_2=mh_1$.

$$
\begin{aligned}
\lim _{( h_{1} ,h_{2})\rightarrow ( 0,0)}\frac{h^{2}_{1} \cdot h_{2}}{\left( h^{2}_{1} +h^{2}_{2}\right)^{\frac{3}{2}}} & =\lim _{h_{1}\rightarrow 0}\frac{h^{2}_{1} \cdot mh_{1}}{\left( h^{2}_{1} +( mh_{1})^{2}\right)^{\frac{3}{2}}}\\
 & =\lim _{h_{1}\rightarrow 0}\frac{mh^{3}_{1}}{h^{3}_{1}\left( 1+m^{2}\right)^{\frac{3}{2}}}\\
 & =\lim _{h_{1}\rightarrow 0}\frac{m}{( 1+m)^{\frac{3}{2}}}\\
 & =\frac{m}{( 1+m)^{\frac{3}{2}}}
\end{aligned}
$$

Logo, como o limite depende de $m$, este não existe.

Como tal, a função **não é diferenciável em $(0,0)$**.
No entanto, existem as derivadas parciais de $f$ em $(0,0)$.

2. **Qual o valor de $\frac{\partial f}{\partial v}(0,0)\quad, \quad v=(1,1)$?**

Como a função não é diferenciável em $(0,0)$, não se pode usar $\frac{\partial f}{\partial v}(0,0) = Df(0,0) v$.  
Tem-se então, de efetuar o cálculo pelo limite.

$$
\begin{aligned}
\frac{\partial f}{\partial v}(0,0) &= \lim_{t\to 0}\frac{f((0,0) + t(1,1))- f(0,0)}{t}\\
& =\lim_{t\to 0}\frac{f(t,t)-0}{t}\\
& =\lim_{t\to 0} \frac{\frac{t^2\cdot t}{t^2+t^2}}{t}\\
& =\lim_{t\to 0} \frac{t^3}{t(2t^2)}\\
& =\lim_{t\to 0} \frac{t^3}{2t^3}\\
& =\lim_{t \to 0} \frac{1}{2} \\
& = \frac{1}{2}
\end{aligned}
$$

---

$$
f: \R^2\to \R \quad,\quad f(x,y,) = ||(x,y)|| = \sqrt{x^2+y^2}
$$

Pretende-se mostrar que $f$ não é diferenciável na origem ($(0,0)$),
ou seja, mostrar que o seguinte limite não existe ou que é diferente de zero.

$$
\lim_{(h_1,h_2)\to(0,0)} \frac{f((0,0) + (h_1,h_2)) - f(0,0) - Df(0,0) (h_1,h_2)}{||(h_1,h_2)||}
$$

Se $Df(0,0)$ existisse:

$$
\begin{aligned}
\frac{\partial f}{\partial x}(0,0) &= \lim_{t\to 0} \frac{f((0,0) + t(1,0)) - f(0,0)}{t} = \\
&=\lim_{t \to 0}\frac{f(t,0)-0}{t}=\\
&=\lim_{t\to 0}\frac{\sqrt{t^2+0^2}}{t}=\\
&=\lim_{t\to 0}\frac{|t|}{t} \text{(não existe)}
\end{aligned}
$$

Como não existe $\frac{\partial f}{\partial x}(0,0)$, então $f$ não é diferenciável em $(0,0)$.

:::

---

Slides:

- [Aula 6](https://drive.google.com/file/d/1wQJ7RUwADAvpc1W_DWhOCAXxgRZqiSme/view)
- [Aula 7](https://drive.google.com/file/d/1FE5ni0SEoLTI-qxB6qQ0wkO9OTKyYwQ_/view)
- [Aula 8](https://drive.google.com/file/d/1pfCHr7xdP4PH0VGYYZqWEX1sgJ9zT5dy/view)

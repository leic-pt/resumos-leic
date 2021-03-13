---
description: Diferenciabilidade em dim > 1.
---

# Diferenciabilidade em Rⁿ

[[toc]]

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

::: details Exemplos

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

::: tip DEFINIÇÃO

Seja $f: D \subseteq \R^n \to \R^m$ é diferencial em $a\in D$ se existir uma transformação linear $Df(a): \R^n \to \R^n$
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
   por uma matriz (m\times n) uma vez que se fixem bases em $\R^n$ e $\R^m$.

2. Quais são as bases preferidas?

   - A base canónica $\overrightarrow{e_{1}} =\begin{pmatrix}1\\0\\\vdots \\0\end{pmatrix} ,\overrightarrow{e_{2}} =\begin{pmatrix}0\\1\\\vdots \\0\end{pmatrix} ,\overrightarrow{e_{n}} =\begin{pmatrix}0\\0\\\vdots \\1\end{pmatrix}$
   - Alguma base que torne a matriz diagonal (ou "quase" diagonal)

   Por defeito, usamos a base canónica.

3. $T:\R \to \R$ é representada pela matriz $[c]$ onde $c$ é constante.

::: details Exemplos de funções diferenciáveis

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

::: tip DEFINIÇÃO

A derivada de $f: \R^n \to \R$ no ponto $a \in \R^n$ segundo o vetor $v \in\R^n$ é o limite, se existir,

$$
\frac{\partial f}{\partial v}(a)= \lim_{t\to 0} \frac{f(a+tv)-f(a)}{t}
$$

:::

Observações:

1. Convém, por vezes, que $||v|| = 1$

2. Se $v=\overrightarrow{e_{i}} =\begin{pmatrix}0\\\vdots \\1\\\vdots \\0\end{pmatrix}$
   então $\displaystyle \frac{\partial f}{\partial v}( a) =\frac{\partial f}{\partial x_{i}}( a)$,
   a que se chama **derivada parcial em ordem a $x_1$ em $a$**.

::: details Exemplos

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

::: details Exemplos de matrizes jacobianas

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

### Gradiente de uma função

Seja $f: D \subseteq \R^n \to \R$ isto é, seja $f$ uma função escalar.
Se $f$ é diferenciável em $a$ então a matriz jacobiana de $f$ em $a$ é uma matriz linha que se chama **gradiente de $f$ em $a$**.

$$
\nabla f( a) =\left(\frac{\partial f}{\partial x_{1}}( a) ,\frac{\partial f}{\partial x_{2}}( a) ,\dotsc ,\frac{\partial f}{\partial x_{n}}( a)\right)
$$

::: details Exemplos de diferenciabilidade

Seja $f: \R^2 \to \R$ com $f(x,y) = x^2y$

1. **Mostre que $f$ é diferenciável em $(1,1)$**

$f$ é diferenciável em $(1,1)$ se por definição:

$$
\lim_{(h,k)\to (0,0)}\frac{f((1,1)+(h,k))-f(1,1)-Df(1,1)(h,k)}{||(h,k)||}=0
$$

$$
J^{f}_{(1,1)} =\begin{pmatrix}
\frac{\partial f}{\partial x}( 1,1) & \frac{\partial f}{\partial x}( 1,1)
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
\left| \frac{h}{\sqrt{h^{2} +k^{2}}}\right| =\frac{|h|}{\sqrt{h^{2} +k^{2}}} =\frac{\sqrt{h^{2}}}{\sqrt{h^{2} +k^{2}}} \leqslant \frac{\sqrt{h^{2} +k^{2}}}{h^{2} +k^{2}} =1
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

:::

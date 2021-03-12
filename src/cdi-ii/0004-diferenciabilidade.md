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

Tenão, temos a função $L_a(h)=f'(a)h$, que é uma transformação linear $L_a: \R\to \R$.

Então, chegamos à definição em $dim > 1$:

::: tip DEFINIÇÃO

Seja $f: D \subseteq \R^n \to \R^m$ é diferencial em $a\in D$ se existir uma transformação linear $L_a: \R^n \to \R^n$
(chamada transformação linear derivada de $f$ em $a$), tal que

$$
f(a+h)-f(a)=L_a(h)+o(h), \quad \text{quando}\quad h \to 0
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

   $f:\R^n \to \R^m$, $x\to (2,2,\dots, 2)$;
   seja $a \in \R^n$ $a = (a_1, a_2,\dots, a_n)$, $\vec h \in \R^n$ $\vec h=(h_1,h_2,\dots, h_n)$

\$f(a+h) - f(a) = (2,2,\dots, 2) - (2,2,\dots, 2) = (2-2,2-2,\dots,2-2) = (0,0,\dots,0)= ...

Portanto como $a \in \R^n$ é genérico, então $f$ é diferenciável e a derivada em $a$ é $L_a = \tilde? \tilde? 0$

2. Função identidade $f: \R^n\to \R^n$ $x \to x$
   Seja $a \in \R^n$, $\vec h \in \R^n$

\$f(a+h)-f(a) = a+h-a=h=(h_1,h_2,\dots,h_n)=...

Portanto $f$ é diferenciável em $\R^n$; a derivada em qualquer $a \in \R^n$ é a identidade.

3. Função projeção $p_1: \R^n\to \R $ $x=(x_1,x_2,\dots, x_n)\to x_i$
   seja $a \in \R^n, h\in \R^n$

p_i(a+h)-p_i(a)=a_i+h_1-a_i=h_1=(0, \dots, 0, 1, 0, \dots, 0)(h_1,h_2,\dots,h_i,\dots,h_n)+(0,0,\dots,0)

Portanto as funções projeção são diferenciáveis

:::

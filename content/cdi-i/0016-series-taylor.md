---
title: Séries de Taylor
description: >-
  Série de Taylor de uma função analítica.
  Condição necessária e suficiente de analiticidade de uma função.
  Condição suficiente de analiticidade de uma função.
  Propriedades operatórias das funções analíticas.
  Aplicações da Série de Taylor.
  Cálculo de Integrais de Funções utilizando Séries.
  Resolução de Equações Funcionais utilizando Séries.
path: /cdi-i/series-taylor
type: content
---

# Série de Taylor de uma Função Analítica

```toc

```

Seja $f$ uma função analítica em $x_0\in\R$.

Então, $f$ pode ser escrita de um modo único sob a forma de uma série de potências de $x-x_0$ através da série

$$
f( x) =\sum ^{\infty }_{n=0}\frac{f^{( n)}( x_{0})}{n!}( x-x_{0})^{n}
$$

nalguma vizinhança de $x_0$. A esta série chama-se série de Taylor de $f$ com respeito ao ponto $x_0$.

Os coeficientes da série de potências são idênticos aos coeficientes do [polinómio de Taylor](/cdi-i/formula-taylor#polinómio-de-taylor).

⚠️ Nem todas as funções de classe $C^\infin$ numa vizinhança de um ponto $x_0\in\R$ são analíticas em $x_0$.

👉 Tal como no polinómio de Taylor, costuma-se chamar a esta série, "Série de MacLaurin" quando $x_0=0$.

## Condição necessária e suficiente de analiticidade de uma função

Seja $f$ uma função de classe $C^\infin$ numa vizinhança de um ponto $x_0\in\R$.

Então, $f$ é analítica em $x_0$ se e só se o [resto](/cdi-i/formula-taylor#teorema/fórmula-de-taylor) de ordem $n$ da fórmula de Taylor, $R_n$, converge pontualmente para $0$ nalguma vizinhança de $x_0$, ou seja, se para qualquer $x\in V_r(x_0)$,

$$
\lim_{n\to+\infin}R_n(x)=0
$$

para algum $r\in\R^+$.

Como esta condição é, por vezes, difícil de se verificar, usa-se frequentemente a condição abaixo, embora apenas seja suficiente e não necessária.

## Condição suficiente de analiticidade de uma função

Seja $f$ uma função de classe $C^\infin$ numa vizinhança de $x_0\in\R$, $V_R(x_0)$, $R\in\R^+$.

Então, se existem constantes $A,B \in\R^+$ tais que

$$
|f^{(n)}(x)|\le A\cdot B^n
$$

para quaisquer $x\in V_r(x_0)$, $0<r\le R$, e $n\in\N_0$, $f$ é analítica em $x_0$.

# Propriedades operatórias das funções analíticas

Sejam $f$ e $g$ duas funções analíticas em $x_0\in\R$ e $n\in \N^+$. Então:

- $f\pm g$ e $f\cdot g$ são analíticas em $x_0$;
- Se $g(x_0)\ne 0$ então $\frac fg$ é analítica em $x_0$;
- $f^n$ é analítica em $x_0$;
- Se $f(x_0)>0$ então $\sqrt[n]f$ é analítica em $x_0$;
- Se $f(x_0)\ne 0$ então $|f|$ é analítica em $x_0$.
- Se $f$ é analítica em $x_0$ e $g$ é analítica em $f(x_0)$, então $g\circ f$ é analítica em $x_0$.

:::details[Determinação e aplicação das séries de Taylor]

Considere a função

$$
f( x) =\sin x
$$

Sabendo que,

$$
f^{( n)}( x) =\sin\left(\frac{n\pi }{2} +\smartcolor{orange}{x}\right)\\f^{( n)}\left(\frac{\pi }{4}\right) =\sin\left(\frac{2n\pi }{4} +\smartcolor{orange}{\frac{\pi }{4}}\right) =\sin\left(\frac{\pi +2n\pi }{4}\right)
$$

Podemos facilmente obter a série de Taylor.

$$
f( x) =\sum ^{\infty }_{n=0}\frac{\smartcolor{blue}{\sin\left(\frac{\pi +2n\pi }{4}\right)}}{n!}\left( x-\frac{\pi }{4}\right)^{n}
$$

No entanto, isto não torna muito óbvio quais são os coeficientes numéricos da série de potências. Pode-se reescrever $f^{(n)}\left(\frac{\pi}{4}\right)$ da seguinte forma (não é imediato como):

$$
\sin\left(\frac{\pi +2n\pi }{4}\right) =\frac{\sqrt{2}}{2}\left[\sin\left(\frac{n\pi }{2}\right) +\cos\left(\frac{n\pi }{2}\right)\right]
$$

Como $\sin\left(\frac{n\pi }{2}\right) +\cos\left(\frac{n\pi }{2}\right)$ é sempre $1$ ou $-1$, sabemos que $|a_n|=\frac{\sqrt 2}{2n!}$.

---

Outra forma de resolver o exemplo anterior é através das propriedades das séries de potências e de desenvolvimentos conhecidos.

$$
\begin{aligned}
\sin x & =\sin\left[\smartcolor{orange}{\frac{\pi }{4}} +\smartcolor{blue}{\left( x-\frac{\pi }{4}\right)}\right]\\
 & =\smartcolor{orange}{\sin\left(\frac{\pi }{4}\right)}\smartcolor{blue}{\cos\left( x-\frac{\pi }{4}\right)} +\smartcolor{orange}{\cos\left(\frac{\pi }{4}\right)}\smartcolor{blue}{\sin\left( x-\frac{\pi }{4}\right)}\\
 & =\smartcolor{orange}{\frac{\sqrt{2}}{2}}\smartcolor{blue}{\cos\left( x-\frac{\pi }{4}\right)} +\smartcolor{orange}{\frac{\sqrt{2}}{2}}\smartcolor{blue}{\sin\left( x-\frac{\pi }{4}\right)}
\end{aligned}
$$

Pelos [desenvolvimentos conhecidos do seno e do cosseno](/cdi-i/series-funcionais#funções-inteiras):

$$
\sin x=\frac{\sqrt{2}}{2}\smartcolor{orange}{\sum ^{\infty }_{n=0}\frac{( -1)^{n}}{( 2n) !}\left( x-\frac{\pi }{4}\right)^{2n}} +\frac{\sqrt{2}}{2}\smartcolor{orange}{\sum ^{\infty }_{n=0}\frac{( -1)^{n}}{( 2n+1) !}\left( x-\frac{\pi }{4}\right)^{2n+1}}
$$

Como a soma de duas funções inteiras é uma função inteira:

$$
\sin x=\sum ^{\infty }_{n=0} a_{n}\left( x-\frac{\pi }{4}\right)^{n} \quad \text{com} \quad a_{n} =\begin{cases}\frac{\sqrt{2}( -1)^{k}}{2n!} & \text{se } n=2k\\\frac{\sqrt{2}( -1)^{k}}{2n!} & \text{se } n=2k+1\end{cases}
$$

Então:

$$
f^{( n)}\left(\frac{\pi }{4}\right) =\begin{cases}\frac{\sqrt{2}( -1)^{k}}{2} & \text{se } n=2k\\\frac{\sqrt{2}( -1)^{k}}{2} & \text{se } n=2k+1\end{cases}
$$

Embora não pareça, as expressões em ambos os ramos são diferentes. Basta pensar que $k=\frac n2$ ou $k=\frac{n-1}2$ respetivamente.

---

Considere-se a função

$$
f:\ \mathbb{R} \backslash \{1\}\rightarrow \mathbb{R} \quad ,\quad f( x) =\frac{1}{1-x}
$$

Relembrando a [fórmula da soma de uma série geométrica](/cdi-i/series-numericas#série-geométrica), com $r=x$, obtemos a série de MacLaurin de $f$:

$$
f( x) =\frac{1\times x^{0}}{1-x} =\sum ^{\infty }_{n=0} x^{n} \quad ,\quad |x|< 1
$$

Se quisermos obter $f^{(n)}(0)$, basta reescrever a série de MacLaurin para ficar mais evidente este termo:

$$
\sum ^{\infty }_{n=0} x^{n} =\sum ^{\infty }_{n=0}\frac{\smartcolor{orange}{n!}}{n!} x^{n}\\
\\
f^{( n)}( 0) =n!
$$

Para obter a série de Taylor de $f$ relativa ao ponto 2, fazemos o seguinte:

$$
f( x) =\frac{1}{1-x} =\frac{1}{1-2-( x-2)} =\frac{1}{-1-( x-2)} =\frac{-1}{1-\smartcolor{orange}{[ -( x-2)]}}
$$

Usando, novamente, a fórmula da soma de uma série geométrica, desta vez com ${r=-(x-2)}$, obtermos:

$$
f( x) =\frac{\smartcolor{pink}{-1}}{1-\smartcolor{orange}{[}\smartcolor{orange}{-}\smartcolor{orange}{(}\smartcolor{orange}{x-2}\smartcolor{orange}{)}\smartcolor{orange}{]}} =\smartcolor{pink}{-}\sum ^{\infty }_{n=0}[\smartcolor{orange}{-( x-2)}]^{n} \quad ,\quad |x-2|< 1
$$

Pode-se reescrever a série da seguinte forma, para obter $f^{(n)}(2)$:

$$
f( x) =\sum ^{\infty }_{n=0}\left[\smartcolor{pink}{( -1)}( -1)^{n}( x-2)^{n}\right] =\sum ^{\infty }_{n=0}\left[( -1)^{n\smartcolor{pink}{+1}}( x-2)^{n}\right] =\\
=\sum ^{\infty }_{n=0}\left[\frac{\smartcolor{blue}{( -1)^{n+1} n!}}{n!}( x-2)^{n}\right]\quad,\quad x\in V_1(2)
$$

$$
f^{( n)}( 2) =\smartcolor{blue}{(}\smartcolor{blue}{-1}\smartcolor{blue}{)}\smartcolor{blue}{^{n+1}}\smartcolor{blue}{n!}
$$

---

Considere-se a função

$$
f:\ \mathbb{R} \backslash \{-1\}\rightarrow \mathbb{R} \quad ,\quad f( x) =\frac{x}{1+x}
$$

Pode-se usar uma técnica muito semelhante para determinar a série de MacLaurin de $f$. Novamente, pela fórmula da soma de uma série geométrica:

$$
f( x) =\frac{x}{1+x} =\smartcolor{pink}{x} \cdot \frac{1}{1-(\smartcolor{orange}{-x})} =\smartcolor{pink}{x}\sum ^{\infty }_{n=0}(\smartcolor{orange}{-x})^{n} \quad ,\quad |-x|< 1
$$

$$
\begin{aligned}f( x) & =\smartcolor{pink}{x}\sum ^{\infty }_{n=0}(\smartcolor{orange}{-x})^{n}\\ & =\sum ^{\infty }_{n=0}\left[( -1)^{n} x^{n} \cdot \smartcolor{pink}{x}\right]\\ & =\sum ^{\infty }_{n=0}\left[( -1)^{n} x^{n\smartcolor{pink}{+1}}\right]\\ & =\sum ^{\infty }_{n=1}\left[( -1)^{n-1} x^{n}\right] \quad ,\quad x\in V_{1}( 0)\end{aligned}
$$

Pode-se assim determinar $f^{(n)}(0)$:

$$
f( x) =\sum ^{\infty }_{n=1}\left[\frac{\smartcolor{blue}{( -1)^{n-1} n!}}{n!} x^{n}\right] \quad ,\quad x\in V_{1}( 0)\\
f^{( n)}( 0) =\begin{cases}
\smartcolor{blue}{(}\smartcolor{blue}{-1}\smartcolor{blue}{)}\smartcolor{blue}{^{n-1}}\smartcolor{blue}{n!} & \text{se } n\geqslant 1\\
0 & \text{se } n=0
\end{cases}
$$

---

Considere-se a função

$$
f:\ \mathbb{R} \backslash \{1\}\rightarrow \mathbb{R} \quad ,\quad f( x) =\frac{x+1}{1-x}
$$

Novamente, pelo mesmo raciocínio, para determinar a série de MacLaurin:

$$
\begin{aligned}
f( x) & =\frac{\smartcolor{green}{x+1}}{1-\smartcolor{orange}{x}}\\
 & =\smartcolor{green}{( x+1)}\sum ^{\infty }_{n=0}\smartcolor{orange}{x}^{n}\\
 & =\sum ^{\infty }_{n=0}\left[ x^{n}\smartcolor{green}{( x+1)}\right]\\
 & =\sum ^{\infty }_{n=0} x^{n+1} +x^{n}\\
 & =\sum ^{\infty }_{n=0} x^{n\smartcolor{blue}{+1}} +\sum ^{\infty }_{n=0} x^{n}\\
 & =\sum ^{\infty }_{n=\smartcolor{blue}{1}} x^{n} +\sum ^{\infty }_{n=\smartcolor{orange}{0}} x^{n}\\
 & =\sum ^{\infty }_{n=1} x^{n} +x^{\smartcolor{orange}{0}} +\sum ^{\infty }_{n=\smartcolor{orange}{1}} x^{n}\\
 & =1+\smartcolor{orange}{2}\sum ^{\infty }_{n=0} x^{n}\\
 & =1+\sum ^{\infty }_{n=0}\smartcolor{orange}{2} x^{n} \quad ,\quad |x|< 1
\end{aligned}
$$

Pode-se assim determinar $f^{(n)}(0)$:

$$
f( x) =1+\sum ^{\infty }_{n=1}\frac{\smartcolor{blue}{2n!}}{n!} x^{n} \quad ,\quad |x|< 1\\f^{( n)}( 0) =\begin{cases}\smartcolor{blue}{2n!} & \text{se } n\geqslant 1\\1 & \text{se } n=0\end{cases}
$$

---

[**Também se pode usar a propriedade de as séries de potências poderem ser derivadas e primitivadas termo a termo, no interior do seu intervalo de convergência.**](color:orange)

---

Seja a função

$$
f(x)=\arctg x
$$

Determinando a série de MacLaurin da derivada:

$$
f'( x) =\frac{1}{1+x^{2}} =\frac{1}{1-\left(\smartcolor{orange}{-x^{2}}\right)} =\sum ^{\infty }_{n=0}\left(\smartcolor{orange}{-x^{2}}\right)^{n} \quad ,\quad |-x^{2} |< 1
$$

$$
f'( x) =\sum ^{\infty }_{n=0}\left[( -1)^{n} x^{2n}\right] \quad ,\quad x\in V_{1}( 0)
$$

Primitivando termo a termo:

$$
f( x) =\sum ^{\infty }_{n=0}\left[\frac{( -1)^{n}}{\smartcolor{orange}{2n+1}} x^{\smartcolor{orange}{2n+1}}\right] +K
$$

pois

$$\int x^{2n} \ \mathrm{d} x=\frac{x^{2n+1}}{2n+1}$$

Podemos determinar $K$ e $f^{(n)}(0)$:

$$
f( 0) =\arctan 0=0\Leftrightarrow K=0\\f( x) =\sum ^{\infty }_{n=0}\left[\frac{( -1)^{n}}{2n+1} x^{2n+1}\right] =\sum ^{\infty }_{n=0}\left[\frac{\smartcolor{blue}{( -1)^{n} (2n)!}}{(2n+1)!} x^{2n+1}\right] \quad ,\quad x\in V_{1}( 0)
$$

Aqui, como $x$ está elevado a $2n+1$, o fatorial no denominador dos coeficientes tem de ser $(2n+1)!$. Por isso, multiplica-se por $(2n)!$ no numerador e no denominador.

$$
( -1)^{\smartcolor{orange}{n}}( 2\smartcolor{orange}{n}) !\ \underset{n=k}{\Longleftrightarrow } \ ( -1)^{\smartcolor{orange}{k}}( 2\smartcolor{orange}{k}) !\Leftrightarrow ( -1)^{k}(\smartcolor{blue}{2k+1} -1) !\ \underset{n=2k+1}{\Longleftrightarrow }( -1)^{k}(\smartcolor{blue}{n} -1) !
$$

$$
f^{( n)}( 0) =\begin{cases}( -1)^{k}( n-1) ! & \text{se } n=2k+1\\0 & \text{se } n=2k\end{cases}
$$

---

Seja a função

$$
f:\mathbb{R} \backslash \{-1\}\rightarrow \mathbb{R} \quad ,\quad f( x) =\frac{1}{( 1+x)^{2}}
$$

Neste caso, para obtermos algo conhecido, é útil primitivar a função dada.

$$
F( x) =\int ( 1+x)^{-2} \ \mathrm{d} x=\frac{( 1+x)^{-1}}{-1} =\frac{-1}{1+x}
$$

Novamente, pela fórmula da soma de uma série geométrica:

$$
F( x) =\smartcolor{blue}{-1} \cdot \frac{1}{1-(\smartcolor{orange}{-x})} =\smartcolor{blue}{-}\sum ^{\infty }_{n=0}(\smartcolor{orange}{-x})^{n} =\sum ^{\infty }_{n=0}\left[(\smartcolor{blue}{-1})( -1)^{n} x^{n}\right] =\\=\sum ^{\infty }_{n=0}\left[( -1)^{n\smartcolor{blue}{+1}} x^{n}\right]\quad,\quad|-x|< 1
$$

Derivando agora termo a termo, para obter a série da função dada:

$$
\left[\smartcolor{orange}{( -1)^{n+1}} x^{\smartcolor{blue}{n}}\right] '=\smartcolor{orange}{( -1)^{n+1}}\smartcolor{blue}{n} x^{\smartcolor{blue}{n-1}}
$$

Note-se que a derivada do primeiro termo é nula, pois é uma constante $((-1)^{0+1}x^0=-1)$

$$
f( x) =\sum ^{\infty }_{n=\smartcolor{orange}{1}}\left[( -1)^{n+1} nx^{n-1}\right] =\sum ^{\infty }_{n=\smartcolor{orange}{0}}\left[( -1)^{n}( n+1) x^{n}\right]
$$

Podemos, assim, determinar $f^{(n)}(0)$:

$$
f( x) =\sum ^{\infty }_{n=0}\left[\frac{( -1)^{n}( n+1) \cdot n!}{n!} x^{n}\right] =\sum ^{\infty }_{n=0}\left[\frac{\smartcolor{blue}{( -1)^{n}( n+1) !}}{n!} x^{n}\right]\\
f^{( n)}( 0) =\smartcolor{blue}{(}\smartcolor{blue}{-1}\smartcolor{blue}{)}\smartcolor{blue}{^{n}}\smartcolor{blue}{(}\smartcolor{blue}{n+1}\smartcolor{blue}{)}\smartcolor{blue}{!}
$$

:::

:::details[Mais Exemplos]

Seja a função $f$, em que se pretende determinar a sua série de MacLaurin.

$$
f(x)=\log|2+x|
$$

Usando a propriedade em que se pode derivar e primitivar termo a termo as séries de potências:

$$
\begin{aligned}f'( x) & =\frac{1}{\smartcolor{blue}{2} +x}\\ & =\smartcolor{blue}{\frac{1}{2}} \cdot \frac{1}{1-\left(\smartcolor{orange}{-\frac{x}{2}}\right)}\\ & =\smartcolor{blue}{\frac{1}{2}}\sum ^{\infty }_{n=0}\left(\smartcolor{orange}{-\frac{x}{2}}\right)^{n}\\ & =\ \smartcolor{blue}{\frac{1}{2}}\sum ^{\infty }_{n=0}\frac{( -1)^{n}}{2^{n}} x^{n}\\ & =\sum ^{\infty }_{n=0}\left[\frac{( -1)^{n}}{\smartcolor{blue}{2} \times 2^{n}} x^{n}\right]\\ & =\sum ^{\infty }_{n=0}\left[\frac{( -1)^{n}}{2^{n\smartcolor{blue}{+1}}} x^{n}\right] \quad ,\quad \left| -\frac{x}{2}\right| < 1\end{aligned}
$$

Primitivando termo a termo, tem-se:

$$
\begin{aligned}f( x) & =\sum ^{\infty }_{n=\smartcolor{blue}{0}}\left[\frac{( -1)^{n}}{\smartcolor{orange}{( n+1)} 2^{n+1}}\smartcolor{orange}{x^{n+1}}\right] +K\\ & =\sum ^{\infty }_{n=\smartcolor{blue}{1}}\left[\frac{( -1)^{n-1}}{n2^{n}} x^{n}\right] +K\quad ,\quad x\in V_{2}( 0)\end{aligned}
$$

Como $f(0)=\log2$:

$$
f( 0) =\log 2\Leftrightarrow K=\log 2\\\\f( x) =\log 2+\sum ^{\infty }_{n=1}\left[\frac{( -1)^{n-1}}{n2^{n}} x^{n}\right] \quad ,\quad x\in V_{2}( 0)
$$

---

Seja a função $f$ em que se pretende calcular

$$
f( x) =\log\left(\frac{1-x}{1+x}\right)
$$

Separando o logaritmo:

$$
f( x) =\smartcolor{orange}{\log( 1-x)} -\smartcolor{blue}{\log( 1+x)}
$$

Determinando à parte o desenvolvimento do primeiro logaritmo:

$$
[\smartcolor{orange}{\log( 1-x)}] '=\frac{-1}{1-x} =\smartcolor{green}{-}\sum ^{\infty }_{n=0}\smartcolor{green}{x^{n}} \quad ,\quad |x|< 1
$$

Primitivando termo a termo a série:

$$
\smartcolor{orange}{\log( 1-x)} =\sum ^{\infty }_{n=\smartcolor{orange}{0}}\left[\frac{\smartcolor{green}{-1}}{\smartcolor{green}{n+1}}\smartcolor{green}{x^{n+1}}\right] +K\quad ,\quad |x|< 1
$$

Mudando os índices da série e calculando $K=0$:

$$
\smartcolor{orange}{\log}\smartcolor{orange}{(}\smartcolor{orange}{1-x}\smartcolor{orange}{)} =\sum ^{\infty }_{n=\smartcolor{orange}{1}}\left[\frac{\smartcolor{green}{-1}}{\smartcolor{green}{n}}\smartcolor{green}{x}\smartcolor{green}{^{n}}\right] \quad ,\quad |x|< 1
$$

Para determinar o desenvolvimento do segundo logaritmo, podemos substituir $x$ por $-x$:

$$
\smartcolor{blue}{\log( 1+x)} =\sum ^{\infty }_{n=1}\left[\frac{-1}{n}( -x)^{n}\right] =\sum ^{\infty }_{n=1}\left[\frac{( -1)^{n+1}}{n} x^{n}\right] \quad ,\quad |x|< 1
$$

Juntando ambos:

$$
f( x) =\sum ^{\infty }_{n=0}\left[\smartcolor{orange}{\frac{-1}{n}} -\smartcolor{blue}{\frac{( -1)^{n+1}}{n}}\right] x^{n} \quad ,\quad |x|< 1
$$

Como para qualquer $n$ par os coeficientes se anulam:

$$
f( x) =\sum ^{\infty }_{n=0}\frac{-2}{\smartcolor{orange}{2n+1}} x^{\smartcolor{orange}{2n+1}} \quad ,\quad |x|< 1
$$

:::

# Séries de Taylor como meio para determinar somas de séries

Podemos usar as séries de Taylor para transformarmos uma série numa função conhecida, de forma a conseguir determinar a sua soma. São usadas as [séries conhecidas de funções inteiras](/cdi-i/series-funcionais#funções-inteiras).

---

$$
\sum ^{\infty }_{n=0}\frac{\smartcolor{orange}{1}}{n!} =\left[\sum ^{\infty }_{n=0}\frac{\smartcolor{blue}{x^{n}}}{n!}\right]_{\smartcolor{orange}{x=1}} =\left[ e^{x}\right]_{x=1} =e
$$

---

Pode ser preciso somar ou subtrair termos para chegarmos a algo conhecido:

$$
\sum ^{\infty }_{n=2}\frac{\smartcolor{orange}{1}}{( 2n) !} =\left[\sum ^{\infty }_{n=\smartcolor{green}{2}}\frac{\smartcolor{blue}{x^{2n}}}{( 2n) !}\right]_{\smartcolor{orange}{x=1}} =\left[\cosh x\smartcolor{green}{-1-\frac{x^{2}}{2}}\right]_{x=1} =\cosh 1-\frac{3}{2}
$$

---

Pode ser preciso derivar ou primitivar termo a termo:

$$
\sum ^{\infty }_{n=0} n\smartcolor{orange}{2^{-n}} =\left[\sum ^{\infty }_{n=0} n\smartcolor{blue}{x^{n}}\right]_{\smartcolor{orange}{x=\frac{1}{2}}} =\left[\smartcolor{green}{x}\sum ^{\infty }_{n=1} nx^{n\smartcolor{green}{-1}}\right]_{x=\frac{1}{2}}
$$

Primitivando termo a termo:

$$
\sum ^{\infty }_{n=\smartcolor{orange}{1}}\smartcolor{orange}{nx^{n-1}} =\left[\sum ^{\infty }_{n=\smartcolor{orange}{0}}\smartcolor{orange}{x^{n}}\right]^{'} =\left(\frac{1}{1-x}\right)^{'} =\frac{1}{( 1-x)^{2}} \quad ,\quad |x|< 1
$$

Então,

$$
\sum ^{\infty }_{n=0} n2^{-n} =\left[\smartcolor{green}{x}\left(\smartcolor{blue}{\frac{1}{( 1-x)^{2}}}\right)\right]_{x=\frac{1}{2}} =2
$$

---

Também pode ser necessário aplicar as operações de primitivação e de derivação pela ordem inversa.

$$
\sum ^{\infty }_{n=1}\frac{1}{n\smartcolor{orange}{( -3)^{n}}} =\left[\sum ^{\infty }_{n=1}\frac{\smartcolor{blue}{x^{n}}}{n}\right]_{\smartcolor{orange}{x=-\frac{1}{3}}}
$$

Por outro lado:

$$
\left[\sum ^{\infty }_{n=1}\frac{x^{n}}{n}\right]^{'} =\sum ^{\infty }_{n=\smartcolor{orange}{1}} x^{n\smartcolor{orange}{-1}} =\sum ^{\infty }_{n=\smartcolor{orange}{0}} x^{n} =\frac{1}{1-x} \quad ,\quad |x|< 1
$$

Primitivando ambos os extremos da cadeira de identidades acima, obtemos:

$$
\sum ^{\infty }_{n=1}\frac{x^{n}}{n} =\smartcolor{blue}{-\log( 1-x) +K} \quad ,\quad |x|< 1
$$

Para determinar $K$, nota-se que $\sum ^{\infty }_{n=1}\frac{x^{n}}{n}$ vale $0$ quando $x=0$. Logo,

$$
0=-\log 1+K\Leftrightarrow K=\log 1\Leftrightarrow K=0
$$

Substituindo na expressão inicial

$$
\sum ^{\infty }_{n=1}\frac{1}{n( -3)^{n}} =[\smartcolor{blue}{-\log( 1-x)}]_{x=-\frac{1}{3}} =\log\frac{3}{4}
$$

---

Também de pode ter de aplicar este método mais do que uma vez:

$$
\sum ^{\infty }_{n=2}\frac{1}{\left( n^{2} -n\right)\smartcolor{orange}{2^{n}}} =\left[\sum ^{\infty }_{n=2}\frac{\smartcolor{blue}{x^{n}}}{n^{2} -n}\right]_{\smartcolor{orange}{x=\frac{1}{2}}}
$$

Derivando a série de potências:

$$
\left[\sum ^{\infty }_{n=2}\frac{x^{n}}{n^{2} -n}\right]^{'} =\sum ^{\infty }_{n=2}\frac{\smartcolor{yellow}{n\cdot } x^{n-1}}{\smartcolor{yellow}{n\cdot }( n-1)} =\sum ^{\infty }_{n=2}\frac{x^{n-1}}{n-1}
$$

que ainda não é um desenvolvimento conhecido.

Derivando novamente:

$$
\left[\sum ^{\infty }_{n=2}\frac{x^{n-1}}{n-1}\right]^{'} =\sum ^{\infty }_{n=2}\frac{\smartcolor{yellow}{( n-1)} \cdot x^{n-2}}{\smartcolor{yellow}{n-1}} =\sum ^{\infty }_{n=\smartcolor{orange}{2}} x^{n\smartcolor{orange}{-2}} =\sum ^{\infty }_{n=\smartcolor{orange}{0}} x^{n} =\frac{1}{1-x} \quad ,\quad |x|< 1
$$

De forma semelhante ao exemplo anterior, temos de primitivar duas vezes o resultado, determinando a constante $K$ em cada uma das primitivações. Obtemos assim:

$$
\sum ^{\infty }_{n=2}\frac{x^{n}}{n^{2} -n} =\smartcolor{blue}{( 1-x)\log( 1-x) +x} \quad ,\quad |x|< 1
$$

Substituindo na expressão anterior:

$$
\sum ^{\infty }_{n=2}\frac{1}{\left( n^{2} -n\right) 2^{n}} =[\smartcolor{blue}{(}\smartcolor{blue}{1-x}\smartcolor{blue}{)}\smartcolor{blue}{\log}\smartcolor{blue}{(}\smartcolor{blue}{1-x}\smartcolor{blue}{)}\smartcolor{blue}{+x}]_{x=\frac{1}{2}} =\frac{1}{2}\log\left(\frac{e}{2}\right)
$$

---

Também pode ocorrer o caso em que o método utilizado anteriormente não consegue eliminar o denominador porque o expoente da potência está "errado". Pode-se, assim, escolher a potência de forma diferente:

$$
\sum ^{\infty }_{n=0}\frac{( -1)^{n}}{\smartcolor{orange}{3^{n}}( 2n+1)} =\left[\smartcolor{blue}{\sqrt{3}}\sum ^{\infty }_{n=0}\frac{( -1)^{n}}{2n+1}\smartcolor{blue}{x^{2n+1}}\right]\smartcolor{orange}{_{x=\frac{1}{\sqrt{3}}}}
$$

Derivando a série de potências:

$$
\left[\sum ^{\infty }_{n=0}\frac{( -1)^{n}}{2n+1} x^{2n+1}\right]^{'} =\sum ^{\infty }_{n=0}( -1)^{n} x^{2n} =\sum ^{\infty }_{n=0}\left( -x^{2}\right)^{n} =\frac{1}{1+x^{2}} \quad ,\quad |x|< 1
$$

Primitivando, como anteriormente, ambos os extremos da cadeia de identidades:

$$
\sum ^{\infty }_{n=0}\frac{( -1)^{n}}{2n+1} x^{2n+1} =\smartcolor{blue}{\arctan x+K} \quad ,\quad |x|< 1
$$

Como a série do membro esquerdo se anula na origem, $K=0$, e então:

$$
\sum ^{\infty }_{n=0}\frac{( -1)^{n}}{3^{n}( 2n+1)} =\left[\sqrt{3}\smartcolor{blue}{\arctan x}\right]_{x=\frac{1}{\sqrt{3}}} =\frac{\sqrt{3} \pi }{6}
$$

# Cálculo de Integrais de Funções utilizando Séries

Por exemplo, para calcular

$$
\int ^{1}_{0} e^{t^{2}} \ \mathrm{d} t
$$

Pode-se usar o desenvolvimento da série de MacLaurin da exponencial, que já é primitivável termo a termo:

$$
\int ^{1}_{0} e^{t^{2}} \ \mathrm{d} t=\int ^{1}_{0}\sum ^{\infty }_{n=0}\frac{t^{2n}}{n!} \ \mathrm{d} t=\sum ^{\infty }_{n=0}\left(\frac{1}{n!}\left[\frac{t^{2n+1}}{2n+1}\right]^{1}_{0}\right) =\sum ^{\infty }_{n=0}\frac{1}{( 2n+1) n!}
$$

# Resolução de Equações Funcionais utilizando Séries

Por exemplo, para determinar uma solução inteira, $f$, da equação funcional

$$
f'( x) -x^{2} f( x) =e^{x} \quad ,\quad x\in \mathbb{R}
$$

Se tal solução existir, ela deverá ter uma série de MacLaurin:

$$
f( x) =\sum ^{\infty }_{n=0} a_{n} x^{n}
$$

Que, substituindo na equação funcional:

$$
\left(\sum ^{\infty }_{n=0} a_{n} x^{n}\right)^{'} -x^{2}\sum ^{\infty }_{n=0} a_{n} x^{n} =\sum ^{\infty }_{n=0}\frac{x^{n}}{n!}
$$

Derivando termo a termo e efetuando os cálculos:

$$
\sum ^{\infty }_{n=1} na_{n} x^{n-1} -\sum ^{\infty }_{n=0} a_{n} x^{n+2} =\sum ^{\infty }_{n=0}\frac{x^{n}}{n!}
$$

Mudando os índices dos somatórios:

$$
\sum ^{\infty }_{n=0}( n+1) a_{n+1} x^{n} -\sum ^{\infty }_{n=2} a_{n-2} x^{n} =\sum ^{\infty }_{n=0}\frac{x^{n}}{n!}
$$

E, finalmente, somando ambas as séries (pois a soma de duas séries de potências convergentes em $\R$ é uma série de potências convergente em $\R$):

$$
a_{1} +2a_{2} x+\sum ^{\infty }_{n=2}(( n+1) a_{n+1} -a_{n-2}) x^{n} =\sum ^{\infty }_{n=0}\frac{x^{n}}{n!}
$$

Tendo em conta a unicidade da série de Taylor, obtém-se:

$$
\begin{cases}a_{1} =1 & \\2a_{2} =1 & \\( n+1) a_{n+1} -a_{n-2} =\frac{1}{n!} & ,\quad n\geqslant 2\end{cases}
$$

Reescrevendo as condições acima:

$$
\begin{cases}a_{1} =1 & \\2a_{2} =1 & \\a_{n+1} =\frac{1}{( n+1) !} +\frac{a_{n-2}}{n+1} & ,\quad n\geqslant 2\end{cases}
$$

Obtêm-se assim a sucessão $(a_n)$ por recorrência, exceto o valor de $a_0$ o qual deve ser dado para o problema ter solução única.

---

PDFs:

- [Aula 32](https://drive.google.com/file/d/1BWotmpWgekSXYbzE1Xwn92cm3JATr3bD/view?usp=sharing)
- [Aula 33](https://drive.google.com/file/d/1CqmYQv2DCa51WlSFIqAYYKs42X0C7mba/view?usp=sharing)
- [Aula 34](https://drive.google.com/file/d/1po8FVBJVDOolk8Uu1gL-gK9bZ9VANd_v/view?usp=sharing)

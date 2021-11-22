---
title: Séries Funcionais
description: >-
  Séries Funcionais.
  Séries de Potências.
  Primeiro teorema de Abel.
  Raio de convergência de uma série de potências.
  Domínio de convergência.
  Soma e produto de séries de potências.
  Simplificação do termo geral.
  Funções analíticas.
  Função analítica num ponto.
  Unicidade da representação em série de potências.
  Continuidade e diferenciabilidade de funções analíticas.
  Funções inteiras.
path: /cdi-i/series-funcionais
type: content
---

```toc

```

# Séries Funcionais

São séries do tipo

$$
\sum ^{\infty }_{n=0} f_{n}( x)
$$

Iremos estudar somente as séries de potências:

## Séries de potências

Chama-se séries de potências a uma série funcional da forma

$$
\sum ^{\infty }_{n=p} a_{n}( x-x_{0})^{n}
$$

em que $x$ é a variável e $p\in\N_0$. Chama-se centro da série ao ponto $x_0\in\R$ e coeficientes da série aos termos da sucessão $(a_n)$.

:::ti

$x$ → variável;
$p\in\N_0$;
$x_0\in\R$ → centro da série;
Termos de $(a_n)$ → coeficientes da série;

:::

🧠 Pode-se sempre considerar $p=0$, se considerarmos os coeficientes ${a_0=a_1=\dots=a_{p-1}=0}$.

:::tip[Domínio de convergência]

Conjunto de $x$ para os quais a série **converge**.

:::

:::tip[Soma da série de potências/Valor da série de potências em $x$]

Função de $x$, definida pela soma da série em todos os pontos do domínio de convergência.

:::

### Primeiro Teorema de Abel

Seja

$$
\sum ^{\infty }_{n=0} a_{n}( x-x_{0})^{n}
$$

uma série de potências. Se a série converge para $x_1\in\R$ então converge absolutamente para ${x\in V_r(x_0)}$, onde $r=\left| x_1-x_0\right|$.

Mais ainda, existe o limite

$$
R=\frac{1}{\overline{\lim }\sqrt[n]{|a_{n} |}} \in \mathbb{R}^{+}_{0} \cup \{+\infty \}
$$

- Se $R>0$, a série é convergente para $x\in V_R(x_0)$;
- Se $R<+\infin$, a série é divergente para $x\in ] -\infty ,\ x_{0} -R[ \cup ] x_{0} +R,\ +\infty [$

:::tip[Raio de convergência]

Valor do limite $R$ indicado acima.

:::

👉 O teorema de Abel estabelece qual o **domínio de convergência** de qualquer série de potências, exceto em dois pontos, em que nada se sabe da sua natureza: $x_0\pm R$.

O símbolo $\overline{\lim}u_n$ representa o limite superior de $u_n$, isto é, o supremo em $\overline\R$ dos sublimites de $(u_n)$.

Sempre que $a_n=0$ para $n\ge n_0$ para algum $n_0\in\N^+$, a série é truncada e, por isso, uma função polinomial. Logo, o seu **domínio de convergência** será $\R$.

### Raio de convergência de uma série de potências

Dada uma série de potências de coeficientes $a_n$, sempre que exista o limite

$$
\lim \frac{|a_{n} |}{|a_{n+1} |}
$$

tem-se que o raio de convergência da série, $R$, tem o valor desse limite.

[Este é um método bastante mais simpático de calcular o raio de convergência do que o teorema de Abel, e funciona a maior parte das vezes.](color:orange)

Podemos assim retirar algumas observações:

- O raio de convergência existe sempre, para qualquer série de potências. Como é um limite pode ser 0, um número real positivo ou $+\infin$.
- A fórmula simplificada para o raio, que funciona a maior parte das vezes, pode gerar alguma confusão na mente desprevenida pois é, formalmente, o inverso algébrico do limite que é necessário calcular para aplicar o critério de D’Alembert.
- O raio de convergência e o centro permitem caracterizar o domínio de convergência, com possível excepção de dois pontos.

:::details[Exemplos]

Seja a série de potências:

$$
\sum ^{\infty }\left(\frac{1}{2^{n} +1} \cdot x^{n}\right)
$$

Os coeficientes da série são dados pela sucessão de termo $a_{n} =\frac{1}{2^{n} +1}$ e o centro da série é o ponto $x_0=0$.

O raio de convergência é dado pelo seguinte limite, caso este exista:

$$
\frac{a_n}{a_{n+1}}=\frac{\frac{1}{2^{n}+1}}{\frac{1}{2^{n+1}+1}}=\frac{2^{n+1}+1}{2^{n}+1}=\frac{2+2^{-n}}{1+2^{-n}} \longrightarrow 2
$$

Logo, $R=2$.

---

Seja a série de potências:

$$
\sum ^{\infty }\frac{( 2x-2)^{n}}{n+1}
$$

Começa-se por escrever a série na forma canónica:

$$
\sum ^{\infty }\frac{( 2x-2)^{n}}{n+1} =\sum ^{\infty }\left(\frac{2^{n}}{n+1}( x-1)^{n}\right)
$$

Os coeficientes da série são dados pela sucessão de termo $a_{n} =\frac{2^{n}}{n +1}$ e o centro da série é o ponto $x_0=1$.

O raio de convergência é dado pelo seguinte limite, caso este exista:

$$
\frac{\frac{2^{n}}{n+1}}{\frac{2^{n+1}}{n+2}} =\frac{1}{2} \times \frac{n+2}{n+1} =\frac{1}{2} \times \frac{1+\frac{2}{n}}{1+\frac{1}{n}}\rightarrow \frac{1}{2}
$$

Logo, $R=\frac 12$

---

Seja a série de potências:

$$
\sum ^{\infty }\frac{x^{n}}{n!}
$$

Começa-se por escrever a série na forma canónica:

$$
\sum ^{\infty }\frac{x^{n}}{n!} =\sum ^{\infty }\frac{1}{n!} \cdot x^{n}
$$

Os coeficientes da série são dados pela sucessão de termo $a_{n} =\frac1{n!}$ e o centro da série é o ponto $x_0=0$.

O raio de convergência é dado pelo seguinte limite, caso este exista:

$$
\frac{\frac{1}{n!}}{\frac{1}{( n+1) !}} =n+1\rightarrow +\infty
$$

Logo, $R=+\infin$

---

Seja a série de potências:

$$
\sum ^{\infty }(nx)^n
$$

Começa-se por escrever a série na forma canónica:

$$
\sum ^{\infty }(nx)^n=\sum ^{\infty }n^n\cdot x^n
$$

Os coeficientes da série são dados pela sucessão de termo $a_{n} =n^n$ e o centro da série é o ponto $x_0=0$.

O raio de convergência é dado pelo seguinte limite, caso este exista:

$$
\frac{n^{n}}{( n+1)^{n+1}} =\frac{1}{n+1} \cdot \left(\frac{n}{n+1}\right)^{n}\rightarrow 0
$$

Logo, $R=0$

:::

# Domínio de convergência

É fácil determinar o domínio de convergência, após saber o raio de convergência.

Podem existir 3 casos:

- $R=0\implies D=\{x_0\}$
- $R=+\infin\implies D=\R$
- $R\in\R^+\implies I=\left] x_0-R,\ x_0+R\right[$, a que se chama **intervalo de convergência**.

Neste último caso, é necessário ainda estudar, à parte, a natureza dos extremos de $I$. O intervalo de convergência é sempre um intervalo aberto. Pode-se também concluir que a série é sempre [**divergente**](color:pink) para $x\in\left]-\infin,\ x_0-R\right[\cup\left] x_0+R,\ +\infin\right[$ e [**absolutamente convergente**](color:orange) em $I$.

👉 As séries de potências [**não**](color:red) podem ser [**absolutamente convergentes**](color:orange) num extremo sem o serem também no outro.

:::details[Exemplos]

Seja a série de potências:

$$
\sum ^{\infty }\frac{x^{n}}{n2^{n}}
$$

O centro da série é $x_0=0$. Pode-se calcular o raio de convergência pelo limite:

$$
\frac{\frac{1}{n2^{n}}}{\frac{1}{( n+1) 2^{n+1}}} =2\cdot \frac{n+1}{n}\rightarrow 2
$$

Então, a série é [**absolutamente convergente**](color:orange) em $]x_0-R,\ x_0+R[=]-2,\ 2[$ e [**divergente**](color:pink) em $]-\infin,\ -2[\cup]2,\ +\infin[$.

Estuda-se assim a natureza da série nos pontos que faltam $(-2,\ 2)$. Começa-se por $x=2$:

$$
\sum ^{\infty }\frac{2^{n}}{n2^{n}} =\sum ^{\infty }\frac{1}{n}
$$

Sabemos que é [**divergente**](color:pink) por ser uma série de Dirichlet com $\alpha\le1$.

Para $x=-2$:

$$
\sum ^{\infty }\frac{( -2)^{n}}{n2^{n}} =\sum ^{\infty }\frac{( -1)^{n}}{n}
$$

Sabemos que é [**simplesmente convergente**](color:yellow) por um exemplo anterior (secção da convergência absoluta e simples de séries numéricas).

Logo, a série de potências dada é [**absolutamente convergente**](color:orange) em $]-2,\ 2[$, [**simplesmente convergente**](color:yellow) em $x=-2$ e [**divergente**](color:pink) em $]-\infin,\ -2[\cup[2,\ +\infin[$.

---

Seja a série de potências:

$$
\sum ^{\infty }\frac{( x-1)^{n}}{3^{n} n^{2}}
$$

O centro da série é $x_0=1$. Pode-se calcular o raio de convergência pelo limite:

$$
\frac{\frac{1}{3^{n} n^{2}}}{\frac{1}{3^{n+1}( n+1)^{2}}} =3\left(\frac{n+1}{n}\right)^{2}\rightarrow 3
$$

Então, a série é

- [**absolutamente convergente**](color:orange) em $]-2,\ 4[$
- [**divergente**](color:pink) em $]-\infin,\ -2[\cup]4,\ +\infin[$
- não se sabe (ainda) em $x=-2$ e $x=4$.

Para $x=-2$:

$$
\sum ^{\infty }\frac{( -1)^{n}}{n^{2}}
$$

A série dos módulos é uma série de Dirichlet com $\alpha=2>1$, logo a série para $x=-2$ é [**absolutamente convergente**](color:orange).

Para $x=4$:

$$
\sum ^{\infty }\frac{1}{n^{2}}
$$

É [**absolutamente convergente**](color:orange).

Logo, a série de potências dada é [**absolutamente convergente**](color:orange) em $[-2,\ 4]$ e [**divergente**](color:pink) em $]-\infin,\ -2[\cup]4,\ +\infin[$.

:::

# Soma e produto de séries de potências

É necessário, tanto para a soma como para o produto, que as séries tenham o mesmo centro.

## Soma

A série obtida tem o mesmo centro e o mesmo raio de convergência das séries operandas.

$$
\sum_{n=0}^{\infty} a_{n}\left(x-x_{0}\right)^{n}+\sum_{n=0}^{\infty} b_{n}\left(x-x_{0}\right)^{n}=\sum_{n=0}^{\infty}\left(a_{n}+b_{n}\right)\left(x-x_{0}\right)^{n}
$$

## Produto por um real

A série obtida tem o mesmo centro e o mesmo raio de convergência da série dada, exceto se ${k=0}$.

$$
k\sum_{n=0}^{\infty} a_{n}\left(x-x_{0}\right)^{n}=\sum_{n=0}^{\infty} (k\cdot a_{n})\left(x-x_{0}\right)^{n}
$$

## Produto entre duas séries

Usando o produto de Cauchy e o Teorema de Mertens, obtém-se uma série com o mesmo centro e o mesmo raio de convergência das séries operandas.

$$
\left(\sum_{n=0}^{\infty} a_{n}\left(x-x_{0}\right)^{n}\right) \cdot\left(\sum_{n=0}^{\infty} b_{n}\left(x-x_{0}\right)^{n}\right)=\sum_{n=0}^{\infty} \sum_{k=0}^{n}\left(a_{n-k} b_{k}\right)\left(x-x_{0}\right)^{n-k+k} \\=\sum_{n=0}^{\infty} c_{n}\left(x-x_{0}\right)^{n}
$$

# Simplificação termo geral

Sendo a série:

$$
\sum ^{\infty }_{n=0} a_{n} x^{2n}
$$

Pode-se escrever a série da forma:

$$
a_{0} +a_{1} x^{2} +a_{2} x^{4} +\dotsc +a_{n} x^{2n}\\
a_0+0x+a_1x^2+0x^3+a_2x^4+\dotsc+a_nx^{2n}\\
b_0+b_1x+b_2x^2+b_3x^3+b_4x^4+\dotsc+b_{2n}x^{2n}
$$

Obtém-se, assim, a expressão dos coeficientes da série dados por:

$$
\begin{cases}a_{\frac{n}{2}} & \text{se} & n\text{ é par}\\0 & \text{se} & n\text{ é impar}\end{cases}
$$

No entanto, para estes coeficientes não se pode aplicar a fórmula simplificada do raio de convergência. Então:

$$
\overline{\lim }\sqrt[n]{|a_{n} |} =R^{-1}_{1} ,\\\\R=\frac{1}{\overline{\lim }\sqrt[n]{|b_{n} |}} =\frac{1}{\overline{\lim }\sqrt[2n]{|b_{2n} |}} =\sqrt{\frac{1}{\overline{\lim }\sqrt[n]{|a_{n} |}}} =\sqrt{R_{1}}
$$

Também se pode fazer uma "mudança de variável":

$$
y=x^{2}\\\\\text{Converge se:}\\y\in V_{R_{1}}( 0) \Leftrightarrow |y|< R_{1} \Leftrightarrow x^{2} < R_{1} \Leftrightarrow |x|< \sqrt{R_{1}}\\\text{Diverge se:}\\|y| >R_{1} \Leftrightarrow x^{2}  >R_{1} \Leftrightarrow |x| >\sqrt{R_{1}}
$$

:::details[Exemplo]

Seja a série:

$$
\sum ^{\infty }_{n=0}\frac{1}{n}\left(\frac{x-1}{x+1}\right)^{n}
$$

Pode-se escrever esta série como uma série de potências, fazendo a mudança de variável:

$$
y=\frac{x-1}{x+1}
$$

Esta série é [**absolutamente convergente**](color:orange) se $|y|<1$ e [**divergente**](color:pink) se $|y|>1$.

Então a série [**converge absolutamente**](color:orange) se

$$
\left| \frac{x-1}{x+1}\right| < 1\Leftrightarrow |x-1|< |x+1|\Leftrightarrow x >0
$$

Pode-se fazer o mesmo para estudar a [**divergência**](color:pink) (vai dar $x<0$).

Quando $x=0$, a série vai ser [**simplesmente convergente**](color:yellow).

:::

# Funções analíticas

## Função analítica num ponto

Dados $x_0\in\R$ e uma função $f: V_r(x_0)\to \R$, para algum $r\in\R^+$, diz-se que $f$ é analítica em $x_0$ se existe uma sucessão de coeficientes $(a_n)$ tal que

$$
f( x) =\sum ^{\infty }_{n=0} a_{n}( x-x_{0})^{n}
$$

para qualquer $x\in V_R(x_0)$, para algum $R\in\R^+$ tal que $R\le r$.

Se $r=R=+\infin$ então a função diz-se **inteira**.

:::tip[Função analítica]

Função que pode ser escrita como uma série de potências, localmente num ponto $x_0$.

:::

- Uma função nunca é **apenas** analítica em $x_0$ (pela analiticidade das séries de potências, abaixo)
- A sucessão $(a_n)$ é única, isto é, para uma determinada função, não é possível encontrar uma sucessão diferente que esteja também correta.

A demonstração destas duas propriedades encontra-se no PDF da aula 31, páginas 7 e 8.

## Analiticidade das séries de potências no interior do seu intervalo de convergência

Seja $f$ uma função analítica em $x_0$ que admite uma representação em série de potências de ${x-x_0}$ com raio de convergência $R$. Então, $f$ é analítica em todos os pontos de $V_R(x_0)$.

## Unicidade da representação em série de potências

Seja $f$ uma função analítica num ponto $x_0\in\R$. Então, existe uma e uma só sucessão de coeficientes $(a_n)$ tal que

$$
f( x) =\sum ^{\infty }_{n=0} a_{n}( x-x_{0})^{n}
$$

Obviamente, para um ponto $x_1\ne x_0$, isto já não é verdade, e as sucessões de coeficientes são, normalmente, diferentes.

## Continuidade das funções analíticas

Seja $f$ uma função analítica em $x_0\in\R$ cuja série de potências de $x-x_0$ converge num intervalo $V_R(x_0)$, para algum $R\in\R^+$. Então, $f$ é contínua em $V_R(x_0)$.

A demonstração encontra-se no PDF da aula 31, páginas 8 e 9.

:::tip

Uma função analítica é contínua no intervalo onde é convergente.

:::

## Diferenciabilidade das funções analíticas

Seja $f$ uma função analítica num ponto $x_0\in\R$ tal que a respetiva representação em série de potências de $x-x_0$ tem coeficientes $a_n$ e converge em $V_R(x_0)$, para algum $R\in\R^+$. Então, $f\in C^\infin(V_R(x_0))$ e as suas derivadas podem ser determinadas derivando o termo a termo a série de representa $f$.

A demonstração encontra-se no PDF da aula 31, página 9.

:::tip

Uma função analítica, no intervalo onde é convergente, pode ser derivada infinitas vezes.

:::

Assim, todas as funções analíticas são extremamente regulares, e as funções inteiras são extremamente regulares em todo o $\R$.

Conclui-se também:

$$
f(x_0)=a_0\quad,\quad f'(x_0)=a_1\quad,\quad f''(x_0)=2a_2\quad,\quad\dots\quad,\quad f^{(n)}(x_0)=n!a_n
$$

## Funções inteiras

Esta nova forma de representar algumas funções já conhecidas, permite-nos calcular a soma de séries através do valor destas funções, que muito provavelmente é conhecido.

Abaixo encontram-se alguns exemplos de funções já estudadas que são, na verdade, funções inteiras:

$$
e^x=\sum^{\infin}_{n=0}\frac{x^n}{n!}\quad,\quad x\in\R
$$

Facilmente se pode concluir que se consegue somar algumas séries que anteriormente era impossível:

$$
\sum_{n=0}^{\infty} \frac{2^{n}}{n !}=\mathrm{e}^{2} \quad \text { e } \quad \sum_{n=2}^{\infty} \frac{1}{n !}=\mathrm{e}-2
$$

Também as funções trigonométricas, $\sin$, $\cos$, $\sh$ e $\ch$ podem ser escritas como funções inteiras:

$$
\operatorname{sen} x= \sum_{n=0}^{\infty} \frac{(-1)^{n}}{(2 n+1) !} x^{2 n+1} \quad, \quad x \in \mathbb{R}
$$

$$
\cos x=\sum_{n=0}^{\infty} \frac{(-1)^{n}}{(2 n) !} x^{2 n} \quad, \quad x \in \mathbb{R}
$$

$$
\operatorname{sh} x=\sum_{n=0}^{\infty} \frac{1}{(2 n+1) !} x^{2 n+1} \quad , \quad x \in \mathbb{R}
$$

$$
\operatorname{ch} x=\sum_{n=0}^{\infty} \frac{1}{(2 n) !} x^{2 n} \quad, \quad x \in \mathbb{R}
$$

Novamente, podemos usar estas novas funções para calcular somas de séries:

$$
\sum ^{\infty }_{n=1}\frac{( -1)^{n}( \pi )^{2n}}{4^{n}( 2n) !} =\sum ^{\infty }_{n=1}\left(\frac{( -1)^{n}}{( 2n) !}\left(\frac{\pi }{2}\right)^{2n}\right) =\cos\left(\frac{\pi }{2}\right) -1=-1
$$

---

PDFs:

- [Aula 30](https://drive.google.com/file/d/1lZbHEPj5lP_eLzBJjq4MpSea8Rk-Y5MM/view?usp=sharing)
- [Aula 31](https://drive.google.com/file/d/1rmtD5_lgfJvkN_hYUwqUGOolF0992fwU/view?usp=sharing)

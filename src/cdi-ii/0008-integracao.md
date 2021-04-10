---
description: Integrais; Intervalo Aberto; Partições; Função em Escada; Integral Superior e Inferior; Propriedades de Integrais
---

# Integração em Rⁿ

[[toc]]

## Intervalo aberto

Um intervalo aberto de $\R^n$ é um conjunto de fatores

$$I = ]a_1, b_1[ \times ]a_2, b_2[ \times \dots \times ]a_n, b_n[$$

Por exemplo, em $\R^2$ são retângulos abertos, enquanto em $\R^3$ são paralelipípedos abertos

Podemos também calcular o comprimeiro, área, volume, etc através de um intervalo.

$$|I| = (b_1-a_1) \times (b_2-a_2)\times \dots \times (b_n-a_n)$$

- Em $\R$, $|I|$ é o comprimento
- Em $\R^2$, $|I|$ é a área
- Em $\R^3$, $|I|$ é o volume

## Partição

Uma partição de $I$ é uma subdivisão em intervalos abertos.

<img src="./assets/0008-particoes.svg" alt="Partição em 4 subintervalos" class="invert-dark">

## Integração

### Funções em escada

Dada uma partição, uma **função em escada** nessa partição é uma função que é constante em cada subintervalo.

Uma propriedade das funções em escada é que é muito fácil calcular o seu integral.

Em geral, se $f: I \to \R$ é uma função em escada, então

$$\int_I f= \sum_{J \text{elemento da partição}} (\text{valor da função}) \times |J|$$

::: details Exemplo (TODO)

[imagem]

Em $\R$:

$\int^8_0=3\times 1 + 2\times 2 + 4\times 2 + 1\times 3 = 3+4+8+3 = 18$

:::

### Funções escalares

Em geral, se, $f: I \to \R$, podemos encontrar estratégias para definir $\int_I f$.
Uma dessas estratégias é enquadrar a função no integral superior e inferior.
O tamanho das partições que escolhemos não é relevante, obtemos o mesmo resultado com partições de qualquer tamanho.

"$\int_I f \leq$ área deste função em escada"

"$\int_I f \geq$ área deste função em escada"

::: tip DEFINIÇÃO

Integral superior de $f$:

$$\int_I f \leq \overline{\int_I} f = \operatorname{int} \{\text{Integrais de todas as funções em cada por excesso}\}$$

Integral inferior de $f$

$$\int_I f \geq \underline{\int_I} f = \operatorname{sup} \{\text{Integrais de todas as funções em cada por defeito}\}$$

:::

Assim, conseguimos obter a definição de função integrável.

::: tip DEFINIÇÃO

$f: I \to \R$ diz-se integrável se $\overline{\int}_I f=\underline{\int}_I f$ e
nesse caso,

$$\int_I f := \overline{\int_I} f \left(\text{ou} \underline{\int_I} f\right)$$

:::

### Propriedades do Integral

- Se $f, g: I \to \R$ integráveis, então podemos separar somas e constantes

  $$\int_I (af+bg) = a\int_I f + b\int_I g, \quad a,b\in \R$$

- Se $f \leq g$, então $\int_I f \leq \int_I g$

- Se $I_1 \cup I_2$ é uma partição de $I$ então

  $$\int_I f= \int_{I_1} f + \int_{I_2} f$$

## Teorema de Fubini

Este teorema permite-nos calcular o valor de integrais em intervalos de $dim > 1$.

::: tip DEFINIÇÃO

Se $f: I \to \R$, $I$ intervalo em $\R^n$, for integrável em todas as variáveis, então, se $I = ]a_1,b_1[ \times \dots \times ]a_n,b_n[$

$$
\int_I f= \int^{b_n}_{a_n} \left( \int^{b_{n+1}}_{a_{n+1}} ... \left(\int^{b_1}_{a_1} f(x) \d x_1 \right) \dots \right) \d x_n
$$

:::

::: warning

**Não interessa a ordem das variáveis no contexto deste Teorema.**
As expressões abaixo são equivalentes, considerando
$I = ]0, 1[\times ] 2, 3[$.

$$\int_I f = \int^1_0 \left(\int^3_2 f \d y\right)\d x = \int^3_2 \left( \int^1_0 f \d x\right)\d y$$

:::

::: details Exemplos

Considerando

$$
\begin{array}{l c l}
I = ]0, 1[ \times ]0, 1[ & \text{e} & f(x,y) = x(x^2+y)^2
\end{array}
$$

calcule o integral de $f$ em $I$.

$$
\begin{aligned}
\int_I f &= \int^1_0 \left( \int^1_0 f(x,y) \d x\right) \d y \\
&= \int^1_0\left(\int^1_0 x(x^2+y)^2 \d x\right) \d y\\
&= \frac 12 \int^1_0 \left( \int^1_0 2x(x^2+y)^2 \d x\right) \d y \\
&= \frac 12 \int^1_0 \left[\frac{ \left(x^2+y\right)^3}{3}\right]^1_0 \d y\\
&= \frac 12 \int^1_0 \left( \frac{\left(1+y\right)^3}{3} - \frac{y^3}{3}\right)\d y \\
&= \frac 12 \left[\frac{\left(1+y\right)^4}{3\times 4} - \frac{y^4}{3\times 4}\right]^1_0\\
&= \frac 12 \left(\left(\frac{2^4}{12}- \frac{1}{12}\right)-\left(\frac{1}{12} - 0\right)\right)\\
&= \frac{1}{2} \cdot \frac{14}{12}\\
&= \frac{7}{12}\\
\end{aligned}
$$

---

Considerando

$$
\begin{array}{l c l}
I = ]0,1[ \times ]0, 2[
&\text{e}
&
f(x,y) =
\begin{cases}
x^3y & \text{se } x^2 < y <2x^2\\
0 & \text{c.c.}
\end{cases}
\end{array}
$$

calcule o integral de $f$ em $I$.

[imagem]

$$
\begin{aligned}
\int_I f &= \int^1_0 \left(\int^2_0 f\left(x,y\right) \d y\right)\d x \\
&= \int^1_0 \left(\int^{2x^2}_{x^2} x^3 y \d y\right)\d x\\
&=\int^1_0 \left[x^3 \frac{y^2}{2}\right]^{2x^2}_{x^2} \d x \\
&= \int^1_0 \left(x^3\frac{\left(2x^2\right)^2}{2} - \frac{x^3\left(x^2\right)^2}{2}\right) \d x\\
&=\int^1_0 2x^7 - \frac{x^7}{2} \d x \\
&= \int^1_0 \frac{3}{2} x^7 \d x \\
&= \frac{3}{2} \left[\frac{x^8}{8}\right]^1_0\\
&=\frac{3}{2} \cdot \left(\frac{1}{8} - 0\right) \\
&= \frac{3}{16}\\
\end{aligned}
$$

{red}(Porquê integrar primeiro em $y$ e depois em $x$?) Porque simplifica os cálculos.
Ambas as estratégias irão chegar à resposta correta, mas como podemos ver pela expressão abaixo,
teríamos de calcular o valor de dois integrais e não um.

[imagens]

$$
\int^1_0 \left( \int^{\sqrt{y}}_{\frac{\sqrt{y}}{2}} f\left(x,y\right) \d x\right)\d y + \int^2_1 \left( \int^1_{\frac{\sqrt y}{2}} f\left(x,y\right) \d x=\right) \d y
$$

:::

### Volume n-dimensional de um conjunto A

Este teorema permite-nos concluir a relação entre os integrais e o comprimento, área e volume.

- $\text{área} = \int \text{comprimento}$
- $\text{volume} = \int \text{área}$

Expandindo a definição de área, chegamos à função $1\!\!1$:

$$
\begin{aligned}
\text{área} &= \int^b_a \text{comprimento} (x) \d x \\
&= \int^b_a\left(f(x)-g(a)\right) \d x\\
&= \int^b_a\left(\int^{f(x)}_{g(x)} 1 \d y\right) \d x\\
&= \int 1\!\!1_A (x,y) \d x \d y
\end{aligned}
$$

$$
1\!\!1_A =
\begin{cases}
1&,&(x,y) \in A\\
0&,&(x,y)\notin A
\end{cases}
$$

::: tip DEFINIÇÃO

Assim, podemos definir o volume n-dimensional de um conjunto $A$ como

$$
\begin{array}{l l l}
\int 1\!\!1_A
& \text{em que}
&
1\!\!1_A =
\begin{cases}
1&,&(x,y) \in A\\
0&,&(x,y)\notin A
\end{cases}
\end{array}
$$

:::

::: details Exemplos

Qual o volume do conjunto abaixo?

$$
\{x> 0, y> 0, z > 0, x+y+z<1\}
$$

Neste tipo de exercícios, podemos escolher que variável devemos fixar primeiro.  
{orange}(**Esta escolha é muito importante porque nos pode simplificar bastante os cálculos, se escolhermos a variável certa.**)

$\text{Volume} = \int^1_0 \text{Área}(z) \d z$

Fixado $z$,

[imagem]

$$
\text{Restrições na figura: }
\begin{cases}
x>0\\
y>0\\
x+y<1-z
\end{cases}
$$

$$
\text{Área} = \int^{1-z}_0\left(\int^{1-z-x}_0 1 \d y\right) \d x
$$

$$
\begin{aligned}
\text{Volume} &= \int^1_0 \left(\int^{1-z}_0\left(\int^{1-z-x}_0 1 \d y\right) \d x\right) \d z\\
&=\int^1_0 \left(\int^{1-z}_0\left(1-z-x\right) \d x\right) \d z\\
&=\int^1_0 \left[\left(1-z\right)x - \frac{x^2}{2}\right]^{1-z}_0 \d z\\
&=\int^1_0 \left(\left(1-z\right)^2 - \frac{\left(1-z\right)^2}{2} - 0\right) \d z \\
&=\int^1_0 \frac{\left(1-z\right)^2}{2} \d z\\
&= \left[-\frac{\left(1-z\right)^3}{6}\right]^1_0\\
&= 0 - \left(-\frac{1}{6}\right) \\
&= \frac{1}{6}
\end{aligned}
$$

---

Qual o volume do conjunto abaixo?

$$
S=\{(x,y) \in \R^2, y> x^2, y < 1-x^2\}
$$

Fixando primeiro $x$:

[imagem]

$$
\begin{cases}
y=x^2\\
y=1-x^2
\end{cases}
\Leftrightarrow
\begin{cases}
1-x^2= x^2\\
y=x^2
\end{cases}
\Leftrightarrow
1=2x^2
\Leftrightarrow
x=\pm \frac{\sqrt 2}{2}
$$

$$
\begin{aligned}
\text{Área} &= \int^{\frac{\sqrt 2}{2}}_{-\frac{\sqrt 2}{2}} \left(\int^{1-x^2}_{x^2} 1 \d y\right)\d x\\
&=\int^{\frac{\sqrt 2}{2}}_{-\frac{\sqrt 2}{2}} 1-x^2-x^2 \d x\\
&=\int^{\frac{\sqrt 2}{2}}_{-\frac{\sqrt 2}{2}} 1-2x^2 \d x\\
&=\left[x-\frac{2x^3}{3}\right]^{\frac{\sqrt 2}{2}}_{-\frac{\sqrt 2}{2}}\\
&=\frac{\sqrt 2}{2} - \frac{2 \frac{2\sqrt 2}{8}}{3} - \left(-\frac{\sqrt 2}{2} - \frac{2 \left( -\frac{2\sqrt 2}{8}\right)}{3}\right)\\
&=\frac{\sqrt 2}{2} - \frac{\sqrt 2}{6} +\frac{\sqrt 2}{2} - \frac{\sqrt 2}{6}\\
&=\frac{2\sqrt{2}}{3}
\end{aligned}
$$

{red}(No entanto, podíamos tentar fixar primeiro $y$, mas rapidamente iríamos concluir que teríamos de calcular dois integrais em vez de um.)
Chegamos sempre à **mesma resposta**, com qualquer um dos métodos.

Então, fixando primeiro $y$:

[imagem]

$\int^1_0 \text{comprimento}(y) \d y$

- Se $0 < y < \frac{1}{2}$, então $y = x^2 \Rightarrow x = \pm \sqrt{y}$  
  $\text{comprimento}(y) = \int^{\sqrt{y}}_{-\sqrt{y}} 1 \d x$
- Se $\frac{1}{2} < y < 1$, então $y = 1 - x^2 \Rightarrow x = \pm \sqrt{1-y}$  
  $\text{comprimento}(y) = \int^{\sqrt{1-y}}_{-\sqrt{1-y}} 1 \d x$

$$
\begin{aligned}
\text{Área} & =\int _{0}^{\frac{1}{2}}\left(\int _{-\sqrt{y}}^{\sqrt{y}} 1\d x\right) \d y+\int _{\frac{1}{2}}^{1}\left(\int _{-\sqrt{1-y}}^{\sqrt{1-y}} 1\d x\right) \d y\\
 & =\int _{0}^{\frac{1}{2}}\left( 2\sqrt{y}\right) \d y+\int _{\frac{1}{2}}^{1}\left( 2\sqrt{1-y}\right) \d y\\
 & =\left[\frac{2y^{\frac{3}{2}}}{\frac{3}{2}}\right]_{0}^{\frac{1}{2}} +\left[ -\frac{2( 1-y)^{\frac{3}{2}}}{\frac{3}{2}}\right]_{\frac{1}{2}}^{1}\\
 & =\left( 2\cdot \frac{2}{3} \cdot \left(\frac{1}{2}\right)^{\frac{3}{2}} -0\right) +\left( 0-\left( -2\cdot \frac{2}{3} \cdot \left(\frac{1}{2}\right)^{\frac{3}{2}}\right)\right)\\
 & =\frac{4}{3} \cdot \frac{1}{2\sqrt{2}} +\frac{4}{3} \cdot \frac{1}{2\sqrt{2}}\\
 & =\frac{2}{3\sqrt{2}} +\frac{2}{3\sqrt{2}}\\
 & =\frac{2\sqrt{2}}{3}
\end{aligned}
$$

---

Qual o volume do conjunto abaixo?

$$
C = \{0 < z < 1 \land x^2+y^2 < z^2\}
$$

[imagem]

Fixando primeiro $z$:

$\text{Volume} = \int^1_0 \text{Área}(z) \d z$

[imagem]

$$
\begin{darray}{l}
\text{Área}(z) = \int^z_{-z}\left(\int^{\sqrt{z^2-x^2}}_{-\sqrt{z^2-x^2}} 1 \d y \right) \d x\\
\text{Volume} = \int^1_0\left( \int^z_{-z}\left(\int^{\sqrt{z^2-x^2}}_{-\sqrt{z^2-x^2}} 1 \d y \right) \d x \right) \d z
\end{darray}
$$

---

Qual o volume de $\{0 \leq z \leq x^2+y^2 \land 0 \leq x,y \leq 1\}$?

[imagem]

Fixando $x$ primeiro, em que $0 \leq x \leq 1$.

[imagem]

$0 \leq z \leq x^2+y^2 \quad, \quad 0 \leq y \leq 1$

Fixando de seguida $y$ e depois $g$, obtemos o integral:

$$
\text{Volume} = \int^1_0\left( \int^1_0 \left( \int^{x^2+y^2}_0 1 \d z \right) \d y \right) \d x
$$

---

{yellow}(**Existem mais exemplos nos slides da aula 20**)

:::

---

Slides:

- [Aula 17](https://drive.google.com/file/d/1zWmylKPZ1ub2HKk5qxAdc1ekN1inU9Rg/view?usp=sharing)
- [Aula 18](https://drive.google.com/file/d/19L8f37Zd1nHnM2c0y1qwz1wjLu_zqCHT/view?usp=sharing)
- [Aula 19](https://drive.google.com/file/d/17ucuVmFr2fmGZ_atbuyiA25LInuRFvJL/view?usp=sharing)
- [Aula 20](https://drive.google.com/file/d/1rEFyN10GYhX2zcyi_9JCN405ilbF3TJP/view?usp=sharing)

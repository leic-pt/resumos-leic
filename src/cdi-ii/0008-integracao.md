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

[imagem]

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

---

Slides:

- [Aula 17](https://drive.google.com/file/d/1zWmylKPZ1ub2HKk5qxAdc1ekN1inU9Rg/view?usp=sharing)
- [Aula 18](https://drive.google.com/file/d/19L8f37Zd1nHnM2c0y1qwz1wjLu_zqCHT/view?usp=sharing)

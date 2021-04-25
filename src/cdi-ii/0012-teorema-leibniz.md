---
description: Teorema de Leibniz e Teorema Fundamental do Cálculo
---

# TFC e Teorema de Leibniz

[[toc]]

## Teorema Fundamental do Cálculo

Relembrando o TFC de CDI 1, que nos vai ser útil em conjunto com o Teorema de Leibniz.

::: tip TEOREMA

Seja

$$
F(x) = \int^{b(x)}_{a(x)} f(t) \d t
$$

Então,

$$
F'(x) = f(b(x)) \cdot b'(x) - f(a(x)) \cdot a'(x)
$$

:::

## Teorema de Leibniz

Então, vejamos o Teorema de Leibnitz, que nos permite calcular a derivada de uma função do tipo

$$
F(t) = \int^b_a f(x,t) \d x
$$

em que não conseguimos facilmente primitivar $f(x,t)$.

::: tip TEOREMA

Seja $f: \R^2 \to \R, C^1$ e $F: \R \to \R$.

Sabendo que

$$
F(t) = \int^b_a f(x,t) \d x
$$

então temos que

$$
F'(t) = \int^b_a \frac{\partial f}{\partial t}(x,t) \d x
$$

:::

::: details Exemplo

$$
F(t) = \int^3_0 e^{-tx^2}\d x
$$

O problema é que $e^{-tx^2}$ não tem primitiva que se consiga escrever explicitamente.

Qual é o valor de $F'(0)$?

Recorrendo então ao Teorema de Leibniz, podemos escrever

$$
\begin{aligned}
F'(t) &= \frac{\d F}{\d t} (t)\\
&= \frac{\d}{\d t} \left(\int^3_0 e^{-tx^2} \d x \right)\\
&= \int^{3}_0 \frac{\partial}{\partial t}\left(e^{-tx^2}\right) \d x\\
&= \int^{3}_0 \left(-x^2 e^{-tx^2}\right) \d x
\end{aligned}
$$

Então, podemos agora calcular o valor de $F'(0)$:

$$
F'(0) = - \int^3_0 x^2 = - \left[\frac{x^3}{3} \right]^3_0 = -9
$$

:::

Outra aplicação do {orange}(**Teorema de Leibnitz**) é aplicá-lo juntamente com o {green}(**Teorema Fundamental do Cálculo**) e com a [Regra da Cadeia](./0005-derivada-composta.md#formula-da-cadeia-chain-rule).

Sabendo que

$$
H(x) = \int^{b(x)}_{a(x)} f(x,y) \d y
$$

podemos obter a derivada desta função através da seguinte fórmula:

$$
H'(x) = f(x, b(x)) \cdot b'(x) - f(x, a(x)) \cdot a'(x) + \int^{b(x)}_{a(x)} \frac{\partial f}{\partial x}(x,y) \d y
$$

{brown}(_A demonstração desta fórmula encontra-se nos slides da aula 26._)

::: details Exemplo (correspondente ao exercício 9 da ficha 7)

Seja o conjunto $V_t$ e a função $F(t)$

$$
V_t = \{(x,y,z) \in \R^3: 1 \leq x^2 + y^2 \leq t \quad, \quad 0 \leq z \leq 1 \quad,\quad y>0\}
$$

$$
F(t)=\int\int\int_{V_t} \frac{e^{t(x^2+y^2)}}{x^2+y^2} \d x \d y \d z
$$

Qual o valor de $F'(4)$?

Começamos por identificar o tipo de sólido e se é preciso efetuar transformação de coordenadas.  
Neste caso, como $V_t$ é de revolução, usamos as [coordenadas cilíndricas](./0010-integracao-mudanca-var.md#coordenadas-cilindricas).

$$
\begin{array}{ll}
\begin{cases}
x = r \cos \theta\\
y = r \sin \theta\\
z = z
\end{cases}
&
|\det Dg| = r
\end{array}
$$

Chegamos então às seguintes restrições:

$$
\begin{darray}{c}
1 \leq x^2+y^2 \leq t \Leftrightarrow 1 \leq r^2 \leq t \Leftrightarrow 1 \leq r \leq \sqrt{t}\\
0 \leq z \leq 1\\
y > 0 \Leftrightarrow r \sin \theta > 0 \Leftrightarrow \sin \theta 0 > 0\Leftrightarrow \theta \in ]0, \pi[
\end{darray}
$$

Podemos agora escrever $F(t)$ em coordenadas cilíndricas:

$$
\begin{aligned}
F(t)&= \int^{\pi}_0 \int^{\sqrt{t}}_1 \int^1_0 \frac{e^{tr^2}}{r^2} \cdot r \d z \d r \d \theta\\
&= \int^{\pi}_0 \int^{\sqrt{t}}_1 \frac{e^{tr^2}}{r} \d r \d \theta\\
&= \int^{\sqrt{t}}_1 \int^{\pi}_0 \frac{e^{tr^2}}{r} \d \theta \d r\\
&= \int^{\sqrt{t}}_1 \frac{e^{tr^2}}{r} \d r
\end{aligned}
$$

Chegamos um integral cuja função no interior não é fácil de primitivar.  
Podemos então recorrer ao {orange}(**Teorema de Leibnitz**), ao {green}(**Teorema Fundamental do Cálculo**) e
à [Regra da Cadeia](./0005-derivada-composta.md#formula-da-cadeia-chain-rule) para determinar a expressão de $F'(t)$:

$$
\begin{aligned}
F'(t) &= \overbrace{\frac{\pi e^{tr^2}}{r} |_{r=\sqrt{t}} \cdot (\sqrt{t})'}^{\text{TFC}}
+ \overbrace{\int^{\sqrt t}_{1} \frac{\partial }{\partial t} \frac{\pi e^{tr^2}}{r} \d r}^{\text{Leibnitz}}\\
&=\frac{\pi e^{t^2}}{\sqrt t} \cdot \frac{1}{2\sqrt t} + \int^{\sqrt t}_1 \frac{r^2 e^{tr^2}}{r} \cdot \pi \d r
\end{aligned}
$$

Finalmente, determinamos o valor de $F(4)$:

$$
\begin{aligned}
F'(4) &= \frac{\pi e^{16}}{8} + \pi \int^2_1 r e^{4r^2}\d r\\
&= \frac{\pi e^{16}}{8} + \frac{\pi}{8} \int^2_1 8r e^{4r^2}\d r\\
&= \frac{\pi e^{16}}{8} + \frac{\pi}{8} \left[e^{4r^2} \right]^2_1\\
&= \frac{\pi e^{16}}{8} + \frac{\pi}{8} \left(e^{16} - e^4 \right)\\
&= \frac{\pi}{8} \left(2e^{16} - e^4 \right)
\end{aligned}
$$

:::

---

Slides:

- [Aula 26](https://drive.google.com/file/d/1Sq4fgIJBi4R2-wvzd9jdUX_8AMR7mvGu/view?usp=sharing)

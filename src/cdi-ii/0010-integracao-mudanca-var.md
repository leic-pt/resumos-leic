---
description: Mudança de Variáveis de Integração
---

# Mudança de Variáveis de Integração

[[toc]]

## Transformação de Coordenadas

Se quisermos efetuar uma mudança de variável num integral em $\R^n$,
precisamos de compensar a nossa alteração,
[tal como fazíamos em $\R$](https://www.notion.so/diogocorreia/Primitiva-o-por-substitui-o-540b2c1b4ebb48f293a9b8dc3856f71f).

::: tip DEFINIÇÃO

Sendo:

- $g: U \subset \R^n \to V \subset \R^n$, com $U,V$ abertos
- $g$ é injetiva
- $g$ é de classe $C^1$
- $det D_g \ne 0$
- $(x_1, \dots, x_n) = g(y_1, \dots, y_n)$

Temos que:

$$
\int_V f(x_1,\dots,x_n) \d x_1 \dots \d x_n = \int_U f(g(y_1,\dots,y_n))|\det Dg| \d y_1 \dots \d y_n
$$

:::

Para isso, multiplicamos o nosso integral pelo {orange}(**determinante da derivada da função**) que representa a nossa mudança de variável.

$$
\d x \d y = |\det D\varphi (x', y')| \d x' \d y'
$$

Por exemplo, considerando {purple}($\varphi(r,\theta) = (r\cos \theta, r \sin \theta)$), temos que

$$
D\varphi (r,\theta)=
\begin{bmatrix}
\cos \theta & -r \sin \theta\\
\sin \theta & r \cos \theta
\end{bmatrix}
$$

$$
|\det D\varphi (x', y')| = | r\cos^2 \theta + r \sin^2 \theta = r
$$

$$
\d x \d y = |\det D\varphi (r, \theta)| \d r \d \theta = r \d r \d \theta
$$

## Coordenadas Polares

{green}(**Coordenadas polares**) são representadas através de um raio e um ângulo, em vez de $x$ e $y$.  
Isto permite-nos facilmente trabalhar com áreas curvas.

Tomando como exemplo:

$$
A = \{ (x,y) \in \R^2: 1\leq x^2+y^2 \leq 4 \quad,\quad x > 0, y> 0\}
$$

[imagem] (meter ambas as figuras lado a lado)

Podemos converter esta figura para {green}(**coordenadas polares**), o que nos dá um quadrado.

$$
\begin{cases}
x = r \cos \theta\\
y = r \sin \theta
\end{cases}
$$

$$
A=\{ 1 \leq r \leq 2, 0 < \theta < \frac{\pi}{2}\}
$$

Nas variáveis $(r, \theta)$,
$A = [1,2] \times ]0, \frac{\pi}{2}[$

No entanto, temos de ter atenção para não nos esquecermos de compensar esta mudança com o determinante da derivada,
que já foi calculado acima.

$$
|\det D \varphi (r, \theta)| = r
$$

E finalmente, calculamos a área da figura.

$$
\begin{aligned}
\int_A 1 \d x \d y &= \int^{\frac{\pi}{2}}_0 \int^2_1 1 \cdot r \d r \d \theta\\
&= \int^{\frac{\pi}{2}}_0 \left[\frac{r^2}{2} \right]^2_1 \d \theta\\
&= \int^{\frac{\pi}{2}}_0 \left(2- \frac{1}{2} \right) \d \theta\\
&= \frac{3}{2} \cdot \frac{\pi}{2}\\
&= \frac{3\pi}{4}
\end{aligned}
$$

::: details Exemplo - Calcular Área de um Círculo

Podemos usar as coordenadas polares para calcular a área de um círculo de raio $R$.

[imagem]

$$
\begin{cases}
x = r \cos \theta\\
y = r \sin \theta
\end{cases}
$$

$$|\det Dg| = r$$

Temos de verificar as várias condições para efetuar a mudança de variável.

- Inicialmente temos $0 \leq r \leq R$, $0 \leq \theta \leq 2\pi$
- $r = 0 \implies \det Dg = 0$, então tomamos $0 < r \leq R$
- Tomamos $0 < \theta < 2\pi$ para não ter problemas com a injetividade

$$
\begin{aligned}
\text{Área} &= \int_{\text{circulo}} 1 \d x \d y\\
&= \int_{]0,R] \times ]0, 2 \pi[} 1 \times r \d r \d \theta\\
&= \int^R_0\left(\int^{2\pi}_0 r \d \theta \right) \d r\\
&= \int^R_0 2\pi r \d r\\
&= \left[2 \pi \frac{r^2}{2} \right]^R_0\\
&= \pi R^2
\end{aligned}
$$

:::

---

Slides:

- [Aula 22](https://drive.google.com/file/d/123sB1ctUsyl4rnA_0A8Yipk42RCJUlny/view?usp=sharing)

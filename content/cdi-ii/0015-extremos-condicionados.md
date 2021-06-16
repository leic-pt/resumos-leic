---
title: Extremos Condicionados. Integrais Campos Escalares
description: Extremos Condicionados. Método dos Multiplicadores de Lagrange. Integrais de Campos Escalares em Variedades. Produto Externo.
path: /cdi-ii/extremos-condicionados
type: content
---

# Extremos Condicionados. Integrais Campos Escalares

```toc

```

## Método dos Multiplicadores de Lagrange

Seja $M$ uma variedade de $\dim m \subset \R^n$, e uma função $f$:

$$
\begin{array}{lll}
M = \{x \in \R^n: F(x) = 0\} & F: \R^n \to \R^{n-m} & f: \R^n \to \R
\end{array}
$$

{green}(**Como calcular máximo (ou mínimo) de $f$ em $M$?**)

Seja $x_0$ um máximo local em $M$.  
Sabemos que $\nabla f(x_0)$ pertence ao [espaço normal](./0014-variedades.md#espaco-tangente-e-espaco-normal) de $M$, pelo que, sendo

$$
\begin{darray}{c}
F=(F_1, F_2, \dots, F_{n-m})\\
\text{linhas de } DF(x_0) = \nabla F_1(x_0), \nabla F_2(x_0), \dots, \nabla F_{n-m}(x_0)
\end{darray}
$$

Existem $\lambda_1, \dots, \lambda_{n-m} \in \R$ tais que

$$
\nabla (f-\lambda_1 F_1 - \lambda_2 F_2 - \dots - \lambda_{n-m} F_{n-m})(x_0) = 0
$$

isto é, tais que **$x_0$ é ponto crítico** de $f - \lambda_1 F_1 - \dots- \lambda_{n-m} F_{n-m}$.

:::tip[DEFINIÇÃO]

Seja $M$ uma variedade $\dim m$, e $f: M \to \R$ de classe $C^1$,

$$
M = \{x \in \R^n: F_1(x) = 0, \dots, F_{n-m}(x) = 0 \}
$$

$a$ é ponto de máximo ou mínimo se e só se

$$
\begin{cases}
\nabla(f - \lambda_1 F_1 - \dots - \lambda_{n-m} F_{n-m}) (a) = 0\\
F_1(a) = 0\\
\quad \vdots\\
F_{n-m}(a) = 0
\end{cases}
$$

tal que $\lambda_j$ são {orange}(**Multiplicadores de Lagrange**).

:::

:::details[Demonstração]

Seja $\gamma$ caminho em $M$ e $x_0$ um máximo local em $M$
com $\gamma(0) =x_0$, em que $f(\gamma(t))$ atinge o máximo em $t=0$.

$$
\frac{\d}{\d t} f(\gamma(t)) \big|_{t=0} = 0
$$

$$
\begin{array}{ll}
\nabla f(\gamma (0)) \cdot \gamma'(0) = 0 & \nabla f(x_0) \cdot \gamma'(0) = 0 \forall \gamma \text{ caminho com } \gamma(0) = 0
\end{array}
$$

$$
\implies \nabla f(x_0) \in (T_{x_0}M)^{\perp} = \mathcal{L}\{\text{linhas de } DF(x_0)\}
$$

$$
\begin{array}{l}
F=(F_1, F_2, \dots, F_{n-m})\\
\text{linhas de } DF(x_0) = \nabla F_1(x_0), \nabla F_2(x_0), \dots, \nabla F_{n-m}(x_0)
\end{array}
$$

$\implies$ existem $\lambda_1, \dots, \lambda_{n-m} \in \R$ com

$$
\nabla f(x_0) = \lambda_1 \nabla F_1(x_0) + \dots + \lambda_{n-m} \nabla F_{n-m}(x_0)
$$

$$
\nabla (f-\lambda_1 F_1 - \lambda_2 F_2 - \dots - \lambda_{n-m} F_{n-m})(x_0) = 0
$$

Conclusão: existem $\lambda_1, \dots, \lambda_{n-m} \in \R$ tais que $x_0$ é ponto crítico de
$f - \lambda_1 F_1 - \dots- \lambda_{n-m} F_{n-m}$

:::

:::details[Exemplos]

Considerando $M$, uma esfera de raio 1, e a função $f$

$$
\begin{array}{ll}
M= \{x^2+y^2+z^2=1\} & f(x,y,z) = z
\end{array}
$$

**Mostre que $f$ tem máximo $(0,0,1)$ e mínimo $(0,0,-1)$ em $M$.**

Podemos escrever $M$ como o conjunto de nível: $F(x,y,z) = x^2+y^2+z^2-1$

Assim, pelo {orange}(**método dos multiplicadores de Lagrange**):

$$
\begin{array}{l}
\begin{cases}
\nabla(f - \lambda F) = 0 \\
F=0
\end{cases}\\
\Leftrightarrow
\begin{cases}
\nabla(z-\lambda(x^2+y^2+z^2-1)) = 0\\
x^2+y^2+z^2=1
\end{cases}\\
\Leftrightarrow
\begin{cases}
-2\lambda x = 0\\
-2 \lambda y = 0\\
1-2\lambda z = 0\\
x^2+y^2+z^2=1
\end{cases}
\end{array}
$$

Se $\lambda = 0$, então $1-2\lambda z = 0 \Leftrightarrow 1=0$, que é impossível.  
Logo $\lambda\ne 0$, pelo que:

$$
\begin{cases}
y = 0 \text{ e } x = 0\\
2\lambda z = 1 \implies \lambda = \pm \frac{1}{2}\\
z^2=1 \implies z=\pm 1
\end{cases}
$$

Soluções do sistema:

$$
\begin{array}{ll}
(x,y,z) = (0,0,1) & \lambda = \frac{1}{2}\\
(x,y,z) = (0,0,-1) & \lambda = -\frac{1}{2}
\end{array}
$$

O critério indica os candidatos a máximo ou mínimo.

Como nos encontramos numa esfera, $(0,0,1)$ será o máximo e $(0,0,-1)$ será o mínimo.

:::

### Justificar existência de extremos

O {orange}(**método dos multiplicadores de Lagrange**) ajuda-nos a encontrar os candidatos a máximo e mínimo, mas
não justifica a sua existência.

Podemos assim recorrer ao {yellow}(**Teorema de Weierstrass**):

$f: M \to \R$, $M$ limitado fechado (compacto), $f$ contínua.

Então $f$ tem máximo e mínimo em $M$.

Ficamos assim com dois passos que temos de fazer quando queremos
encontrar extremos condicionados:

1. Justificar a existência de máximo (ou mínimo) - {yellow}(**Teorema de Weierstrass**).
2. Utilizar um critério para encontrar os candidatos a máximo ou mínimo - {orange}(**método dos multiplicadores de Lagrange**).

:::details[Exemplos]

**Queremos encontrar o paralelipípedo com maior volume de entre aqueles que satisfazem $x+y+z = 1$, $x,y,z \geq 0$**

Para isso, temos de maximizar o volume $V = xyz$, com $F=x+y+z-1=0$.

1. Será que existe máximo?  
   Sabemos que $V = xyz$ é contínua

   $$
   \begin{cases}
   x+y+z=1\\
   x,y,z\geq 0
   \end{cases}
   $$

   $M$ é fechado e limitado

   Então, pelo Teorema de Weierstrass, $V$ tem máximo em $M$.

2. $$
   \begin{array}{l}
   \begin{cases}
   \nabla(V-\lambda F) = 0\\
   F=0 \Leftrightarrow x+y+z=1
   \end{cases}
   \implies
   \begin{cases}
   \nabla(xyz-\lambda(x+y+z-1))=0\\
   x+y+z=1
   \end{cases}\\
   \implies
   \begin{cases}
   yz-\lambda = 0\\
   xz-\lambda = 0\\
   xy-\lambda = 0\\
   x+y+z=1
   \end{cases}
   \implies
   \begin{cases}
   yz=\lambda\\
   xz=yz=xy\\
   x+y+z=1
   \end{cases}
   \end{array}
   $$

   Será que interessa $x=0 \land y=0 \land z=0$? Não, porque nesse caso $V=0$.

   $$
   \begin{cases}
   xz=yz\implies x=y\\
   yz=xy\implies z=x\\
   x+y+z=1
   \end{cases}
   \implies
   \begin{cases}
   x=y\\
   z=x\\
   3x=1
   \end{cases}
   \implies
   \begin{cases}
   x=\frac{1}{3}\\
   y=\frac{1}{3}\\
   z=\frac{1}{3}
   \end{cases}
   $$

   Só há um candidato a máximo. Como sabemos que ele existe, o máximo tem de ser atingido em $(\frac{1}{3},\frac{1}{3},\frac{1}{3})$.

---

**Quais os pontos que estão na interseção do plano $x+z=1$ com $z = x^2+y^2$ e que estão mais próximos da origem?**

$$
M = \{(x,y,z) \in \R^3 : x+z-1 = 0, x^2+y^2-z = 0 \}
$$

Como minimizar a distância é a mesma coisa que minimizar distância ao quadrado, podemos encontrar
o mínimo da seguinte função na variedade $M$:

$$
f(x,y,z) = (\text{distância à origem})^2 = (\sqrt{x^2+y^2+z^2})^2 = x^2+y^2+z^2
$$

Pelo {orange}(**método dos multiplicadores de Lagrange**):

$$
\begin{array}{l}
\begin{cases}
\nabla(f-\lambda_1 F_1 - \lambda_2 F_2) = 0\\
F_1=0\\
F_2=0
\end{cases}\\
\Rightarrow
\begin{cases}
\nabla(x^2+y^2+z^2-\lambda_1 (x+y-1) - \lambda_2 (x^2+y^2-z)) = 0\\
x+z=1\\
z=x^2+y^2
\end{cases}\\
\Rightarrow
\begin{cases}
2x-\lambda_1-\lambda_2\cdot 2x=0\\
2y-2\lambda_2 y = 0\\
2z-\lambda_1 + \lambda_2 = 0\\
x+z=1\\
z=x^2+y^2
\end{cases}
\end{array}
$$

Se $y=0$,

$$
\begin{cases}
2x-\lambda_1-\lambda_2\cdot 2x=0\\
2z-\lambda_1 + \lambda_2 = 0\\
x+z=1\\
z=x^2+y^2
\end{cases}
$$

$x^2=1-x\implies x^2+x-1=0 \implies x= \frac{-1 \pm \sqrt{5}}{2}$  
$z=1-x=1-\frac{-1\pm \sqrt{5}}{2} = \frac{3}{2} \mp \frac{\sqrt{5}}{2}$

Pontos com $y=0$: $(\frac{-1 \pm \sqrt{5}}{2}, 0, \frac{3 \mp \sqrt{5}}{2})$

Se $\lambda_2 = 1$

$$
\begin{cases}
2x-\lambda_1-2x=0\\
2z-\lambda_1 + 1 = 0\\
x+z=1\\
z=x^2+y^2
\end{cases}
\Rightarrow
\begin{cases}
\lambda_1 = 0\\
2z+1=0\\
x+z=1\\
z=x^2+y^2
\end{cases}
\Rightarrow
\begin{cases}
\lambda_1 = 0\\
z=-\frac{1}{2}\\
x+z=1\\
\textcolor{#C8553D}{x^2+y^2=-\frac{1}{2}}
\end{cases}
$$

É impossível (a soma do quadrado de dois números nunca pode ser negativa), logo os únicos candidatos são:

$(\frac{-1 - \sqrt{5}}{2}, 0, \frac{3 + \sqrt{5}}{2})$ e $(\frac{-1 + \sqrt{5}}{2}, 0, \frac{3 - \sqrt{5}}{2})$

$f$ (ponto):

- $\left(\frac{-1 - \sqrt{5}}{2} \right)^2 + 0^2 + \left(\frac{3 + \sqrt{5}}{2} \right)^2 = \frac{1+2\sqrt{5} + 5}{4} + \frac{9+6\sqrt{5} + 5}{4}$

- $\left(\frac{-1 + \sqrt{5}}{2} \right)^2 + 0^2 + \left(\frac{3 - \sqrt{5}}{2} \right)^2 = \frac{1-2\sqrt{5} + 5}{4} + \frac{9-6\sqrt{5} + 5}{4}$

O último tem a menor imagem

Logo o ponto mais próximo da origem é $\left(\frac{-1 + \sqrt{5}}{2}, 0, \frac{3 - \sqrt{5}}{2} \right)$

Pelo Teorema de Weierstrass podemos também afirmar que este ponto é mesmo um mínimo, pois:

- $M$ é limitado
- O mínimo de $f$ em $M$ está de certeza dentro de uma bola de raio $R$ grande

Então, $M \cap \overline{B_R(0)}$ fechado, limitado e tem o mínimo lá dentro.

Logo, pelo Teorema de Weierstrass:

- $f$ tem mínimo em $M \cap B_R(0)$
- $f$ tem mínimo em $M$

:::

## Integrais de Campos Escalares em Variedades

Dada uma variedade $M$ e $f: M \to \R$, como podemos definir $\int_M f$?

### Para dim M = 1

:::tip[DEFINIÇÃO]

Considerando $\dim M = 1$ e seja $M$ um caminho em $\R^2$, podemos escrever que

$$
\int_M f \d \gamma = \int^b_a f(g(t)) \cdot ||g'(t)|| \d t
$$

:::

A estes integrais chamamos {orange}(**Integral de um campo escalar numa variedade de $\dim 1$**) ou
{orange}(**Integral de linha de um campo escalar**).

:::details[Exemplos]

Seja a circunferência $x^2+y^2=1$.

**Qual o perímetro (comprimento) da circunferência?**

Começamos por parametrizar esta variedade:

$$
\begin{array}{cc}
g(t) = (\cos t, \sin t) & t \in ]0, 2\pi[\\
g'(t) = (-\sin t, \cos t) & ||g'(t)|| = \sqrt{\sin^2t + \cos^2t} = 1
\end{array}
$$

Assim, basta-nos calcular o integral do campo escalar:

$$
\int_{x^2+y^2=1} 1 \d \gamma = \int^{2\pi}_{0} 1 \cdot ||g'(t)|| \d t =
\int^{2\pi}_{0} 1 \d t = 2\pi
$$

---

**Considere o segmento que une $(1,0,1)$ a $(0,1,0)$.**  
**Sabe-se que a densidade de massa deste segmento é dada por $z^2$.**
**Qual a massa do segmento?**

Começemos por parameterizar o segmento, que podemos fazer
através de da expressão vetorial de uma reta.

$$
\begin{array}{ll}
\begin{aligned}
g(t) &= (1,0,1) + t(\overbrace{(0,1,0) - (1,0,1)}^v)\\
&=(1,0,1) + t(-1,1,-1)\\
&= (1-t, t, 1-t)
\end{aligned} & t \in [0,1]\\
\\
g'(t) = (-1,1,-1) & ||g'(t)|| = \sqrt 3
\end{array}
$$

$$
\text{Massa do segmento} = \int_{\text{segmento}} \text{densidade de massa}
$$

$$
\begin{aligned}
\text{Massa} &= \int_{\text{segmento}} z^2 \d \gamma\\
&= \int^1_0 (1-t)^2 \cdot \sqrt{3} \d t\\
&= \sqrt{3} \left[- \frac{(1-t)^3}{3} \right]^1_0\\
&= \sqrt{3} \left(0 - \left(-\frac{1}{3} \right) \right)\\
&= \frac{\sqrt{3}}{3}
\end{aligned}
$$

:::

### Para dim M > 1

:::tip[DEFINIÇÃO]

Considerando $\dim M \geq 1$ e seja $M$ um caminho em $\R^n$, podemos escrever que

$$
\int_M f \d \gamma = \int^b_a f(g(t)) \cdot \sqrt{|det Dg^T Dg|} \d t
$$

$Dg^T$ é a matriz transposta de $Dg$

:::

{green}(Devido às propriedades da matriz transposta, sabemos sempre que $Dg^T Dg$ é uma matriz simétrica.)

Podemos observar que se $m=1$, vamos ter a definição anterior:

$$
\begin{array}{ll}
Dg(t) = g'(t) & Dg^T \cdot Dg = g'(t) \cdot g'(t) = ||g'(t)||^2
\end{array}
$$

:::details[Exemplo]

**Considerando a variedade $P$, correspondente a um parabolóide:**

$$
P = \{(x,y,z) \in \R^3: x^2+y^2=z, z < 1\}
$$

**Qual a área de $P$?**

Podemos utilizar coordenadas cilíndricas:

$$
\begin{cases}
x=r \cos \theta\\
y=r \sin \theta\\
z=z=r^2
\end{cases}
$$

E assim parametrizar:

$$
\begin{array}{ll}
g(r, \theta) = (r \cos \theta, r \sin \theta, r^2) & \theta \in ]0, 2 \pi[, r \in ]0, 1[
\end{array}
$$

$$
\int_P 1 \d S = \int^{2 \pi}_0 \int^1_0 1 \cdot \sqrt{|\det (Dg^t Dg ) | } \d r \d \theta
$$

$$
Dg(r, \theta) = \begin{bmatrix}
\cos \theta & - r \sin \theta\\
\sin \theta & r \cos \theta\\
2 r & 0
\end{bmatrix}
$$

$$
Dg^t \cdot Dg = \begin{bmatrix}
\cos \theta & \sin \theta & 2r\\
-r \sin \theta & r \cos \theta & 0
\end{bmatrix}
\begin{bmatrix}
\cos \theta & - r \sin \theta\\
\sin \theta & r \cos \theta\\
2 r & 0
\end{bmatrix}
=
\begin{bmatrix}
1+4r^2 & 0
0 & r^2
\end{bmatrix}
$$

$$
\begin{array}{ll}
\det = (4r^2 + 1 ) r^2 & \sqrt{\det} = r \sqrt{4r^2 +1}
\end{array}
$$

$$
\begin{aligned}
\int_P 1 \d S &= \int^{2 \pi}_0 \int^1_0 1 \cdot r \sqrt{4r^2 + 1} \d r \d \theta\\
&= \int^{2 \pi}_0 \int^1_0 \frac{1}{8} \cdot 8 r \sqrt{4r^2 + 1} \d r \d \theta\\
&= \frac{1}{8} \int^{2\pi}_0 \left[\frac{(4r^2 + 1)^{\frac{3}{2}}}{\frac{3}{2}} \right]^1_0 \d \theta\\
&= \frac{1}{8} \int^{2\pi}_0 \frac{2}{3} (5^{\frac{3}{2}} - 1) \d \theta\\
&= \frac{1}{8} \cdot \frac{2}{3} \cdot 2\pi \cdot (5^{\frac{3}{2}} - 1)\\
&= \frac{\pi}{6} (5^{\frac{3}{2}} - 1)
\end{aligned}
$$

:::

### Produto Externo de Dois Vetores

Podemos definir o produto externo de $u, v \in \R^3$, considerando
$u = (u_1, u_2, u_3)$,
$v = (v_1, v_2, v_3)$ e
$e_1, e_2, e_3$ vetores da base canónica, como:

$$
u \times v = \det \begin{bmatrix}
e_1 & e_2 & e_3\\
u_1 & u_2 & u_3\\
v_1 & v_2 & v_3
\end{bmatrix}
$$

Efetuando a [regra de Laplace](https://en.wikipedia.org/wiki/Determinant) na primeira linha:

$$
\begin{array}{l}
= (u_2 v_3 - v_2 u_3) e_1 - (u_1v_3 - v_1u_3) e_2 + (u_1 v_2 - v_1u_2) e_3\\
= (u_2 v_3 - v_2 u_3, -u_1 v_3 + v_1u_3 , u_1v_2-v_1u_2)
\end{array}
$$

**Propriedades do produto externo**:

- $u \times v$ é ortogonal a $u$ e $v$
- $u \cdot (v \times w) = v\cdot (w \times u)$
- $u \times (v \times w ) = (u \cdot w) v - (u \cdot v) w$

Alternativamente ao fator de escala $\sqrt{ | \det (Dg^T Dg) | }$ usado acima, podemos usar o
produto externo. Assim,

$$
\sqrt{ | \det \left(Dg^t Dg \right) | } = \left|\left| \frac{\partial g}{\partial u} \times \frac{\partial g}{\partial v} \right|\right|
$$

:::details[Exemplo]

Considerando a variedade

$S = \{x^2 + y^2 = z^2 + 1, 0 < z < 1\}$

Sabe-se que a densidade de massa é $\phi (x,y,z) = \frac{1}{\sqrt{2z^2+1}}$

**Qual a massa de $S$?**

A massa é dada por $\int_S \phi$

Começamos por parametrizar $S$, usando coordenadas cilindricas:

$$
\begin{cases}
x=r \cos \theta\\
y=r \sin \theta\\
z=z
\end{cases}
$$

$$
\begin{array}{lll}
r^2 = z^2 + 1 & r = \sqrt{z^2 + 1} & 0 < z < 1
\end{array}
$$

$$
g(\theta, z) = (\sqrt{z^2 + 1} \cos \theta, \sqrt{z^2+1} \sin \theta, z)
$$

$$
Dg (\theta, z) = \begin{bmatrix}
-\sqrt{z^2+1} \sin \theta & \frac{z}{\sqrt{z^2 + 1}}\cos \theta\\
\sqrt{z^2+1} \cos \theta & \frac{z}{\sqrt{z^2 + 1}}\sin \theta\\
0 & 1
\end{bmatrix}
$$

$$
\begin{aligned}
\frac{\partial g}{\partial \theta} \times \frac{\partial g}{\partial z} &= \begin{vmatrix}
e_1 & e_2 & e_3\\
-\sqrt{z^2 + 1} \sin \theta & \sqrt{z^2 + 1}\cos \theta & 0\\
\frac{z}{\sqrt{z^2 + 1}}\cos \theta & \frac{z}{\sqrt{z^2 + 1}}\sin \theta & 1
\end{vmatrix}\\
&=(\sqrt{z^2+1} \cos \theta, \sqrt{z^2 + 1} \sin \theta, -z \sin ^2 \theta - z \cos^2 \theta)\\
&=(\sqrt{z^2+1} \cos \theta, \sqrt{z^2 + 1} \sin \theta, -z)
\end{aligned}
$$

$$
\left|\left|\frac{\partial g}{\partial \theta} \times \frac{\partial g}{\partial z}\right|\right|^2 =
(z^2 + 1) \cos^2 \theta + (z^2 + 1) \sin^2 \theta + z^2 = 2z^2 + 1
$$

$$
\begin{array}{ll}
\phi(x,y,z) = \frac{1}{\sqrt{2z^2 + 1}} & \phi (g(\theta,z )) = \frac{1}{\sqrt{2z^2 + 1}}
\end{array}
$$

$$
\begin{aligned}
\int_S \phi &= \int^1_0 \int^{2\pi}_0 \frac{1}{\sqrt{2z^2 + 1}} \cdot \sqrt{2z^2 + 1} \d \theta \d z\\
&= \int^1_0 \int^{2\pi}_0 1 \d \theta \d z\\
&= 2\pi
\end{aligned}
$$

:::

### Centroíde e Momento de Inércia

Tal como referido em [Aplicações do Integral](./0011-aplicacoes-integral.md),
é possível calcular o centroíde e momento de inércia de um sólido através do
cálculo de um integral.

Esses cálculos são também aplicáveis em campos escalares, pelo que voltamos a ter a mesma definição:

$$
\begin{darray}{ll}
\overline x = \frac{\int_M x}{\int_M 1} &
\overline y = \frac{\int_M y}{\int_M 1}
\end{darray}
$$

As definições de quantidades físicas em regiões de $\R^2$ e $\R^3$ têm definições idênticas no contexto.

:::details[Exemplos]

**Considerando a variedade definida por**

$$
M = \{ y = x^2, x \in ]-1, 1[\}
$$

**Qual o centroíde de $M$?**

Começamos por fazer a sua paremetrização:

$$
\begin{array}{cc}
g(t) = (t, t^2) & t \in ]-1,1[\\
g'(t) = (1,2t) & ||g'(t)|| = \sqrt{1 + 4t^2}
\end{array}
$$

$$
\int_M 1 \d \gamma = \int^1_{-1} \sqrt{1 + 4t^2} \d t
$$

$$
\overline x = \frac{\int_M x \d \gamma}{\int_M 1 \d \gamma} =
\frac{\int^1_{-1} t \sqrt{1+4t^2} \d t}{\int^1_{-1} \sqrt{1+4t^2} \d t}
$$

$$
\overline y = \frac{\int_M y \d \gamma}{\int_M 1 \d \gamma} =
\frac{\int^1_{-1} t^2 \sqrt{1+4t^2} \d t}{\int^1_{-1} \sqrt{1+4t^2} \d t}
$$

---

**Considerando a variedade definida por**

$$
M = \{ x^2 +y^2 = 1, y > 0\}
$$

**Determine o seu centroíde**

Começamos por parametrizar a variedade:

$$
\begin{array}{ll}
g(t) = (\cos t, \sin t) & t \in ]0, \pi[\\
g'(t) = (-\sin t, \cos t) & || g'(t) || = 1
\end{array}
$$

Esta variedade representa um semi-círculo de raio 1.  
De seguida, calculamos o centroíde, sabendo já que $\int_M 1 = \pi$, visto que corresponde ao comprimento do semi-círculo.

Centroíde de $M$: $(\overline x, \overline y)$

$$
\overline x = \frac{\int_M x}{\int_M 1} = \frac{1}{\pi} \int_M x \d \gamma = \frac{1}{\pi} \int^{\pi}_0 \cos t \cdot 1 \d t =
\frac{1}{\pi} \left[\sin t\right]^{\pi}_0 = 0
$$

$$
\overline y = \frac{\int_M y}{\int_M 1} = \frac{1}{\pi} \int_M y \d \gamma = \frac{1}{\pi} \int^{\pi}_0 \sin t \cdot 1 \d t =
\frac{1}{\pi} \left[-\cos t\right]^{\pi}_0 = \frac{2}{\pi}
$$

Centroíde: $\left(0, \frac{2}{\pi}\right)$

:::

---

Slides:

- [Aula 35](https://drive.google.com/file/d/1HB3S_iHkfG6ZL6m9h3D2Ygc9u110zR__/view?usp=sharing)
- [Aula 36](https://drive.google.com/file/d/1J3fiKeq1uJ1qP8_8oJaLB4OTlK6tGiG4/view?usp=sharing)
- [Aula 37](https://drive.google.com/file/d/1IEa53XOsSWwlefcLREGjrIhPuqzHBkiw/view?usp=sharing)
- [Aula 38](https://drive.google.com/file/d/1cZhZYt3eOtwdqc1Vo-VJkOHNJ7kkvNiT/view?usp=sharing)
- [Aula 39](https://drive.google.com/file/d/1PzDLYtf0bPQYBpZ46SVC0tqU4seezncI/view?usp=sharing)

---
description: Extremos Condicionados. Integrais de Campos Escalares em Variedades.
---

# Extremos Condicionados

[[toc]]

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

::: tip DEFINIÇÃO

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

::: details Demonstração

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

::: details Exemplos

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

::: details Exemplos

[imagem]

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

   [imagem]  
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

---

Slides:

- [Aula 35](https://drive.google.com/file/d/1HB3S_iHkfG6ZL6m9h3D2Ygc9u110zR__/view?usp=sharing)
- [Aula 36](https://drive.google.com/file/d/1J3fiKeq1uJ1qP8_8oJaLB4OTlK6tGiG4/view?usp=sharing)

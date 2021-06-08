---
description: Rotacional de um Campo Vetorial. Teorema de Stokes
---

# Rotacional. Teorema de Stokes

[[toc]]

## Rotacional

::: tip DEFINIÇÃO

Seja $F: \R^3 \to \R^3$ um campo vetorial de classe $C^1$.

Definimos o rotacional de $F$, $\rot F$ ( ou $\nabla \times F$), como

$$
\begin{aligned}
\rot F = \nabla \times F &= \begin{vmatrix}
e_1 & e_2 & e_3\\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z}\\
F_1 & F_2 & F_3
\end{vmatrix}\\
&=\left(\frac{\partial F_3}{\partial y}- \frac{\partial F_2}{\partial z}, -\frac{\partial F_3}{\partial x} + \frac{\partial F_1}{\partial z}, \frac{\partial F_2}{\partial x} - \frac{\partial F_1}{\partial y} \right)
\end{aligned}
$$

:::

Como simples exemplos, podemos tomar os campos vetoriais $F_1$ e $F_2$,

$$
\begin{array}{ll}
F_1(x,y,z) = (-y,x,z) & F_2(x,y,z)=(x^2, 3x^2, y+z)
\end{array}
$$

e de seguida calcular os seus rotacionais:

$$
\begin{aligned}
\rot F_1 &= \begin{vmatrix}
e_1 & e_2 & e_3\\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z}\\
-y & x & z
\end{vmatrix}
= (0,0, 1+1) = (0,0,2)\\
\rot F_2 &= \begin{vmatrix}
e_1 & e_2 & e_3\\
\frac{\partial}{\partial x} & \frac{\partial}{\partial y} & \frac{\partial}{\partial z}\\
x^2 & 3x^2 & y+z
\end{vmatrix}
=(1,0,6x)
\end{aligned}
$$

### Propriedades do Rotacional

1. Seja um campo vetorial $F \in C^2$, $F: \R^3 \to \R^3$ e o seu rotacional $\rot F: \R^3 \to \R^3$, então

   $$
   \ondiv(\rot F) = 0
   $$

   ::: details Demonstração

   $$
   \rot F =\left(\frac{\partial F_3}{\partial y}- \frac{\partial F_2}{\partial z}, -\frac{\partial F_3}{\partial x} + \frac{\partial F_1}{\partial z}, \frac{\partial F_2}{\partial x} - \frac{\partial F_1}{\partial y} \right)
   $$

   $$
   \begin{aligned}
   \ondiv(\rot F) &= \frac{\partial}{\partial x} \left(\frac{\partial F_3}{\partial y} - \frac{\partial F_2}{\partial z}\right)\\
   &+ \frac{\partial}{\partial y} \left(-\frac{\partial F_3}{\partial x} + \frac{\partial F_1}{\partial z}\right)\\
   &+ \frac{\partial}{\partial z} \left(\frac{\partial F_2}{\partial x} - \frac{\partial F_1}{\partial y}\right)\\
   &= 0
   \end{aligned}
   $$

   :::

2. Se $\rot F = (0,0,0)$, então $F$ é [fechado](./0016-campos-vetoriais.md#campo-fechado), pois

   $$
   \begin{array}{lll}
   \frac{\partial F_3}{\partial y} = \frac{\partial F_2}{\partial z} &
   \frac{\partial F_3}{\partial x} = \frac{\partial F_1}{\partial z} &
   \frac{\partial F_2}{\partial x} = \frac{\partial F_1}{\partial y}
   \end{array}
   $$

3. Se $\rot F = 0$ e domínio de $F$ for simplesmente conexo então $\vec F$ é [gradiente](./0016-campos-vetoriais.md#campo-gradiente) (e [conservativo](./0016-campos-vetoriais.md#campo-vetorial-conservativo)).

## Orientação do Bordo de uma Superfície

Considerando uma superfície orientada $S$ em $\R^3$, em que $\partial S$ é bordo da superfície (uma linha).

Podemos definir uma orientação para o bordo através da {green}(**Regra da Mão Direita**).

Colocando a mão direita com a palma voltada para a superfície e com o polegar a apontar no sentido da normal,
ficamos com os dados a apontar na orientação do bordo da superfície.

Podemos tomar como exemplos as superfícies $S$ e $T$:

$$
S = \{x^2 + y^2 + z^2 = 1, z > 0 \}, \quad \vec n_z > 0
$$

[imagem]

$$
T = \{x^2 + y^2 = 1 , 0 \leq z \leq 1 \}, \quad \text{normal exterior}
$$

## Teorema de Stokes

::: tip DEFINIÇÃO

Seja $S \subset \R^3$ uma superfície orientada e $F$ um campo vetorial $C^1$, então

$$
\int_S \rot F \cdot \vec n = \int_{\partial S} \vec F \d g
$$

em que $\partial S$ tem a orientação dada pela [regra da mão direita](#orientacao-do-bordo-de-uma-superficie).

:::

::: details Exemplos

**Considere a superfície $S$ com normal $\vec n$ com a primeira componente negativa e o campo vetorial $S$,**

$$
\begin{array}{ll}
S = \{ x = -1 + y^2 + z^2, x \leq 0 \} & F = (xy, ze^x, -y)
\end{array}
$$

**Qual o valor de $\int_S \rot F \cdot \vec n$?**

[imagem]

A normal está apontada para fora da taça.

$\partial S = \{ x = 0, y^2 + z^2 = 1 \}$ com orientação no sentido horário

$$
\int_S \rot F \cdot \vec n = \int_{\partial S} \vec F \d g = \int_{\partial S} (0, z , -y) \d g
$$

Parametrizar:

$$
\begin{cases}
x = 0\\
y = \cos t\\
z = \sin t
\end{cases}
$$

$$
\begin{array}{ll}
g(t) = (0, \cos t, \sin t) & g'(t) = (0, -\sin t, \cos t)\\
\vec F (g(t)) = (0, \sin t, -\cos t) & \vec F(g(t)) \cdot g'(t) = -\sin^2 t - \cos^2 t = -1
\end{array}
$$

Como a orientação da parametrização é a errada,

$$
\int_{\partial S} \vec F \d g = - \int_0^{2\pi} -1 \d t = 2\pi
$$

:::

Podemos fazer a seguinte observação:

Se $F = \rot A$ e $S$ for uma superfície sem bordo, então, pelo **Teorema de Stokes**, temos que

$$
\int_S F \cdot \vec n = \int_S \rot A \cdot \vec n = \int_{\partial S} A \cdot \d \vec g = 0
$$

---

Slides:

- [Aula 47](https://drive.google.com/file/d/1x5QZEP0iS2id-kief-QHd_KH4o6qxN8w/view?usp=sharing)
- [Aula 48](https://drive.google.com/file/d/1qbxkvtPUH3D1w51vtw2WfrvsruYEujPd/view?usp=sharing)

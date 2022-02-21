---
title: Divergência, Rotacional e Teorema de Stokes
description: >-
  Divergência.
  Teorema da Divergência (Gauss).
  Rotacional.
  Teorema de Stokes.
path: /cdi-iii/divergencia-rotacional-stokes
type: content
---

# Divergência, Rotacional e Teorema de Stokes

:::warning[Conteúdo Duplicado]

O conteúdo nesta página é duplicado da matéria de CDI-II:

- [Fluxo. Teorema da Divergência](/cdi-ii/fluxo-teorema-divergencia) (Teorema de Gauss)
- [Rotacional. Teorema de Stokes](/cdi-ii/rotacional-teorema-stokes)

Daqui para baixo, apenas irá estar o conteúdo novo dado apenas em CDI-III e um exemplo.
Recomenda-se a leitura das páginas indicadas acima.

Pode ainda ser útil assistir às [Aulas do Calhau](https://drive.google.com/file/d/14Yzlr4939W5MQlrLWIhWF8v97GHaA1l4/view?usp=sharing):

- [Aula 5](https://youtu.be/l8llkzx-E7c): Teorema de Green. Teorema da Divergência.
- [Aula 6](https://youtu.be/Su1RXp9mbCc): Teorema de Stokes.

:::

```toc

```

## Exemplo

:::info[Exemplo]

**Seja o campo**

$$
F(x,y,z) = (x-2z, 1-y, -1)
$$

1. **Verifique que $F$ é um rotacional**

   $$
   \ondiv F = 1 - 1 + 0 = 0
   $$

   Como $\ondiv F = 0$, então $F$ é um rotacional (pela [propriedade 1](/cdi-ii/rotacional-teorema-stokes#propriedades-do-rotacional)).

2. **Determine $G$ tal que $F = \rot G$**

   Seguimos [os passos indicados nesta página](/cdi-ii/rotacional-teorema-stokes#obter-o-campo-vetorial-de-um-rotacional).

   Seja $G = (G_1, G_2, G_3)$,

   $$
   \begin{cases}
   \frac{\partial G_3}{\partial y} - \frac{\partial G_2}{\partial z} = x-2z\\
   \frac{\partial G_1}{\partial z} - \frac{\partial G_3}{\partial x} = 1-y\\
   \frac{\partial G_2}{\partial x} - \frac{\partial G_1}{\partial y} = -1
   \end{cases}
   $$

   Tome-se $G_3 = 0$:

   $$
   - \frac{\partial G_2}{\partial z} = x-2z\\
   G_2 = -zx + z^2 + C_2 (x,y)
   $$

   $$
   \frac{\partial G_1}{\partial z} = 1-y\\
   G_1 = z-yz + C_1(x,y)
   $$

   $$
   \frac{\partial }{\partial x} (-zx + z^2 + C_2) - \frac{\partial }{\partial y} (z-yz +C_1) = -1\\
   -z + \frac{\partial C_2}{\partial x} + z - \frac{\partial C_1}{\partial y} = -1\\
   \frac{\partial C_2}{\partial x} - \frac{\partial C_1}{\partial y} = -1
   $$

   Tomando $C_2 = 0$, então, $C_1 = y+C_3(x)$; tomando $C_3 = 0$ vem que

   $$
   G = (z-yz+y, -zx+z^2, 0)
   $$

3. **Verifique que $G-(x+y+z, z^2, xy)$ tem rotacional $0$**

   Chamamos $L = G-(x+y+z, z^2, xy)$ e $H = (x+y+z, z^2, xy)$.

   $$
   \rot L = \rot G - \rot H = F - \rot H
   $$

   $$
   \rot H = (x-2z, 1-y, -1)
   $$

   $$
   \rot L = F - (x-2z, 1-y, -1) = 0
   $$

:::

## Potencial Escalar de uma Função com Rotacional Nulo

:::tip[Teorema]

Considerando uma função $F: U \to \R^3$, tal que $U \subset \R^3$, e que tem rotacional nulo, isto é, $\rot F = (0,0,0)$,
então existe um campo escalar $\varphi: U \to \R$ tal que

$$
F = \nabla \varphi
$$

:::

:::info[Exemplo]

**Seja $F(x,y,z) = (x^2, y^2, z^2)$ e $\rot F = (0,0,0)$, determine o potencial escalar de $F$.**

Queremos descobrir um campo escalar $\varphi$ tal que $F = \nabla \varphi$:

$$
\begin{cases}
\frac{\partial \varphi}{\partial x} = x^2\\
\frac{\partial \varphi}{\partial y} = y^2\\
\frac{\partial \varphi}{\partial z} = z^2
\end{cases}
$$

Então, pegando na primeira equação do sistema, ficamos com $\varphi = \frac{x^3}{3} + C_1(y,z)$.

Continuando a resolver o sistema, pegamos o resultado já obtido e derivamos em função de $y$,

$$
\frac{\partial \varphi}{\partial y} = 0 + \frac{\partial C_1}{\partial y} = y^2
$$

Podemos então obter a expressão de $C_1$ em função de $C_2$.
Aqui, como $C_1$ não depende de $x$, podemos dizer que $C_2$ só depende de $z$:

$$
\frac{\partial C_1}{\partial y} = y^2 \Leftrightarrow C_1 = \frac{y^3}{3} + C_2(z)
$$

$$
\varphi = \frac{x^3}{3} + \frac{y^3}{3} + C_2(z)
$$

Finalmente, vamos descobrir o valor de $C_2$, repetindo o que fizemos para $C_1$.

$$
\frac{\partial \varphi}{\partial z} = 0 + 0 + \frac{\d C_2}{\d z} = z^2
$$

Temos então a expressão de $C_2$, que contém o termo constante $C_3$.

$$
\frac{\d C_2}{\d z} = z^2 \Leftrightarrow C_2 = \frac{z^3}{3} + C_3
$$

Podemos facilmente reparar que podemos tomar $C_3 = 0$ de forma a obtermos uma resposta possível.

Então, o campo escalar $\varphi$ é

$$
\varphi = \left(\frac{x^3}{3}, \frac{y^3}{3}, \frac{z^3}{3} \right)
$$

:::

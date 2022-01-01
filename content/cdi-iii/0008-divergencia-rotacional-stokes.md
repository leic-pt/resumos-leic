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

Daqui para baixo, apenas irá estar um exemplo.
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
   \frac{\partial }{\partial x} (-zy + z^2 + C_2) - \frac{\partial }{\partial z} (z-yz +C_1) = -1\\
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

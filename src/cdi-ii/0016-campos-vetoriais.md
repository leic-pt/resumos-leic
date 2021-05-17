---
description: Campos Vetoriais
---

# Campos Vetoriais

## Integral de Linha de Campo Vectorial

::: tip DEFINIÇÃO

Seja $C \subset \R^n$ uma curva parametrizada por $g: ]a, b[ \to \R^n$ e $F: C \to \R^n$

Definimos o seguinte:

$$
\int_C F \cdot \d g = \int^b_a F(g(t)) \cdot g'(t) \d t
$$

:::

Podemos alterar ligeiramente a expressão acima para obtermos outro resultado:

$$
\begin{aligned}
\int_C F \cdot \d g &= \int^b_a \underbrace{F(g(t)) \cdot \frac{g'(t)}{||g'(t)||}}_{\begin{subarray}{c}F \cdot \text{vetor tangente a}\\ C\ \text{com norma} = 1\end{subarray}} \cdot ||g'(t)|| \d t\\
&= \int_C F \cdot \vec{\text{t}}\text{angente} \d \gamma
\end{aligned}
$$

::: details Exemplos

Considerando a parametrização $g$ e o campo vetorial $F$,

$$
\begin{array}{lll}
g(t)=(t,t) & t \in [0, 1] & F(x,y) = (1,x)
\end{array}
$$

Então podemos calcular o integral:

$$
\begin{aligned}
\int_C F \cdot \d g &= \int^1_0 F(g(t)) \cdot g'(t) \d t\\
&= \int^1_0 (1,t) \cdot (1,1)\d t\\
&= \int^1_0 (1 + t) \d t\\
&= \left[t + \frac{t^2}{2} \right]^1_0\\
&= \frac{3}{2}
\end{aligned}
$$

---

Considerando a parametrização $h$ e o campo vetorial $F$,

$$
\begin{array}{lll}
h(t)=(t,t^2) & t \in [0, 1] & F(x,y) = (1,x)
\end{array}
$$

Então podemos calcular o integral:

$$
\begin{aligned}
\int_{C_2} F \cdot \d h &= \int^1_0 F(h(t)) \cdot h'(t) \d t\\
&= \int^1_0 (1,t) \cdot (1,2t) \d t\\
&= \int^1_0 (1 + 2t^2) \d t\\
&= \left[t + \frac{2t^3}{3} \right]^1_0\\
&= \frac{5}{3}
\end{aligned}
$$

:::

{green}(**Propriedades:**)

1. Se $g_1$ e $g_2$ são duas parametrizações da curva $C$ que percorrem a curva no mesmo sentido, o integral $\int_C F \cdot \d g_1 = \int_C F \cdot \d g_2$
2. Se $g_1$ e $g_2$ são duas parametrizações da curva $C$ que percorrem a curva em sentido contrário, o integral $\int_C F \cdot \d g_1 = - \int_C F \cdot \d g_2$
3. O valor do integral pode não depender só dos pontos inicial e final, mas também da curva

### Interpretação física

Seja $F$ um campo de forças e uma partícula a percorrer um caminho $C$.

Então, temos que $\int_C F \cdot \d g$ é o trabalho realizado por $F$.

---

Slides:

- [Aula 39](https://drive.google.com/file/d/1PzDLYtf0bPQYBpZ46SVC0tqU4seezncI/view?usp=sharing)

---
title: Matriz de mudança de coordenadas
description: >-
  Como obter uma matriz de mudança de coordenadas
path: /al/matriz-mudanca-de-coordenadas
type: content
---

# Matriz de mudança de coordenadas

```toc

```

## Matriz de mudança de coordenadas

:::tip[Definição]

Sejam $B_1=\{v_1,...,v_n\}$ e $B_2=\{w_1,...,w_n\}$, duas bases ordenadas de um espaço vetorial $V$, a matriz $S_{B_1 \to B_2} = (s_{ij})_{n\times n}$, cujas colunas são as coordenadas dos vetores de $B_1$ escritos na base $B_2$, chama-se matriz de mudança de coordenadas de $B_1$ para $B_2$.

:::

:::tip[Teoremas]

A matriz $S_{B_1 \to B_2}$ satisfaz a igualdade:

$$
S_{B_1 \to B_2} [u]_{B_1} = [u]_{B_2}
$$

**A matriz de mudança de coordenadas permite assim calcular as coordenadas de um qualquer vetor $u \in V$ na base $B_2$ desde que sejam conhecidas as suas coordenadas na base $B_1$.**

Da igualdade acima podemos inferir que:

$$
S_{B_1 \to B_2} [u]_{B_1} = [u]_{B_2} \Leftrightarrow  S_{B_1 \to B_2}^{-1} [u]_{B_2} = [u]_{B_1}
$$

ou seja, que

$$
S_{B_1 \to B_2}^{-1} = S_{B_2 \to B_1}
$$

Menos óbvia mas também válida é a seguinte igualdade:

$$
S_{B_1 \to B_3} = S_{B_2 \to B_3}S_{B_1 \to B_2}
$$

Sendo aplicada a matriz de mudança de coordenadas $S_{B_2 \to B_3}$ após a matriz de mudança de coordenadas $S_{B_1 \to B_2}$, podemos obter a matriz de mudança de coordenadas $S_{B_1 \to B_3}$.

:::

## Construção da matriz de mudança de coordenadas

:::tip[Resolução]

Para obtermos a matriz de mudança de coordenadas de $B_1 \to B_2$ tomamos os seguintes passos:

1.  Escrever os vetores de $B_1$ na base $B_2$
2.  Construir uma matriz cujas colunas são os vetores de $B_1$ escritos na base $B_2$

:::

:::info[Exemplo]

$B_1 = \{(1, -1), (1, 1)\},\quad B_2 = \{(1,2), (3,4)\}$

- #### **Escrever os vetores de $B_1$ na base $B_2$**
  $(1, -1) = \alpha(1,2) + \beta(3,4)$ de onde obtemos a seguinte matriz do SEL:

$$
\left[ \begin{array}{cc|c} 1 & 3 & 1\\ 2 & 4 & -1\end{array} \right] \to  \left[ \begin{array}{cc|c} 1 & 0 & -\frac{7}{2}\\ 0 & 1 & \frac{3}{2}\end{array} \right]
$$

Como $\alpha = -\frac{7}{2} \land \beta = \frac{3}{2}$ concluimos que $[(1, -1)]_{B_2} = (-\frac{7}{2}, \frac{3}{2})$ , isto é, o vetor $(1, -1)$ tem coordenadas $(-\frac{7}{2}, \frac{3}{2})$ na base $B_2$.

Repetindo o processo para o segundo vetor de $B_1$ obtemos $[(1,1)]_{B_2} = (-\frac{1}{2}, \frac{1}{2})$.

- #### **Construir a matriz de mudança de coordenadas**
  Tendo calculado as coordenadas dos vetores de $B_1$ na base $B_2$ fica simples a construção da matriz $S_{B_1 \to B_2}$.  
  Neste caso a matriz de mudança de coordenadas será $\left[ \begin{array}{cc} -\frac{7}{2} & -\frac{1}{2}\\ \frac{3}{2} & \frac{1}{2}\end{array} \right]$

:::

:::details[Observação]

Os vetores das bases ${B_1}$ e ${B_2}$ encontram-se escritos na base canónica, isto é $\{(1,0),(0,1)\}$. Assim, a matriz de mudança de coordenadas de ${B_1}$ para a base canónica $(\varepsilon)$ seria $\left[ \begin{array}{cc} 1 & 1\\ -1 & 1\end{array} \right]$, uma vez que os vetores já estariam escritos nessa base. Para obter a matriz de mudança de coordenadas da base $\varepsilon$ para a base $B_1$ bastaria calcular a inversa desta matriz.

:::

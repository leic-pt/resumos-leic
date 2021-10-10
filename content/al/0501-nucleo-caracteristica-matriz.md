---
title: Núcleo de uma Matriz
description: >-
  Como calcular o núcleo de uma matriz
path: /al/nucleo-caracteristica-matriz
type: content
---

# Núcleo de uma Matriz

```toc

```

:::danger[Página Incompleta]

Esta página foi feita no âmbito de rever [conteúdos necessários em CDI-III](/cdi-iii/sistemas-eq-lineares-coef-constantes),
pelo que se pode encontrar incompleta.  
Agradece-se contribuições.

:::

## Espaço Nulo de uma Matriz

:::tip[Definição]

Seja $A$ uma matriz, o espaço nulo de uma matriz são todos os vetores $v$ que satisfazem a condição

$$
A\vec v = \vec 0
$$

:::

:::info[Exemplo]

**Considerando a seguinte matriz**

$$
A = \begin{bmatrix}
-2 & 0 & 1\\
1 & 1 & 0\\
-1 & 1 & 1
\end{bmatrix}
$$

**queremos descobrir $\operatorname{Nul} A$.**

Começamos por colocar a matriz em escada de linhas:

$$
\begin{bmatrix}
-2 & 0 & 1\\
1 & 1 & 0\\
-1 & 1 & 1
\end{bmatrix} \to \begin{bmatrix}
1 & 1 & 0\\
0 & 2 & 1\\
0 & 2 & 1
\end{bmatrix} \to \begin{bmatrix}
1 & 1 & 0\\
0 & 1 & \frac{1}{2}\\
0 & 0 & 0
\end{bmatrix} \to \begin{bmatrix}
1 & 0 & -\frac{1}{2}\\
0 & 1 & \frac{1}{2}\\
0 & 0 & 0
\end{bmatrix}
$$

Existe uma variável livre nesta matriz (na última linha), que vamos chamar de $c$, pelo que podemos escrever o seguinte:

$$
\operatorname{Nul} A = \left\{\left(\frac{1}{2}c; -\frac{1}{2} c; c \right) : c \in \R \right\}
$$

Esta é possivelmente a passagem mais confusa, que precisa de uma melhor explicação.
O que se fez aqui foi converter a matriz num sistema:

$$
\begin{cases}
a = \frac{1}{2}c\\
b = -\frac{1}{2}c\\
c \in \R
\end{cases}
$$

Abaixo estão mais alguns exemplos desta passagem para ser fácil de perceber.

Finalmente, se colocar-mos $c$ em "evidência", obtemos a forma de um espaço linear

$$
\operatorname{Nul} A = \left\{c\left(\frac{1}{2}; -\frac{1}{2}; 1 \right) : c \in \R \right\}
$$

e podemos finalmente escrever (e simplificar, multiplicando por 2 todas as componentes do(s) vetor(es))

$$
\operatorname{Nul} A = \mathcal{L}\left\{\left(\frac{1}{2}; -\frac{1}{2}; 1 \right)\right\} = \mathcal{L}\left\{\left(1; -1; 2 \right)\right\}
$$

:::

:::details[Mais exemplos]

$$
\operatorname{Nul} \begin{bmatrix}
1 & 0 & 0\\
0 & 1 & 0\\
0 & 0 & 1
\end{bmatrix} = \mathcal{L} \{\empty \}
$$

pois não existe nenhuma linha nula

---

$$
\operatorname{Nul} \begin{bmatrix}
1 & 0 & 2\\
0 & 1 & -1\\
0 & 0 & 0
\end{bmatrix} = \left\{\left(-2c; c; c \right) : c \in \R \right\} = \mathcal{L} \left\{ (-2, 1, 1) \right\}
$$

---

$$
\operatorname{Nul} \begin{bmatrix}
1 & \frac{1}{2}\\
0 & 0
\end{bmatrix} = \left\{\left(-\frac{1}{2}b; b \right) : b \in \R \right\} = \mathcal{L} \left\{ (1, -2) \right\}
$$

---

$$
\operatorname{Nul} \begin{bmatrix}
1 & 2 & -1\\
0 & 0 & 0\\
0 & 0 & 0
\end{bmatrix} = \left\{\left(-2b + c; b; c \right) : b,c \in \R \right\} = \mathcal{L} \left\{ (-2; 1; 0); (1 ; 0 ; 1) \right\}
$$

:::

Após prática, é possível fazer estes passos em simultâneo, saltando os passos intermédios.

Para ainda mais exemplos, ver [estes exercícios da ficha 4 de AL de 2020/2021](https://drive.google.com/file/d/1GbMeQA7Zvs5hHsfzR8wERHx2dGI3601B/view).

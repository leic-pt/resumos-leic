---
title: Valores e Vetores Próprios
description: >-
  Como calcular os valores e vetores próprios de uma matriz.
  Polinómio característico de uma matriz.
path: /al/valores-vetores-proprios
type: content
---

# Valores e Vetores Próprios de uma Matriz

```toc

```

:::danger[Página Incompleta]

Esta página foi feita no âmbito de rever [conteúdos necessários em CDI-III](/cdi-iii/sistemas-eq-lineares-coef-constantes),
pelo que se pode encontrar incompleta.  
Agradece-se contribuições.

:::

## Polinómio Característico de uma Matriz

:::tip[Definição]

O polinómio característico de uma matriz $A$ pode ser obtido através de

$$
\det (A - \lambda I)
$$

em que $I$ é a matriz identidade e $\lambda$ um escalar.

:::

Por exemplo, para determinar o polinómio característico de

$$
A = \begin{bmatrix}
5 & -1\\
3 & 1
\end{bmatrix}
$$

começamos por calcular

$$
\det (A - \lambda I) = \begin{vmatrix}
5 - \lambda & -1\\
3 & 1 - \lambda
\end{vmatrix} = (5 - \lambda)(1 - \lambda) + 3
$$

Podemos ainda fatorizar o polinómio, de forma a simplificar a descoberta dos **valores próprios** da matriz.

$$
(5 - \lambda)(1 - \lambda) + 3 = (\lambda-2)(\lambda-4)
$$

## Valores Próprios de uma Matriz

:::tip[Definição]
Um escalar $\lambda \in \R$ é um **valor próprio** de $A$ se existir um vetor **não nulo** $v$ tal que

$$
Av = \lambda V
$$

:::

No entanto, sabe-se também que os valores próprios de uma matriz são as raízes do seu [polinómio característico](#polinómio-característico-de-uma-matriz).

Continuando então com o exemplo anterior, os valores próprios da matriz

$$
A = \begin{bmatrix}
5 & -1\\
3 & 1
\end{bmatrix}
$$

vão ser as raízes de $(\lambda-2)(\lambda-4)$, que são

$$
\begin{darray}{c}
\lambda = 2 & \lambda = 4
\end{darray}
$$

## Vetores Próprios de uma Matriz

:::tip[Definição]
Um vetor não nulo $v$ é um **vetor próprio** de $A$ se existir um escalar $\lambda \in \R$ tal que

$$
Av = \lambda V
$$

:::

Outra forma de calcular o vetores próprios de uma matriz é através do [espaço nulo](/al/nucleo-caracteristica-matriz#espaço-nulo-de-uma-matriz) de $A - \lambda I$.

Continuando então com o exemplo acima, fazemos o seguinte para cada um dos valores próprios:

- Para $\lambda = 2$:

  Temos então que

  $$
  A - 2I = \begin{bmatrix}
  3 & -1\\
  3 & -1
  \end{bmatrix}
  $$

  Então, os vetores próprios são os vetores que pertencem ao espaço nulo da matriz:

  $$
  \operatorname{Nul} \begin{bmatrix}
  3 & -1\\
  3 & -1
  \end{bmatrix} = \mathcal{L} \{(1,3)\}
  $$

  Assim, o vetor próprio do valor próprio $\lambda = 2$ é $(1,3)$.

- Para $\lambda = 4$:

  Temos então que

  $$
  A - 4I = \begin{bmatrix}
  1 & -1\\
  3 & -3
  \end{bmatrix}
  $$

  Então, os vetores próprios são os vetores que pertencem ao espaço nulo da matriz:

  $$
  \operatorname{Nul} \begin{bmatrix}
  1 & -1\\
  3 & -3
  \end{bmatrix} = \mathcal{L} \{(1,1)\}
  $$

  Assim, o vetor próprio do valor próprio $\lambda = 4$ é $(1,1)$.

Assim temos que os vetores próprios de $A$ são $(1,3)$ ($\lambda = 2$) e $(1,1)$ ($\lambda = 4$).

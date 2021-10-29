---
title: Potencial Elétrico
description: >-
  Potencial Elétrico
path: /fis-ii/potencial
type: content
---

# Potencial Elétrico

```toc

```

## Definição

O potencial elétrico é a capacidade que uma carga tem de realizar trabalho, neste caso, atrair ou repelir outras cargas elétricas.

- $V(\vec r) = \sum_{i=1}^N V_i(\vec r)$ respeita o principío de sobreposição

- A função potencial é definida a menos de uma constante; essa constante corresponde a mudar o ponto de referência para o caminho escolhido

- O campo elétrico $\vec E \rightarrow 0$ no infinito, ou seja, $V \rightarrow $constante, tomamos essa constante como ponto de referência

Assim definimos o Potencial $V$ no ponto $\vec r$ como

$$
V(\vec r) = - \int_O^{\vec r} \vec E \cdot d \vec l\\
$$

Num caminho de $Q \rightarrow P$

$$
V(P) -V(Q) = - \int_Q^P \vec E \cdot d \vec l\\

\vec E = -\vec \nabla \cdot V
$$

O potencial é uma descrição muito económica do campo elétrico.
A partir de uma função escalar podemos calcular as 3 componentes do campo elétrico.

Como $\vec \nabla \times \vec E = 0$

$$
\cfrac{\delta E_1}{\delta x_2} =  \cfrac{\delta E_2}{\delta x_1} \ ,  \ \cfrac{\delta E_3}{\delta x_2} =  \cfrac{\delta E_2}{\delta x_2} \ , \  \cfrac{\delta E_1}{\delta x_3} =  \cfrac{\delta E_3}{\delta x_1}
$$

Assim a escolha do ponto de referência é arbitrária e induz ambiguidade mas não tem consequências fisícas.

### Potencial da Esfera

#### Potencial no Exterior da Esfera

$$
\vec E (\vec r) = \cfrac{1}{4 \pi \epsilon_0} \cfrac{q}{r^2} \vec e_r\\
$$

$$
V(r) = - \cfrac{1}{4 \pi \epsilon_0} \int_{\infty}^r \cfrac{q}{r^2} \  dr = \cfrac{1}{4 \pi \epsilon_0} \cfrac{q}{r}
$$

#### Potencial no Interior da Esfera

O campo é nulo e o potencial é constante ($ \neq 0$ )

$$

V(r) = \cfrac{1}{4 \pi \epsilon_0}  \cfrac{q}{R}


$$

## Potencial de uma distribuição localizada de carga

Usando o princípio de sobreposição

$$
V (\vec r ) = \cfrac {1}{4 \pi \epsilon_0} \sum_{i=1}^N \cfrac{q_i}{|\vec r - \vec r_i|}
$$

Para uma distribuição contínua de carga (Volume, superfície ou linha)

$$
V (\vec r) = \cfrac {1}{4 \pi \epsilon_0} \int_D \cfrac{\rho (\vec r \ ')}{|\vec r \ ' - \vec r_i|} d \tau \ '
$$

## Equações para Campo Elétrico

$$
\vec \nabla \cdot \vec E = \cfrac{\rho}{\epsilon_0}\\
$$

$$
\vec \nabla \times \vec E = 0\\
$$

$$
\vec E = - \vec \nabla V
$$

### Equação de Poisson 🐟

$$
\nabla^2 V = \cfrac{\rho}{\epsilon_0}
$$

### Equação de Laplace

Se $\rho = 0$

$$
\nabla^2 V = 0
$$

## Trabalho

![Work](./imgs/0004-work.png#dark=1)

Para calcular o trabalho minímo para uma carga $Q$ se mover de $A$ para $B$ sabendo que existe um campo sabemos que existe sempre uma força ($\vec F = Q \vec E$)

$$
W = - Q \int_A^B \vec E \cdot d \vec l = Q \int_A^B (\vec \nabla V)  \cdot d \vec l = Q[V(B) - V(A)]\\

V(B) - V(A) = \cfrac{W}{Q}
$$

Se o quiséssemos mandar a partícula para o infinito o trabalho seria igual a

$$
V(\vec r) = \cfrac{W}{Q}
$$

Isto permite concluir que a força mostra-se conservativa pelo ponto de vista da Mecânica

### Energia de Distribuição de Cargas

A energia de uma distribuição de cargas é igual à energia
necessária para as juntar todas desde o infinito (muito longe)
até à sua posições relativas. (Explicação mais detalhada nos slides)

$$
W = \cfrac {1}{2} \sum_{i=1}^{N} q_i V(\vec r_i)
$$

$V(\vec r_i)$ é o potencial na posição $\vec r_i$ provocado por todas as outras cargas $q_j (j \neq i)$

#### Energia Distribuição Contínua de Carga

$$
W = \cfrac {1}{2} \int V \ dq = \cfrac {1}{2} \int_V \rho V d\tau\\


W = \cfrac {\epsilon_0}{2} \int_V (\vec \nabla \cdot \vec E) V d\tau\\


W = \cfrac {\epsilon_0}{2} (\int_V E^2\ d \tau+ \oint_S V \ \vec E \cdot d \vec S)\\


W = \cfrac {\epsilon_0}{2} \int_\Omega E^2 d \tau


$$

### Condições de fronteira numa superfície carregada

Consideremos uma superfície Gaussiana $S$ com uma altura $e$

$$
\oint_S \vec E \cdot d\vec S = \frac {\sigma A}{ \epsilon_{0}}
$$

Quando $e \rightarrow 0$ as faces laterais não contam, assim:

$$
E_{\perp}^+ - E_{\perp}^- = \frac {\sigma }{ \epsilon_{0}}
$$

Já o potencial é dado por

$$
V^+ = V^-
$$

Onde $+$ é acima da superfície e $-$ abaixo.

Slides:

- [Slides Módulo 2](https://drive.google.com/file/d/1g24-Be9s2j9LaQyaibxGor4YToR5jFqi/view?usp=sharing)

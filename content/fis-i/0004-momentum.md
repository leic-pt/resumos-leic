---
title: Momento
description: >-
  Momento Linear
  Centro de Massa
  Corpo Rigido: Momento de Inércia
  Momento Angular
  Momento de Forças
path: /fis-i/momentum
type: content
---

# Momento

```toc

```

## Momento Linear

Vimos anteriormente uma quantidade conservada.
Vamos agora ver outra, desta vez para um sistema isolado.

:::tip[Momento Linear]
Definimos o momento linear como:

$$
\begin{darray}{ll}
\vec{P} = m\,\vec{v}
\end{darray}
$$

:::

A lei de Newton diz que

$$
\begin{darray}{ll}
\vec{F} = \frac{\partial \vec{P}}{\partial t} \iff \vec{F} = m\,\vec{a} \quad\text{,\quad se }\;\; m = const
\end{darray}
$$

recuperando assim a lei de Newton a que estamos habituados.

### Sistemas Isolados

Olhemos agora para um sistema isolado do exterior:

![Sistema Fechado](./assets/0004-closed-system2.png#dark=2)

Como o sistema está isolado, a força que $m_2$ aplica a $m_1$ é acompanhada por uma força simétrica de $m_1$ sobre $m_2$, isto é

$$
\begin{darray}{ll}
\sum \vec{F_i} = \vec{F_{12}} +  \vec{F_{21}} = \vec{0} \quad \text{(3ª lei de Newton)}
\end{darray}
$$

ou seja

$$
\begin{darray}{ll}
\frac{\partial}{\partial t}[m_1\vec{v_1} + m_2\vec{v_2}] = 0 \implies \vec{P_T} = const
\end{darray}
$$

Quando consideramos um objeto a cair na Terra geralmente vemos que o seu momento não se conserva porque não estamos a considerar a Terra no nosso sistema, do qual a Terra teria de fazer parte para para o momento do sistema se conservar.

### Colisões

#### Colisões Totalmente Inelásticas

![Colisão Inelástica](./assets/0004-completely-inelastic-colision.png#dark=2)

Sabemos que $P$ é constante e que a velocidade final das duas massas é igual, logo

$$
\begin{darray}{cc}
mv_i = 2mv_f \implies v_f = \frac{v_i}{2}
\end{darray}
$$

Como não existe conservação de energia

$$
\begin{darray}{cc}
E_i = \frac{1}{2}mv_i^2\\
\,\\
E_i = \frac{1}{2}\,2mv_f^2 = m\left(\frac{v_i}{2}\right)^2 = \frac{1}{4}mv_i^2
\end{darray}
$$

#### Colisões Elásticas

Consideremos uma colisão elástica entre duas bolas de bilhar uma com velocidade inicial $v_i$ e outra parada. Observa-se uma colisão frontal que, como é elástica, conserva a energia cinética.

![Colisão Elástica](./assets/0004-completely-elastic-colision.png#dark=2)

Sabemos que $P$ é constante e a energia cinética é conservada, logo

$$
\begin{cases}
mv_i = mv_1 + mv_2\\
\frac{1}{2}mv_i^2 = \frac{1}{2}mv_1^2 + \frac{1}{2}mv_2^2
\end{cases}
\iff
\begin{cases}
v_i = v_1 + v_2\\
v_i^2 = v_1^2 + v_2^2
\end{cases}\\
\,\\
\implies\\
\,\\
\begin{darray}{cc}
v_1 = 0\\
\text{As esferas colidem}\\
v_2 = v_i
\end{darray}
\;\vee\;
\begin{darray}{cc}
v_2 = 0\\
\text{Não existe colisão}\\
v_1 = v_i
\end{darray}
$$

:::tip[Colisão Elástica (Geral)]
Para uma colisão elástica em que os corpos têm massa diferente

$$
\begin{cases}
m_1v_1 + m_2v_2 = m_1v_1^* + m_2v_2^*\\
\frac{1}{2}m_1v_1^2 + \frac{1}{2}m_2v_2^2 = \frac{1}{2}m_1{v_1^*}^2 + \frac{1}{2}m_2{v_2^*}^2
\end{cases}\\
\,\\
\iff\\
\,\\
\begin{darray}{cc}
v_1^* = \frac{m_1 - m_2}{m_1 + m_2}v_1
\quad \vee \quad
v_2^* = \frac{2m_1}{m_1 + m_2}v_1
\end{darray}
$$

:::
:::tip[Nota]
Se $\quad m_1 = m_2 \implies v_2^* = v_1 \quad\text{e}\quad v_1^* = 0$

Se $\quad m_1 \ll m_2 \implies v_2^* = 0 \quad\text{e}\quad v_1^* = -v_1$
:::

## Centro de Massa

O momento linear de pende do referencial

![Referencial](./assets/0004-center-of-mass.png#dark=2)

$$
\begin{darray}{cc}
\vec{R}\left(t\right) = \vec{R}_o\left(t\right) + \vec{R}_\alpha\left(t\right)\\
\,\\
\vec{v} = \frac{\partial \vec{R}}{\partial t} = \frac{\partial \vec{R}_o}{\partial t} + \frac{\partial \vec{R}_\alpha}{\partial t} = \vec{v}_{ref} + \vec{v}_\alpha
\end{darray}
$$

logo,

$$
\begin{darray}{cc}
\vec{P} = \sum m_i\vec{v}_i = \left(\sum m_i\right)\vec{v}_{ref} + \sum m_i\vec{v^*}_i
\end{darray}
$$

Ao escolher o referencial com o centro no centro de massa temos que $\,\sum m_i\vec{v^*}_i = 0\,$. Em relação a este sistema o objeto, composto por várias partículas, move-se como um único ponto:

$$
\begin{darray}{cc}
\vec{P} = M_{Total}\,\vec{v}_{CM}
\end{darray}
$$

e portanto também sujeito às leis de Newton

$$
\begin{darray}{cc}
\vec{F} = \frac{\partial \vec{P}}{\partial t} = M_{Total}\,\vec{a}_{CM}
\end{darray}
$$

Disto podemos tambem definir

$$
\begin{darray}{cc}
M_{Total} = \sum m_i
\end{darray}
\quad\text{,}\quad
\begin{darray}{cc}
\vec{v}_{CM} = \frac{\sum m_i\vec{v}_i}{M_{Total}}
\end{darray}
\quad\text{,}\quad
\begin{darray}{cc}
\vec{R}_{CM} = \frac{\sum m_i\vec{R}_i}{M_{Total}}
\end{darray}
$$

## Corpo Rígido: Momento de Inércia

## Momento Angular

## Momento de Forças

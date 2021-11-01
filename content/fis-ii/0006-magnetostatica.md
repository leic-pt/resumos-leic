---
title: Magnetostática
description: >-
  Magnetostática
path: /fis-ii/magnetostatica
type: content
---

# Magnetostática

```toc

```

## Corrente Elétrica

### Densidade de Corrente

Na Eletrostática estudámos que as cargas que criavam um campo estavam estáticas, ao contrário da Carga de Prova que se podia movimentar-se livremente.
Agora estudaremos cargas de fonte que não se encontram paradas.
Temos assim de definir o conceito de Corrente Elétrica.

- A Corrente elétrica corresponde ao fluxo de eletrões ou outras cargas em movimento com um fluxo definido.

Usando o conceito matemático de fluxo podemos definir a Densidade de Corrente $\vec j$

- Quantidade de carga que passa através de um elemento de superfície perpendicular à corrente das cargas em movimento por unidade de tempo

![Perp](./imgs/0006-perp.png#dark=1)

$$
\cfrac{dq}{dt} = \vec j \ \vec n \ dS = \vec j \ d \vec S
$$

![Definicao](./imgs/0006-def.png#dark=0)

A densidade da corrente está relacionada com a velocidade média do fluxo das cargas.

Para uma distribuição de cargas com densidade $\rho$ com uma velocidade (média) $\vec v$, quando estas passa por um elemento de superfície $dS$ a carga $dq$ que atravessa essa superfície num intervalo de tempo $dt$ é igual à cargas contida num cilindro de base $dS$ e altura $(\vec v dt) \vec n$

$$
dq = \rho [(\vec v dt) \vec n \ dS] \implies \cfrac{dq}{dt} = (\rho \vec v) \ \vec n \ d \vec S \implies \vec j = \rho \vec v
$$

Para $N$ cargas por unidade de volume temos que

$$
j = Nq \vec v
$$

### Corrente Elétrica

A carga total $I$ que passa por unidade de tempo através da superfície $S$ chama-se Corrente Elétrica e é igual ao fluxo da densidade de corrente através da superfície

$$
I = \int_{S} \vec j \ d \vec S
$$

- Mede-se em Ampère $\ 1A = 1 C s^{-1}$
- Representa a taxa a que a carga deixa um volume delimitado por uma superfície $S$

A Carga Elétrica é indestrutível, isto é, é conservada, não se pode criar nem destruir.

A Lei da Conservação da Carga é assim dada por

$$
- \cfrac{dQ_{int}}{dt} = \oint_{S} \vec j \ d \vec S
$$

$S$ é uma superfície fechada.

A Lei da Conservação da Carga pode também ser escrita na forma diferencial

$$
\vec \nabla \vec j = - \cfrac{d \rho}{dt}
$$

No caso de um fio de comprimento $L$ e secção $A$ e de corrente uniforme o elemento de volume é $\rho(LA) = \lambda$\
Assim se o fio for muito fino temos uma densidade linear de carga $I = \lambda v$\
Se as cargas positivas e negativas se movimentarem no fio $I = \lambda_{+} v_{+} + \lambda_{-} v_{-}$

### Lei de Kirchhoff

#### Lei das Malhas

![Malha](./imgs/0006-malha.png#dark=1)

Esta lei é uma consequência do Campo Elétrico ser Conservativo, o trabalho (mínimo) para transportar uma carga ao longo de um circuito fechado é nulo.

$$
\oint \vec E d \vec l = - \oint \vec \nabla V d \vec l = 0
$$

$$
(V_A - V_B) + (V_B - V_C) + (V_C - V_D) + (V_D - V_A) = 0
$$

$$
\sum_{k=1}^N I_k = 0, \ \ \ \sum_{m,k=1}^N V_{mk} = 0
$$

#### Lei os Nodos

![Nodo](./imgs/0006-nodo.png#dark=1)

Para uma junção que não acumula nem perde energia, a carga total $Q$ permanece constante nessa zona do circuito.
Assim

$$
\int \vec j \ d \vec S = - \cfrac{dQ}{dt} = 0
$$

$$
\int \vec j \ d  \vec S = \int_{S_1} \vec j_1 \ d  \vec S_1 + \int_{S_2} \vec j_2 \ d \vec S_2 + \int_{S_3} \vec j_3 \ d \vec S_3 = 0
$$

$$
-I_1 + I_2 + I_3 = 0\\

\sum_{k=1}^N I_{k} = 0
$$

### Dentro do Condutor

![Condutor](./imgs/0005-condutor.png#dark=1)

Slides:

- [Slides Módulo 4](https://drive.google.com/file/d/1sAiyAEvUtG6AwV521EnQ7KraqpdR56tS/view?usp=sharing)

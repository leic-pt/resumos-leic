---
title: Recordar do Secundário
description: >-
  Pequeno resumos de toda a matéria de secundário necessária para esta UC.
path: /fis-i/guides/recap-highschool
type: guides
---

# Recordar do Secundário

Esta página pretende permitir aos alunos que não tiveram Física-Química no secundário
aprender rapidamente os conteúdos necessários para a UC de Física I.

## Grandezas

### Grandezas escalares

São descritas apenas por um **valor numérico** e uma **unidade de medida**:

- Massa ($\operatorname{kg}$)
- Tempo ($\operatorname{s}$)
- Temperatura ($\operatorname{K}$)
- Volume ($\operatorname{m}^3$)

### Grandezas vetoriais

Descritas por um **valor numérico**, uma **direção**, um **sentido** e uma **unidade de medida**:

- Posição ($\operatorname{m}$)
- Deslocamento ($\operatorname{m}$)
- Velocidade ($\operatorname{m}/\operatorname{s}$)
- Aceleração ($\operatorname{m}/\operatorname{s^2}$)

## Decomposição de vetores

- figura com corpo num plano inclinado, ligado por um fio a um corpo que está pendurado no final do plano, com roldana
  para demonstrar decomposição de forças

Quando estamos a trabalhar com dimensões superiores a 1, podemos depararmo-nos com vetores que não são paralelos ao eixos.
Nestes casos, é útil efetuar a decomposição do vetor em duas ou mais commponentes, de forma a obtermos vetores paralelos aos eixos da base
(geralmente, aos vetores unitários $\vec{e_x}$ e $\vec{e_y}$).  
Também nos pode ser útil decompor vetores para estes ficarem paralelos/perpendiculares ao movimento (e.g. num plano inclinado).

Abaixo segue um exemplo com um vetor $F$. Podemos reparar que, pela soma de vetores, $F = F_x + F_y$.

![Decomposição de uma Força, F, em Fx e Fy](./assets/0001-force-decomposition.svg#dark=1)

:::info[Exemplo - Plano Inclinado]

Tomemos agora um exemplo mais complexo.

Considerando um corpo num plano inclinado, que está ligado por um fio a um corpo pendurado no topo do plano inclinado,
como demonstra a figura abaixo.

![Plano inclinado](./assets/0001-inclined-plane.svg#dark=2)

Na figura está representado o peso, uma grandeza vetorial, de ambos os corpos.
Foram omitidas outras forças presentes.

Como podemos reparar, um vetor que é oblíquo ao movimento não nos permite efetuar cálculos com tanta facilidade.
No entanto, se considerarmos $P_x$ e $P_y$ em relação ao movimento, já podemos com mais facilidade calcular a aceleração do corpo, por exemplo.

Neste exemplo concreto de plano inclinado, podemos usar as seguintes igualdades trigonométricas
para descobrir os valores de $P_x$ e $P_y$ em função de $P$.

$$
\begin{aligned}
\cos \theta = \frac{P_y}{P} & \implies P = P_y \cos \theta\\
\sin \theta = \frac{P_x}{P} & \implies P = P_x \sin \theta
\end{aligned}
$$

:::

## Leis de Newton

As [Leis de Newton](https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion) descrevem relações entre o **movimento** de um objeto e as **forças** que atuam no mesmo.

### Primeira Lei

Também chamada a "Lei da Inércia", esta lei diz que se a soma das forças das forças aplicadas num corpor for nula, a velocidade desse corpo não se altera.  
Por outras palavras, um corpo em repouso permanece em repouso e um corpo em movimento permanece em movimento com velocidade constante, se e só se a soma das forças aplicadas no mesmo for nula.

Em termos matemáticos, podemos escrever a Lei da seguinte forma:

$$
F_{\text{corpo}} = 0 \Leftrightarrow \frac{\d v}{\d t} = 0
$$

### Segunda Lei

A segunda lei relaciona a aceleração, $a$, de um corpo de massa $m$ com a soma das forças aplicadas no mesmo, $F$.
A soma de todas as forças aplicadas no corpo é igual ao produto da sua massa com a sua aceleração.

$$
F_{\text{corpo}} = ma
$$

### Terceira Lei

A terceira lei diz-nos que todas as forças entre dois objetos existem em pares, com a mesma intensidade e sentidos opostos.

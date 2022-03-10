---
title: Cinemática 1D
description: >-
  Cinemática a 1 dimensão.
  Deslocamento.
  Velocidade Média e Velocidade Instantânea.
  Aceleração Média e Aceleração Instantânea.
  Movimento no espaço e tempo a 1D: partícula com aceleração constante, lançamento vertical e movimento vertical sujeito à força gravítica.
path: /fis-i/kinematics-1d
type: content
---

# Cinemática a 1 Dimensão

```toc

```

O que é a cinemática?

A **cinemática** é o ramo da Física que se ocupa da descrição dos movimentos de
pontos, corpos ou sistemas de corpos (grupos de objetos), sem se preocupar
com a análise de suas causas.

## Redução de um Corpo a um Ponto

Quando estivermos a analizar o movimento de um corpo, podemos, no geral, reduzi-lo a apenas um ponto, simplificando o problema.

Isto deve-se ao facto de que todas as partes do corpo descrevem o mesmo movimento:
se tivermos um carro em movimento, tanto as portas, o bancos, o volante e mesmo o condutor movimentam-se à mesma
velocidade e têm uma posição sempre igual entre si. Podemos assim, neste caso, considerar o carro
como apenas um ponto e estudar o movimento desse ponto.

Ao ponto que resulta desta redução, chamamos [**ponto material**](color:green).

:::warning[Atenção!]
**Atenção que nem sempre podemos efetuar esta redução.**  
Por exemplo, se estivermos a estudar o movimento rotacional de um berlide, não podemos reduzir o berlinde a um ponto.
:::

## Posição

Antes de podermos definir os conceitos abaixo, precisamos de descrever a posição atual de um corpo, em função do tempo.
Assim, a posição de um corpo, já para 3 dimensões, é:

$$
\vec r = x(t) \vec e_x + y(t) \vec e_y + z(t) \vec e_z
$$

## Deslocamento e Trajetória

Quando um corpo de move do ponto A a um ponto B, temos:

- **Deslocamento**: é o vetor que une o ponto A ao ponto B. É uma linha reta e independente do caminho.
- **Trajetória/Caminho**: é o percurso que o corpo faz do ponto A ao ponto B.

![Deslocamento e Caminho](./assets/0001-path.png#dark=1)

O deslocamento é então dado por:

$$
\Delta \vec r = \vec r_2 - \vec r_1 = \Delta x \vec e_x + \Delta y \vec e_y + \Delta z \vec e_z
$$

## Velocidade Média

A velocidade média define-se como o quociente entre o delocamento e o intervalo de tempo desse deslocamento.

$$
\begin{aligned}
\vec v_m &= \frac{\Delta \vec r}{\Delta t}\\
&= \frac{\vec r_2 - \vec r_1}{t_2 - t_1}\\
&= \frac{\Delta x}{\Delta t} \vec e_x + \frac{\Delta y}{\Delta t} \vec e_y + \frac{\Delta z}{\Delta t} \vec e_z
\end{aligned}
$$

## Velocidade Instantânea

A velocidade instantânea é a velocidade do corpo num certo instante.
Podemos pensar nisto como uma velocidade média num intervalo muito pequeno (na realidade, este é o conceito de derivada).

Assim, a velocidade instantânea é a derivada da posição:

$$
\begin{aligned}
\vec v(t) &= \left(\frac{\d x}{\d t}\right) \vec e_x + \left(\frac{\d y}{\d t}\right) \vec e_y + \left(\frac{\d z}{\d t}\right) \vec e_z\\
&= v_x \vec e_x + v_y \vec e_y + v_z \vec e_z
\end{aligned}
$$

## Aceleração Média e Instantânea

A aceleração é para a velocidade o que a velocidade é para a posição.

Assim, temos que a **aceleração média** é:

$$
\begin{aligned}
\vec a_m &= \frac{\Delta \vec v}{\Delta t}\\
&= \frac{\vec v_2 - v_1}{t_2 - t_1}\\
&= \frac{\Delta v_x}{\Delta t}\vec e_x + \frac{\Delta v_y}{\Delta t}\vec e_y + \frac{\Delta v_z}{\Delta t}\vec e_z\\
&= a_{mx} \vec e_x + a_{my} \vec e_y + a_{mz} \vec e_z
\end{aligned}
$$

E que a **aceleração instantânea** é:

$$
\begin{aligned}
\vec a(t) &= \left(\frac{\d v_x}{\d t}\right) \vec e_x + \left(\frac{\d v_y}{\d t}\right) \vec e_y + \left(\frac{\d v_z}{\d t}\right) \vec e_z\\
&= a_x \vec e_x + a_y \vec e_y + a_z \vec e_z
\end{aligned}
$$

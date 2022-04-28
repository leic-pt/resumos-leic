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

Quando estamos a trabalhar com dimensões superiores a 1, podemos depararmo-nos com vetores que não são paralelos ao eixos.
Nestes casos, é útil efetuar a decomposição do vetor em duas ou mais componentes, de forma a obtermos vetores paralelos aos eixos da base
(geralmente, aos vetores unitários $\vec{e_x}$ e $\vec{e_y}$).  
Também nos pode ser útil decompor vetores para estes ficarem paralelos/perpendiculares ao movimento (e.g. num plano inclinado).

Abaixo segue um exemplo com um vetor $\vec F$. Podemos reparar que, pela soma de vetores,

$$
\vec F = \vec F_x + \vec F_y
$$

![Decomposição de uma Força, F, em Fx e Fy](./assets/0001-force-decomposition.svg#dark=1)

:::info[Exemplo - Plano Inclinado]

Tomemos agora um exemplo mais complexo.

Considerando um corpo num plano inclinado, que está ligado por um fio a um corpo pendurado no topo do plano inclinado,
como demonstra a figura abaixo.

![Plano inclinado](./assets/0001-inclined-plane.svg#dark=2)

Na figura está representado o Peso ($\vec P_A$ e $\vec P_B$) , uma grandeza vetorial, de ambos os corpos.
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

Também chamada a "Lei da Inércia", esta lei diz que se a soma das forças das forças aplicadas num corpo for nula, a velocidade desse corpo não se altera.  
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

## Movimento de um Corpo

Um corpo que se encontra em movimento pode ser descrito, entre outras, pelas seguintes propriedades:

- Posição
- Velocidade (derivada da posição)
- Aceleração (derivada da velocidade; segunda derivada da posição)

No geral trabalhamos com estas propriedades a variar ao longo do tempo, $t$.

:::info[Exemplo]

Abaixo encontram-se 3 gráficos, que representam a posição, velocidade e aceleração de um corpo.

![Gráficos da posição, velocidade e aceleração de um corpo](./assets/0001-movement-graphs.svg#dark=1)

Como podemos ver, o corpo abaixo descreve um **movimento uniformemente retardado**, visto que tem aceleração constante (neste caso, negativa).

A velocidade diminui ao longo do tempo, visto que a aceleração é negativa.
Deste modo, a posição do corpo vai sofrer uma alteração cada vez menor ao longo do tempo.

:::

### Movimento Uniforme

Um [**movimento uniforme**](color:orange) é aquele que tem velocidade constante, isto é, aceleração nula.  
Podemos pensar, como exemplo, num carro a viajar na autoestrada sempre à mesma velocidade.

Este movimento pode ser descrito por uma equação do tipo:

$$
x(t) = x_0 + vt
$$

em que $x_0$ é a posição inicial e $v$ a velocidade (constante) do corpo.

### Movimento Uniformemente Acelerado e Retardado

Por outro lado, um [**movimento uniformemente acelerado**](color:yellow) é aquele que tem aceleração constante (maior que zero).
Corpos que estejam sujeitos a acelarações constantes, dizemos que têm uma aceleração linear.
Como exemplo, podemos pensar num corpo em queda livre (ignorando a resistência do ar). A única força a atuar no mesmo é a força gravítica, na direção do movimento. A sua velocidade aumenta linearmente ao longo da queda.

Este movimento pode ser descrito por uma equação do tipo:

$$
x(t) = x_0 + v_0 t + \frac{a}{2} t^2
$$

em que $x_0$ é a posição inicial, $v_0$ é a velocidade inicial e $a$ a aceleração do corpo.

No caso da acelaração ser constante e menor que zero, o corpo apresenta [**movimento uniformemente retardado**](color:orange).

### Equações do Movimento

Para trabalhar com movimentos com aceleração constante, podemos usar as equações do movimento.
Estas são a base para se poder resolver vários problemas relacionados com mecânica.

$$
\begin{aligned}
x(t) &= x_0 + v_0 t + \frac{a}{2} t^2\\
v(t) &= v_0 + at\\
\end{aligned}
$$

Se repararmos, a equação $v(t)$ é a derivada da $x(t)$.

Com estas equações, podemos definir uma expressão para qualquer [**movimento uniformemente acelerado/retardado**](color:yellow).

:::info[Exemplo]

**Consideramos que um corpo é lançado na vertical, para cima, a partir de uma altura de $3 \operatorname{m}$ com uma velocidade de $1.5 \operatorname{ms}^{-1}$.
No corpo atua a força gravítica, $g = 9.8 \operatorname{ms}^{-2}$.**

a) **Escreva a equação das posições e a equação das velocidades que descrevem o movimento.**

$$
\begin{aligned}
y(t) &= 3 + 1.5t - \frac{9.8}{2} t^2\\
v(t) &= 1.5 - 9.8 t
\end{aligned}
$$

Podemos notar que a acelaração se encontra negativa.
Isto deve-se à acelaração gravítica ter sentido contrário ao nosso referencial.

b) **Qual é a altura máxima que a bola atinge?**

Sabemos que a bola inverte o sentido do movimento quando a sua velocidade é nula.
Então:

$$
v(t) = 0 \implies 1.5 - 9.8 t = 0 \implies t = 0.153 \operatorname{s}
$$

Ficamos assim a saber que a bola atinge a altura máxima no instante $t = 0.153 \operatorname{s}$.

Podemos agora simplesmente substituir na equação das posições, para descobrirmos qual a posição da bola nesse instante,
e consequentemente a altura máxima.

$$
y(0.153) = 3 + 1.5 \times 0.153 - \frac{9.8}{2} (0.153)^2 = 3.1 \operatorname{m}
$$

Então, a altura máxima atingida pela bola é $3.1 \operatorname{m}$ acima do solo.

:::

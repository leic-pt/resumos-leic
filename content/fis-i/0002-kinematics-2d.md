---
title: Cinemática 2D
description: >-
  Cinemática a 2 dimensões.
  Coordenadas Polares.
path: /fis-i/kinematics-2d
type: content
---

# Cinemática a 2 Dimensões

Anteriormente estudámos o movimento de corpos apenas a uma dimensão.
No entanto, vários movimentos necessitam mais que uma dimensão para serem representados,
como o lançamento de projéteis, movimentos circulares, etc.

```toc

```

## Lançamento de Projéteis

Para introduzir o estudo da cinemática a 2 dimensões, vamos estudar o lançamento de projéteis
(i.e. bala disparada de um canhão, chuto de uma bola que faz um "balão", etc).

Na sua geralidade, neste tipo de movimentos temos uma velocidade inicial, oblíqua a ambos os eixos ($x$ e $y$).
A única força a atuar no corpo é a força gravítica, atuando apenas na componente vertical da velocidade.  
Podem existir variações deste tipo de exercícios em que seja necessário considerar outras forças,
mas não é difícil fazer a adaptação do raciocínio abaixo.

Mas o que é isto de componente vertical e componentente horizontal? Bem, agora que estamos a trabalhar a mais que uma dimensão,
passamos a ter de definir o movimento do corpo segundo dois eixos, $x$ e $y$:

$$
\begin{aligned}
\vec r(t) &= \left(x_0 + v_{x,0} t + \frac{a_x}{2}t^2\right) \vec e_x + \left(y_0 + v_{y,0} t + \frac{a_y}{2}t^2\right) \vec e_y\\
\vec v(t) &= \left(v_{x,0} + a_x t \right) \vec e_x + \left(v_{y,0} + a_y t \right) \vec e_y
\end{aligned}
$$

Escrever a posição e a velocidade com as equações acima permite-nos facilmente estender estes conhecimentos para 3D.
No entanto, por simplificação, vamos desdobrar as equações acima:

$$
\begin{darray}{l}
\begin{cases}
x(t) &= x_0 + v_{x,0} t + \frac{1}{2}a_x t^2\\
y(t) &= y_0 + v_{y,0} t + \frac{1}{2}a_y t^2
\end{cases}\\\\
\begin{cases}
v_x(t) &= v_{x,0} + a_x t\\
v_y(t) &= v_{y,0} + a_y t
\end{cases}
\end{darray}
$$

Este movimento tem as seguintes características:

- O projétil é lançado com uma velocidade inicial $v_0$, com componentes $v_{x,0}$ e $v_{y,0}$ não nulas (se fossem nulas, estaríamos perante um movimento 1D).
- A única força a atuar no corpo é a força gravítica, pelo que:
  - $\vec a = a_y \vec e_y$ - a aceleração apenas tem componente vertical
  - $v_x \equiv \text{constante}$ - a velocidade horizontal é constante visto que a aceleração horizontal é nula
- No ponto mais alto da trajetória, tal como no [lançamento vertical](/fis-i/kinematics-1d#lançamento-vertical),
  a velocidade vertical, $v_y$, é nula.

![Resumo de Propriedades de Lançamento de Projéteis](./assets/0002-projectile-launch-summary.png#dark=2)

Vejamos um exemplo, que ilustra melhor este conceito.

:::info[Exemplo]

**Um estudante de engenharia informática está a brincar com uma Nerf, e acidentalmente dispara uma bala.**
**A bala sai da arma a uma altura de $1.5 \op{m}$ em relação ao chão e com uma velocidade de $5 \op{m/s}$, que faz $\theta = 60\degree$ com o chão.**
**Considerando que a única força que atua no corpo é a força gravítica, $g = 9.8 m/s^2$, determine o seguinte:**

TODO figura do problema

**a) a altura máxima atingida**

O primeiro passo é [decompor a velocidade inicial](/fis-i/guides/recap-highschool#decomposição-de-vetores) na componente horizontal e vertical.
Através de trignometria, obtemos o seguinte:

TODO inserir figura a demonstrar decomposição do vetor

$$
\begin{cases}
v_{x,0} &= v_0 \cos \theta\\
v_{y,0} &= v_0 \sin \theta
\end{cases}
\implies
\begin{cases}
v_{x,0} &= 5 \times \cos 60\degree = 2.50 \op{m/s}\\
v_{y,0} &= 5 \times \sin 60\degree = 4.33 \op{m/s}
\end{cases}
$$

Podemos então escrever as equações de movimento, de acordo com os dados do problema:

$$
\begin{darray}{l}
\begin{cases}
x(t) &= 2.50 t\\
y(t) &= 1.5 + 4.33 t - \frac{9.8}{2} t^2
\end{cases}\\\\
\begin{cases}
v_x(t) &= 2.5\\
v_y(t) &= 4.33 - 9.5 t
\end{cases}
\end{darray}
$$

Como já estudámos anteriormente no [lançamento vertical](/fis-i/kinematics-1d#lançamento-vertical),
o corpo atinge a altura máxima quando a sua velocidade (vertical) é nula, invertendo o sentido.
Então, vamos determinar o instante em que isto acontece.

$$
v_y(t) = 0 \Leftrightarrow 4.33 - 9.5 t = 0 \Leftrightarrow t = 0.456 \op{s}
$$

Agora que sabemos em que instante a velocidade vertical é nula, isto é, em que a altura é máxima, basta
substitui-lo na equação das posições para sabermos a altura máxima.

$$
y(0.456) = 1.5 + 4.33 \times 0.456 - \frac{9.8}{2} \times 0.456^2 = 2.46 \op{m}
$$

Assim, a altura máxima atingida pela bala é $2.46 \op{m}$.

**b) o alcance da bala**

TODO

**c) a velocidade com que a bala embate no chão pela 1ª vez**

TODO

:::

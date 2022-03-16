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
No entanto, vários movimentos precisam mais do que uma dimensão para serem representados,
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
**Considerando que a única força que atua no corpo é a força gravítica, $g = 9.8 \op{m/s}^2$, determine o seguinte:**

![Trajetória que descreve o problema](./assets/0002-projectile-launch-example-trajectory.svg#dark=2)

**a) a altura máxima atingida**

O primeiro passo é [decompor a velocidade inicial](/fis-i/guides/recap-highschool#decomposição-de-vetores) na componente horizontal e vertical.
Através de trignometria, obtemos o seguinte:

![Decomposição do vetor velocidade](./assets/0002-projectile-launch-velocity-vector-decomposition.svg#dark=2)

$$
\begin{cases}
v_{x,0} &= v_0 \cos \theta\\
v_{y,0} &= v_0 \sin \theta
\end{cases}
\implies
\begin{cases}
v_{x,0} &= 5 \times \cos 60\degree &= 2.50 \op{m/s}\\
v_{y,0} &= 5 \times \sin 60\degree &= 4.33 \op{m/s}
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
v_x(t) &= 2.50\\
v_y(t) &= 4.33 - 9.8 t
\end{cases}
\end{darray}
$$

Como já estudámos anteriormente no [lançamento vertical](/fis-i/kinematics-1d#lançamento-vertical),
o corpo atinge a altura máxima quando a sua velocidade (vertical) é nula, invertendo o sentido.
Então, vamos determinar o instante em que isto acontece.

$$
v_y(t) = 0 \Leftrightarrow 4.33 - 9.8 t = 0 \Leftrightarrow t = 0.442 \op{s}
$$

Agora que sabemos em que instante a velocidade vertical é nula, isto é, em que a altura é máxima, basta
substitui-lo na equação das posições para sabermos a altura máxima.

$$
y(0.442) = 1.5 + 4.33 \times 0.442 - \frac{9.8}{2} \times 0.442^2 = 3.39 \op{m}
$$

Assim, a altura máxima atingida pela bala é $3.39 \op{m}$.

**b) o alcance da bala**

A bala embate no chão quando a sua altura é zero.
Começamos por determinar o instante em que isto acontece.

$$
y(t) = 0 \Leftrightarrow 1.5 + 4.33 t - \frac{9.8}{2} t^2 = 0 \Leftrightarrow t = -0.266 \op{s}~\lor~t = 1.15 \op{s}
$$

O valor negativo para o tempo não faz sentido no contexto do problema, pelo que o descartamos:

$$
\xcancel{t = -0.266 \op{s}}~\lor~t = 1.15 \op{s} \implies t = 1.15 \op{s}
$$

Agora que já sabemos o instante em que a bala embate no chão, podemos obter a posição horizontal da bala neste instante (alcance).

$$
x(1.15) = 2.50 \times 1.15 = 2.88 \op{m}
$$

Assim, o alcance da bala é $2.88 \op{m}$.

**c) a velocidade com que a bala embate no chão pela 1ª vez**

Sabendo o instante em que a bala embate no chão, podemos obter ambas as componentes da velocidade quando a bala embate no chão.

$$
\begin{cases}
v_x(1.15) &= 2.50 \op{m/s}\\
v_y(1.15) &= 4.33 - 9.8 \times 1.15 = -6.94 \op{m/s}
\end{cases}
$$

Assim, a velocidade com que a bala embate no chão é:

$$
\vec v = 2.50 \vec e_x - 6.94 \vec e_y\quad (\op{m/s})
$$

:::

## Cordenadas Polares

Por vezes, especialmente quando estamos a estudar movimentos circulares, pode dar mais jeito usar outro
tipo de coordenadas, as [**coordenadas polares**](color:green).

Em vez de representarmos a posição (entre outros) de um corpo através da sua posição $x$ e $y$, isto é, por coordenadas cartesianas,
utilizamos a sua distância à origem, assim como o ângulo com a mesma.

Ao contrário de nas coordenadas cartesianas, os vetores unitários das coordenadas polares ($\vec e_r$ e $\vec e_\theta$) variam
de direção ao longo do tempo e da trajetória do ponto:

- o vetor $\vec e_r$ aponta da origem para o ponto
- o vetor $\vec e_\theta$ é perpendicular a $\vec e_r$ e aponta no sentido contrário aos ponteiros do relógio (sentido positivo)

Tal como nas coordenadas cartesianas, os vetores unitários têm módulo $1$.

![Coordenadas polares versus coordenadas cartesianas](./assets/0002-polar-coordinates.svg#dark=2)

### Conversão entre Coordenadas Cartesianas e Polares

Podemos exprimir os vetores unitários das coordenadas polares da seguinte forma:

$$
\begin{aligned}
\vec e_r &= &\cos \theta \vec e_x &+ \sin \theta \vec e_y\\
\vec e_\theta &= &- \sin \theta \vec e_x &+ \cos \theta \vec e_y
\end{aligned}
$$

Irá ser-nos útil saber as derivadas destes vetores unitários, para determinarmos a velocidade e aceleração de um corpo.

Visto que $\theta$ é uma função $\theta \equiv \theta(t)$, temos de ter atenção quando efetuamos a derivada de $\vec e_r$ e $\vec e_\theta$.
Para isto, temos de utilizar a [derivada da composta](/cdi-i/diferenciabilidade#função-derivada).

Assim:

$$
\begin{aligned}
\frac{\d \vec e_r}{\d t} &= \frac{\d \theta}{\d t} \frac{\d \left(\cos \theta \vec e_x + \sin \theta \vec e_y\right)}{\d t}\\
&= \dot \theta \left(- \sin \theta \vec e_x + \cos \theta \vec e_y\right)\\
&= \dot \theta \vec e_\theta\\
\\
\frac{\d \vec e_\theta}{\d t} &= \frac{\d \theta}{\d t} \frac{\d \left(- \sin \theta \vec e_x + \cos \theta \vec e_y\right)}{\d t}\\
&= \dot \theta \left(- \cos \theta \vec e_x - \sin \theta \vec e_y\right)\\
&= - \dot \theta \vec e_r
\end{aligned}
$$

Define-se $\dot \theta = \frac{\d \theta}{\d t}$ e $\ddot \theta = \frac{\d^2 \theta}{\d t^2}$ para simplificar a notação.

### Posição, Velocidade e Aceleração em Coordenadas Polares

Agora que sabemos derivar os vetores unitários $e_r$ e $e_\theta$, podemos escrever as expressões da posição, velocidade e aceleração
neste sistema de coordenadas.

[**Posição:**](color:green)

O corpo está a uma distância $r \equiv r(t)$ da origem.
Visto que o vetor unitário $\vec e_r$ tem direção da origem para a posição do corpo, podemos escrever a posição do corpo na forma:

$$
\vec r(t) = \smartcolor{green}{r \vec e_r}
$$

[**Velocidade:**](color:pink)

Como já sabemos, a [velocidade é a derivada da posição](/fis-i/kinematics-1d#velocidade-instantânea).
Então, pela derivada do produto e considerando $r \equiv r(t)$,

$$
\begin{aligned}
\vec v(t) &= \frac{\d \vec r}{\d t}\\
&= \frac{\d r \vec e_r}{\d t}\\
&= \frac{\d r}{\d t} \vec e_r + r \frac{\d \vec e_r}{\d t}\\
&= \smartcolor{pink}{\dot r \vec e_r + r \dot \theta \vec e_\theta}
\end{aligned}
$$

É importante então realçar que cada componente da velocidade tem um significado:

- [velocidade normal](color:orange): é normal à trajetória
- [velocidade tangencial](color:yellow): é tangencial à trajetória

Assim,

$$
\vec v = \smartcolor{orange}{\underbrace{\dot r \vec e_r}_{\text{velocidade normal}}} + \smartcolor{yellow}{\underbrace{r \dot \theta \vec e_\theta}_{\text{velocidade tangencial}}}
$$

[**Aceleração:**](color:purple)

Finalmente, sabemos também que a [aceleração é a derivada da velocidade](/fis-i/kinematics-1d#aceleração-média-e-instantânea).
Então, novamente pela derivada do produto e considerando $r \equiv r(t)$,

$$
\begin{aligned}
\vec a(t) &= \frac{\d \vec v}{\d t}\\
&= \left(\ddot r \vec e_r + \dot r \dot{\vec e_r}\right) + \left(\dot r \dot \theta \vec e_\theta + r \ddot \theta \vec e_\theta + r \theta \dot{\vec e_\theta}\right)\\
&= \smartcolor{purple}{\left(\ddot r - r \dot \theta^2 \right) \vec e_r + \left(r \ddot \theta + 2 \dot r \dot \theta\right) \vec e_\theta}
\end{aligned}
$$

Tal como na velocidade, vamos ter também duas componentes para a aceleração:

- [aceleração normal](color:orange): é normal à trajetória
  - influencia a direção do vetor velocidade
- [aceleração tangencial](color:yellow): é tangencial à trajetória
  - influencia a norma (magnitude) do vetor velocidade

Assim,

$$
\vec a = \smartcolor{orange}{\underbrace{\left(\ddot r - r \dot \theta^2 \right) \vec e_r}_{\text{aceleração normal}}} + \smartcolor{yellow}{\underbrace{\left(r \ddot \theta + 2 \dot r \dot \theta\right) \vec e_\theta}_{\text{aceleração tangencial}}}
$$

## Movimento Circular de Raio Constante

Num movimento circular com raio constante, temos uma simplificação das equações acima, visto que $\dot r = \ddot r = 0$.

Deste modo, ficamos com

$$
\begin{aligned}
\vec v &= \smartcolor{orange}{\underbrace{\xcancel{\dot r \vec e_r}}_{\text{velocidade normal}}} + \smartcolor{yellow}{\underbrace{r \dot \theta \vec e_\theta}_{\text{velocidade tangencial}}} &&= r \dot \theta \vec e_\theta\\
\\
\vec a &= \smartcolor{orange}{\underbrace{\left(\xcancel{\ddot r} - r \dot \theta^2 \right) \vec e_r}_{\text{aceleração normal}}} + \smartcolor{yellow}{\underbrace{\left(r \ddot \theta + \xcancel{2 \dot r \dot \theta} \right) \vec e_\theta}_{\text{aceleração tangencial}}} &&= - r \dot \theta^2 \vec e_r + r \ddot \theta \vec e_\theta
\end{aligned}
$$

Podemos reparar que num movimento circular, a velocidade é **sempre** tangencial à trajetória.

:::tip[Velocidade Angular]

A velocidade angular é a variação do ângulo $\theta$ por segundo.
A sua unidade SI é $\op{s}^{-1}$ e é dada por

$$
\omega = \frac{\d \theta}{\d t}
$$

Sabemos também que $v = r\omega$.

:::

Comparando a representação de um movimento circular em coordenadas cartesianas e coordenadas polares, considerando $r(t) \equiv R$, temos:

|            |                              Coordenadas Cartesianas                               |                       Coordenadas Polares                       |
| ---------: | :--------------------------------------------------------------------------------: | :-------------------------------------------------------------: |
|    Posição |             $\vec r = R \cos \theta \vec e_x + R \sin \theta \vec e_y$             |                      $\vec r = R \vec e_r$                      |
| Velocidade | $\vec v = R \dot \theta \left(-\sin \theta \vec e_x + \cos \theta \vec e_y\right)$ | $\vec v = R \dot \theta \vec e_\theta = R \omega \vec e_\theta$ |

Podemos concluir que utilizar coordenadas polares em movimentos circulares simplifica bastante o seu estudo.

:::tip[Aceleração Angular]

A velocidade angular é a variação da velocidade angular $\omega$ por segundo.
A sua unidade SI é $\op{s}^{-2}$ e é dada por

$$
\gamma = \frac{\d \omega}{\d t}
$$

:::

Estudando mais atentamente o comportamento da aceleração neste movimento, podemos obter o seguinte:

$$
\begin{darray}{ll}
a_T = R \ddot \theta = R \dot \omega = R \gamma & \text{Variação do módulo da velocidade}\\
a_N = -R \dot \theta^2 = -R \omega^2 = -\frac{v^2}{R} & \text{Variação da direção da velocidade}
\end{darray}
$$

### Casos Particulares

- Caso $\omega = \text{constante}$, temos que $\dot \omega = \gamma = 0 \implies a_T = 0$,
  pelo que estamos perante um **movimento circular uniforme**.

  Neste caso, $a_N$ é constante, normal e centrípeta (aponta para o "centro" da trajetória).

  O período da trajetória é $T = \frac{2\pi}{\omega} \quad (\op{s})$.

- Caso $R \to \infty$, estamos perante um **movimento retilíneo**, visto que

  $$
  a_N = -\frac{v^2}{R} \to 0
  $$

  pelo que a direção da velocidade nunca se altera.

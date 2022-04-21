---
title: Cheat Sheet 2º MAP 2021/2022
description: Cheat Sheet 2º MAP 2021/2022
path: /fis-i/cheatsheet/map-2
type: cheatsheets
---

# Cheat Sheet 2º MAP 2021/2022

## Corpo Rígido

$$
s = r\theta \quad\Leftrightarrow\quad \theta = \frac{s}{r}
$$

onde $s$ é o [**comprimento do arco**](color:orange), $r$ é o raio e $\theta$ é o ângulo.

Tem-se que $$\theta$$ é [**positivo**](color:green) no sentido [**contrário ao sentido dos ponteiros do relógio**](color:green) e [**negativo**](color:red) no sentido [**dos ponteiros do relógio**](color:red).

|         Nome          |                           Fórmula                            |             Unidades              |
| :-------------------: | :----------------------------------------------------------: | :-------------------------------: |
|    Posição Angular    |                           $\theta$                           |            $\op{rad}$             |
| Deslocamento Angular  |             $\Delta\theta = \theta_f - \theta_i$             |            $\op{rad}$             |
|  Velocidade Angular   |               $\omega = \frac{\d\theta}{\d t}$               |  $\op{rad}/\op{s} = \op{s}^{-1}$  |
|  Aceleração Angular   | $\alpha = \frac{\d\omega}{\d t} = \frac{\d^2\theta}{\d t^2}$ | $\op{rad}/\op{s}^2 = \op{s}^{-2}$ |
| Velocidade Tangencial |                        $v = r\omega$                         |          $\op{m}/\op{s}$          |
| Aceleração Tangencial |                       $a_t = r\alpha$                        |         $\op{m}/\op{s}^2$         |
| Aceleração Centrípeta |              $a_c = \frac{v^2}{r} = r\omega^2$               |         $\op{m}/\op{s}^2$         |

Todas as partículas de um objeto a rodar em torno de um _eixo fixo_ têm a mesma $\omega$ e $\alpha$, mas não têm as mesmas $v$ e $a_t$ visto o $r$ diferir.

:::details[Produto Externo]

Para determinar o sentido de $\vec{C} = \vec{A} \times \vec{B}$, usa-se a **Regra da Mão Direita**:

1. Estender a mão na direção de $\vec{A}$ (quase que como a dar um "passou-bem" nessa direção)
2. Enrolar os dedos na direção de $\vec{B}$ (fazer o ângulo mais pequeno entre $\vec{A}$ e $\vec{B}$)
3. O polegar indica o sentido de $\vec{C}$ (para cima ou para baixo, se $\vec{A}$ e $\vec{B}$ estiverem num plano horizontal)

Tem-se que:

- $\vec{A} \times \vec{B} = - \vec{B} \times \vec{A}$ (não é comutativo)
- $\vec{A}$ paralelo a $\vec{B} \implies \vec{A} \times \vec{B} = 0$ (e, portanto, o produto externo de um vetor com ele próprio é 0)
- $\vec{A}$ perpendicular a $\vec{B} \implies \vec{A} \times \vec{B} = AB$ (e, portanto, o produto externo de um vetor com ele próprio é o vetor próprio)
- $\frac{\d}{\d t}(\vec{A} \times \vec{B}) = \frac{\d\vec{A}}{\d t}\times \vec{B} + \vec{A}\times\frac{\d \vec{B}}{\d t}$

:::

|                Nome                |                      Fórmula                       |                Unidades                |              Análogo em Translações              |
| :--------------------------------: | :------------------------------------------------: | :------------------------------------: | :----------------------------------------------: |
| [Momento de Inércia](color:orange) |                $I = \int r^2 \d m$                 |        $\op{kg}\cdot \op{m}^2$         |                    Massa, $m$                    |
|    Energia Cinética Rotacional     | $E_c = \frac{1}{2}\smartcolor{orange}{I}\omega^2$  |                $\op{J}$                | Energia Cinética Linear, $E_c = \frac{1}{2}mv^2$ |
|        [Torque](color:blue)        |        $\vec{\tau} = \vec{F}\times\vec{r}$         |          $\op{N}\cdot\op{m}$           |  Força Externa, $\vec{F_{ext}} = m\vec{a_{CM}}$  |
|   [Momento Angular](color:green)   | $\vec{L} = \vec{r} \times \vec{p} = I\vec{\omega}$ | $\op{kg}\cdot\op{m^2}\cdot\op{s^{-1}}$ |       Momento Linear, $\vec{p} = m\vec{v}$       |

:::details[Momento de Inércia]

O [Momento de Inércia](color:orange) é dado por:

$$
I = \sum_i r_i^2m_i = \int r^2 \d m
$$

Apesar da fórmula acima funcionar sempre, algumas fórmulas podem ser mais simples:

|          Objeto          |          Eixo           | $I_{CM}$, Momento de Inércia no Centro de Massa |
| :----------------------: | :---------------------: | :---------------------------------------------: |
|        Arco Fino         |  Ortogonal pelo centro  |                     $MR^2$                      |
|        Arco Fino         |   Através do diâmetro   |      $\frac{1}{2}MR^2 + \frac{1}{12}Mh^2$       |
| Disco ou Cilindro Sólido |  Ortogonal pelo centro  |                $\frac{1}{2}MR^2$                |
|  Disco ou Cilindro Oco   |  Ortogonal pelo centro  |          $\frac{1}{2}M(R_1^2 + R_2^2)$          |
|  Esfera Uniforme Sólida  |    Através do centro    |                $\frac{2}{5}MR^2$                |
| Superfície Esférica Fina |    Através do centro    |                $\frac{2}{3}MR^2$                |
|    Vara Longa e Fina     |  Ortogonal pelo centro  |              $\frac{1}{12}M\ell^2$              |
|    Vara Longa e Fina     | Ortogonal por uma ponta |              $\frac{1}{3}M\ell^2$               |
|     Placa Retangular     |  Ortogonal pelo centro  |          $\frac{1}{12}M(w^2 + \ell^2)$          |

onde $M$ é a massa, $R$ ou $R_1 < R_2$ são os raios, $h$ é a espessura, $w$ é a largura e $\ell$ é o comprimento.

O [**Teorema do Eixo-Paralelo**](color:orange) diz que o momento de inércia através de qualquer eixo paralelo a um que passe no centro de massa a uma distância $D$ é dado por:

$$
I = I_{CM} + MD^2
$$

:::

::::details[Torque]
O [**Torque**](color:blue) ($\vec{\tau}$ ou $\vec{N}$), ou Momento de Força, mede a _tendência de um objeto rodar sobre um eixo_.

$$

\vec{\tau} = \vec{r} \times \vec{F}


$$

onde $\vec{F}$ é a força aplicada e $\vec{r}$ é o vetor entre o ponto pivot e o ponto de aplicação de $\vec{F}$.

A sua magnitude é dada por

$$

\tau = Fr\sin\phi = Fd


$$

onde $d = r\sin\phi$ é a distância perpendicular entre o ponto pivot e a _linha de ação_ de $\vec{F}$ (reta que a prolonga para ambos os lados).

**Não confundir torque com força: são diferentes.** O torque tem unidades $\op{N}\cdot\op{m}$ por ser uma força multiplicada por uma distância.

:::tip

$$

\sum\tau = I\alpha


$$

é o análogo rotacional da segunda lei de Newton, $\sum F = ma$.
:::

::::

::::details[Momento Angular]
O [**Momento Angular**](color:green) é dado por:

$$
\vec{L} = \vec{r} \times \vec{p}\quad\text{ou}\quad\vec{L} = I\vec{\omega}
$$

sendo a sua magnitude dada por $L = mvr\sin\phi$, onde $\phi$ é o ângulo entre $\vec{r}$ e $\vec{p}$.

Tem-se também que:

$$
\sum\vec{\tau} = \frac{\d \vec{L}}{\d t}
$$

:::tip[Conservação do Momento Angular]

O momento angular total de um sistema é constante (em magnitude e direção) se o torque externo a ser aplicado no sistema for zero, isto é, se o sistema for isolado.

$$
\sum\vec{\tau} = 0 \implies \sum\vec{L} = \op{constante}
$$

:::

::::

Para um [**sistema isolado**](color:orange), tem-se que:

$$
\begin{aligned}
\Delta E_m &= 0& \Leftrightarrow&& E_{m_i} &= E_{m_f} \\
\Delta \vec{p} &= 0& \Leftrightarrow&& \vec{p}_i &= \vec{p}_f \\
\Delta \vec{L} &= 0& \Leftrightarrow&& \vec{L}_i &= \vec{L}_f \\
\end{aligned}
$$

:::tip[Leis de Kepler]

1. [**Todos os planetas movem-se em orbitas elípticas com o Sol num dos focos.**](color:yellow)
2. [**O vetor raio do Sol a um planeta varre áreas iguais em intervais de tempo iguais.**](color:yellow)

A força gravítica entre o planeta e o Sol tem a mesma direção que o vetor raio, logo $\vec{\tau} = \vec{r} \times \vec{F} = 0$. Como $\vec{tau} = \frac{d\vec{L}}{d\vec{t}} = 0$, conclui-se que o momento angular $\vec{L}$ do planeta é constante.

3. [**O quadrado do período orbital de qualquer planeta é proporcional ao cubo do eixo semi-maior da sua órbita.**](color:yellow)

$$
T^2 = K_Sa^3
$$

onde $T$ é o período orbital, $a$ é o eixo semi-maior e $K_S$ é uma constante específica ao Sol ($S$) dada por:

$$
K_S = \frac{4\pi^2}{GM_S}
$$

:::

## Estabilidade de Sistemas

A [**Lei de Hook**](color:orange) diz que a **força de restituição** de uma mola (_spring_) é dada por:

$$
F_s = -kx
$$

onde $k$ é a constante de elasticidade característica da mola, dada em $\op{N}/\op{m}$ e $x$ é a distância da deformação da mola até à posição de equilíbrio.

A posição da mola é dada por:

$$
x(t) = A\cos(\omega t + \phi)
$$

onde $A$ é a amplitude da mola, $\omega$ é a frequência angular e $\phi$ é o ângulo inicial de fase. A função $x(t)$ é periódica de período $2\pi$.

$$
\omega = \sqrt{\frac{k}{m}}
$$

[...to be continued](color:pink)

## Sistema Termodinâmico

$$
1\op{cal} = 4.186\op{J}
$$

**Expansão Térmica**

$$
\frac{\Delta \ell}{\ell} = \alpha\Delta T \quad \frac{\Delta V}{V} = \beta\Delta T
$$

onde $\ell$ é o comprimento, $\alpha$ é o coeficiente de dilatação linear ($\op{ºC}^{-1}$), $V$ é o volume e $\beta$ é o coeficiente de dilatação ($\op{ºC}^{-1}$).

**Calor**

$$
C = \frac{\Delta Q}{\Delta T}\quad c = \frac{C}{m} = \frac{\Delta Q}{m\Delta T}
$$

onde $C$ é a capacidade calorífica ($\op{J}\op{K}^{-1}$) e $c$ é a capacidade calorífica mássica ($\op{J}\op{kg}^{-1}\op{K}^{-1}$).

**Energia para Mudar de Temperatura**

$$
\Delta Q = mc\Delta T
$$

**Transições de Fase**

$$
\quad \Delta Q = m\lambda
$$

onde $c$ é o calor específico mássico e $\lambda$ é o calor latente ($\op{K}\op{J}\op{Kg}^{-1}$).

**Condução**

$$
Q = kA\frac{\Delta T}{\ell}\Delta t
$$

[...to be improved](color:pink)

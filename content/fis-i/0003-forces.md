---
title: Forças
description: >-
  Leis de Newton.
  Vários tipos de forças.
  Forças de atrito.
path: /fis-i/forces
type: content
---

# Forças

```toc

```

## Leis de Newton

As [Leis de Newton](https://en.wikipedia.org/wiki/Newton%27s_laws_of_motion)
descrevem relações entre o **movimento** de um objeto e as **forças** que atuam no mesmo.

As Leis abaixo só se aplicam num referencial inercial. Mas o que é um referencial inercial?  
É mais fácil com um exemplo. Consideremos um autocarro com um pêndulo.
Se o autocarro estiver em repouso, o pêndulo também o está
e as únicas forças que atuam no mesmo são o peso e a tensão.
No entanto, se o autocarro iniciar movimento com aceleração constante,
o pêndulo irá ter força resultante não nula, pelo que, pela Primeira Lei,
terá de estar em movimento.
Ora, se o nosso referencial for alguém dentro do autocarro,
o pêndulo está em repouso ([**referencial não inercial**](color:red)).
Se o referencial for algo exterior ao autocarro, por exemplo a estrada,
o pêndulo irá estar em movimento, de acordo com a Primeira Lei ([**referencial inercial**](color:green)).
Um [referencial é inercial](https://en.wikipedia.org/wiki/Inertial_frame_of_reference) quando não está sob
aceleração.

### Primeira Lei

Também chamada a "Lei da Inércia", esta lei diz que se a soma das forças das forças
aplicadas num corpo for nula, a velocidade desse corpo não se altera.  
Por outras palavras, um corpo em repouso permanece em repouso e um corpo em movimento
permanece em movimento com velocidade constante, se e só se a soma das forças
aplicadas no mesmo for nula.

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

## Tipos de Forças

Já vimos algumas forças até agora, mas iremos aprofundar quais os tipos de forças que existem, quais são e quando existem.

- [**Forças de Contacto**](color:yellow)

  - Normal (Reação Normal)
  - Tensão
  - Força Elástica

    $\vec F = -k(l-l_0) \vec e_l$

  - Impulsão

    $\vec I = \text{Peso do volume deslocado} = V \cdot \rho_{\text{liq}} \cdot g$

  - Atrito Sólido-Sólido

    Em repouso, $\vec F_{\text{atrito}} \leq \mu_s \cdot |\vec N|$  
    Em movimento, $\vec F_{\text{atrito}} = \mu_k \cdot |\vec N|$

  - Atrito Sólido-Fluido

    Regime em baixas velocidades: $\vec F = - b\vec v$  
    Regime a velocidades elevadas: $\vec F = -k v^2 \vec e_v$

- [**Forças de Campo**](color:green) (forças de não contacto)

  - Força Gravitacional

    $\vec F = - G \frac{M_1 M_2}{r^2} \vec e_r$

    $G = 6.67 \times 10^{-11} \op{Nm}^2 \op{kg}^{-2}$

  - Peso

    $\vec P = m \vec g$

    $|\vec g| = 9.8 \op{ms}^{-2}$ (na superfície da terra)

  - Força Elétrica

    $\vec F = + \frac{1}{4 \pi \epsilon_0} \frac{Q_1 Q_2}{r^2} \vec e_r$

    $\epsilon_0 = 8.85 \times 10^{-12} \op{c}^2 / \op{Nm}^2$

  - Força Lorentz

    $\vec F = q \vec v \times \vec B$

## Análise de Sistemas de Forças

:::tip

Quando estamos a analisar um exercício de forças, devemos seguir alguns passos de forma a conseguir chegar ao fim.
Claro que como com qualquer lista de passos, não precisamos de os seguir à risca, mas ajudam bastante na resolução.

1. Isolar objetos
2. Fazer o diagrama de forças
3. Escolher o sistema de coordenadas
4. Escrever as equações do movimento ($\vec F = m \vec a$)
5. Aplicar restrições (e.g. algumas variáveis serão constantes, outras nulas)
6. Resolver as equações

:::

Tomemos como exemplo uma força a ser aplicada em dois blocos de massa $m_1$ e $m_2$
respetivamente, tal como representado na figura abaixo.
Desprezando a força de atrito, qual é a aceleração de ambos os blocos,
e que força exerce o bloco 1 no bloco 2?

![Bloco 1 e Bloco 2, com uma força F aplicada no bloco 1](./assets/0003-force-systems-blocks-with-force-f.svg#dark=3)

1. Comecemos por isolar os objetos. Claramente temos presentes dois blocos.
   Não podemos considerar os dois blocos como um todo, visto que queremos estudar
   as interações entre eles ($\vec F_{1,2}$/$\vec F_{2,1}$).
2. Desenhamos então o diagrama de forças.  
   No bloco 1, atuam a força exterior $\vec F$, o peso e a normal, e a força que
   o bloco 2 exerce no bloco 1 ($\vec F_{2,1}$).  
   De forma semelhante, no bloco 2 atuam o peso e a normal, e a força que o
   bloco 1 exerce no bloco 2 ($\vec F_{1,2}$).

   ![Diagrama de Forças](./assets/0003-force-systems-blocks-force-diagram.svg#dark=3)

3. Claramente o sistema de coordenadas mais indicado para esta situação é o sistema de **coordenadas cartesianas**.
4. Vamos agora escrever as equações que descrevem o sistema de forças.

   |            | Corpo 1                    | Corpo 2                  |
   | ---------- | -------------------------- | ------------------------ |
   | $\vec e_x$ | $F - F_{2,1} = m_1 a_{1x}$ | $F_{1,2} = m_2 a_{2x}$   |
   | $\vec e_y$ | $N_1 - P_1 = m_1 a_{1y}$   | $N_2 - P_2 = m_2 a_{2y}$ |

5. Aplicamos agora as restrições. Sabemos que os blocos não se movem na vertical, pelo que $y_1~=~y_2~=~\text{constante}$.
   Sabemos também pela [Terceira Lei de Newton](#terceira-lei) que $F_{1,2} = F_{2,1}$.
   Finalmente, os dois blocos movimentam-se juntamente, pelo que as suas velocidades são iguais, $\dot x_1 = \dot x_2$.
6. Resolvendo agora, vemos que como $y_1 = y_2 = \text{constante}$, temos que $a_{1y} = a_{2y} = 0$.
   Também reparamos que, se $\dot x_1 = \dot x_2$, então $a_{x1} = a_{x2} = a_x$.

   Portanto podemos agora manipular as equações do ponto 4).

   Para a componente vertical,

   $$
   \begin{darray}{c}
   N_1 - P_1 = 0 \implies N_1 = P_1 & N_2 - P_2 = 0 \implies N_2 = P_2
   \end{darray}
   $$

   Para a componente horizontal,

   $$
   \begin{darray}{c}
   F - F_{2,1} = m_1 a_{1x} \Leftrightarrow F - F_{1,2} = m_1 a_x\\
   F_{1,2} = m_2 a_{2x} \Leftrightarrow F_{1,2} = m_2 a_x\\
   \end{darray}
   $$

   Juntando as duas:

   $$
   F - m_2 a_x = m_1 a_x \Leftrightarrow a_x = \frac{F}{m_1 + m_2}
   $$

## Força de Atrito Sólido-Sólido

Quando temos interação entre dois sólidos, pode existir uma força contrária ao movimento (ou que previne o movimento),
chamada [**Força de Atrito**](https://en.wikipedia.org/wiki/Friction#Dry_friction).

![Força de atrito a ser aplicada num bloco](./assets/0003-friction-force-diagram.svg#dark=3)

Quando o corpo está em repouso e estamos a aplicar-lhe uma força, estamos perante uma [**Força de Atrito Estático**](color:green).
A intensidade dessa força acompanha a força aplicada, contrariando-a, evitando assim o movimento. Por razões
óbvias, a intensidade da força de atrito nunca pode exceder a intensidade da força aplicada, caso contrário
observaríamos movimento no sentido oposto.  
Assim, a força de atrito estático é dada por:

$$
\vec F_{\text{atrito}} \leq \mu_s \cdot |\vec N|
$$

onde $\mu_s$ representa o coeficiente de atrito estático (_static_).

Quando é alcançado o valor máximo para $F_{\text{atrito}}$, o corpo inicia o seu movimento, onde
começa a atuar a [**Força de Atrito Cinético**](color:orange), com intensidade fixa, e que
geralmente tem um coeficiente de atrito mais baixo.  
Assim, a força de atrito cinético é dada por:

$$
\vec F_{\text{atrito}} = \mu_k \cdot |\vec N|
$$

onde $\mu_k$ representa o coeficiente de atrito cinético (_kinetic_).

Podemos observar este seguinte gráfico para estudar a intensidade da força de atrito, $F_a$,
em função da intensidade da força aplicada, $F$.

![Força de atrito em função da força aplicada](./assets/0003-friction-force-chart.svg#dark=3)

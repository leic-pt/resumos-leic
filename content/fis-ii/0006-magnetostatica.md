---
title: Corrente e Magnetostática
description: >-
  Magnetostática
path: /fis-ii/magnetostatica
type: content
---

# Corrente e Magnetostática

```toc

```

## Corrente Elétrica

### Densidade de Corrente

Na Eletrostática estudámos que as cargas que criavam um campo estavam estáticas, ao contrário da Carga de Prova que se podia movimentar livremente.\
Na Corrente Elétrica estudaremos cargas de fonte que não se encontram paradas.\
Temos assim de definir o conceito de Corrente Elétrica.

- A Corrente Elétrica corresponde ao fluxo de eletrões em movimento com um fluxo definido.

![Perp](./imgs/0006-perp.png#dark=1)

Usando o conceito matemático de fluxo podemos definir a Densidade de Corrente $\vec J$

$$
\cfrac{dq}{dt} = \vec J \ \vec n \ dS = \vec J \ d \vec S
$$

A Densidade de Corrente $\vec J$ é a quantidade de carga que passa através de um elemento de superfície perpendicular à corrente das cargas em movimento por unidade de tempo

![Definição](./imgs/0006-def.png#dark=0)

A Densidade de Corrente está relacionada com a velocidade média do fluxo das cargas.

Para uma distribuição de cargas com densidade $\rho$ com uma velocidade (média) $\vec v$, quando passam por um elemento de superfície $dS$ a carga $dq$ que atravessa essa superfície num intervalo de tempo $dt$ é igual à cargas contida num cilindro de base $dS$ e altura $(\vec v dt) \vec n$

$$
dq = \rho [(\vec v dt) \vec n \ dS] \implies \cfrac{dq}{dt} = (\rho \vec v) \ \vec n \ d  S \implies \vec J = \rho \vec v
$$

Para $N$ cargas por unidade de volume temos que

$$
\vec J = Nq \vec v
$$

### Corrente Elétrica

A carga total $I$ que passa por unidade de tempo através da superfície $S$ chama-se\
Corrente Elétrica e é igual ao fluxo da densidade de corrente através da superfície

$$
I = \int_{S} \vec J \ d \vec S
$$

- Mede-se em Ampere $\ 1A = 1 C s^{-1}$
- Representa a taxa a que a carga deixa um volume delimitado por uma superfície $S$

A Carga Elétrica é indestrutível, isto é, é conservada, não se pode criar nem destruir.

A Lei da Conservação da Carga é assim dada por

$$
- \cfrac{dQ_{int}}{dt} = \oint_{S} \vec J \ d \vec S
$$

$S$ é uma superfície fechada.

A Lei da Conservação da Carga pode também ser escrita na forma diferencial

$$
\vec \nabla \cdot \vec J = - \cfrac{d \rho}{dt}
$$

No caso de um fio de comprimento $L$ e secção $A$ e de corrente uniforme o elemento de volume é $\rho(LA) = \lambda$\
Assim se o fio for muito fino temos uma densidade linear de carga $I = \lambda v$\
Se as cargas positivas e negativas se movimentarem no fio $I = \lambda_{+} v_{+} + \lambda_{-} v_{-}$

### Lei de Kirchhoff

:::danger[Não sai no 2ºTeste]
As Leis de Kirchhoff não serão avaliadas no segundo teste
:::

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
\int \vec J \ d \vec S = - \cfrac{dQ}{dt} = 0
$$

$$
\int \vec J \ d  \vec S = \int_{S_1} \vec j_1 \ d  \vec S_1 + \int_{S_2} \vec j_2 \ d \vec S_2 + \int_{S_3} \vec j_3 \ d \vec S_3 = 0
$$

$$
-I_1 + I_2 + I_3 = 0\\

\sum_{k=1}^N I_{k} = 0
$$

## Lei de Ohm

Para ter corrente é preciso empurrar as cargas, a velocidade que adquirem depende das características do material.

A Densidade de Corrente $\vec J$ é proporcional à força por unidade de carga

$$
\vec J = \sigma \vec f
$$

$\sigma$ é uma constante experimental que depende do material e chama-se Condutividade do meio.

Mais familiar deverá ser o termo $\rho = \cfrac{1}{\sigma}$ que é a Resistividade (Elétrica).

Os [Isolantes](./condutores#isolante-no-meio-de-um-condensador) também têm uma condutividade mas que difere na ordem de $10^{22}$ a comparar com os Condutores.
Por simplificação vamos assumir que os metais são condutores perfeitos $(\sigma = \infty)$

![Tabela](./imgs/0006-tab.png#dark=1)

Nesta parte da matéria assumimos que a força aplicada nas cargas é a do Campo Eletromagnético.\
Para um único Campo Elétrico:

$$
\vec J = \sigma \vec E
$$

Num condutor em Equilíbrio Eletrostático temos $\vec E = 0$ e $\vec J = 0$

Para condutores perfeitos $\vec E = \cfrac{\vec J}\sigma = 0$, mesmo que esteja corrente a fluir.

Conclui-se que o campo elétrico necessário para movimentar as cargas é quase nulo.
Assim consideramos estes fios como Equipotenciais.\
Já as resistências são feitos de materiais que conduzem pouco.

A Lei de Ohm é então dada por

$$
R = \cfrac{V}I \ , \ \ \ \ \ \ R = \cfrac{\rho L}{A}
$$

$R$ é a Resistência, expressa-se em ohms $(\Omega)$

$1 \Omega = 1 V A^{-1}$

Quando a carga que entra num dado volume por unidade de tempo é igual à que sai, dizemos que temos uma Corrente Estacionária e a sua Densidade de Carga $\rho$ é constante.

$$
\cfrac{\partial \rho}{\partial t} = \vec \nabla \vec J = 0
$$

Para correntes estacionárias e condutividade uniforme

$$
\vec \nabla \vec J = \sigma \vec \nabla \vec E = 0
$$

Isto significa que qualquer carga não contrabalançada se situa na superfície.

A partir das equações anteriores podemos calcular as condições fronteira onde numa corrente estacionária, as cargas não se acumulam na fronteira

$$
\vec \nabla \vec J =  0 \implies \int \vec J \ d \vec S = 0
$$

$$
\vec \nabla \times \vec E = \vec \nabla \times (\cfrac{\vec J}\sigma) = 0 \implies \int (\cfrac{\vec J}\sigma) \ d \vec l = 0
$$

### Lei de Joule

$$
P = VI = RI^2
$$

$P$ - Potência Emitida

Só iremos estudar correntes estacionárias que produzem campos magnéticos constantes.

Uma única carga elétrica em movimento não é uma corrente estacionária.

## A Experiência de Ampère

![Experiência](./imgs/0006-exp.png#dark=1)

Se colocarmos 2 fios condutores em paralelo com uma certa corrente podemos observar certos fenómenos:

- Quando a corrente nos dois fios tem a mesma direção os fios atraem-se

- Quando a corrente nos dois fios tem a direção oposta os fios repelem-se

Ampère concluiu assim que este fenómenos eram explicados pela Força Magnética.

Enquanto que uma carga parada produz um Campo Elétrico $\vec E$, uma carga em movimento produz um Campo Elétrico e um Campo Magnético $\vec B$

![Bússola](./imgs/0006-bussola.png#dark=1)

Ørsted verificou isso usando uma bússola e vendo que esta mudava a direção perto dos fios, sobre o efeito de corrente.

### Força de Lorentz

![fixe](./imgs/0006-fixe.png#dark=1)

A Força (de Lorentz) $\vec F$ que age sobre o fio pode ser descrita como o produto externo entre a Velocidade $\vec v$ de uma carga $Q$ e um Campo Magnético $\vec B$ que anda em círculo em torno do fio

$$
\vec F = Q(\vec v \times \vec B)
$$

Na presença de campos elétricos e magnéticos:

$$
\vec F = Q(\vec E + \vec v \times \vec B)
$$

As Forças Magnéticas não produzem Trabalho.\
Se a carga $Q$ se mover de $d \vec l = \vec v dt$ o trabalho é

$$
dW = \vec F \ d \vec l = Q (\vec v \times \vec B) \ \vec v \ dt = Q(\vec v \times \vec v) \ \vec B \ dt = 0
$$

Esta Força apenas pode mudar a trajetória de uma partícula mas nunca pode acelerá-la

Assim a Força por unidade de volume é

$$
\cfrac{d \vec F}{d V} = \vec J \times \vec B
$$

Para o Vetor Corrente $\vec I = \vec J A$, podemos escrever

$$
\cfrac{d \vec F}{dl} = \vec I \times \vec B
$$

A Força Magnética num fio depende apenas da corrente total e não depende da carga de cada partícula nem do seu sinal.

Num fio se o elemento $dl$ for suficientemente pequeno temos $d \vec l$ e $\vec I$ na mesma direção e portanto é equivalente escrever

$$
d \vec F = I (d \vec l \times \vec B )
$$

Para $I$ constante

$$
\vec F = \int I (d \vec l \times \vec B) \implies \vec F = I \int  (d \vec l \times \vec B)
$$

Sendo $\vec k$ a corrente (vetorial) por unidade de largura perpendicular ao fluxo:

$$
\vec k = \sigma \vec v
$$

Onde $\sigma$ é a densidade superficial de carga (móvel) e $\vec v$ a velocidade das cargas,
$\vec k$ varia de ponto para ponto porque $\sigma$ e $\vec v$ podem variar.

A Força Magnética na corrente superficial é

$$
\vec F = \int (\vec v \times \vec B) \sigma \ dS = \int (\vec k \times \vec B) \ dS
$$

Para uma Corrente Volumétrica

$$
\vec F = \int (\vec J \times \vec B) \ dV
$$

## Lei de Biot-Savart

![Biot](./imgs/0006-biot.png#dark=1)

O Campo Magnético por um fio percorrido por corrente estacionária $\vec I$ é dado por

$$
\vec B (\vec r) = \cfrac {\mu_{0}}{4 \pi} \int_{C} \cfrac{\vec I \times \vec e_{r}}{r^2} \ dl  ' = \cfrac {\mu_{0} '}{4 \pi} \int_{C} \cfrac{d \vec I  ' \times \vec e_{r}}{r^2}
$$

A integração é feita segundo a direção da corrente.

$\mu_{0} = 4 \pi \times 10^{-7} N \ A^{-2}$ é a Permeabilidade do Espaço Livre

Este número é exato e não uma constante empírica. Serve para definir o Ampere, que define o Coulomb. As unidades foram definidas de forma a que $\vec B$ seja expresso em Newton por Ampere-metro ou Tesla (T) $\ 1 T =  1 N A^{-1} \ m ^{-1}$
Usa-se mais a unidade Gausss od sistema CGS: 1 Tesla $=10^4$ Gauss

Para temos de comparação, o Campo Magnético terrestre é igual a 0.5 Gauss.
No Cern foi possível existe um íman com o valor de 3.8 Tesla

## Lei de Ampère

:::warning[Dedução da Lei de Ampère]
Existem nos slides uma explicação de como se chegou a estas Leis
:::

$$
\vec \nabla \times \vec B = \mu_{0} \vec J
$$

$$
\oint \vec B \ d \vec l = \mu_{0} I_{i}
$$

Slides:

- [Slides Módulo 4](https://drive.google.com/file/d/1sAiyAEvUtG6AwV521EnQ7KraqpdR56tS/view?usp=sharing)

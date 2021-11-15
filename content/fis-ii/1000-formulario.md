---
title: Formulário
description: Formulário com Fórmulas e Constantes
path: /fis-ii/formulario
type: cheatsheets
---

# Formulário

[Formulário Oficial da Cadeira (PDF)](https://drive.google.com/file/d/1Ouk2xSUb-f50SnUSC4HWQzAzfl825A_J/view?usp=sharing)

```toc

```

## Ordens de Grandeza

Micro $(\mu)= 10^{-6} $

Nano $(n)= 10^{-9}$

Angstrom $(\AA)= 10^{-10}$

Pico $(p)= 10^{-12}$

## Constantes Universais

$c$ - Velocidade da Luz $= 3\times10^8 \ m/s $ (Metros por Segundo)

$h$ - Constante de Planck $= 6.626\times10^{-34} J s$ (Joules Segundo)

Unidade $eV$ (eletrão-Volt) $= 1.6\times10^{-19 }J $ (Joules)

O eletrão-Volt corresponde à energia ganha por 1 eletrão quando se desloca de 1 pólo positivo para 1 pólo negativo na distância de 1 metro.

$\epsilon_0$- Permitividade Elétrica do Espaço Livre $= 8.85 \times 10^{-12}\ C^2 \ N ^{-1} \ m^{-2} $

$\mu_{0}$ - Permeabilidade do Espaço Livre $= 4 \pi \times 10^{-7}\  N \ A^{-2}$

## Fórmulas de Mecânica

$v = \lambda \times f \ $

$v$ - Velocidade $\ \ \lambda$ - Comprimento de Onda $\ \ f$ - Frequência

$\omega = \cfrac{2\pi}{T} $

$\omega$ - Velocidade Angular $\ \ T$ - Período

$v = r\times \omega$

$v$ - Velocidade $\ \ r$ - Raio$\ \ \omega$ - Velocidade Angular

$\vec{p} = m\times \vec{v}$

$\vec{p}$ - Momento Linear $\ \ m$ - Massa $\ \ \vec{v}$ - Velocidade

## Leis da Termodinâmica

### 1ª Lei da Termodinâmica ou Lei de Joule:

$$ \Delta U = Q - W $$

$\Delta U$ - Variação de energia interna do sistema
$\ \ Q$ - Calor $\ \ W$ - Trabalho

### 2ª Lei da Termodinâmica

$\eta < 100\ \% $

$\eta$ - Rendimento

### 3ª Lei da Termodinâmica ou Lei de Nernst

À medida que a temperatura de um sistema tende para o zero absoluto a sua entropia tende para um valor constante que é independente da pressão, estado de agregação, etc.

## Fotões

$
E = h\times v
$

$E$ - Energia $\ \ h$ - Constante de Planck $\ \ v$ - Frequência

$K =  h(v-v_0)$

$K$ - Energia Cinética $\ \ h$ - Constante de Planck $\ \ v$ - Frequência $\ \ v_0$ - Frequência Mínima

$$ p = \cfrac{E}{c} = \cfrac{hv}{c} = \cfrac{h} {\lambda} $$

$p$ - Momento Linear $\ \ E$ - Energia $\ \ c$ - Velocidade da Luz \
$h$ - Constante de Planck $\ \ v$ - Frequência $\ \ \lambda$ - Comprimento de Onda

Bosão - Sem restrições onde as partículas se encontram em cada estado

Fermião - 1 partícula por estado

## Eletrostática

$
\vec F = \sum\limits_{i =1}^{n} \vec F_i
$

$\vec F$ - Força exercida por todas as cargas num campo numa carga de prova.\
$\vec F_i$ - Força exercida por 1 carga que se encontra no campo numa carga de prova.

### Lei de Coulomb

$\vec F = \cfrac{Q}{4\pi \epsilon_0}\ \sum\limits_{i =1}^{n} \cfrac{q_i}{|\vec r - \vec r_i'|^2}\ \vec e_{r_i}$

$\vec F$ - Força na carga de prova $Q$ criada pelo campo\
$\epsilon_0$- Permitividade Elétrica do Espaço Livre\
$Q$ e$\ q_i$ - Cargas - unidades SI - Coulomb ($C$)\
$\vec r$ e $\vec r_i \ '$ - Vetores com origem na origem e que apontam para as cargas $Q$ e $q_i$, respetivamente.\
$\vec e_r = \cfrac{(\vec r - \vec r_i \ ')}{|\vec r -\vec r_i \ '|}$\
Esta força é atrativa se as cargas tiverem sinais opostos.

$
\vec E(\vec r) = \cfrac{\vec F}{Q}
$

$\vec E(\vec r)$ - Campo Elétrico - Newton por Coulomb ($N/C$)\
$\vec F$ - Força na carga de prova $Q$ criada pelo Campo $\ \ Q$ - Carga de Prova

### Distribuição Contínua de Carga

$
\vec E(\vec r) = \cfrac{1}{4\pi \epsilon_0} \int_{\vartheta} \cfrac{dq}{|\vec r - \vec r \ ' |^2} \ \vec e_r
$

$\vec E(\vec r)$ - Campo Elétrico $\  \ \vartheta$ - Linha, Superfície, Volume
$\ \ dq$ - Densidade de Carga

## Fluxo

$
\phi_E \equiv \int_S \vec E\ d\vec S
$

$\phi_E$ - Fluxo do Campo Elétrico $\ \ \vec E$ - Campo Elétrico $\ \ S$- Superfície

### Lei de Gauss (Versão Integral)

$
\oint \vec E \cdot d \vec S = \cfrac{Q_{inc}}{\epsilon_0}
$

$\vec E$ - Campo Eletrostático $\ \ \vec S$- Superfície $\ \ \epsilon_0$ - Permitividade Elétrica do Espaço Livre\
$Q_{inc} = \sum\limits_{i=1}^{N} q_i$ - carga contida na superfície

### Lei de Gauss (Versão Diferencial)

$
\vec \nabla \cdot \vec E = \cfrac{\rho}{\epsilon_0}
$

$\vec E$ - Campo Eletrostático $\ \ \rho$ - Densidade de Carga $\ \ \epsilon_0$ - Permitividade Elétrica do Espaço Livre

$
\vec \nabla \times \vec E = 0
$

$\vec E$ - Campo Eletrostático

$
\int_A^B \vec E \cdot d \vec l = V(B) -V(A)
$

$A$ e $B$ - Caminho de $A$ a $B$
$\ \ \vec E$ - Campo Eletrostático
$\ \ V$ - Função Escalar

## Potencial

$V(\vec r) = - \int_O^{\vec r} \vec E \cdot d \vec l$

$\vec r$ - Ponto
$\ \ \vec E(\vec r)$ - Campo Elétrico
$\ \ V$ - Potencial Elétrico

$
\vec E = -\vec \nabla \cdot V
$

$\vec E(\vec r)$ - Campo Elétrico
$\ \ V$ - Potencial Elétrico

$
V (\vec r ) = \cfrac {1}{4 \pi \epsilon_0} \sum_{i=1}^N \cfrac{q_i}{|\vec r - \vec r_i|}
$

### Distribuição Contínua de Carga (Volume, superfície ou linha)

$
V (\vec r) = \cfrac {1}{4 \pi \epsilon_0} \int_D \cfrac{\rho (\vec r \ ')}{|\vec r \ ' - \vec r_i|} d \tau \ '
$

### Equação de Poisson 🐟

$
\nabla^2 V = \cfrac{\rho}{\epsilon_0}
$

### Equação de Laplace

Se $\rho = 0$

$
\nabla^2 V = 0
$

### Trabalho

$
V(B) - V(A) = \cfrac{W}{Q}
$

### Energia de Distribuição de Cargas

$
W = \cfrac {1}{2} \sum_{i=1}^{N} q_i V(\vec r_i)
$

Energia Distribuição Contínua de Carga

$
W = \cfrac {\epsilon_0}{2} \int_\Omega E^2 d \tau
$

## Condutores

$\vec E = 0 \implies \rho = 0$

$\vec E$ - Campo Elétrico total no interior do condutor $\rho$ - densidade total de carga

$
W = Q[V(B) - V(A)] = - \int_A^B \vec E \cdot d \vec l
$

$\vec E = 0  \wedge \vec E \perp d\vec l \implies W = 0 \implies V(B) = V(A)$

$\vec E$ - Campo Elétrico total no interior do condutor\
$V$ - Potencial $\ \ W$ - Trabalho

## Condensador

$
\Delta V = E \cdot d
$

$\Delta V$ - Diferença de Potencial $\ \ E$ - Campo Elétrico $\ \ d$ - Distância entre as 2 Placas

$
C = \cfrac{Q} {|\Delta V|}
$

$C$ - Capacitância (ou Capacidade) $\ \ Q$ - Carga da Placa Positiva $\ \ \Delta V$ - Diferença de Potencial

Para 2 placas:

$C = \cfrac{\epsilon_{0} A}{d}$

$C$ - Capacitância (ou Capacidade) $\ \ \epsilon_{0}$ - Constante\
$A$ - Área da Placa $\ \ d$ - Distância entre as 2 Placas

### Condensadores em Série

$
C = \cfrac{Q_1+ Q_2 + Q_3}V = \cfrac{Q_1}V + \cfrac{ Q_2 }V + \cfrac{ Q_3}V = C_1 + C_2 + C_3
$

### Condensadores em Paralelo

$
C = \cfrac{Q}{V_1 + V_2 + V_3} = \cfrac{1}C = \cfrac {1}{ C_1 } + \cfrac {1}{ C_2 } + \cfrac {1}{ C_3}
$

### Trabalho

$
W = \cfrac{CV^2}{2}
$

$W$ - Trabalho $\ \ C$ - Capacitância (ou Capacidade) $\ \ V$ - Potencial

### Cheat-Sheet

![Tabela](./imgs/1000-tabel.png#dark=0)

## Dielétricos

$C = \cfrac{\epsilon_{0} A}{d}$

$C$ - Capacitância (ou Capacidade) $\ \ \epsilon_{0}$ - Constante\
$A$ - Área da Placa $\ \ d$ - Distância entre as 2 Placas

$
\vec P = N \vec p
$

$P$ - Momento dipolar por unidade de Volume $\ \ N$ - Número de Cargas $\ \ p$ - (IDK)

$
\sigma_{pol} = Ndq_e = P
$

$\sigma_{pol}$ - Densidade de Carga Superficial $\ \ N$ - Número de Cargas\
$q_e$ - Carga Eletrónica $\ \ P$ - Momento dipolar por unidade de Volume

$
\vec P = \chi \epsilon_0 \vec E
$

$P$ - Momento dipolar por unidade de Volume $\ \ \chi$ - Constante de Susceptibilidade Elétrica do Dielétrico

$
E = \cfrac{\sigma_{pc}}{\epsilon_0} \cfrac{1}{1+ \chi}
$

$\cfrac{1}{1+ \chi}$ - Quanto o Campo Diminuiu no Interior do Dielétrico

$K = 1 + \chi$

$k$ - Constante Dielétrica do Meio - Capacitância aumenta por fator $k$

## Corrente

$
\vec J = Nq \vec v
$

$\vec J$ - Densidade de Corrente $\ \ N$ - Número de Cargas $\ \ \vec v$ - Velocidade (média)

$
I = \int_{S} \vec J \ d \vec S
$

$I$ - Corrente Elétrica $\ \ \vec J$ - Densidade de Corrente $\ \ S$ - Superfície

$
\vec J = \sigma \vec f
$

$\vec J$ - Densidade de Corrente $\ \ \sigma$ - Condutividade do Meio (Constante) $\vec f$ - força

### Lei de Ohm

$R = \cfrac{V}I$

$R$ - Resistência Elétrica $\ \ V$ - Diferença de Potencial $\ \ I$ - Corrente Elétrica

### Lei de Joule

$P = VI = RI^2$

$P$ - Potência Emitida (Dissipada) $\ \ V$ - Diferença de Potencial\
$I$ - Corrente Elétrica $\ \ R$ - Resistência Elétrica

## Magnetostática

$\vec F = Q(\vec E + \vec v \times \vec B)$

$\vec F$ - Força de Lorentz $\ \ Q$ - Carga $\ \ \vec E$ - Campo Elétrico\
$\vec v$ - Velocidade da Carga $\ \ \vec B$ - Campo Magnético

### Lei de Biot-Savart

$
\vec B (\vec r) = \cfrac {\mu_{0}}{4 \pi} \int_{C} \cfrac{\vec I \times \vec e_{r}}{r^2} \ dl  '
$

$vec B (\vec r)$ - Campo Magnético $\ \ \vec I$ - Corrente Elétrica $\ \ r$ - Distância a um Ponto

### Lei de Ampére

$\vec \nabla \times \vec B = \mu_{0} \vec J$

$\vec B$ - Campo Magnético $\ \ J$ - Densidade de Corrente

$\oint \vec B \ d \vec l = \mu_{0} I_{i}$

$\vec B$ - Campo Magnético $\ \ I_i$ - Intensidade de Corrente induzida

## Equações de Maxwell

### Lei de Gauss - Campo Elétrico

$
\oint \vec E \cdot d \vec S = \cfrac{Q_{inc}}{\epsilon_0}
$

### Lei de Gauss - Campo Magnético

$
\oint \vec B \cdot d \vec S = 0
$

### Lei de Faraday

$
\oint \vec E \cdot d\vec s = - \cfrac {d \phi_B }{dt}
$

### Lei de Ampère-Maxwell

$
\oint \vec B \cdot d \vec s = \mu_{0} \epsilon_0 \cfrac {d \phi_B }{dt} + \mu_{0} I
$

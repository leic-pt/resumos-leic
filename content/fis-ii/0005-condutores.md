---
title: Condutores e Dielétricos
description: >-
  Condutores e Dielétricos
path: /fis-ii/condutores
type: content
---

# Condutores e Dielétricos

```toc

```

Os condutores que iremos estudar estarão em Eletrostática.

## Condutor

Num condutor as cargas elétricas podem mover-se livremente no material.

- Existem 2 tipos de condutores:
  - condutores metálicos onde as cargas são eletrões
  - condutores líquidos onde as cargas são iões

### Dentro do Condutor

Quando aplicamos um campo $\vec E_1$ num condutor isolado, as cargas negativas (induzidas) movem-se na direção oposta ao campo $\vec E_1$, separando assim as cargas positivas das negativas.\
Essas cargas induzidas criam 1 segundo campo $\vec E_2$ que é contrário ao campo $\vec E_1$, estes campos anulam-se e assim concluimos que o Campo Elétrico dentro do condutor é nulo.

$$
\vec E = 0
$$

Assim pela Lei de Gauss

$$
\vec \nabla \cdot \vec E = \cfrac{\rho}{\epsilon_{0}}
$$

Como $\vec E = 0 \implies \rho = 0$
Concluímos assim que a densidade de carga no interior do condutor é nula.
Isto é equivalente a dizer que existe o mesmo número de cargas positivas $(+)$ e cargas negativas $(-)$, tais que a sua densidade se anula.

- Qualquer carga remanescente situa-se na superfície do condutor

Podemos também concluir que o Campo Elétrico $\vec E \perp \ $Superfície do Condutor

- Um condutor é uma equipotencial

Isto é, tem o mesmo potencial em todo o seu interior.

$$
W = Q[V(B) - V(A)] = - \int_A^B \vec E \cdot d \vec l
$$

Como $\vec E = 0  $ e $\vec E \perp d\vec l$ então o trabalho $W = 0$ e $V(B) = V(A)$

### Cargas Induzidas

As Cargas procuram sempre o equilíbrio $(\vec E = 0)$.

Se tivermos uma carga $+Q$ e um condutor não carregado, as cargas negativas são atraídas para a carga $+Q$, para que assim se anule o campo no interior do condutor.

### Cavidades

No caso de no interior do condutor houver uma cavidade e a carga $+Q$ estiver dentro dela, então o campo é não nulo nessa região.

Assim a carga induzida $Q_{ind}\ $ é igual a $-Q$ e a carga à superfície do condutor passa a ser positiva porque as cargas negativas aproximaram-se da carga $+Q$ deixando de estar na superfície.

No caso de não haver carga na cavidade, o campo elétrico $\vec E = 0 \ $ na cavidade (Gaiola de Faraday)

## Condensador

Imaginemos que temos 2 condutores com carga $+Q$ e $-Q$

Como são equipotenciais podemos calcular a sua diferença de potencial.

$$
V = V_{+} - V_{-} = - \int_{(-)}^{(+)} \vec E \cdot d \vec l
$$

Para calcular o campo elétrico de cada condutor seria algo muito difícil, mas sabemos uma coisa

$$
\vec E \propto Q \implies V \propto Q
$$

$\propto\ $ significa "é proporcional a"

Assim criamos a uma constante $C$ de proporcionalidade chamada de Capacitância

$$
C = \cfrac{Q}V
$$

Esta é uma grandeza geométrica que é determinada pela forma, tamanho e separação de 2 condutores.\
Tem unidades SI em farad $[ \cfrac{C}V ]$ (Coulomb por Volt)
Normalmente usa-se o microfarad ou o picofarad.

- Por definição o potencial é o do condutor com carga positiva $+Q$, e assim a capacitância é sempre maior que zero.

- Para a capacitância de um único condutor, dizemos que o outro "condutor está no infinito e o seu campo é zero"

### Condensadores em Série

Se tivermos 3 Condensadores em série, as 3 placas de cima estão ao mesmo potencial assim como as debaixo, isso equivale a ter uma placa grande em cima e uma grande em baixo, e assim essa placa é a soma das 3 placas pequenas.

Assim a capacidade do Condensador é

$$
C = \cfrac{Q_1+ Q_2 + Q_3}V = \cfrac{Q_1}V + \cfrac{ Q_2 }V + \cfrac{ Q_3}V = C_1 + C_2 + C_3
$$

### Condensadores em Paralelo

Se tivermos 3 Condensadores em Paralelo, as ligações entre todas placas tem de ser igual para manter o equilíbrio.

Assim

$$
Q_1 = Q_2 = Q_3 = Q
$$

Como a diferença potencial é dada pela soma dos 3 potenciais

$$
V_1 + V_2 + V_3
$$

Assim a capacidade do Condensador é

$$
C = \cfrac{Q}{V_1 + V_2 + V_3} =  \cfrac{1}C  = \cfrac {1}{ C_1 } +   \cfrac {1}{ C_2 } + \cfrac {1}{ C_3 }
$$

### Trabalho

Para carregar um condensador é preciso eliminar eletrões do condutor positivo e movê-los para o condensador negativo.
Isso requer trabalho pois é temos de puxar cargas negativas contra o campo elétrico.

O trabalho necessário para carregar o condensador com uma carga $Q$ é dado por

$$
dW = (\cfrac{q}C) dq \implies W_{q = 0 \rightarrow Q} = \int_0^Q (\cfrac{q}C) \ dq = \cfrac{Q^2}{2C} = \cfrac{CV^2}{2}
$$

onde $q$ é um carga positiva que auxilia os cálculos

## Dielétricos

Slides:

- [Slides Módulo 3](https://drive.google.com/file/d/1zAAUvHuN-P_IzD0QDNA99_cCdzQsmLv4/view?usp=sharing)

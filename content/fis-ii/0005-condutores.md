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

![Condutor](./imgs/0005-condutor.png#dark=1)

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
  - Isto significa que nehuma carga pode sair do condutor e quando interagida por um campo elétrico as cargas deslocam-se para as extremidades do condutor

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

Um condensador é um componente que armazena cargas elétricas num campo elétrico.

Imaginemos que temos 2 condutores com carga $+Q$ e $-Q$

Como são equipotenciais podemos calcular a sua diferença de potencial.

$$
\Delta V = V_{+} - V_{-} = - \int_{(-)}^{(+)} \vec E \cdot d \vec l = E \cdot d
$$

$d$ é a distância das placas

Para calcular o campo elétrico de cada condutor seria algo muito difícil, mas sabemos uma coisa

$$
\vec E \propto Q \implies V \propto Q
$$

$\propto\ $ significa "é proporcional a"

Assim criamos a uma constante $C$ de proporcionalidade chamada de Capacitância

$$
C = \cfrac{Q} {\Delta V}
$$

Esta é uma grandeza geométrica que é determinada pela forma, tamanho e separação de 2 condutores.\
Tem unidades SI em farad $[ \cfrac{C}V ]$ (Coulomb por Volt)
Normalmente usa-se o microfarad ou o picofarad.

- Por definição o potencial é o do condutor com carga positiva $+Q$, e assim a capacitância é sempre maior que zero.

- Para a capacitância de um único condutor, dizemos que o outro "condutor está no infinito e o seu campo é zero"

Também sabemos que

$$
|\Delta V| = E d

E =  \cfrac{\sigma}{\epsilon_{0}}
Q = \sigma A
C = \cfrac{\epsilon_{0} A}{d}
$$

### Condensadores em Série

![Serie](./imgs/0005-serie.png#dark=1)

Se tivermos 3 Condensadores em série, as 3 placas de cima estão ao mesmo potencial assim como as debaixo, isso equivale a ter uma placa grande em cima e uma grande em baixo, e assim essa placa é a soma das 3 placas pequenas.

Assim a capacidade do Condensador é

$$
C = \cfrac{Q_1+ Q_2 + Q_3}V = \cfrac{Q_1}V + \cfrac{ Q_2 }V + \cfrac{ Q_3}V = C_1 + C_2 + C_3
$$

### Condensadores em Paralelo

![paralel](./imgs/0005-paralel.png#dark=1)

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

Com os dielétricos entramos no estudo do campo elétrico na matéria.
Existem 2 grandes grupos:

- Condutores

  - As cargas elétricas movem-se livremente através do material

- Dielétricos ou Isolantes

  - As cargas elétricas estão presas aos átomos ou moléculas e apenas se podem mover um pouco dentro deles
  - Existem 2 mecanismos pelos quais um campo elétrico pode distorcer a distribuição de carga de um átomo ou molécula dielétrica
    - Estiramento
    - Rotação

Quando estes mecanismos acontecem dizemos que o átomo está Polarizado.

![Burguer](./imgs/0005-burguer.png#dark=1)

Imaginemos que colocamos um isolante entre 2 placas de 1 condensador.

Se o isolante tocar simultaneamente nas duas placas, a capacitância aumenta por um fator $k$

$k$ é assim a constante dielétrica do meio.

$k$ no vácuo é 1.

Isto acontece porque como vimos antes a Capacitância sem a presença do dielétrico é dada por

$$
C = \cfrac{\epsilon_{0}A}{\delta} \ , \ C = \cfrac{Q}V
$$

onde $A$ é a área das placas e $\delta$ a distância entre elas

Como podemos ver se a Capacitância aumentar $C$, para a mesma carga $Q$ a diferença de potencial $V$ é menor.

Se o potencial $V$ é menor, então o campo elétrico $E$ é também menor.

Assim podemos concluir que na parte superior do condensador irão haver cargas positivas e na parte inferior do condensador irão haver cargas negativas.

Isto leva nos a dizer que se houver N átomos por unidade de volume haverá momento dipolar por unidade de volume

$$
\vec P = N \vec p
$$

O $\vec P$ pode mudar de ponto para ponto mas em cada ponto $\vec P \propto \vec E$

Consideremos uma superfície dipolar com um certo momento dipolar por unidade de volume. Haverá uma densidade de carga produzida por ela? Não se $\vec P$ for uniforme.

Se as cargas que forma deslocadas têm a memsa densidade média não teremos uma carga líquida no volume.

Se $\vec P$ fosse maior num lugar do que noutro então mais carga seria movida para dentro de 1 determinada região do que noutra e teríamos uma densidade de carga no volume.

No condutor de placas paralelas vamos supor que $\vec P$ é uniforme e por isso só nos precisamos de preocupar com o que se passa nas superfícies.\
Na superfície de baixo haverá uma distribuição superficial de carga negativa (chamada carga superficial de polarização)\
com a correspondente carga positiva a uma distância $d = \cfrac{p}Q$ acima,\
enquanto na superfície de cima acontecerá o fenómeno inverso.

Vamos assumir que $\vec p \perp$ superfície.

O número
de dipolos que aparecem na superfície de baixo é dado pelo
número de dipolos por unidade de volume $N$ multiplicados pelo
volume de uma camada de superfície $A$ de altura $d$.
Em cada dipolo há uma carga eletrónica $q_e$ e por isso a carga total é $A \cdot N \cdot d \cdot q_e$\
Assim a densidade de carga superficial $\sigma_{pol}$ é

$$
\sigma_{pol} = \cfrac{A \cdot N \cdot d \cdot q_e}A = Ndq_e = P
$$

As placas dos condutores também têm uma densidade de carga $\sigma_{pc}$.

As cargas de polarização só existem porque existe $\sigma_{pc}$.

Se descarregarmos o condensador, $\sigma_{pc}$ desaparece porque os dipolos desaparecem por ausência de campo aplicado e não por serem transportados pelo fio de terra.

Dentro do dielétrico

$$
E = \cfrac{\sigma_{pc} - \sigma_{pol}}{\epsilon_0} = \cfrac{\sigma_{pc} - P}{\epsilon_0}
$$

Como sabemos que $\vec P \propto \vec E$ podemos escrever que

$$
\vec P = \chi \epsilon_0 \vec E
$$

$\chi$ é a constante de susceptibilidade elétrica do dielétrico

$$
E = \cfrac{\sigma_{pc}}{\epsilon_0} \cfrac{1}{1+ \chi}
$$

$$\cfrac{1}{1+ \chi}$$ diz-nos quanto o campo diminui no interior do dielétrico

A diferença de potencial entre as placas é o integral de campo elétrico. Como o campo é uniforme e a carga total no condensador é $\sigma_{pc}A$

$$
V = E\delta = E = \cfrac{\sigma_{pc}}{\epsilon_0} \cfrac{\delta}{1+ \chi}

C = \cfrac{\epsilon_0A}{\sigma}(1+\chi) \implies k = 1 + \chi
$$

Se a polarização $\vec P $ não for uniforme

A carga total $\sigma_{pol}$ por unidade de volume que atravessou a superfície é

$$
\sigma_{pol} = \vec P \cdot \vec n
$$

$$
\rho_{pol} = -\vec \nabla \cdot \vec P
$$

Slides:

- [Slides Módulo 3](https://drive.google.com/file/d/1zAAUvHuN-P_IzD0QDNA99_cCdzQsmLv4/view?usp=sharing)

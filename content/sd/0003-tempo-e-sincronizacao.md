---
title: Tempo e Sincronização
description: >
  Tempo.

  Relógios Físicos.

  Eventos e Relógios Lógicos.
path: /sd/tempo-e-sincronizacao
type: content
---

# Tempo e Sincronização

```toc

```

## Tempo

Num sistema centralizado não existe ambiguidade quanto ao tempo.
Quando um processo A pretende saber o tempo atual, pode consultar o relógio do
sistema.
Se momentos mais tarde o processo B obter o tempo, este será superior (ou
possivelmente igual) ao tempo obtido pelo processo A.

Num sistema distribuido o problema é mais complexo.
Não existe tempo global, cada computador tem o seu próprio relógio, e o tempo
que estes relógios indicam pode ser diferente.

## Relógios Físicos

Praticamente todos os computadores têm um circuito para contar o tempo, baseados
num cristal de quartzo.
Este cristal oscila a uma frequência conhecida, e o circuito conta o número de
oscilações, podendo assim determinar o tempo.
Ao fim de um determinado número de oscilações, o circuito gera uma interrupção a
que se chama **tick de relógio**.

Como qualquer outra medição, existe uma incerteza associada à frequência do
cristal, e por isso a frequência de ticks de relógio pode variar entre relógios.
Mesmo para o mesmo relógio, a frequência pode variar com fatores externos como
a temperatura. A variação é normalmente pequena, mas o erro acumulado pode levar
a que dois relógios tenham uma diferença significativa no tempo que contam.

### Tempo Universal Coordenado (UTC)

Dada esta incerteza, surge a necessidade de um tempo universal, que sirva de
referência para todos os relógios.
Para tal, o _International Time Bureau_ (BIH) recolhe medições de 450 relógios
atómicos (capazes de uma precisão extremamente superior à dos relógios de
quartzo) em 80 laboratórios distintos e calcula o tempo médio.
Esta medição é o Tempo Atómico Internacional (TAI).

Por mais preciso que o TAI seja, não tem em conta o desvio da hora solar, pelo
que um segundo standard foi criado, baseado no TAI mas incluindo _leap seconds_,
o **Tempo Universal Coordenado** (UTC).
Vários satélites transmitem UTC, sendo possível obter precisões na ordem dos
nanosegundos.

### Métricas de Desempenho de Relógios

Com uma referência externa, pode-se definir métricas para avaliar o desempenho
de relógios.
Para as definir, temos que $t$ é o tempo UTC e $C_p(t)$ é o tempo contado pelo
relógio $p$ no instante $t$.

O **skew** é a diferença entre o tempo contado por dois relógios, ou seja:

$$
skew(p,q) = C_p(t) - C_q(t)
$$

A **taxa de deriva** é a taxa a que um dado relógio se afasta do tempo de
referência:

$$
drift\_rate(p) = \frac{dC_p(t)}{dt}
$$

Para um relógio perfeito, $drift\_rate(p) = 1$. Por norma, fabricantes de
relógios garantem um desvio máximo. Ou seja, para um desvio máximo $\rho$:

$$
1-\rho \leq drift\_rate(p) \leq 1+\rho
$$

Para conjuntos de relógios, pode-se ainda falar de **precisão** e **exatidão**.

![Precisão e Exatidão](./assets/0003-precision-vs-accuracy.png#dark=2)

A **precisão** é a medida da dispersão das medições dos vários relógios. Para
uma precisão $\pi$, temos que a diferença entre quaisquer dois relógios nunca
excede $\pi$, ou seja:

$$
\forall_{p,q}: \lvert skew(p,q) \rvert \leq \pi
$$

Por outro lado, a **exatidão** é a medida da diferença do conjunto de relógios
com uma referência externa. Para uma exatidão $\alpha$, temos que a diferença
entre qualquer relógio e o tempo de referência nunca excede $\alpha$, ou seja:

$$
\forall_{p}: \lvert C_p(t) - t \rvert \leq \alpha
$$

### Sincronização de Relógios Físicos

## Eventos e Relógios Lógicos

## Referências

- Coulouris et al - Distributed Systems: Concepts and Design (5th Edition)
  - Secções 14.1, 14.2, 14.3 e 14.4
- van Steen and Tanenbaum - [Distributed Systems](https://www.distributed-systems.net/index.php/books/ds4/)
  - Secções 5.1 e 5.2
- Departamento de Engenharia Informática - Slides de Sistemas Distribuídos (2022/2023)
  - 3a Fundamentos: Tempo

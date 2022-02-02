---
title: Equação de Calor, Laplace e Ondas
description: >-
  Equação do Calor.
  Equação de Laplace.
  Equação das Ondas
path: /cdi-iii/equacao-calor-laplace-ondas
type: content
---

# Equação de Calor, Laplace e Ondas

```toc

```

Para se deduzir várias das expressões nesta página, é necessário perceber o [método de soluções separáveis](/cdi-iii/equacao-calor-solucoes-separaveis#soluções-separáveis).

## Equação do Calor

Já tínhamos visto a [Equação do Calor anteriormente](/cdi-iii/equacao-calor-solucoes-separaveis).
Nesta página apenas vão estar as expressões mais comuns para a equação do calor, que quando memorizadas permitem simplificar os cálculos.

A Equação do Calor tem a seguinte expressão:

$$
\frac{\partial u}{\partial t} = k \frac{\partial^2 u}{\partial x^2}
$$

A resolução desta equação vai depender das [**condições fronteira**](color:yellow) utilizadas.
Abaixo temos alguns exemplos de condições fronteira.

### Condições Fronteira de Dirichlet (Homogéneo)

Trata-se de um problema muito comum, que é descrito pelo seguinte sistema:

$$
\begin{cases}
\dfrac{\partial u}{\partial t} = k \dfrac{\partial^2 u}{\partial x^2} & t > 0, x \in \left]0, \pi \right[\\
u(t,0 ) = u(t,L) = 0 & t>0\\
u(0,x) = f(x) & x \in \left]0, \pi\right[
\end{cases}
$$

Após aplicar o [método de separação de variáveis](/cdi-iii/equacao-calor-solucoes-separaveis#soluções-separáveis),
obtemos a seguinte solução para este problema:

$$
u(t,x) = \sum_{n=1}^{\infty} c_n e^{\dfrac{n^2 \pi^2 k t}{L^2}} \sin \left(\frac{n\pi x}{L}\right) \quad, \quad c_n \in \R
$$

Para determinar sucessão $c_n$, usamos a condição inicial, pelo que

$$
u(0,x) = \sum_{n=1}^{+\infty} c_n \sin \left(\frac{n\pi x}{L}\right) = f(x)
$$

Como podemos ver, a expressão é semelhante à da [série de senos](/cdi-iii/serie-fourier#série-de-senos).
Se $f(x)$ já estiver em forma de série de senos, é trivial descobrir os valores de $c_n$.
Caso contrário, é necessário determinar a sua série de senos, cuja sucessão $b_n$ é dada por

$$
c_n = b_n = \frac{2}{L} \int_{0}^{L} f(x) \sin \left(\frac{n\pi x}{L}\right) \d x
$$

:::info[Exemplo]

**Assumindo $L = \pi$ e as condições fronteira de Dirichlet Homogéneas, em que**

$$
f(x) = \sin(2x) - 3\sin(5x)
$$

**resolva a equação de calor com condições fronteiras de Dirichlet homogéneas.**

Então,

$$
u(0,x) = \sum_{n=1}^{+\infty} c_n \sin (nx) = \sin(2x) - 3\sin(5x)
$$

Como $f(x)$ já se encontra na forma de série de senos, a descoberta de $c_n$ é trivial:

$$
\begin{darray}{l}
c_2 = 1\\
c_5 = -3\\
c_n = 0 &, \forall n \in \N \backslash \{2,5\}
\end{darray}
$$

Então, a solução final da equação do calor é:

$$
u(t,x) = e^{-4kt} \sin(2x) - 3 e^{-25 kt} \sin(5x)
$$

:::

:::details[Exemplo ($f(x)$ não está na forma de Série de Senos)]

**Considerando $L=\pi$ e a condição inicial**

$$
f(x) = \frac{\pi}{2} - \left|x - \frac{\pi}{2}\right| = \begin{cases}
x & \text{se } 0 \leq x \leq \frac{\pi}{2} \\
\pi - x & \text{se } \frac{\pi}{2} < x \leq \pi
\end{cases}
$$

**resolva a equação de calor com condições fronteiras de Dirichlet homogéneas.**

Então,

$$
u(0,x) = \sum_{n=1}^{\infty}c_n\sin(nx) = \frac{\pi}{2} - \left|\frac{\pi}{2} - x\right|
$$

Como $f(x)$ não se encontra na forma de série de senos, temos de a determinar.

$$
S_{\sin}f(x) = \sum_{n=1}^{\infty}b_n\sin(nx)
$$

tal que

$$
\begin{aligned}
b_n &= \frac{2}{\pi}\int_{0}^{\pi}f(x)\sin(nx)\d x\\
&= \frac{2}{\pi}\left[\int_{0}^{\frac{\pi}{2}}x\sin(nx)\d x + \int_{\frac{\pi}{2}}^{\pi}(\pi - x)\sin(nx)\d x\right]\\
&= \frac{4}{\pi n^2}\sin\frac{n\pi}{2}
\end{aligned}
$$

Determinamos assim a série de senos de $f(x)$:

$$
f(x) = \frac{\pi}{2} - \left|x - \frac{\pi}{2}\right| = \sum_{n=1}^{\infty}\frac{4}{\pi n^2}\sin\frac{n\pi}{2}\sin(nx)
$$

Então, como podemos observar que $c_n = b_n$, temos que

$$
c_n = \frac{4}{\pi n^2}\sin\frac{n\pi}{2}
$$

Assim, a **solução da equação de calor** é

$$
u(t, x) = \sum_{n=1}^{\infty}\frac{4}{\pi n^2}\sin\frac{n\pi}{2}e^{-n^2Kt}\sin(nx)
$$

:::

### Condições Fronteira de Neumann

Consideremos o seguinte problema:

$$
\begin{cases}
\dfrac{\partial u}{\partial t} = k \dfrac{\partial^2 u}{\partial x^2} & t > 0, x \in \left]0, \pi \right[\\
\frac{\partial u}{\partial x}(t,0 ) = \frac{\partial u}{\partial x}(t,L) = 0 & t>0\\
u(0,x) = f(x) & x \in \left]0, \pi\right[
\end{cases}
$$

Fisicamente, este problema representa a propagação de calor numa barra de comprimento $L$ em que não há
troca de calor com o exterior pelas suas extremidades (daí as derivadas serem nulas).

Também pelo [método de separação de variáveis](/cdi-iii/equacao-calor-solucoes-separaveis#soluções-separáveis)
é possível chegar a uma solução, apresentada abaixo:

$$
u(t,x) = c_0 + \sum_{n=1}^{\infty} c_n e^{- \dfrac{n^2 \pi^2 kt}{L^2}} \cos \left(\frac{n\pi x}{L}\right) \quad, \quad c_n \in \R
$$

Semelhantemente às as condições de Dirichlet, podemos determinar a sucessão $c_n$ através da expressão

$$
u(0,x) = c_0 + \sum_{n=1}^{\infty} c_n \cos \left(\frac{n\pi x}{L}\right) = f(x)
$$

que é semelhante a uma [série de cossenos](/cdi-iii/serie-fourier#série-de-cossenos).
Novamente, se $f(x)$ já estiver na forma de série de cossenos, é trivial descobrir os valores de $c_n$.
Caso contrário, é necessário determinar a série de cossenos da função, que é dada por:

$$
\begin{aligned}
c_0 &= \frac{a_0}{2} = \frac{1}{L} \int_{0}^{L} f(x) \d x\\
c_n &= a_n = \frac{2}{L} \int_{0}^{L} f(x) \cos \left(\frac{n\pi x}{L} \right) \d x
\end{aligned}
$$

## Equação de Laplace

:::warning[Página em Construção]
Conteúdo brevemente.
:::

## Equação das Ondas

:::warning[Página em Construção]
Conteúdo brevemente.
:::

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
\dfrac{\partial u}{\partial t} = k \dfrac{\partial^2 u}{\partial x^2} & t > 0, x \in \left]0, L \right[\\
u(t,0 ) = u(t,L) = 0 & t>0\\
u(0,x) = f(x) & x \in \left]0, L\right[
\end{cases}
$$

Após aplicar o [método de separação de variáveis](/cdi-iii/equacao-calor-solucoes-separaveis#soluções-separáveis),
obtemos a seguinte solução para este problema:

$$
u(t,x) = \sum_{n=1}^{\infty} c_n e^{-\dfrac{n^2 \pi^2 k t}{L^2}} \sin \left(\frac{n\pi x}{L}\right) \quad, \quad c_n \in \R
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

A **Equação de Laplace** homogénea tem a seguinte forma:

$$
\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0
$$

Tal como fizemos para as Equações do Calor, podemos determinar uma solução através do [método de soluções separáveis](/cdi-iii/equacao-calor-solucoes-separaveis#soluções-separáveis).

Pegando num problema mais completo (que provavelmente não é relevante decorar),

$$
\begin{cases}
\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = 0\\
u(x,0) = f_1(x)& (1)\\
u(0,y) = f_2(y)& (2)\\
u(x,b) = f_3(x)& (3)\\
u(a,y) = f_4(y)& (4)
\end{cases}
$$

Vamos dividir isto em 4 problemas:

**Problema 1:**

$$
\frac{\partial^2 u_1}{\partial x^2} + \frac{\partial^2 u_1}{\partial y^2} = 0
$$

$$
\begin{darray}{l}
u_1(x,0) = f_1(x)\\ % I
u_1(0,y) = 0\\ % II
u_1(x,b) = 0\\ % III
u_1(a,y) = 0   % IV
\end{darray}
$$

**Problema 2:**

$$
\frac{\partial^2 u_2}{\partial x^2} + \frac{\partial^2 u_2}{\partial y^2} = 0
$$

$$
\begin{darray}{l}
u_2(x,0) = 0\\ % I
u_2(0,y) = f_2(x)\\ % II
u_2(x,b) = 0\\ % III
u_2(a,y) = 0 % IV
\end{darray}
$$

**Problema 3:**

$$
\frac{\partial^2 u_3}{\partial x^2} + \frac{\partial^2 u_3}{\partial y^2} = 0
$$

$$
\begin{darray}{l}
u_3(x,0) = 0\\ % I
u_3(0,y) = 0\\ % II
u_3(x,b) = f_3(x)\\ % III
u_3(a,y) = 0 % IV
\end{darray}
$$

**Problema 4:**

$$
\frac{\partial^2 u_4}{\partial x^2} + \frac{\partial^2 u_4}{\partial y^2} = 0
$$

$$
\begin{darray}{l}
u_4(x,0) = 0\\ % I
u_4(0,y) = 0\\ % II
u_4(x,b) = 0\\ % III
u_4(a,y) = f_4(x) % IV
\end{darray}
$$

:::warning[Nota do Autor]
Abaixo mostram-se imediatamente as soluções dos problemas.  
Não é necessário decorar estas soluções, visto que conseguem facilmente ser obtidas através do método de separação de variáveis,
como ilustrado no exemplo abaixo.  
Estas soluções apenas se encontram aqui para referência.
:::

Resolvendo agora cada um dos problemas, omitindo os cálculos (mais abaixo irá estar um exemplo passo a passo):

$$
u_1 = \sum_{n=1}^{+\infty} c_{1,n} \sin \left(\frac{n\pi}{a}x \right) \sh \left(\frac{n\pi}{a}(b-y)\right)
$$

$$
u_2 = \sum_{n=1}^{+\infty} c_{2,n} \sh \left(\frac{n\pi}{b}(a-x)\right) \sin \left(\frac{n\pi}{b}y \right)
$$

$$
u_3 = \sum_{n=1}^{+\infty} c_{3,n} \sin \left(\frac{n\pi}{a}x \right) \sh \left(\frac{n\pi}{a}y\right)
$$

$$
u_4 = \sum_{n=1}^{+\infty} c_{4,n} \sh \left(\frac{n\pi}{b}x\right) \sin \left(\frac{n\pi}{b}y \right)
$$

E cada uma das sucessões:

$$
c_{1,n} = \frac{2}{a \sh \left(\frac{n\pi}{a}b\right)} \int_{0}^{a} f_1(x) \sin \left(\frac{n\pi}{a}x \right) \d x
$$

$$
c_{2,n} = \frac{2}{a \sh \left(\frac{n\pi}{b}a\right)} \int_{0}^{a} f_2(x) \sin \left(\frac{n\pi}{b}y \right) \d x
$$

$$
c_{3,n} = \frac{2}{a \sh \left(\frac{n\pi}{a}b\right)} \int_{0}^{a} f_2(x) \sin \left(\frac{n\pi}{a}x \right) \d x
$$

$$
c_{4,n} = \frac{2}{a \sh \left(\frac{n\pi}{b}a\right)} \int_{0}^{a} f_2(x) \sin \left(\frac{n\pi}{b}y \right) \d x
$$

Finalmente,

$$
u = u_1 + u_2 + u_3 + u_4
$$

:::info[Exemplo]

**Recorrendo ao método de separação de variáveis determine uma solução para o seguinte problema de valor na fronteira:**

$$
\begin{cases}
\frac{\partial^2 u}{\partial x^2} + \frac{\partial^2 u}{\partial y^2} = u\\
u(x,0) = u(x,1) = u(0,y) = 0\\
u(1,y) = y
\end{cases}
$$

**para $0 \leq x \leq 1$ e $0 \leq y \leq 1$.**

Como sempre, começamos por aplicar o [método de soluções separáveis](/cdi-iii/equacao-calor-solucoes-separaveis#soluções-separáveis):

$$
u(x,y) = X(x)Y(y)
$$

Já vimos anteriormente na equação de calor que é possível trabalharmos as condições fronteira para obter:

$$
\begin{aligned}
u(x,0) = 0 & \implies X(x)Y(0) = 0 \implies X(x) = 0 \lor Y(0) = 0 \implies Y(0) = 0\\
u(x,1) = 0 & \implies X(x)Y(1) = 0 \implies X(x) = 0 \lor Y(1) = 0 \implies Y(1) = 0\\
u(0,y) = 0 & \implies X(0)Y(u) = 0 \implies X(0) = 0 \lor Y(0) = 0 \implies X(0) = 0
\end{aligned}
$$

Substituindo na expressão inicial e efetuando os cálculos segundo o método,

$$
\begin{darray}{rl}
&X''(x) Y(y) + X(x) Y''(y) = X(x) Y(y)\\\\
\Leftrightarrow & X''(x) Y(y) = X(x) Y(y) - X(x) Y''(y)\\\\
\Leftrightarrow & \frac{X''(x) Y(y)}{X(x)} = Y(y) - Y''(y)\\\\
\Leftrightarrow & \frac{X''(x)}{X(x)} = 1 - \frac{Y''(y)}{Y(y)}\\\\
\Leftrightarrow & \frac{Y''(y)}{Y(y)} = 1 - \frac{X''(x)}{X(x)} = \lambda
\end{darray}
$$

Pegando em $Y(y)$, já conhecemos esta equação, com condições fronteira de Dirichlet, pelo que podemos evitar certos cálculos.

$$
Y''(y) - \lambda Y(y) = 0
$$

Como vimos na Equação do Calor, a única solução não nula ocorre quando $\lambda < 0$, em que

$$
\begin{darray}{cc}
Y(y) = c_1 \sin(n \pi y) & \lambda = - n^2 \pi^2
\end{darray}
$$

De seguida, pegamos em $X(x)$, que já temos de efetuar alguns cálculos:

$$
\begin{aligned}
- \frac{X''(x)}{X(x)} = \lambda - 1 &\implies X''(x) + (\lambda - 1) X(x) = 0\\
&\implies X''(x) + (- n^2 \pi^2 - 1) X(x) = 0\\
&\implies X''(x) - (n^2 \pi^2 + 1) X(x) = 0
\end{aligned}
$$

Logo, resolvendo a [equação de ordem superior](/cdi-iii/equacoes-ordem-superior),

$$
X(x) = c_2 e^{\sqrt{1 + n^2 \pi^2}x} + c_3 e^{-\sqrt{1 + n^2 \pi^2}x}
$$

Pela condição fronteira $u(0,y) = 0$, obtemos o seguinte: $X(0) = 0$, pelo que

$$
\begin{aligned}
X(0) = 0 &\implies c_2 e^{0} + c_3 e^{0} = 0\\
&\implies c_2 + c_3 = 0\\
&\implies c_3 = - c_2
\end{aligned}
$$

Substituindo em $X(x)$, obtemos

$$
X(x) = c_2 \left(e^{\sqrt{1 + n^2 \pi^2}x} - e^{-\sqrt{1 + n^2 \pi^2}x} \right)
$$

Relembrando que $\sinh(ax) = \frac{e^{ax} - e^{-ax}}{2}$, obtemos que

$$
X(x) = c_3 \sinh(\sqrt{1 + n^2 \pi^2}x)
$$

Assim, finalmente, obtemos a expressão geral para a função $u(x,y)$.

$$
u(x,y)=X(x)Y(y) = c_4 \sinh(\sqrt{1 + n^2 \pi^2}x)\sin(n \pi y)
$$

E, como existem infinitas soluções,

$$
u(x,y) = \sum_{n=1}^{+\infty} d_n \sinh(\sqrt{1 + n^2 \pi^2}x)\sin(n \pi y)
$$

Finalmente, vamos determinar $d_n$, de acordo com a condição inicial $u(1,y)$:

$$
u(1,y) = \sum_{n=1}^{+\infty} d_n \sinh(\sqrt{1 + n^2 \pi^2})\sin(n \pi y) = y
$$

Novamente, isto relembra-nos uma [série de senos](/cdi-iii/serie-fourier#série-de-senos), mas com uma pequena diferença:

$$
d_n \sinh(\sqrt{1 + n^2 \pi^2}) = b_n = \frac{2}{1} \int_{0}^{1} y \sin(n\pi y) \d y = \frac{2(-1)^{n+1}}{n\pi}
$$

$$
d_n \sinh(\sqrt{1 + n^2 \pi^2}) = \frac{2(-1)^{n+1}}{n\pi} \implies d_n = \frac{2(-1)^{n+1}}{n\pi \sinh(\sqrt{1 + n^2 \pi^2})}
$$

Assim, a [**solução do problema**](color:green) é:

$$
u(x,y) = \sum_{n=1}^{+\infty} \frac{2(-1)^{n+1}}{n\pi \sinh(\sqrt{1 + n^2 \pi^2})} \sinh(\sqrt{1 + n^2 \pi^2}x)\sin(n \pi y)
$$

:::

## Equação das Ondas

A equação das ondas tem a forma de

$$
\frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}
$$

Outra notação possível para este problema (e para outros vistos anteriormente) é a seguinte:

$$
u_{tt} = c^2 u_{xx}
$$

Mais genericamente, o problema pode ser definido por

$$
\begin{cases}
u_{xx} = c^2 u_{tt}\\
u(t,0) = 0\\
u(t,L) = 0\\
u(0,x) = u_0 (x)\\
\frac{\partial u}{\partial t} (0, x) = v_0(x)
\end{cases}
$$

Pelo método de separação de variáveis conseguimos chegar à seguinte solução geral:

$$
u(t,x) = \sum_{n=1}^{+\infty} \left(A_n \cos\left(\frac{c\pi n}{L}t\right) + B_n \sin\left(\frac{c\pi n}{L}t\right)\right) \sin\left(\frac{\pi n}{L}x\right)
$$

$$
A_n = \frac{2}{L} \int_{0}^{L} u_0(x) \sin\left(\frac{\pi n}{L}x\right) \d x
$$

$$
B_n = \frac{2}{c\pi n} \int_{0}^{L} v_0(x) \sin\left(\frac{\pi n}{L}x\right) \d x
$$

Obviamente, se $B_n = 0$

$$
u(t,x) = \sum_{n=1}^{+\infty} A_n \cos\left(\frac{c\pi n}{L}t\right) \sin\left(\frac{\pi n}{L}x\right)
$$

No entanto, como podemos reparar, esta expressão é muito confusa e complicada.
Por esta razão, existe outra fórmula, que nos permite expressar a equação das ondas de uma forma mais simples.

### Fórmula de D'Alembert

Esta forma vem-nos simplificar a equação das ondas. Novamente, tendo o problema

$$
\begin{cases}
u_{xx} = c^2 u_{tt}\\
u(0,x) = f(x)\\
\frac{\partial u}{\partial t} (0, x) = g(x)
\end{cases}
$$

é possível descrever a sua solução segundo duas funções $p$ e $q$:

$$
u(x,t) = p(x+ct) + q(x-ct)
$$

A [**Fórmula de D'Alembert**](color:orange) diz-nos que a solução da equação será

$$
u(x,t) = \frac{f(x-ct) + f(x+ct)}{2} + \frac{1}{2c} \int_{x-ct}^{x+ct} g(s) \d s
$$

:::details[Demonstração da Fórmula de D'Alembert]

::youtube{#j2G91naZ8bo}

:::

:::info[Exemplo]

**Resolva o seguinte problema**

$$
\begin{darray}{ll}
\frac{\partial^2 u}{\partial t^2} = c^2 \frac{\partial^2 u}{\partial x^2}\\
u(x,0) = \cos(x) - 1 & \frac{\partial u}{\partial t} (x,0) = 0, 0 \leq x \leq 2\pi\\
u(0,t) = 0 & u(2\pi,t) = 0
\end{darray}
$$

Vamos aplicar a [**Fórmula de D'Alembert**](color:orange) para resolver este problema:

$$
\begin{darray}{cc}
f(x) = \cos(x) - 1 & g(x) = 0
\end{darray}
$$

Pelo que

$$
\begin{aligned}
u(x,t) &= \frac{\cos(x+ct) - 1 + \cos(x-ct) - 1}{2}\\
&= \frac{\cos(x+ct) + \cos(x-ct) - 2}{2}
\end{aligned}
$$

Aplicando agora a condição fronteira,

$$
\begin{aligned}
u(0,t) = 0 & \Leftrightarrow \frac{\cos(ct) + \cos(ct) - 2}{2} = 0\\
& \Leftrightarrow \cos(ct) + \cos(ct) = 2\\
& \Leftrightarrow 2 \cos(ct) = 2\\
& \Leftrightarrow \cos(ct) = 1\\
& \Leftrightarrow ct = 2\pi n & n \in \Z
\end{aligned}
$$

Substituindo na solução obtida, ficamos com

$$
\begin{aligned}
u(x,t) &= \frac{\cos(x+ct) + \cos(x-ct) - 2}{2}\\
&= \frac{\cos(x+2 \pi n) + \cos(x-2 \pi n) - 2}{2}\\
&= \frac{\cos(x) + \cos(x) - 2}{2}\\
&= \frac{2\cos(x) - 2}{2}\\
&= \cos(x) - 1
\end{aligned}
$$

A **solução do problema** é $u(x,t) = \cos(x) - 1$

:::

---
title: Série de Fourier, Senos e Cossenos
description: >-
  Série de Fourier.
  Série de Senos.
  Série de Cossenos
path: /cdi-iii/serie-fourier
type: content
---

# Série de Fourier, Senos e Cossenos

```toc

```

## Série de Fourier

Antes da leitura desta página, recomendo vivamente a visualização do seguinte vídeo, e se possível,
de [todos os episódios sobre este tema](https://www.youtube.com/playlist?list=PLZHQObOWTQDNPOjrT6KVlfJuKtYTftqH6).

::youtube{#r6sGWTCMz2k}

A Série de Fourier é uma ferramenta muito útil que nos irá permitir reescrever qualquer função como
uma soma (infinita) de senos e cossenos.

A Série de Fourier é periódica, ou seja, apenas podemos obter a expressão para um determinado intervalo da
função. Geralmente, as funções com que trabalhamos são do tipo $f: [-L, L] \to \R$, em que $L$ corresponde a metade do período da função.

:::tip[Definição]

A Série de Fourier de uma função $f: [-L, L] \to \R$ é

$$
SF_f(x) = \underbrace{\frac{a_0}{2} + \sum_{n=1}^{+\infty} \left( a_n \cos\left(\frac{n \pi x}{L}\right) + b_n \sin\left(\frac{n\pi x}{L}\right) \right)}_{\text{Série de Fourier de } f(x)}
$$

em que:

$$
a_0 = \frac{1}{L} \int_{-L}^{L} f(x) \d x
$$

$$
a_n = \frac{1}{L} \int_{-L}^{L} f(x) \cos\left(\frac{n\pi x}{L}\right) \d x
$$

$$
b_n = \frac{1}{L} \int_{-L}^{L} f(x) \sin\left(\frac{n\pi x}{L}\right) \d x
$$

:::

A expressão resultante, $SF_f(x)$ vai corresponder exatamente a $f$ no intervalo $]-L, L[$, exceto onde a função tem pontos de descontinuidade.  
Aliás, uma das grandes vantagens da Série de Fourier é que a função não precisa de ser contínua, apenas seccionalmente contínua (e ter derivada seccionalmente contínua).

Nos pontos de descontinuidade e nas "pontas" do intervalo ($-L$ e $L$), a expressão da Série de Fourier equivale ao ponto médio entre os dois pontos adjacentes. Traduzindo isto para um sistema, obtemos o [**Teorema da Convergência Pontual da Série de Fourier**](color:green):

$$
SF_f(x) = \begin{cases}
f(x) & \text{sendo } x \text{ um ponto de continuidade de } f\\
\frac{f(x^+)+ f(x^-)}{2} & \text{sendo } x \text{ um ponto de descontinuidade de } f\\
\frac{f(L^-)+ f(-L^+)}{2} & \text{sendo } x = -L \lor x = L
\end{cases}
$$

Como já foi referido, a Série de Fourier, $SF_f(x)$ é periódica em $\R$ com período $2L$, ao contrário de $f$ que pode não o ser.
Por outro lado, se considerarmos a extensão períodica, $\overline{f}$ de $f$, isto é, pegarmos no intervalo $]-L, L[$ e "repetirmos" a função com período $2L$,
ficamos com a seguinte equivalência:

$$
SF_f(x) = \begin{cases}
\overline{f} (x) & \text{sendo } x \text{ um ponto de continuidade de } \overline{f}\\
\frac{\overline{f} (x^+) + \overline{f} (x^-)}{2} & \text{sendo } x \text{ um ponto de descontinuidade de } \overline{f}
\end{cases}
$$

:::info[Exemplo]

**Determine a Série de Fourier da função $f: [-1, 1] \to \R$ definida por**

$$
f(x) = \begin{cases}
-\pi & \text{se } x \in [-1, 0[\\
\pi & \text{se } x \in [0, 1]
\end{cases}
$$

Atendendo ao domínio, temos que, segundo a definição acima, $L= 1$.  
Portanto, vamos ter a seguinte expressão para a Série de Fourier de $f$:

$$
SF_f(x) = \frac{a_0}{2} + \sum_{n=1}^{+\infty} \left( a_n \cos\left(n \pi x\right) + b_n \sin\left(n\pi x\right) \right)
$$

O próximo passo é determinar $a_0$, $a_n$ e $b_n$. Tanto $a_0$ como $a_n$ são simples de determinar,
visto que $f$ é uma [função ímpar](https://en.wikipedia.org/wiki/Even_and_odd_functions#Odd_functions).

Para $a_0$, como o integral num intervalo simétrico de uma função ímpar é nulo, temos que:

$$
a_0 = \int_{-1}^{1} f(x) \d x = 0
$$

Para $a_n$, como o produto de uma [função par](https://en.wikipedia.org/wiki/Even_and_odd_functions#Even_functions) (o cosseno)
com uma função ímpar ($f$) é também uma função ímpar, temos novamente um integral num intervalo simétrico de uma função ímpar,
que é nulo:

$$
a_n = \int_{-1}^{1} f(x)\cos(n\pi x) \d x = 0, \forall n \in \N
$$

Por outro lado, para $b_n$, já temos de fazer mais cálculos, embora seja possível simplificá-los
se repararmos que o produto de duas funções ímpares (o seno e $f$) é uma função par, sabemos que o seu
integral num intervalo simétrico, é o dobro do integral numa das "metades" do intervalo:

$$
\begin{aligned}
b_n &= \int_{-1}^{1} f(x)\sin(n\pi x) \d x\\
&= 2 \int_{-1}^{1} \pi \sin(n \pi x) \d x\\
&= - \frac{2\pi}{n\pi} \left[\cos(n\pi x)\right]_0^1\\
&= - \frac{2}{n} \left(\cos(n \pi) - 1\right)\\
&= \frac{2}{n} \left(1 - \cos(n \pi) \right)
\end{aligned}
$$

Podemos fazer ainda mais uma simplificação que nos irá ser útil no futuro.
Se repararmos, $\cos(n\pi)$ é igual a $-1$ quando $n$ é ímpar, e igual a $1$ quando $n$ é par.
Ou seja, sabemos que $\cos(n\pi) = \left(-1\right)^n$.  
Então:

$$
b_n = \frac{2}{n} \left(1- (-1)^n\right)
$$

Determinámos assim a Série de Fourier de $f$:

$$
SF_f(x) = \sum_{n=1}^{\infty} \frac{2}{n} \left(1-(-1)^n\right) \sin (n\pi x)
$$

No entanto, podemos ainda reparar que $1- (-1)^n = 0$ para todo o $n$ par.
Como se trata de uma soma infinita, podemos "ignorar" todos os termos com $n$ par,
tomando que $n = 2k - 1$.

$$
SF_f(x) = \sum_{k=1}^{\infty} \frac{4}{2k-1} \sin \left((2k-1)\pi x\right)
$$

Abaixo encontra-se uma visualização desta solução, à medida que se incrementa $N$:

::youtube{#0jyZKFm8x5c}

Considerando então a soma infinita, temos que, em $[-1, 1]$, a soma da Série de Fourier de $f$ será dada por:

$$
SF_f(x) = \begin{cases}
-\pi &\text{se } x \in ]-1, 0[\\
\pi & \text{se } x \in ]0, 1[\\
0 & \text{se } x = \pm 1 \lor x = 0
\end{cases}
$$

:::

:::details[Mais exemplos]

**Calcule a **Série de Fourier** de**

$$
\begin{darray}{cc}
f(x) = x & f: [-\pi, \pi]
\end{darray}
$$

**no intervalo $[-\pi, \pi]$.**

Temos então que $L = \pi$, pelo que

$$
SF_f(x) = \frac{a_0}{2} + \sum_{n=1}^{+\infty} \left( a_n \cos\left(n x\right) + b_n \sin\left(n x\right) \right)
$$

Como $x$ é função ímpar, que está a ser integrada num intervalo simétrico:

$$
a_0 = \frac{1}{\pi} \int_{-\pi}^{\pi} x \d x = 0
$$

Como $x$ é função ímpar e $\cos(nx)$ é função par, o produto de ambas vai resultar numa função ímpar, que está a ser integrada num intervalo simétrico, pelo que:

$$
a_n = \frac{1}{\pi} \int_{-\pi}^{\pi} x \cos(nx) \d x = 0
$$

Para determinarmos $b_n$, já necessitamos mais cálculos:

$$
\begin{aligned}
b_n &= \frac{1}{\pi} \int_{-\pi}^{\pi} x \sin(nx) \d x\\
&= \frac{2}{\pi} \int_{0}^{\pi} x\sin(nx) \d x\\
&= \frac{2}{\pi} \left(\left[\frac{-x\cos(nx)}{n}\right]^\pi_0 + \int_{0}^{\pi} \frac{\cos(nx)}{n} \d x\right)\\
&= \frac{2}{\pi} \left(\frac{-\pi\cos(n\pi)}{n}\right) & \cos(n\pi) = (-1)^n\\
&= \frac{-2(-1)^n}{n}
\end{aligned}
$$

Então, obtemos a expressão da Série de Fourier de $f$:

$$
SF_f(x) = \sum_{n = 1}^{+\infty} \frac{2(-1)^{n+1}}{n}\sin (n x)
$$

:::

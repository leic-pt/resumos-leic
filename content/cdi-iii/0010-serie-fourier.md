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

Nos pontos de descontinuidade e nas "pontas" do intervalo ($-L$ e $L$), a expressão da Série de Fourier equivale ao ponto médio entre os dois pontos adjacentes. Traduzindo isto para um sistema:

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

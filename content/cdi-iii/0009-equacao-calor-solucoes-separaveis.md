---
title: Equação do Calor. Soluções Separáveis.
description: >-
  Introdução ao estudo das equações diferenciais parciais.
  Equação do Calor.
  Soluções Separáveis.
path: /cdi-iii/equacao-calor-solucoes-separaveis
type: content
---

# Equação do Calor. Soluções Separáveis.

```toc

```

Começamos o estudo das **Equações Diferenciais Parciais** através de uma pequena introdução
à equação do calor e a soluções separáveis.
Alguns destes conceitos podem ser úteis para o estudo da Série de Fourier.

## Equação do Calor

Vamos estudar a equação do calor para perceber como surgiram as Séries de Fourier.

Recomendo vivamente a visualização do seguinte vídeo, e se possível, de [todos os episódios sobre este tema](https://www.youtube.com/playlist?list=PLZHQObOWTQDNPOjrT6KVlfJuKtYTftqH6).

::youtube{#ly4S0oi3Yz8}

Imaginemos que queremos modelar a evolução da temperatura num certo volume $\omega$.
Não é fácil definir uma função $u(t, x)$ que descreve esta evolução de temperatura (balanço de energia térmica) ao longo do tempo $t$.
No entanto, é possível definirmos a variação da temperatura em função da variação da posição.

:::tip[Equação do Calor]

Considerando então uma função $u(t, x)$, que representa a temperatura num certo ponto $x~\in~\R$ num instante $t$.
A evolução da temperatura é então descrita pela seguinte [**equação diferencial parcial**](color:orange):

$$
\frac{\partial u}{\partial t} = k \frac{\partial^2 u}{\partial x^2}
$$

:::

A explicação de como se chega a esta equação está bastante bem explicada no [vídeo acima](https://www.youtube.com/watch?v=ly4S0oi3Yz8).

Podemos ainda estender esta definição a $x \in \R^n$.  
Para tal, podemos definir o [Laplaciano](https://en.wikipedia.org/wiki/Laplace_operator) de uma função como:

$$
\Delta f = \nabla^2 f = \nabla (\nabla f)
= \frac{\partial^2 f}{\partial x_1^2} + \frac{\partial^2 f}{\partial x_2^2} + \frac{\partial^2 f}{\partial x_3^2} + \dots + \frac{\partial^2 f}{\partial x_n^2}
$$

Assim, a equação do calor pode ser definida para dimensões superiores a 1 como

$$
\begin{aligned}
\frac{\partial u}{\partial t} &= k \times \nabla^2 u\\
&=k \times \left(\frac{\partial^2 u}{\partial x_1^2} + \frac{\partial^2 u}{\partial x_2^2} + \frac{\partial^2 u}{\partial x_3^2} + \dots + \frac{\partial^2 u}{\partial x_n^2}\right)
\end{aligned}
$$

### Propriedades da Equação do Calor

A Equação do Calor tem uma propriedade muito importante e que nos irá permitir chegar à Série de Fourier: a [**linearidade**](color:green).
Ou seja, se $u_1$ e $u_2$ são soluções da equação do calor, então $\alpha u_1 + \beta u_2$ também é uma solução.

### Soluções de Equilíbrio

Se tivermos que $\frac{\partial u}{\partial t} = 0$, significa que a temperatura do volume em questão não
varia a cada instante, ou seja, estamos em situação de equilíbrio.  
Então temos uma de duas situações, ambas em que a segunda derivada segundo $x$, isto é, $\frac{\partial^2 u}{\partial x^2}$ é nula:

- $u(x) = C$
- $u(x) = Ax + B$

### Soluções Separáveis

:::warning
O conteúdo abaixo está ligeiramente incompleto e provavelmente confuso.
Quando se aprofundar o estudo das equações do calor, será feita uma revisão deste conteúdo de forma a melhorá-lo.
:::

Para conseguirmos determinar soluções para a **Equação do Calor**, vamos aprender um novo método chamado [**Soluções Separáveis**](color:orange) (ou Separação de Variáveis).

O método consiste em tentar descobrir várias soluções, depois tentar fazer várias combinações lineares, e, por fim, chegar à nossa solução.

Vamos supor que a nossa função é o produto de duas funções (cada uma só depende de uma das variáveis):

$$
u(t,x) = T(t) X(x)
$$

Se substituirmos a expressão acima na **Equação do Calor**, obtemos:

$$
T'(t) X (x) = k T(t) X''(x)
$$

$$
\frac{\partial T'(t)}{\partial k}\frac{1}{T(t)} = \frac{X''(x)}{X(x)} = \lambda
$$

Para os dois membros da equação serem iguais, visto que um depende apenas de $t$ e outro apenas de $x$,
então têm necessariamente de ser funções constantes.

Daqui sai, para $T$, a seguite equação diferencial de primeira ordem

$$
T'(t) = \lambda k T(t) \Leftrightarrow T(t) = c e^{\lambda k t}
$$

A constante irá ser irrelevante no futuro quando fizermos combinações lineares, desde que seja não nula.

Por outro lado, para $X$, temos a seguinte [equação diferencial de ordem superior](/cdi-iii/equacoes-ordem-superior/),

$$
X'' = \lambda X
$$

O polinómio característico é $P(Z) = Z^2 - \lambda$

Pelo que, omitindo os cálculos intermédios,

$$
\begin{cases}
X(x) = A e^{\sqrt{\lambda} x} + B e^{-\sqrt{\lambda} x} & \text{se } \lambda > 0\\
X(x) = A \cos(\sqrt{-\lambda} x) + B \sin(\sqrt{-\lambda} x) & \text{se } \lambda < 0\\
X(x) = Ax + B & \text{se } \lambda = 0
\end{cases}
$$

### Problema Homogéneo

Imaginando agora um caso em que temos um fio circular de perímetro L.
Como o fio é circular, o início e o fim do fio são o mesmo ponto.
Estabelecemos assim uma fronteira periódica.

$$
\begin{cases}
u(t, 0) = u(t, L)\\
\frac{\partial u}{\partial x} (t, 0) = \frac{\partial u}{\partial x} (t,L)
\end{cases}

\text{condições fronteira periódicas}
$$

Então: $X(0) = X(L)$ e $X'(0) = X'(L)$

Tomando então os resultados obtidos para $X$ na secção anterior.

- Se $\lambda = 0$:

  $$
  X(0) = B = AL + B = X(L)\\
  X'(x) = A
  $$

  Temos a solução constante, $X(x) = B$, pois para ser verdade, $A = 0$.

- Se $\lambda > 0$:

  $$
  X(0) = A + B = A e^{\sqrt{\lambda} L} + B e^{-\sqrt{\lambda} L} = X(L)\\
  X'(x) = A \sqrt{\lambda} e^{\sqrt{\lambda} x} - B\sqrt{\lambda} e^{-\sqrt{\lambda} x}\\
  X'(0) = A \sqrt{\lambda} - B \sqrt{\lambda} = A \sqrt{\lambda} e^{\sqrt{\lambda} x} - B\sqrt{\lambda} e^{-\sqrt{\lambda} x}
  $$

  Resolvemos agora o sistema:

  $$
  \begin{cases}
  A\left(1-e^{\sqrt{\lambda} L}\right) + B\left(1-e^{-\sqrt{\lambda}L}\right) = 0 & \text{(sai da primeira equação)}\\
  A\sqrt{\lambda} \left(1- e^{\sqrt{\lambda} L}\right) + B \sqrt{\lambda} \left(1-e^{-\sqrt{\lambda} L}\right)
  \end{cases}
  $$

  queremos que

  $$
  -2\left(1-e^{\sqrt{\lambda} L}\right)\left(1- e^{-\sqrt{\lambda}L}\right) = 0
  $$

  isto só acontece quando $e^{\sqrt{\lambda} L} = 1$, que é impossível se $\lambda > 0$.

  Portanto, não existe nenhuma solução em que $\lambda > 0$.

- Se $\lambda < 0$:

  $$
  e^{\sqrt{\lambda} L} = e^{i\sqrt{-\lambda} L} = \cos\left(\sqrt{-\lambda} L\right) + i\sin\left(\sqrt{-\lambda} L\right)
  $$

  $$
  e^{\sqrt{\lambda} L} = 1\\
  \sqrt{-\lambda} L = 2\pi n, n\in \Z
  $$

  $$
  \begin{darray}{c}
  \sqrt{-\lambda} = \frac{2\pi n}{L} & \lambda = - \frac{4\pi^2 n^2}{L^2} & n \in \Z^+
  \end{darray}
  $$

Juntando agora tudo o que temos:

$$
X\left(x\right) = A \cos \frac{2\pi n}{L}x + B \sin \frac{2\pi n}{L}x
$$

$$
X\left(0\right) = X\left(L\right)\\
X'\left(0\right) = X'\left(L\right)
$$

$$
u\left(t,x\right) = T\left(t\right)X\left(t\right) = e^{-\frac{4\pi^2 n^2}{L^2}t} \left(a_n \cos \frac{2\pi n}{L} + b_n \sin \frac{2\pi n}{L}\right)
$$

$$
u\left(t,x\right) = B + \sum_{n = 1}^N e^{-\frac{4\pi^2 n^2}{L^2}t} \left(a_n \cos \frac{2\pi n}{L} + b_n \sin \frac{2\pi n}{L}\right)
$$

Dando agora uma função à temperatura inicial:

$$
u\left(0, x\right) = f\left(x\right)
$$

$$
f\left(x\right) = B + \sum_{n = 1}^N \left(a_n \cos \frac{2\pi n x}{L} + b_n \sin \frac{2\pi n x}{L}\right)
$$

Como vamos ver mais à frente, esta expressão é muito semelhante à [Série de Fourier](/cdi-iii/serie-fourier).

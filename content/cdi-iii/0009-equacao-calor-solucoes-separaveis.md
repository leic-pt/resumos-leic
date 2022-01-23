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

## Soluções Separáveis

:::warning[Nota do Autor]
O método descrito abaixo não é fácil e requer perícia a resolver equações diferenciais.
Pode ser necessário ler várias vezes e acompanhar com exemplos para se perceber.
:::

Para conseguirmos determinar soluções para a **Equação do Calor**, vamos aprender um novo método chamado [**Soluções Separáveis**](color:orange) (ou Separação de Variáveis).
Mais tarde iremos ver que este método também nos irá ser útil para outras equações, como a **Equação das Ondas** e a **Equação de Laplace**.
Abaixo vamos apenas trabalhar com Equações do Calor.

O método consiste em tentar descobrir várias soluções, depois tentar fazer várias combinações lineares, e, por fim, chegar à nossa solução.

Pegando então na equação do calor, vamos aplicar o método das soluções separáveis:

$$
\frac{\partial u}{\partial t} = k \frac{\partial^2 u}{\partial x^2}
$$

Começamos por supor que a nossa função é o produto de duas funções (cada uma só depende de uma das variáveis):

$$
u(t,x) = T(t) X(x)
$$

Se substituirmos a expressão acima na **Equação do Calor**, obtemos:

$$
T'(t) X (x) = k T(t) X''(x)
$$

$$
\frac{T'(t)}{kT(t)} = \frac{X''(x)}{X(x)} = \lambda
$$

Para os dois membros da equação serem iguais, visto que um depende apenas de $t$ e outro apenas de $x$,
então têm necessariamente de ser funções constantes, daí igualamos ambos os membros a uma constante $\lambda$.

Daqui sai, para $T$, a seguite equação diferencial de primeira ordem

$$
T'(t) = \lambda k T(t) \Leftrightarrow T(t) = c_1 e^{\lambda k t}
$$

A constante irá ser irrelevante no futuro quando fizermos combinações lineares, desde que seja não nula.

Por outro lado, para $X$, temos a seguinte [equação diferencial de ordem superior](/cdi-iii/equacoes-ordem-superior/),

$$
X'' = \lambda X \Leftrightarrow X'' - \lambda X
$$

O polinómio característico é $P(D) = D^2 - \lambda$

Pelo que, omitindo os cálculos intermédios,

$$
\begin{cases}
X(x) = A e^{\sqrt{\lambda} x} + B e^{-\sqrt{\lambda} x} & \text{se } \lambda > 0\\
X(x) = A \cos(\sqrt{-\lambda} x) + B \sin(\sqrt{-\lambda} x) & \text{se } \lambda < 0\\
X(x) = Ax + B & \text{se } \lambda = 0
\end{cases}
$$

Determinados $X(x)$ e $T(t)$, basta fazer o seu produto para obter $u(x,t)$.
No entanto, as soluções obtidas acima são muito generalizadas. Vamos também querer descobrir o valor de $\lambda$.
Quando estamos a resolver um problema, vamos deparar-nos com **condições fronteira**, que nos vão restringir a apenas algumas soluções, e a ajudar-nos a descobrir $\lambda$.

### Condições Fronteira Periódicas

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

Tomando então os resultados obtidos para $X$ na secção anterior, vamos determinar as soluções, caso existam, para cada valor de $\lambda$.

- Se $\lambda = 0$:

  Como visto anteriormente, para $\lambda = 0$ temos que:

  $$
  X(x) = Ax + B
  $$

  $$
  \begin{darray}{c}
  X(0) = B & X(L) = AL + B\\
  \end{darray}
  $$

  $$
  X(0) = X(L) \Leftrightarrow B = AL + B \implies A = 0
  $$

  $$
  X'(x) = A = 0 = X'(0) = X'(L)
  $$

  Descobrimos assim uma a solução constante, $X(x) = B$.

- Se $\lambda > 0$:

  Como visto anteriormente, para $\lambda > 0$ temos que:

  $$
  X(x) = A e^{\sqrt{\lambda} x} + B e^{-\sqrt{\lambda} x}
  $$

  $$
  \begin{darray}{c}
  X(0) = A + B & X(L) = A e^{\sqrt{\lambda} L} + B e^{-\sqrt{\lambda} L}
  \end{darray}
  $$

  $$
  X(0) = X(L) \Leftrightarrow A + B = A e^{\sqrt{\lambda} L} + B e^{-\sqrt{\lambda} L} \implies e^{\sqrt{\lambda} L} = 1 \land e^{-\sqrt{\lambda} L} = 1
  $$

  Tanto $e^{\sqrt{\lambda} L} = 1$ como $e^{-\sqrt{\lambda} L} = 1$ são impossíveis se $\lambda > 0$, visto que para serem verdade, era necessário que $\lambda = 0$.

  Portanto, não existe nenhuma solução em que $\lambda > 0$.

- Se $\lambda < 0$:

  Como visto anteriormente, para $\lambda < 0$ temos que:

  $$
  X(x) = A \cos\left(\sqrt{-\lambda} x\right) + B \sin\left(\sqrt{-\lambda} x\right)
  $$

  $$
  \begin{darray}{c}
  X(0) = A & X(L) = A \cos\left(\sqrt{-\lambda} L\right) + B \sin\left(\sqrt{-\lambda} L\right)
  \end{darray}
  $$

  $$
  \begin{aligned}
  X(0) = X(L) & \implies A = A \cos\left(\sqrt{-\lambda} L\right) + B \sin\left(\sqrt{-\lambda} L\right)\\
  & \implies \cos\left(\sqrt{-\lambda} L\right) = 1\\
  & \implies \sqrt{-\lambda} L = 2n\pi & n \in \Z^+_0
  \end{aligned}
  $$

  Se continuarmos a desenvolver esta expressão, podemos então determinar uma expressão para $\lambda$

  $$
  \sqrt{-\lambda} L = 2n\pi \Leftrightarrow \sqrt{-\lambda} = \frac{2n\pi}{L} \Leftrightarrow \lambda = - \frac{4n^2\pi^2}{L^2}, n \in \Z^+_0
  $$

Assumindo que $u(x,t)$ é não nula (se fosse, a solução seria trivial), podemos agora juntar tudo o que calculámos.

Pegando na expressão não nula de $X(x)$, substituímos o valor de $\lambda$ com o que acabámos de determinar.
Fazemos o mesmo para $T(x)$.

$$
\begin{darray}{c}
X(x) = A \cos\left(\sqrt{-\lambda} x\right) + B \sin\left(\sqrt{-\lambda} x\right)\\
X(x) = A \cos \frac{2\pi n}{L}x + B \sin \frac{2\pi n}{L}x
\end{darray}
$$

$$
\begin{darray}{c}
T(t) = c e^{\lambda k t}\\
T(t) = c e^{-\frac{4\pi^2 n^2}{L^2}t}
\end{darray}
$$

Finalmente, fazemos os produtos entre as duas expressões.

$$
u\left(t,x\right) = T\left(t\right)X\left(t\right) = e^{-\frac{4\pi^2 n^2}{L^2}t} \left(a_n \cos \frac{2\pi n}{L} + b_n \sin \frac{2\pi n}{L}\right)
$$

Segundo o Teorema da Sobreposição, podemos escrever a nossa solução como a soma de várias soluções.

$$
u\left(t,x\right) = B + \sum_{n = 1}^N e^{-\frac{4\pi^2 n^2}{L^2}t} \left(a_n \cos \frac{2\pi n}{L} + b_n \sin \frac{2\pi n}{L}\right)
$$

Podemos dar uma função à temperatura inicial, que funciona como condição inicial.

$$
u\left(0, x\right) = f\left(x\right)
$$

$$
f\left(x\right) = B + \sum_{n = 1}^N \left(a_n \cos \frac{2\pi n x}{L} + b_n \sin \frac{2\pi n x}{L}\right)
$$

Como vamos ver mais à frente, esta expressão é muito semelhante à [Série de Fourier](/cdi-iii/serie-fourier).
Isto permite-nos facilmente descobrir os valores de $a_n$ e $b_n$ de forma a chegar a uma solução particular da equação.

Caso a função $f$ já esteja em forma de Série de Fourier, é trivial descobrir estes valores.
Caso contrário, é necessário primeiro calcular a sua Série de Fourier.

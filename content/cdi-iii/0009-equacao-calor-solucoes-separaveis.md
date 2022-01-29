---
title: Equação do Calor e Soluções Separáveis
description: >-
  Introdução ao estudo das equações diferenciais parciais.
  Equação do Calor.
  Soluções Separáveis.
path: /cdi-iii/equacao-calor-solucoes-separaveis
type: content
---

# Equação do Calor e Soluções Separáveis

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
X'' = \lambda X \Leftrightarrow X'' - \lambda X = 0
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

### Princípio da Sobreposição

Qualquer combinação linear de soluções de equações diferenciais lineares homogéneas
é também solução da equação e verifica as mesmas condições de fronteira.  
Deste modo, podemos concluir o seguinte:

:::tip[Definição]

$$
u(t,x) = \sum_{n=1}^{\infty} c_n u_n (t,x)
$$

:::

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
Fazemos o mesmo para $T(t)$.

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
u\left(t,x\right) = T\left(t\right)X\left(x\right) = e^{-\frac{4\pi^2 n^2}{L^2}t} \left(a_n \cos \frac{2\pi n}{L} + b_n \sin \frac{2\pi n}{L}\right)
$$

Segundo o [Princípio da Sobreposição](#princípio-da-sobreposição), podemos escrever a nossa solução como a soma de várias soluções.

$$
u\left(t,x\right) = B + \sum_{n = 1}^{\infty} e^{-\frac{4\pi^2 n^2}{L^2}t} \left(a_n \cos \frac{2\pi n}{L} + b_n \sin \frac{2\pi n}{L}\right)
$$

Podemos dar uma função à temperatura inicial, que funciona como condição inicial.

$$
u\left(0, x\right) = f\left(x\right)
$$

$$
f\left(x\right) = B + \sum_{n = 1}^{\infty} \left(a_n \cos \frac{2\pi n x}{L} + b_n \sin \frac{2\pi n x}{L}\right)
$$

Como vamos ver mais à frente, esta expressão é muito semelhante à [Série de Fourier](/cdi-iii/serie-fourier).
Isto permite-nos facilmente descobrir os valores de $a_n$ e $b_n$ de forma a chegar a uma solução particular da equação.

Caso a função $f$ já esteja em forma de Série de Fourier, é trivial descobrir estes valores.
Caso contrário, é necessário primeiro calcular a sua Série de Fourier.

Vejamos abaixo um exemplo que mostra como utilizar este método, passo a passo.
Vamos utilizar uma equação de calor, embora seja possível aplicar este método a outras equações diferenciais parciais.

:::info[Exemplo]

**Queremos determinar uma solução para o problema**

$$
\begin{aligned}
\frac{\partial u}{\partial t} &= 1.71 \frac{\partial^2 u}{\partial x^2}\\
u(x,0) &= \sin\left(\frac{\pi x}{2}\right) + 3\sin \left(\frac{5\pi x}{2} \right) , 0<x<2\\
u(0,t) &= u(2,t)= 0
\end{aligned}
$$

Para simplificar, vamos associar $k = 1.71$.

Vamos começar por separar as duas variáveis, definindo a função $u$ como o produto de duas funções $X$ e $T$:

$$
u(x,t) = X(x)T(t)
$$

Aplicando o método descrito acima, substituímos na equação do enunciado:

$$
X(x)T'(t) = k X''(x)T(t) \Leftrightarrow \frac{T'(t)}{kT(t)} = \frac{X''(x)}{X(x)}
$$

Como podemos reparar, o lado esquerdo da igualdade acima apenas depende de $t$, sendo que o lado direito apenas depende de $x$.
Então, a única forma de estes serem iguais é se ambos forem constantes. Então, dizemos que:

$$
\frac{T'(t)}{kT(t)} = \frac{X''(x)}{X(x)} = \lambda
$$

Podemos então resolver cada uma das equações, começando por determinar $T$, que resulta da resolução
de uma [Equação Diferencial Ordinária Linear Homogénea](/cdi-iii/equacoes-diferenciais-ordinarias#caso-bt-equiv-0---homogéneas):

$$
\frac{T'}{kT} = \lambda \Leftrightarrow \frac{T'}{T} = k \lambda \Leftrightarrow T = c_1 e^{\lambda k t}, c_1 \ne 0
$$

Como podemos reparar aqui, conseguimos determinar facilmente a expressão de $T(t)$.
No entanto, para $X(x)$ já vamos ter de efetuar mais cálculos, visto que se trata de uma equação de segunda ordem.

Antes de mais, vamos analisar com mais atenção as [**condições fronteira**](color:yellow), $u(0,t) = u(2,t) = 0$.
Como podemos reparar, temos no enunciado do problema que a [**condição inicial**](color:orange) $u(x,0)$ é igual a uma função não nula.
Por este motivo, sabemos que $u(x,t)$ [**não é identicamente nula**](color:red).

- Para $u(0,t) = 0 \Leftrightarrow X(0)T(t) = 0 \Leftrightarrow X(0) = 0 \lor T(t) = 0$: Como sabemos que $T(t) = 0$ não pode ser verdade,
  caso contrário a função $u(x,t)$ seria [**identicamente nula**](color:red), temos então que $X(0) = 0$.
- Do mesmo modo, para $u(2,t) = 0 \Leftrightarrow X(2)T(t) = 0 \Leftrightarrow X(2) = 0 \lor T(t) = 0$: Sabemos que $T(t) = 0$ não pode ser verdade,
  temos então que $X(2) = 0$.

Vamos então resolver a equação $\frac{X''(x)}{X(x)} = \lambda$:

$$
X''(x) -\lambda X(x) = 0
$$

Esta é uma [Equação Diferencial de Ordem Superior](/cdi-iii/equacoes-ordem-superior), pelo que vamos escrever o seu polinómio característico:

$$
P(D) = D^2 - \lambda
$$

Temos então 3 casos distintos: $\lambda = 0$, $\lambda > 0$ e $\lambda < 0$.

- Para $\lambda = 0$:

  Este é o caso mais simples. Ficamos com um polinómio característico $P(D) = D^2$, pelo que

  $$
  X(x) = c_2 x + c_3
  $$

  Pegando agora nas [**condições fronteira**](color:yellow), vamos concluir o seguinte:

  $$
  \begin{aligned}
  X(0) &= 0 \implies c_2 \times 0 + c_3 = 0 \implies c_3 = 0\\
  X(2) &= 0 \implies 2 c_2 + 0 = 0 \implies c_2 = 0
  \end{aligned}
  $$

  Concluímos assim, que se $\lambda = 0$, temos que $X(x) \equiv 0$.
  Tal não é verdade para a [**condição inicial**](color:orange) que temos, visto que $u(x,t) = 0 \times T(t) = 0$, que já vimos que não pode acontecer.  
  Assim, **não existem soluções** para $\lambda = 0$.

- Para $\lambda > 0$:

  Sendo que temos $P(D) = D^2 - \lambda = (D + \sqrt{\lambda})(D - \sqrt{\lambda})$ com $\lambda > 0$.  
  Um pequeno **truque** que podemos utilizar é fazer a mudança de variável $\lambda = w^2$, de forma a simplificar os cálculos.
  Ficamos assim com $P(D) = (D + w)(D - w)$.

  Resolvendo agora a equação:

  $$
  X(x) = c_4 e^{wx} + c_5 e^{-wx}
  $$

  Pegando agora nas [**condições fronteira**](color:yellow), vamos concluir o seguinte:

  $$
  \begin{aligned}
  X(0) = 0 &\Leftrightarrow c_4 e^{0} + c_5 e^{0} = 0 \Leftrightarrow c_4 + c_5 = 0 \Leftrightarrow c_5 = - c_4\\
  X(2) = 0 &\Leftrightarrow c_4 e^{2w} + c_5 e^{-2w} = 0\\
  &\Leftrightarrow c_4 e^{2w} - c_4 e^{-2w} = 0\\
  &\Leftrightarrow c_4 (e^{2w} - e^{-2w}) = 0 \\
  &\implies c_4 = 0 \implies c_5 = 0
  \end{aligned}
  $$

  Caso não seja claro o porquê de $c_4 = 0$, temos de notar que $e^{2w} - e^{-2w}$ só
  poderia ser nulo caso $\lambda = 0$, que não é o caso onde nos encontramos.

  Concluímos assim, que se $\lambda > 0$, temos que $X(x) \equiv 0$.
  Tal como já vimos para $\lambda = 0$, isto não é verdade para a [**condição inicial**](color:orange) que temos, visto que $u(x,t) = 0 \times T(t) = 0$, que já vimos que não pode acontecer.  
  Assim, **não existem soluções** para $\lambda > 0$.

- Para $\lambda < 0$:

  Chegamos ao último caso, e ao único onde vamos ter soluções.

  Sendo que temos $P(D) = D^2 - \lambda$ com $\lambda < 0$.  
  Um pequeno **truque** que podemos utilizar é fazer a mudança de variável $\lambda = - w^2$, de forma a simplificar os cálculos.
  Ficamos assim com $P(D) = D^2 + w^2$.

  Resolvendo agora a equação:

  $$
  X(x) = c_6 \sin(wx) + c_7 \cos(wx)
  $$

  Pegando agora nas [**condições fronteira**](color:yellow), vamos concluir o seguinte:

  $$
  \begin{aligned}
  X(0) = 0 &\Leftrightarrow 0 + c_7 \times 1 = 0 \Leftrightarrow c_7 = 0\\
  X(2) = 0 &\Leftrightarrow c_6 \sin(2w) = 0 \Leftrightarrow c_6 = 0 \lor \sin(2w) = 0
  \end{aligned}
  $$

  Se $c_6 = 0$ isso vai implicar que $u(x, t) = 0$ e, como já vimos, isso **não é solução**.  
  Vamos então resolver a equação $\sin (2w) = 0$.

  $$
  \sin (2w) = 0 \implies 2w = n\pi \implies w = \frac{n \pi}{2}
  $$

  Desfazendo agora a mudança de variável, ficamos com:

  $$
  \sqrt{-\lambda} = \frac{n \pi}{2} \implies \lambda = - \frac{n^2 \pi^2}{4}
  $$

  Substituindo $w$ na expressão de $X(x)$ acima ficamos com

  $$
  X(x) = c_6 \sin\left(\frac{n\pi}{2}x\right)
  $$

Substituindo agora $\lambda$ em $T(t)$, ficamos com as duas expressões:

$$
\begin{darray}{cc}
X(x) = c_6 \sin\left(\frac{n\pi}{2}x\right) & T(t) = c_1 e^{-\dfrac{n^2\pi^2 k t}{4}}
\end{darray}
$$

Finalmente, podemos voltar a juntar as duas expressões, pelo produto $u(x,t) = X(x)T(t)$.
Vamos usar uma nova constante $c = c_1 \times c_6$ para simplificar.

$$
u_n(x,t) = c e^{-\dfrac{n^2\pi^2 k t}{4}} \sin\left(\frac{n\pi}{2}x\right), n \in \Z_0^+
$$

Podemos agora generalizar esta expressão pelo [**Princípio da Sobreposição**](color:green).

$$
u(x,t) = \sum_{n=1}^{+\infty} c_n u_n(x,t) = \sum_{n=1}^{+\infty} c_n e^{-\dfrac{n^2\pi^2 k t}{4}} \sin\left(\frac{n\pi}{2}x\right)
$$

Finalmente, vamos determinar a solução particular definida pela [**condição inicial**](color:orange).  
Relembra-se que a condição inicial é $u(x,0) = \sin\left(\frac{\pi x}{2}\right) + 3\sin \left(\frac{5\pi x}{2} \right)$, que
já se encontra na forma de [Série de Fourier](/cdi-iii/serie-fourier).
Caso não se encontrasse nesta forma, teríamos de a ir determinar.

Sendo assim, temos apenas de descobrir os valores de $c_n$ que resultam na condição inicial, que podemos fazer facilmente por intuição.

Pegando na primeira parcela da condição inicial, $\sin\left(\frac{\pi x}{2}\right)$, vemos que $c_1 = 1$.  
Quanto à segunda parcela, $3\sin \left(\frac{5\pi x}{2} \right)$, vemos que $c_5 = 3$.

Então, descobrimos que $c_n$ é a seguinte sucessão:

$$
\begin{darray}{l}
c_1 = 1\\
c_5 = 3\\
c_n = 0 & n \ne 1 \land n \ne 5
\end{darray}
$$

Finalmente, obtemos assim a **solução do problema**!

$$
u(x,t) = e^{-\dfrac{1.71 \pi^2 t}{4}} \sin\left(\frac{\pi x}{2}\right) + e^{-\dfrac{25 \times 1.71 \pi^2 t}{4}} \sin\left(\frac{5 \pi x}{2}\right)
$$

:::

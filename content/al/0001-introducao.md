---
title: Introdução à Álgebra Linear
description: >-
  Sistemas de Equações Lineares.
  Matriz aumentada de um SEL.
  Matriz em Escada de Linhas.
  Incógnitas dependentes/livres.
  Transformações sobre as linhas de uma matriz.
  Processo de Eliminação de Gauss.
path: /al/introducao
type: content
---

# Introdução à Álgebra Linear

```toc

```

## Sistemas de Equações Lineares (SEL)

:::info[Equação Linear]

Uma equação linear para as incógnitas $x_1, x_2, \ldots, x_n$ é toda a equação sob a forma

$$
a_1 x_1 + a_2 x_2 + \ldots + a_n x_n = b, \qquad a_1, \ldots, a_n, b \in \mathbb{R}
$$

Mais ainda, $(s_1, \ldots, s_n)$ diz-se uma solução desta equação caso
possamos verificar que:

$$
a_1 s_1 + a_2 s_2 + \ldots + a_n s_n = b.
$$

:::

Podemos, claro está, criar um sistema com um número arbitrário de equações lineares:

$$
\begin{aligned}
\begin{cases}
  a_{11} x_1 + a_{12} x_2 + \ldots + a_{1n} x_n = b_1, \\
  a_{21} x_1 + a_{22} x_2 + \ldots + a_{2n} x_n = b_2, \\
  \vdots \\
  a_{m1} x_1 + a_{m2} x_2 + \ldots + a_{mn} x_n = b_m
\end{cases}
\end{aligned}
$$

Note-se que aqui podemos igualmente definir $(s_1, \ldots, s_n)$ como uma solução para o sistema:
requer-se, aqui, que seja solução de todas as equações do sistema.

:::details[Exemplo]

Consideremos o sistema de equações lineares seguinte:

$$
\begin{aligned}
\begin{cases}
  x - y = -5, \\
  2x - y = -2 \\
\end{cases}
\end{aligned}
$$

Uma solução possível para o sistema apresentado é $(3, 8)$, visto que:

$$
\begin{aligned}
\begin{cases}
  3 - 8 = -5, \\
  2 \cdot 3 - 8 = -2
\end{cases}
\end{aligned}
$$

:::

Definimos $S$ como o conjunto de todas as soluções $(s_1, \ldots, s_n)$ para um dado SEL.
Podemos, recorrendo a este conjunto, fazer algumas afirmações quanto a sistemas de equações lineares:
um SEL diz-se [**possível**](color:orange) caso $S$ não corresponda ao conjunto vazio,
e [**determinado**](color:green) caso este possua um único elemento. Mais ainda, temos que
dois SEL são [**equivalentes**](color:blue) caso os respetivos conjuntos de soluções sejam iguais.

### Matrizes de um SEL

Uma das noções principais (senão mesmo a principal) de Álgebra Linear é a de [**matriz**](color:orange).
Uma matriz nada mais é que uma forma alternativa, mais compacta, de representar um SEL.

Considerando o exemplo-base de SEL,

$$
\begin{aligned}
\begin{cases}
  a_{11} x_1 + a_{12} x_2 + \ldots + a_{1n} x_n = b_1, \\
  a_{21} x_1 + a_{22} x_2 + \ldots + a_{2n} x_n = b_2, \\
  \vdots \\
  a_{m1} x_1 + a_{m2} x_2 + \ldots + a_{mn} x_n = b_m
\end{cases}
\end{aligned}
$$

podemos definir a respetiva **matriz do sistema** da seguinte forma:

$$
A = \begin{bmatrix}
  a_{11} & a_{12} & \ldots & a_{1n} \\
  a_{21} & a_{22} & \ldots & a_{2n} \\
  \ldots & \ldots & \ldots & \ldots \\
  a_{m1} & a_{m2} & \ldots & a_{mn}
\end{bmatrix}
$$

Existe ainda a noção de **matriz aumentada do sistema**, que incorpora os números reais
do lado direito das equações (os $b_i$). Representamo-la de forma igualmente simples:

$$
A|b = \begin{bmatrix}
  a_{11} & a_{12} & \ldots & a_{1n} & b_1 \\
  a_{21} & a_{22} & \ldots & a_{2n} & b_2 \\
  \ldots & \ldots & \ldots & \ldots & \ldots \\
  a_{m1} & a_{m2} & \ldots & a_{mn} & b_m
\end{bmatrix}
$$

## Matriz em Escada de Linhas

É natural que se tentem encontrar formas de resolver SEL da forma mais eficiente possível:
é um problema extremamente frequente em várias áreas da matemática e engenharia!
Ora, quanto mais simples for a matriz aumentada, mais simples será resolver o problema, claro.
A simplicidade da matriz, aqui, prende-se quanto à sua forma: temos que é muito mais simples
resolver um SEL quando apresentado sob a forma de matriz caso esta esteja em [**escada de linhas**](color:orange).

:::info[Matriz em Escada de Linhas]

Dizemos que uma matriz se encontra em escada de linhas quando:

- Não existem linhas nulas acima de linhas não nulas;
- Toda a linha abaixo de uma linha arbitrária $L$ tem o seu **pivô** à **direita** do de $L$.

Dizemos ainda que este "pivô" corresponde ao [**primeiro coeficiente**](color:green) da linha em questão.

:::

:::details[Exemplo]

Encontram-se, de seguida, duas matrizes: a da esquerda está em escada de linhas, enquanto que a da direita não:
como podemos observar, a segunda linha tem o seu pivô à direita do da terceira, ditando
assim que a matriz não está em escada de linhas.

$$
\begin{aligned}
\begin{bmatrix}
  1 & 2 & 3 & 4 \\
  0 & 1 & 2 & 3 \\
  0 & 0 & 1 & 2 \\
  0 & 0 & 0 & 1
\end{bmatrix}
\qquad
\begin{bmatrix}
  1 & 2 & 3 & 4 \\
  0 & 0 & 1 & 2 \\
  0 & 1 & 2 & 3 \\
  0 & 0 & 0 & 1
\end{bmatrix}
\end{aligned}
$$

:::

Resta ainda adicionar a noção de incógnitas **livres** e **dependentes**.
Uma incógnita, $x_i$, diz-se [**dependente**](color:green) se na respetiva coluna da matriz aumentada do
sistema em que se encontra houver um pivô. Caso contrário, diz-se [**livre**](color:red).
De realçar que esta análise só pode ser realizada a matrizes **em escada de linhas.**

Atentemos na seguinte matriz:

$$
A|b = \begin{bmatrix}
  \boxed{1} & 1 & -1 & 2 \\
  0 & \boxed{1} & -1 & 3
\end{bmatrix}
$$

Temos, aqui, que as incógnitas $x_1$ e $x_2$ são dependentes, visto que são pivôs das primeira
e segunda linhas, respetivamente. Por outro lado, $x_3$ é uma incógnita livre!

:::tip[]

Podemos daqui retirar algumas noções-chave sobre sistemas de equações lineares:

- Um SEL diz-se impossível caso exista um pivô na última coluna da matriz aumentada do sistema.
  Ora, a justificação é relativamente simples: se existe um pivô na última coluna, quer dizer
  que os coeficientes para todas as incógnitas serão, nessa linha, $0$, e portanto
  teremos uma equação tal que $0 = b_i, b_i \neq 0$ - uma contradição, portanto.
- Um SEL diz-se possível e determinado caso todas as colunas (exceto a última) tenham pivô.
- Um SEL diz-se possível e indeterminado caso pelo menos uma coluna não tenha pivô (descontando a última).

:::

Abordámos acima os conceitos-base referentes à noção de SEL e matriz.
Não foi abordada, contudo, uma forma de chegar à matriz em escada de linhas de um sistema.
Para nos ajudar a fazê-lo, vamos primeiro olhar para um conjunto de transformações
que podemos aplicar às linhas de uma matriz.

:::info[Transformações Elementares sobre as Linhas de uma Matriz]

- Podemos **trocar as linhas de uma matriz**, sem que tal altere o conjunto-solução do sistema:
  estamos, no fundo, apenas a trocar a ordem pela qual as equações aparecem, pelo que
  o resultado final será o mesmo. Podemos denotar esta operação através de $L_i \leftrightarrow L_j$.
- Podemos **multiplicar uma linha por um número**, sem que tal altere o conjunto-solução do sistema:
  estamos apenas a multiplicar todos os coeficientes (e $b_i$) da linha pelo mesmo número, pelo que
  a solução será a mesma, já que ter $2x + y = 1$ é equivalente a ter $4x + 2y = 2$ (por exemplo).
  Podemos denotar esta operação através de $\alpha L_i$, onde $\alpha = 2$ é o tal número pelo qual estamos a multiplicar a linha.
- Podemos **substituir uma linha pela sua soma com o múltiplo de outra linha**, sem que tal altere o conjunto-solução do sistema:
  colocando a questão de forma mais simples, se $A = B$ e $C = D$, então podemos afirmar que $A + C = B + D$.
  Podemos denotar esta operação através de $L_i + \alpha L_j$.

:::

## Processo de Eliminação de Gauss

Trata-se de um processo de resolução de sistemas de equações lineares, assente na noção
de matriz aumentada e nas transformações elementares referidas acima. O processo é bastante simples:

- Começamos por criar a matriz aumentada do sistema, $A|b$, tendo em atenção a ordem das incógnitas.
- Aplicamos sucessivas transformações elementares sobre as linhas da mesma, até obter uma matriz em escada de linhas.
- Verificamos se o sistema é possível, identificando nesse caso as incógnitas dependentes e livres.
- Resolver, por fim, o sistema.

:::details[Exemplos]

Considerando o seguinte SEL e respetiva matriz aumentada:

$$
\begin{aligned}
\begin{cases}
  x_1 + x_2 = 1 \\
  2x_1 + 2x_2 + x_3 = 0 \\
  3x_1 + x_3 = 1
\end{cases}
\qquad \qquad
\begin{bmatrix}
  1 & 1 & 0 & 1 \\
  2 & 2 & 1 & 0 \\
  3 & 0 & 1 & 1
\end{bmatrix}
\end{aligned}
$$

Teremos, por eliminação de Gauss:

$$
\begin{aligned}
\begin{bmatrix}
  1 & 1 & 0 & 1 \\
  2 & 2 & 1 & 0 \\
  3 & 0 & 1 & 1
\end{bmatrix}
\underrightarrow{L_2 - 2L_1}
\begin{bmatrix}
  1 & 1 & 0 & 1 \\
  0 & 0 & 1 & -2 \\
  3 & 0 & 1 & 1
\end{bmatrix}
\underrightarrow{L_3 - 3L_1}
\begin{bmatrix}
  1 & 1 & 0 & 1 \\
  0 & 0 & 1 & -2 \\
  0 & -3 & 1 & -2
\end{bmatrix}
\end{aligned}
\\
\underrightarrow{L_2 \leftrightarrow L_3}
\begin{bmatrix}
  \boxed{1} & 1 & 0 & 1 \\
  0 & \boxed{-3} & 1 & -2 \\
  0 & 0 & \boxed{1} & -2
\end{bmatrix}
$$

A matriz está, assim, em escada de linhas, e o sistema é possível e determinado. Podemos, então, resolvê-lo:

$$
\begin{aligned}
\begin{cases}
  x_1 + x_2 = 1 \\
  2x_1 + 2x_2 + x_3 = 0 \\
  3x_1 + x_3 = 1
\end{cases}
\leftrightarrow
\begin{cases}
  x_1 + x_2 = 1 \\
  -3x_2 + x_3 = -2 \\
  x_3 = -2
\end{cases}
\leftrightarrow
\begin{cases}
  x_1 = 1 \\
  x_2 = 0 \\
  x_3 = -2
\end{cases}
\end{aligned}
$$

Temos, portanto, que relativamente a este SEL, $S = \{(1, 0, -2)\}$.

---

Podem ainda surgir problemas com coeficientes desconhecidos. Consideremos o seguinte SEL e respetiva matriz aumentada:

$$
\begin{aligned}
\begin{cases}
  x_1 + \alpha x_3 = 1 \\
  2x_1 + 2x_2 + x_3 = 0 \\
  3x_1 + x_3 = \beta
\end{cases}
\qquad \qquad
\begin{bmatrix}
  1 & 0 & \alpha & 1 \\
  2 & 2 & 1 & 0 \\
  3 & 0 & 1 & \beta
\end{bmatrix}
\end{aligned}
$$

Pretendemos descobrir os valores de $\alpha$ e $\beta$ para os quais o sistema é possível e indeterminado.
Por eliminação de Gauss, temos:

$$
\begin{aligned}
\begin{bmatrix}
  1 & 0 & \alpha & 1 \\
  2 & 2 & 1 & 0 \\
  3 & 0 & 1 & \beta
\end{bmatrix}
\underrightarrow{L_2 - 2L_1}
\begin{bmatrix}
  1 & 0 & \alpha & 1 \\
  0 & 2 & 1 - 2\alpha & -2 \\
  3 & 0 & 1 & \beta
\end{bmatrix}
\underrightarrow{L_3 - 3L_1}
\begin{bmatrix}
  1 & 0 & \alpha & 1 \\
  0 & 2 & 1 - 2\alpha & -2 \\
  0 & 0 & 1 - 3\alpha & \beta - 3
\end{bmatrix}
\end{aligned}
$$

Podemos, daqui, retirar que:

$$
\begin{aligned}
\begin{cases}
  x_1 + \alpha x_3 = 1 \\
  2x_2 + (1 - 2\alpha)x_3 = -2 \\
  (1 - 3\alpha)x_3 = \beta - 3
\end{cases}
\end{aligned}
$$

:::

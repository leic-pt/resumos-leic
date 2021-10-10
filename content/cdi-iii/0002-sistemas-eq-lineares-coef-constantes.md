---
title: Sistemas de Equações Lineares com Coeficientes Constantes
description: >-
  Sistemas de Equações Lineares com Coeficientes Constantes.
  Revisão de Álgebra Linear
path: /cdi-iii/sistemas-eq-lineares-coef-constantes
type: content
---

# Sistemas de Equações Lineares com Coeficientes Constantes

```toc

```

:::tip[Definição]

Equação do tipo:

$$
\frac{\d y}{\d t} = A y + B(t)
$$

em que

- $A$ é uma matrix quadrada $n \times n$
- $y(t)$ é uma função $\R \to \R^n$
- $B(t)$ é uma função continua de $\R \to \R^n$

Se $B(t) \equiv 0$ a equação designa-se por [**homogénea**](color:orange).

:::

Se tivermos, por exemplo, o sistema, que [podemos facilmente resolver](/cdi-iii/equacoes-diferenciais-ordinarias#caso-bt-equiv-0) linha a linha:

$$
\begin{cases}
\frac{\d x}{\d t} = x\\
\frac{\d y}{\d t} = x + y - e^t\\
\frac{\d z}{\d t} = x + y + z - 2e^t
\end{cases}
\Leftrightarrow
\begin{cases}
x = e^t\\
y = e^t\\
z = e^t
\end{cases}
$$

Podemos reescrever o sistema acima para obter a forma de **equação linear com coeficientes constantes**.

$$
\begin{aligned}
\frac{\d w}{\d t} &= \begin{bmatrix}
x\\
x+y-e^t\\
x+y+z-2e^t
\end{bmatrix}\\
& = \begin{bmatrix}
x\\
x+y\\
x+y+z
\end{bmatrix} + \begin{bmatrix}
0\\
-e^t\\
-2e^t
\end{bmatrix}\\
& = \begin{bmatrix}
1 & 0 & 0\\
1 & 1 & 0\\
1 & 1 & 1
\end{bmatrix} \begin{bmatrix}
x\\
y\\
z
\end{bmatrix} + \begin{bmatrix}
0\\
-e^t\\
-2e^t
\end{bmatrix}\\
& = \begin{bmatrix}
1 & 0 & 0\\
1 & 1 & 0\\
1 & 1 & 1
\end{bmatrix} w + \begin{bmatrix}
0\\
-e^t\\
-2e^t
\end{bmatrix}
\end{aligned}
$$

## Equações Homogéneas

Começando então pelo caso em que $B(t) \equiv 0$, temos que:

$$
\frac{\d y}{\d t} = A y
$$

com uma matrix $A$ quadrada $n \times n$.

Para $n=1$ [sabemos que $y = k e^{At}$](/cdi-iii/equacoes-diferenciais-ordinarias#caso-bt-equiv-0).
Para $n>1$ vamos ter exatamente a mesma coisa, mas para isso temos de definir o exponencial de uma matriz.

### Exponencial de matrizes

Por definição, tal como em dimensão 1, onde

$$
e^\alpha = \sum_{n = 0}^{+\infty} \frac{\alpha^n}{n!}
$$

passamos a ter, para uma matrix $A$ quadrada $n \times n$:

$$
e^A = Id + A + \frac{1}{2} A^2 + \frac{1}{3!} A^3 + \dots = \sum_{k=0}^{+\infty} \frac{A^k}{k!}
$$

Numa explicação mais teórica, dizemos que

$$
e^A = \lim_{N \to +\infty} \sum_{k=0}^{N} \frac{1}{k!}A^k
$$

e poderíamos concluir que este limite é absolutamente convergente (carece de demonstração).

:::details[Exemplo pela definição]

Queremos calcular o valor de $e^{At}$ da matriz

$$
A = \begin{bmatrix}
2 & 1\\
0 & 0
\end{bmatrix}
$$

Vamos então tentar descobrir $A^k$, para podemos utilizar a definição.

$$
e^A = Id + A + \frac{1}{2} A^2 + \frac{1}{3!} A^3 + \dots
$$

$$
A^2 = \begin{bmatrix}
2 & 1\\
0 & 0
\end{bmatrix} \begin{bmatrix}
2 & 1\\
0 & 0
\end{bmatrix} = \begin{bmatrix}
4 & 2\\
0 & 0
\end{bmatrix}
$$

$$
A^3 = \begin{bmatrix}
4 & 2\\
0 & 0
\end{bmatrix} \begin{bmatrix}
2 & 1\\
0 & 0
\end{bmatrix} = \begin{bmatrix}
8 & 4\\
0 & 0
\end{bmatrix}
$$

Podemos então concluir que $A^k$:

$$
A^k = \begin{bmatrix}
2^k & 2^{k-1}\\
0 & 0
\end{bmatrix}, k \geq 1
$$

É possível verificar este resultado por [indução matemática](/cdi-i/inducao-supremo#princípio-da-indução-matemática), mas tal prova foi omitida.

Assim temos que:

$$
\begin{aligned}
e^{At} &= Id + \sum_{k=1}^{+\infty} \frac{A^k t^k}{k!}\\
&= \begin{bmatrix}
1 & 0\\
0 & 1
\end{bmatrix} + \sum_{k=1}^{+\infty} \frac{1}{k!} \begin{bmatrix}
2^k t^k & t^k 2^{k-1}\\
0 & 0
\end{bmatrix}\\
&= \begin{bmatrix}
1 & 0\\
0 & 1
\end{bmatrix} + \begin{bmatrix}
\sum_{k=1}^{+\infty} \frac{2^k t^k}{k!} & \sum_{k=1}^{+\infty} \frac{2^{k-1}t^k}{k!}\\
0 & 0
\end{bmatrix}\\
&=\begin{bmatrix}
\sum_{k=0}^{+\infty} \frac{2^k t^k}{k!} & \frac{1}{2}\sum_{k=1}^{+\infty} \frac{2^k t^k}{k!}\\
0 & 1
\end{bmatrix}\\
&= \begin{bmatrix}
e^{2t} & \frac{1}{2} (e^{2t} - 1)\\
0 & 1
\end{bmatrix}
\end{aligned}
$$

:::

### Funções Matriciais

Seja $C$ uma matrix $m \times n$ em que cada entrada é uma função escalar, e $c_{ij}$ são as entradas de $C$.

Podemos facilmente definir tanto a derivada como a primitiva de $C$:

- **Derivada:**

  $$
  \frac{\d C}{\d t} = \begin{bmatrix}\frac{\d c_{ij}}{\d t}\end{bmatrix}
  $$

  Por exemplo:

  $$
  \begin{darray}{cc}
  C = \begin{bmatrix}
  t & t^2\\
  e^t & \sin t
  \end{bmatrix} & \frac{\d C}{\d t} = \begin{bmatrix}
  1 & 2t\\
  e^t & \cos t
  \end{bmatrix}
  \end{darray}
  $$

- **Primitiva:**

  $$
  \int_{a}^{b} C \d t = \begin{bmatrix}\int_{a}^{b} c_{ij} \d t\end{bmatrix}
  $$

:::tip[Proposição]

Se $C$ é uma matrix $m \times p$ e $D$ uma matrix $p \times n$, então

$$
\frac{\d }{\d t} (CD) = \frac{\d C}{\d t}D + C \frac{\d D}{\d t}
$$

:::

:::tip[Teorema]

Seja $A$ uma matriz quadrada (constante).
Então, a função matricial $E(t) = e^{tA}$ satisfaz as seguintes propriedades:

- $\frac{\d E(t)}{\d t} = AE(t) = E(t) A$
- $E(0) = Id$

$$
E(t) = Id + tA + \frac{t^2}{2}A^2 + \frac{t^3}{3!} + \dots
$$

:::

:::details[Demonstração]

$$
\begin{aligned}
\frac{\d E(t)}{\d t} &= \frac{\d }{\d t} \left(\sum_{k=0}^{+\infty} \frac{t^k}{k!}A^k\right)\\
&=\sum_{k=0}^{+\infty} \frac{kt^{k-1}}{h!}A^k\\
&=\sum_{k=1}^{+\infty} \frac{t^{k-1}}{(k-1)!} A^k\\
&=\sum_{k=0}^{+\infty} \frac{t^k}{k!} A^{k+1}\\
&=\lim_{n \to +\infty} \left(\sum_{k=0}^{N} \frac{t^k}{k!} A^{k+1}\right)\\
&=\lim_{n \to +\infty} \left(\sum_{k=0}^{N} \frac{t^k}{k!} A^{k}\right)A\\
&=e^{tA}A = A e^{tA}
\end{aligned}
$$

:::

Um corolário deste teorema é que

$$
(e^A)^{-1} = e^{-A}
$$

:::tip[Teorema]

Seja $A$ matriz $n\times n$ (constante) e $y_0 \in \R^n$, $t_0 \in \R$, então o PVI (problema de valor inicial)

$$
\frac{\d y}{\d t} = Ay \text{ com } y(t_0) = y_0
$$

tem uma única solução $y(t)$ que pode ser calculada por

$$
y(t) = e^{(t-t_0) A} y_0
$$

:::

**Corolário:** Sejam $A$ e $B$ duas matrizes $n\times n$ tais que $AB = BA$, então $e^{A+B} = e^A e^B$

:::info[Exemplo]

Tomando agora como exemplo o seguinte sistema:

$$
\begin{cases}
\frac{\d x}{\d t} = 2x + y\\
\frac{\d y}{\d t} = 0
\end{cases}
\text{ com }
y(t_0) = \begin{bmatrix}
x_0\\
y_0
\end{bmatrix}
$$

Podemos colocar agora na forma $\frac{\d y}{\d t} = Ay$, com

$$
\begin{darray}{c}
y = \begin{bmatrix}
x\\
y
\end{bmatrix}&
A = \begin{bmatrix}
2 & 1\\
0 & 0
\end{bmatrix}
\end{darray}
$$

Sabemos, de [um exemplo anterior](#exponencial-de-matrizes), que

$$
e^{tA}=\begin{bmatrix}
e^{2t} & \frac{1}{2} (e^{2t} - 1)\\
0 & 1
\end{bmatrix}
$$

Então, pelo teorema acima, podemos concluir que

$$
\begin{bmatrix}
x(t)\\
y(t)
\end{bmatrix} = e^{(t-t_0) A} \begin{bmatrix}
x_0\\
y_0
\end{bmatrix} = \begin{bmatrix}
e^{2(t-t_0)} & \frac{1}{2} (e^{2(t-t_0)} - 1)\\
0 & 1
\end{bmatrix}
$$

$$
\begin{darray}{l}
x(t) = x_0 e^{2(t-t_0)} + \frac{y_0}{2}\left(e^{2(t-t_0)} - 1 \right)\\
y(t) = y_0
\end{darray}
$$

:::

:::tip[Teorema]

Seja $A$ uma matrix $n \times n$ (constante). Então as soluções de

$$
\frac{\d y}{\d t} = Ay
$$

constituem um espaço linear de dimensão $n$.

:::

:::tip[Proposição]

Um vetor $v$ é um [vetor próprio](/al/valores-vetores-proprios) de $A$ e corresponde ao valor próprio $\lambda$ se e só se
$y(t) = e^{t \lambda} v$ é solução de $\frac{\d y}{\d t} = Ay$.

:::

Com esta proposição, podemos concluir que é possível resolver equações do tipo $\frac{\d y}{\d t} = Ay$,
se descobrirmos os [vetores e valores próprios](/al/valores-vetores-proprios) da matriz $A$.

:::info[Exemplo]

[O exemplo seguinte corresponde ao exercício 2.1.2 a) da ficha de 2021/2022](color:brown)

**Resolver a seguinte equação diferencial:**

$$
\begin{darray}{ccc}
x' = \begin{bmatrix}
5 & -1\\
3 & 1
\end{bmatrix} x &, & x(0) = \begin{bmatrix}
2\\
-1
\end{bmatrix}
\end{darray}
$$

Começamos então por determinar os [valores e vetores próprios](/al/valores-vetores-proprios) de $A$:

$$
\det (A - \lambda I) = \begin{vmatrix}
5 - \lambda & -1\\
3 & 1 - \lambda
\end{vmatrix} = (5 - \lambda)(1 - \lambda) + 3 = (\lambda-2)(\lambda-4)
$$

Temos então dois valores próprios: $\lambda = 2$ e $\lambda = 4$.

- Para $\lambda = 2$:

  Temos então que

  $$
  A - 2I = \begin{bmatrix}
  3 & -1\\
  3 & -1
  \end{bmatrix}
  $$

  Então, os vetores próprios são os vetores que pertencem ao espaço nulo da matriz:

  $$
  \operatorname{Nul} \begin{bmatrix}
  3 & -1\\
  3 & -1
  \end{bmatrix} = \mathcal{L} \{(1,3)\}
  $$

  Assim, o vetor próprio do valor próprio $\lambda = 2$ é $(1,3)$.

- Para $\lambda = 4$:

  Temos então que

  $$
  A - 2I = \begin{bmatrix}
  1 & -1\\
  3 & -3
  \end{bmatrix}
  $$

  Então, os vetores próprios são os vetores que pertencem ao espaço nulo da matriz:

  $$
  \operatorname{Nul} \begin{bmatrix}
  1 & -1\\
  3 & -3
  \end{bmatrix} = \mathcal{L} \{(1,3)\}
  $$

  Assim, o vetor próprio do valor próprio $\lambda = 4$ é $(1,1)$.

Assim temos que os vetores próprios de $A$ são $(1,3)$ ($\lambda = 2$) e $(1,1)$ ($\lambda = 4$).

De acordo com a proposição acima, temos a solução geral da nossa equação:

$$
x(t) = c_1 e^{2t} \begin{bmatrix}
1\\
3
\end{bmatrix} + c_2 e^{4t} \begin{bmatrix}
1\\
1
\end{bmatrix}
$$

Vamos agora descobrir os valores das constantes, de acordo com o valor inicial dado no enunciado.

$$
x(0) = \begin{bmatrix}
2\\
-1
\end{bmatrix} \Leftrightarrow c_1 \begin{bmatrix}
1\\
3
\end{bmatrix} + c_2 \begin{bmatrix}
1\\
1
\end{bmatrix} = \begin{bmatrix}
2\\
-1
\end{bmatrix} \Leftrightarrow c_1 \begin{bmatrix}
1 & 1\\
3 & 1
\end{bmatrix} \begin{bmatrix}
c_1\\
c_2
\end{bmatrix} = \begin{bmatrix}
2\\
-1
\end{bmatrix}
$$

$$
\augmatrix{cc|c}{
  1 & 1 & 2\\
  3 & 1 & -1
} \to \augmatrix{cc|c}{
  1 & 1 & 2\\
  0 & -2 & -1
} \to \augmatrix{cc|c}{
  1 & 0 & -\frac{3}{2}\\
  0 & 1 & \frac{7}{2}
}
$$

Temos assim, a solução final

$$
x(t) = -\frac{3}{2} e^{2t} \begin{bmatrix}
1\\
3
\end{bmatrix} + \frac{7}{2} e^{4t} \begin{bmatrix}
1\\
1
\end{bmatrix}
$$

ou, como um sistema,

$$
\begin{cases}
x_1 (t) = -\frac{3}{2} e^{2t} + \frac{7}{2} e^{4t}\\
x_2 (t) = -\frac{9}{2} e^{2t} + \frac{7}{2} e^{4t}
\end{cases}
$$

:::

:::tip[Proposição]

Seja $A$ $n\times n$ com entradas reais.  
Então $y: \R \to \C^n$ é solução de $\frac{\d y}{\d t} = Ay$ se e só se

$$
\begin{darray}{ccc}
u(t) = R_e y(t) & \text{e} & v(t) = I_m y(t)
\end{darray}
$$

são soluções reais da mesma equação

:::

Esta proposição permite-nos resolver as equações quando os [valores próprios](/al/valores-vetores-proprios) da matriz são complexos.

:::info[Exemplo]

**Resolver a seguinte equação diferencial:**

$$
x' = \begin{bmatrix}
1 & -1\\
1 & 1
\end{bmatrix} x
$$

Começamos então por determinar os [valores e vetores próprios](/al/valores-vetores-proprios) de $A$:

$$
\det (A - \lambda I) = \begin{vmatrix}
1 - \lambda & -1\\
1 & 1 - \lambda
\end{vmatrix} = (1-\lambda) ^2 + 1
$$

Temos então dois valores próprios **complexos**: $\lambda = 1 + i$ e $\lambda = 1 - i$.

Para $\lambda = 1 + i$:

$$
\operatorname{Nul} \begin{bmatrix}
-i & -1\\
1 & -i
\end{bmatrix} = \operatorname{Nul} \begin{bmatrix}
1 & -i\\
0 & 0
\end{bmatrix} = \mathcal{L} \{(1,-i)\}
$$

Então

$$
e^{(1+i) t} \begin{bmatrix}
1\\
-i
\end{bmatrix}
$$

é uma solução do sistema de EDO.

Podemos continuar a desenvolver, de forma a separar a parte real da parte imaginária:

$$
\begin{aligned}
e^{(1+i) t} \begin{bmatrix}
1\\
-i
\end{bmatrix} &= e^t e^{it} \begin{bmatrix}
1\\
-i
\end{bmatrix}\\
&= e^t (\cos t + i \sin t) \begin{bmatrix}
1\\
-i
\end{bmatrix}\\
&= e^t \begin{bmatrix}
\cos t\\
\sin t
\end{bmatrix} + i e^t \begin{bmatrix}
\sin t\\
-\cos t
\end{bmatrix}
\end{aligned}
$$

Logo a solução geral do sistema de EDO é

$$
x(t) = c_1 e^t \begin{bmatrix}
\cos t\\
\sin t
\end{bmatrix} + c_2 e^t \begin{bmatrix}
\sin t\\
-\cos t
\end{bmatrix}
$$

:::

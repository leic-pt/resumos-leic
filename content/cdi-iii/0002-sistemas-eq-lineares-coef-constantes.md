---
title: Sistemas de Equações Lineares com Coeficientes Constantes
description: >-
  Sistemas de Equações Lineares com Coeficientes Constantes.
  Matrizes por Blocos: Blocos de Jordan.
  Revisão de Álgebra Linear.
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

Se tivermos, por exemplo, o sistema, que [podemos facilmente resolver](/cdi-iii/equacoes-diferenciais-ordinarias#caso-bt-equiv-0---homogéneas) linha a linha:

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

Para $n=1$ [sabemos que $y = k e^{At}$](/cdi-iii/equacoes-diferenciais-ordinarias#caso-bt-equiv-0---homogéneas).
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

:::tip[Proposição]
Se $A = S J S^{-1}$, em que $A, S, J$ são matrizes $n \times n$ e $S$ é invertível ($\det S \ne 0$),
então

$$
e^A = S e^J S^{-1}
$$

:::

:::details[Demonstração]

$$
\begin{darray}{l}
A^2 = A A = S J S^{-1} S J S^{-1} = S J J S^{-1} = S J^2 S^{-1}\\
A^3 = A^2 A = S J^2 S^{-1} S J S^{-1} = S J^2 J S^{-1} = S J^3 S^{-1}\\
A^k = S J^k S^{-1}
\end{darray}
$$

Temos assim,

$$
\begin{aligned}
e^A &= \sum_{k=0}^{+\infty} \frac{1}{k!}A^k\\
&= \sum_{k=0}^{+\infty} \frac{1}{k!}SJ^kS^{-1}\\
&= S \sum_{k=0}^{+\infty} \frac{1}{k!} J^k S^{-1}\\
&= S e^J S^{-1}
\end{aligned}
$$

:::

Esta proposição irá ser útil porque se repararmos, isto significa que se tivermos uma matriz diagonal $J$,
ou seja, $A$ for diagonizável, podemos facilmente descobrir o exponencial de $A$ devido às seguinte duas propriedades:

$$
\begin{darray}{cc}
A^k = \begin{bmatrix}
\lambda_1^k & 0 & \dots & 0\\
0 & \lambda_2^k & \dots & 0\\
\vdots & \vdots & \ddots & 0\\
0 & 0 & 0 & \lambda_n^k
\end{bmatrix} & e^{tA} = \begin{bmatrix}
e^{\lambda_1 t} & 0 & \dots & 0\\
0 & e^{\lambda_2 t} & \dots & 0\\
\vdots & \vdots & \ddots & 0\\
0 & 0 & 0 & e^{\lambda_n t}
\end{bmatrix}
\end{darray}
$$

Se quisermos verificar que determinármos bem a exponencial de uma matrix $A$,
podemos usar os seguintes **critérios de verificação**:

1. $$
   e^{tA} \big|_{t=0} = Id
   $$
2. $$
   \frac{\d e^{tA}}{\d t} \big|_{t_0} = Ae^{tA} \big|_{t=0} = A
   $$

:::details[Exemplo 1]

**Determinar exponencial da matriz $A$:**

$$
A = \begin{bmatrix}
3 & 1\\
1 & 3
\end{bmatrix}
$$

Determinar valores e vetores próprios:

$$
\det(A - \lambda I) = \begin{vmatrix}
3 - \lambda & 1\\
1 & 3 - \lambda
\end{vmatrix} = (3-\lambda) ^2 - 1
$$

Após calcular as raízes do polinómio, temos assim valores próprios: $\lambda = 2$ e $\lambda = 4$.  
Vamos calcular agora os vetores próprios.

- Para $\lambda = 2$:

  $$
  \operatorname{Nul} (A - 2I) = \operatorname{Nul} \begin{bmatrix}
  1 & 1\\
  1 & 1
  \end{bmatrix} = \mathcal{L} \{(1,-1)\}
  $$

- Para $\lambda = 4$:

  $$
  \operatorname{Nul} (A - 4I) = \operatorname{Nul} \begin{bmatrix}
  -1 & 1\\
  1 & -1
  \end{bmatrix} = \mathcal{L} \{(1,1)\}
  $$

Temos assim que $A = S \Lambda S^{-1}$ com

$$
\begin{darray}{cc}
S = \begin{bmatrix}
1 & 1\\
-1 & 1
\end{bmatrix} & \Lambda = \begin{bmatrix}
2 & 0\\
0 & 4
\end{bmatrix}
\end{darray}
$$

A matriz $S$ corresponde aos vetores próprios, e a matrix $\Lambda$ aos valores próprios.

Então,

$$
\begin{aligned}
e^{tA} &= S e ^{t\Lambda} S^{-1}\\
&= \begin{bmatrix}
1 & 1\\
-1 & 1
\end{bmatrix} \begin{bmatrix}
e^{2t} & 0\\
0 & e^{4t}
\end{bmatrix} S^{-1}\\
&= \begin{bmatrix}
e^{2t} & e^{4t}\\
-e^{2t} & e^{4t}
\end{bmatrix} \frac{1}{2} \begin{bmatrix}
1 & -1\\
1 & 1
\end{bmatrix}\\
&= \begin{bmatrix}
\frac{e^{2t} + e^{4t}}{2} & \frac{e^{4t} - e^{2t}}{2}\\
\frac{e^{4t} - e^{2t}}{2} & \frac{e^{4t} + e^{2t}}{2}
\end{bmatrix}
\end{aligned}
$$

Vamos agora testar os **critérios de verificação**:

$$
\begin{bmatrix}
\frac{e^{0} + e^{0}}{2} & \frac{e^{0} - e^{0}}{2}\\
\frac{e^{0} - e^{0}}{2} & \frac{e^{0} + e^{0}}{2}
\end{bmatrix} = \begin{bmatrix}
1 & 0\\
0 & 1
\end{bmatrix} = Id
$$

$$
\begin{bmatrix}
\frac{2e^{2t} + 4e^{4t}}{2} & \frac{4e^{4t} - 2e^2t}{2}\\
\frac{4e^{4t} - 2e^2t}{2} & \frac{2e^{2t} + 4e^{4t}}{2}
\end{bmatrix} \underset{t=0}{\longrightarrow} \begin{bmatrix}
3 & 1\\
1 & 3
\end{bmatrix} = A
$$

:::

:::details[Exemplo 2]

**Determinar exponencial da matriz $A$:**

$$
A = \begin{bmatrix}
1 & -1\\
1 & 1
\end{bmatrix}
$$

Calculemos agora os [valores e vetores próprios](/al/valores-vetores-proprios) de $A$:

$$
\begin{darray}{c}
\det(A - \lambda I) = (1-\lambda) ^2 + 1\\
\begin{darray}{cc}
\lambda = 1 + i & \lambda = 1 - i
\end{darray}\\
\end{darray}
$$

- Para $\lambda = 1 + i$:

  $$
  \operatorname{Nul} (A - (1 + i)I) = \operatorname{Nul} \begin{bmatrix}
  -i & -1\\
  1 & -i
  \end{bmatrix} = \mathcal{L} \{(1, -i)\}
  $$

- Para $\lambda = 1 - i$:

  $$
  \operatorname{Nul} (A - (1 - i)I) = \mathcal{L} \{(1, i)\}
  $$

Então, temos $S$ e $\Lambda$ que satisfazem $S\Lambda S^{-1}$:

$$
\begin{darray}{cc}
S = \begin{bmatrix}
1 & 1\\
-i & i
\end{bmatrix} & \Lambda = \begin{bmatrix}
1 + i & 0\\
0 & 1 - i
\end{bmatrix}
\end{darray}
$$

E finalmente:

$$
\begin{aligned}
e^{tA} &= S e^{t\Lambda} S^{-1}\\
&= \begin{bmatrix}
1 & 1\\
-i & i
\end{bmatrix} \begin{bmatrix}
e^{t+it} & 0\\
0 & e^{t - it}
\end{bmatrix} \frac{1}{2i} \begin{bmatrix}
i & -1\\
i & 1
\end{bmatrix}\\
&= \frac{e^t}{2} \begin{bmatrix}
1 & 1\\
-i & i
\end{bmatrix} \begin{bmatrix}
e^{it} & 0\\
0 & e^{-it}
\end{bmatrix} \begin{bmatrix}
1 & i\\
1 & -1
\end{bmatrix}\\
&= \dots\\
&= \frac{e^t}{2} \begin{bmatrix}
e^{it} + e^{-it} & i e^{it} - i e^{-it}\\
- i e^{it} + i e^{-it} & e^{it} + e^{-it}
\end{bmatrix}\\
&= \dots\\
&= e^t \begin{bmatrix}
\cos t & -\sin t\\
\sin t & \cos t
\end{bmatrix}
\end{aligned}
$$

:::

#### Matrizes por Blocos

Por vezes as matrizes não são diagonizáveis. Vamos ver mais à frente como podemos usar
matrizes divididas em blocos para determinar as exponenciais destas matrizes.

Uma matriz está dividida em blocos, se tiver blocos $n \times n$ na sua diagonal, em que todos os outros valores fora da diagonal são $0$.
Os blocos podem ser de qualquer tamanho, **inclusive $1 \times 1$**.

$$
\def\marray#1{\hspace{-5pt}\begin{array}{c}#1\end{array}\hspace{-5pt}}
e^{tA} = \begin{bmatrix}
\boxed{e^{tB_1}} & \marray{0&0&0} & 0 & \dots &\marray{0&0}\\
\marray{0\\ 0\\ 0} & \boxed{\marray{&&\\ &e^{tB_2}&\\ &&}} & \marray{0\\0\\0} & \marray{\dots\\\dots\\\dots} & \marray{0&0\\0&0\\0&0}\\
0 & \marray{0&0&0} & \ddots & \dots & \marray{0&0}\\
\vdots & \marray{\vdots & \vdots & \vdots} & \vdots & \ddots & \marray{0& 0}\\
\marray{0\\0} & \marray{0&0&0\\0&0&0} & \marray{0\\0} & \marray{0\\0} & \boxed{\marray{e^{tB_j} &\\&}}
\end{bmatrix}
$$

Abaixo está um exemplo de uma matriz com três blocos:

$$
\def\marray#1{\hspace{-5pt}\begin{array}{c}#1\end{array}\hspace{-5pt}}
e^{tA} = \begin{bmatrix}
\boxed{2} & \marray{0&0&0} &\marray{0&0}\\
\marray{0\\ 0\\ 0} & \boxed{\marray{0&3&1\\4&-3&2\\5&2&0}} & \marray{0&0\\0&0\\0&0}\\
\marray{0\\0} & \marray{0&0&0\\0&0&0} & \boxed{\marray{0&1\\1&0}}
\end{bmatrix}
$$

:::details[Exemplo 3]

Vendo o exemplo 1 e 2 do tópico anterior, podemos fazer uma matriz que tem dois blocos, um com cada uma das matrizes dos exemplos.

$$
A = \begin{bmatrix}
1 & -1 & 0 & 0\\
1 & 1 & 0 & 0\\
0 & 0 & 3 & 1\\
0 & 0 & 1 & 3
\end{bmatrix}
$$

Assim, temos que

$$
e^{tA} = \begin{bmatrix}
e^t \cos t & -e^t \sin t & 0 & 0\\
e^t \sin t & e^t \cos t & 0 & 0\\
0 & 0 & \frac{e^{2t} + e^{4t}}{2} & \frac{e^{4t} - e^{2t}}{2}\\
0 & 0 & \frac{e^{4t} - e^{2t}}{2} & \frac{e^{4t} + e^{2t}}{2}
\end{bmatrix}
$$

:::

#### Blocos de Jordan

Dá-se o nome de **bloco de Jordan** de dimensão $n$ a uma matriz $J_\lambda$ quadrada $n \times n$ da forma:

$$
J_\lambda = \begin{bmatrix}
\lambda & 1 & 0 & \dots & 0\\
0 & \lambda & 1 & \ddots & \vdots\\
0 & 0 & \lambda & \ddots & 0\\
\vdots & \vdots & \ddots & \ddots & 1\\
0 & 0 & \dots & 0 & \lambda
\end{bmatrix}
$$

Portanto

$$
\begin{darray}{c}
J_\lambda = [j_{u,j}]_{i,k = 1,\dots,n} & \text{com} & j_{i,k} = \begin{cases}
\lambda & \text{se } i = k\\
1 & \text{se } i=k-1\\
0 & \text{nos restantes casos}
\end{cases}
\end{darray}
$$

:::details[Exemplos]

$\begin{bmatrix}3\end{bmatrix}$ é um bloco de Jordan de dimensão $1$ ($J_3$)

---

$\begin{bmatrix}4&1&0\\0&4&1\\0&0&4\end{bmatrix}$ é um bloco de Jordan de dimensão $3$ ($J_4$)

---

$\begin{bmatrix}0&1\\0&0\end{bmatrix}$ é um bloco de Jordan de dimensão $2$ ($J_0$)

:::

É de realçar que um bloco de Jordan tem um único valor próprio e a dimensão do espaço próprio é unitária, isto é, tem apenas um vetor próprio linearmente independente.

#### Matrizes na forma canónica de Jordan

Uma matriz quadrada $J$ é uma matriz na forma canónica de Jordan se é formada exclusivamente por blocos de Jordan sobre a diagonal:

$$
\def\marray#1{\hspace{-5pt}\begin{array}{c}#1\end{array}\hspace{-5pt}}
J = \begin{bmatrix}
\boxed{J_{\lambda_1}} & \marray{0&0&0} & 0 & \dots &\marray{0&0}\\
\marray{0\\ 0\\ 0} & \boxed{\marray{&&\\ & J_{\lambda_2}&\\ &&}} & \marray{0\\0\\0} & \marray{\dots\\\dots\\\dots} & \marray{0&0\\0&0\\0&0}\\
0 & \marray{0&0&0} & \ddots & \dots & \marray{0&0}\\
\vdots & \marray{\vdots & \vdots & \vdots} & \vdots & \ddots & \marray{0& 0}\\
\marray{0\\0} & \marray{0&0&0\\0&0&0} & \marray{0\\0} & \marray{0\\0} & \boxed{\marray{J_{\lambda_j} &\\&}}
\end{bmatrix}
$$

onde $J_{\lambda_1}, J_{\lambda_2}, \dots ,J_{\lambda_j}$ são blocos de Jordan.

:::details[Exemplos]

A matriz $\begin{bmatrix}1&0&0&0\\0&0&1&0\\0&0&0&0\\0&0&0&2\end{bmatrix}$ está na forma canónica de Jordan; é formada por 3 blocos de Jordan.

---

A matriz $\begin{bmatrix}2&0&0&0\\0&2&0&0\\0&0&2&1\\0&0&0&2\end{bmatrix}$ está na forma canónica de Jordan; é formada por 3 blocos de Jordan.

---

A matriz $\begin{bmatrix}3&0&0&0\\0&4&1&0\\0&0&4&1\\0&0&0&2\end{bmatrix}$ [**não está**](color:red) na forma canónica de Jordan.

---

A matriz $\begin{bmatrix}3&0&0&0\\0&4&1&0\\0&0&4&0\\0&0&0&2\end{bmatrix}$ está na forma canónica de Jordan; é formada por 3 blocos de Jordan.

---

A matriz $\begin{bmatrix}3&0&0&0\\0&4&1&0\\0&0&4&1\\0&0&0&4\end{bmatrix}$ está na forma canónica de Jordan; é formada por 2 blocos de Jordan.

---

A matriz $\begin{bmatrix}1&2\\0&1\end{bmatrix}$ [**não está**](color:red) na forma canónica de Jordan.

---

A matriz $\begin{bmatrix}4&1&0&0\\0&4&0&0\\0&0&4&1\\0&0&0&4\end{bmatrix}$ está na forma canónica de Jordan; é formada por 2 blocos de Jordan.

---

A matriz $\begin{bmatrix}1&0&0&0&0\\0&0&1&0&0\\0&0&0&1&0\\0&0&0&0&0\\0&0&0&0&1\end{bmatrix}$ está na forma canónica de Jordan; é formada por 3 blocos de Jordan.

---

A matriz $\begin{bmatrix}0&0&1&0\\0&0&0&0\\0&0&0&1\\0&0&0&0\end{bmatrix}$ [**não está**](color:red) na forma canónica de Jordan.

:::

:::tip[Teorema]

**Teorema de Jordan**

Seja $A$ uma matriz quadrada qualquer então existe $S$ tal que

$$
A = S J S^{-1}
$$

onde $J$ está na forma canónica de Jordan formada por $j$ blocos de Jordan $J_{\lambda_1}, J_{\lambda_2}, \dots , J_{\lambda_j}$ de dimensão $n_1, n_2, \dots , n_j$ respetivamente,
onde $j$ é o número máximo de vetores próprios de $A$ linearmente independentes ($\lambda_1, \lambda_2, \dots, \lambda_j$ são valores próprios de $A$).

:::

É também importante observar que:

$$
\det(A-\lambda) = \det(J - \lambda) = (\lambda_1 - \lambda)^{n_1} (\lambda_2 - \lambda)^{n_2} \dots (\lambda_j - \lambda)^{n_j}
$$

**Nota:** Pode acontecer termos $\lambda_a = \lambda_b$ com $a \ne b$.

#### Exponencial de Blocos de Jordan

Para um bloco de Jordan $J_\lambda$ de dimensão $n$ temos

$$
\begin{aligned}
e^{tJ_\lambda} &= \begin{bmatrix}
e^{\lambda t} & t e^{\lambda t} & \frac{t^2}{2!} e^{\lambda t} & \dots & \frac{t^{n-1}}{(n-1)!} e^{\lambda t}\\
0 & e^{\lambda t} & t e^{\lambda t} & \ddots & \vdots\\
0 & 0 & e^{\lambda t} & \ddots & \frac{t^2}{2!} e^{\lambda t}\\
\vdots & \vdots & \ddots & \ddots & t e^{\lambda t}\\
0 & 0 & \dots & 0 & e^{\lambda t}
\end{bmatrix}\\
&= e^{\lambda t} \begin{bmatrix}
1 & t & \frac{t^2}{2!} & \dots & \frac{t^{n-1}}{(n-1)!} \\
0 & 1 & t & \ddots & \vdots\\
0 & 0 & 1 & \ddots & \frac{t^2}{2!} \\
\vdots & \vdots & \ddots & \ddots & t \\
0 & 0 & \dots & 0 & 1
\end{bmatrix}
\end{aligned}
$$

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
&=\sum_{k=1}^{+\infty} \frac{kt^{k-1}}{k!}A^k\\
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

### Resolução de Equações Homogéneas

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
\begin{bmatrix}
x_0\\
y_0
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

Por outras palavras, este teorema diz que para uma equação da forma acima, com uma matrix $n \times n$, existem $n$ soluções linearmente independentes.  
Por exemplo, caso $A$ seja uma matrix $2 \times 2$, iremos ter duas soluções linearmente independentes (isto é, como veremos abaixo, iremos encontrar dois vetores próprios).

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

  Então, os vetores próprios são os vetores que pertencem ao [espaço nulo da matriz](/al/nucleo-caracteristica-matriz):

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
  A - 4I = \begin{bmatrix}
  1 & -1\\
  3 & -3
  \end{bmatrix}
  $$

  Então, os vetores próprios são os vetores que pertencem ao [espaço nulo da matriz](/al/nucleo-caracteristica-matriz):

  $$
  \operatorname{Nul} \begin{bmatrix}
  1 & -1\\
  3 & -3
  \end{bmatrix} = \mathcal{L} \{(1,1)\}
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
\end{bmatrix} \Leftrightarrow \begin{bmatrix}
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
  0 & -2 & -7
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

#### Com valores próprios complexos

:::tip[Proposição]

Seja $A$ uma matriz $n\times n$ com entradas reais.  
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

É de notar que neste exemplo, só descobrimos os vetores próprios de um dos valores próprios complexos.  
Como os números são o conjugado um do outro, os seus vetores próprios são linearmente dependentes,
pelo que é inútil calcular os vetores próprios do outro.  
Além disso, podemos notar que pelo teorema que diz que o as soluções constituem espaço linear um espaço linear de dimensão $n$,
isto é, que existem $n$ valores na base do espaço solução, como temos uma matrix $2\times 2$, iremos ter apenas dois vetores nessa base, que encontramos logo com
apenas um valor próprio. As restantes soluções da EDO são obtidas a partir de combinação linear das duas respostas obtidas.

## Equações Não Homogéneas

Estas equações correspondem à forma

$$
\frac{\d y}{\d t} = Ay + B(t)
$$

em que $A$ é uma matriz constante $n \times n$ e $B$ é uma função $I \in \R \to \R^n$.

Podemos assim redefinir o teorema da variação das constantes que [estava anteriormente definido](/cdi-iii/equacoes-diferenciais-ordinarias#caso-geral---não-homogéneo).

:::tip[Teorema]

**Variação das constantes**

Seja uma equação do tipo

$$
\begin{darray}{cc}
\frac{\d y}{\d t} = A y + B(t) & y(t_0) = y_0
\end{darray}
$$

com $t_0 \in I$ e $y_0 \in \R^n$, a equação tem uma única solução:

$$
y(t) = e^{(t-t_0) A} y_0 + \int_{t_0}^{t} e^{(t-s) A} B(s) \d s
$$

:::

:::details[Exemplo]

**Seja a equação**

$$
\begin{cases}
\frac{\d x}{\d t} = 2x + y\\
\frac{\d y}{\d t} = 2 e^t
\end{cases}
$$

**e $x(0) = y(0) = 0$, determine a solução.**

$$
\frac{\d }{\d t} \begin{bmatrix}
x\\
y
\end{bmatrix} = \underbrace{\begin{bmatrix}
2 & 1\\
0 & 0
\end{bmatrix}}_{A} \begin{bmatrix}
x\\
y
\end{bmatrix} + \underbrace{\begin{bmatrix}
0\\
2e^t
\end{bmatrix}}_{B(t)}
$$

Por um [exemplo anterior](#exponencial-de-matrizes), podemos calcular a exponencial da matriz:

$$
e^{tA} = \begin{bmatrix}
e^{2t} & \frac{1}{2} (e^{2t} - 1)\\
0 & 1
\end{bmatrix}
$$

Então, pela **fórmula da variação das constantes**, temos que

$$
\begin{aligned}
\begin{bmatrix}
x\\
y
\end{bmatrix} &= e^{tA} \begin{bmatrix}
0\\
0
\end{bmatrix} + \int_{0}^{t} \begin{bmatrix}
e^{2t} & \frac{1}{2} (e^{2t} - 1)\\
0 & 1
\end{bmatrix} \begin{bmatrix}
0\\
2e^s
\end{bmatrix} \d s\\
& = \int_{0}^{t} \begin{bmatrix}
e^{2t-s}-e^s\\
2e^s
\end{bmatrix} \d s\\
&= \begin{bmatrix}
\int_{0}^{t} e^{2ts} - e^s \d s\\
\int_{0}^{t} 2e^s \d s
\end{bmatrix}\\
&= \begin{bmatrix}
\left[ -e^{2t-s} - e^s\right]^t_0\\
2(e^t-1)
\end{bmatrix}\\
&= \begin{bmatrix}
-e^t -e^t + e^{2t} + 1\\
2(e^t-1)
\end{bmatrix}\\
&= \begin{bmatrix}
(e^t - 1)^2\\
2(e^t - 1)
\end{bmatrix}
\end{aligned}
$$

:::

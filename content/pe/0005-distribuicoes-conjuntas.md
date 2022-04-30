---
title: Distribuições Conjuntas de Probabilidade
path: /pe/distribuicoes-conjuntas
type: content
---

# Distribuições Conjuntas de Probabilidade

Definimos um [**par aleatório**](color:blue) como uma função $(X,Y) : \Omega \to \R_{X,Y} \subset \R^2$ que satisfaz uma condição de mensurabilidade.

:::details[Condição de mensurabilidade]

Diz-se que uma funçao $F$ com contradomínio em $\R^2$ satisfaz uma condição de mensurabilidade se qualquer região da forma $]-\infty, x] \times ]-\infty, y]$ tiver imagem inversa segundo $F$ na $\sigma$-álgebra $\mathcal{A}$ sobre $\Omega$.

:::

Os pares aleatórios discretos e contínuos, enquanto que partilham muitas semelhanças, devem ser tratados em separado para realçar os pormenores que os distinguem.

## Pares Aleatórios Discretos

Um par aleatório $(X,Y)$ diz-se discreto se o seu contradomínio $\R_{X,Y}$ for contável tal que existe uma [**função de probabilidade conjunta**](color:green) $P: \R^2 \to [0,1]$ tal que

$$
\sum_{(X,Y) \in \R_{X,Y}} P(X = x, Y = y) = 1
$$

$$
P(X = x, Y = y) > 0, \forall_{(X,Y) \in \R_{X,Y}}
$$

A função de probabilidade conjunta costuma ser representada por uma tabela de duas entradas como mostrado abaixo:

| $X \backslash Y$ | $y_1$ | $y_2$ | $\cdots$ | $y_m$ |
|:--------:|:-----------------:|:-----------------:|:--------:|:-----------------:|
|   $x_1$  | $P(X=x_1, Y=y_1)$ | $P(X=x_1, Y=y_2)$ | $\cdots$ | $P(X=x_1, Y=y_m)$ | 
|   $x_2$  | $P(X=x_2, Y=y_1)$ | $P(X=x_2, Y=y_2)$ | $\cdots$ | $P(X=x_2, Y=y_m)$ | 
| $\vdots$ |      $\vdots$     |     $\vdots$      | $\ddots$ |      $\vdots$     |
|   $x_n$  | $P(X=x_n, Y=y_1)$ | $P(X=x_n, Y=y_2)$ | $\cdots$ | $P(X=x_n, Y=y_m)$ | 


A [**função de distribuição conjunta**](color:yellow) é dada por

$$
F_{X,Y}(x,y) = P(X \leq x, Y \leq y) = \sum_{x' \leq x, y' \leq y} P(X = x', Y = y')
$$

Às funções que nos dão uma das VA de um par aleatório para todos os valores da outra dá-se o nome de [**funções de probabilidade marginais**](color:orange). As funções marginais de X e Y são então, respetivamente, dadas por

$$
P(X=x) = \sum_y P(X=x, Y=y) \quad P(Y=y) = \sum_x P(X=x, Y=y)
$$

A partir destas funções definem-se as [**funções distribuição marginais**](color:red)

$$
F_X(x) = P(X \leq x) = \sum_{x' \leq x} P(X = x') = \sum_{x' \leq x} \sum_y P(X = x', Y = y)
$$

$$
F_Y(y) = P(Y \leq y) = \sum_{y' \leq y} P(Y = y') = \sum_{y' \leq y} \sum_x P(Y = y', X = x)
$$

Podemos ainda averiguar a influência que as VA's têm uma sobre a outra através das [**funções de probabilidade condicionais**](color:purple) (assumindo que todos os eventos no domínio da VA são possíveis):

$$
P(X = x | Y = y) = \frac{P(X=x, Y=y)}{P(Y=y)}
$$

$$
P(Y = y | X = x) = \frac{P(Y=y, X=x)}{P(X=x)}
$$

Esta condicionalidade permite-nos definir duas VA unidimensionais $X|Y$ e $Y|X$ pelo que podemos calcular as suas fd, valor esperado, variância e outros:

$$
F_{X|Y=y} = P(X \leq x | Y=y) = \sum_{x' \leq x} P(X=x', Y=y)
$$

$$
E(X|Y=y) = \sum_x xP(X=x, Y=y)
$$

$$
V(X|Y=y) = E(X^2|Y=y) - E(X|Y=y)^2
$$

com definições análogas para $Y|X$.

As VA de um par aleatória dizem-se independentes ($X \indep Y$) se para todo o $(x,y) \in \R^2$

$$
P(X=x, Y=y) = P(X=x)P(Y=y) \Leftrightarrow \\
F_{X,Y}(x,y) = F_X(x) F_Y(y) \Leftrightarrow \\
P(X=x|Y=y) = P(X=x) \Leftrightarrow P(Y=y|X=x) = P(Y=y) \Leftrightarrow \\
E(Y|X=x) = E(Y) \Leftrightarrow E(X|Y=y) = E(X) \Leftrightarrow \\
V(Y|X=x) = V(Y) \Leftrightarrow V(X|Y=y) = V(X) \\
$$

## Pares Aleatórios Contínuos

Um par aleatório $(X,Y)$ diz-se contínuo se o seu contradomínio $\R_{X,Y}$ for não contável tal que existe uma [**função de densidade de probabilidade conjunta**](color:green) $f_X: \R^2 \to [0,1]$ tal que

$$
\iint_{\R^2} f_{X,Y}(x, y) = 1
$$

$$
f_{X,Y}(x,y) \leq 0, \forall_{(X,Y) \in \R^2}
$$

$$
P((X,Y) \in A) = \iint_{A} f_{X,Y}(x, y) \, dy \, dx
$$

A [**função de distribuição conjunta**](color:yellow) é dada por

$$
F_{X,Y}(x,y) = P(X \leq x, Y \leq y) = \int_{-\infty}^x \int_{-\infty}^y f_{X,Y}(x,y) \, dx \, dy
$$

Às funções que nos dão uma das VA de um par aleatório para todos os valores da outra dá-se o nome de [**funções de densidade de probabilidade marginais**](color:orange). As funções marginais de X e Y são então, respetivamente, dadas por

$$
f_X(x) = \int_{-\infty}^\infty f_{X,Y}(x,y) \, dy \quad \quad f_Y(y) = \int_{-\infty}^\infty f_{X,Y}(x,y) \, dx
$$

A partir destas funções definem-se as [**funções distribuição marginais**](color:red)

$$
F_X(x) = P(X \leq x) = \int_{-\infty}^x f_X(u) \, du \quad \quad F_Y(y) = P(Y \leq y) = \int_{-\infty}^y f_Y(u) \, du
$$

Tal como no caso discreto podemos averiguar a influência que as VA's têm uma sobre a outra através das [**funções de densidade de probabilidade condicionais**](color:purple):

$$
f_{X|Y=y}(x) = \frac{f_{X,Y}(x,y)}{f_Y(y)} \quad \quad f_{Y|X=x}(y) = \frac{f_{X,Y}(x,y)}{f_X(x)}
$$

Outa vez, esta condicionalidade define duas VA unidimensionais $X|Y$ e $Y|X$ pelo que podemos calcular as suas fd, valor esperado, variância e outros:

$$
F_{X|Y=y}(x) = \frac{f_{X,Y}(x,y)}{f_Y(y)}
$$

$$
E(X|Y=y) = \int_{-\infty}^\infty xf_{X|Y=y}(x) \, dx
$$

$$
V(X|Y=y) = E(X^2 | Y=y) - E^2(X | Y=y)
$$

com definições análogas para $Y|X$.

As VA de um par aleatória dizem-se independentes ($X \indep Y$) se para todo o $(x,y) \in \R^2$

$$
f_{X,Y}(x,y) = f_X(x)f_Y(y) \Leftrightarrow \\
F_{X,Y}(x,y) = F_X(x) F_Y(y) \Leftrightarrow \\
f_{X|Y=y}(x) = f_X(x) \Leftrightarrow f_{Y|x=x}(y) = f_Y(y) \Leftrightarrow \\
E(Y|X=x) = E(Y) \Leftrightarrow E(X|Y=y) = E(X) \Leftrightarrow \\
V(Y|X=x) = V(Y) \Leftrightarrow V(X|Y=y) = V(X) \\
$$

## Covariância e Correlação

A [**covariância**](color:yellow) é uma função de duas VA's que mede a associação absoluta entre as mesmas:

$$
cov(X,Y) = E\left( (X - E(X))(Y-E(Y)) \right) = E(XY) - E(X)E(Y)
$$

A [covariância](color:yellow) desfruta das seguintes propriedades:

- $X \indep Y \Rightarrow cov(X,Y) = 0$ e equivalentemente $cov(X,Y) \neq 0 \Rightarrow X \not\indep Y$
- A implicãção contrária não é necessariamente verdade! $cov(X,Y) = 0 \not\Rightarrow X \indep Y$
- $cov(X,X) = V(X)$
- $cov(X,Y) = cov(Y,X)$
- $cov(aX+b, Y) = a \cdot cov(X, Y)$
- $cov(X+Z, Y) = cov(X, Y) + cov(Z, Y)$
- $cov(\sum_{i=1}^n X_i, \sum_{i=1}^n Y_i) = \sum_{i=1}^n \sum_{j=1}^n cov(X_i, Y_j)$
- $cov(\sum_{i=1}^n X_i, \sum_{i=1}^n X_i) = \sum_{i=1}^n V(X_i) + 2 \sum_{i=1}^n \sum_{j=i+1}^n cov(X_i, X_j)$

A [covariância](color:yellow) tem a devantagem de não ser adimensional.
Ou seja, um escalonamento da VA (multiplicação por um escalar) altera o valor da covariância.
Isto é um problema, por exemplo, quando queremos mudar a escala (por exemplo, de kg para g) - a covariância não se mantém!

Para resolver o problema apresentado, serge a [**correlação**](color:orange). A [correlação](color:orange) mede a associação relativa entre duas VA $X$ e $Y$:

$$
corr(X,Y) = \frac{cov(X,Y)}{\sqrt{V(X)V(Y)}}
$$

$X$ e $Y$ dizem-se **correlacionadas** se $corr(X,Y) \neq 0$ e não correlacionadas caso contrário.

A [correlação](color:orange) desfruta das seguintes propriedades:

- $X \indep Y \Rightarrow corr(X,Y) = 0$ e equivalentemente $corr(X,Y) \neq 0 \Rightarrow X \not\indep Y$
- A implicãção contrária não é necessariamente verdade! $corr(X,Y) = 0 \not\Rightarrow X \indep Y$
- $corr(X,X) = 1$
- $corr(X,Y) = corr(Y,X)$
- $corr(aX+b,Y) = corr(X,Y)$
- $-1 \leq corr(X,Y) \leq 1$
- $corr(X,Y) = 1 \Leftrightarrow Y = aX+b$ para algum $a \in \R^+$ e $corr(X,Y) = -1 \Leftrightarrow Y = aX+b$ para algum $a \in \R^-$

A [correlação](color:orange) deve ser interpretada da seguinte forma:

- $|corr(X,Y)| \simeq 1$ então $X$ e $Y$ têm associação quase linear;
- $corr(X,Y)>0$ indica uma correlação linear **positiva** (i.e, se uma VA aumenta a outra tende a aumentar também) e $corr(X,Y)<0$ indica uma correlação linear **negativa** (i.e, se uma VA aumenta a outra tende a aumentar também)

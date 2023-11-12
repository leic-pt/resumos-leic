---
title: Regressão Linear
description: >-
  Regressão Linear Simples
  Erro Quadrático Médio
  Design Matrix e Vetor de Rótulos
  Solução Fechada
  Matriz de Moore-Penrose
  Transformações do Conjunto de Dados
  Regressão Bayesiana
  Regularização
  Overfitting
path: /apre/linear-regression
type: content
---

# Regressão Linear

```toc

```

## Regressão Simples

A equação da reta no plano é dada pela seguinte expressão.

$$
y = w_0 + w_1 \cdot x
$$

Podemos extender o conceito a mais dimensões, obtendo a equação de um
hiperplano.

$$
y = y(x,w) = w_0 + \sum\limits_{j=1}^{D} (w_j \cdot x_j) = w_0 + w^Tx
$$

A ordenada na origem, $w_0$, tem o nome de _bias_, pois $y$ está influenciado
de forma a tender para $w_0$ na ausência de algum input. Damos a cada valor de
$w_j: j \neq 0$ o nome de peso, sendo $w$ o vetor de pesos.

De modo a simplificar a expressão, adiciona-se um termo $x_0 = 1$ ao vetor
$\vec{x}$.

$$
y = y(x,w) = \sum\limits_{j=0}^{D} (w_j \cdot x_j) = w^Tx
$$

## Erro Quadrático Médio

Dada um conjunto de treino, ao qual se aplica a regressão, este é composto por
um vetor de observações $X=(x_1, x_2, ..., x_n)^T$ e por um vetor de rótulos,
$z=(z_1, z_2, ..., z_n)^T$.

É possível quantificar o erro através das distâncias entre cada observação,
representada por um ponto em $\mathbb{R}^{n}$, e o hiperplano da regressão. As
linhas vermelhas na figura abaixo correspondem à função de resíduos, dada pela
diferença $|\hat{z}_i - z_i|$.

<!-- TODO change to SVG -->

![Função de Resíduos](./assets/0008-residuals.png#dark=3)

Definimos a função do erro quadrático médio como

$$
E[w] = \frac{1}{n} \sum\limits_{i=1}^{n}(f(x_i, w) - z_i)^2 = \frac{1}{n} |\hat{z} - z|^2
$$

Ao comparamos diferentes hiperplanos, podemos guiar-nos pela métrica do erro
quadrático médio. Contudo, dividir por $n$ ou por qualquer outro número não
fará diferença na comparação entre os hiperplanos. Ao derivarmos a função de
erro, a constante $\frac{1}{2}$ "corta" com a derivada do quadrado, originando
uma expressão "bonita" para o gradiente do erro. Assim, tomamos a chamada _half
squared error loss_ como

$$
E[w] = \frac{1}{2} \sum\limits_{i=1}^{n}(f(x_i, w) - z_i)^2 = \frac{1}{2} |\hat{z} - z|^2
$$

## Design Matrix e Vetor de Rótulos

Definimos a matriz $X$ como a _design matrix_, resultante dos dados adicionando
um termo de _bias_ $x_{j0} = 1$ a cada linha $j$. O vetor $z$ é o vetor de
rótulos das observações.

$$
X =
\begin{pmatrix}
    x_1^T \\
    x_2^T \\
    \vdots \\
    x_n^T \\
\end{pmatrix}
=
\begin{pmatrix}
    x_{10} & x_{11} & x_{12} & \cdots & x_{1m}\\
    x_{20} & x_{21} & x_{22} & \cdots & x_{2m}\\
    \vdots & \vdots & \vdots & \vdots & \vdots \\
    x_{30} & x_{n1} & x_{n2} & \cdots & x_{nm}\\
\end{pmatrix}
\quad
z =
\begin{pmatrix}
    z_1 \\
    z_2 \\
    \vdots \\
    z_n \\
\end{pmatrix}
$$

Assim, a regressão utiliza os pesos de modo a mapear as entradas em saídas.

$$
\begin{pmatrix}
    \hat{z}_1 \\
    \vdots \\
    \hat{z}_k \\
    \vdots \\
    \hat{z}_n \\
\end{pmatrix}
=
\begin{pmatrix}
    1 & x_{11} & x_{12} & \cdots & x_{1m}\\
    1 & x_{21} & x_{22} & \cdots & x_{2m}\\
    \vdots & \vdots & \vdots & \vdots & \vdots \\
    1 & x_{n1} & x_{n2} & \cdots & x_{nm}\\
\end{pmatrix}
\cdot
\begin{pmatrix}
    w_0 \\
    w_1 \\
    \vdots \\
    w_k \\
    \vdots \\
    w_n \\
\end{pmatrix}
$$

$$
\hat{z} = X \cdot w = (w^T \cdot X^T)^T
$$

## Solução Fechada

Muitas das vezes um mapeamento linear perfeito das entradas para saídas não
existe, devido a ruído nos dados. De modo a encontrar o melhor hiperplano,
necessitamos de minimizar o erro $E[w]$, calculando o gradiente $\nabla E[w]$ e
igualando-o a 0. Definido a matriz $X$ como a _design matrix_, chegamos a uma
solução fechada para o vetor de pesos, $w$.

$$
\begin{aligned}
\nabla E[w] &= \nabla \left(\frac{1}{2} \cdot \| z - \hat{z} \|^2\right)\\
& = \nabla \left(\frac{1}{2} \cdot \|z - X \cdot w\|^2\right)\\
& = \nabla \left(\frac{1}{2} \cdot (z - X \cdot w)^T \cdot (z - X \cdot w)\right)\\
& = 0
\end{aligned}
$$

$$
w = (X^T \cdot X)^{-1} \cdot X^T \cdot z
$$

## Matriz de Moore-Penrose

A matriz $X^\dagger = (X^T \cdot X)^{-1} \cdot X^T$, derivada na solução
fechada é conhecido como a pseudo-inversa de $X$ ou matriz de Moore-Penrose.
Assim, a solução fechada pode ser dada por $w = X^\dagger \cdot z$.

A matriz $X^T \cdot X$ não é invertível quando alguns atributos são combinações
lineares uns dos outros ou quando existem mais atributos do que observações. No
entanto, a pseudo-inversa está sempre definida.

## Transformações do Conjunto de Dados

Por vezes, o conjunto de dados não consegue ser modelado por uma regressão
linear, sendo necessária uma regressão mais expressiva. De modo a solucionar
este problema, podemos aplicar uma transformação ao conjunto de dados original,
reescrevendo cada um dos atributos como uma transformação não linear do mesmo.
Assim, realizamos uma regressão linear ao novo conjunto de dados transformado.

$$
y(x, w) = w_0 + \sum_{j=1}^{M} w_j \cdot \phi_j(x)
$$

em que $\phi_j(x)$ representa uma transformação não linear à entrada $x$. Esta
função é conhecida como _basis function_.

Assim, realizamos a regressão com a nova _design matrix_.

$$
\begin{pmatrix}
    \hat{z}_1 \\
    \vdots \\
    \hat{z}_k \\
    \vdots \\
    \hat{z}_n \\
\end{pmatrix}
=
\begin{pmatrix}
    \phi_{11} & \phi_{12} & \cdots & \phi_{1m}\\
    \phi_{21} & \phi_{22} & \cdots & \phi_{2m}\\
    \vdots & \vdots & \vdots & \vdots \\
    \phi_{n1} & \phi_{n2} & \cdots & \phi_{nm}\\
\end{pmatrix}
\cdot
\begin{pmatrix}
    w_0 \\
    w_1 \\
    \vdots \\
    w_k \\
    \vdots \\
    w_n \\
\end{pmatrix}
$$

É de notar que a regressão linear sem a transformação do conjunto de dados
corresponde a uma transformação de atributos realizada pela _basis function_
$\phi(x) = 1$.

### Seleção do Modelo

É de notar que entre dois polinómios de diferentes graus, o polinómio com maior
grau tem um maior poder expressivo pois consegue modelar qualquer relação que o
polinómio de grau mais baixo consegue. Assim, seria de esperar que ao realizar
uma regressão num conjunto de dados para os quais não sabemos o polinómio
gerador, seria melhor utilizar um polinómio com o maior poder expressivo
possível.

Contudo, ao adicionar algum ruído aos dados, o polinómio com maior poder
expressivo afasta-se bastante do polinómio gerador, enquanto que o polinómio
com menor poder expressivo, limitado, consegue lidar melhor com a presença de
_outliers_. Assim a escolha de um polinómio com a complexidade certa (não muito
baixa, nem demasiado alta) é essencial para evitar o problema de _overfitting_.

<!-- TODO change to SVG -->

![Escolha da Complexidade do Modelo](./assets/0008-model-selection.png#dark=3)

## Regressão Bayesiana

O conhecido classificador de Bayes pode também ser usado para tarefas de
regressão. Procuramos descobrir o vetor de pesos $w$ mais provável para a
evidência que temos, o conjunto de dados $D$. $P(w)$ corresponde ao _prior_ e
$P(D \mid w)$ corresponde à _likelihood_.

$$
P(w \mid D) = \frac{P(D \mid w) \times P(w)}{P(D)}
$$

Assim, definimos o vetor de pesos, $w$, de máxima verosimilhança (_maximum
likelihood_) como

$$
w_\text{ML} = \underset{w}{\operatorname{arg\ max}} P(D \mid w)
$$

Outra abordagem passa por maximizar $P(w \mid D)$, a _posteriori_, onde a
_likelihood_ é multiplicada pelo _prior_.

$$
w_\text{MAP} = \underset{w}{\operatorname{arg\ max}} P(w \mid D)
$$

### Solução Fechada

O objetivo é, então, calcular a distribuição de probabilidade $P(w \mid z_i,
x_i)$. Chegamos à expressão seguinte.

$$
P(w \mid z_i, x_i) = \frac{P(z_i \mid w, x_i) \times P(w)}{P(z_i)}
$$

Assume se que os $n$ exemplos $x_i$ são independentes e identicamente
distribuídos e que o erro da regressão linear $\epsilon \sim \mathcal{N}(0,
\sigma^2)$. Assim, $z = \hat{z} + \epsilon = w \cdot x + \epsilon$. Obtemos
então a seguinte relação.

$$
w_{\text{MAP}} = \underset{w}{\operatorname{arg\ max}}\left(-\frac{1}{2} \sum_{i=1}^n (z_i - w^T \cdot x_i)^2 - \frac{\lambda}{2} \|w\|^2\right)
$$

Derivando a expressão anterior e igualando-a a 0, obtemos a seguinte solução
fechada.

$$
w = (X^T \cdot X + \lambda \cdot I)^{-1} \cdot X^T \cdot z
$$

Se, por outro lado, realizarmos o mesmo processo para o vetor de pesos de
máxima verosimilhança, obtemos a seguinte solução fechada.

$$
w = (X^T \cdot X)^{-1} \cdot X^T \cdot z
$$

## Regularização

### Regressão de Ridge

Como verificado anteriormente, polinómios com elevado valor expressivo que
minimizam o erro quadrático encontrado tendem a criar modelos que sofrem de
_overfitting_. De modo a resolver este problema, é adicionado um termo à
expressão do erro, que penaliza modelos em que os valores dos pesos são muito
elevados. É um facto experimental que regressões com valores pequenos de pesos
produzem modelos que evitam o _overfitting_.

$$
E[w] = \frac{1}{2} \sum\limits_{i=1}^{n}(z_i - w^T \cdot x_i)^2 + \frac{\lambda}{2} \| w \|_2^2
$$

Este regularizador tem o nome de regressão de Ridge. Mais uma vez, podemos
igualar $\nabla E[w]$ a 0, encontrando a solução fechada para a regressão de
Ridge.

$$
w = (X^T \cdot X + \lambda \cdot I)^{-1} \cdot X^T \cdot z
$$

Podemos verificar que a solução encontrada é idêntica ao estimador _maximum a
posteriori_!

O termo de regularização $\lambda$ descreve o quociente de duas variâncias.

$$
\lambda = \frac{\sigma_\text{posterior}^2}{\sigma_\text{prior}^2}
$$

<!-- TODO change to SVG -->

![Comparação de Modelos com e sem Regularização](./assets/0008-regularization.png#dark=3)

### Regressão de Lasso

Uma alternativa ao termo do regularizador quadrático de Ridge é o termo linear
de Lasso. Esta alternativa difere do regularizador quadrática ao assumir que o
erro $\epsilon$ segue uma distribuição de Laplace, ao invés de uma distribuição
normal.

$$
E[w] = \frac{1}{2} \sum\limits_{i=1}^{n}(z_i - w^T \cdot x_i)^2 + \frac{\lambda}{2} \| w \|_1
$$

Contudo, este regularizador não apresenta uma solução fechada, pois o termo $\|
w \|_1$ não é diferenciável na origem. Contudo, uma solução não fechada pode
ser obtida através de outros métodos, como _gradient descent_. Este
regularizador tende a gerar soluções mais esparsas (com mais zeros no vetor de
pesos) do que o regularizador de Ridge.

## Overfitting

De modo a evitar o _overfitting_, pode ser utilizada uma regressão com um termo
de regularização, como os regressores de Ridge e Lasso.

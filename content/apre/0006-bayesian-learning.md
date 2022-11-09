---
title: Bayesian Learning
description: >-
  Teorema de Bayes
  Lei da Probabilidade Total
  Classificador Maximum a Posteriori (MAP)
  Algoritmo/Suposição de Naive Bayes
  Overfitting
path: /apre/bayesian-learning
type: content
---

# Bayesian Learning

```toc

```

Os _bayesianos_ fazem da probabilidade a sua ferramenta principal, útil para
quantificar a incerteza causada pelo ruído nos dados e pela reduzida dimensão
dos dados.

Na abordagem de classificação, escolhe-se o classificador mais provável, dada a
evidência conhecida, que neste caso se trata dos dados de treino. Assim, na
presença de um objeto por classificar, procura-se a **classe mais provável**.

## Teorema de Bayes

A peça central deste tipo de abordagem à classificação é o teorema de Bayes.

$$
P(A \mid B) = \frac{P(B \mid A) \times P(A)}{P(B)}
$$

Damos a $A$ o nome de **crença** e a $B$ o nome de **evidência**. A
probabilidade de A é denominada _prior_, pois se refere à probabilidade antes
da evidência ser obtida, e a probabilidade condicionada $P(A \mid B)$
denomina-se _posterior_, pois é obtida depois da evidência se confirmar. À
probabilidade $P(B \mid A)$ dá-se o nome de _likelihood_.

## Lei da Probabilidade Total

A lei da probabilidade total indica que, para $k$ acontecimentos mutuamente
exclusivos tal que

$$
\sum_{i=1}^{k} P(B_i) = 1
$$

podemos representar a probabilidade de qualquer outro acontecimento $A$ como

$$
P(A) = \sum_{i=1}^{k} P(A) \cap P(B_i) = \sum_{i=1}^{k} P(A \mid B_i) \cdot P(B_i)
$$

## Classificador Maximum a Posteriori (MAP)

De modo a escolher a classe mais provável para um objeto não classificado,
escolhemos a classe que tem maior probabilidade condicionada pela evidência.

$$
\begin{aligned}
y &= \underset{c_i}{\operatorname{arg\ max}}\{P(c_i \mid x)\} \\
  &= \underset{c_i}{\operatorname{arg\ max}}\left\{\frac{P(c_i) \times P(x \mid c_i)}{P(x)}\right\} \\
  &= \underset{c_i}{\operatorname{arg\ max}}\{P(c_i) \times P(x \mid c_i)\}
\end{aligned}
$$

Assim, a tarefa de treino limita-se ao cálculo das probabilidades _a priori_ de
cada classe. Na presença de um objeto $Z$ a ser classificado, estima-se a
_likelihood_ ou máxima verosimilhança de $Z$ para cada classe, ou seja, a
probabilidade de observar $Z$ supondo que pertence a cada uma das classes.
Finalmente, escolhe-se a classe mais provável.

No caso de empate de duas classes, tendo estas a mesma _likelihood_, o
classificador não é capaz de rotular o objeto, sendo contabilizado como um
erro.

### Estimação da Probabilidade a Priori

Considere-se um conjunto de treino de $n$ registos, em que $n_i$ registos
pertencem à classe $c_i$. A probabilidade a priori de cada classe pode ser
estimada pelo quociente $P(c_i) = \frac{n_i}{n}$.

### Estimação do Likelihood

Perante um conjunto de treino de $n$ registos, em que $n_i$ registos pertencem
à classe $c_i$, a _likelihood_ de observar $x$ em cada umas das classes é
estimada pelo quociente $P(x | c_i) = \frac{n_{x \mid i}}{n_i}$.

Contudo, nos dados de treino, a classe $c_i$ pode não conter nenhuma instância
do objeto $x$, fazendo com que a _likelihood_ seja 0. Assim, a inexistência de
uma dimensão de dados de treino significativamente robusta prejudica o cálculo
destas probabilidades.

### Variáveis Contínuas

Se num conjunto de treino definirmos as variáveis como valores contínuos, como
por exemplo a altura de uma pessoa, deparamo-nos com um problema. A
probabilidade de qualquer variável numérica contínua assumir qualquer valor é 0. Em contraste com o caso discreto, para variáveis contínuas faz-se uso de uma
função de distribuição, de modo a calcular probabilidades.

$$
P(x \mid c_i) = f_i(x \mid \mu_i, \sigma_i) \text{ onde } X_i \sim N(\mu_i, \sigma_i^2)
$$

Assume-se que cada classe segue uma distribuição normal, sendo apenas
necessário calcular a média $\mu$ e o desvio padrão $\sigma$ através da
amostra.

### Múltiplas Variáveis

Na presença de múltiplas variáveis que descrevem os registos, generaliza-se a
noção anterior para mais do que uma dimensão. As probabilidades condicionadas
tornam-se agora probabilidades condicionadas conjuntas e, ao invés de calcular
a média e desvio padrão, calculamos agora o vetor média e a matriz de
covariância.

$$
P(\vec{x} \mid c_i) = f_i(\vec{x} \mid \vec{\mu_i}, \vec{\Sigma_i}) \text{ onde } X \sim N(\vec{\mu}, \Sigma^2)
$$

### Complexidade do Modelo

Uma boa estimativa da complexidade de um modelo é dada pelo número de
parâmetros que o modelo guarda internamente.

O classificador _bayesiano_ precisa de saber cada um dos _priors_, ou seja,
cada uma das $P(c_i)$. Contudo, apenas precisamos de guardar o valor de $N-1$
probabilidades pois conseguimos derivar a última destas através da relação
$\sum\limits_{i=1}^{N} P(c_i) = 1$

Para além destes valores, é necessário guardar o valor das _likelihoods_,
$P(x_n \mid c_i)$. Pela mesmo razão, podemos guardar todas as _likelihoods_
expeto uma pois a soma destas é 1.

O modelo apresenta bons resultados quando a distribuição dos dados é bem
aproximada. Contudo, requer um conjunto de dados bastante grande para estimar
probabilidades conjuntas, o que torna o modelo impraticável para registos com
muitas dimensões. Pode-se demonstrar que o número de observações necessárias
cresce exponencialmente com o número de atributos. São também necessários
várias cálculos de probabilidades, que podem ser computacionalmente exigentes.

## Algoritmo/Suposição de Naive Bayes

O algoritmo de Naive Bayes aborda o problema da falta de dados suficientes para
estimar a probabilidade conjunta de forma fiável. De forma a calcular estas
probabilidades, o algoritmo assume uma simplificação do problema que, apesar de
ingénua, fornece resultados bastante bons.

A suposição que o algoritmo realiza é a de assumir independência condicional,
dada a classe, entre as variáveis que caracterizam os dados.

$$
\begin{aligned}
\hat{y} &= \underset{c_i}{\operatorname{arg\ max}}\{P(c_i \mid x)\} \\
        &= \underset{c_i}{\operatorname{arg\ max}}\left\{\frac{P(c_i) \times P(x \mid c_i)}{P(x)}\right\} \\
        &= \underset{c_i}{\operatorname{arg\ max}}\{P(c_i) \times P(x \mid c_i)\} \\
        &= \underset{c_i}{\operatorname{arg\ max}}\{P(c_i) \times \prod_{j=1}^{d} P(x_j \mid c_i)\}
\end{aligned}
$$

Assim, a tarefa de treino em tudo se assemelha ao do classificador MAP. A
diferença reside no cálculo da _likelihood_, que é bastante simplificado,
realizando-se através do produto as probabilidades condicionadas
unidimensionais de observar $Z$, dada a classe.

### Complexidade do Modelo

Apesar do pressuposta da independência condicional das variáveis ser, na maior
parte dos casos, violada, este método apresenta resultados bastante bons. No
caso em que a independência não é violada, trata-se do classificador ideal.
Contudo, o pressuposto da independência condicional pode trazer uma pior
exatidão quando existe dependência entre as variáveis.

Pode ser utilizada em conjuntos de dados com dimensões reduzidas pois o número
de observações necessárias cresce, por causa do pressuposto da independência,
linearmente com o número de atributos.

## Overfitting

De modo a evitar o _overfitting_, pode ser aplicada a suposição de Naive-Bayes.
A utilização de distribuições de probabilidade teóricas em vez de distribuições
empíricas reduz o _overfitting_.

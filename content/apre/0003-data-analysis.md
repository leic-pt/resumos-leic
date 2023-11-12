---
title: Análise de Dados
description: >-
  Variáveis
  Exploração de Dados
  Estatística para Uma Variável
  Estatística para Várias Variáveis
path: /apre/data-analysis
type: content
---

# Análise de Dados

```toc

```

Para o estudo futuro de vários algoritmos de aprendizagem, são necessários
alguns conceitos de probabilidade e estatística.

## Variáveis

Na tarefa da análise de dados, podemos lidar com uma ou mais variáveis. Estas
variáveis podem ser **categóricas** ou qualitativas (como a classe de uma
observação), ou podem ser **numéricas**, descrevendo quantidades. Este último
tipo de variáveis subdivide-se em variáveis [**contínuas**](color:green) e variáveis
[**discretas**](color:blue).

As variáveis contínuas podem ser tornadas em variáveis discretas através de um
processo de **discretização** (por exemplo, transformar alturas em intervalos
de alturas).

## Exploração de Dados

Esta é uma etapa essencial para conhecer e aprender através do conjunto de
dados. Algumas métricas importantes para variáveis categóricas são a **moda**,
**frequência** e **probabidade**. Dados numéricos podem ser representados e
estudados através de um histograma, através dos **quantis**, e **funções de
probabilidade**.

O processo de _fitting_ corresponde à aprendizagem de parâmetros de uma função
de probabilidade através do conjunto de dados.

## Estatística para Uma Variável

### Métricas de Localização

As métricas de localização permitem-nos localizar os dados. Tais métricas
incluem a **média**, **moda**, **média harmónica** e a **média aparada** (que
corresponde à média da amostra, descartando algumas das observações dos
extremos da função de probabilidade).

$$
\text{média harmónica} = \frac{n}{\sum\limits_{i=1}^{n} \frac{1}{x_i}}
$$

### Métricas de Dispersão

As medidas de dispersão quantificam a variabilidade presente nos dados.
Definimos o **desvio padrão** como a raíz quadrada da **variância**. Ao
quantificar a variabilidade da amostra, é comum sobreestimar a variabilidade,
pois [**não**](color:red) é possível conhecer toda a população.

$$
\sigma_{\text{população}} = \sqrt{\frac{1}{n} \sum_{i=1}^{n}(x_i - \bar{x})^2}
$$

$$
\sigma_{\text{amostra}} = \sqrt{\frac{1}{n-1} \sum_{i=1}^{n}(x_i - \bar{x})^2}
$$

### Outliers

Os _outliers_ correspondem a observações que tomam valores incomuns. As
métricas da média e da variância são são baseadas em médias, pelo que são
sensíveis à presença de _outliers_ nos dados.

De modo a detetar a presença de _outliers_, é comum utilizar a métrica do
[**intervalo interquartil** (_interquartile range_)](color:orange),
definida como a diferença entre o maior valor
presente o terceira quartil e o menor valor do primeiro quartil.

$$
\text{IQR} = \max_{x}\{Q_3\} - \min_{x}\{Q_1\}
$$

As observações que [**não**](color:red) pertencem ao intervalo abaixo são consideradas
_outliers_.

$$
[Q_1 - 1.5 \times \text{IQR}, Q_3 + 1.5 \times \text{IQR}]
$$

Os diagramas de caixa (_boxplots_) são úteis para visualizar a presença de
_outliers_.

## Estatística para Várias Variáveis

Ao tratar mais do que uma variável, o interesse está em descobrir qual a
correlação entre cada par de variáveis. Se duas variáveis estiverem altamente
correlacionadas, estamos perante **variáveis redundantes**. Assim, escolhemos a
variável com a maior variabilidade, pois possui maior **poder discriminativo**.

### Covariância

A **covariância** permite descrever a relação entre um par de variáveis.

$$
\op{Cov}_{\text{população}}(X, Y) = \frac{\sum\limits_{i=1}^{n}(x_i - \bar{x}) \times (y_i - \bar{y})}{n}
$$

$$
\op{Cov}_{\text{amostra}}(X, Y) = \frac{\sum\limits_{i=1}^{n}(x_i - \bar{x}) \times (y_i - \bar{y})}{n-1}
$$

### Correlação de Pearson

O **coeficiente de correlação de Pearson** permite quantificar a **correlação
linear** entre duas variáveis. É de notar que as variáveis têm de ser numéricas
e o coeficiente é apenas capaz de identificar correlações lineares. Mesmo que
as variáveis estão correlacionadas de outra forma (por exemplo quadraticamene),
o coeficiente [**não**](color:red) é capaz de capturar esta correlação.

$$
r = \frac{\op{Cov}(y_1, y_2)}{\sigma(y_1) \times \sigma(y_2)}
$$

O valor de $r$ varia no intervalo $[-1, 1]$. Um sinal positivo indica uma
correlação direta (se o valor de $y_1$ aumenta, o valor de $y_2$ também
aumenta) e um sinal negativo indica uma correlação inversa (se o valor de $y_1$
aumenta, o valor de $y_2$ diminui). O valor nulo indica que as duas variáveis
não estão relacionadas.

### Rank de Spearman

A métrica do **rank de Spearman** permite avaliar a **correlação (não apenas
linear)** entre duas variáveis.

É calculado o _rank_ de cada uma das variáveis, sendo de seguida calculada o
coeficiente da correlação Pearson dos _ranks_ calculados.

O cálculo dos _ranks_ começa pela ordenação crescente dos valores da variável.
De seguida, é atribuído um _rank_ a cada valor, de forma sequencial. Se
existirem valores repetidos, o _rank_ desse valor será a média das posições que
os valores ocupam.

:::info[Exemplo]

| y1       | 1   | 3   | 3   | 5   | 7   | 7   | 7   | 9   | 10  |
| -------- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **rank** | 1   | 2.5 | 2.5 | 4   | 6   | 6   | 6   | 8   | 9   |

No exemplo acima, o valor 3 vê-se repetido nas posições 2 e 3. Como tal, este
recebe um _rank_ de $\frac{2 + 3}{2} = 2.5$. De forma semelhante, o valor 7
vê-se repetido nas posições 5, 6 e 7. Como tal, recebe um _rank_ de $\frac{5 +
6 + 7}{3} = 6$.

:::

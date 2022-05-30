---
title: Estimação Pontual
description: >-
  Inferência Estatística. Conceitos base de estatística.
  Amostragem Aleatória.
  Estimadores. Enviasamento e Erro Quadrático Médio.
  Método da Máxima Verosimilhança.
  Distribuições amostrais.
path: /pe/estimacao-pontual
type: content
---

# Estimação Pontual

```toc

```

Como deverá ser sabido o nome da cadeira em estudo é **Probabilidade e Estatística**.
Nos capítulos anteriores vimos como atribuir probabilidades a determinados eventos.
Isto é, na primeira parte tratámos do estudo de probabilidades.  
A segunda parte vai então tratar da parte da estatística.

:::tip[Estatística]

Ramo da Matemática Aplicada que estuda como recolher, apresentar e interpretar dados relativos a fenómenos aleatórios, visando a caracterização desses fenómenos.

:::

Vamos introduzir alguns conceitos base da estatística:

- [**VA ou característica de interesse**](color:red) - característica crucial para o conhecimento do fenómeno aleatório em estudo;
- [**população**](color:blue) - conjunto de todos os indivíduos que têm em comum certa característica de interesse;
- [**unidade estatística**](color:green) - nome dado a cada elemento de certa população;
- [**dado estatístico**](color:purple) - resultado observado em relação a uma característica de interesse e respeitante a cada unidade estatística duma amostra;
- [**amostra**](color:yellow) - subconjunto de uma população que se julga representativo da mesma;
- [**amostragem**](color:orange) - conjunto de procedimentos estatísticos com objetivo de obter amostras;
- [**estatística descritiva**](color:brown) - conjunto de métodos que permitem tornar a informação retirada diretamente de uma amostra (caótica) num conjunto de inforrmações sumárias e mais relevantes;
- [**inferência estatística**](color:pink) - compreende um conjunto de métodos com o objetivo de usar a informação (dados/amostra) de modo a responder a questões sobre a população. Consiste então num método para tirar conclusões sobre uma população (geral) a partir de uma amostra (particular).

:::tip[Amostragem Aleatória]

De forma que as inferências tenham a maior precisão possível, exigimos que haja aleatoriedade (parcial ou total) no processo de amostragem.

- [**Amostra Aleatória (AA)**](color:orange) - Para um VA de interesse $X$ e VA's $X_1, X_2, \cdots, X_n$ i.i.d a $X$, dizemos que o vetor aleatório $\underline{X} = (X_1, X_2, \cdots, X_n)$ diz-se uma [amostra aleatória](color:orange) ([AA](color:orange)) de dimensão $n$, da VA/população $X$;
- [**Amostra**](color:yellow) - A uma observação particular de uma AA $\underline{X} = (X_1, X_2, \cdots, X_n)$ dá-se o nome de amostra e representa-se por $\underline{x} = (x_1, x_2, \cdots, x_n)$.  
  Temos que
  $$
  P(\underline{X} = \underline{x}) =
  \prod_{i=1}^n P(X_i = x_i) =
  \prod_{i=1}^n P(X = x_i)
  $$
  para $X$ discreta e
  $$
  f_{\underline{X}}(\underline{x}) =
  \prod_{i=1}^n f_{X_i}(x_i) =
  \prod_{i=1}^n f_X(x_i)
  $$
  para $X$ contínua.
- [**Estatística**](color:red) - medida descritiva de uma AA com o objetivo de sumariar alguma informação sobre a mesma.
  Eis alguns exemplos:
  - Mínimo: $X_{(1)} = \min_{i = 1, \cdots, n} X_i$
  - Máximo: $X_{(n)} = \max_{i = 1, \cdots, n} X_i$
  - Amplitude: $R = X_{(n)} - X_{(1)}$
  - Média: $\overline{X} = \frac{1}{n} \sum_{i=1}^n X_i$
  - Variância Corrigida: $S^2 = \frac{1}{n-1} \sum_{i=1}^n (X_i - \overline{X})^2$
  - Variância não Corrigida: $(S')^2 = \frac{1}{n} \sum_{i=1}^n (X_i - \overline{X})^2 = \frac{n-1}{n}S^2$

:::

:::details[Exemplo]

// TODO

:::

## Estimadores

O objetivo principal da estatística é efetuar inferências sobre características de uma VA com base numa amostra.
Considera-se no geral que a distribuição de $X$ é:

- [parcialmente desconhecida](color:brown) se é conhecido o tipo de distribuição mas um ou mais parâmetros são desconhecidos.
  Inferências sobre este tipo de VA's dizem-se do tipo **paramétrico**.
- [totalmente desconhecida](color:pink) se nem a distribuição se conhece.
  Neste caso, as inferências dizem-se **não paramétricas**.

Um **parâmetro desconhecido** representa-se normalmente por $\mathbf{\theta}$ no caso unidimensional e por $\mathbf{\underline{\theta}}$ no caso multidimensional.
Ao espaço de valores que $\theta$ pode tomar dá-se o nome de [**espaço paramétrico**](color:orange) e representa-se por $\mathbf{\Theta}$.
Para uma VA $X$ que segue uma distribuição $dist$, damos o nome de [**modelo paramétrico**](color:red) de $X$ à família de distribuições $\{ dist(\theta), \theta \in \Theta \}$.

Os [**estimadores**](color:yellow) consistem em estatísticas que tentam "adivinhar" o valor de um parâmetro.
Mais precisamente, uma estatística diz-se um estimador do parâmetro desconhecido $\theta$ se o seu contradomínio estiver contido em $\Theta$.  
Ao valor observado de um estimador $T$ dá-se o nome de [**estimativa**](color:blue).

:::details[Exemplo]

// TODO

:::

### Enviasamento

Damos o nome de [**enviasamento**](color:green) de um estimador $T$ de $\theta$ ao valor

$$
bias_\theta[T(\underline{X})] = E(T(\underline{X})) - \theta
$$

Um estimador diz-se **centrado** se tiver enviasamento nulo e **enviasado** caso contrário.  
Um estimador será tanto melhor quanto menor o seu enviasamento.

:::tip[Nota]

A variância corrigida é centrada, ao contrário da não corrigida.
É por esta razão que frequentemente usamos a variância corrigida em vez da não corrigida.

:::

### Erro Quadrático Médio

O [**erro quadrático médio**](color:purple) procura calcular quanto um estimador se dispersa em torno do verdadeiro valor do parâmetro desconhecido $\theta$.
Este é dado por

$$
EQM_\theta \left( T( \underline{X} ) \right) =
E \left[ (T(\underline{X}) - \theta)^2 \right] =
V(T(\underline{X})) + bias_\theta(T(\underline{X}))^2
$$

Um estimador será tanto melhor quanto menor o seu erro quadrático médio.  
Dizemos que um estimador $T_1$ é **mais eficiente** que outro $T_2$ se $EQM_\theta(T_1(\underline{X})) < EQM_\theta(T_2(\underline{X}))$.
Definimos a **eficiência relativa** de um estimador $T_1(\underline{X})$ em relação a um estimador $T_2(\underline{X})$ de parâmetro desconhecido $\theta$ como:

$$
e_\theta(T_1(\underline{X}), T_2(\underline{X})) = \frac{EQM_\theta(T_2(\underline{X}))}{EQM_\theta(T_1(\underline{X}))}
$$

Sendo assim, temos que o estimador $T_1(\underline{X})$ é mais eficiente que $T_2(\underline{X})$ se $e_\theta(T_1(\underline{X}), T_2(\underline{X})) > 1$.

## Método da Máxima Verosimilhança

O [**método da máxima verosimilhança**](color:yellow) ([MV](color:yellow)) consiste num método para obtero valor mais plausível/verosímel para um parâmetro desconhecido, de entre todos os valores possíveis para o mesmo, tendo em conta uma amostra.

Definimos a [**função verosimilhança**](color:orange) como a função $L(\theta | \underline{x} ) : \Theta \to \R$ tal que:

- $L(\theta | \underline{x}) = P(\underline{X} = \underline{x}) = \prod_{i=1}^n P(X_i = x_i | \theta)$ no caso discreto;
- $L(\theta | \underline{x}) = f_{\underline{X}}(\underline{x}) = \prod_{i=1}^n f_{X_i}(x_i | \theta)$ no caso contínuo;

Ou seja, a [função verosimilhança](color:orange) define a probabilidade de obtermos a amostra recolhida $\underline{x}$ assumindo a validade de um certo valor para o parâmetro desconhecido $\theta$.

Damos o nome de **estimativa de máxima verosimilhança** ao valor $\theta \in \Theta$ que maximiza $L(\theta | \underline{x})$ para a amostra $\underline{x}$.

Frequentemente é mais fácil encontrar máximos da função $\ln \left[ L(\theta | \underline{x}) \right]$ pois esta trabalha com somas ao invés de produtos.
A esta função dá-se o nome de [**log-verosimilhança**](color:red).

O máximo da função [verosimilhança](color:orange)/[log-verosimilhança](color:red) é obtido:

- por análise pontual, quando $\Theta$ é finito;
- recorrendo às ferramentas do cálculo, quando $\Theta$ é um conjunto que o permita (por exemplo, um intervalo nos reais).

:::details[Exemplo]

// TODO

:::

Este método dá-nos, em função de uma amostra $\underline{x}$, uma expressão para uma **estimativa de máxima verosimilhança**.
Substituindo uma amostra particular $\underline{x}$ por uma amostra aleatória $\underline{X}$ permite-nos obter um **estimador de máxima verosimilhança** para $\theta$ (que não depende de nenhuma amostra em particular).

Os estimadores de MV satisfazem as seguintes propriedades:

- **Invariância** - Se $EMV(\theta)$ é o estimador de MV de $\theta$ e $h$ uma função bijetiva, então $EMV(h(\theta)) = h(EMV(\theta))$;
- **Suficiência** - As estimativas de MV condensam toda a informação relevante, contida na amostra, sobre o parâmetro;
- **Consistência** - À medida que o tamanho da AA aumenta, o $EMV(\theta)$ dispersa-se cada vez menos do verdadeiro valor de $\theta$.

## Distribuições Amostrais

:::tip[Distribuição Amostral]

Distribuição seguida por uma estatística ou estimador.

:::

Exemplos:

- $F_{X_{(1)}}(x) = 1 - (1 - F_X(x))^n$
- $F_{X_{(n)}}(x) = (F_X(x))^n$

A média está de modo geral relacionada com o estimador de MV do valor esperado, pelo que é paraticularmente interessar estudar a sua distribuição amostral.
Como já vimos no capítulo anterior:

$$
X \sim normal(\mu, \sigma^2) \Rightarrow \overline{X} \sim normal(\mu, \frac{\sigma^2}{n}) \\
X \text{ com qualquer distribuição } \Rightarrow \overline{X} \sim normal(\mu, \frac{\sigma^2}{n}) \text{ para } n>> \text{ (segundo o TLC)}
$$

---
title: Conversão para o Modelo Relacional
description: >-
  Conversão do Modelo E-A para o Modelo Relacional
path: /bd/relational-model-conversion
type: content
---

# Conversão para o Modelo Relacional

```toc

```

## Relações

Antes de entrarmos na conversão do [Modelo E-A](/bd/er-model) para o Modelo Relacional,
vamos definir o que é uma Relação.

:::tip[Definição]

Considerando um _schema_ de relação $R(A_1, \dots, A_n)$, em que cada
atributo $A_i$ tem um domínio implícito e discreto de valores $D_i$.

Temos assim que uma [**relação** $r$](color:green) de um _schema_ de relação $R$,
é o conjunto:

$$
r \subseteq D_1 \times \dots \times D_n
$$

Todos os elementos $t \in r$ são tuplos de tamanho $n$, na forma $\lang a_1,\dots,a_n \rang$
tal que $a_i \in D$.

:::

Por palavras mais simples, uma relação é composta por vários "campos", em que cada um
deles tem um domínio. Os elementos que pertencem a essa relação, são tuplos
com cada um dos valores para os respetivos "campos".

::::info[Exemplo]

Vejamos o seguinte exemplo:

> product(<u>product_code: string</u>, product_name: string, price: integer, stock: integer)

:::warning[Representação de uma relação]
Daqui para a frente, por razões de simplicidade, não se irá representar os domínios de cada atributo.
:::

Temos então que a relação $\text{product}$ é o conjunto:

$$
\text{product} \subseteq \text{string} \times \text{string} \times \text{integer} \times \text{integer}
$$

Os elementos que pertencem a esta relação são, por exemplo:

$$
\begin{aligned}
\text{product} = &\{\\
&\lang \text{a1}, \text{Bolachas}, 50, 10 \rang\\
&\lang \text{a2}, \text{Napolitanas}, 20, 15 \rang\\
&\lang \text{a3}, \text{Leite}, 95, 2 \rang\\
&\}
\end{aligned}
$$

::::

Para uma relação, podemos determinar:

- O [**grau de uma relação**](color:orange) é o número de atributos (ou se preferirem, campos ou colunas)
- A [**cardinalidade de uma relação**](color:yellow) é o número de tuplos (isto é, linhas)

Uma relação é um [**objeto matemático**](color:purple) que é representável como uma tabela.

:::info[Quais são relações?]

Para ajudar a perceber o que é ou não uma relação, vejamos os seguintes exemplos.

Os seguintes conjuntos [**são relações**](color:green):

- $\{\}$
- $\{\lang \text{Bolachas} \rang\}$
- $\{\lang \text{Bolachas} \rang, \lang \text{Napolitanas} \rang\}$
- $\{\lang \text{Bolachas}, 50 \rang, \lang \text{Napolitanas}, 20 \rang\}$

Os seguintes conjuntos [**não são relações**](color:red):

- $\{\lang\rang\}$
  - Uma relação tem pelo menos um atributo
- $\{\lang \text{Bolachas} \rang, \lang 20 \rang\}$
  - Os elementos na mesma posição não são do mesmo tipo (isto é, não pertencem ao mesmo domínio)
- $\{\lang \text{Bolachas}, 50 \rang, \lang \text{Napolitanas} \rang\}$
  - O número de elementos em cada tuplo é diferente

:::

### Propriedades das Relações

Uma relação **não tem tuplos duplicados** nem **colunas duplicadas**.
Do mesmo modo, a ordenação tanto tos tuplos como dos atributos (colunas) é **irrelevante**.

Ou seja, a relação `product(p_code, p_name)` é equivalente a `product(p_name, p_code)`.

Estas propriedades refletem-se diretamente caso queiramos efetuar a união ou conjunção
de duas relações:

- Exemplo 1:

  $$
  \begin{aligned}
  &\{\lang \text{Bolacha}, 50\rang, \lang \text{Napolitana}, 20 \rang\} \cup \{\lang \text{Bolacha}, 50 \rang\}\\
  =&\{\lang \text{Bolacha}, 50\rang, \lang \text{Napolitana}, 20 \rang\}
  \end{aligned}
  $$

- Exemplo 2:
  $$
  \begin{aligned}
  &\{\lang \text{Bolacha}, 50\rang, \lang \text{Napolitana}, 20 \rang\} \cap
    \{\lang\text{Napolitana} 25 \rang, \lang \text{Bolacha}, 50 \rang\}\\
  =&\{\lang \text{Bolacha}, 50\rang\}
  \end{aligned}
  $$

## Restrições

Tal como [tínhamos no modelo E-A](/bd/er-model#restrições-de-integridade)
vamos novamente ter [**Restrições de Integridade**](color:orange).

As restrições de integridade podem ser aplicadas tanto às **relações** como à **base de dados**.

### Restrições aplicadas a Relações

Podemos ter três tipos de restrições aplicadas a relações:

- Restrições de Domínio
- Restriçoes de Chave
- Restrições de Unicidade

:::tip[Definição]
Uma restrição de integridade aplicada a uma relação é uma condição num dos
atributos dessa relação, que restringe os dados que podem ser guardados
nessa relação.
:::

#### Restrições de Domínio

Uma restrição de domínio, tal como o próprio nome indica, restringe os valores do
domínio de um atributo da relação.

É fácil pensar em vários exemplos:

- O preço de um produto tem de ser um inteiro positivo
- O código do produto tem de ter 6 caracteres e começar pela letra 'A'
- A data de nascimento de um utilizador tem de ser anterior a 2002-01-01

Tais restrições podem ser indicadas da seguinte forma:

> product(p_code, p_name, price, stock)
>
> - (price > 0): O preço de um produto tem sempre de ser positivo

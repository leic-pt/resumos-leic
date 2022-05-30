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

Dependendo do tipo de restrição, deve-se usar diferentes mecanismos no SGBD:

| Tipo de Restrição       | Mecanismo do SGBD                              |
| ----------------------- | ---------------------------------------------- |
| Domínio                 | Domínios dos atributos; `CHECK`                |
| Chave Primária          | `PRIMARY KEY`                                  |
| Unicidade               | `UNIQUE`                                       |
| Integridade Referencial | `FOREIGN KEY`                                  |
| Integridade Genérica    | _Assertions_, _Stored Procedures_ e _Triggers_ |

### Restrições aplicadas a Relações

Podemos ter três tipos de restrições aplicadas a relações:

- Restrições de Domínio
- Restrições de Unicidade
- Restriçoes de Chave

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

#### Restrições de Unicidade

Uma restrição de unicidade indica quais são os atributos, ou conjuntos de atributos,
cujos valores não se podem repetir na relação.

Quando temos uma restrição de unicidade num conjunto de atributos, estamos a indicar
que este par de valores não pode repetir, mas os valores individualmente podem.  
No exemplo indicado abaixo, podemos ter dois produtos com o nome "Bolacha" se tiverem
preços diferentes.

> product(p_code, p_name, price, stock)
>
> - UNIQUE(p_code)
> - UNIQUE(p_name, price)

Com estas restrições:

- não podem existir dois produtos com o mesmo código de barras.
- não podem existir dois produtos com a mesma combinação _nome_/_preço_.

:::tip[Minimal vs Mínimo]

É importante perceber a diferença entre um elemento minimal e um elemento mínimo.

- Um [**elemento minimal**](color:orange) é um elemento tal que não existe nenhum elemento menor que ele.
- Um [**elemento mínimo**](color:yellow) é um elemento que é menor que todos os outros.

É de notar que podem existir vários [**elementos minimais**](color:orange), mas
apenas um [**elemento mínimo**](color:yellow).
Podemos concluir também que um [**elemento mínimo**](color:yellow) é sempre
[**minimal**](color:orange).

:::

Só devemos aplicar restrições de unicidade a [**elementos minimais**](color:orange), isto é,
às combinações de atributos de tamanho mínimo necessário para garantir a unicidade.
Se é possível identificar um produto apenas pelo seu código de barras, não faz
sentido ter uma restrição de unicidade no par _chave_/_nome_.

#### Restrições de Chave

Uma restrição de chave indica qual é o atributo (ou o conjunto de atributos minimal) que
identifica unicamente um tuplo.
Por outras palavras, não existe nenhum subconjunto da chave que pode também identificar
unicamente o conjunto.  
Representamos esta restrição através de sublinhado, de forma semelhante ao Modelo E-A.

Tomemos dois exemplos, um com chave de um atributo e outro com chave de dois atributos.

> product(<u>p_code</u>, p_name, price, stock)

> order(<u>p_code, client_id</u>, quantity, date)

### Restrições aplicadas à Base de Dados

As restrições aplicadas à base de dados são aplicadas a conjuntos de relações.

Existem dois tipos:

- Restrições de Integridade Referencial (ou _foreign keys_)
- Restrições de Integridade Genéricas

#### Restrições de Integridade Referencial (_Foreign Keys_)

Restrições deste tipo requerem que exista um valor (ou combinação de valores)
correspondente noutra relação. Chama-se a isto uma _foreign key_.

Se os dados numa das relações forem alterados, é necessário verificar que as
relações continuam a ser válidas.

> order(<u>p_code, client_id</u>, quantity, date)
>
> - p_code: FK(product.p_code)

Caso o nome dos atributos seja igual em ambas as relações, podemos omitir o nome
do atributo dentro do `FK`, isto é, `p_code: FK(product)`.

Podemos também incluir _foreign keys_ para atributos da mesma relação.

> category(<u>name</u>, parent_category)
>
> - parent_category: FK(category.name)

É de realçar também que se quisermos aplicar uma _foreign key_ a um conjunto
de atributos, devemos usar a seguinte notação:

> course(<u>course_name, year</u>, degree)
>
> enrollment(<u>student, course_name, year</u>)
>
> - course_name, year: FK(course_name, year)

#### Restrições de Integridade Genéricas

Há certas restrições que não se encaixam em mais nenhum tipo de categoria e têm
de ser explicitadas textualmente.

> degree(<u>degree_id</u>, name)
>
> student(<u>ist_id</u>, name, degree)
>
> - degree: FK(degree.degree_id)
>
> course(<u>course_name, year</u>, degree)
>
> - degree: FK(degree.degree_id)
>
> enrollment(<u>student, course_name, year</u>)
>
> - student: FK(student)
> - course_name, year: FK(course_name, year)
>
> IC-1: Students can only be enrolled in courses belonging to the same degree
> they signed up for.

## Conversão a partir do Modelo E-A

### Entidades e Atributos

A conversão de entidade e atributos do Modelo E-A para o Modelo Relacional é
bastante simples. As chaves primárias continuam a ser **representadas por um sublinhado**,
e os atributos únicos passam a ter uma **restrição de unicidade**.

![Entidade com chave primária e atributo único](./assets/0004-convert-entity-attributes.svg#dark=3)

> student(<u>st_id</u>, name, birthdate)
>
> - UNIQUE(name)

### Associações

Dependendo do tipo de associação, a conversão para o modelo relacional faz-se de forma
diferente.

- **_Many-to-Many_** e **Ternárias**: cria-se uma nova relação com as chaves das entidades envolvidas
- **_One-to-Many_**: cria-se uma nova relação em que a chave primária é a chave da entidade com multiplicidade 1.
- **_One-to-One_**: igual à _many-to-many_, mas adiciona-se uma restrição de unicidade às chaves das entidades envolvidas.

Existem também casos especiais para quando temos [participação obrigatória](/bd/er-model#restrições):

- **_Many-to-Many_ com participação obrigatória**: não é possível representar diretamente no
  modelo relacional, pelo que precisamos de uma restrição de integridade.
- **_One-to-Many_ com participação obrigatória**: deixamos de precisar de uma nova relação,
  e colocamos os atributos na relação da entidade com multiplicidade 1.

#### Many-to-Many

// TODO diagram

(atributos das entidades omitidos por brevidade)

> student(<u>ist_id</u>, name)
>
> course(<u>course_id</u>, course_name, department)
>
> enrolls(<u>ist_id, course_id</u>, enrollment_date)
>
> - ist_id: FK(student)
> - course_id: FK(course)

#### One-to-Many

// TODO diagram

(atributos das entidades omitidos por brevidade)

> student(<u>ist_id</u>, name)
>
> degree(<u>degree_acronym</u>, degree_name, department)
>
> studies(<u>ist_id</u>, degree_acronym, start_date)
>
> - ist_id: FK(student)
> - degree_acronym: FK(degree)

#### One-to-One

#### Many-to-Many com Participação Obrigatória

#### One-to-Many com Participação Obrigatória

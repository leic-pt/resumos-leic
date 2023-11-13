---
title: Testes e Testes de Unidade
description: >-
  Testes.
  Testes de Unidade (Unit Tests).

  White Box e Black Box testing strategies.
  Partition testing.
  Test doubles.
path: /es/unit-tests
type: content
---

# Testes e Testes de Unidade

```toc

```

Os testes automáticos permitem-nos ter confiança de que o nosso código funciona
e que não sofreu regressões (i.e. algo que funcionava deixou de funcionar) devido
a alterações não relacionadas.  
No entanto, é importante ter em conta que ter todos os testes a passar
**não significa que o programa está livre de _bugs_**.

## Fases de Testagem

Existem 3 grandes fases onde os sistemas são testados:

- [**_Development Testing_**](color:green): o sistema é testado pelos **_developers_**
  durante o desenvolvimento. Pode tomar a forma de _unit testing_, _component testing_
  ou _system testing_.
- [**_Release testing_**](color:yellow): antes de uma nova versão do sistema ser
  lançada e disponibilizada aos utilizadores, os **_QA Engineers_**, uma equipa
  separada da equipa de desenvolvimento, testam todo o sistema.
- [**_User testing_**](color:red): os **utilizadores** do sistema testam o sistema,
  por exemplo, através de uma versão _beta_ ou _alpha_ lançada antes da versão final.

## Estratégias de Testagem

- [**_Black box testing_**](color:pink): os testes são feitos a partir de uma **especificação**,
  isto é, a descrição que levou à implementação.
- [**_White box testing_**](color:blue): os testes são feitos contra uma **implementação** específica.

:::info[Exemplo]

Imaginemos que temos uma estrutura do tipo FIFO implementada e queremos
testar o método `fifo.push()`.

No caso de não conhecermos a implementação (caso [_black box_](color:pink)), o óbvio
seria testar o caso em que a fifo está vazia, e o caso em que não está.

No entanto, se soubermos que a estrutura utiliza arrays de 512 elementos na
sua implementação, podemos (e devemos) também testar o caso em que é adicionado
um elemento a uma FIFO com 512 elementos (caso [_white box_](color:blue)).

:::

## Testagem de Partições

Quando estamos a testar um sistema, existem vários inputs (e os respetivos outputs)
que se comportam de forma semelhante.
Podemos, então, agrupar estes inputs quando escrevemos testes, numa técnica chamada
**Testagem de Partições** (ou, em inglês, [_equivalence partitioning testing_](https://en.wikipedia.org/wiki/Equivalence_partitioning)).

:::tip[Partition Testing]

Consiste em encontrar grupos de inputs (que não se intercetam) que se espera
que tenham um mesmo comportamento.  
De seguida, cria-se testes para cada um destes grupos.

:::

Uma técnica usada em conjunto com a testagem de partições é a
análise de valores fronteira ([_boundary-value analysis_](https://en.wikipedia.org/wiki/Boundary-value_analysis)),
isto é, os valores que delimitam as várias partições.

:::info[Exemplo]

Vamos imaginar uma função `passOrFail(int grade)` que retorna `"pass"` se a nota
for entre 10 e 20 (inclusive), `"fail"` se a nota for entre 0 e 9 (inclusive) e
lança uma exceção para qualquer outro valor.

Seguindo a testagem de partições, vamos dividir o nosso espaço em 4 diferentes partições.

```
...    -1 | 0 ... 9 | 10 ... 20 | 21    ...
-------------------------------------------
exception |  fail   |   pass    | exception
```

Considerando apenas a testagem de partições, temos de testar um valor
de cada uma das partições, por exemplo, -2, 4, 15 e 22.

No entanto, geralmente queremos também efetuar _boundary-value analysis_, pelo que
queremos incluir nos nossos testes os valores fronteira, -1, 0, 9, 10, 20 e 21.

Assim, se seguirmos ambos os métodos, os nossos testes deverão abranger 10 valores
diferentes e 4 partições.

:::

## Testes Unitários

Os Testes Unitários (_Unit Tests_) servem para testar os vários componentes
individualmente, isolados do resto do sistema.

As várias **unidades** podem ser:

- Funções ou métodos de um objeto
- Classes de objetos com vários atributos e métodos
- Componentes compostos (_composite components_) com interfaces bem definidas
  que permitem aceder à sua funcionalidade.

Para termos _coverage_ total de uma classe, temos de:

- Testar todas as operações associadas a um objeto;
- Fazer _set_ e _get_ de todos os atributos do objeto;
- Utilizar o objeto em todos os seus estados possíveis.

## Test Doubles

Os _test doubles_ são objetos falsos que são usados no lugar de objetos verdadeiros
em testes.  
Estes podem ser:

<!-- TODO explicar cada um deles -->

- Dummy objects
- Fake objects
- Stubs
- Spies
- Mocks

Estes têm a vantagem de isolar os testes a uma única unidade, de diminuir
as dependências ao efetuar testes e também simular casos difíceis de gerar.

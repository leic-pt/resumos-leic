---
title: SQL Avançado
description: >-
  SQL Avançado.
path: /bd/advanced-sql
type: content
---

# SQL Avançado

```toc

```

## Agregação

Já vimos anteriormente como funcionam as [agregações em Álgebra Relacional](/bd/relational-algebra#agregação).
Como seria de esperar, estas estão também [presentes no SQL](https://www.postgresql.org/docs/current/functions-aggregate.html).

Recapitulando algumas das funções que existem:

| Função                  | Descrição                                                   |
| ----------------------- | ----------------------------------------------------------- |
| `COUNT(*)`              | Número de linhas                                            |
| `COUNT([DISTINCT] col)` | Número de linhas com valores [distintos] não nulos de `col` |
| `SUM([DISTINCT] col)`   | Soma dos valores [distintos] não nulos de `col`             |
| `AVG([DISTINCT] col)`   | Soma dos valores [distintos] não nulos de `col`             |
| `MAX(col)`              | O valor máximo entre os valores não nulos de `col`          |
| `MIN(col)`              | O valor mínimo entre os valores não nulos de `col`          |

:::warning[Valores Nulos]
Como veremos [mais abaixo](#null), os valores nulos têm um comportamento à parte.
:::

Relembrando a Álgebra Relacional, vamos poder ou não indicar quais as colunas pelas quais
agrupar valores. Para isso, utilizamos a cláusula [`GROUP BY`](https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-GROUP).

```sql
-- TODO exemplo sem group by

-- TODO exemplo com group by
```

Caso queiramos filtrar linhas por uma condição que contém valores agrupados,
rapidamente reparamos que tal não é possível com a cláusula `WHERE`: esta cláusula
é executada **antes** da agregação.
Para resolver este problema, temos de usar a cláusula [`HAVING`](https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-GROUP),
que funciona de forma semelhante ao `WHERE`, mas é executada **após** a agragação.

```sql
-- TODO exemplo HAVING a filtrar por uma função de agregação
```

## Nested Queries

- FROM

- JOIN

- IN

## Operações em Conjuntos

- ALL/ANY

- Máximo Absoluto de um Conjunto
  - Máximo de somas e count

## NULL

- Aritmética do NULL

- Comportamento com OUTER JOINs

- Inconsistências

  - Agregações

- Substituir nulls por outros valores

## Correlation

- Correlation (EXISTS e UNIQUE)

## Cross Join

- Cross join as alternative to join

## Division

- Division

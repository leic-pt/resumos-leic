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

Além de podermos fazer queries "simples", podemos também executar queries dentro
de queries, utilizando o seu resultado para o `FROM`, o `JOIN`, o `IN`, etc.

- `FROM`

  Podemos utilizar o resultado de uma query no `FROM`, efetuando depois o `SELECT` dos atributos
  que queremos ou até mesmo operações mais avançadas (já que a utilização no exemplo abaixo
  é altamente redundante).

  ```sql
  -- Obter os nomes de todos os alunos nascidos em ou depois de 2022
  SELECT S.student_name FROM (
    SELECT * FROM students WHERE birthday >= '2002-01-01'
  ) AS S;

  -- Esta query é claramente equivalente a
  SELECT student_name FROM students WHERE birthday >= '2002-01-01'
  ```

- `JOIN`

  Do mesmo modo, podemos utilizar o resultado de uma query no `JOIN` (em [qualquer um deles](/bd/sql#cláusula-join)).

  ```sql
  -- Obter os nomes dos alunos inscritos em 5 ou mais disciplinas
  SELECT student.student_name FROM student
    NATURAL JOIN (
      SELECT ist_id FROM enrollment
      GROUP BY ist_id
      HAVING COUNT(*) >= 5
    );

  -- Esta query é equivalente a
  SELECT student_name FROM student
    NATURAL JOIN enrollment
    GROUP BY ist_id, student_name
    HAVING COUNT(*) >= 5;
  ```

- `IN`

  A cláusula `IN` pode ser usada numa condição para verificar se um valor está
  num contido num conjunto. Em vez de especificarmos um conjunto fixo, podemos
  especificar uma query que retorne apenas uma coluna.

  ```sql
  -- Obter os delegados de LEIC-A
  SELECT student.student_name FROM student
    WHERE student.ist_id IN (
      SELECT delegate.ist_id FROM delegate
        WHERE delegate.course = 'LEIC-A'
    );
  ```

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

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

É possível efetuar comparações entre um valor e um conjunto, verificando, por exemplo,
se existe um valor igual, se todos os valores são iguais, se existe um valor maior, etc.

Para isto, vamos introduzir duas novas cláusulas: `ALL` e `ANY`, com as seguintes sintaxes:

```sql
<value> <operator> ALL (<set>)
<value> <operator> ANY (<set>)
```

Como se pode deduzir pelos nomes, a cláusula `ALL` verifica se `<value> <operator> <set element>` para
[todos](color:green) os valores de `<set>`, equanto a cláusula `ANY` verifica se `<value> <operator> <set element>`
para [pelos menos um](color:yellow) valor de `<set>`.

:::tip[Relação com `IN` e `NOT IN`]
Podemos intuitivamente reparar que `IN` é equivalente a `= ANY` e que
`NOT IN` é equivalente a `<> ANY`: um elemento só pertence a um conjunto
se for igual a algum elemento do mesmo, e não pertence a um conjunto
se for diferente de todos os seus elementos.
:::

Estas duas cláusulas são úteis para calcularmos o [**máximo de um conjunto**](color:orange) (ou o mínimo).
Vejamos como as podemos utilizar para determinar os alunos com melhor notas e os alunos
inscritos ao maior número de disciplinas:

```sql
-- Determinar o IST ID dos alunos com a melhor nota e o respetivo valor
-- Poderíamos fazer um JOIN para obter o nome
SELECT ist_id, grade FROM grades
  WHERE grade >= ALL (
    SELECT grade FROM grades WHERE course = 'BD'
  ) AND course = 'BD';

-- Determinar o IST ID dos alunos inscritos ao maior
-- número de disciplinas (e o respetivo valor)
SELECT ist_id, COUNT(*) FROM enrollment
  GROUP BY ist_id
  HAVING COUNT(*) >= (
    SELECT COUNT(*) FROM enrollment
    GROUP BY ist_id
  );
```

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

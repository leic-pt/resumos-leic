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
| `AVG([DISTINCT] col)`   | Média dos valores [distintos] não nulos de `col`            |
| `MAX(col)`              | O valor máximo entre os valores não nulos de `col`          |
| `MIN(col)`              | O valor mínimo entre os valores não nulos de `col`          |

:::warning[Valores Nulos]
Como veremos [mais abaixo](#null), os valores nulos têm um comportamento à parte.
:::

Relembrando a Álgebra Relacional, vamos poder ou não indicar quais as colunas pelas quais
agrupar valores. Para isso, utilizamos a cláusula [`GROUP BY`](https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-GROUP).

```sql
-- Imaginemos que queremos saber a quantidade de compras feitas,
-- tanto no total como por cliente

--   client |  price
-- ---------+-----------
--    Diogo |    20
--    José  |    15
--    Diogo |    18
--    Tiago |    12

-- Sem GROUP BY
SELECT COUNT(*) as count FROM purchase;

--   count
-- --------
--     4
-- (1 row)

-- Com GROUP BY
SELECT client, COUNT(*) as count FROM purchase
GROUP BY client;

--   client |  count
-- ---------+---------
--    Diogo |    2
--    José  |    1
--    Tiago |    1
-- (3 rows)
```

Caso queiramos filtrar linhas por uma condição que contém valores agrupados,
rapidamente reparamos que tal não é possível com a cláusula `WHERE`: esta cláusula
é executada **antes** da agregação.
Para resolver este problema, temos de usar a cláusula [`HAVING`](https://www.postgresql.org/docs/current/queries-table-expressions.html#QUERIES-GROUP),
que funciona de forma semelhante ao `WHERE`, mas é executada **após** a agragação.

```sql
-- Pegando no exemplo anterior,
-- vamos agora querer os clientes com mais que 1 compra.

SELECT client, COUNT(*) FROM frigu GROUP BY client HAVING COUNT(*) > 1;

--   client |  count
-- ---------+---------
--    Diogo |    2
-- (1 row)
```

## Nested Queries

Além de podermos fazer queries "simples", podemos também executar queries dentro
de queries, utilizando o seu resultado para o `FROM`, o `JOIN`, o `IN`, etc.

- `FROM`

  Podemos utilizar o resultado de uma query no `FROM`, efetuando depois o `SELECT` dos atributos
  que queremos ou até mesmo operações mais avançadas (já que a utilização no exemplo abaixo
  é altamente redundante).

  ```sql
  -- Obter os nomes de todos os alunos nascidos em ou depois de 2002
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

Para isto, vamos introduzir duas novas cláusulas:
[`ALL`](https://www.postgresql.org/docs/current/functions-subquery.html#FUNCTIONS-SUBQUERY-ALL) e
[`ANY`](https://www.postgresql.org/docs/current/functions-subquery.html#FUNCTIONS-SUBQUERY-ANY-SOME),
com as seguintes sintaxes:

```sql
<value> <operator> ALL (<set>)
<value> <operator> ANY (<set>)
```

Como se pode deduzir pelos nomes, a cláusula `ALL` verifica se `<value> <operator> <set element>` para
[todos](color:green) os valores de `<set>`, enquanto a cláusula `ANY` verifica se `<value> <operator> <set element>`
para [pelos menos um](color:yellow) valor de `<set>`.

:::tip[Relação com `IN` e `NOT IN`]
Podemos intuitivamente reparar que `IN` é equivalente a `= ANY` e que
`NOT IN` é equivalente a `<> ANY`: um elemento só pertence a um conjunto
se for igual a algum elemento do mesmo, e não pertence a um conjunto
se for diferente de todos os seus elementos.
:::

Estas duas cláusulas são úteis para calcularmos o [**máximo de um conjunto**](color:orange) (ou o mínimo).
Vejamos como as podemos utilizar para determinar os alunos com melhores notas e os alunos
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

Em SQL, tal como em algumas linguagens de programação, é possível ter valores `null`.
Isto pode ser tanto algo bom como algo mau: por um lado ganhamos a flexibilidade de
poder omitir certos valores, mas por outro sujeitamo-nos a comportamentos inesperados.
Tal deve-se ao facto que o [**comportamento do `NULL` em SQL é ambíguo e muda de situação
para situação**](color:red), como iremos ver.
Geralmente, estes valores são representados como um espaço vazio, isto é, ausência de valor.

:::warning[Comportamento predefinido]

Em SQL, quando criamos uma tabela, todas as colunas são _nullable_, isto é,
podem ter valores `null`.
Para alterarmos este comporamento, deveremos usar a restrição `NOT NULL` na coluna.

Por exemplo:

```sql
CREATE TABLE students (
  ist_id VARCHAR(15) NOT NULL,
  student_name VARCHAR(255) NOT NULL,
  PRIMARY KEY(ist_id)
);
```

:::

Para percebermos o comportamento do `NULL`, vamos olhar para o seu comportamento em
vários tipos de expressões. É preciso ter em mente que nem todas as funcionalidades
em SQL seguem estas regras quando em contacto com o `NULL`, como iremos ver abaixo.

- **Expressões Aritméticas**

  Todas as expressões aritméticas que contêm `NULL` irão resultar em `NULL`.

  | Expressão       | Resultado |
  | --------------- | --------- |
  | `5 + NULL`      | `NULL`    |
  | `NULL * 10`     | `NULL`    |
  | `5 * 10 + NULL` | `NULL`    |

- **Expressões Lógicas**

  As expressões lógicas que dependem do `NULL` para saber o seu
  valor lógico, irão resultar em `NULL`.

  | Expressão        | Resultado |
  | ---------------- | --------- |
  | `NULL AND TRUE`  | `NULL`    |
  | `NULL AND FALSE` | `FALSE`   |
  | `NULL OR TRUE`   | `TRUE`    |
  | `NULL OR FALSE`  | `NULL`    |

  É de realçar que nas situações em que o valor de `NULL` não afeta o
  resultado da expressão lógica, o SGBD vai-nos dar um valor de `TRUE` ou `FALSE`.

- **Expressões Relacionais**

  As expressões relacionais vão resultar num valor `unknown` se conterem
  um valor `NULL`. A cláusula `WHERE` trata os valores `unknown` como `FALSE`.

  | Expressão      | Resultado |
  | -------------- | --------- |
  | `NULL = NULL`  | `unknown` |
  | `NULL = 5`     | `unknown` |
  | `NULL <> NULL` | `unknown` |
  | `NULL <> 5`    | `unknown` |

Este comportamento leva-nos a uma situação engraçada: se tentarmos obter
os valores nulos de uma tabela com o operador `=`, não vamos obter qualquer resultado:

```sql
-- O operador = não funciona
SELECT * FROM student WHERE birthday = NULL;

--  ist_id | student_name | birthday
-- --------+--------------+----------
-- (0 rows)
```

Para resolvermos esta situação, temos de usar um operator especial, o `IS`:

```sql
-- O operador IS já funciona
SELECT * FROM student WHERE birthday IS NULL;

--    ist_id   | student_name | birthday
-- ------------+--------------+----------
--  ist1123456 | Diogo        |
-- (1 row)
```

Mas como é que aparecem valores `NULL`?
Uma das formas é a mais óbvia: são inseridos voluntariamente pelos utilizadores
da base de dados.

Podem também aparecer como o resultado de [outer joins](/bd/sql#outer-join),
como já vimos anteriormente.

Outro caso de onde podem resultar valores `NULL` são as funções de agregação:
caso tentemos fazer um `MAX`, `MIN`, `AVG`, `SUM`, etc. num conjunto vazio, vamos
obter um valor `NULL`.

Por falar em funções de agregação, estas [**desobdecem às regras de aritmética do `null`**](color:red):
só o `COUNT(*)` é que se comporta como esperado, todas as outras ignoram valores `NULL`.
Por exemplo, ao efetuar `SUM(col)`, os valores a `NULL` não são somados, indo contra o
princípio que `x + NULL` é `NULL`.

### Substituir NULLs

Pode-nos ser útil substituir os valores `NULL` numa tabela por um valor predefinido.
Para tal, podemos usar a [cláusula `COALESCE`](https://www.postgresql.org/docs/current/functions-conditional.html#FUNCTIONS-COALESCE-NVL-IFNULL).

Esta cláusula retorna o primeiro dos seus valores que não é `NULL`.

```sql
SELECT ist_id, COALESCE(grade, 0) AS grade FROM grades
  WHERE course = 'BD';

--    ist_id   | grade
-- ------------+-------
--  ist1123456 |    20
--  ist1654321 |     0
--  ist1123123 |    18
-- (3 rows)
```

## Correlation

<!-- esta introdução está um bocado confusa, aceitam-se sugestões -->

Usando uma técnica chamada _correlation_, podemos efetuar _nested queries_ que acedem
aos valores da _query_ principal, de forma a verificar se existe algum valor ou se esses
valores são únicos. Para isto, utilizamos as cláusulas
[`EXISTS`](https://www.postgresql.org/docs/current/functions-subquery.html#FUNCTIONS-SUBQUERY-EXISTS)
e `UNIQUE` (que não existe em PostgreSQL), respetivamente.

```sql
-- Obter o nome dos alunos que estão inscritos a pelo menos
-- uma disciplina
SELECT student.student_name FROM student
  WHERE EXISTS (
    SELECT * FROM enrollment
      WHERE enrollment.ist_id = student.ist_id
  );

-- A query acima é equivalente a
SELECT student.student_name FROM student
  WHERE 0 <> (
    SELECT COUNT(*) FROM enrollment
      WHERE enrollment.ist_id = student.ist_id
  );
```

Como é evidente pelo exemplo acima, a cláusula `EXISTS` vai retornar verdadeiro
caso a _sub query_ não esteja vazia.

Vejamos agora a cláusula `UNIQUE`:

```sql
-- Obter o nome dos alunos que estão inscritos, no máximo,
-- a uma disciplina
SELECT student.student_name FROM student
  WHERE UNIQUE (
    SELECT student.ist_id FROM enrollment
      WHERE enrollment.ist_id = student.ist_id
  );
```

Esta cláusula retorna verdadeiro caso a _sub query_ não tenha linhas repetidas.
[**Caso a _query_ retorne uma tabela vazia, esta cláusula retorna vedadeiro.**](color:red)

## Cross Join

- Cross join as alternative to join

## Division

- Division

---
title: Álgebra Relacional
description: >-
  Álgebra Relacional: para que serve?
  Definição formal.
path: /bd/relational-algebra
type: content
---

# Álgebra Relacional

```toc

```

## O que é?

Quando efetuamos uma _SQL query_ numa base de dados, o SGBD converte essa _query_
numa expressão algébrica. O que é para nós uma linguagem facilmente compreensível (SQL)
é na verdade uma simplificação das expressões algébricas aplicadas a relações.

Uma [**expressão relacional (algébrica)**](color:yellow) recebe uma ou mais relações
e retorna apenas uma relação.

Vejamos agora que literais/operadores existem em álgebra relacional, isto é, qual a sua gramática formal:

| Nome                     | Representação                                     |
| ------------------------ | ------------------------------------------------- |
| Relação vazia            | $\emptyset$                                       |
| Literal de Relação       | $\{\lang v_1, \dots, v_n\rang, \dots \}$          |
| Nome de Relação/_relval_ | $r$                                               |
| Seleção                  | $\sigma_c(E)$                                     |
| Projeção                 | $\pi_{A_1, \dots, A_n}(E)$                        |
| Projeção Generalizada    | $\pi_{F_1, \dots, F_n}(E)$                        |
| Renomeação               | $\rho_{A_1\mapsto B_1,\dots, A_m \mapsto B_m}(E)$ |
| União                    | $E_1 \cup E_2$                                    |
| Interceção               | $E_1 \cap E_2$                                    |
| Diferença                | $E_1- E_2$                                        |
| Produto Cartesiano       | $E_1 \times E_2$                                  |
| Divisão                  | $E_1 \div E_2$                                    |
| Atribuição               | $r <- E$                                          |
| _Natural Join_           | $\bowtie$                                         |
| Agregação                | $G_{L,F}(E)$                                      |

Aprofundemos, de seguida, alguns destes operadores.

## Seleção

A seleção funciona de forma semelhante à cláusula `WHERE` do SQL,
em que se restringe uma relação de acordo com uma condição/predicado.

Relembremos a sintaxe, $\sigma_c(E)$. Aqui, temos que:

- $c$ é uma condição/predicado, podendo ser simples ou composta
- $E$ é a relação a que queremos aplicar esta condição

Assim, iremos obter uma nova relação, definida por:

$$
\sigma_c(r) = \{t | t \in r \op{and} c(t)\}
$$

Na seleção, a condição $c$ irá ser avaliada por cada tuplo $t$.
Uma condição pode conter os operadores de comparação $=$, $>$, $<$, $\geq$, $\leq$, etc,
assim como os operadores lógicos $\land$, $\lor$ e $\neg$.

:::info[Exemplo]

// TODO

:::

## Projeção

A projeção funciona de forma semelhante à cláusula `SELECT` do SQL,
em que seleciona certas colunas/atributos de uma relação.

Relembremos a sintaxe, $\pi_{A_1, \dots, A_n}(E)$. Aqui, temos que:

- $E$ é a relação que queremos projetar
- $A_i$ é uma coluna/atributo da relação $E$

Assim, iremos obter uma nova relação, definida por:

$$
\pi_{A_1, \dots, A_n}(r) = \{t[A_1, \dots, A_n]| t\in r\}
$$

Na projeção, obtemos a mesma relação dada, mas sem as colunas não especificadas.
Todas as colunas $A_i$ têm de pertencer à relação $r$.

:::info[Exemplo]

// TODO

:::

:::warning[Tuplos duplicados]

Visto que as relações não contêm tuplos duplicados (isto é, são _sets_ e não listas),
ao remover certas colunas poderemos diminuir o número de tuplos na relação.

// TODO exemplo

:::

## Renomeação

A renomeação funciona de forma semelhante à cláusula `AS` do SQL,
em que altera o nome de certas colunas/atributos de uma relação.

Relembremos a sintaxe, $\rho_{A_1\mapsto B_1,\dots, A_m \mapsto B_m}(E)$. Aqui, temos que:

- $E$ é a relação cujas colunas queremos renomear
- $A_i$ é o nome original (ou posição) de uma coluna da relação $E$
- $B_i$ é o nome para o qual queremos alterar o nome de $A_i$

Assim, iremos obter uma nova relação, definida por:

$$
\rho_{A_1\mapsto B_1,\dots, A_m \mapsto B_m}(r) = \{t | \exists u \in r, t[B_i] = u[A_i] \forall 1 \leq i \leq m\}
$$

Na renomeação, iremos obter os mesmos tuplos, apenas com nomes de colunas diferentes.

:::info[Exemplo]

// TODO

:::

## União

## Interceção

## Diferença

## Produto Cartesiano

## Divisão

## Composição de Relações

### Atribuição

## Natural Join

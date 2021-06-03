---
description: Enunciado e resolução dos exercícios do Laboratório 10 de IAED
path: /iaed/lab10
---

# Lab 10

```toc

```

## Exercício 1

Considere a seguinte função de dispersão:

```c
    int hash(int value, int M) {
    return value % M;
    }
```

Usando uma tabela de dispersão por encadeamento externo (external chaining) para guardar elementos com as seguintes chaves

    0, 32, 1, 35, 2, 33, 38, 10, 4, 3, 6,

e a função de dispersão definida em cima, e sabendo que `M = 10`, qual ou quais são as chaves dos elementos guardados na posição 3 da tabela (A primeira posição da tabela é a posição zero)?

:::details[Resolução]

```c
 0 % 10 = 0
32 % 10 = 2
 1 % 10 = 1
35 % 10 = 5
 2 % 10 = 2
33 % 10 = 3
38 % 10 = 8
10 % 10 = 0
 4 % 10 = 4
 3 % 10 = 3
 6 % 10 = 6

0: 10 0
1: 1
2: 2 32
3: 3 33 <--
4: 4
5: 35
6: 6
7:
8: 38
9:
```

Elementos: 3 e 33

:::

## Exercício 2

Qual o número total de conflitos (elementos adicionados a uma posição já contendo pelo menos um elemento)\
 quando o último valor da sequência `< 17, 7, 28, 12, 0, 25, 37, 11 >` é introduzido numa tabela de dispersão de dimensão 10 com resolução por encadeamento externo (external chaining),\
 inicialmente vazia, sabendo que a função de hash é `hash(k) = k mod 3`.

:::details[Resolução]

```c
17 % 3 = 2
 7 % 3 = 1
28 % 3 = 1
12 % 3 = 0
 0 % 3 = 0
25 % 3 = 1
37 % 3 = 1
11 % 3 = 2

0: 0 12
1: 37 25 28 7
2: 11 17
```

5 Conflitos

:::

## Exercício 3

Qual a posição em que é colocado o último valor da sequência `< 17, 7, 28, 12, 0, 25, 37, 11, 24 >`\
 ao serem introduzidos numa tabela de dispersão de dimensão `M = 13` por linear probing, inicialmente vazia,\
 sabendo que a função de hash é `hash(k) = k mod M`?

:::details[Resolução]

```c
17 % 13 = 4
 7 % 13 = 7
28 % 13 = 2
12 % 13 = 12
 0 % 13 = 0
25 % 13 = 12
37 % 13 = 11
11 % 13 = 11
24 % 13 = 11

 0: 0
 1: 25
 2: 28
 3: 11
 4: 17
 5: 24 <--
 6:
 7: 7
 8:
 9:
10:
11: 37
12: 12
```

Posição 5

:::

## Exercício 4

Considere uma tabela de dispersão com resolução por procura linear (linear probing),\
 que permite guardar números inteiros. A tabela tem dimensão `M = 10`,\
 e a respectiva função de dispersão é `hash(k) = k mod M`.\
 Indique, para a inserção na tabela da sequência `< 10, 18, 5, 25, 46, 101, 39, 17 >`,\
 qual será o índice da entrada da tabela em que é inserido o último elemento ?

:::details[Resolução]

```c
 10 % 10 = 0
 18 % 10 = 8
  5 % 10 = 5
 25 % 10 = 5
 46 % 10 = 6
101 % 10 = 1
 39 % 10 = 9
 17 % 10 = 7

0: 10
1: 101
2: 7 <--
3:
4:
5: 5
6: 25
7: 46
8: 8
9: 39
```

Posição 2

:::

## Exercício 5

Considere uma tabela de dispersão com resolução por dispersão dupla (double hashing),\
 com dimensão `M = 10`, em que as funções de dispersão são dadas por:

```c
    hashone(k) = k mod M
    hashtwo(k) = (1 + 3k)
```

Qual o índice da posição na tabela em que é colocado o último valor da sequência\
 `< 10, 12, 7, 9, 3, 11, 2 >` assumindo que a tabela se encontra inicialmente vazia ?
:::details[Resolução]

```c
hashone(10) = 0
hashone(12) = 2
hashone(7) = 7
hashone(9) = 9
hashone(3) = 3
hashone(11) = 1
hashone(2) = 2

hashtwo(2) = 7

0: 10
1: 11
2: 12
3: 3
4:
5:
6: 2 <--
7: 7
8:
9: 9
```

Posição 6

:::

## Exercício 6 (Opcional)

Considere a implementação de listas de strings do exercício 4 da aula passada.\
Implemente a função abaixo sobre as listas.

```c
    /* Checks if string e is in the list.*/
    /* Returns 1 if string e is in the list. Oterhwise, returns 0. */
    int lookup(node *head, const char *e);
```

Implemente um programa que lê um conjunto de palavras até terminar o ficheiro.\
 No final, indica o número de palavras e lista as palavras lidas (uma por linha e sem repetições).\
 Use a lista para guardar as palavras lidas.

:::details[Resolução]
// TODO, please contribute
:::

## Exercício 7 (Opcional)

Considere a seguinte a seguinte definição de tabela de dispersão e função de hashing:

```c
#define HBASE 31
#define TABDIM 101

typedef struct  {
  node* table[TABDIM];
  int nitem;
} symtab;

static unsigned hashvalue(char *word) {
    unsigned hval = 0;
    for(hval = 0; *word; )
        hval = *(word++) + HBASE * hval;
    return hval % TABDIM;
}
```

Usando as funções sobre listas definidas anteriormente, implemente as funções abaixo sobre tabelas de dispersão:

```c
    /* Creates and initializes a new symbol table. */
    symtab* createTable();

    /* Checks if string e is in the table. Returns 1 if string e is in the table. Oterhwise, returns 0. */
    int lookupTable(symtab *tab, char *e);

    /* Adds string e to the table. If e is already in the table, it does nothing. */
    void insertTable(symtab *tab, char *e);

    /* Prints the number of elements and the elements in the table, one per line. */
    void printTable(symtab *tab);
```

Resolva o problema anterior usando as operações sobre a tabela de dispersão definidas acima.

Utilizando o comando `time` é possível determinar, de forma aproximada, o tempo de execução de um programa.\
Efectue uma análise comparativa entre os tempos de execução dos dois programas implementados nos exercícios anteriores usando os ficheiros de texto disponibilizados.\
Compare também os tempos de execução para diferentes dimensões da tabela de dispersão.

:::details[Resolução]
// TODO, please contribute
:::

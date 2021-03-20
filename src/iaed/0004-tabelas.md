---
prev: false
description: Tabelas para Guardar Conjuntos de Elementos. Strings (Cadeias de Caracteres)
---

# Tabelas

[[toc]]

## Tabelas para Guardar Conjuntos de Elementos

### Tabelas Unidimensionais (Vectores)

$$
\begin{array}{|c|c|c|c|}
\hline
tab[ 0] & tab[ 1] & ... & tab[ DIM\ -1]\\
\hline
\end{array}
$$

Uma tabela permite guardar vários elementos do mesmo tipo.

- Inteiros, reais, caracteres

`int tab[DIM];` cria uma tabela `tab` de tamanho `DIM` que armazena inteiros.

Para acesar o valor da tabela na posicao `i`

- `tab[i]`

Para atribuir um valor à tabela na posição `i`

- `tab[i] = 10;`

O primeiro indíce é o `0` e o último índice é o `DIM - 1`

::: warning AVISO
Quando a tabela é criada, os valores que esta guarda não são inicializadas a 0, têm valores pseudo-aleatórios.
Para defini-las a 0, faz-se um loop atribuindo a cada posição da tabela o valor 0.
:::

<<< @/src/iaed/assets/0004-vect.c

### Tabelas Bidimensionais (Matrizes)

Uma tabela permite guardar vários elementos do mesmo tipo.
Assim também podemos guardar tabelas dentro de tabelas.

`char tab[DIM1][DIM2];` cria uma tabela `tab` de tamanho `DIM1` que armazena tabelas de tamanho `DIM2` que armazena caracteres.

Para acesar o valor da tabela `i` na posição `j`

- `tab[i][j]`

Para atribuir um valor à tabela `i` na posição `j`

- `tab[i][j] = 10;`

## Strings (Cadeias de Caracteres)

### Leitura de Valores do Standard Input

Podemos guardar caracteres em tabelas (Vetores).

Em C uma cadeia de caracteres acaba com `\0` .

Cadeia de caracteres "hello\n" tem caracteres
`h`, `e`, `l`, `l`, `o`, `\n` e `\0`

A função `printf` espera strings neste formato.

Para se ler ou escrever strings usa-se `%s`

Os Vetores são copiados posição a posição!

<<< @/src/iaed/assets/0004-copia-str.c

### Leitura de Strings com o Scanf

<<< @/src/iaed/assets/0004-scanf.c

O scanf permite ler uma string através da formatação `%s`
A leitura é feita até encontrar um "whitespace" (`" "`, `\n`, `\t`, etc)
O scanf automaticamente insere `\0` no final da leitura.
O comando `fgets` permite ler linhas inteiras.

### String.h

Ao escrever `#include <string.h>` passamos a ter acesso a um conjunto razoável de funções para
manipulação de strings.
Exemplos úteis:

- `strcmp` (compara strings)
- `strcpy` (copia strings)
- `strdup` (duplica uma string)
- `strlen` (devolve o tamanho da string dada como argumento)
- entre outros.

::: tip
O Comando `man` permite ver o que as funções fazem.
:::

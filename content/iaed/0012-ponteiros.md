---
title: Ponteiros e Tabelas
description: Ponteiros e Endereços. Ponteiros e Tabelas.
path: /iaed/ponteiros
type: content
---

# Ponteiros e Tabelas

```toc

```

## Ponteiros e Endereços

:::info[Ponteiro são Enderenços de Memória]
Na memória do computador, cada posição é referenciada por um [**endereço**](color:orange), atribuído de forma sequencial. Posições adjacentes têm, assim, endereços consecutivos. Um ponteiro corresponde a uma variável que contém um endereço de outra variável.
:::

`embed:assets/0012-ex.c`

Na declaração de um ponteiro temos de indicar ao compilador para
que tipo de variável estamos a endereçar (tal como no resto das variáveis "normais"):

`embed:assets/0012-def.c`

### Operador &

O endereço de uma variável é obtido através do operador `&`. Podemos, aqui, olhar para o porquê de usarmos o operador `&` em `scanf`'s: o `scanf` guarda o valor lido do `stdin` no endereço da variável indicada.

`embed:assets/0012-operador.c`

### Operador \*

O operador `*` permite aceder ao conteúdo de uma posição de memória endereçada pelo ponteiro (i.e., o conteúdo para onde um ponteiro “aponta”). O valor guardado num determinado endereço é dado pelo operador `*`.

`embed:assets/0012-2operador.c`

`embed:assets/0012-uso.c`

O próprio [**valor de retorno de uma função**](color:green) pode ser um ponteiro - `int* xpto()` é uma função possível, onde retornamos um ponteiro para inteiro. Argumentos de funções também podem, claro, ser ponteiros (como em `int abcd(char *a, int *b)`).

### Passagem de Parâmetros para Funções

Por definição, a passagem de variáveis como argumento de funções em C é feita por valor, não referência: se queremos que as alterações realizadas a uma variável dentro de uma função sejam visíveis **fora** da mesma, temos de a passar como ponteiro.

`embed:assets/0012-swap.c`

### Ponteiro Nulo

`NULL` é um ponteiro especial, utilizado para representar o endereço 0 (`int *ptr = NULL`). Está definido na _standard library_ de C, `stdlib`, sendo preciso incluí-la no nosso código para utilizar esta ponteiro. Utilizamo-lo para indicar situações especiais: considerando uma árvore binária, por exemplo, `NULL` pode ser utilizado como que significando "este pai não tem este filho", por exemplo.

## Ponteiros e Tabelas

### Aritmética

Ponteiros têm uma aritmética própria - é possível realizar somas e subtrações, respetivamente `+` e `-`, com ponteiros.

`embed:assets/0012-arit.c`

### Declarações

A declaração `int *p1;` declara o mesmo que `int p2[]` - um vetor de inteiros. `p1`, contudo, poderá ser alterado, enquanto que `p2` não pode.

A declaração `int p3[100];` declara, por exemplo, uma tabela com 100 inteiros e aloca a quantidade necessária de memória.

A declaração `char *text;` não aloca qualquer memória

- no entanto `char *text = "ola";` aloca

Qual a diferença entre as duas declarações seguintes ?

`char t1[] = "ola";`

`char *t2 = "ola";`

Ambas alocam 4 bytes e copiam para essa posição de
memória\
a sequência de caracteres `'o','l','a','\0'`

- No caso `t1` é possível modificar o conteúdo da memória
  alocada
- Não é possível alterar o valor de `t1`, ou seja não é possível
  pôr `t1` a endereçar outra posição de memória
- É possível alterar o valor de `t2`

`embed:assets/0012-arrays.c`

:::danger

Ao fazer

`int *a;`

apenas estamos a reservar memória para 1 endereço de
memória e não para um inteiro.

- Por esta razão, não devemos inicializar o conteúdo de um
  ponteiro sem que saibamos exactamente onde ele está a
  escrever.

Evitar isto!!!

`int *a;`

`*a=12; `

É possível ter ponteiros para funções,
mas o professor desencoraja a usar pois é algo um pouco complexo.
Se quiserem ver como funciona vejam os slides.

:::

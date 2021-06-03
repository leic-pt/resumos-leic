---
description: Ponteiros e Endereços. Ponteiros e Tabelas.
path: /iaed/ponteiros
---

# Ponteiros e Tabelas

```toc

```

## Ponteiros e Endereços

### Ponteiro É um Enderenço de Memória

- Na memória do computador cada posição é
  referenciada por um endereço, atribuído de forma
  sequencial
- Posições adjacentes têm endereços consecutivos
- Um ponteiro é uma variável que contém um endereço
  de outra variável.

<<< @/src/iaed/assets/0012-ex.c

Na declaração de um ponteiro temos de indicar ao compilador para
que tipo de variável estamos a endereçar.

<<< @/src/iaed/assets/0012-def.c

### Operador &

- O endereço de uma variável é obtido através do
  operador `&`

<<< @/src/iaed/assets/0012-operador.c

### Operador \*

- O operador `*` permite aceder ao conteúdo de uma posição
  de memória endereçada pelo ponteiro
  (i.e., o conteúdo para onde um ponteiro “aponta”).

- O valor guardado num determinado endereço é dado
  pelo operador \*

<<< @/src/iaed/assets/0012-2operador.c

<<< @/src/iaed/assets/0012-uso.c

- Declarção do Ponteiro

`int *x;`

x é um ponteiro para um inteiro

- Conteúdo da posição de memória apontada pelo ponteiro

`*x = 4;`

(o valor 4 é atribuído ao conteúdo da posição de memória apontada
por `x`)

- O valor de retorno de uma função pode ser um ponteiro

`int* xpto();`

- O argumento de uma função pode ser um ponteiro

`int abcd(char *a, int *b);`

### Passagem de Parâmetros para Funções

Para mudar valores para fora de funções temos de usar ponteiros.

<<< @/src/iaed/assets/0012-swap.c

### Ponteiro Nulo

Ponteiro especial para representar o endereço 0

`int *ptr = NULL;`

- Definido em stdlib.h
  - Necessário `#include <stdlib.h>`
- Utilizado para indicar situações especiais
- Na realidade `NULL == 0`

## Ponteiros e Tabelas

### Aritemética

Os apontadores têm uma aritmética própria.

É possível efectuar `+` e `-` com ponteiros.

<<< @/src/iaed/assets/0012-arit.c

### Declarações

- A declaração `int *p1;` declara o mesmo que `int p2[]`;

  - `p1` pode ser alterado
  - `p2` não pode ser alterado
  - `int p2[];` só pode ser utilizado em certos casos

- A declaração `int p3[100];` declara uma tabela com 100
  inteiros e \
  aloca memória na quantidade necessária

  - `p3` não pode ser alterado

- A declaração `char *text;` não aloca qualquer memória

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

<<< @/src/iaed/assets/0012-arrays.c

::: danger

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
Slides:

- [Aula 13 e 14](https://drive.google.com/file/d/1m0cEgM5rSKWW0A0KhZ_TczvZpp-0wbzy/view?usp=sharing)

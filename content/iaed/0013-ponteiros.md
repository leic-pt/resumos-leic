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

```c
int x = 10;
int *px = &x; /* px inicializado com o endereço de x */
```

Na declaração de um ponteiro temos de indicar ao compilador para
que tipo de variável estamos a endereçar (tal como no resto das variáveis "normais"):

```c
// <tipo> *<nome da variável>;

char *cptr;   /* ponteiro para caracter */
int *iptr;    /* ponteiro para inteiro */
double *dptr; /* ponteiro para double */

/* apenas a é um ponteiro */
int *a, b;
/* c e d são ponteiros para floats */
float *c, *d;
```

### Operador &

O endereço de uma variável é obtido através do operador `&`. Podemos, aqui, olhar para o porquê de usarmos o operador `&` em `scanf`'s: o `scanf` guarda o valor lido do `stdin` no endereço da variável indicada.

```c
int a = 43; /* um inteiro inicializado a 43 */
int *iptr = &a;
/* declaro um ponteiro para inteiro e esse ponteiro passa
a guardar o endereço de a */
```

### Operador \*

O operador `*` permite aceder ao conteúdo de uma posição de memória endereçada pelo ponteiro (i.e., o conteúdo para onde um ponteiro “aponta”). O valor guardado num determinado endereço é dado pelo operador `*`.

```c
int a = 43; /* um inteiro inicializado a 43 */
int *iptr;  /* ponteiro para inteiro */
int b;
iptr = &a; /* iptr passa a guardar o endereço de a */
b = *iptr; /* b passa a guardar */
           /* o valor apontado por iptr (43) */
```

```c
#include <stdio.h>
int main() {
    int y, x = 1;
    int *px;

    px = &x; /* px guarda o endereço de x */
    y = *px; /* y toma o valor gurdado no endereco de memoria px */
    *px = 0; /* alteramos o valor de x para 0 */
    printf("%d %d\n", x, y);
    /* output: 0 1 */
    return 0;
}
```

O próprio [**valor de retorno de uma função**](color:green) pode ser um ponteiro - `int* xpto()` é uma função possível, onde retornamos um ponteiro para inteiro. Argumentos de funções também podem, claro, ser ponteiros (como em `int abcd(char *a, int *b)`).

### Passagem de Parâmetros para Funções

Por definição, a passagem de variáveis como argumento de funções em C é feita por valor, não referência: se queremos que as alterações realizadas a uma variável dentro de uma função sejam visíveis **fora** da mesma, temos de a passar como ponteiro.

```c
void swap(int a, int b) { /* não existe troca fora da função */
    int aux;
    aux = a;
    a = b;
    b = aux;
}

// vs.

void swap(int *a, int *b) { /* existe troca dentro e fora da função */
    int aux;
    aux = *a;
    *a = *b;
    *b = aux;
}
```

### Ponteiro Nulo

`NULL` é um ponteiro especial, utilizado para representar o endereço 0 (`int *ptr = NULL`). Está definido na _standard library_ de C, `stdlib`, sendo preciso incluí-la no nosso código para utilizar esta ponteiro. Utilizamo-lo para indicar situações especiais: considerando uma árvore binária, por exemplo, `NULL` pode ser utilizado como que significando "este pai não tem este filho", por exemplo.

## Ponteiros e Tabelas

### Aritmética

Ponteiros têm uma aritmética própria - é possível realizar somas e subtrações, respetivamente `+` e `-`, com ponteiros.

```c
#include <stdio.h>
int main() {
    int a[6] = {1, 2, 7, 0, 11, 6};
    int *pa = a;
    printf("%d %d %d\n", a[2], *(a + 2), *(pa + 2));
    /* O output vai ser 7 7 7 */
    /* Logo as expressões acima são equivalentes */
    return 0;
}
```

### Declarações

A declaração `int *p1;` declara o mesmo que `int p2[]` - um vetor de inteiros. `p1`, contudo, poderá ser alterado, enquanto que `p2` não pode. Aqui, a noção de **alteração** pode não ser clara: podemos alterar elementos de `p2` (por exemplo,`p2[2] = 3;` é possível), mas não podemos dizer "ok, `p2 = <vector diferente>;`. Esta noção tornará-se-á porventura mais clara na próxima página, quando falarmos de alocação dinâmica de memória (e das limitações da alocação estática, como a de `p2`).

Pegando num exemplo prático, e seguindo a lógica das diferenças entre `p1` e `p2`, qual será a diferença entre as duas declarações seguintes?

- `char t1[] = "ola";`

- `char *t2 = "ola";`

Ambas alocam 4 bytes e copiam para essa posição de memória a sequência de caracteres `'o','l','a','\0'`. Contudo, em `t1` é possível modificar o **conteúdo** da memória alocada - fazer `t1[0] = 'c'`, por exemplo - mas não é possível alterar o valor de `t1` (não é possível pôr `t1` a endereçar outra posição de memória). Podemos, claro, alterar o valor de `t2`.

```c
// Alternativamente, poderíamos escrever o argumento como int *vec
void read_vector(int vec[], int size) {
    int i;
    for (i = 0; i < size; i++) {
        scanf('%d', &vec[i]);
        // Alternativamente, poderíamos usar
        // scanf("%d", vec + i);
    }
}
```

---
title: Alocação Dinâmica de Memória
description: Alocação Estática. Funções. Ponteiros para Estruturas.
path: /iaed/alocacao-dinamica-memoria
type: content
---

# Alocação Dinâmica de Memória

```toc

```

Até agora, apenas trabalhámos com alocação **estática** de memória: `int v[100]` será o exemplo mais básico, onde alocamos 100 blocos de memória que serão mantidos durante o _scope_ da variável. Não podemos libertar a memória dentro do _scope_, nem a podemos utilizar fora dele. Seria, contudo, interessante ter alocações dinâmicas, onde a memória podia ser livremente alocada e libertada durante a execução do programa.

C dá-nos uma coleção interessante de funções que podemos utilizar para este propósito.

## Funções e Operadores Úteis

:::warning[]

As funções apresentadas nesta sub-secção estão presentes na `stdlib`, via `#include <stdlib.h>`.

:::

### malloc

`void *malloc(size_t size);` ([man page `malloc`](https://linux.die.net/man/3/malloc))

O `malloc` vai ser um dos vossos piores horrores (e um dos vossos melhores amigos) durante a cadeira de IAED (bem, e em qualquer cadeira em que trabalhem com C). Recebe como argumento o número de bytes a alocar, do tipo `size_t`, e devolve um ponteiro para o primeiro byte do bloco de memória alocada.

O tipo de dados associado à função `malloc` pode parecer estranho, julgo até que ainda nem foi abordado nesta página: `void *` não é mais que um ponteiro para um tipo não especificado, permitindo utilização com qualquer tipo de dados. É particularmente útil aqui, para que posteriormente possamos fazer a conversão para o tipo pretendido, via _casting_.

```c
int *vec;
vec = (int *) malloc(100 * sizeof(int));
```

Na função acima, alocámos `100 * sizeof(int)` bytes para o vetor de inteiros `vec`.

Note-se a utilização de `sizeof(int)`: o tipo inteiro não cabe num byte, pelo que se queremos guardar $100$ inteiros temos de alocar a quantidade de memória necessária para esse efeito. **Regra geral**, utilizamos sempre a notação `sizeof<tipo>` em operações `malloc`, **mesmo quando trabalhando com `char`s** (cujo tamanho é $1$ byte). Utilizar esta notação dá uma maior consistência ao nosso código, tornando mais fácil a identificação de _bugs_ e a leitura do código.[^1]

### free

`void free(void *ptr);` ([man page `free`](https://linux.die.net/man/3/free))

Para libertar memória alocada através de um `malloc`, utilizamos a função `free` - passamos o ponteiro para a primeira posição do bloco a libertar, e ela trata do resto (sem retornar nada).

Se quiséssemos libertar a memória alocada a `vec` no trecho de código acima, bastava fazer `free(vec)`!

```c
#include <stdio.h>
#include <stdlib.h>
int *create_empty_int_vector(int size) {
    int *vec, i;
    vec = (int *) malloc(size * sizeof(int));
    for (i = 0; i < size; i++) {
        vec[i] = 0;
    }
    return vec;
}

int main() {
    int *vec, t;

    puts("Introduza o numero de elementos\n");
    scanf("%d", &t);
    vec = create_empty_int_vector(t);

    /* Fazer qualquer coisa com o vetor */

    free(vec);

    puts("Introduza o numero de elementos\n");
    scanf("%d", &t);
    vec = create_empty_int_vector(t);

    /* Fazer qualquer coisa com o vetor */

    free(vec);
    return 0;
}
```

:::danger[]

Cada `malloc` precisa do respetivo `free`!

Este vai ser um aviso feito várias vezes ao longo da cadeira, tanto pela docência como por qualquer colega mais velho que vos aconselhe (ou até mesmo pelo `valgrind`, se lhe perguntarem com jeitinho).

Toda a memória alocada tem de ser libertada até ao final do programa, sob pena de ter os malfadados **_memory leaks_**, e a vida só é bela caso para $n$ alocações de memória o `valgrind` vos diga que também houve $n$ `free`s.

:::

### realloc

`void *realloc(void *ptr, size_t size);` ([man page `realloc`](https://linux.die.net/man/3/realloc))

Esta função recebe um ponteiro, `ptr`, para o bloco de memória antigo e a dimensão, `size`, do novo bloco de memória a alocar; aloca-o, e devolve um ponteiro para o novo bloco de memória, copiando também os valores do bloco antigo para o novo.

Caso o tamanho do novo bloco seja menor que o anterior, a cópia vai ser realizada até a memória se esgotar; caso contrário, todo o conteúdo é copiado, com o resto a ficar por inicializar.

Se quiséssemos que o nosso antigo `vec`, com capacidade para $100$ elementos passasse a ter capacidade para $250$, recorríamos à operação `vec = (int*) realloc(vec, sizeof(int) * 250);`.

### calloc

`void *calloc(size_t nmemb, size_t size);` ([man page `calloc`](https://linux.die.net/man/3/calloc))

`calloc` tem um objetivo semelhante ao do `malloc`: alocação dinâmica de memória. Funciona, contudo, de maneira um pouco diferente:

- `calloc` inicializa todo o bloco alocado a zero, enquanto que `malloc` não faz qualquer inicialização "total";

- também pela razão supra-mencionada, o `malloc` é **mais rápido** que o `calloc`;

Retornam ambas o endereço inicial da memória alocada.

Reservar memória para um bloco de 100 inteiros, via `calloc`, seria feito tal que: `vec = (int*) calloc(100, sizeof(int));`.

## Ponteiros para Estruturas

Consideremos a estrutura `Point` como apresentada de seguida:

```c
typedef struct point {
    double x;
    double y;
} Point
```

Ora, temos duas maneiras de declarar variáveis deste tipo: variáveis "regulares" e ponteiros, claro.

Manipular as primeiras é bastante simples: recorremos à sintaxe `<variavel>.<membro>`.

```c
Point center;

center.x = 12.3;
center.y = 5.2;
```

Podemos, contudo, optar por usar ponteiros, com um par de maneiras de as manipular:

```c
Point *center_p = &center;

/* Please don't use this one */
(*center_p).x = 12.3;
(*center_p).y = 5.2;

/* Use this! */
center_p->x = 12.3;
center_p->y = 5.2;
```

De notar que a declaração regular de um ponteiro **não aloca memória**: se o quisermos fazer, temos de o pedir explicitamente, através de `malloc` ou similar: `center_p = (Point*) malloc(sizeof(Point));`.

A distinção entre variáveis regulares e ponteiros ao falar de estruturas pode parecer inocente, mas tem uma motivação maior por detrás da mesma. Ao passar variáveis como argumentos de uma função, estas são **passadas por valor**, sendo portanto copiadas dentro do _scope_ da função em questão, com possíveis alterações às variáveis fora deste _scope_.

Ora, mas muitas vezes trabalhamos com estruturas grandes, com vários campos: não será sensato estar constantemente a copiar todos os campos destas estruturas uma e outra vez, até porque acabamos por perder eficiência desta forma. Recorremos, nestas situações, a **ponteiros**: passar um ponteiro como argumento de uma função leva à **passagem por referência** da variável, e assim a variável vista pela função é ela própria, sem qualquer "cópia"; mais ainda, todas as alterações feitas na função são mantidas fora dela!

Por fim, resta notar que podemos **reservar memória numa função**, sem fazer o respetivo `free` dentro da mesma: o que interessa é que no final do programa tudo tenha sido libertado, mas podemos usar a memória "livremente" dentro dele. Temos, contudo, de ter muito cuidado com estas operações, tentando evitar ao máximo perder endereços para onde memória foi alocada: cada endereço perdido representa um [**_memory leak_**](color:red).

```c
Point* sum_points(Point *p1, Point *p2) {
  Point *res;
  // Podemos reservar memória e retornar o pointer para a memória alocada
  res = (Point *) malloc(sizeof(Point));
  res->x = p1->x + p2->x;
  res->y = p1->y + p2->y;
  return res;
}
```

[^1]:
    Cada plataforma (x86, x86_64, Apple M1, etc) pode ter
    [tamanhos diferentes para cada tipo de variável](https://en.wikipedia.org/wiki/Sizeof#Purpose).
    Além de tornar o nosso código mais fácil de ler,
    utilizar `sizeof(<tipo>)` garante que o nosso código funciona em qualquer plataforma.

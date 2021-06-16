---
title: Lab 08
description: Enunciado e resolução dos exercícios do Laboratório 8 de IAED
path: /iaed/lab08
type: labsProg
---

# Lab 08

```toc

```

## Exercício 1

Implemente um programa em C que leia uma palavra do standard input e que imprima todos os sufixos dessa palavra.

O programa deverá imprimir um sufixo por linha começando do mais comprido para o menos comprido.

Por exemplo, para o input `abc` o output deve ser:

```
abc
bc
c
```

Poderá supor que a palavra nunca terá mais de 1000 caracteres.

Dica: Sugere-se utilização de aritmética de ponteiros, \
para poder avançar com um ponteiro `p` representando os diferentes sufixos e\
 passar esse ponteiro `p` como parâmetro para a função `printf`.

:::details[Resolução]
<code-group>
<code-block
title="Diogo Correia">
<<< @/src/iaed/labs/lab08/ex01_dc.c
</code-block>

</code-group>
:::

## Exercício 2

Implemente um programa em C que leia uma sequência de palavras do standard input e imprima as mesmas na ordem inversa. \
O programa deverá imprimir uma palavra por linha começando pela última palavra.

Por exemplo, para o input abcd foo bar o output deve ser:

```
bar
foo
abcd
```

Poderá supor que a palavra nunca terá mais de 1000 caracteres,\
que não aparacem mais que 10000 palavras e\
que cada palavra pode ser lida com `scanf("%s", s)`.

Dica: Guarde as palavras como um vector de strings.\
 Primeiro leia a palavra dentro de uma string com um tamanho fixo e só depois aloca a string com o tamanho adequado.

Dica: A chamada `scanf("%s", buffer)` devolve 1 se e só se a palavra foi lida com sucesso,

Ex: a leitura pode terminar se o valor devolvido não estiver `1`.

:::details[Resolução]
<code-group>
<code-block
title="Diogo Correia">
<<< @/src/iaed/labs/lab08/ex02_dc.c
</code-block>

</code-group>

:::

## Exercício 3

Desenvolva em C um conjunto de funções que \
permita manipular uma pilha (stack) com realocação automática.\
 A pilha será representada com a seguinte estrutura:

```c
typedef struct {
    int *v;     /* contents of the stack */
    int cap;    /* capacity of v, i.e. how many elements can fit in v */
    int sz;     /* number of elements currently stored in v */
} stack;
```

As funções a desenvolver são as seguintes:

```c
stack* build();                 /* builds a new empty stack with initial capacity 4 */
void push(stack * s, int e);    /* pushes integer e on top of the stack  (reallocate v if necessary) */
int top(stack * s);             /* returns top element in the stack */
int pop(stack * s);             /* removes top element from the stack and return it
                                    (not necessary to reallocate v) */
int is_empty(stack * s);        /* returns 1 iff s represents the empty stack, returns 0 otherwise */
void destroy(stack * s);        /* frees the memory associated with the stack */
```

Nota: Não há testes automáticos para este exercício.

Nota: Poderá começar por considerar uma implementação sem a realocação automática.

:::details[Resolução]
<code-group>
<code-block
title="Diogo Correia">
<<< @/src/iaed/labs/lab08/ex03_dc.c
</code-block>

</code-group>
:::

## Exercício 4 (Facultativo)

Implemente em C um programa que leia uma linha do standard input e\
 verifica se os parênteses estão bem formatados,
\ considerando os pares de parênteses `()`, `[]`, `{}`.

Por exemplo, a string `{[a]b(c)}()[]` é uma string bem formatada, enquanto a string `(()` não o é. \
Se o input for bem formatado,\
 o programa deverá imprimir `yes`, e no caso contrário deverá imprimir `no`.

Dica: Podem aproveitar o `ex03` para resolver este exercício.\
 Quando encontrarem um parêntesis a abrir, coloque-o no stack;\
 quando encontrar um parêntesis a fechar verifica se o topo é um "match" e retira-o da pilha.\
 No final a stack deverá ficar vazio.

Dica: Não é necessário guardar o input; é suficiente usar o stack.

:::details[Resolução]
<code-group>
<code-block
title="Diogo Correia">
<<< @/src/iaed/labs/lab08/ex04_dc.c
</code-block>

</code-group>
:::

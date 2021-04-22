---
description: Enunciado e resolução dos exercícios do Laboratório 7 de IAED
---

# Lab 08

[[toc]]

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

::: details Resolução

Resposta: `a = {9,6,5,7,4,10,16,18,14,13,12}`

{green}(É possível ver o algoritmo em execução ao executar o código abaixo)

<code-group>
<code-block
title="Quick Sort">
<<< @/src/iaed/labs/lab07/quicksort.c

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

::: details Resolução

Resposta: `a = {13,11,14,9,12,15,17,19,20,16}`

:::

## Exercício 3

Desenvolva em C um conjunto de funções que \
permita manipular uma pilha (stack) com realocação automática.\
 A pilha será representada com a seguinte estrutura:

```
typedef struct {
    int *v;     /* contents of the stack */
    int cap;    /* capacity of v, i.e. how many elements can fit in v */
    int sz;     /* number of elements currently stored in v */
} stack;
```

As funções a desenvolver são as seguintes:

```
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

::: details Resposta

Resposta: `<40, 15, 18, 13, 11, 14, 16>`

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

::: details Resolução

Resposta: `a = {17,15,16,13,12,14,11,9,19,20}`

Transformada em heap : `a = {20,19,17,13,15,14,16,9,11,12}`

1ª iteração: `a = {19,15,17,13,12,14,16,9,11,20}`

2ª iteração: `a = {17,15,16,13,12,14,11,9,19,20}`

{green}(É possível ver o algoritmo em execução ao executar o código abaixo)

<code-group>
<code-block
title="Heap Sort">
<<< @/src/iaed/labs/lab07/heapsort.c

</code-block>
</code-group>

:::

## Exercício 5

Qual o conteúdo do seguinte vector `<25, 19, 23, 15, 18, 16, 21, 12>` depois de os dois primeiros elementos (i.e. os dois maiores) terem sido ordenados, utilizando o algoritmo de ordenação heapsort?
::: details Resposta

1ª iteração: `a = {23,19,21,15,18,16,12,25}`

2ª iteração: `a = {23, 19, 16, 15, 18, 12, 21, 25}`

:::

## Exercício 6

- (Radix LSD) Considere a aplicação do algoritmo radix sort LSD, em que cada passo os elementos são ordenados considerando um dígito, ao seguinte vector:\
  `<48372, 62309, 83861, 91874, 18913, 33829, 47812, 95954, 52377, 22394, 56108, 60991>`

Qual é o terceiro número da sequência, após o algoritmo ter considerado três digitos?

::: details Resposta

Depois de ordenado até 3 digítos:

`<56108, 62309, 48372, 52377, 22394, 47512, 33824, 83861, 41874, 18913, 45954, 60991>`

Logo o terceiro número é 48372.

:::

## Exercício 7

- (Radix MSD) Considere o seguinte vector de números inteiros sem sinal de 6 bits:\
  `<32, 2, 34, 9, 6, 1, 20, 18, 10>`

Qual o conteúdo do vector após os primeiros dois passos do algoritmo de ordenação radix sort MSD, em que em cada passo os elementos são ordenados considerando 2 bits?

Nota: considere que o algoritmo é baseado numa versão estável do algoritmo counting sort.

O algoritmo deve apenas processar os 6 bits menos significativos de cada número, independentemente dos números poderem ser guardados em palavras com maior número de bits.

::: details Resposta

Depois de dois passos:

`<2,1,6,9,10,18,20,32,34>`

:::

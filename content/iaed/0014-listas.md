---
title: Estruturas Auto-Referenciadas e Listas
description: Tabelas e Vetores.
path: /iaed/listas
type: content
---

# Estruturas Auto-Referenciadas e Listas

```toc

```

## Tabelas e Vetores

- Colecção de items

  - Inteiros, reais, caracteres
  - Estruturas
  - Tabelas, Ponteiros

- Guardados em posições consecutivas de memória
- Programador é responsável por respeitar limites

- Em c tabelas podem ser
  - De dimensão fixa
  - Alocadas dinamicamente

```c
#define N 100
int tab1[N];
int *tab2 = (int *) malloc(N*sizeof(int));
```

- Acesso alternativo a tabelas

```c
x = tab2[i];
y = *(tab2+i);
```

- Vantagens

  - Manipulação simples
  - Facilidade de acesso ao n-ésimo elemento

- Desvantagens
  - Tamanho limitado
  - Necessidade de realocar e copiar todos os elementos se desejar aumentar dimensão da tabela
  - Desperdicio de memória

## Listas

### Estrutura Auto-Referenciada

- Estrutura em que um campo da estrutura é um
  apontador para outra estrutura do mesmo tipo

```c
typedef struct ponto {
  double x;
  double y;
  struct ponto *origem;
} Ponto;
```

- As estruturas auto-referenciadas permitem criar
  estruturas de dados dinâmicas, utilizando ponteiros:

  - Listas (simplesmente e duplamente ligadas)
  - Árvores

### Lista Simplesmente Ligada

![ligada](./assets/0014-listaligada.png#dark=1)

- Conjunto de nós

- Cada nó contém
  - Informação útil
  - Ponteiro para o próximo nó

```c
struct node {
  int valor;
  struct node *next;
};

struct node {
  char *nome;
  struct node *next;
};
```

- Vantagens
  - Tamanho ilimitado (limite na memória disponível na máquina)
  - Alocação de memória apenas para os elementos que queremos
    representar
  - Inserção e remoção simples
- Desvantagens
  - Mais difícil o acesso ao n-ésimo elemento

### Manipulação de Listas

- Inserção na Lista de um elemento *t depois de *x

```c
t->next = x->next;
x->next = t;
```

- Remoção do elemento depois de x da Lista

```c
t = x->next;
x->next = t->next;
free(t);
```

### Exemplos

Para obter o número de elementos de uma lista, temos de percorrê-la.

```c
int length(struct node* head) {
    int count = 0;
    struct node *x = head;
    while(x != NULL) {
        count++;
        x = x->next;
    }
    return count;
}
```

Pilha Dinâmica de Inteiros

Nunca podemos perder o ponteiro para o topo da pilha.

`embed:assets/0014-pilha.c`

### Lista Duplamente Ligada

- Cada nó contém
  - Informação útil
  - Ponteiro para o próximo nó e para o nó anterior

```c
struct node {
    Item item;
    struct node *prev, *next;
};
```

### Utilização do typedef

- É usual utilizar typedef na manipulação de estruturas
  auto-referenciadas

```c
struct node{
  int value;
  struct node *next;
};
typedef struct node Node;
typedef struct node* link;

int length(link head) {
  int count=0;
  link x;
  for(x = head; x != NULL; x = x->next)
      count++;
  return count;
}
```

### Criar Lista com Argumentos da Linha de Comandos

`$ ./myprogram bolo1 bolo2 bolo3 bolo4 bolo5`

`embed:assets/0014-arg.c`

### Funções de uma Lista

![ligada](./assets/0014-listaligada.png#dark=1)

`embed:assets/0014-lista.c`

Encontram imagens de como isto funciona visualmente!

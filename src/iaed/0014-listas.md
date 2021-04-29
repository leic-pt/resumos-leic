---
description: Tabelas e Vetores.
---

# Estruturas Auto-Referenciadas e Listas

[[toc]]

## Tabelas e Vetores

- Colecção de items

  - Inteiros, reais, caracteres
  - Estruturas
  - Tabelas, Ponteiros

- Guardados em posições consecutivas de memória
- Programador é responsável por respeitar limites

- Em C tabelas podem ser
  - De dimensão fixa
  - Alocadas dinamicamente

```C
#define N 100
int tab1[N];
int *tab2 = (int *) malloc(N*sizeof(int));
```

- Acesso alternativo a tabelas

```C
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

```C
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

<img src="./assets/0014-listaligada.png" alt="ligada" class="invert-dark2">

- Conjunto de nós

- Cada nó contém
  - Informação útil
  - Ponteiro para o próximo nó

```C
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

```C
t->next = x->next;
x->next = t;
```

- Remoção do elemento depois de x da Lista

```C
t = x->next;
x->next = t->next;
free(t);
```

### Exemplos

Para obter o número de elementos de uma lista, temos de percorrê-la.

```C
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

<<< @/src/iaed/assets/0014-pilha.c

### Lista Duplamente Ligada

- Cada nó contém
  - Informação útil
  - Ponteiro para o próximo nó e para o nó anterior

```C
struct node {
    Item item;
    struct node *prev, *next;
};
```

### Utilização do typedef

- É usual utilizar typedef na manipulação de estruturas
  auto-referenciadas

```C
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

<<< @/src/iaed/assets/0014-arg.c

### Funções de uma Lista

<img src="./assets/0014-listaligada.png" alt="ligada" class="invert-dark2">

<<< @/src/iaed/assets/0014-lista.c

Encontram imagens de como isto funciona visualmente!

Slides:

- [Aula 15 e 16](https://drive.google.com/file/d/1KMreQsdbgRuJX7hYuXrWx5WpTfTUw6Ce/view?usp=sharing)

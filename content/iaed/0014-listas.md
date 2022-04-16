---
title: Estruturas Auto-Referenciadas e Listas
description: Tabelas e Vetores.
path: /iaed/listas
type: content
---

# Estruturas Auto-Referenciadas e Listas

```toc

```

## Arrays

Em C, a estrutura mais usual (e _built-in_) para guardar coleções de itens são vetores/_arrays_. São estruturas bastante versáteis: permitem guardar desde tipos de dados _default_ como inteiros e caracteres como tipos mais sofisticados, estruturas, ou até mesmo outros vetores. São também estruturas que permitem acesso bastante eficiente (em tempo constante, até) ao seu _n-ésimo_ elemento.

```c
#define N 100
// declaração de arrays
int tab1[N];
int *tab2 = (int *) malloc(N*sizeof(int));
// acesso a elementos de um array
x = tab2[i];
y = *(tab2+i);
```

Esta simplicidade, contudo, traz também alguns pormenores desagradáveis, principalmente quanto à maneira como vetores são guardados em memória: **são guardados de forma sequencial**, isto é, em posições consecutivas de memória. É por essa razão que, em C, _arrays_ têm de ter tamanho fixo, a não ser que sejam alocados dinamicamente (via `malloc`). Ora, ter vetores de tamanho fixo pode ser bastante chato, principalmente porque caso precisemos _mesmo_ que o vetor aumente de tamanho, já que não vamos fugir a ter de realocar memória e copiar todos os elementos de uma posição em memória para outra, processo este relativamente ineficiente.

Ora, mas ainda antes de C aparecer, já havia sido pensada uma estrutura de dados que combatia alguns dos problemas supra-mencionados: em [meados dos anos 50](https://en.wikipedia.org/wiki/Linked_list#History), um grupo de investigadores na **RAND Corporation** pensaram numa estrutura, as [**listas ligadas**](color:orange), que seria a estrutura de dados principal para a sua "_Information Processing Language_", IPL, utilizada por esta equipa em vários programas embrionários ligados à inteligência artificial.

## Listas

Antes de falar de listas, será interessante definir [**estrutura auto-referenciada**](color:green): uma estrutura em que um dos seus campos é um ponteiro para outra estrutura do mesmo tipo. No exemplo abaixo, podemos ver que a estrutura ponto tem um apontador para outro ponto, o seu "pai".

```c
typedef struct ponto {
  double x;
  double y;
  struct ponto *origem;
} Ponto;
```

Utilizamos estruturas deste tipo principalmente em **árvores** e **listas**, onde manter referências de nós quanto à sua posição relativa na árvore/lista é bastante importante.

### Lista Simplesmente Ligada

![Singly Liked List](./assets/0014-listaligada.png#dark=1)

As listas simplesmente ligadas (_singly linked lists_ em inglês) não são mais que uma maneira de organizar um conjunto de nós, onde cada nó contém, para além da respetiva informação útil (um valor, uma chave, etc.), um **ponteiro** para o próximo nó. Desta forma, tendo a **cabeça** da lista, podemos percorrer facilmente a lista completa, saltando de nó em nó recorrendo a ponteiros.

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

Comparada com _arrays_, tem a vantagem de ter tamanho ilimitado - não sendo guardada de forma sequencial, não há necessidade de reservar blocos contíguos de memória, sendo apenas preciso guardar os ponteiros (que podem estar num sítio qualquer). Mais ainda, a alocação de memória é feita exclusivamente para os elementos que queremos representar, não havendo portanto desperdício. A **inserção** e **remoção** de elementos não tem nada que saber:

- Se quisermos inserir um nó `t` após `x`, apenas precisamos de:

```c
t->next = x->next;
x->next = t;
```

- Remover o nó `t`, que vem a seguir de `x`, é igualmente simples:

```c
t = x->next;
x->next = t->next;
free(t);
```

Apresenta, contudo, uma desvantagem quanto aos _arrays_: é inegavelmente menos eficiente aceder ao _n-ésimo_ elemento numa lista ligada, já que na ausência da noção de indexação _built-in_ acabamos por ter de percorrer a lista para a recriar. Mais ainda, para saber o número de elementos de uma lista, das duas uma: ou vamos mantendo um **contador** global, contador este que vai sendo atualizado sempre que inserimos ou removemos um nó, ou vemo-nos obrigados a percorrê-la sempre que queremos saber o seu comprimento:

```c
int length(struct node* head) {
    int count = 0;
    struct node *x = head;
    while (x != NULL) {
        count++;
        x = x->next;
    }
    return count;
}
```

Temos ainda de ter em atenção que manter a cabeça destas listas é crucial: caso a percamos, perdemos a possibilidade de fazer uma procura completa por todos os nós da mesma.

:::details[Pilha de Inteiros]

Podemos implementar estruturas como pilhas e filas com base em listas ligadas:

`embed:assets/0014-pilha.c`

:::

### Lista Duplamente Ligada

Listas duplamente ligadas (_doubly linked lists_ em inglês) são **muito** semelhantes às listas simplesmente ligadas, contando contudo com uma pequena diferença (com repercussões muito interessantes): cada nó, para além de guardar a sua chave e o ponteiro para o nó seguinte, guarda também um ponteiro para o **nó anterior** - podemos, portanto, percorrer a lista para trás e para a frente partindo de qualquer nó.

```c
struct node {
    Item item;
    struct node *prev, *next;
};
```

[\*](color:yellow) Nota: em IAED, é usual utilizar `typedef`'s como `Node` e `link` para manipular estruturas auto-referenciadas. É uma notação algo controversa (a ausência do asterisco a indicar o ponteiro faz confusão a algumas pessoas), e não precisam de a usar necessariamente no vosso código, mas vai ser a que vai ser usada nesta e nas próximas secções.

```c
struct node {
  int value;
  struct node *next;
};

typedef struct node Node;
typedef struct node* link;

int length(link head) {
  int count=0;
  link x;
  for (x = head; x != NULL; x = x->next)
      count++;
  return count;
}
```

Abaixo seguem algumas implementações de funções clássicas utilizadas para manipular estas estruturas (retiradas dos slides da docência):

:::details[Funções]

`embed:assets/0014-lista.c`

:::

## Passar Argumentos através da Linha de Comandos

Geralmente, é nesta altura em IAED que se costuma abordar a passagem de argumentos aos nossos programas através da linha de comandos.

Possivelmente, ao longo da vossa (não muito) extensa jornada a trabalhar com C já se depararam com declarações da `main` que incluem dois argumentos: `int argc` e `char *argv[]`. Estes dois argumentos correspondem, respetivamente, ao **número** de _elementos_ passados como input na nossa _shell_ e ao conjunto dos mesmos. Podem ser, claro, omitidos caso não nos interesse receber argumentos dessa forma.

A título de exemplo, experimentem, com o seguinte programa, executá-lo através de `./program this is a test`:

```c
#include <stdio.h>

int main(int argc, char *argv[]) {
  printf("Received %d arguments via command line\n", argc);
  for (int i = 0; i < argc; i++) {
    printf("Currently looking at this argument: %s\n", argv[i]);
  }
  return 0;
}
```

Em princípio, a vossa interação teve este aspeto:

```
$ ./program this is a test
Received 5 arguments via command line
Currently looking at this argument: ./program
Currently looking at this argument: this
Currently looking at this argument: is
Currently looking at this argument: a
Currently looking at this argument: test
```

**A própria chamada `./program` pertence aos argumentos**, devendo portanto ter isso em atenção (os argumentos "relevantes" só começam a partir do índice $1$).

Podem, de seguida, ver uma aplicação mais prática da utilidade desta _feature_:

`embed:assets/0014-arg.c`

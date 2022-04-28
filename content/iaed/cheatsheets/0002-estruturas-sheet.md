---
title: Estruturas de Dados (Cheat Sheet)
description: Lista Simplesmente Ligada, Pilha (Stack), Hash Table e AVL
path: /iaed/cheatsheet/estruturas
type: cheatsheets
---

# Estruturas de Dados (Cheat Sheet)

```toc

```

:::warning[Uso em projetos e/ou avaliações]

Qualquer uso do código abaixo em projetos e/ou avaliações é da responsabilidade do aluno.
O código disponível nesta página foi retirado de slides dos docentes, bibliografia da UC ou projetos de outros alunos e adaptado quando necessário.

:::

:::info[Nota]

As estruturas de dados abordadas em IAED são estruturas clássicas, que qualquer engenheiro informático deve conhecer. Contudo, **não se prendam a elas**! Pode haver uma panóplia de alterações que lhes queiram fazer caso vos dê jeito nalgum algoritmo que queiram implementar, e podem obviamente fazê-lo, nunca sintam que estão presos ao _canon_!

:::

## Lista Simplesmente Ligada (SLL)

[Explicação nos Resumos](/iaed/listas#lista-simplesmente-ligada).

:::details[Lista Simplesmente Ligada]

```c
typedef struct {
  int value;
  struct node *next;
} node;

node *insert_begin(node *head, int number) {
  node *x = malloc(sizeof(node));
  node->value = number;
  if (head != NULL)
    return insert(x, head);
  return x;
}

node *insert_end(node *head, int number) {
  node *x = malloc(sizeof(node));
  node *tail;
  x->value = number;
  if (head == NULL) {
    return x;
  }
  for (tail = head; tail->next != NULL; tail = tail->next);
  insert(x, tail);
  return head; // queremos sempre devolver a head
}

node *insert(node *x, node *t) {
  t->next = x->next;
  x->next = t;
  return x;
}

node *remove(node *x, node *t) {
  t = x->next;
  x->next = t->next;
  free(t);
  return x;
}

int length(node *head) {
  int count = 0;
  node *x = head;
  while (x != NULL) {
    count++;
    x = x->next;
  }
  return count;
}

void print(node *head) {
  node *x = head;
  while (x != NULL) {
    printf("%d\n", x->value);
    x = x->next;
  }
}

node *lookup(node *head, int number) {
  node *t;
  for (t = head; t != NULL; t = t->next) {
    if (t->value == number)
      return t;
  }
  return NULL;
}
```

:::

A lógica associada às listas duplamente ligadas é bastante semelhante, com algumas diferenças: é, claro, guardada a referência para o nó anterior na lista, para além do nó seguinte. Devido a esta propriedade, é possível fazer uma pesquisa para trás e para a frente na lista partindo de qualquer um dos seus nós. Mais ainda, é de utilidade ainda maior agora guardar a **cauda** da lista, para além da **cabeça**, tornando pesquisas pela ordem inversa possíveis. Uma das outras propriedades úteis da cauda passa por **inserir um nó no final da lista** ser feito em tempo constante, $O(1)$.

## Pilha (Stack)

Podemos pensar numa pilha como uma lista ligada onde inserimos **sempre** na cauda e retiramos também **sempre da cauda** - se quisermos aceder ao elemento no fundo da pilha, temos de retirar dela todos os seus elementos. Se for mais fácil, podem pensar na secção análoga de uma pilha de roupa: se querem aceder às calças que estão lá em baixo, têm de tirar tudo o que está em cima.

:::details[Pilha]

```c
#define INITIAL_CAP 100

typedef struct {
  int *elements;  /* conteúdo da stack */
  int cap; /* máximo de elementos que se podem inserir na stack */
  int size;  /* número de elementos atualmente guardados na stack */
} stack;

stack *build() {
  stack *s;
  s = malloc(sizeof(stack));
  s->elements = malloc(sizeof(int) * INITIAL_CAP);
  s->cap = INITIAL_CAP;
  s->size = 0;
  return s;
}

void push(stack *s, int el) {
  if (s->size == s->cap) {
    s->elements = realloc(s->elements, sizeof(int) * (++s->cap));
  }
  s->elements[s->size++] = el;
}

int top(stack *s) {
  return s->elements[s->size - 1];
}

int pop(stack *s) {
  return s->elements[--s->size];
}

int is_empty(stack *s) {
  return s->size == 0;
}

void destroy(stack *s) {
  free(s->elements);
  free(s);
}
```

:::

Existe ainda uma estrutura muito semelhante à pilha, a **fila** - na fila, inserimos também na cauda, mas retiramos **sempre** os elementos da cabeça primeiro. Funciona tal e qual uma fila de supermercado normal, onde as pessoas que chegam vão para o fim da fila e as pessoas mais à frente são atendidas (sem haver aqui, claro, a noção de **prioridade** para idosos ou semelhante). Esta noção de prioridade é abordada muito brevemente quando falamos de amontoados em IAED, e com mais detalhe em ASA.

## Hash Table (Linear Probing)

[Explicação nos Resumos](/iaed/hash-tables#resolução-via-procura-linear-linear-probing).

:::details[Hash Table]

```c
struct node {
  Item item;
  link next;
};

typedef struct node *link;
typedef int Key;
typedef struct number {
  int value;
} *Item;

int M;

link *hash_table_init(int max) {
  int i;
  M = max;
  link *heads = (link *)malloc(M * sizeof(link));
  for (i = 0; i < M; i++)
    heads[i] = NULL;
  return heads;
}

int hash(int value, int M) {
  return value % M;
}

int hash_string(char* v, int size) {
  long int hash, a = 31415, b = 27183;

  for (hash = 0; *v != '\0'; v++, a = a * b % (size - 1)) {
    hash = (a * hash + *v) % size;
  }
  return hash;
}

link new_node(Item item, link next) {
  link x = (link)malloc(sizeof(struct node));

  x->item = item;
  x->next = next;
  return x;
}

void delete_node(link node) {
  deleteItem(node->item);
  free(node);
}

Item get_item(link h) {
  if (h)
    return h->item;
  return NULL;
}

void insert(link *heads, Item item) {
  int i = hash(key(item), M);
  heads[i] = push(heads[i], item);
}

void delete(link *heads, Key k) {
  int i = hash(k, M);
  heads[i] = remove_elem(heads[i], k);
}

Item search(link *heads, Key k) {
  int i = hash(k, M);
  return search_list(heads[i], k);
}

void show_hash(link *heads) {
  int i;
  for (i = 0; i < M; i++) {
    printf("|%d|", i);
    show_list(heads[i]);
  }
}

void destroy_hash(link *heads) {
  int i;
  for (i = 0; i < M; i++)
    destroy_list(heads[i]);
  free(heads);
}
```

:::

## Árvores AVL

[Explicação nos Resumos](/iaed/arvores-binarias#árvores-avl-adelson-velsky-and-landis).

:::details[Árvores AVL]

```c
typedef struct link link_t;

struct link {
  void *value;
  struct link *left;
  struct link *right;
  int height;
};

link_t *init_link(void *value, link_t *left, link_t *right) {
  link_t *new_link = (link_t *)malloc(sizeof(link_t));

  new_link->value = value;
  new_link->left = left;
  new_link->right = right;
  new_link->height = 1;

  return new_link;
}

int height(link_t *link) {
  if (link == NULL)
    return 0;
  return link->height;
}

void update_height(link_t *link) {
  int height_left = height(link->left);
  int height_right = height(link->right);
  if (height_left > height_right)
    link->height = height_left + 1;
  else
    link->height = height_right + 1;
}

link_t *rotL(link_t *link) {
  link_t *x = link->right;
  link->right = x->left;
  x->left = link;

  update_height(link);
  update_height(x);

  return x;
}

link_t *rotR(link_t *link) {
  link_t *x = link->left;
  link->left = x->right;
  x->right = link;

  update_height(link);
  update_height(x);

  return x;
}

link_t *rotLR(link_t *link) {
  if (link == NULL)
    return link;
  link->left = rotL(link->left);
  return rotR(link);
}

link_t *rotRL(link_t *link) {
  if (link == NULL)
    return link;
  link->right = rotR(link->right);
  return rotL(link);
}

int balance_factor(link_t *link) {
  if (link == NULL)
    return 0;
  return height(link->left) - height(link->right);
}

link_t *balance(link_t *link) {
  int bal_factor;
  if (link == NULL)
    return link;
  bal_factor = balance_factor(link);
  if (bal_factor > 1) {
    if (balance_factor(link->left) >= 0)
      link = rotR(link);
    else
      link = rotLR(link);
  }
  else if (bal_factor < -1) {
    if (balance_factor(link->right) <= 0)
      link = rotL(link);
    else
      link = rotRL(link);
  }
  else
    update_height(link);
  return link;
}

link_t *insert_tree(link_t *link, void *value, char *(*key)(void *)) {
  if (link == NULL)
    return init_link(value, NULL, NULL);

  if (strcmp(key(value), key(link->value)) < 0)
    link->left = insert_tree(link->left, value, key);
  else
    link->right = insert_tree(link->right, value, key);
  link = balance(link);
  return link;
}

void *get_link_by_value(link_t *link, char *value, char *(*key)(void *)) {
  int cmp;
  if (link == NULL)
    return NULL;

  cmp = strcmp(value, key(link->value));
  if (cmp == 0)
    return link->value;
  else if (cmp < 0)
    return get_link_by_value(link->left, value, key);
  else
    return get_link_by_value(link->right, value, key);
}

void destroy_tree(link_t *link) {
  if (link == NULL)
    return;
  destroy_tree(link->left);
  destroy_tree(link->right);

  free(link);
}

link_t *max_link(link_t *link) {
  while (link != NULL && link->right != NULL)
    link = link->right;
  return link;
}

link_t *delete_link(link_t *link, char *value, char *(*key)(void *)) {
  int cmp;
  if (link == NULL)
    return link;

  cmp = strcmp(value, key(link->value));
  if (cmp < 0)
      link->left = delete_link(link->left, value, key);
  else if (cmp > 0)
      link->right = delete_link(link->right, value, key);
  else {
    if (link->left != NULL && link->right != NULL) {
      link_t *aux = max_link(link->left);
      swap_variables(&link->value, &aux->value);
      link->left = delete_link(link->left, key(aux->value), key);
    }
    else {
      link_t *aux = link;
      if (link->left == NULL && link->right == NULL)
        link = NULL;
      else if (link->left == NULL)
        link = link->right;
      else
        link = link->left;

      free(aux);
    }
  }
  link = balance(link);
  return link;
}

void traverse_tree(link_t *link, void (*fn)(void *value)) {
  if (link == NULL)
    return;

  traverse_tree(link->left, fn);
  fn(link->value);
  traverse_tree(link->right, fn);
}
```

:::

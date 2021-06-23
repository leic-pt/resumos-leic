#include <stdio.h>
#include <stdlib.h>

typedef struct str_node
{
  struct str_node *next, *previous;
  char c;
} node;

typedef struct
{
  struct str_node *head, *last;
} list;

list *mk_list();                /* cria nova lista vazia */
void free_list(list *l);        /* liberta toda a memoria associada a lista */
void add_last(list *l, char c); /* adiciona o char c como o ultimo elemento da lista */
int is_paly(const list *ls);    /* calcula se a dada lista e um palindromo */

int main()
{
  char c;
  list *list = mk_list();

  while ((c = getchar()) != EOF)
  {
    add_last(list, c);
  }

  printf(is_paly(list) ? "yes\n" : "no\n");

  free_list(list);

  return 0;
}

list *mk_list()
{
  list *new_list = malloc(sizeof(list));

  new_list->head = NULL;
  new_list->last = NULL;

  return new_list;
}

void free_list(list *l)
{
  while (l->head != NULL)
  {
    node *next = l->head->next;
    free(l->head);
    l->head = next;
  }
  free(l);
}

void add_last(list *l, char c)
{
  node *new_node = malloc(sizeof(node));

  new_node->c = c;
  new_node->previous = l->last;
  new_node->next = NULL;
  if (l->last != NULL)
  {
    /* if list is not empty */
    l->last->next = new_node;
  }
  else
  {
    /* if list is empty */
    l->head = new_node;
  }

  l->last = new_node;
}

int is_paly(const list *ls)
{
  node *next, *prev;

  next = ls->head;
  prev = ls->last;

  while (next != NULL && prev != NULL)
  {
    if (next->c != prev->c)
      return 0;
    next = next->next;
    prev = prev->previous;
  }

  return next == prev; /* check if both are NULL or not */
}

#include <stdio.h>
#include <stdlib.h>

typedef struct stru_node
{
  struct stru_node *next;
  char v;
} node;

/* remove the first element of the list and return the new head */
node *pop(node *head);
/* add integer e as the first element of the list and return the new head */
node *push(node *head, char e);
/* frees all memory associated with the list and returns NULL */
node *destroy(node *head);
/* compara duas listas */
int is_eq(node *h1, node *h2);
/* devolve uma nova lista que corresponda a lista dada invertida */
node *rev(node *head);

int main()
{
  char c;
  node *list = NULL, *rev_list = NULL;

  while ((c = getchar()) != EOF)
  {
    list = push(list, c);
  }

  rev_list = rev(list);
  printf(is_eq(list, rev_list) ? "yes\n" : "no\n");
  destroy(list);
  destroy(rev_list);

  return 0;
}

node *pop(node *head)
{
  node *next = head->next;
  free(head);
  return next;
}

node *push(node *head, char e)
{
  node *new_head = malloc(sizeof(node));

  new_head->v = e;
  new_head->next = head;

  return new_head;
}

node *destroy(node *head)
{
  while (head != NULL)
  {
    head = pop(head);
  }
  return head;
}

int is_eq(node *h1, node *h2)
{
  while (h1 != NULL && h2 != NULL)
  {
    if (h1->v != h2->v)
      return 0;
    h1 = h1->next;
    h2 = h2->next;
  }
  return h1 == h2; /* compare if both are NULL or not */
}

node *rev(node *head)
{
  node *new_head = NULL;
  while (head != NULL)
  {
    new_head = push(new_head, head->v);
    head = head->next;
  }
  return new_head;
}

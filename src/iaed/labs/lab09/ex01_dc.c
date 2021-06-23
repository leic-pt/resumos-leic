#include <stdio.h>
#include <stdlib.h>

typedef struct stru_node
{
  struct stru_node *next;
  int v;
} node;

/* remove the first element of the list and return the new head */
node *pop(node *head);
/* add integer e as the first element of the list and return the new head */
node *push(node *head, int e);
/* frees all memory associated with the list and returns NULL */
node *destroy(node *head);
/* print the elements of the integers in the list, one per line */
void print(node *head);

int main()
{
  int i;
  node *list = NULL;

  do
  {
    scanf("%d", &i);

    if (i == 0)
      break;

    list = push(list, i);

  } while (i != 0);

  print(list);

  destroy(list);

  return 0;
}

node *pop(node *head)
{
  node *next = head->next;
  free(head);
  return next;
}

node *push(node *head, int e)
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

void print(node *head)
{
  while (head != NULL)
  {
    printf("%d\n", head->v);
    head = head->next;
  }
}

#include <stdio.h>
#include <stdlib.h>

#define MAX_LENGTH 100
#define SUM '+'
#define SUBTRACT '-'
#define MULTIPLY '*'
#define DIVIDE '/'
#define IS_OPERATOR(A) A == SUM || A == SUBTRACT || A == MULTIPLY || A == DIVIDE

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
  char s[MAX_LENGTH];
  node *list = NULL;

  while (scanf("%s", s) == 1)
  {
    if (IS_OPERATOR(s[0]))
    {
      int n1, n2, result;
      n2 = list->v;
      list = pop(list);
      n1 = list->v;
      list = pop(list);

      if (s[0] == SUM)
        result = n1 + n2;
      else if (s[0] == SUBTRACT)
        result = n1 - n2;
      else if (s[0] == MULTIPLY)
        result = n1 * n2;
      else if (s[0] == DIVIDE)
        result = n1 / n2;

      list = push(list, result);
    }
    else
    {
      list = push(list, atoi(s));
    }
  }

  printf("%d\n", list->v);

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

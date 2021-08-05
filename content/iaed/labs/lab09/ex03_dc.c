#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define STOP_STRING "x"
#define MAX_LENGTH 1000

typedef struct stru_node
{
  struct stru_node *next;
  char *s;
} node;

/* remove the first element of the list and return the new head */
node *pop(node *head);
/* add integer e as the first element of the list and return the new head */
node *push(node *head, char *s);
/* frees all memory associated with the list and returns NULL */
node *destroy(node *head);
/* print the elements of the integers in the list, one per line */
void print(node *head);

int main()
{
  char s[MAX_LENGTH];
  node *list = NULL;

  while (scanf("%s", s) == 1 && strcmp(s, STOP_STRING) != 0)
  {
    list = push(list, s);
  }

  print(list);

  destroy(list);

  return 0;
}

node *pop(node *head)
{
  node *next = head->next;
  free(head->s);
  free(head);
  return next;
}

node *push(node *head, char *s)
{
  node *new_head = malloc(sizeof(node));
  char *new_str = malloc(sizeof(char) * (strlen(s) + 1));
  strcpy(new_str, s);

  new_head->s = new_str;
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
    printf("%s\n", head->s);
    head = head->next;
  }
}

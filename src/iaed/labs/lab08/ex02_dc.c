#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_WORD_LENGTH 1000
#define MAX_WORD_COUNT 10000

int main()
{
  int count = 0, i;
  char buffer[MAX_WORD_LENGTH];
  char **word_list = 0;

  while (scanf("%s", buffer) == 1)
  {
    word_list = realloc(word_list, (count + 1) * sizeof(char *));
    word_list[count] = malloc(sizeof(char) * (strlen(buffer) + 1));
    strcpy(word_list[count], buffer);
    count++;
  }

  for (i = count - 1; i >= 0; --i)
  {
    printf("%s\n", word_list[i]);
    free(word_list[i]);
  }

  free(word_list);

  return 0;
}
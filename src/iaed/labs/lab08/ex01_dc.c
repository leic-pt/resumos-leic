#include <stdio.h>

#define MAX 1000

int main()
{
  int i = 0;
  char str[MAX];
  scanf("%s\n", str);

  while (str[i] != '\0')
    printf("%s\n", str + i++);

  return 0;
}

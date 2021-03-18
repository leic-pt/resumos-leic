#include <stdio.h>

#define MAX 100

int main()
{
  char n1[MAX], n2[MAX];
  int i;
  int res = 0; /* 0 -> primeiro numero, 1 -> segundo numero */

  scanf("%s%s", n1, n2);

  for (i = 0; i < MAX; ++i)
  {
    if (n1[i] == '\0') /* final do numero */
      break;
    if (n2[i] > n1[i])
    {
      res = 1;
      break;
    }
  }

  printf("%s\n", res == 0 ? n1 : n2);

  return 0;
}
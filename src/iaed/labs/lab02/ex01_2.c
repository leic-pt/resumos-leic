#include <stdio.h>

int main()
{
  int max, i, n;

  scanf("%d", &max);
  for (i = 0; i < 2; i++)
  {
    scanf("%d", &n);
    if (n > max)
      max = n;
  }

  printf("%d\n", max);
  return 0;
}
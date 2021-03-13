#include <stdio.h>

void quadrado(int n)
{
  int i, j;

  for (i = 1; i <= n; ++i)
  {
    for (j = i; j < i + n - 1; ++j)
      printf("%d\t", j);
    printf("%d\n", i + n - 1);
  }
}

int main()
{
  int n;
  scanf("%d", &n);

  quadrado(n);

  return 0;
}

#include <stdio.h>

int main()
{
  int n, i, count = 1;
  scanf("%d", &n);

  for (i = 2; i <= n; ++i)
    if (n % i == 0)
      ++count;

  printf("%d\n", count);

  return 0;
}

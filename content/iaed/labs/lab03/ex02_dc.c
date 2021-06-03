#include <stdio.h>

void piramide(int n)
{
  int i, j, spaces;

  for (i = 0; i < n; ++i)
  {
    spaces = n - 1 - i;
    for (j = 0; j < spaces; ++j)
      printf("  ");

    for (j = 0; j < i; ++j)
      printf("%d ", j + 1);
    for (j = i; j > 0; --j)
      printf("%d ", j + 1);
    printf("1\n");
  }
}

int main()
{
  int n;
  scanf("%d", &n);

  piramide(n);

  return 0;
}
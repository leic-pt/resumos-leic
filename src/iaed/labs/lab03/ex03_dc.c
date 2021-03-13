#include <stdio.h>

void linha_cruz(int n, int border)
{
  int j;

  for (j = 0; j < n - 1; ++j)
    printf(j == border || n - j - 1 == border ? "* " : "- ");
  printf(border == 0 ? "*\n" : "-\n");
}

void cruz(int n)
{
  int i;

  for (i = 0; i < n / 2; ++i)
    linha_cruz(n, i);
  if (n % 2 == 1)
    linha_cruz(n, n / 2);
  for (; i > 0; --i)
    linha_cruz(n, i - 1);
}

int main()
{
  int n;
  scanf("%d", &n);

  cruz(n);

  return 0;
}
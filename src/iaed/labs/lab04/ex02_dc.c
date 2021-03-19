#include <stdio.h>

#define VECMAX 100

int main()
{
  int n, i, j, max = 0;
  int vec[VECMAX];

  scanf("%d", &n);

  for (i = 0; i < n; ++i)
  {
    scanf("%d", &vec[i]);
    if (vec[i] > max)
      max = vec[i];
  }

  for (i = 0; i < max; ++i)
  {
    for (j = 0; j < n; ++j)
      printf(vec[j] > i ? "*" : " ");
    printf("\n");
  }

  return 0;
}
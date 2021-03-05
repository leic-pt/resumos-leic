#include <stdio.h>

int main()
{
  int n, i;
  float maior, menor;
  float k;

  scanf("%d", &n);
  scanf("%f", &maior);
  menor = maior;

  for (i = 1; i < n; ++i)
  {
    scanf("%f", &k);
    if (k < menor)
      menor = k;
    if (k > maior)
      maior = k;
  }

  printf("min: %f, max: %f\n", menor, maior);

  return 0;
}

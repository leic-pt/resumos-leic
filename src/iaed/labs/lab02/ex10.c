#include <stdio.h>

int main()
{
  int n, digit, digits = 0, sum = 0;

  scanf("%d", &n);

  while (n > 0)
  {
    digit = n % 10;
    n /= 10;
    sum += digit;
    ++digits;
  }

  printf("%d\n%d\n", digits, sum);

  return 0;
}
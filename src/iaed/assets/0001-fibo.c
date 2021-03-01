#include <stdio.h>

typedef long long int int_t;

int_t fib(int_t n)
{
  if (n == 0)
    return 0;
  else if (n == 1)
    return 1;
  else
    return fib(n - 1) + fib(n - 2);
}

int main(int argc, char **argv)
{
  int n = atoi(argv[1]);

  printf("fib (%d) = %lli\n", n, fib(n));

  return 0;
}
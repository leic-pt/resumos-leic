#include <stdio.h>

int main()
{
  /* Operator: 0 -> '+'; 1 -> '-' */
  int result = 0, state = 0, current = 0;
  char c;

  while ((c = getchar()) != EOF)
  {
    if (c == '+' || c == '-')
    {
      result = state == 0 ? result + current : result - current;
      state = c != '+';
      current = 0;
    }
    else if (c >= '0' && c <= '9')
    {
      current = current * 10 + (c - '0');
    }
  }

  result = state == 0 ? result + current : result - current;

  printf("%d\n", result);

  return 0;
}
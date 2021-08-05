#include <stdio.h>

int main()
{
  int state = 0;
  char c;

  while ((c = getchar()) != EOF)
  {
    if (c == ' ' || c == '\n')
    {
      if (state == 0)
        putchar('0');
      state = 0;
    }
    else if (state == 0)
    {
      if (c == '0')
        continue;
      state = 1;
    }
    putchar(c);
  }

  if (state == 0)
    putchar('0');

  return 0;
}
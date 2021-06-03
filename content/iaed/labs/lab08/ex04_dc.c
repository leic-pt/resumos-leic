#include <stdio.h>

#define IS_OPENING(A) A == '(' || A == '[' || A == '{'
#define IS_CLOSING(A) A == ')' || A == ']' || A == '}'

int main()
{
  char c;
  stack *s = build();

  while ((c = getchar()) != EOF)
  {
    if (IS_OPENING(c))
    {
      push(s, c);
    }
    else if (IS_CLOSING(c))
    {
      char matching = c == ')' ? '(' : c == ']' ? '['
                                                : '{';
      if (matching != pop(s))
      {
        printf("no\n");
        return 0;
      }
    }
  }

  printf(is_empty(s) ? "yes\n" : "no\n");
  return 0;
}

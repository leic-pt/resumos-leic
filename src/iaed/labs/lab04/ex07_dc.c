#include <stdio.h>

#define MAX 80

void apagaCaracter(char s[], char c);

int main()
{
  char s[MAX];
  char c;

  fgets(s, MAX, stdin);
  scanf("%c", &c);

  apagaCaracter(s, c);

  printf("%s", s);

  return 0;
}

void apagaCaracter(char s[], char c)
{
  int read_i = 0, write_i = 0;
  char c2;
  while ((c2 = s[read_i++]) != '\0')
    if (c2 != c)
      s[write_i++] = c2;
  s[write_i] = '\0';
}
#include <stdio.h>

int main()
{
    int c, n;

    n = 0;

    while ((c = getchar()) != EOF) {
        if (c >= '0' && c <= '9')
            n += c - '0';
    }

    printf(n % 9 == 0 ? "yes\n" : "no\n");
    return 0;
}

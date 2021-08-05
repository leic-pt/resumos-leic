#include <stdio.h>

int main()
{
    int c, n, final, in, neg;

    n = 0;
    final = 0;
    in = 0;
    neg = 0;

    while ((c = getchar()) != EOF) {

        if (c >= '0' && c <= '9') {
            if (!in)
                in = 1;
            n = 10 * n + (c - '0');
        }

        if (!in && c == '-')
            neg = 1;

        if (in && (c < '0' || c > '9')) {
            in = 0;

            if (neg) {
                final -= n;
                neg = 0;
            } else {
                final += n;
            }

            n = 0;
        }
    }

    printf("%d\n", final);
    return 0;
}

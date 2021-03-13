#include <stdio.h>

int main()
{
    int c, write, in;

    write = 0;
    in = 0;

    while ((c = getchar()) != EOF) {
        if (!in && c >= '0' && c <= '9')
            in = 1;

        if (in && !write && c >= '1' && c <= '9')
            write = 1;

        if (in && c == ' ') {
            if (!write)
                putchar('0');

            putchar(' ');
            write = 0;
            in = 0;
        }

        if (write)
            putchar(c);
    }

    if (in && !write)
        putchar('0');

    return 0;
}

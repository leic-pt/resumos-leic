#include <stdio.h>

int main()
{
    int c, ignore, in;

    ignore = 0;
    in = 0;

    while ((c = getchar()) != EOF) {

        if (!ignore && c == '"') {
            in = !in;
            if (!in)
                putchar('\n');
        } else if (!ignore && c == '\\') {
            ignore = 1;
        } else if (in) {
            ignore = 0;
            putchar(c);
        } else {
            ignore = 0;
        }

    }
    return 0;
}

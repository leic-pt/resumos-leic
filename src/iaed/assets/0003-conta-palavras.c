#include <stdio.h>

#define FORA 0
#define DENTRO 1

int main ()
{
    int c, np = 0, nc = 0, estado = FORA;
    while ((c = getchar()) != EOF) {
        ++nc;
        if (c == ' ' || c == '\n' || c == '\t')
            estado = FORA;
        else if (estado == FORA) {
            estado = DENTRO;
            ++np;
        }
    }
    printf("%d %d\n", np, nc);
    return 0;
}
#include <stdio.h>

/* Copia inteiros do input para output */

int main ()
{
    int v;

    scanf(“%d”, &v);
    while (v >= 0){
        printf(“%d\n”, v);
        scanf(“%d”, &v);
    }
    return 0;
}
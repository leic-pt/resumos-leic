#include <stdio.h>

/* Copia inteiros do input para output */

int main ()
{
    int v;
    long contador;

    contador = 0;
    scanf(“%d”, &v);
    while (v >= 0){
        printf(“%d\n”, v);
        contador++;
        scanf(“%d”, &v);
    }
    printf("%ld\n", contador);
    return 0;
}
#include <stdio.h>
/* Objectivo: vamos pedir um inteiro ao utilizador e devolver o
    quadrado desse numero */
int main ()
{
    int x;
    printf(“Introduza um valor inteiro:\n”);
    scanf(“%d”,&x);
    printf(“O quadrado de %d é %d\n”, x, x*x);
    return 0;
}
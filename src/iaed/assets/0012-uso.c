#include <stdio.h>
int main()
{
    int y, x = 1;
    int *px;

    px = &x; /*px guarda o endereço de x*/
    y = *px; /*y toma o valor gurdado no endereco de memoria px*/
    *px = 0; /*alteramos o valor de x para 0*/
    printf("%d %d\n", x, y);
    /*output: 0 1*/
    return 0;
}
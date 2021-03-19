#include <stdio.h>

int main ()
{
    int i;
    int tab[10];

    for (i = 0; i < 10; i++)
        tab[i] = 2*i;
        
    for (i = 0; i < 10; i++)
        printf("%d\n", tab[i]);

    return 0;
}

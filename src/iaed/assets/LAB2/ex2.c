#include <stdio.h>

int main()
{
    int n, m;

    printf("Escreva dois numeros inteiros\n");
    scanf("%d%d", &n, &m);
    if (m < n)
    {
        printf("%d\n", m);
        printf("%d\n", n);
    }
    else
    {
        printf("%d\n", n);
        printf("%d\n", m);
    }
    return 0;
}
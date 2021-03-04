#include <stdio.h>

int main()
{
    int n, m;

    printf("Escreva dois numeros inteiros\n");
    scanf("%d%d", &n, &m);
    if (n % m == 0)
    {
        printf("yes");
    }
    else
    {
        printf("no");
    }
    return 0;
}
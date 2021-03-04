#include <stdio.h>

int main()
{
    int n, i, j;
    float min, max;

    printf("Escreva um numero inteiro\n");
    scanf("%d", &n);
    printf("Escreva %d numeros inteiros\n", n);
    scanf("%d", &j);
    max, min = j;
    for (i = 1; i < n; i++)
    {
        scanf("%d", &j);
        if (j < min)
        {
            min = j;
        }
        else if (j > max)
        {
            max = j;
        }
    }
    printf("min: %f, max: %f\n", min, max);
    return 0;
}

#include <stdio.h>

int main()
{
    int n, i;
    float j, media, count;

    printf("Escreva um numero inteiro\n");
    scanf("%d", &n);
    printf("Escreva %d numeros\n", n);

    for (i = 0; i < n; i++)
    {
        scanf("%f", &j);
        count += j;
    }
    media = count / n;
    printf("%.2f\n", media);
    return 0;
}

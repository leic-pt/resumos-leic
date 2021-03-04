#include <stdio.h>

int main()
{
    int n, sum, count;
    count = 0;
    sum = 0;
    printf("Escreva um inteiro positivo:\n");
    scanf("%d", &n);
    while (n != 0)
    {
        sum += (n % 10);
        count++;
        n = n / 10;
    }
    printf("%d digitos\n", count);
    printf("a sua soma e: %d\n", sum);
    return 0;
}

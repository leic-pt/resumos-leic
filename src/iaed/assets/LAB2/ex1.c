#include <stdio.h>
#include <math.h>

int main()
{
    int max, n, i;
    max = -INFINITY;
    for (i = 0; i < 3; i++)
    {
        printf("Introduza um valor inteiro:\n");
        scanf("%d", &n);
        if (n > max)
        {
            max = n;
        }
    }
    printf("O maior valor e: %d", max);
    return 0;
}

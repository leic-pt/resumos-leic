#include <stdio.h>

void quadrado(int N)
{
    int i, j;
    for (i = 0; i < N; i++) {
        for (j = 0; j < N; j++) {
            printf("%d", j + i + 1);
            if (j < N - 1)
                printf("\t");
        }
        printf("\n");
    }
}

int main()
{
    int n;
    scanf("%d", &n);
    quadrado(n);
    return 0;
}

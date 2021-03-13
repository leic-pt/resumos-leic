#include <stdio.h>

void cruz(int N)
{
    int i, j;
    for (i = 0; i < N; i++) {
        for (j = 0; j < N; j++) {
            printf(i - j == 0 || i + j == N - 1 ? "*" : "-");

            if (j < N - 1)
                printf(" ");
        }
        printf("\n");
    }
}

int main()
{
    int n;
    scanf("%d", &n);
    cruz(n);
    return 0;
}

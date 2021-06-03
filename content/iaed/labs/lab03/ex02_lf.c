#include <stdio.h>

void piramide(int N)
{
    int i, j;
    for (i = 1; i <= N; i++) {
        for (j = 1; j < N + i; j++) {
            if (j + i > N)
                printf("%d", i + (j <= N ? j - N : N - j));
            else
                printf(" ");

            if (j < N + i - 1)
                printf(" ");
        }
        printf("\n");
    }
}

int main()
{
    int n;
    scanf("%d", &n);
    piramide(n);
    return 0;
}

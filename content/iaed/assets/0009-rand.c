#include <stdio.h>
#include <stdlib.h>
#define N 10000
int main()
{
    int i, a[N];
    for (i = 0; i < N; i++) /*lista com N numeros aleartórios*/
        a[i] = 1000 * (1.0 * rand() / RAND_MAX);
    sort(a, 0, N - 1); /*temos de definir a função sort*/
    for (i = 0; i < N; i++)
        printf("%3d ", a[i]);
    printf("\n");
    return 0;
}

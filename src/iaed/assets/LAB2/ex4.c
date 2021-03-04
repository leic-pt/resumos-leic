#include <stdio.h>

int main()
{
    int n, m, j, temp;

    printf("Escreva tres numeros inteiros\n");
    scanf("%d%d%d", &n, &m, &j);

    if (n > m)
    {
        temp = n;
        n = m;
        m = temp;
    }
    if (n > j)
    {
        temp = n;
        n = j;
        j = temp;
    }
    if (m > j)
    {
        temp = m;
        m = j;
        j = temp;
    }
    printf("%d %d %d", n, m, j);
    return 0;
}

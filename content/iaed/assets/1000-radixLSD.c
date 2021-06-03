#include <stdio.h>

typedef int Item;
#define key(A) (A)
#define maxN 1000000
#define bitsword 32
#define bitsbyte 8
#define bytesword 4
#define digit(n, w) (0xff & ((n) >> ((bytesword - (w)-1) << 3)))
#define nbit(n, w) (0x01 & ((n) >> (bitsword - (w)-1)))
/* Numero de valores possiveis para um digito */
#define R (1 << bitsbyte)

Item aux[maxN];

void radixLSD(Item a[], int l, int r)
{
    int i, j, w, count[R + 1];
    for (w = bytesword - 1; w >= 0; w--)
    {
        /* Counting sort para o digito w */
        for (j = 0; j < R; j++)
            count[j] = 0;
        for (i = l; i <= r; i++)
            count[digit(a[i], w) + 1]++;
        for (j = 1; j < R; j++)
            count[j] += count[j - 1];
        for (i = l; i <= r; i++)
            aux[count[digit(a[i], w)]++] = a[i];
        for (i = l; i <= r; i++)
            a[i] = aux[i - l];
    }
}
int main()
{
    int i;
    int lista[10] = {4, 8, 10, 47, 11, 12, 11, 7, 5, 0};
    radixLSD(lista, 0, 9);
    for (i = 0; i < 10; i++)
    {
        printf("%d ", lista[i]);
    }
    printf("\n");
    return 0;
}
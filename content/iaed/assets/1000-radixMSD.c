#include <stdio.h>

typedef int Item;
#define DIM 10
#define key(A) (A)
#define key(A) (A)
#define less(A, B) (key(A) < key(B))
#define exch(A, B)  \
    {               \
        Item t = A; \
        A = B;      \
        B = t;      \
    }
#define compexch(A, B) \
    if (less(B, A))    \
    exch(A, B)
#define maxN 1000000
#define bitsword 32
#define bitsbyte 8
#define bytesword 4
#define digit(n, w) (0xff & ((n) >> ((bytesword - (w)-1) << 3)))
#define nbit(n, w) (0x01 & ((n) >> (bitsword - (w)-1)))
/* Numero de valores possiveis para um digito */
#define R (1 << bitsbyte)
#define bin(A) l + count[A]
#define QM 10

Item aux[maxN];

void insertion(Item a[], int l, int r)
{
    int i;
    /* Coloca o menor elemento na primeira posicao */
    for (i = l + 1; i <= r; i++)
        compexch(a[l], a[i]);
    for (i = l + 2; i <= r; i++)
    {
        int j = i;
        /* Variavel auxiliar para guardar o valor a[i] */
        Item v = a[i];
        /* Enquanto v < a[j] puxar os valores para a direita */
        /* Como o primeiro elemento e o menor podemos omitir a condicao j>=l */
        while (less(v, a[j - 1]))
        {
            a[j] = a[j - 1];
            j--;
        }
        /* Guardar o valor originalmente na posicao i na posicao libertada */
        a[j] = v;
    }
}

void radixMSD(Item a[], int l, int r, int w)
{
    int i, j, count[R + 1];
    if (w > bytesword)
        return;
    /* Optimizacao */
    if (r - l <= QM)
    {
        insertion(a, l, r);
        return;
    }
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
    /* Os bins denotam as caixas discutidas acima */
    radixMSD(a, l, bin(0) - 1, w + 1);
    for (j = 0; j < R - 1; j++)
        radixMSD(a, bin(j), bin(j + 1) - 1, w + 1);
}

int main()
{
    int i;
    Item a[DIM] = {34, 67, 36, 23, 10, 78, 2, 31, 32, 50};
    printf("inical:      ");
    for (i = 0; i < DIM; ++i)
        printf("%d ", a[i]);
    printf("\n\n");
    radixMSD(a, 0, 9, 0);
    printf("\n");
    printf("final:       ");
    for (i = 0; i < DIM; ++i)
        printf("%d ", a[i]);
    printf("\n");
    return 0;
}
#include <stdio.h>

#define DIM 10
#define ITERATION 3 /*mudar o numeros de iteracoes*/

typedef int Item;

#define key(A) A
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

void SelectionSort(int a[], int left, int right);

int main()
{
    int i;
    Item a[DIM] = {20, 11, 16, 8, 21, 12, 10, 14, 17, 6};
    printf("inical:      ");
    for (i = 0; i < DIM; ++i)
        printf("%d ", a[i]);
    printf("\n\n");

    SelectionSort(a, 0, 9);

    printf("\n");
    printf("final:       ");
    for (i = 0; i < DIM; ++i)
        printf("%d ", a[i]);
    printf("\n");
    return 0;
}

void SelectionSort(int a[], int left, int right)
{
    int i, j;
    for (i = left; i < ITERATION; i++)
    {
        int aux, min = i;
        for (j = i + 1; j <= right; j++) /*procura o menor*/
            if (a[j] < a[min])
                min = j;

        aux = a[i]; /*troca elementos*/
        a[i] = a[min];
        a[min] = aux;
        printf("iteracao #%d: ", i + 1);
        for (j = 0; j < DIM; ++j)
            printf("%d ", a[j]);
        printf("\n");
    }
}
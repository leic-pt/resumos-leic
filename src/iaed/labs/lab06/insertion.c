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

void insertion(Item a[], int left, int right);

int main()
{
    int i;
    Item a[DIM] = {20, 11, 16, 8, 21, 12, 10, 14, 17, 6};
    printf("inicial:      ");
    for (i = 0; i < DIM; ++i)
        printf("%d ", a[i]);
    printf("\n\n");
    insertion(a, 0, 9);
    printf("\n");
    printf("final:       ");
    for (i = 0; i < DIM; ++i)
        printf("%d ", a[i]);
    printf("\n");
    return 0;
}

void insertion(Item a[], int left, int right)
{
    int i, j;
    for (i = left + 1; i <= ITERATION; i++)
    {
        Item v = a[i]; /*var auxiliar para guardar o valor de a[i]*/
        j = i - 1;
        while (j >= left && less(v, a[j])) /*percorrer o vetor até encontrar o elemento menor que v*/
        {
            a[j + 1] = a[j]; /*percorrer uma casa para a direita */
            j--;
        }
        a[j + 1] = v; /*guarda o valor na casa acima ao valor menor */
        printf("iteracao #%d: ", i);
        for (j = 0; j < DIM; ++j)
            printf("%d ", a[j]);
        printf("\n");
    }
}
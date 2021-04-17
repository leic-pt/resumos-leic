#include <stdio.h>

#define DIM 10

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

void quicksort(Item a[], int left, int right);
int partition(Item a[], int left, int right);
int x = 0;
int y = DIM - 1;

/*13, 6, 5, 14, 12, 4, 16, 18, 7, 9, 10*/
/*0,20, 11, 16, 9, 12, 14, 17, 19, 13, 15*/
int main()
{
    int i;
    Item a[DIM] = {20, 11, 16, 9, 12, 14, 17, 19, 13, 15};
    printf("inical:      ");
    for (i = 0; i < DIM; ++i)
        printf("%d ", a[i]);
    printf("\n\n");
    quicksort(a, 0, y);
    printf("\n");
    printf("final:       ");
    for (i = 0; i < DIM; ++i)
        printf("%d ", a[i]);
    printf("\n");
    return 0;
}

void quicksort(Item a[], int left, int right)
{
    int i;
    int m;
    if (right <= left)
    {
        return;
    }

    i = partition(a, left, right);
    if (left == x && right == y)
    {
        printf("\n");
        for (m = 0; m < DIM; ++m)

            printf("%d ", a[m]);
        printf("\n");
    }

    quicksort(a, left, i - 1);

    quicksort(a, i + 1, right);
}

int partition(Item a[], int left, int right)
{
    int i = left - 1;
    int j = right;
    int m;

    Item v = a[right];
    while (i < j)
    {
        while (less(a[++i], v))
            ;
        while (less(v, a[--j]))
            if (j == left)
            {

                break;
            }
        if (i < j)
        {
            exch(a[i], a[j]);
            if (left == x && right == y)
            {
                for (m = 0; m < DIM; ++m)
                    printf("%d ", a[m]);
                printf("||| %d troca com %d", a[i], a[j]);
                printf("\n");
            }
        }
    }
    exch(a[i], a[right]);
    if (left == x && right == y)
    {
        for (m = 0; m < DIM; ++m)
            printf("%d ", a[m]);
        printf("||| %d troca com %d", a[i], a[right]);
        printf("\n");
    }

    return i;
}

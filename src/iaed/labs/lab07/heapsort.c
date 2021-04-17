#include <stdio.h>

#define DIM 10
#define ITERATION 5 /*mudar o numeros de iteracoes*/

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

void buildheap(Item a[], int l, int r);
void fixDown(Item a[], int l, int r, int k);
void heapsort(Item a[], int l, int r);
int parent(int k);
int left(int k);
int right(int k);

/*20, 11, 16, 9, 12, 14, 17, 19, 13, 15*/
/*0,0,25, 19, 23, 15, 18, 16, 21, 12*/
int main()
{
    int i;
    Item a[DIM] = {20, 11, 16, 9, 12, 14, 17, 19, 13, 15};
    printf("inical:      ");
    for (i = 0; i < DIM; ++i)
        printf("%d ", a[i]);
    printf("\n\n");
    heapsort(a, 0, 9);
    printf("\n");
    printf("final:       ");
    for (i = 0; i < DIM; ++i)
        printf("%d ", a[i]);
    printf("\n");
    return 0;
}

void heapsort(Item a[], int l, int r)
{
    int m;
    int n = 0;
    buildheap(a, l, r);

    for (m = 0; m < DIM; ++m)

        printf("%d ", a[m]);
    printf("\n\n");

    while (r - l > 0)
    {
        exch(a[l], a[r]);
        fixDown(a, l, --r, l);
        if (n++ < 2)
        {
            for (m = 0; m < DIM; ++m)

                printf("%d ", a[m]);
            printf("\n");
        }
    }
}

void buildheap(Item a[], int l, int r)
{
    int k, heapsize = r - l + 1;
    for (k = heapsize / 2 - 1; k >= l; k--)
        fixDown(a, l, r, l + k);
}

void fixDown(Item a[], int l, int r, int k)
{
    int ileft, iright, largest = k;
    ileft = l + left(k - l);
    iright = l + right(k - l);
    if (ileft <= r && less(a[largest], a[ileft]))
        largest = ileft;
    if (iright <= r && less(a[largest], a[iright]))
        largest = iright;
    if (largest != k)
    {
        exch(a[k], a[largest]);
        fixDown(a, l, r, largest);
    }
}

int parent(int k)
{
    return ((k + 1) / 2) - 1;
}

int left(int k)
{
    return 2 * k + 1;
}

int right(int k)
{
    return 2 * (k + 1);
}
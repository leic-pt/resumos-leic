#include <stdio.h>
int main()
{
    int a[6] = {1, 2, 7, 0, 11, 6};
    int *pa = a;
    printf("%d %d %d\n", a[2], *(a + 2), *(pa + 2));
    /*o output vai ser 7 7 7*/
    /*Logo aquelas expressões são equivalentes*/
    return 0;
}
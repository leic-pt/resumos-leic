#include <stdio.h>
#include <stdlib.h>
int *CriaVectorInt(int tamanho)
{
    int *v, i;
    v = (int *)malloc(tamanho * sizeof(int));
    for (i = 0; i < tamanho; i++)
        v[i] = 0;
    return v;
}

int main()
{
    int *vec, t;
    puts("introduza o numero de elementos\n");
    scanf("%d", &t);
    vec = CriaVectorInt(t);
    /* faço qq coisa com o vec */
    free(vec);
    puts("introduza o numero de elementos\n");
    scanf("%d", &t);
    vec = CriaVectorInt(t);
    /* faço qq coisa com o vec */
    free(vec);
    return 0;
}
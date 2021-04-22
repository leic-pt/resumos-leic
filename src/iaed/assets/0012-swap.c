void swap(int a, int b) /*nao existe troca fora da função*/
{
    int aux;
    aux = a;
    a = b;
    b = aux;
}

void swap(int *a, int *b) /*existe troca dentro e fora da função*/
{
    int aux;
    aux = *a;
    *a = *b;
    *b = aux;
}
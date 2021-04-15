void mergesort(Item a[], int left, int right)
{
    int m = (right + left) / 2;
    if (right <= left)
        return;
    mergesort(a, left, m);
    mergesort(a, m + 1, right);
    merge(a, left, m, right);
}

Item aux[maxN];

void merge(Item a[], int left, int m, int right)
{
    int i, j, k;
    for (i = m + 1; i > left; i--)
        aux[i - 1] = a[i - 1];
    for (j = m; j < right; j++)
        aux[right + m - j] = a[j + 1];
    for (k = left; k <= right; k++)
        if (less(aux[j], aux[i]) || i == m + 1)
            a[k] = aux[j--];
        else
            a[k] = aux[i++];
}

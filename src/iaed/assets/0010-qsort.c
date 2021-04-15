void quicksort(Item a[], int left, int right)
{
    int i;
    if (right <= left)
        return;
    i = partition(a, left, right);
    quicksort(a, left, i - 1);
    quicksort(a, i + 1, right);
}

int partition(Item a[], int left, int right)
{
    int i = left - 1 int j = right;
    Item v = a[right];
    while (i < j)
    {
        while (less(a[++i], v))
            ;
        while (less(v, a[--j]))
            if (j == l)
                break;
        if (i < j)
            exch(a[i], a[j]);
    }
    exch(a[i], a[right]);
    return i;
}

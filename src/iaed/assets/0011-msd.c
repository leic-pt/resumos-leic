void quicksortB(int a[], int l, int r, int w)
{
    int i = l, j = r;
    if (r <= l || w > bitsword)
        return;
    while (j != i)
    {
        while (digit(a[i], w) == 0 && (i < j))
            i++;
        while (digit(a[j], w) == 1 && (j > i))
            j--;
        exch(a[i], a[j]);
    }
    if (digit(a[r], w) == 0)
        j++;
    quicksortB(a, l, j - 1, w + 1);
    quicksortB(a, j, r, w + 1);
}

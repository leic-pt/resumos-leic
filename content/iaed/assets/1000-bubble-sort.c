void bubble(Item a[], int left, int right)
{
    int i, j;
    for (i = left; i < right; ++i)
    {
        for (j = left; j < right + (left - i); j++)
            compexch(a[j], a[j + 1]);
    }
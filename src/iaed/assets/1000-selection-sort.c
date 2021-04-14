void selection(Item a[], int left, int right)
{
    int i, j;

    for (i = left; i < right; i++)
    {
        int min = i;
        for (j = i + 1; j <= right; j++)
            if (less(a[j], a[min]))
                min = j;

        exch(a[i], a[min]);
    }
}